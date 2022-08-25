import React from 'react'

import janeStreet from '../assets/janeStreet.png';
import ernstAndYoung from '../assets/ey.png';
import imc from '../assets/imc.png';

export default class Sponsors extends React.Component {
  render() {
    return (
      <div className="container flex justify-center items-center min-h-screen m-auto py-12">
	<div className="basis-2/3">
	  <h2 className="text-center mb-4">
	    Our Sponsors
	  </h2>
	  <p>
	    As a society for the students of the University of Adelaide, we require sponsors to help run our larger events like the industry night and the AUMS quiz night. The following are our sponsors for 2022! 
	  </p>
	  <h3 className="my-8 text-center underline">
	    Gold tier
	  </h3>
	  <div className="m-auto w-fit">
	    <a href="https://imc.com">
	      <img className="max-h-16" src={imc} />
	    </a>
	  </div>
	  <h3 className="my-8 text-center underline">
	    Silver tier
	  </h3>
	  <div className="m-auto w-fit">
	    <a href="https://janestreet.com">
	      <img className="max-h-16" src={janeStreet} />
	    </a>
	  </div>
	  <h3 className="my-8 text-center underline">
	    Bronze tier
	  </h3>
	  <div className="m-auto w-fit mb-14">
	    <a href="https://ey.com">
	      <img className="max-h-16" src={ernstAndYoung} />
	    </a>
	  </div>
	
	<em className="font-body">If you would like to get envolved, please email us at <a href="mailto:sponsorships@aums.org.au">sponsorships@aums.org.au</a>.</em>
	</div>
      </div>
    );
  }
}
