import React from 'react';

export default class MediaButton extends React.Component {
  render() {
    return (
      <a className="flex items-center gap-x-3" href={this.props.href}>
        <img className="w-10" src={this.props.src} />
        <p>{this.props.children}</p>
      </a>
    );
  }
}
