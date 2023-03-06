import React from 'react'
import './Courses.css';
import { AiOutlineDownload } from 'react-icons/ai'


const Courses = () => {
  return (
    <main>  
      <div className="main__container">        
        <div className="main__greeting">
              <h1>Courses</h1>  
        </div>
        <div className="charts">
          
          <div className="charts__left">
            <div className='charts__left__download__icon'>
                <a href='Things.pdf' download><AiOutlineDownload color="green" fontSize="1.5em"/></a>
            </div>
            <div className='charts__left__img'>
                <svg id="Layer_1" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 350.68 360.18"><title>water_level</title><path d="M4167.8,1208a41.44,41.44,0,0,0-41.4,41.39v51.08a46.66,46.66,0,0,1-41.67-46.33,15.23,15.23,0,1,0-30.45,0,46.6,46.6,0,0,1-93.19,0,15.23,15.23,0,0,0-30.46,0,46.65,46.65,0,0,1-41.67,46.33v-51.08a41.44,41.44,0,0,0-41.39-41.39,15.23,15.23,0,1,0,0,30.46,10.94,10.94,0,0,1,10.93,10.93v266.34a52.51,52.51,0,0,0,52.45,52.45h193.47a52.51,52.51,0,0,0,52.44-52.45V1249.37a11,11,0,0,1,10.94-10.93,15.23,15.23,0,0,0,0-30.46Zm-41.4,307.73a22,22,0,0,1-22,22H3911a22,22,0,0,1-22-22v-35.66h15.68a15.23,15.23,0,1,0,0-30.45H3889v-52h15.68a15.23,15.23,0,1,0,0-30.46H3889V1331a77.05,77.05,0,0,0,56.9-31,77,77,0,0,0,123.65,0,77,77,0,0,0,56.89,31Z" transform="translate(-3832.34 -1207.98)"/></svg>
            </div>
            <div className="charts__left__title">
                <h1>Biology</h1>
            </div>            
          </div>
          <div className="charts__right">
          <div className='charts__right__download__icon'>
          <a href='Things.pdf' download><AiOutlineDownload color="green" fontSize="1.5em"/></a>
            </div>
          <div className='charts__right__img'>
            <svg id="Layer_1" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 350.68 360.18"><title>water_level</title><path d="M4167.8,1208a41.44,41.44,0,0,0-41.4,41.39v51.08a46.66,46.66,0,0,1-41.67-46.33,15.23,15.23,0,1,0-30.45,0,46.6,46.6,0,0,1-93.19,0,15.23,15.23,0,0,0-30.46,0,46.65,46.65,0,0,1-41.67,46.33v-51.08a41.44,41.44,0,0,0-41.39-41.39,15.23,15.23,0,1,0,0,30.46,10.94,10.94,0,0,1,10.93,10.93v266.34a52.51,52.51,0,0,0,52.45,52.45h193.47a52.51,52.51,0,0,0,52.44-52.45V1249.37a11,11,0,0,1,10.94-10.93,15.23,15.23,0,0,0,0-30.46Zm-41.4,307.73a22,22,0,0,1-22,22H3911a22,22,0,0,1-22-22v-35.66h15.68a15.23,15.23,0,1,0,0-30.45H3889v-52h15.68a15.23,15.23,0,1,0,0-30.46H3889V1331a77.05,77.05,0,0,0,56.9-31,77,77,0,0,0,123.65,0,77,77,0,0,0,56.89,31Z" transform="translate(-3832.34 -1207.98)"/></svg>
            </div>
            <div className="charts__right__title">
                <h1>SDGs</h1>   
            </div>
            
          </div>
        </div>
        <div className="charts">
          <div className="charts__left">
          <div className='charts__left__download__icon'>
          <a href='Things.pdf' download><AiOutlineDownload color="green" fontSize="1.5em"/></a>
            </div>
          <div className='charts__left__img'>
            <svg id="Layer_1" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 350.68 360.18"><title>water_level</title><path d="M4167.8,1208a41.44,41.44,0,0,0-41.4,41.39v51.08a46.66,46.66,0,0,1-41.67-46.33,15.23,15.23,0,1,0-30.45,0,46.6,46.6,0,0,1-93.19,0,15.23,15.23,0,0,0-30.46,0,46.65,46.65,0,0,1-41.67,46.33v-51.08a41.44,41.44,0,0,0-41.39-41.39,15.23,15.23,0,1,0,0,30.46,10.94,10.94,0,0,1,10.93,10.93v266.34a52.51,52.51,0,0,0,52.45,52.45h193.47a52.51,52.51,0,0,0,52.44-52.45V1249.37a11,11,0,0,1,10.94-10.93,15.23,15.23,0,0,0,0-30.46Zm-41.4,307.73a22,22,0,0,1-22,22H3911a22,22,0,0,1-22-22v-35.66h15.68a15.23,15.23,0,1,0,0-30.45H3889v-52h15.68a15.23,15.23,0,1,0,0-30.46H3889V1331a77.05,77.05,0,0,0,56.9-31,77,77,0,0,0,123.65,0,77,77,0,0,0,56.89,31Z" transform="translate(-3832.34 -1207.98)"/></svg>
            </div>
            <div className="charts__left__title">
                <h1>Nutrition</h1>
            </div>
           
          </div>
          <div className="charts__right">
          <div className='charts__right__download__icon'>
          <a href='Things.pdf' download><AiOutlineDownload color="green" fontSize="1.5em"/></a>
            </div>
          <div className='charts__right__img'>
            <svg id="Layer_1" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 350.68 360.18"><title>water_level</title><path d="M4167.8,1208a41.44,41.44,0,0,0-41.4,41.39v51.08a46.66,46.66,0,0,1-41.67-46.33,15.23,15.23,0,1,0-30.45,0,46.6,46.6,0,0,1-93.19,0,15.23,15.23,0,0,0-30.46,0,46.65,46.65,0,0,1-41.67,46.33v-51.08a41.44,41.44,0,0,0-41.39-41.39,15.23,15.23,0,1,0,0,30.46,10.94,10.94,0,0,1,10.93,10.93v266.34a52.51,52.51,0,0,0,52.45,52.45h193.47a52.51,52.51,0,0,0,52.44-52.45V1249.37a11,11,0,0,1,10.94-10.93,15.23,15.23,0,0,0,0-30.46Zm-41.4,307.73a22,22,0,0,1-22,22H3911a22,22,0,0,1-22-22v-35.66h15.68a15.23,15.23,0,1,0,0-30.45H3889v-52h15.68a15.23,15.23,0,1,0,0-30.46H3889V1331a77.05,77.05,0,0,0,56.9-31,77,77,0,0,0,123.65,0,77,77,0,0,0,56.89,31Z" transform="translate(-3832.34 -1207.98)"/></svg>
            </div>
            <div className="charts__right__title">
                <h1>Technology</h1>      
            </div>
           
          </div>
        </div>
      </div>
    </main>
  );
};

export default Courses