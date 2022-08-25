import React from 'react';
import { Link } from 'react-router-dom';

export default class Banner extends React.Component {
  render() {
    return (
      <div className="bg-dark-blue w-full h-14 grid grid-cols-3 items-center px-4 z-50">
        <Link className="ml-8 justify-self-start text-white font-semibold" to="/">Home</Link>
        <div className="justify-self-center">
        </div>
        <div className="justify-self-end">
          <div className="h-full flex flex-row gap-4 justify-self-center text-white font-semibold mr-8">
            <Link to="/contact-us">Contact</Link>
            <Link to="/sponsors">Sponsors</Link>
            <Link to="/colaums">ColAUMS</Link>
            <a href="">Login</a>
          </div>
        </div>
      </div>
    );
  }
}
