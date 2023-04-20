import React from 'react';

class Tabs extends React.Component {
  render() {
    return (
        <div>
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
            <div class="accordion">
                <input class="accordion__radio" type="radio" name="accordion-tabs" id="tab-one" checked/>
                <label class="accordion__label" for="tab-one">MOUNTAIN 1
                    <span class="accordion-tab--status"></span>
                </label>
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
                <input class="accordion__radio" type="radio" name="accordion-tabs" id="tab-two" />
                <label class="accordion__label" for="tab-two">MOUNTAIN 2
                     <span class="accordion-tab--status"></span>
                </label>
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
    );
  }
}

export default Tabs;
