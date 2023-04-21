import React from 'react';

class Tabs extends React.Component {
  render() {
    return ( 
    <div>
        <div className="tabs-bg-image">
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
                        <li>28 Nov 2016 <span className="schedule-venue">Vestibulum viverra</span></li><br/>
                        <li>18 Dec 2016 <span className="schedule-venue">Vestibulum viverra</span></li><br/>
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
                        <li>15 Feb 2017 <span className="schedule-venue">Vestibulum viverra</span></li><br/>
                        <li>14 Apr 2017 <span className="schedule-venue">Vestibulum viverra</span></li><br/>
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
    );
  }
}

export default Tabs;
