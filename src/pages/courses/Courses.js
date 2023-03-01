import React from 'react'

import './Courses.css';


const Courses = () => {
  return (
    <main>
      <div className="main__container">
        {/* <!-- MAIN TITLE STARTS HERE --> */}

        <div className="main__title">
          
          <div className="main__greeting">
            <h1>Courses</h1>
            
          </div>
        </div>

        {/* <!-- MAIN TITLE ENDS HERE --> */}

        {/* <!-- MAIN CARDS STARTS HERE --> */}
        
        {/* <!-- MAIN CARDS ENDS HERE --> */}

        {/* <!-- CHARTS STARTS HERE --> */}
        <div className="charts">
          <div className="charts__left">
            <div className="charts__left__title">
              <div>
                <h1>Biology</h1>
              </div>            
            </div>
            {/* <Chart /> */}
          </div>
          <div className="charts__right">
            <div className="charts__right__cards">
            <div>
                <h1>SDGs</h1>   
              </div>
            </div>
          </div>
        </div>
        <div className="charts">
          <div className="charts__left">
            <div className="charts__left__title">
              <div>
                <h1>Nutrition</h1>
                
              </div>
             
            </div>
            {/* <Chart /> */}
          </div>

          <div className="charts__right">
            <div className="charts__right__title">
              <div>
                <h1>Technology</h1>
                
              </div>
              
            </div>

            <div className="charts__right__cards">
              

    
            </div>
          </div>
        </div>
        {/* <!-- CHARTS ENDS HERE --> */}
      </div>
    </main>
  );
};

export default Courses