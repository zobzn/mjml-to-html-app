import React from "react";

export default ({ html }) => (
  <iframe
    style={{ width: "100%", height: "100%" }}
    src="about:blank"
    scrolling="yes"
    frameBorder="0"
    srcDoc={html}
  ></iframe>
);
