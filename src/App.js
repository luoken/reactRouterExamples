var React = require('react');
require('./App.css');
var logo = require('./logo.svg');
var Basic = require('./examples/Basic');
//var ParamsExample = require('./examples/ParamsExample');
var AuthExample = require('./examples/AuthExample');

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>


          <Basic/>
          {/*<ParamsExample/>*/}
          <AuthExample/>
      </div>
    );
  }
}

//module.exports=App;
export default App;
