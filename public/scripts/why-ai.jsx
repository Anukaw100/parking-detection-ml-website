class Header extends React.Component {
  render() {
    return (
      <header id="headerhome">
        <a href="/"> 
          <img class="logo" src="/images/logo.gif"/>
        </a>
        <nav>
          <ol class="list">
            <li><a href="/state-of-parking/">State of Parking</a></li>
            <li><a href="/why-ai/">Why A.I?</a></li>
            <li><a href="/product/">Product</a></li>
            <li id="loginicon"><a href="/login/">Login</a></li>
          </ol>
        </nav>
      </header>
    );
  }
}

class Info extends React.Component {
  render() {
    return (
      <main id="main-home">
        <div id="information">
          <h1>The Dilema of Parking!</h1>
          <p>This is Filler text purely for demonstrating
            Current parking methods are inefficient, they are time consuming,
            costly, and stressful. This is Filler text purely for demonstrating scroll, 
            This is Filler text purely for demonstrating
            Current parking methods are inefficient, they are time consuming,
            costly, and stressful. This is Filler text purely for demonstrating scroll, 
            This is Filler text purely for demonstrating
          </p> 
          <br />
          <img src="/images/busy-parking-lot.jpg" />
        </div>
      </main>
    );
  }
};

class Footer extends React.Component {
  render() {
    return (
      <footer>
        <ol class="list">
          <li><a href="https://github.com/Anukaw100/parking-detection-ml-website">GitHub</a></li>
          <li>Contact Us</li>
        </ol>
      </footer>
    );
  }
}

class Board extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <Info />
        <Footer />
      </div>
    );
  }
}

ReactDOM.render(<Board />, document.getElementById("why-ai"));
