
import './App.css';
import React from 'react';
import Profile from './Components/Profile';
class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      isVisible: false,
    };
  }

  toggleVisibility = () => {
    this.setState({ isVisible: !this.state.isVisible });
    console.log(this.state.isVisible);
  };

  render() {
  return (
    <div className="App">

<button className="profile-btn" onClick={this.toggleVisibility}>
          {this.state.isVisible ? 'Hide Profile' : 'Show Profile'}
        </button>
        {this.state.isVisible && <Profile  />}
      </div>
  );
}
}
export default App;
