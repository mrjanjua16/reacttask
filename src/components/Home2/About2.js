import '../../scss/style.scss';
import Speaker2 from "../../images/speakers/featured-speaker-two.jpg";
import { Link } from 'react-router-dom';

export default function About2()
{
    return(
        <>
<section class="section about">
<div class="container">
		<div class="row">
			<div class="col-lg-5 col-md-6 align-self-center">
				<div class="image-block two bg-about">
					<img class="img-fluid" src={Speaker2} alt="" />
				</div>
			</div>
			<div class="col-lg-6 col-md-6 align-self-center ml-lg-auto">
				<div class="content-block">
					<h2>About The <span class="alternate">Eventre</span></h2>
					<div class="description-one">
						<p>
							Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusm tempor incididunt ut labore dolore
							magna aliqua enim ad
						</p>
					</div>
					<div class="description-two">
						<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmtempor incididunt ut labore et
							dolore magna aliq enim ad minim</p>
					</div>
					<ul class="list-inline">
						<li class="list-inline-item">
                            <Link href="/" class="btn btn-main-md">Buy ticket</Link>
						</li>
						<li class="list-inline-item">
							<Link href="/" class="btn btn-transparent-md">Read more</Link>
						</li>
					</ul>
				</div>
			</div>
		</div>
	</div>
</section>
        </>
);
}