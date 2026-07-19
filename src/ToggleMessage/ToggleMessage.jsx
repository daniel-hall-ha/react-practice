import { useState } from "react";

function ToggleMessage() {
    const [Visibility, setVisibility] = useState(true);
    return (
        <div className="w-fit h-fit shadow shadow-gray-100 p-15 flex flex-col justify-center items-center gap-8">
            <h1 className="text-2xl font-medium my-1">Toggle Message</h1>
            <div className="w-50 h-10 my-1 content-center">
                {!Visibility && <p className="text-center py-2 bg-gray-500/20">&nbsp;</p>}
                {Visibility && <p className="text-center">Let's go with the flow.</p>}
            </div>
            <button className="w-fit h-fit my-1 py-3 px-6 bg-gray-800 text-white rounded-2xl" onClick={()=>{
                setVisibility(!Visibility)
            }}>
            {Visibility ? 'Hide Message':'Show Message'}
            </button>
        </div>
    )
}

export default ToggleMessage