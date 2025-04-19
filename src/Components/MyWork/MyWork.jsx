import React from 'react';
import './MyWork.css';
import pattern from '../../assets/pattern.svg';
import mywork_data from '../../assets/mywork_data';
import arrow_icon from '../../assets/arrow_icon.svg';

const MyWork = () => {
  return (
    <div id='work' className='mywork'>
      <div className="mywork-title">
        <h1>My Latest Work</h1>
        <img src={pattern} alt="" />
      </div>
      <div className="mywork-container">
        {
          mywork_data.map((work, index) => {
            return (
              <div key={index} className="work-item">
                <img className="work-image" src={work.w_img} alt={work.w_name} />
                <h1 className="work-name">{work.w_name}</h1> {/* Project name */}
                
              </div>
            );
          })
        }
      </div>
    </div>
  );
}

export default MyWork;
