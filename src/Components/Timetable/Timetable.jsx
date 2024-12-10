import React from "react";
import "./Timetable.css";
import { HiPlusSmall } from "react-icons/hi2";
import { CiHome } from "react-icons/ci";
import logo from "../../Assets/Anix-Logo.png";
import { IoIosNotificationsOutline } from "react-icons/io";
import { PiStudent } from "react-icons/pi";
import { LiaChalkboardTeacherSolid } from "react-icons/lia";
import { CiMedicalClipboard } from "react-icons/ci";
import { MdKeyboardArrowDown } from "react-icons/md";
import female from "../../Assets/female1.png";
import Time from "../Time/Time";
import Monday from "../Monday/Monday";
import Sunday from "../Sunday/Sunday";
import { useState } from "react";
import { IoIosArrowUp } from "react-icons/io";
import { IoIosArrowDown } from "react-icons/io";



const Timetable = () => {


  const [open, setopen] = useState(false);
  function opendiv(params) {
    setopen(!open);
  }


  let date = "Mon";
  let date1 = "Tue";
  let date2 = "Wed";
  let date3 = "Thu";
  let date4 = "Fri";
  let date5 = "Sat";
  return (
    <>
      <div className="timetable">
        <div className="timetable_head">
          <div className="timetable_left">
            <div className="left_head1">
              <div className="left_head">
                <img src={logo} alt="" />
              </div>
              <div className="left_list">
                <div className="left_list1">
                  <p>
                    <CiHome />
                  </p>
                  <p>Dashboard</p>
                </div>
                <div className="left_list2" onClick={opendiv}>
              <div className="ta1">
                <p>
                  <LiaChalkboardTeacherSolid />
                </p>
                <p>Teaching Staff</p>
                {open ? (
                  <IoIosArrowDown className="fontsize17px fontweight600 marginleft15px " />
                ) : (
                  <IoIosArrowUp className="fontsize17px fontweight600 marginleft15px " />
                )}{" "}
              </div>{" "}
              {open && (
                <div className="dropdown">
                  <div className="time"></div>
                  <div className="time1"></div>
                  <div className="time2"></div>
                </div>
              )}
            </div>
                <div className="left_list1">
                  <p>
                    <CiMedicalClipboard />
                  </p>
                  <p>Non-Teaching Staff</p>
                </div>
                <div className="left_list1">
                  <p>
                    <PiStudent />
                  </p>
                  <p>Students</p>
                </div>
                <div className="left_list1">
                  <p>
                    <IoIosNotificationsOutline />
                  </p>
                  <p>Notification</p>
                </div>
              </div>
            </div>
            <div className="left_img">
              <img src={female} alt="" />
              <div className="left_para">
                <p className="lorem">Lorem Ipsum</p>
                <p className="mail">lorem@ipsum.com</p>
              </div>
              <p>
                <MdKeyboardArrowDown className="down_i" />
              </p>
            </div>
          </div>
          <div className="timetable_right">
            <div className="time">
              <h1>Time Table Management</h1>
              <p>
                Efficiently organize teacher schedules and class assignments for
                a smooth and structured learning experience
              </p>
            </div>
            <div className="right_btn">
              <div className="class_btn">
                <button className="class">Class</button>
                <button className="teacher">Teacher</button>
              </div>
              <HiPlusSmall className="plus" />
            </div>
            <div className="select_box">
              <div className="select_box1">
                <p>Class</p>
                <div className="sele">
                  <select name="" id="" className="selection">
                    <option value="">Grade A</option>
                    <option value="">Grade B</option>
                    <option value="">Grade C</option>
                  </select>
                </div>
              </div>
              <div className="select_box1">
                <p>Section</p>
                <div className="sele1">
                  <select name="" id="" className="selection1">
                    <option value=""> A</option>
                    <option value=""> B</option>
                    <option value=""> C</option>
                  </select>
                </div>
              </div>
            </div>
            <div className="table">
              <div className="timing">
                <Time />
              </div>
              <div className="days">
                <Monday day1={date} />
                <Monday day1={date1} />
                <Monday day1={date2} />
                <Monday day1={date3} />
                <Monday day1={date4} />
                <Monday day1={date5} />
                <Sunday />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Timetable;
