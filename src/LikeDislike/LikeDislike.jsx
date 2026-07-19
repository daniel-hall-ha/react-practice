import { Component } from "react";
import Buttons from "./Buttons.jsx";
import Content from "./Content.jsx"

class LikeDislike extends Component {
    constructor() {
        super()
        this.state = { like: 0, dislike: 0, total: 0 }
    }
    render() {
        return(
            <div className="w-150 h-150 shadow shadow-gray-100 flex flex-col gap-6 justify-center items-center">
                <Content />
                <Buttons 
                    like={this.state.like}
                    dislike={this.state.dislike}
                    total={this.state.total}
                    setLike={()=>{
                        this.setState({like: this.state.like + 1})
                    }}
                    setDislike={()=>{
                        this.setState({dislike: this.state.dislike + 1})
                    }}
                    setTotal={()=>{
                        this.setState({total: this.state.total + 1})
                    }}
                />
                <div className="flex justify-center items-center">
                    Total Interactions<span>: {this.state.total}</span>
                </div>
            </div>
        )
    }
}

export default LikeDislike