import * as React from 'react';
import ReactDOM from 'react-dom';
import * as Server from 'react-dom/server';

function tick() {
  const element = (
    <div>
      <h1>Hello, world!</h1>
      <h2>It is {new Date().toLocaleTimeString()}.</h2>
    </div>
  );
  ReactDOM.render(element, document.getElementById('root'));
}

setInterval(tick, 1000);

//let Greet = () => <h1>Hello, world!</h1>
//ReactDOM.render(Greet, document.getElementById('root'));
//console.log(Server.renderToString(<Greet />))
