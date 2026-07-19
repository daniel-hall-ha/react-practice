function Task(props) {
    return (
        <li className="w-full h-fit px-2 py-2 wrap-break-word leading-normal text-wrap bg-amber-100 rounded-sm">
            {props.name}
        </li>
    )
}

export default Task;