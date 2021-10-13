import React, { Component } from 'react'
import axios from 'axios'
// import {Grid} from '@material-ui/core'

class PostForm extends Component {
    constructor(props) {
        super(props)

        this.state = {
            key: '',
            // Where data will be saved.
            data: [],
        }
        console.log(this.state)
    }

    changeHandler = e => {
        this.setState({ [e.target.name]: e.target.value })
    }

    submitHandler = e => {
        e.preventDefault()
        
        axios
        .get(`http://127.0.0.1:8000/hvals_hash?key=${this.state.key}`)
        .then(response => {
                        // Updating the state to trigger a re-render       
            this.setState({data: response.data});
            console.log(response.data)
        })
        .catch(error => {
            console.log(error)
        })
    }

    render() {
        const { key } = this.state
        
        return (
            <center><div>
                <form onSubmit={this.submitHandler}>
                    <div>
                        <h2> DATE PICKER</h2><br></br>
                        <input
                            type="text"
                            name="key"
                            value={key}
                            onChange={this.changeHandler}
                        />
                        
                    </div>
                    <br></br>
                    <button type="submit">Submit</button>
                </form>
            <div>
{this.state.data.map((videoURL) => {
    return (
    <div>
        <br></br>
        {
            <table>
            <ol>
                
                {videoURL}
            </ol>
            </table>
        }
    </div>
    );
})}

</div>
    
            </div></center>
        )
    }
}
export default PostForm
