import React from "react";
import ReactDOM from "react-dom";
import { Header, Footer } from "Common/common-sections.jsx";
import Cover from "Images/ai-cover.jpg";
import "Common/universal.css";

function Info() {
  return (
    <main className="container">
      <h1>AI For Parking</h1>
      <img src={Cover}/>
      <div className="columns">
        <div className="col col-1">
          <h2>Object Detection</h2>
          <p>
            Object detection has become one of the hottest topics in the field
            of computer vision - enabling computers to better understand
            digital images and videos
          </p>
        </div>
        <div className="col col-2">
          <h2>TODO <em>Our Solution</em></h2>
        </div>
        <div className="col col-1 col-bg">
          <p>
            Object detection is a sub-field of computer vision. Which in turn is
            a sub-field of Artificial Intelligence. Helping computers understand
            different parking scenarios is a complex task.
          </p>
        </div>
      </div>
      <div className="columns">
        <div className="col col-3">
          <h2>TODO <em>Research Method</em></h2>
        </div>
        <div className="col col-1 col-bg">
          <p>
            Demo our solution to show how we used object detection by uploading
            an image of parking lot.
          </p>
        </div>
      </div>
    </main>
  );
}

function App() {
  return (
    <React.Fragment>
      <Header />
      <Info />
      <Footer />
    </React.Fragment>
  );
}

ReactDOM.render(<App />, document.getElementById("root"));
