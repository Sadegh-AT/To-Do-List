import React, { Component } from "react";
import "./Todo.css";
export default class Todo extends Component {
  render() {
    return (
      <div>
        <div className="container">
          <div className="todo-container">
            <div className="todo-input">
              <input type="text" />
              <button>
                <svg
                  width="29"
                  height="29"
                  viewBox="0 0 29 29"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M14.5 7.25L14.5 21.75"
                    stroke="#1E1E1E"
                    stroke-width="3"
                    stroke-linecap="square"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M21.75 14.5L7.25 14.5"
                    stroke="#1E1E1E"
                    stroke-width="3"
                    stroke-linecap="square"
                    stroke-linejoin="round"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}