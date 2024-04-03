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
                                        <span className="date">March 14, 2024</span>
                                    </div>
                                    <div className="timeline-body">
                                        <p>In that moment, time stood still. Our eyes locked and my heart skipped a beat💞 and I felt a spark that would ignite a lifetime of love and I strongly believe our future to be more love and caring</p>
                                    </div>
                                </div>
                            </li>
                            <li className="timeline-inverted animate-box fadeInUp animated-fast">
                                <div className="timeline-badge" style={{backgroundImage: `url(${img2})`}}></div>
                                <div className="timeline-panel">
                                    <div className="timeline-heading">
                                        <h3 className="timeline-title">Our Words</h3>
                                        <span className="date"><i className="icon icon-date"></i>April 20, 2024</span>
                                    </div>
                                    <div className="timeline-body">
                                        <p>A new chapter of life is about to begin! 🎉🎊Join us on 20-April-2024...😍as we, Bhaskar 🤵🏻 and Mounika 👰🏻‍♀️ become one ❣️we wholeheartedly want to invite you and your entire family to attend our wedding ceremony, your presence will make our celebration more special ❣️</p>
                                    </div>
                                </div>
                            </li>
                            {/* <li className="animate-box fadeInUp animated-fast">
                                <div className="timeline-badge" style={{backgroundImage: `url(${img3})`}}></div>
                                <div className="timeline-panel">
                                    <div className="timeline-heading">
                                        <h3 className="timeline-title">Promises</h3>
                                        <span className="date">July 21, 2023</span>
                                    </div>
                                    <div className="timeline-body">
                                        <p>As lord jesus, sacrificed his life to save his church, in the same way Charan promised to fight with the entire world to protect his wife Jyothi</p>
                                    </div>
                                </div>
                            </li> */}
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default WeadingDetails;