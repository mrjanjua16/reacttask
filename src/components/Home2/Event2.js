import React from "react";
import "../../scss/style.scss";
import { Link } from "react-router-dom";


export default function Event2()
{
    return(
        <>
<section class="section schedule two">
	<div class="container">
		<div class="row">
			<div class="col-12">
				<div class="section-title">
					<h3>Event <span class="alternate">Schedule</span></h3>
					<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit sed do eiusm tempor incididunt ut labore</p>
				</div>
			</div>
		</div>
		<div class="row">
			<div class="col-lg-2">
				<div class="schedule-tab">
					<ul class="nav nav-pills text-center">
						<li class="nav-item">
							<Link class="nav-link active" to="" data-toggle="pill">
								Day-01
								<span>20 November</span>
							</Link>
						</li>
						<li class="nav-item">
							<Link class="nav-link" to="" data-toggle="pill">
								Day-02
								<span>21 November</span>
							</Link>
						</li>
						<li class="nav-item">
							<Link class="nav-link" to="" data-toggle="pill">
								Day-03
								<span>22 November</span>
							</Link>
						</li>
					</ul>
				</div>
			</div>
			<div class="col-lg-10">
				<div class="schedule-contents">
					<div class="tab-content" id="pills-tabContent">
						<div class="tab-pane fade show active schedule-item" id="nov20">
							
							<ul class="m-0 p-0">
								<li class="headings text-center">
									<div class="time">Time</div>
									<div class="speaker">Speaker</div>
									<div class="subject">Subject</div>
									<div class="venue">Venue</div>
								</li>
								
								<li class="schedule-details text-center">
									<div class="block">
										
										<div class="time">
											<span class="time">9.00 AM</span>
										</div>
										
										<div class="speaker">
											<span class="name">Samanta Doe</span>
										</div>
										
										<div class="subject">Introduction to Wp</div>
										
										<div class="venue">Auditorium A</div>
									</div>
								</li>
								
								<li class="schedule-details">
									<div class="block">
										
										<div class="time">
											<span class="time">10.00 AM</span>
										</div>
										
										<div class="speaker">
											<span class="name">Zerad Pawel</span>
										</div>
										
										<div class="subject">Principle of Wp</div>
										
										<div class="venue">Auditorium B</div>
									</div>
								</li>
								
								<li class="schedule-details">
									<div class="block">
										
										<div class="time">
											<span class="time">12.00 AM</span>
										</div>
										
										<div class="speaker">
											<span class="name">Henry Mong</span>
										</div>
										
										<div class="subject">Wp Requirements</div>
										
										<div class="venue">Auditorium C</div>
									</div>
								</li>
								
								<li class="schedule-details">
									<div class="block">
										
										<div class="time">
											<span class="time">2.00 PM</span>
										</div>
										
										<div class="speaker">
											<span class="name">Baily Leo</span>
										</div>
										
										<div class="subject">Introduction to Wp</div>
										
										<div class="venue">Auditorium D</div>
									</div>
								</li>
								
								<li class="schedule-details">
									<div class="block">
										
										<div class="time">
											<span class="time">3.00 PM</span>
										</div>
										
										<div class="speaker">
											<span class="name">Lee Mun</span>
										</div>
										
										<div class="subject">Useful tips for Wp</div>
										
										<div class="venue">Auditorium E</div>
									</div>
								</li>
								
								<li class="schedule-details">
									<div class="block">
										
										<div class="time">
											<span class="time">3.00 PM</span>
										</div>
										
										<div class="speaker">
											<span class="name">Lee Mun</span>
										</div>
										
										<div class="subject">Useful tips for Wp</div>
										
										<div class="venue">Auditorium E</div>
									</div>
								</li>
							</ul>
						</div>
						<div class="tab-pane fade schedule-item" id="nov21">
							
							<ul class="m-0 p-0">
								<li class="headings text-center">
									<div class="time">Time</div>
									<div class="speaker">Speaker</div>
									<div class="subject">Subject</div>
									<div class="venue">Venue</div>
								</li>
								
								<li class="schedule-details text-center">
									<div class="block">
										
										<div class="time">
											<span class="time">9.00 AM</span>
										</div>
										
										<div class="speaker">
											<span class="name">Samanta Doe</span>
										</div>
										
										<div class="subject">Introduction to Wp</div>
										
										<div class="venue">Auditorium A</div>
									</div>
								</li>
								
								<li class="schedule-details">
									<div class="block">
										
										<div class="time">
											<span class="time">10.00 AM</span>
										</div>
										
										<div class="speaker">
											<span class="name">Zerad Pawel</span>
										</div>
										
										<div class="subject">Principle of Wp</div>
										
										<div class="venue">Auditorium B</div>
									</div>
								</li>
								
								<li class="schedule-details">
									<div class="block">
										
										<div class="time">
											<span class="time">12.00 AM</span>
										</div>
										
										<div class="speaker">
											<span class="name">Henry Mong</span>
										</div>
										
										<div class="subject">Wp Requirements</div>
										
										<div class="venue">Auditorium C</div>
									</div>
								</li>
								
								<li class="schedule-details">
									<div class="block">
										
										<div class="time">
											<span class="time">2.00 PM</span>
										</div>
										
										<div class="speaker">
											<span class="name">Baily Leo</span>
										</div>
										
										<div class="subject">Introduction to Wp</div>
										
										<div class="venue">Auditorium D</div>
									</div>
								</li>
								
								<li class="schedule-details">
									<div class="block">
										
										<div class="time">
											<span class="time">3.00 PM</span>
										</div>
										
										<div class="speaker">
											<span class="name">Lee Mun</span>
										</div>
										
										<div class="subject">Useful tips for Wp</div>
										
										<div class="venue">Auditorium E</div>
									</div>
								</li>
								
								<li class="schedule-details">
									<div class="block">
										
										<div class="time">
											<span class="time">3.00 PM</span>
										</div>
										
										<div class="speaker">
											<span class="name">Lee Mun</span>
										</div>
										
										<div class="subject">Useful tips for Wp</div>
										
										<div class="venue">Auditorium E</div>
									</div>
								</li>
							</ul>
						</div>
						<div class="tab-pane fade schedule-item" id="nov22">
							
							<ul class="m-0 p-0">
								<li class="headings text-center">
									<div class="time">Time</div>
									<div class="speaker">Speaker</div>
									<div class="subject">Subject</div>
									<div class="venue">Venue</div>
								</li>
								
								<li class="schedule-details text-center">
									<div class="block">
										
										<div class="time">
											<span class="time">9.00 AM</span>
										</div>
										
										<div class="speaker">
											<span class="name">Samanta Doe</span>
										</div>
										
										<div class="subject">Introduction to Wp</div>
										
										<div class="venue">Auditorium A</div>
									</div>
								</li>
								
								<li class="schedule-details">
									<div class="block">
										
										<div class="time">
											<span class="time">10.00 AM</span>
										</div>
										
										<div class="speaker">
											<span class="name">Zerad Pawel</span>
										</div>
										
										<div class="subject">Principle of Wp</div>
										
										<div class="venue">Auditorium B</div>
									</div>
								</li>
								
								<li class="schedule-details">
									<div class="block">
										
										<div class="time">
											<span class="time">12.00 AM</span>
										</div>
										
										<div class="speaker">
											<span class="name">Henry Mong</span>
										</div>
										
										<div class="subject">Wp Requirements</div>
										
										<div class="venue">Auditorium C</div>
									</div>
								</li>
								
								<li class="schedule-details">
									<div class="block">
										
										<div class="time">
											<span class="time">2.00 PM</span>
										</div>
										
										<div class="speaker">
											<span class="name">Baily Leo</span>
										</div>
										
										<div class="subject">Introduction to Wp</div>
										
										<div class="venue">Auditorium D</div>
									</div>
								</li>
								
								<li class="schedule-details">
									<div class="block">
										
										<div class="time">
											<span class="time">3.00 PM</span>
										</div>
										
										<div class="speaker">
											<span class="name">Lee Mun</span>
										</div>
										
										<div class="subject">Useful tips for Wp</div>
										
										<div class="venue">Auditorium E</div>
									</div>
								</li>
								
								<li class="schedule-details">
									<div class="block">
										
										<div class="time">
											<span class="time">3.00 PM</span>
										</div>
										
										<div class="speaker">
											<span class="name">Lee Mun</span>
										</div>
										
										<div class="subject">Useful tips for Wp</div>
										
										<div class="venue">Auditorium E</div>
									</div>
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