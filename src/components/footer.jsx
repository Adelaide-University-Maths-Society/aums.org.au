import React from 'react'
import { Link } from 'react-router-dom';

import MediaButton from '../components/mediaButton.jsx';

import logo_svg from '../assets/logo.svg';
import logo_png from '../assets/logo.png';
import logo_circle_svg from '../assets/logo_circle.svg';

import facebook from '../assets/facebook.png';
import instagram from '../assets/instagram.png';
import linkedin from '../assets/linkedin.png';
import discord from '../assets/discord.png';

export default class Footer extends React.Component {
  render() {
    return (
      <div className="bg-dark-blue absolute grid grid-cols-2 lg:grid-cols-4 text-white py-8 z-50">
        <div className="order-3 lg:order-first flex content-center items-center m-auto">
	  <div>
	    <img className="h-52 m-auto" src={logo_svg} onerror="src={logo_circle_png}" />
	    <p className="text-center">A society for students,<br /> by students</p>
	  </div>
        </div>
	<div className="mx-8">
	  <h2 className="text-center order-first lg:order-2">Mailing List</h2>
	  <p>
	    Sign up for the AUMS mailing list in which you’ll receive promotional emails about new, and exciting research and job opportunities!
	  </p>
	  <form className="mt-12 w-full">
	    <input className="w-full p-auto h-10 p-2 rounded-sm" type="text" placeholder="your.email@domain.com" />
	  </form>
	</div>
        <div className="mx-8 order-2 lg:order-3">
          <h2>Navigate</h2>
          <ul className="font-body pl-1 underline">
            <li /><Link to="/">Home</Link>
            <li /><a href="">ColAUMS</a>
            <li /><Link to="/committee">Committee</Link>
            <li /><a href="">Register</a>
            <li /><a href="">Login</a>
            <li /><Link to="/contact-us">Contact us</Link>
            <li /><a href="">Constitution</a>
            <li /><a href="">Upcoming events</a>
            <li /><Link to="/sponsors">Sponsors</Link>
          </ul>
        </div>
        <div className="order-last mx-8 lg:order-last">
          <h2>Stay in touch</h2>
	  <div className="space-y-2 mt-4">
	    <MediaButton href="https://www.facebook.com/UofAMathsSociety" src={facebook}>Facebook</MediaButton>
	    <MediaButton href="https://www.instagram.com/AUMS_OFFICIAL" src={instagram}>Instagram</MediaButton>
	    <MediaButton href="https://au.linkedin.com/company/aums" src={linkedin}>Linkedin</MediaButton>
	    <MediaButton href="" src={discord}>Discord</MediaButton>
	  </div>
        </div>
      </div>
    );
  }
}
