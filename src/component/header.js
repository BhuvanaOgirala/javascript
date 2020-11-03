import React, { Component } from "react"; //this is a class component
import "../header.css";

class Header extends Component {
  constructor(props) {
    super();

    this.state = {
      title: "React State App",
      keyword: "User Input Here",
    };
    //to setstate value of the input
  }
  inputChange = (event) => {
    console.log(event.target.value);
    this.setState({
      keyword: event.target.value ? event.target.value : "user text here",
    });

    this.props.userText(event.target.value);
  };

  //every state change the function will render.
  render() {
    console.log("render function call");
    return (
      <React.Fragment>
        <header>
          <center>
            <div className="logo">
              <h2>{this.state.title}</h2>
            </div>

            <input onChange={this.inputChange} />
            <div style={{ color: "whitesmoke" }}>{this.state.keyword}</div>
          </center>
          <hr />
        </header>
      </React.Fragment>
    );
  }
}
export default Header;

//we export all the files to main component

//the 1st to be called in any class is "constructor" and it must have super() keyword -to inherit the property.
//without super keyword it will throw error.
//in constructor we declare constructor as they must be avaliable at the begining.
//if class component want to receive any data,they will recive in the constructor with 'props'.
//{this.state.title} is used for interpolation-data binding.
/*this.state = {
  title: "React State App",
  keyword: "User Input Here", ----- is used for declaration */
