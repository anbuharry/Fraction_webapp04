from fastapi import FastAPI, applications
from uvicorn import run
from fastapi import FastAPI, Request, Response
from connection import redis_cache
from hash import r
import pandas as pd
from fastapi.middleware.cors import CORSMiddleware

origins = [
        "http://localhost:3000",
        "http://localhost:3001",
        "http://localhost:3002",
        "http://localhost:3003",

]
app = FastAPI(title="FastAPI with Redis")

app.add_middleware(
        CORSMiddleware,
        allow_origins=origins,
        allow_credentials=True,
        allow_methods=["*"],
        allow_headers=["*"],
)


async def get_all():
    return await redis_cache.keys('*')


@app.on_event('startup')
async def starup_event():
    await redis_cache.init_cache()


@app.on_event('shutdown')
async def shutdown_event():
    redis_cache.close()
    await redis_cache.wait_closed()

#root
@app.get("/")
def read_root():
    return {"Redis": "FastAPI"}

#root > Get all keys from the redis DB
@app.get('/RedisKeys')
async def redis_keys():
    return await get_all()

#set a value for a key 
@app.post('/create_keyValue')
async def set(key):
        return await redis_cache.set(key)

#get the value for a particular key
@app.get('/GetValue4Key')
async def get(key):
        return await redis_cache.hvals(key)



#create a hash 
@app.post("/createhash")
async def hset(key, field, value):
        return await redis_cache.hset(key,field, value)



#get the values for a particular hash key with their respective field
@app.get("/hgetall_hash")
async def get(key,):
        # df = await redis_cache.hgetall(key)
        # dfr = pd.DataFrame(df , index=[1])
        # dfs = pd.DataFrame(dfr)
        # print(type(dfs))
        # print("*************************")
        # print(dfs)
        # return key,dfs
        df = await redis_cache.hgetall(key)
        print(type(df))
        dictionary_items = df.items()
        sorted_items = sorted( dictionary_items)
        print(type(sorted_items))
        dataf = pd.DataFrame(sorted_items, columns =['time', 'videos'])
        print(type(dataf))
        print(dataf)
        return key , dataf

#get only values from a particular hash
@app.get("/hvals_hash")
async def get(key):
        return await redis_cache.hvals(key)


#hash >> get value using Field name
@app.get("/get_particular_hashvalue")
async def get(key, field):
        return await redis_cache.hget(key, field)


#optional
@app.get("/set_of_hashes") 
async def smembers(key):
        result =redis_cache.smembers(key)
        return await result


@app.get("/lastweek")
def sortweek():
        lastweeklist = r.sort("date", 24, -1, alpha=True) #sorted set key > date
        pipe = r.pipeline()
        for keys in lastweeklist:
                pipe.hgetall(keys) #hvals > optional
        week1 = []
        for week in pipe.execute():
                week1.append(week)
        return week1


@app.get("/last15days")
def sortdays():
        last15dayslist = r.sort("date", 15, -1, alpha=True) #sorted set key > date
        pipe = r.pipeline()
        for keys in last15dayslist:
                pipe.hgetall(keys)
        last15days = []
        for days in pipe.execute():
                last15days.append(days)
        return last15days
    
   
#To get all the values between two diff dates
@app.get("/betweendays")
def betweendays():
        bdays = r.sort("date", 29/8/21, 30/8/21, alpha=True) #25 to 30 (dates)
        pipe = r.pipeline()
        for keys in bdays:
                pipe.hgetall(keys)
        betwdays = []
        for days in pipe.execute():
                betwdays.append(days)
        return betwdays



if __name__ == '__main__':
    run("main:app", port=3000, reload=True)
