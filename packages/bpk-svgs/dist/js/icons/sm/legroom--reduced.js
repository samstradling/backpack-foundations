import React from "react";
export default (({
  styles = {},
  ...props
}) => <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="18" height="18" style={{
  width: "1.125rem",
  height: "1.125rem"
}} {...props}><path d="M12.459 2.625a1.5 1.5 0 1 0-3 0v11.25a2.25 2.25 0 0 0 2.25 2.25h1.326a3 3 0 0 1 2.74 4.218l-.187.423a1.5 1.5 0 0 0 2.742 1.218l.187-.422a6 6 0 0 0-5.482-8.437h-.576z" /><path d="M6.459 4.125a1.5 1.5 0 0 1 1.5 1.5v9a3 3 0 0 0 3 3h1.5a1.5 1.5 0 0 1 0 3h-1.5a6 6 0 0 1-6-6v-9a1.5 1.5 0 0 1 1.5-1.5z" /></svg>);