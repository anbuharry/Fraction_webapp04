import React, {Component} from 'react';
import PostForm from './date_api'
import {Link} from 'react-router-dom';
// import PostList from './PostList'


class About extends Component{
    render(){
        return(
            <div>
                {/* <!-- banner --> */}
<section class="inner-page-banner" id="home">
</section>
{/* <!-- //banner -->
<!-- page details --> */}
<div class="breadcrumb-agile">
	<ol class="breadcrumb mb-0">
		<li class="breadcrumb-item">
			<Link to='/'>Home</Link>
		</li>
		<li class="breadcrumb-item active" aria-current="page">About Us</li>
	</ol>
</div>
{/* <!-- //page details -->
	<!--about-mid --> */}
    <section class="banner-bottom py-5" id="exp">
        <div class="container py-md-5">

        <PostForm/>
        {/* <PostList /> */}

        <br></br>
 

        </div>
    </section>
            </div>
	
        )
    }
}
export default About