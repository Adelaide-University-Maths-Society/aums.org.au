import React from 'react'

import EventCard from "../components/eventCard.jsx"

export default class Events extends React.Component {
  render() {
    return (
      <div className="container flex justify-center items-center min-h-screen m-auto py-12">
        <div className="basis-2/3">
	  <h2>Events</h2>
	  <p className="mb-8">Welcome to <b>colAUMS</b> - AUMS newsletter discussing cool mathematics and exciting new opportunities. ColAUMS is written by Nick and Pavithra. Please find the latest (and previous) colAUMS articles below.</p>

	  <h3>Issue 2: 1/5/2022</h3>

        <EventCard />

	  <h3>Previous Issues</h3>
	  <p className="w-full"> For previous issues, please download them below.</p>
	  <ul className="px-8 leading-10">
	    <li><a href="https://google.com/">Issue 1: 1/2/2022</a></li>
	    <li><a href="https://google.com/">Issue 1: 1/2/2022</a></li>
	    <li><a href="https://google.com/">Issue 1: 1/2/2022</a></li>
	    <li><a href="https://google.com/">Issue 1: 1/2/2022</a></li>
	    <li><a href="https://google.com/">Issue 1: 1/2/2022</a></li>
	  </ul>
	</div>
      </div>
    );
  }
}
