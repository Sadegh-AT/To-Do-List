import React, { Component } from "react";
import "./Todo.css";
import Item from "../Item/Item";
export default class Todo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [],
      todoTitle: "",
    };
  }
  todoTitleHandler(e) {
    this.setState({
      todoTitle: e.target.value,
    });
  }
  enterKeyDownHandler(e) {
    if (e.key === "Enter") {
      let str = this.state.todoTitle.trim();
      if (str !== "") {
        let newItem = {
          id: this.state.items.length + 1,
          title: this.state.todoTitle,
        };
        this.setState((prev) => {
          return {
            items: [...prev.items, newItem],
            todoTitle: "",
          };
        });
      }
    }
  }
  render() {
    return (
      <div>
        <div className="container">
          <div className="idk">
            <div className="todo-container">
              <div className="todo-input">
                <input
                  type="text"
                  value={this.state.todoTitle}
                  onChange={this.todoTitleHandler.bind(this)}
                  onKeyDown={this.enterKeyDownHandler.bind(this)}
                />
                <button className="btn">
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
              <div className="todo-sort">
                <select>
                  <option value="">All</option>
                  <option value="">Completed</option>
                  <option value="">Uncompleted</option>
                </select>
              </div>
            </div>
            <div className="item-container">
              {this.state.items.map((item) => {
                return <Item key={item.id} {...item}></Item>;
              })}
            </div>
          </div>
        </div>
      </div>
    );
  }
}
