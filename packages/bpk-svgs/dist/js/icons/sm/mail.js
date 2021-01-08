import React from "react";
export default (({
  styles = {},
  ...props
}) => <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="18" height="18" style={{
  width: "1.125rem",
  height: "1.125rem"
}} {...props}><path d="M1.55 5.448a.65.65 0 0 0 .417.7l9.743 4.102a.75.75 0 0 0 .581 0l9.743-4.102a.649.649 0 0 0 .416-.7A3 3 0 0 0 19.5 3h-15a3.001 3.001 0 0 0-2.95 2.448z" /><path d="M22.5 8.836a.75.75 0 0 0-1.04-.691l-8.878 3.738a1.5 1.5 0 0 1-1.164 0L2.541 8.145a.75.75 0 0 0-1.042.691V18a3 3 0 0 0 3 3h15a3 3 0 0 0 3-3V8.836z" /></svg>);