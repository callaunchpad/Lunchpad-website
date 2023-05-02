import React, { Component } from "react";
import Resizer from "react-image-file-resizer";

class Help extends Component {
  constructor(props) {
    super(props);
    this.fileChangedHandler = this.fileChangedHandler.bind(this);
    this.state = {
      newImage: "",
    };
  }

  fileChangedHandler(event) {
    var fileInput = false;
    if (event.target.files[0]) {
      fileInput = true;
    }
    if (fileInput) {
      try {
        Resizer.imageFileResizer(
          event.target.files[0],
          256,
          256,
          "JPEG",
          100,
          0,
          (uri) => {
            console.log(uri);
            this.setState({ newImage: uri });
          },
          "base64",
          200,
          200
        );
      } catch (err) {
        console.log(err);
      }
    }
  }

  render() {
    return (
      <div className="Help">
        <input type="file" onChange={this.fileChangedHandler} />
        <img src={this.state.newImage} alt="" />
      </div>
    );
  }
}

export default Help;