import '../../scss/style.scss';

export default function Registration()
{
    return(
        <>
        <section class="registration">
	<div class="container-fuild p-0">
		<div class="row">
			<div class="col-lg-6 col-md-12 p-0">
				<div class="service-block bg-service overlay-primary text-center">
					<div class="row no-gutters">
						<div class="col-6">
							<div class="service-item">
								<i class="fa fa-microphone"></i>
								<h5>8 Speakers</h5>
							</div>
						</div>
						<div class="col-6">
							<div class="service-item">
								<i class="fa fa-flag"></i>
								<h5>500 + Seats</h5>
							</div>
						</div>
						<div class="col-6">
							<div class="service-item">
								<i class="fa fa-ticket"></i>
								<h5>300 tickets</h5>
							</div>
						</div>
						<div class="col-6">
							<div class="service-item">
								<i class="fa fa-calendar"></i>
								<h5>3 days event</h5>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div class="col-lg-6 col-md-12 p-0">
				<div class="registration-block bg-registration overlay-dark">
					<div class="block">
						<div class="title text-left">
							<h3>Register to <span class="alternate">Eventre</span></h3>
							<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit</p>
						</div>
						<form action="#" class="row">
							<div class="col-md-6">
								<input type="text" class="form-control main" placeholder="Your Name" required="" />
							</div>
							<div class="col-md-6">
								<input type="email" class="form-control main" placeholder="Email" required="" />
							</div>
							<div class="col-md-6">
								<input type="text" class="form-control main" placeholder="Phone" required="" />
							</div>
							<div class="col-md-6">
								<div class="form-group">
									<select class="form-control main" id="select-ticket" required="">
								      <option>Ticket Type</option>
								      <option>1</option>
								      <option>2</option>
								      <option>3</option>
								      <option>4</option>
								      <option>5</option>
								    </select>
								</div>
							</div>
							<div class="col-12">
								<button type="submit" class="btn btn-white-md">Register Now</button>
							</div>
						</form>
					</div>
				</div>
			</div>
		</div>
	</div>
</section>
</>
);
}