import React,{Component} from 'react';
import {Link} from 'react-router-dom';
class Single extends Component{
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
		<li class="breadcrumb-item active" aria-current="page">FAnomaly</li>
	</ol>
</div>
    <section class="banner-bottom py-5">
        <div class="container py-md-5">
	<h3 class="heading text-center mb-3 mb-sm-5"> Anomaly Detection </h3>
            <div class="single-w3pvt-page mt-md-5 mt-4 px-lg-5">
                <div class="content-sing-w3ls px-lg-5">
                    <img class="img-fluid" src="assets/image/ban1.jpg" alt="" />
                    <h4>Lorem ipsum dolor sit amet</h4>
                    <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod magna .Lorem ipsum dolor sit amet, consectetuer adipiscing elit,Sed diam nonummy nibh euismod magna .Integer pulvinar leo id viverra feugiat. Pellentesque Libero Justo, Semper At Tempus Vel, Ultrices In Sed Ligula. Nulla Uter Sollicitudin Velit.</p>
                </div>              
                

            </div>


        </div>
    </section>
    </div>
        )
    }
}
export default Single