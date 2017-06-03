var React = require('react');
require('./App.css');
var logo = require('./logo.svg');
var Basic = require('./examples/Basic');
var ParamsExample = require('./examples/ParamsExample');
var AuthExample = require('./examples/AuthExample');
var CustomLinkExample = require('./examples/CustomLinkExample');
var PreventingTransitionsExample = require('./examples/PreventingTransitionsExample');
var NoMatchExample = require('./examples/NoMatchExample');
var RecursiveExample = require('./examples/RecursiveExample');
var Sidebar = require('./examples/Sidebar');
var AnimationExample = require('./examples/AnimationExample');
var AmbiguousExample = require('./examples/AmbiguousExample');

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
          This is to serve as React Router examples
        </p>

        <div className="App">
          <p>
            <h3>Begin Basic Example</h3>
            <Basic />
          </p>
          <br />
          <br />

          <p>
            <h3>Begin ParamsExample</h3>
            <ParamsExample />
          </p>
          <br />

          <p>
            <h3>Begin AuthExample</h3>
            <AuthExample />
          </p>
          <br />

          <p>
            <h3>Begin CustomLinkExample</h3>
            <CustomLinkExample />
          </p>
          <br />

          <p>
            <h3>Begin PreventingTransitionsExample</h3>
            <PreventingTransitionsExample />
          </p>

          <br />
          <p>
            <h3>Begin NoMatchExample</h3>
            <NoMatchExample />
          </p>

          <br/>
          {/*<p>
            <h3>Begin RecursiveExample</h3>
            <RecursiveExample />
          </p>*/}

          <br/>
          <p>
            <h3>Begin SidebarExample</h3>
            <Sidebar/>
          </p>

          <br/>
          {/*<p>
            <h3>Begin AnimatedTransitionExample</h3>
            <AnimationExample className='animation'/>
          </p>*/}
          <br/>
          <p>
            <h3>Begin AmbiguousExample</h3>
            <AmbiguousExample/>
          </p>

        </div>
      </div>


    );
  }
}


export default App;
