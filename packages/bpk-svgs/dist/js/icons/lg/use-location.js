import React from "react";
export default (({
  styles = {},
  ...props
}) => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" style={{
  width: "1.5rem",
  height: "1.5rem"
}} {...props}><path d="M3.959 8.649l16.007-6.072a1.13 1.13 0 0 1 1.458 1.458L15.352 20.04a2.26 2.26 0 0 1-4.135.21l-1.923-3.846a3.8 3.8 0 0 0-1.7-1.7l-3.844-1.92a2.26 2.26 0 0 1 .21-4.135z" /></svg>);