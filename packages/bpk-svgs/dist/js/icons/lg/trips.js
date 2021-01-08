import React from "react";
export default (({
  styles = {},
  ...props
}) => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" style={{
  width: "1.5rem",
  height: "1.5rem"
}} {...props}><path d="M12 2.5a7.718 7.718 0 0 0-5.543 2.227A1.808 1.808 0 0 0 6 5.955V20.5a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1V6.015a1.89 1.89 0 0 0-.555-1.356A7.794 7.794 0 0 0 12 2.5zM16 7a.5.5 0 0 1-.5.5h-7A.5.5 0 0 1 8 7v-.583a.86.86 0 0 1 .306-.684A6 6 0 0 1 12 4.5a5.858 5.858 0 0 1 3.677 1.262.899.899 0 0 1 .323.71zm5 2.447v10.106a1.925 1.925 0 0 1-1.01 1.669c-.494.278-.99-.194-.99-.761V8.539c0-.567.496-1.039.99-.76A1.923 1.923 0 0 1 21 9.447zM5 8.539v11.922c0 .567-.496 1.039-.99.761A1.925 1.925 0 0 1 3 19.553V9.447a1.923 1.923 0 0 1 1.01-1.668c.494-.279.99.193.99.76z" /></svg>);