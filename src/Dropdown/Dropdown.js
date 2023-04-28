import React, { Component } from "react";

export default class Dropdown extends Component {
  constructor(props) {
    super(props);
  }
  selectOnclick(e) {
    console.log();
  }
  render() {
    return (
      <div className="select-container">
        <div className="select" onClick={this.selectOnclick.bind(this)}>
          <input
            type="text"
            id="input"
            placeholder="select"
            onfocus="this.blur();"
          />
        </div>
        <div className="option-container">
          <div className="option">
            <label> Html </label>
          </div>
          <div className="option">
            <label>CSS</label>
          </div>
          <div className="option">
            <label>JavaScript</label>
          </div>
          <div className="option">
            <label>Python</label>
          </div>
          <div className="option">
            <label>PHP</label>
          </div>
          <div className="option">
            <label>MySQL</label>
          </div>
        </div>
      </div>
    );
  }
}
