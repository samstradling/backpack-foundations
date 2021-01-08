import React from "react";
export default (({
  styles = {},
  ...props
}) => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" style={{
  width: "1.5rem",
  height: "1.5rem"
}} {...props}><path d="M13.893 5.066l5.04 5.04-9.898 9.9a2.24 2.24 0 0 1-.995.577l-5.096 1.39a.747.747 0 0 1-.917-.918l1.39-5.095a2.239 2.239 0 0 1 .577-.995l9.899-9.9zm7.063-2.022a3.564 3.564 0 0 1 0 5.04l-.966.966-5.041-5.04.966-.966a3.564 3.564 0 0 1 5.04 0z" /></svg>);