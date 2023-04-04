import React from 'react'

import Button from '../components/button.jsx';
import Hexagon from '../components/hexagon.jsx';
import logo_svg from '../assets/logo.svg';
import promotional_photo from '../assets/industry_night.jpg';

export default class Landing extends React.Component {
  render() {
    return (
      <div>
	<div className="h-screen bg-dark-blue grid grid-cols-1 xl:grid-cols-2 xl:gap-4 content-center justify-items-center px-4 relative z-10">
	  <img className="xl:justify-self-end max-w-xs w-full pt-auto px-10 xl:px-0" src={logo_svg} onerror="this.src={logo_png}" alt="AUMS logo" />
	  <div className="xl:justify-self-start self-center">
	    <h1 className="mx-4 xl:mx-0 text-yellow text-center max-w-lg xl:text-left">
	      Adelaide University Maths Society
	    </h1>
	    <p className="mx-4 xl:mx-0 text-white text-center xl:text-left">
	      Come for the pizza, stay for the maths
	    </p>
	    <div className="flex flex-row justify-center xl:justify-start mt-4 gap-2">
	      <Button>
		Join
	      </Button>
	      <Button href="#about-us">
		About us
	      </Button>
	    </div>
	  </div>
	</div>
	<Hexagon className="invisible" />
	<div className="container m-auto px-4 z-10 relative pointer-events-none" id="about-us">
	  <div className="flex min-h-screen content-center gap-x-8 gap-y-8 flex-col md:flex-row-reverse place-content-center">
	    <div className="md:basis-1/2 place-self-center space-y-5">
	      <h2 className="border-b-4 border-black m-auto w-fit">About us</h2>
	      <p>
	      The Adelaide University Mathematics Society is a student run society that works to enrich the lives and education of students studying in the School of Mathematics. The society does this through the running of a number of community event's such as student research presentations, charity quiz nights and industry engagement nights. As well as helping enrich the community, the society also produces and sells revision materials to students. The students the run the society work in their free time to ensure that every student studying mathematics has the opportunity to have the best experience possible.
	      </p>

	      <p>To see news from us, follow us on <a className="text-blue-700" href="https://www.facebook.com/UofAMathsSociety">facebook</a>, <a className="text-blue-700" href="https://www.instagram.com/AUMS_OFFICIAL">instagram</a>, <a className="text-blue-700" href="https://au.linkedin.com/company/aums">linkedin</a> and join us on <a className="text-blue-700" href="">discord</a>.</p>

	    </div>
	    <div className="md:basis-2/5 place-self-center pointer-events-none">
	      <img className="w-full" src={promotional_photo}/>
	    </div>
	  </div>
	</div>
      </div>
    );
  }
}
