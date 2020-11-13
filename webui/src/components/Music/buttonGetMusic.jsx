import React, { useState, Component } from "react";

export default class ButtonGetMusic extends Component {
  state = {
    btnText: this.props.value,
  };

  triggerMusicData = () => {
    this.props.triggerMusicData();
    this.setState({ btnText: (this.state.value = true) });
  };

  render() {
    return (
      <React.Fragment>
        <button
          onClick={this.triggerMusicData}
          className="btn btn-primary btn-lg"
          type="button"
        >
          {this.updateBtnText()}
        </button>
      </React.Fragment>
    );
  }

  updateBtnText() {
    const { btnText } = this.state;
    return btnText === true ? "Give me another song" : "Get me a song";
  }
}
