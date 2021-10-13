import React,{Component} from 'react';
import {Link} from 'react-router-dom';

class Home extends  Component{
    render(){
        return(
        <div>
                
<div class="banner_w3lspvt" id="home">
	<div class="csslider infinity" id="slider1">
		<input type="radio" name="slides" checked="checked" id="slides_1"/>

		<ul class="banner_slide_bg">
			<li>
				<div class="slider-info bg1">
					<div class="bs-slider-overlay">
						<div class="banner-text">
							<div class="container">
								<h2 class="movetxt agile-title text-capitalize">Keep Your Business Safe With Fraction Analytics </h2>
								<p>Video analytics is a technology that processes a digital video signal using a special algorithm to perform a security-related function.That is, they try to determine if an unwanted or suspicious behavior is occurring in the field of view of a video camera and the algorithm notifies the console operator of the finding.</p>
								
								<Link to='/contact' class="btn">Get Started</Link>
							</div>
						</div>
					</div>
				</div>
			</li>
		</ul>
		
	</div>
</div>
 {/* <!-- //banner -->
//  <!-- banner bottom grids --> */}
    <section class="content-info py-5" id="about">
        <div class="container py-md-5">
		<h3 class="heading text-center mb-3 mb-sm-5">About us</h3>

            <div class="info-w3pvt-mid text-center px-lg-5">

                <div class="title-desc text-center px-lg-5">
					<img src="assets/image/about1.png" alt="" class="img-fluid" />
                    <p class="px-lg-5">Video analytics is a technology that processes a digital video signal using a special algorithm to perform a security-related function.That is, they try to determine if an unwanted or suspicious behavior is occurring in the field of view of a video camera and the algorithm notifies the console operator of the finding.</p>
                    
					<Link to="/contact" class="btn mt-lg-4 mt-3 read scroll" role="button">Learn More</Link>
                </div>
            </div>
        </div>
    </section>


    
    </div>
        )
    }
}
export default Home