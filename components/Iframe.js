import React, { Component } from "react";

export default class Iframe extends Component {
  constructor(props, context) {
    super(props, context);
  }

  componentDidMount() {
    const doc = this.getDoc();

    if (doc) {
      console.log("componentDidMount - " + doc.readyState);

      if (doc.readyState === "complete") {
        this.handleLoad();
        // this.forceUpdate();
      } else {
        this.node.addEventListener("load", this.handleLoad);
      }
    } else {
      console.log("componentDidMount - no doc");
    }
  }

  componentDidUpdate(oldProps) {
    console.log("componentDidUpdate");

    this.writeHTML();
  }

  componentWillUnmount() {
    console.log("componentWillUnmount");

    this.node.removeEventListener("load", this.handleLoad);
  }

  getDoc() {
    return this.node ? this.node.contentDocument : null;
  }

  handleLoad = () => {
    console.log("handleLoad");

    // this.forceUpdate();
    this.writeHTML();
  };

  writeHTML() {
    let doc = this.getDoc();
    if (doc) {
      console.log("writeHTML 1");
      doc.open();
      doc.write(this.props.html);
      doc.close();
    } else {
      console.log("writeHTML 0");
    }
  }

  render() {
    return (
      <iframe
        src="about:blank"
        scrolling="yes"
        frameBorder="0"
        style={{ width: "100%", height: "100%" }}
        ref={node => {
          this.node = node;
        }}
      ></iframe>
    );
  }
}
