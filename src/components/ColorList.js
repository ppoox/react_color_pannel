import React, { Component } from "react";
import "./ColorList.css";

class ColorList extends Component {
  handleChage = e => {
    const { ColorListACtions } = this.props;
    ColorListACtions.changeInput(e.target.value);
  };

  handleSubmit = e => {
    e.prventDefault();
    const { ColorListAcions, CounterActions, input } = this.props;

    ColorListAcions.insert(input);
    ColorListAcions.changeInput("");
    CounterActions.changeColor(input);
  };

  handleUpdate = id => {
    const { ColorListACtions } = this.props;
    ColorListACtions.update(id);
  };

  handleRemove = id => {};

  render() {
    const { input, list } = this.props;

    return (
      <div>
        <form className="ColorList" onSubmit={this.handleSubmit}>
          <input
            value={input}
            onChange={this.handleChage}
            placeholder="원하는 색을 입력하세요"
          />
        </form>
        <ul>
          {list.map(item => {
            return (
              <div
                key={item.id}
                style={{
                  background: item.color,
                  width: "20px",
                  height: "20px"
                }}
                onClick={() => this.handleUpdate(item.id)}
              ></div>
            );
          })}
        </ul>
      </div>
    );
  }
}

export default ColorList;
