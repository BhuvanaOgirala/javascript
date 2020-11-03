import React, { Component } from "react"; // to make components
import Header from "./header";
import Footer from "./footer";
import Data from "../db.json";
import NewsList from "./NewsList";

class Home extends Component {
  constructor() {
    super();

    this.state = {
      news: Data,
      filtered: Data,
    };
  }

  //to filter the DATA based on what user is typing
  //a.filter((data)=>{return data>45})

  filterNews(keyword) {
    const output = this.state.news.filter((data) => {
      return data.title.toLowerCase().indexOf(keyword.toLowerCase()) > -1;
    });
    this.setState({ filtered: output });
  }

  render() {
    console.log(this.state.news);
    return (
      <React.Fragment>
        <Header
          userText={(data) => {
            this.filterNews(data);
          }}
        />
        <NewsList newsdata={this.state.filtered} />
        <hr />
        <Footer year="2020" month="sep" />
      </React.Fragment>
    );
  }
}
export default Home;
//. newsdata is our prop name given by the user and passed to the newslist component.
// Here we are making Home component as class component to import data and we used state news to import data
/*
const Home = () => {
  return (
    <React.Fragment>
      <hr />
      <Header />
      <h1>Welcome to React</h1>
      <h3>Developer Funnel</h3>
      <hr />
      <Footer year="2020" month="sep" />.
    </React.Fragment>
  );
};  */

////we are passing 2parameters(attribute) called year and month to footer component
