import { Component } from "react";
import { createPortal } from "react-dom";

class SuccessModal extends Component {

    OKHandler = () => {
        this.props.setShowSubmission(!this.props.showSubmission)
    }

    render() {
        return createPortal(
            <div className="fixed inset-0 z-20 bg-black/30 flex justify-center">
                <div className="w-1/5 h-1/4 bg-amber-50 flex flex-col self-center justify-center items-center rounded-2xl gap-4">
                    <i class="fa-solid fa-circle-check text-4xl"></i>
                    <p>Success</p>
                    <button className="px-4 py-2 w-fit bg-sky-500 text-sm cursor-pointer" onClick={this.OKHandler}>OK</button>
                </div>
            </div>,
            document.body
        )
    }
}

export default SuccessModal