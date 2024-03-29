import React from 'react';

const Weadingloaction = () => {
    return ( <section className="section w-details-area center-text">
		<div className="container">
			<div className="row">
				<div className="col-sm-1"></div>
				
				<div className="col-sm-10">
					
					<div className="heading">
						<h2 className="title">Mangalasnanam & Wedding Details</h2>
						<span className="heading-bottom"><i className="icon icon-star"></i></span>
					</div>
					
					<div className="wedding-details margin-bottom">
					<div className="w-detail left">
							{/* <i className="icon icon-cake"></i> */}
							<h4 className="title">MANGALA SNANAM</h4>
							<p>Friday, April 19th, 2024</p>
							<p>Kalagara LakshmiPuram</p>
                            <p><i className="icon icon-email-plane"></i></p>
                            <p>Vissannapeta(MD),NTR(DT),AndhraPradesh</p>
                            <p>
							<div className="map-responsive">
                            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d567.0968455998564!2d80.77465700867207!3d17.025747927925963!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a35d5ec4a3f7625%3A0xf62897405b56807!2sBhaskar%20Badisa!5e0!3m2!1sen!2sin!4v1711602524942!5m2!1sen!2sin" width="600" height="450" frameBorder="0" style={{border:0}} allowFullScreen=""></iframe>
                                </div>
								</p>
								<p>Time: 03:00PM Onwards</p>
						</div> 
						
						<div className="w-detail right">
							<i className="icon icon-ciurclke"></i>
							<h4 className="title">WEDDING CEREMONY </h4>
                            <p>Saturday, April 20th, 2024 08:29PM</p>
							<p>Kalagara LakshmiPuram</p>
                            <p><i className="icon icon-email-plane"></i></p>
                            <p>Vissannapeta(MD),NTR(DT),AndhraPradesh</p>
                            <p>
							<div className="map-responsive">
                            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d567.0968455998564!2d80.77465700867207!3d17.025747927925963!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a35d5ec4a3f7625%3A0xf62897405b56807!2sBhaskar%20Badisa!5e0!3m2!1sen!2sin!4v1711602524942!5m2!1sen!2sin" width="600" height="450" frameBorder="0" style={{border:0}} allowFullScreen=""></iframe>

                            </div>
							</p>

						</div> 
						
						<div className="w-detail right"><br/>
							<i className="icon icon-wine-glass"></i>
							<h4 className="title">Dinner</h4>
							<p>Time: 07PM Onwards</p>
						</div> 
						
						{/* <div className="w-detail left"><br/>
							<i className="icon icon-wine-glass"></i>
							<h4 className="title">LUNCH</h4>
							<p>Time: 12:00PM Onwards</p>
						</div>  */}
						
					</div>
					
				</div>
			</div>
		</div>
    </section>    
    );
}

export default Weadingloaction;