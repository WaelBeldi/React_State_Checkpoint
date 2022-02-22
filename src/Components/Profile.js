import React, { Component } from "react";
import profilephoto from "./ProfilePhoto.PNG";

class Profile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      interval: null,
      timer: 0,
    };
  }

  componentDidMount() {
    this.setState({
      interval: setInterval(() => {
        this.setState({ timer: this.state.timer + 1 });
      }, 1000),
    });
  }

  componentWillUnmount() {
    clearInterval(this.state.interval);
  }

  Person = {
    fullName: "Wael Beldi",
    bio: "I was a student in Iset'Com and had the opportunity to learn many languages such as C, C++, C#, and Java. Now, I'm a FullStack JS student in GoMyCode and focusing on ReactJS and NodeJS.",
    imgSrc: profilephoto,
    profession: "Student",
  };

  render() {
    return (
      <div className="profile">
        <div>
          <img src={this.Person.imgSrc} alt="" />
        </div>
        <div>
          <h3>
            <span>FULL NAME:</span> {this.Person.fullName}
          </h3>
          <h3>
            <span>BIOGRAPHY:</span> {this.Person.bio}
          </h3>
          <h3>
            <span>PROFESSION:</span> {this.Person.profession}
          </h3>
          <h3>
            <span>TIME INTERVAL:</span> {this.state.timer} second(s)
          </h3>
        </div>
      </div>
    );
  }
}

export default Profile;
