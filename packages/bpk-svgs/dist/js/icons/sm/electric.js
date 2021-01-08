import React from "react";
export default (({
  styles = {},
  ...props
}) => <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="18" height="18" style={{
  width: "1.125rem",
  height: "1.125rem"
}} {...props}><path d="M7.5 1.5c-3 0-4.925.896-5.756 2.025a1.5 1.5 0 0 0-.244.88V20.09a2.195 2.195 0 0 0 1.875 2.41h8.25a2.193 2.193 0 0 0 1.875-2.41V4.5a1.62 1.62 0 0 0-.313-1.014C12.261 2.357 10.5 1.5 7.5 1.5zm4.377 10.194l-3.784 6.182c-.182.224-.597.124-.597-.138v-3.613c0-.356-.329-.62-.81-.62H3.872c-.652 0-1.064-.509-.782-.93l.017-.027h.001l.047-.073L6.787 6.16a.2.2 0 0 1 .028-.039c.194-.203.681-.14.681.114v3.794c0 .357.334.48.814.48h2.802c.677 0 1.114.755.765 1.185zm10.623-.59v4.646a3.75 3.75 0 0 1-7.5 0v-3a1.5 1.5 0 0 1 3 0v3a.75.75 0 0 0 1.5 0v-4.646a1.5 1.5 0 0 0-.55-1.161l-3.4-2.782a1.5 1.5 0 0 1-.21-2.11V5.05a1.5 1.5 0 0 1 2.11-.21l3.4 2.78a4.5 4.5 0 0 1 1.65 3.484z" /></svg>);