import React from "react";

const Footer = (props) => {
  console.log(props);
  return (
    <React.Fragment>
      <hr />
      <center>
        <h3>
          &copy; Developer Funnel {props.month} {props.year}
        </h3>
      </center>
    </React.Fragment>
  );
};
export default Footer;

//here in footer we are receiving a parameter called 'props' as {props.month}....

//we are passing the data from index to footer component through prop.
//Home component-acts like parent
//footer component-acts like child.
