import React,{Component} from 'react';
import {Link} from 'react-router-dom';
import Video from './Video';
import Apps from './page_data'
class Gallery extends Component{
    render(){
        return(
            <div>

<section class="inner-page-banner" id="home">
</section>

<div class="breadcrumb-agile">
	<ol class="breadcrumb mb-0">
		<li class="breadcrumb-item">
        <Link to='/'>Home</Link>
		</li>
		<li class="breadcrumb-item active" aria-current="page">Gallery</li>
	</ol>
</div>
    <section class="gallery py-5" id="gallery">
        <div class="container py-md-5">
	<h3 class="heading text-center mb-3 mb-sm-5"> Fraction Video Player</h3>
        <Video/> 
        <Apps />
        </div>


    </section>
    </div>
        )
    }
}
export default Gallery