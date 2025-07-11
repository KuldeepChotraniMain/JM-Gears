import React from 'react'
import { Link } from 'react-router-dom';
import aboutImg from '../../assets/img/home2/about-cover.jpg';
import { EnquiryForm } from '../../pages/EnquiryForm';
import "../../assets/css/about.scss";
const AboutTwo = () => {
  return (
    <section className="about-section section-padding" style={{paddingTop:'0px'}}>
            <div className="about-jm">
      <div className="cover-section">
        <div className="container">
          

    <EnquiryForm data='ALL'/>
        <div className="container about-container ">
            <div className="row align-items-center">
                <div className="col-xl-6 col-12 pe-xl-0">
                    <div className="about-cover-bg bg-cover me-xl-5" style={{backgroundImage: `url(${aboutImg})`}}>
                        <div className="our-experience-years">
                            <div className="year-outline">
                                <h2>30</h2>
                            </div>
                            <p>Years <span>Experience</span></p>
                        </div>
                    </div>
                </div>
                <div className="col-xl-6 mt-5 mt-lg-0 col-12">
                    <div className="block-contents">
                        <div className="section-title">
                            <span>JM GEARS AND ENGINEERING</span>
                            <h3>A Legacy of Precision Engineering</h3>
                        </div>
                        <blockquote>Founded in 1975, JM Gears & Engineering has been a prominent player in the heavy engineering sector, contributing to the growth and success of industries worldwide. Situated in the enchanting city of Udaipur, Rajasthan, known as the city of lakes, we have emerged as a symbol of precision, reliability, and innovation. Our vision is to deliver high-quality heavy engineering products, JM Gears & Engineering has evolved into a dynamic force in the industry. Our journey has been marked by a relentless commitment to total quality management, allowing us to achieve international recognition and build lasting relationships with approximately 500 clients across India and beyond.</blockquote>
                    </div>
                    <Link to="/about" className="theme-btn mt-35">read more</Link>
                </div>
            </div>
        </div>
        </div>
        </div>
        </div>
    </section>
  )
}

export default AboutTwo