import React from 'react';
import '../OurStory.css';
import img3 from '../images/met5.jpg'
import img2 from '../images/met3.jpg'
import img1 from '../images/met4.jpg'
const WeadingDetails = () => {
    return (
        <section className="section w-details-area center-text">
            <div className="container">
                <div className="row">
                    <div className="col-sm-12">
                        <div className="heading">
                            <span>We Love Each Other</span>
                            <h2 className="title">Our Story</h2>
                            <p>To love a person is to see all of their magic, and to remind them of it when they have forgotten.</p>
                            <p>Ah, life grows lovely where you are.</p>
                            <span className="heading-bottom"><i className="icon icon-star"></i></span>
                        </div>
                    </div>
                    <div className="col-md-12 col-md-offset-0">
                        <ul className="timeline animate-box fadeInUp animated-fast">
                            <li className="animate-box fadeInUp animated-fast">
                                <div className="timeline-badge" style={{backgroundImage: `url(${img1})`}}></div>
                                <div className="timeline-panel">
                                    <div className="timeline-heading">
                                        <h3 className="timeline-title">First We Met</h3>
                                        <span className="date">May 22, 2023</span>
                                    </div>
                                    <div className="timeline-body">
                                        <p>when i first met you, I thought that all the God's Promises in my life combined together and came in the form of a person</p>
                                    </div>
                                </div>
                            </li>
                            <li className="timeline-inverted animate-box fadeInUp animated-fast">
                                <div className="timeline-badge" style={{backgroundImage: `url(${img2})`}}></div>
                                <div className="timeline-panel">
                                    <div className="timeline-heading">
                                        <h3 className="timeline-title">Engagement</h3>
                                        <span className="date"><i className="icon icon-date"></i>July 21, 2023</span>
                                    </div>
                                    <div className="timeline-body">
                                        <p>It's our engagement time,He gave you to me,to show his eternal LOVE on me...</p>
                                    </div>
                                </div>
                            </li>
                            <li className="animate-box fadeInUp animated-fast">
                                <div className="timeline-badge" style={{backgroundImage: `url(${img3})`}}></div>
                                <div className="timeline-panel">
                                    <div className="timeline-heading">
                                        <h3 className="timeline-title">Promises</h3>
                                        <span className="date">July 21, 2023</span>
                                    </div>
                                    <div className="timeline-body">
                                        <p>As lord jesus, sacrificed his life to save his church, in the same way charan promised to fight with the entire world to protect his wife Jyothi</p>
                                    </div>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default WeadingDetails;