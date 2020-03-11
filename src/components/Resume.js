import React, { Component } from 'react';
export default class Resume extends Component {
  render() {
    let resumeData = this.props.resumeData;
    return (
      <section id="resume">

        <div className="row education">

          <div className="three columns header-col">
            <h1><span>Education</span></h1>
          </div>

          <div className="nine columns main-col">
            {
              resumeData.education && resumeData.education.map((item) => {
                return (
                  <div className="row item">
                    <div className="twelve columns">
                      <h3>{item.UniversityName}</h3>
                      <p className="info">
                        {item.specialization}
                        <span>&bull;</span> <em className="date">{item.MonthOfPassing} {item.YearOfPassing}</em></p>
                      <p>
                        {item.Achievements}
                      </p>
                    </div>
                  </div>
                )
              })
            }
          </div>
        </div>
        <div className="row work">
          <div className="three columns header-col">
            <h1><span>Work</span></h1>
          </div>

          <div className="nine columns main-col">
            {
              resumeData.work && resumeData.work.map((item) => {
                return (
                  <div className="row item">
                    <div className="twelve columns">
                      <h3>{item.CompanyName}</h3>
                      <p className="info">
                        {item.specialization}
                        <span>&bull;</span> <em className="date">{item.MonthOfLeaving} {item.YearOfLeaving}</em></p>
                      <p>
                        {item.Achievements}
                      </p>
                    </div>

                  </div>

                )
              })
            }
          </div>
        </div>


        <div className="row skill">

          <div className="three columns header-col">
            <h1><span>Skills</span></h1>
          </div>
          <i class="devicon-git-plain" style={{fontSize:"30px"}}> </i>
          <i class="devicon-css3-plain" style={{fontSize:"30px"}}> </i>
          <i class="devicon-html5-plain" style={{fontSize:"30px"}}> </i>
          <i class="devicon-javascript-plain" style={{fontSize:"30px"}}> </i>
          <i class="devicon-java-plain" style={{fontSize:"30px"}}> </i>
          <i class="devicon-cplusplus-plain" style={{fontSize:"30px"}}> </i>
          <i class="devicon-heroku-original" style={{fontSize:"30px"}}> </i>
          <i class="devicon-linux-plain" style={{fontSize:"30px"}}> </i>
          <i class="devicon-python-plain" style={{fontSize:"30px"}}> </i>
        </div>

      </section>
    );
  }
}