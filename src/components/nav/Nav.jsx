import React from 'react';
import "./nav.css";
import {AiOutlineUser} from "react-icons/ai";
import {AiOutlineHome} from "react-icons/ai";
import {BiBook} from "react-icons/bi";
import {RiServiceLine} from "react-icons/ri";
import {BiMessageSquareDetail} from "react-icons/bi";
import { useState } from 'react';

const Nav = () => {

  const[activeNav, setActiveNav] = useState('/#');

  return (
    <nav>
    <a href="/#" className={activeNav === "/#" ? "active" : 0}><AiOutlineHome/></a>
    <a href="#about" onClick={()=>setActiveNav("#about")} className={activeNav === "#about" ? "active" : 0}><AiOutlineUser/></a>
    <a href="#experience" onClick={()=>setActiveNav("#experience")} className={activeNav === "#experience" ? "active" : 0}><BiBook/></a>
    <a href="#services" onClick={()=>setActiveNav("#services")} className={activeNav === "#services" ? "active" : 0}><RiServiceLine/></a>
    <a href="#contact" onClick={()=>setActiveNav("#contact")} className={activeNav === "#contact" ? "active" : 0}><BiMessageSquareDetail/></a>

    </nav>
  )
}

export default Nav