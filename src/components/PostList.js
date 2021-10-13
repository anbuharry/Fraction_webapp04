import React, { Component } from "react";
import axios from "axios";
import App from "./Date_range";



class PostList extends Component {
    url = "http://127.0.0.1:8000/hvals_hash?key=)";

    constructor(props) {
        super(props);
        this.state = {
            posts: [],
            date: ""
        };
    }

    componentDidUpdate() {
        axios.get(this.url + this.state.date).then((response) => {
            this.setState({
                posts: response.data
            });
            console.log(response.data);
        });
    }

    render() {
        const { posts } = this.state;
        return (
            <div>
                <App />
                    onChange={(e) =>
                        this.setState({ ...this.state, data: e.target.value })
                    }
                
                {posts.length &&
                    posts.map((post) => <div key={post.id}>{post.id} </div>)}
            </div>
        );
    }
}

export default PostList;