import React from "react";
export default (({
  styles = {},
  ...props
}) => <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="18" height="18" style={{
  width: "1.125rem",
  height: "1.125rem"
}} {...props}><path d="M13.94 1.94a1.5 1.5 0 0 1 2.12 0l6 6a1.5 1.5 0 0 1 0 2.12l-6 6a1.5 1.5 0 0 1-2.12-2.12l3.439-3.44H9a4.5 4.5 0 1 0 0 9h3a1.5 1.5 0 0 1 0 3H9a7.5 7.5 0 0 1 0-15h8.379l-3.44-3.44a1.5 1.5 0 0 1 0-2.12z" /></svg>);