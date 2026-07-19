import { Component } from "react";

class Card extends Component{
    constructor(props) {
        super(props)
    }

    render() {
        console.log(this.props)
        return (
            <div className="w-80 min-h-fit rounded-md shadow-sm mb-10 break-inside-avoid">
                <img src={this.props.item.image} alt={this.props.item.name} className="w-full"/>
                <div className="px-5 py-5">
                    <h1 className="text-lg font-medium">{this.props.item.name}</h1>
                    <p className="text-white text-sm bg-sky-500 w-fit h-fit py-1 px-2 my-2 rounded-md">{this.props.item.best_time_to_intake}</p>
                    <p>{this.props.item.benefits}</p>
                    <p>{this.props.item.importance}</p>
                </div>
            </div>
        )
    }

}

export default Card