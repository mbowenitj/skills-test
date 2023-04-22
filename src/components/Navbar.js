/* eslint-disable jsx-a11y/alt-text */
import { useState } from "react";
import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import "../styles/navbar.scss";
import "../styles.scss";
import '../App.css';


export default function Navbar() {
  const [isNavExpanded, setIsNavExpanded] = useState(false);

  return (
    <div>
    <div className="bg-image">
        {/*FIRST NAV BAR */}
       <nav className="navigation">
          <a href="/" className="brand-name">
          <img src={require("../assets/images/logo.png")} className="logo" alt="Coalition Technologies Logo"/>
          </a>
          <button
             className="hamburger"
             onClick={() =>
             {
             setIsNavExpanded(!isNavExpanded);
             }}
             >
             <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                viewBox="0 0 20 20"
                fill="white"
                >
                <path
                   fillRule="evenodd"
                   d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM9 15a1 1 0 011-1h6a1 1 0 110 2h-6a1 1 0 01-1-1z"
                   clipRule="evenodd"
                   />
             </svg>
          </button>
          <div
          className={
          isNavExpanded ? "navigation-menu expanded" : "navigation-menu"
          }
          >
          <ul>
             <li>
                <a href="#history">01. History</a>
             </li>
             <li>
                <a href="#team">02. Team</a>
             </li>
          </ul>
    </div>
    </nav>
    <img
    className="mobile-show"
    src={require("../assets/images/mobile-view.png")}
    style={{ visibility: "hidden" }}
    />
 </div>
 {/* END FIRST NAV BAR */}

 {/* SECOND NAV BAR */}
 <nav className="navigation">
    <a href="/" className="brand-name">
    <img src={require("../assets/images/logo.png")} className="logo" alt="Coalition Technologies Logo"/>
    </a>
    <h4 className="logo-title">
       <span className="logo-text-1">LOSANGELES</span>
       <br className="footer-break" />
       <span className="logo-text-2">MOUNTAINS</span>
    </h4>
    <button
       className="hamburger"
       onClick={() =>
       {
       setIsNavExpanded(!isNavExpanded);
       }}
       >
       <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
          viewBox="0 0 20 20"
          fill="white"
          >
          <path
             fillRule="evenodd"
             d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM9 15a1 1 0 011-1h6a1 1 0 110 2h-6a1 1 0 01-1-1z"
             clipRule="evenodd"
             />
       </svg>
    </button>
    <div
    className={
    isNavExpanded ? "navigation-menu expanded" : "navigation-menu"
    }
    >
    <ul className="carousel-menu">
       <li>
           <a href="#history">01. History</a>
       </li>
       <li>
          <a href="#team">02. Team</a>
       </li>
    </ul>
    </div>
 </nav>
  {/* END SECOND NAV BAR */}

 {/* CAROUSEL */}
 <div>
    <Carousel autoPlay interval="5000">
       <div id="history">
          <div className="history-banner-container">
             <div className="history-header-container">
                <span className="first-number-header">01</span><span className="square">.</span> 
                <span className="history-header">HISTORY</span><br/>
             </div>
             <div className="history-text">
                <p >Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut 
                   vitae volutpat erat. Suspendisse sagittis leo a orci lobortis, ac
                   vestibulum est vehicula. Cras a sollicitudin orci. Cras euismod pulvinar leo vitae sodales. 
                   Etiam sem mi, sollicitudin non elementum dapibus, fringilla ut quam. Proin suscipit, mauris quis consequat elementum
                </p>
             </div>
          </div>
          <img src={require('../assets/images/peak.png')} alt="Peak Season"/>
       </div>
       <div>
          <img src={require('../assets/images/los-angels.png')} alt="Los Angeles Mountain"/>
       </div>
       <div>
          <img src={require('../assets/images/hiking.png')} alt="Site Seeing"/>
       </div>
       <div>
          <img src={require('../assets/images/hiking-1.png')} alt="Hiking"/>
       </div>
    </Carousel>
    <div className="tabs-bg-image1" id="team">
       <div className="section-header1" class="row section-header">
          <div class="col-sm-4 col-12">
             <span className="second-number-header">02</span><span className="square">.</span> 
             <span className="history-header">CLIMB</span><br/>
          </div>
          <div class="col-sm-8 col-12 history-banner-text">
             <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque 
                laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae 
             </p>
          </div>
       </div>
       <div className="tabs-bg-image">
          <div class="nav-tabs-container">
             <ul class="nav nav-tabs d-none d-lg-flex" id="myTab" role="tablist">
                <li class="nav-item" role="presentation">
                   <button class="nav-link active" id="home-tab" data-bs-toggle="tab" data-bs-target="#home-tab-pane" type="button" role="tab" aria-controls="home-tab-pane" aria-selected="true">MOUNTAIN 1</button>
                </li>
                <li class="nav-item" role="presentation">
                   <button class="nav-link" id="profile-tab" data-bs-toggle="tab" data-bs-target="#profile-tab-pane" type="button" role="tab" aria-controls="profile-tab-pane" aria-selected="false">MOUNTAIN 2</button>
                </li>
             </ul>
          </div>
          <div class="tab-content accordion" id="myTabContent">
             <div class="tab-pane fade show active accordion-item" id="home-tab-pane" role="tabpanel" aria-labelledby="home-tab" tabindex="0">
                <h2 class="accordion-header d-lg-none" id="headingOne">
                   <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">MOUNTAIN 1</button>
                </h2>
                <div id="collapseOne" class="accordion-collapse collapse show  d-lg-block" aria-labelledby="headingOne" data-bs-parent="#myTabContent">
                   <div class="accordion-body">
                      <div class="accordion__content">
                         <div class="accordion__schedule__container">
                            <h3 class="accordion__content__text__title">SCHEDULE</h3>
                            <ul className="schedule-container">
                               <li>25 Nov 2016 <span className="schedule-venue">Vestibulum viverra</span></li>
                               <li>28 Nov 2016 <span className="schedule-venue">Vestibulum viverra</span></li>
                               <br/>
                               <li>18 Dec 2016 <span className="schedule-venue">Vestibulum viverra</span></li>
                               <br/>
                               <li>17 Jan 2017 <span className="schedule-venue">Vestibulum viverra</span></li>
                            </ul>
                         </div>
                      </div>
                   </div>
                </div>
             </div>
             <div class="tab-pane fade accordion-item" id="profile-tab-pane" role="tabpanel" aria-labelledby="profile-tab" tabindex="0">
                <h2 class="accordion-header d-lg-none" id="headingTwo">
                   <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                   MOUNTAIN 2
                   </button>
                </h2>
                <div id="collapseTwo" class="accordion-collapse collapse d-lg-block" aria-labelledby="headingTwo" data-bs-parent="#myTabContent">
                   <div class="accordion-body">
                      <div class="accordion__content">
                         <div class="accordion__schedule__container">
                            <h3 class="accordion__content__text__title">SCHEDULE 2</h3>
                            <ul className="schedule-container">
                               <li>19 Jan 2017 <span className="schedule-venue">Vestibulum viverra</span></li>
                               <li>15 Feb 2017 <span className="schedule-venue">Vestibulum viverra</span></li>
                               <br/>
                               <li>14 Apr 2017 <span className="schedule-venue">Vestibulum viverra</span></li>
                               <br/>
                               <li>23 May 2017 <span className="schedule-venue">Vestibulum viverra</span></li>
                            </ul>
                         </div>
                      </div>
                   </div>
                </div>
             </div>
          </div>
       </div>
    </div>
 </div>
  {/* END CAROUSEL */}
 </div>
  );
}
