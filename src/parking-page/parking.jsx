import React from "react";
import ReactDOM from "react-dom";
import { Header, Footer } from "Common/common-sections.jsx";
import Cover from "Images/busy-parking-lot.jpg";
import "Common/universal.css";

function Info() {
  return (
    <main className="container">
      <h1>Parking Is Tough</h1>
      <img src={Cover} />
      <div className="columns">
        <div className="col col-1">
          <h2>A Waste</h2>
          <p>
            A common problem that drivers face nowadays, especially in busy
            public urban areas, is parking lot congestion.
          </p>
        </div>
        <div className="col col-2">
          <h2>No One Wins</h2>
          <p>
            Road rage is undoubtedly a product of the frustration of finding
            parking spots which can put other drivers at risk. And not only does
            it cause stress and anger for the drivers behind the wheel but it
            also means that some are totally abandoning trips all together. This
            hurts the business that could have had customers but lost them due
            to customers not wanting to endure the associated parking
            difficulties. Due to insufficient numbers of parking spots and no
            idea of where a parking spot may be even available, users who try to
            find parking spots spend a lot of time "cruising" around trying to
            find empty spots to park their vehicle resulting in wasted time and
            petrol costs that cause damage to the environment.
          </p>
        </div>
        <div className="col col-1 col-bg">
          <p>
            Americans spend on average 17 hours per year at a cost of $73
            billion dollars searching for parking.
          </p>
        </div>
      </div>
      <div className="columns">
        <div className="col col-3">
          <h2>Current Solutions To The Problem</h2>
          <p>
            One solution to this problem is to expand the size and/or quantity
            of parking areas. This solution presents several problems however as
            opportune land that could be used to construct parking lots is
            finite and expansion incurs considerable costs on the economy.
            Architectural constraints in the proposed area would also need to be
            accounted for, such as building around shops and roads. Hence,
            infinitely expanding the parking area is a non-viable solution.
            Another solution is to efficiently direct drivers to empty parking
            spaces to speed up the parking cycle. Several viable applications
            already exist on the commercial market to detect occupied parking
            spaces. Most of these applications use physical sensors attached
            around a parking space to detect the presence of a vehicle (Smart
            Parking Ltd, n.d.; Bosch Connected Devices and Solutions GmbH,
            n.d.). These applications are able to reliably detect the presence
            of a vehicle and transfer information based on cloud, wireless, and
            Internet of Things (IoT) devices. However, scaling this solution
            application to an expanded parking lot requires proportional
            investment to install new parking sensors and appropriate receivers.
            This could result in increased financial burden on the parking lot
            maintainer, due in part to the greater amount of equipment that
            needs maintenance after expansion.
          </p>
        </div>
        <div className="col col-1 col-bg">
          <p>
            The focus of our work is to let people know when and where a parking
            spot is available. This is done using a field in computer vision
            technology called "Object Detection".
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
