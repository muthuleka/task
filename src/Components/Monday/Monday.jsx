import React from "react";
import "./Monday.css";

const Monday = (props) => {
  console.log(props);

  return (
    <>
      <div className="day">
        <div className="mon">
          <h3>{props.day1}</h3>
          <div className="subject">
            <div className="physics">
              <p className="phy">Physics</p>
              <p className="marry">Marry Williams</p>
            </div>
          </div>
          <div className="subject">
            <div className="chemistry">
              <p className="phy">Chemistry</p>
              <p className="marry">Marry Williams</p>
            </div>
          </div>
          <div className="subject1">
            <div className="break">
              <p className="br">Short Break</p>
              <p className="brtime">11.00-11.15</p>
            </div>
          </div>
          <div className="subject">
            <div className="english">
              <p className="phy">English</p>
              <p className="marry">Marry Williams</p>
            </div>
          </div>
          <div className="subject">
            <div className="maths">
              <p className="phy">Mathematics</p>
              <p className="marry">Marry Williams</p>
            </div>
          </div>
          <div className="subject1">
            <div className="break">
              <p className="br">Lunch Break</p>
              <p className="brtime">01.15-02.00</p>
            </div>
          </div>
          <div className="subject">
            <div className="tamil">
              <p className="phy">Tamil</p>
              <p className="marry">Marry Williams</p>
            </div>
          </div>
          <div className="subject">
            <div className="computer">
              <p className="phy">Computer Science</p>
              <p className="marry">Marry Williams</p>
            </div>
          </div>
          <div className="subject1">
            <div className="break">
              <p className="br">Short Break</p>
              <p className="brtime">11.00-11.15</p>
            </div>
          </div>
          <div className="subject">
            <div className="physics">
              <p className="phy">Physics</p>
              <p className="marry">Marry Williams</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Monday;
