import React from "react";
import "./Dashboard.css";
import logo from "../../Assets/logo.jpg";
import { RiCompassDiscoverLine } from "react-icons/ri";
import { BsCassette } from "react-icons/bs";
import { FaRupeeSign } from "react-icons/fa";
import { RxExit } from "react-icons/rx";
import { HiPlus } from "react-icons/hi2";
import { IoCloseOutline } from "react-icons/io5";
import { useState } from "react";
import { FiEdit } from "react-icons/fi";
import { FiUsers } from "react-icons/fi";
import { FiFileText } from "react-icons/fi";
import { IoWalletOutline } from "react-icons/io5";
import { IoIosHelpCircleOutline } from "react-icons/io";
import { LuFileType2 } from "react-icons/lu";
import { LuWallet } from "react-icons/lu";
import bill from "../../Assets/bill.jpg"









const Dashboard = () => {
  const [open,setopen] = useState(false)

  return (
    <>
      <div className="dashboard">
        <div className="board_left">
          <div className="logo">
            <img src={logo} alt="" />
            <p>HireIn5</p>
          </div>
          <div className="logo_btn1">
            <div className="logo_btn">
              <div className="gupta">
                <p>Divya Gupta</p>
                <h1>Apple Inc.</h1>
              </div>
              <div className="dg">
                <h2>DG</h2>
              </div>
            </div>
          </div>
          <div className="list">
            <div className="board_list">
              <RiCompassDiscoverLine className="list_i" />
              <p>Discover</p>
            </div>
            <div className="board_list">
            <FiUsers />


              <p>Interviews</p>
            </div>
            <div className="board_list">
            <FiFileText />
            <p>Contracts</p>
            </div>
            <div className="board_list1">
              <img src={bill} alt="" />
              <p>Billing</p>
            </div>
            <div className="board_list">
            <IoWalletOutline />


              <p>Wallet</p>
            </div>
            <div className="board_list">
            <IoIosHelpCircleOutline />


              <p>Help & FAQs</p>
            </div>
          </div>
          <div className="cash1">
            <div className="cash">
              <div className="cash_i">
              <LuWallet />

              </div>
              <div className="rupee">
                <h1>H5 Cash</h1>
                <p>
                  <FaRupeeSign className="rupee_i" />
                  5000
                </p>
              </div>
            </div>
          </div>
          <div className="logout">
            <RxExit className="exit" />
            <p> Log out</p>
          </div>
        </div>
        <div className="board_right">
          <div className="right_header">
            <div className="bill1">
              <div className="bill">
                <p>Billing</p>
                <p>
                  <span>$</span>150
                </p>
              </div>
              <div className="lowbalance">
                <p>Some caption which sets more context for this page</p>
                <button>Low Balance</button>
              </div>
            </div>
            <div className="add_btn" onClick={()=>setopen(true)}>
              <p>
                Add Credit
                <span>
                  <HiPlus className="plus"/>
                </span>
              </p>
            </div>
            <div className="right_container">
              <div className="details">
                <h1>Details</h1>
                <div className="cycle">
                  <h4>Billing cycle</h4>
                  <p>
                    Monthly <FiEdit  className="edit" />
                  </p>
                </div>
                <div className="cycle">
                  <h4>Payment method</h4>
                  <p>
                    Mastercard ending in 0076 <FiEdit  className="edit" />
                   
                  </p>
                </div>
                <div className="cycle">
                  <h4>Billing email</h4>
                  <p>
                    divya gupta@gmail.com <FiEdit  className="edit" />
                  </p>
                </div>
              </div>
              <div className="details">
                <div className="plan">
                  <h1>Current plan</h1>
                  <h2>Upgrade plan</h2>
                </div>
                <div className="cycle">
                  <h4>Type</h4>
                  <p>Starter</p>
                </div>
                <div className="cycle">
                  <h4>Amount</h4>
                  <p>
                    <FaRupeeSign className="sign" />
                    24999/month
                  </p>
                </div>
                <div className="cycle">
                  <h4>Next billing</h4>
                  <p>24/12/23</p>
                </div>
              </div>
            </div>
            <div className="invoice">
              <h2>Invoices</h2>
              <div className="invoice_box">
                <div className="invoice_heading">
                  <h5>NAME</h5>
                  <div className="invoice_pdf">
                  <LuFileType2 className="pdf" />

                  
                    <p>Invoice_no.123456</p>
                  </div>
                  <div className="invoice_pdf">
                  <LuFileType2 className="pdf" />
                  
                    <p>Invoice_no.123456</p>
                  </div>
                  <div className="invoice_pdf">
                  <LuFileType2 className="pdf" />
                    <p>Invoice_no.123456</p>
                  </div>
                </div>
                <div className="in">
                  <div className="invoice_heading1">
                    <h5>INVOICE DATE</h5>
                    <p>24/12/23</p>
                    <p>24/12/23</p>
                    <p>24/12/23</p>
                  </div>
                  <div className="invoice_heading1">
                    <h5>AMOUNT</h5>
                    <p>
                      <FaRupeeSign className="sign" />
                      24,999
                    </p>
                    <p>
                      <FaRupeeSign className="sign" />
                      24,999
                    </p>
                    <p>
                      <FaRupeeSign className="sign" />
                      24,999
                    </p>
                  </div>
                  <div className="invoice_heading1">
                    <h5>STATUS</h5>
                    <p>
                      <span className="paid">Paid</span>
                    </p>
                    <p>
                      <span className="paid">Paid</span>
                    </p>
                    <p>
                      <span className="paid">Paid</span>
                    </p>
                  </div>
                  <div className="invoice_heading1">
                    <h5 title="">STATUS</h5>

                    <button>
                      <span>Download</span>
                    </button>
                    <button>
                      <span>Download</span>
                    </button>
                    <button>
                      <span>Download</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className={open ? "popup" : "popup1"} onClick={()=>setopen(false)} >
        <div className="popup_head" onClick={(e)=>e.stopPropagation()}>
          <div className="pop">
            <h3>Add Credit to your Wallet</h3>
            <IoCloseOutline className="close_i" onClick={()=>setopen(false)} />
          </div>
          <div className="overlay1">
            <div className="overlay">
              <p>
                <span>$</span>150
              </p>
              <h4>Current Balance</h4>
            </div>
            <input type="text" name="" id="" />

            <div className="overlay_input">
              <div className="btns">
                <p>
                  <span>$500</span>
                </p>
                <p>
                  <span>$1000</span>
                </p>
                <p>
                  <span>$1500</span>
                </p>
              </div>
              <button>Add Credit</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
