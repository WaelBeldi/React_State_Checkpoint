// import './App.css';

// function App() {
//   return (
//     <div className="App">

//     </div>
//   );
// }

// export default App;

import React, { Component } from "react";
import Profile from "./Components/Profile";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { isVisible: false };
  }

  toggleVisibility = () => {
    this.setState({ isVisible: !this.state.isVisible });
  };

  render() {
    return (
      <div className="App">
        <div className="div__button">
          <button onClick={this.toggleVisibility}>
            {this.state.isVisible ? "Hide profile" : "Show profile"}
          </button>
        </div>
        {this.state.isVisible && <Profile />}
      </div>
    );
  }
}

export default App;
