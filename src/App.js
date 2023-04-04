import React from 'react';
import { Routes, Route } from 'react-router-dom'

import Banner from './components/banner.jsx';
import Footer from './components/footer.jsx';
import Landing from './routes/landing.jsx';
import Sponsors from './routes/sponsors.jsx';
import Contact from './routes/contact.jsx';
import Committee from './routes/committee.jsx';
import ColAUMS from './routes/colAUMS.jsx';
import Events from './routes/events.jsx';

export default class App extends React.Component {
  render() {
    return (
      <div>
	<Banner />
        <div className="bg-slate-50 m-auto min-h-screen">
	  <Routes className="m-auto min-h-screen">
	    <Route path="/" element={<Landing />} />
	    <Route path="/contact-us" element={<Contact />} />
	    <Route path="/sponsors" element={<Sponsors />} />
	    <Route path="/committee" element={<Committee />} />
	    <Route path="/colaums" element={<ColAUMS />} />
	    <Route path="/events" element={<Events />} />
	  </Routes>
	</div>
	<Footer className="z-50"/>
      </div>
    );
  }
}
