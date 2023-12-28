import React from 'react';

function test() {
  var ny = Math.ceil(window.innerHeight / 50) + 1;
  var nxMax = Math.floor(window.innerWidth * 0.4 / 50);
  var genRow = (n, rowIndex) => [...Array(n)].map((e, i) => <div key={`hex-${rowIndex}-${i}`} className="hexagon"></div>);

  var res = [];

  var lastLength = Math.ceil(nxMax * 2 / 3);

  for (let r = 0; r < ny; r++) {
    console.log(lastLength);
    lastLength -= Math.floor(Math.random() * 3) - 1;
    //lastLength = lastLength >= nxMax ? nxMax - 1 : lastLength

    res = res.concat(genRow(lastLength, r));
    res.push(<br key={`br-${r}`} />);
  }

  return res;
}

export default class Hexagon extends React.Component {
  render() {
    console.log(test());
    return (
      <div className="flex z-0 absolute left-[-25px] top-[calc(25px)]">
        <div className="hexagon-grid z-0">
          {test()}
        </div>
      </div>
    );
  }
}
