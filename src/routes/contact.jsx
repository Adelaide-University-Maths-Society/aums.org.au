import React from 'react'

import Button from '../components/button.jsx';

export default class Contact extends React.Component {
  render() {
    return (
      <div className="container p-8 flex justify-center items-center min-h-screen m-auto flex-col lg:flex-row gap-8">
	<div className="lg:basis-1/6">
	  <h2>Contact Us</h2>
	  Please contact us using the form on this page or email us at <a href="mailto:hello@aums.org.au">hello@aums.org.au</a>.
	</div>
	<form className="lg:basis-1/3 flex flex-col gap-y-2">
	  <div className="flex basis-1/2 w-fill gap-x-4">
	    <div>
	      <p>First Name:</p> 
	      <input className="h-10 w-fill p-2" type="text"/>
	    </div>
	    <div>
	      <p>Last Name:</p> 
	      <input className="h-10 w-fill p-2" type="text"/>
	    </div>
	  </div>
	  <div className="w-full">
	    <p>Email Address:</p>
	    <input className="w-full p-2 h-10" type="text"/>
	  </div>
	  <div>
	    <p>Enquiry:</p>
	    <textarea className="p-2 h-64 w-full" />
	  </div>
	  <Button>
	    Submit
	  </Button>
	</form>
      </div>
    );
  }
}
