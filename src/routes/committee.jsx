import React from 'react'

import kaitie from '../assets/kaitie.jpeg';

export default class Committee extends React.Component {
  render() {
    return (
      <div className="container flex justify-center items-center min-h-screen m-auto">
	<div className="basis-1/4">
	  <h2>The AUMS Committee</h2>
	  <p>Meet the people behind AUMS</p>
	</div>
	<div className="basis-2/5 w-full">
	  <div className="bg-dark-blue p-10 rounded text-white">
	    <h2 className="text-center">Kaitie</h2>
	    <h3 className="text-center">President</h3>
	    <img className="w-3/4 m-auto my-4 rounded" src={kaitie} />
	    <p>
	      <b>Best AUMS Event so far</b>: Pub crawl! I got to meet heaps of new people and it was a really fun night.<br/>
	      <b>Favourite food</b>: You just can't go wrong with hot chips<br/>
	      <b>Favourite animal</b>: Dogs, especially my dog Monty who is a 13 year old border collie.<br/>
	      <b>Favourite sport</b>: I love playing netball but I love watching AFL and the swimming at the Olympics.<br/>
	      <b>Favourite movie</b>: Top gun was great and I'm very excited for the new one that’s coming out soon.<br/>
	    </p>
	  </div>
	</div>
      </div>
    );
  }
}
