import React from 'react';

import logo_svg from '../assets/logo.svg';
import logo_png from '../assets/logo.png';

export default class Banner extends React.Component {
  render() {
    return (
      <a href={this.props.href}>
	<button className="bg-orange rounded-sm h-12 font-semibold w-24 text-white hover:border-2 shadow-lg">
	  {this.props.children}
	</button>
      </a>
    );
  }
}
