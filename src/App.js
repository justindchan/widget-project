import React from 'react';
import Header from './components/Header.js';
import WidgetBar from "./components/WidgetBar.js";
// import ReactDom from 'react-dom';


class App extends React.Component {
  constructor() {
    super ();
    
    this.state = {
      value: ""
    };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    const { value } = event.target;
    this.setState(() => {
      return {
        value
      };
    });
  }

  render() {
    return (
      <div>
        <Header />
        <div>
          <form>
            <input
              type="text"
              value={this.state.value}
              onChange={this.handleChange}
              />
          </form>
        </div>
        <WidgetBar />
      </div>
    );
  }
}

export default App