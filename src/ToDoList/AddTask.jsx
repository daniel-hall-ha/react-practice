import { Component } from "react";
import { createPortal } from "react-dom";

class AddTask extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return createPortal(
      <div className="fixed inset-0 z-20 bg-black/30 flex justify-center">
        <div className="w-fit h-fit p-5 bg-amber-50 flex flex-row self-center flex-warp items-center rounded-xl gap-4">
          <input
            type="text"
            placeholder={`You are adding an item to ${this.props.toDoTitle}`}
            className="w-80 mr-4 py-2 px04 focus:outline-none focus:ring-0 border-b border-gray-400"
            onChange={(e) => this.props.setTask(e.target.value)}
          />
          <button
            className="h-8 w-16 bg-sky-500 text-white text-xs cursor-pointer rounded-md"
            onClick={() => {this.props.ModalHandler(); this.props.TasksHandler()}}
          >
            Add
          </button>
          <button
            className="h-8 w-16 bg-none border border-amber-950 text-amber-950 text-xs cursor-pointer rounded-md"
            onClick={this.props.ModalHandler}
          >
            Cancel
          </button>
        </div>
      </div>,
      document.body,
    );
  }
}

export default AddTask;
