import React, { Component } from "react";
import "./ColorList.css";

class ColorList extends Component {
  handleChange = e => {
    const { ColorListActions } = this.props;
    ColorListActions.changeInput(e.target.value);
  };

  handleSubmit = e => {
    e.preventDefault();
    const { ColorListActions, CounterActions, input } = this.props;

    ColorListActions.insert(input);
    CounterActions.changeColor(input);
    ColorListActions.changeInput("");
  };

  handleUpdate = id => {
    const { ColorListActions } = this.props;
    ColorListActions.update(id);
  };

  handleRemove = id => {
    const { ColorListActions } = this.props;
    ColorListActions.remove(id);
  };

  render() {
    const { input, list } = this.props;

    return (
      <div>
        <form className="ColorList" onSubmit={this.handleSubmit}>
          <input
            value={input}
            onChange={this.handleChange}
            placeholder="원하는 색을 입력하세요"
          />
        </form>
        <ul>
          {list.map(item => {
              return (
                  <div
                      key={item.id}
                      style={{
                          backgroundColor: item.color,
                          opacity: item.opacity,
                          width: '50px',
                          height: '50px',
                          float: 'left'
                      }}
                      onClick={() => this.handleUpdate(item.id)}
                      onContextMenu={e => {
                          e.preventDefault();
                          this.handleRemove(item.id);
                      }}
                  />
              );
          })}
        </ul>
      </div>
    );
  }
}

export default ColorList;
