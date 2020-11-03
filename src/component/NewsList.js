import React from "react";
//this is a functional component for displaying the data from db.json

const NewsList = (props) => {
  console.log("props in NewsList", props);
  const dataDisplay = props.newsdata.map((data) => {
    return (
      <div>
        <p>{data.id}</p>
        <h3>{data.title}</h3>
        <p>{data.feed}</p>
      </div>
    );
  });
  return <div>{dataDisplay}</div>;
};
export default NewsList;

//here we are passing the data from Home (parent) to Newslist (child) using props;
/* to Display the data we created method <dataDisplay> and we called that methos as:
const <method-name> = props.<prop-name>.map(.....)
here we use map method to iterate the data for display */
/*inside map we write the function*/
/* next we use filter() to filter the display data*/
