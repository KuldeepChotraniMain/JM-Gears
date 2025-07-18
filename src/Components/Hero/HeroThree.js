import { Link } from "react-router-dom";
import React from 'react'
import CountUp from 'react-countup'; 
import heroImg from '../../assets/img/home3/hero-big-img.jpg';
import img1 from '../../assets/img/home3/3d-element.png';
import img2 from '../../assets/img/home3/element-wave.png';
import img3 from '../../assets/img/home3/card.png';
import img4 from '../../assets/img/home3/play-icon.png';

const HeroThree = () => {
    return (
        <section className="hero-wrapper hero-3">
            <div className="welcome-slide">
                <div className="container">
                    <div className="row">
                    <div className="col-xl-4 only-for-mobile">
                            <div className="hero-image">
                                <div className="big-img">
                                    <img src={heroImg} alt="" />
                                    <div className="element">
                                        <img src={img1} alt="" />
                                        <img className="only-for-mobile" src={img2} alt="" />
                                    </div>
                                </div>
                                <div className="card-img only-for-mobile">
                                    <img src={img3} alt="" />
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-8 pe-lg-0 pt-70">
                            <div className="hero-content text-center text-md-start">
                                <h1 className="not-for-mobile">JM GEARS & ENGINEERING</h1>
                                {/* <h2><span> ENGINEERING</span></h2> */}
                                <p>Established in 1975 in the picturesque city of Udaipur, Rajasthan, JM Gears & Engineering has been a cornerstone in the manufacturing and supply of high-quality heavy engineering products. We take pride in our commitment to precision, quality, and innovation.</p>
                                <Link to='/about' className="theme-btn style-3 mt-35">Read More </Link>
                                <div className="hero-funfact">
                                    <div className="row">
                                        <div className="col-lg-3 col-md-6 col-12">
                                            <div className="single-fun-fact mt-4">
                                                <h2><CountUp end={30} duration={3}></CountUp>K+</h2>
                                                <h3>PROJECT DONE</h3>
                                            </div>
                                        </div>
                                        <div className="col-lg-3 col-md-6 col-12">
                                            <div className="single-fun-fact mt-4">
                                                <h2><CountUp end={980} duration={3}></CountUp>+</h2>
                                                <h3>HAPPY CLIENTS</h3>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-4 not-for-mobile">
                            <div className="hero-image">
                                <div className="big-img">
                                    <img src={heroImg} alt="" />
                                    <div className="element">
                                        <img className="only-for-mobile" src={img1} alt="" />
                                        <img className="only-for-mobile"  src={img2} alt="" />
                                    </div>
                                </div>
                                <div className="card-img">
                                    <img className="only-for-mobile" src={img3} alt="" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="play-icon d-none d-lg-block">
                    <img src={img4} alt="" />
                </div>
            </div>
        </section>
    )
}

export default HeroThree;