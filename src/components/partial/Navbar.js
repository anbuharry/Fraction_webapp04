import React,{Component} from 'react';
import {Link} from 'react-router-dom';
class Navbar extends Component{
    render(){
        return(
            <header>
	<div class="container">
		<div class="header d-lg-flex justify-content-between align-items-center">
			<div class="header-agile">
				<h1>
					<Link to='/' class="navbar-brand logo">
						<span class="fa fa-laptop" aria-hidden="true" ></span> Fraction Analytics	<span class="fa fa-user-secret" aria-hidden="true" ></span>
					</Link>
				</h1>
			</div>
			<div class="nav_w3ls">
				<nav>
					<label for="drop" class="toggle mt-lg-0 mt-1"><span class="fa fa-bars" aria-hidden="true"></span></label>
					<input type="checkbox" id="drop" />
						<ul class="menu">
							<li class="mr-lg-3 mr-2 active"><Link to='/'>Home</Link></li>
							<li class="mr-lg-3 mr-2"><Link to='/about'>About</Link></li>
							<li class="mr-lg-3 mr-2 p-0">
							{/* <!-- First Tier Drop Down --> */}
							<label for="drop-2" class="toggle">Projects <span class="fa fa-angle-down" aria-hidden="true"></span> </label>
							<a href="#Home">Projects <span class="fa fa-angle-down" aria-hidden="true"></span></a>
							<input type="checkbox" id="drop-2"/>
							<ul class="inner-dropdown">
								<li><Link to='/contact'>FVSumm</Link></li>
								<li><Link to='/contact'>FAnomaly</Link></li>
							</ul>
							</li>
							<li class="mr-lg-3 mr-2"><Link to='/gallery'>Gallery</Link></li>
							<li class="mr-lg-3 mr-2"><Link to='/contact'>Login</Link></li>
							

						</ul>
				</nav>
			</div>

		</div>
	</div>
</header>
        )
    }
}
export default Navbar