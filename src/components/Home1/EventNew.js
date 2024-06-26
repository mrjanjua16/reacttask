import { Link } from "react-router-dom";
import PostThumb1 from "../../images/news/post-thumb-one.jpg";
import "../../scss/style.scss";

export default function EventNews()
{
    return(
        <>
<section class="news section">
	<div class="container">
		<div class="row">
			<div class="col-12">
				<div class="section-title">
					<h3>Eventre <span class="alternate">News</span></h3>
					<p>Lorem ipsum dolor sit amet consectetur adipisicing elit sed do eiusm tempor incididunt ut labore dolore</p>
				</div>
			</div>
		</div>
		<div class="row">
			<div class="col-lg-4 col-md-6 col-sm-8 col-10 m-auto">
				<div class="blog-post">
					<div class="post-thumb">
						<a href="/">
							<img src={PostThumb1} alt="post-image" class="img-fluid" />
						</a>
					</div>
					<div class="post-content">
						<div class="date">
							<h4>20<span>May</span></h4>
						</div>
						<div class="post-title">
							<h2><Link to="/NewsSinglePage">Elementum purus id ultrices.</Link></h2>
						</div>
						<div class="post-meta">
							<ul class="list-inline">
								<li class="list-inline-item">
									<i class="fa fa-user-o"></i>
									<a href="/">Admin</a>
								</li>
								<li class="list-inline-item">
									<i class="fa fa-heart-o"></i>
									<a href="/">350</a>
								</li>
								<li class="list-inline-item">
									<i class="fa fa-comments-o"></i>
									<a href="/">30</a>
								</li>
							</ul>
						</div>
					</div>
				</div>
			</div>
			<div class="col-lg-4 col-md-6 col-sm-8 col-10 m-auto">
				<div class="blog-post">
					<div class="post-thumb">
						<Link to="/NewsSinglePage">
							<img src={PostThumb1} alt="post-image" class="img-fluid" />
						</Link>
					</div>
					<div class="post-content">
						<div class="date">
							<h4>20<span>May</span></h4>
						</div>
						<div class="post-title">
							<h2><Link to="/NewsSinglePage">Elementum purus id ultrices.</Link></h2>
						</div>
						<div class="post-meta">
							<ul class="list-inline">
								<li class="list-inline-item">
									<i class="fa fa-user-o"></i>
									<a href="/">Admin</a>
								</li>
								<li class="list-inline-item">
									<i class="fa fa-heart-o"></i>
									<a href="/">350</a>
								</li>
								<li class="list-inline-item">
									<i class="fa fa-comments-o"></i>
									<a href="/">30</a>
								</li>
							</ul>
						</div>
					</div>
				</div>
			</div>
			<div class="col-lg-4 col-md-6 m-md-auto col-sm-8 col-10 m-auto">
				<div class="blog-post">
					<div class="post-thumb">
						<Link to="/NewsSinglePage">
							<img src={PostThumb1} alt="post-image" class="img-fluid" />
						</Link>
					</div>
					<div class="post-content">
						<div class="date">
							<h4>20<span>May</span></h4>
						</div>
						<div class="post-title">
							<h2><Link to="/NewsSinglePage">Elementum purus id ultrices.</Link></h2>
						</div>
						<div class="post-meta">
							<ul class="list-inline">
								<li class="list-inline-item">
									<i class="fa fa-user-o"></i>
									<a href="/">Admin</a>
								</li>
								<li class="list-inline-item">
									<i class="fa fa-heart-o"></i>
									<a href="/">350</a>
								</li>
								<li class="list-inline-item">
									<i class="fa fa-comments-o"></i>
									<a href="/">30</a>
								</li>
							</ul>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</section>
</>
);
}