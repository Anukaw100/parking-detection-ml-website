import React from "react";
import ReactDOM from "react-dom";

import { Header, Footer } from "Common/common-sections.jsx";
import "Common/universal.css";
import "./product.css";

class Uploader extends React.Component {
  constructor(props) {
    super(props);
    this.fileInput = React.createRef();
    this.state = { fileURL: '' };  // TODO Add default image.
  }

  readFileAndURL(event) {
    // [Help by Adam Lusk](https://vadlusk.medium.com/a-newbs-guide-working-with-user-uploaded-image-files-with-react-23795c6da346)
    event.preventDefault();
    const fileReader = new FileReader();
    fileReader.onload = () => { this.setState({ fileURL: fileReader.result })};
    fileReader.readAsDataURL(event.target.files[0]);
  }

  render() {
    return (
      <main className="container">
        <h1>Try our product</h1>
        <p>Upload an image of a parking lot here to see a labelled image of
            all the vacant and occupied parking spaces.
        </p>
        <form>
          <input
            type="file"
            ref={this.fileInput}
            accept="image/*"
            onChange={event => this.readFileAndURL(event)}
            style={{ display: 'none' }}
          />
          <img
            onClick={() => this.fileInput.current.click()}
            onDrop={event => this.readFileAndURL(event.dataTransfer.files[0])}
            src={this.state.fileURL}
            height="300"
            width="400"
            alt="Click/Drag to upload image"
          />
          <button type="submit">Find parking spaces</button>  {/* FIXME */}
        </form>
      </main>
    );
  }
}

class App extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <Uploader />
        <Footer />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("root"));
