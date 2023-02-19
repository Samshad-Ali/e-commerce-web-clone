import React, { useEffect, useState } from "react";
import { HiOutlineUser } from "react-icons/hi";
import { BsBag, BsGlobe, BsHeadset, BsHeart, BsSearch } from "react-icons/bs";
const NavBar = () => {
  // const [scroll,setScroll]=useState(false);
  // useEffect(()=>{
  //     window.addEventListener('scroll',()=>{
  //         // if(scrollY>10){
  //             // setScroll(!scroll)
  //         // }else{
  //         //     setScroll(false)
  //         // }
  //     })
  //     return ;
  // },[])
  return (
    <div className="navContainer">
      <nav>
        <a href="https://us.shein.com/all?ici=us_tab01">All</a>
        <div>
          <ul>
            <a href="https://us.shein.com/women?ici=us_tab02">Women</a>
            <a href="https://us.shein.com/plussize?ici=us_tab03">curve</a>
            <a href="https://us.shein.com/home?ici=us_tab04">Home</a>
            <a href="https://us.shein.com/kids?ici=us_tab05">kids</a>
            <a href="https://us.shein.com/men?ici=us_tab06">men</a>
            <a href="https://us.shein.com/beauty?ici=us_tab07">Beauty</a>
          </ul>
          <h1>SHEIN</h1>
          <div className="left-side">
            <p>
              Free Returns <span>in the U.S.</span>
            </p>
            <div className="icons">
              <p>
                <HiOutlineUser />
              </p>
              <p>
                <BsBag />
                <span>0</span>
              </p>
              <p>
                <BsHeart />
                <span>0</span>
              </p>
              <p>
                <BsHeadset />
              </p>
              <p>
                <BsGlobe />
              </p>
            </div>
          </div>
        </div>
      </nav>
      <div className='mini-nav'>
   <ul>
    <li>Catergories</li>
    <li>new in</li>
    <li>trending</li>
    <li>sale</li>
    <li>shein x designers</li>
    <li>brand</li>
    <li>explore</li>
   </ul>
   <div>
    <input type="text" placeholder='search...' />
    <button>
    <BsSearch/>
    </button>
   </div>
    </div>
    </div>
    
  );
};

export default NavBar;
