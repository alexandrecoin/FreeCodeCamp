class App extends React.Component {
  state = {
    randomQuotes: [],
    index: 0,
  };

  componentDidMount() {}

  render() {
    const { randomQuotes, index } = this.state;

    return (
      <div className="wrapper d-flex align-items-center justify-content-center">
        <div className="col-xs-6 box p-5 rounded">
          <p>Quote</p>
          <div>
            <a href="/">Twitter</a>
            <button>Get quote</button>
          </div>
        </div>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('app'));
