import React from 'react';
import { Link } from 'react-router-dom';
import img from "../../images/Safir.png"
const Footer = () => {
    return (
        <footer className="footer p-10 bg-base-200 text-base-content mt-40">
  <div>
    <img src={img} width="80px" height='80px' alt="" />
    <p>SAFIR BIKE POINT<br/>Providing reliable tech since 1992</p>
  </div> 
  <div>
    <span className="footer-title">Services</span> 
    <Link to="/explores">Explores</Link>
  </div> 
  <div>
    <span className="footer-title">Company</span> 
    <a className="link link-hover">About us</a> 
    <a className="link link-hover">Contact</a> 
    <a className="link link-hover">Jobs</a> 
    <a className="link link-hover">Press kit</a>
  </div> 
  <div>
    <span className="footer-title">Legal</span> 
    <a className="link link-hover">Terms of use</a> 
    <a className="link link-hover">Privacy policy</a> 
    <a className="link link-hover">Cookie policy</a>
  </div>
</footer>
    );
};

export default Footer;