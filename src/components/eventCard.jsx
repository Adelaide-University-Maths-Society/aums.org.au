import React from 'react';

import Button from "./button.jsx"

export default class eventCard extends React.Component {
  render() {
    return(
        <div>
            <div className="flex flex-row gap-x-6">
                <div className="basis 1/2">Event Picture</div>
                <div className="basis 1/8"><b>Meet and Greet</b></div>
                <div className="basis 1/8 text-center">04/03/2023 <br /> 5:30 pm</div>
                <div className="basis 1/8">Barr Smith South 2013</div>
                <div className="basis 1/8"><Button>More Information</Button></div>
            </div>
        </div>
    )
  }
}
