import React from "react";
export default (({
  styles = {},
  ...props
}) => <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="18" height="18" style={{
  width: "1.125rem",
  height: "1.125rem"
}} {...props}><path d="M19.5 7.5h-.75a.75.75 0 0 1-.75-.75V5.385a2.21 2.21 0 0 0-.555-1.5 7.442 7.442 0 0 0-10.988.075A2.138 2.138 0 0 0 6 5.32v1.43a.75.75 0 0 1-.75.75H4.5a3 3 0 0 0-3 3v9a3 3 0 0 0 3 3h15a3 3 0 0 0 3-3v-9a3 3 0 0 0-3-3zM9 6.417a1.003 1.003 0 0 1 .23-.684A3.862 3.862 0 0 1 12 4.5a3.794 3.794 0 0 1 2.758 1.262 1.048 1.048 0 0 1 .242.71V7c0 .276-.168.5-.375.5h-5.25C9.168 7.5 9 7.276 9 7zM15 16.5h-1.5V18a1.5 1.5 0 0 1-3 0v-1.5H9a1.5 1.5 0 0 1 0-3h1.5V12a1.5 1.5 0 0 1 3 0v1.5H15a1.5 1.5 0 0 1 0 3z" /></svg>);