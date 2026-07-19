import { Component } from "react";

class Buttons extends Component {
  constructor() {
    super();
  }
  render() {
    return (
      <div className="flex flex-row gap-3 justify-around">
        <button
          className="w-32 py-4 bg-sky-500 rounded-sm text-white"
          onClick={() => {
            this.props.setLike();
            this.props.setTotal();
          }}
        >
          Like (<span>{this.props.like}</span>)
        </button>
        <button
          className="w-32 py-4 bg-sky-500 rounded-sm text-white"
          onClick={() => {
            this.props.setDislike();
            this.props.setTotal();
          }}
        >
          Dislike (<span>{this.props.dislike}</span>)
        </button>
      </div>
    );
  }
}

export default Buttons;
