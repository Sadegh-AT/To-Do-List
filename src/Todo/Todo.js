import React, { Component } from "react";
import "./Todo.css";
import Item from "../Item/Item";
export default class Todo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [],
      todoTitle: "",
      validate: true,
      status: "all",
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
          completed: false,
        };
        this.setState((prev) => {
          return {
            items: [...prev.items, newItem],
            todoTitle: "",
            validate: true,
          };
        });
      } else {
        this.setState({
          validate: false,
        });
      }
    }
  }
  completeBtn(id) {
    let newList = [...this.state.items];
    newList.forEach((item) => {
      if (item.id === id) {
        item.completed = !item.completed;
      }
    });
    this.setState({
      items: newList,
    });
  }
  removeBtn(id) {
    let newList = this.state.items.filter((item) => item.id !== id);

    this.setState({
      items: newList,
    });
  }
  statusHandler(event) {
    console.log(event.target.value);
    this.setState({
      status: event.target.value,
    });
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
                <select onChange={this.statusHandler.bind(this)}>
                  <option value="all">All</option>
                  <option value="completed">Completed</option>
                  <option value="uncompleted">Uncompleted</option>
                </select>
              </div>
            </div>

            <div className="item-container">
              {this.state.status == "all" &&
                this.state.items.map((item) => {
                  return (
                    <Item
                      key={item.id}
                      {...item}
                      completedBtn={this.completeBtn.bind(this)}
                      onRemove={this.removeBtn.bind(this)}
                    ></Item>
                  );
                })}
              {this.state.status === "completed" &&
                this.state.items
                  .filter((item) => item.completed === true)
                  .map((item) => {
                    return (
                      <Item
                        key={item.id}
                        {...item}
                        completedBtn={this.completeBtn.bind(this)}
                        onRemove={this.removeBtn.bind(this)}
                      ></Item>
                    );
                  })}

              {this.state.status === "uncompleted" &&
                this.state.items
                  .filter((item) => item.completed === false)
                  .map((item) => {
                    return (
                      <Item
                        key={item.id}
                        {...item}
                        completedBtn={this.completeBtn.bind(this)}
                        onRemove={this.removeBtn.bind(this)}
                      ></Item>
                    );
                  })}
            </div>
          </div>
        </div>
      </div>
    );
  }
}
