import React from "react";
export default (({
  styles = {},
  ...props
}) => <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="18" height="18" style={{
  width: "1.125rem",
  height: "1.125rem"
}} {...props}><path d="M12 1.5A10.5 10.5 0 1 0 22.5 12 10.5 10.5 0 0 0 12 1.5zM13.5 18a1.5 1.5 0 0 1-3 0H9a1.5 1.5 0 0 1 0-3h4.5a.75.75 0 0 0 0-1.5h-2.25a3.751 3.751 0 0 1-.748-7.425Q10.5 6.038 10.5 6a1.5 1.5 0 1 1 3 0H15a1.5 1.5 0 0 1 0 3h-3.75a.75.75 0 0 0 0 1.5h2.25a3.75 3.75 0 0 1 0 7.5z" /></svg>);