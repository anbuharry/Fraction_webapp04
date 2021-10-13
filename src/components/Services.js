import React,{Component} from 'react';
 class Services extends Component{
     render(){
         return(
            <div>
            <section class="inner-page-banner" id="home">
            </section>
            
            
            
            <div class="breadcrumb-agile">
                <ol class="breadcrumb mb-0">
                    <li class="breadcrumb-item">
                        <a href="index.html">Home</a>
                    </li>
                    <li class="breadcrumb-item active" aria-current="page">FVSumm</li>
                </ol>
            </div>
            
            
            <section class="what-we-do py-5">
                <div class="container py-md-5">
                <h3 class="heading text-center mb-3 mb-sm-5">Our Projects</h3>
                    <div class="row what-we-do-grid">
                        <div class="col-lg-3 col-md-6 pr-0 pl-md-3 pl-0">
                            <img src="assets/image/ban1.jpg" class="img-fluid" alt="" />
                        </div>
                        <div class="col-lg-3 col-md-6 bg-grid-clr">
                            <h4 class="mt-md-0 my-2">Summarization</h4>
                            <p class="">Sed ut perspiciatis undert sed omnis natus error .</p>
                        </div>
                        <div class="col-lg-3 col-md-6 pr-0 pl-md-3 pl-0 mt-lg-0 mt-4">
                            <img src="assets/image/ban1.jpg" class="img-fluid" alt="" />
                        </div>
                        <div class="col-lg-3 col-md-6 bg-grid-clr mt-lg-0 mt-md-4">
                            <h4 class="mt-md-0 my-2">Captioning</h4>
                            <p class="">Sed ut perspiciatis undert sed omnis natus error .</p>
                        </div>

                    </div>
                </div>
            </section>
            

                </div>
        )
    }
}
export default Services