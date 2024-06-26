import PtSponsor1 from "../../images/sponsors/pt-spon-two.png";
import GlSponsor1 from '../../images/sponsors/gl-spon-one.png';
import "../../scss/style.scss";
import { Link } from "react-router-dom";

export default function Sponsors()
{
    return(
        <>
<section class="sponsors section bg-sponsors overlay-white">
	<div class="container">
		<div class="row">
			<div class="col-12">
				<div class="section-title">
					<h3>Our <span class="alternate">Sponsors</span></h3>
					<p>Lorem ipsum dolor sit amet consectetur adipisicing elit sed do eiusm tempor incididunt ut labore dolore</p>
				</div>
			</div>
		</div>
		<div class="row">
			<div class="col-12">
				<div class="sponsor-title text-center">
					<h5>Platinum Sponsors</h5>
				</div>
				<div class="block text-center">
					<ul class="list-inline sponsors-list">
						<li class="list-inline-item">
							<div class="image-block text-center">
								<Link to="/">
									<img src={PtSponsor1} alt="sponsors-logo" class="img-fluid" />
								</Link>
							</div>
						</li>
						<li class="list-inline-item">
							<div class="image-block text-center">
								<Link to="/">
									<img src={PtSponsor1} alt="sponsors-logo" class="img-fluid" />
								</Link>
							</div>
						</li>
						<li class="list-inline-item">
							<div class="image-block text-center">
								<Link to="/">
									<img src={PtSponsor1} alt="sponsors-logo" class="img-fluid" />
								</Link>
							</div>
						</li>
						<li class="list-inline-item">
							<div class="image-block text-center">
								<Link to="/">
									<img src={PtSponsor1} alt="sponsors-logo" class="img-fluid" />
								</Link>
							</div>
						</li>
					</ul>
				</div>
				<div class="sponsor-title text-center">
					<h5>Gold Sponsors</h5>
				</div>
				<div class="block text-center">
					<ul class="list-inline sponsors-list">
						<li class="list-inline-item">
							<div class="image-block text-center">
								<Link to="/">
									<img src={GlSponsor1} alt="sponsors-logo" class="img-fluid" />
								</Link>
							</div>
						</li>
						<li class="list-inline-item">
							<div class="image-block text-center">
								<Link to="/">
									<img src={GlSponsor1} alt="sponsors-logo" class="img-fluid" />
								</Link>
							</div>
						</li>
						<li class="list-inline-item">
							<div class="image-block text-center">
								<Link to="/">
									<img src={GlSponsor1} alt="sponsors-logo" class="img-fluid" />
								</Link>
							</div>
						</li>
					</ul>
				</div>
				<div class="sponsor-btn text-center">
					<Link to="/" class="btn btn-main-md">Become a sponsor</Link>
				</div>
			</div>
		</div>
	</div>
</section>
</>
);
}