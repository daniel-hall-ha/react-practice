import Counter from './Counter/Counter.jsx';
import Countdown from './Countdown/Countdown.jsx';
import EmployeeDetails from './EmployeeDetails/EmployeeDetails.jsx';
import { useState } from 'react';
import SuccessModal from './EmployeeDetails/SuccessModal.jsx';
import LikeDislike from './LikeDislike/LikeDislike.jsx';
import ToggleMessage from './ToggleMessage/ToggleMessage.jsx'
import ToDoList from './ToDoList/ToDoList.jsx'
import YogaBenefits from './YogaBenefits/YogaBenefits.jsx';
import FeedbackForm from './FeedbackForm/FeedbackForm.jsx';
import MessageSuccessModal from "./FeedbackForm/MessageSuccessModal.jsx";

function Content({selectedMenuItem}) {

    const [ showSubmission, setShowSubmission ] = useState(false);
    const [ messageSent, setMessageSent ] = useState(false);
    const [ respMessage, setRespMessage ] = useState("Sending your message ...");

    if (selectedMenuItem && selectedMenuItem.toLowerCase() === 'counter') {
        return (
            <div className="fixed inset-0 z-0 p-1/5">
                <Counter />
            </div>
        )
    }

    if (selectedMenuItem && selectedMenuItem.toLowerCase() === 'countdown') {
        return (
            <div className="fixed inset-0 z-0">
                <Countdown />
            </div>
        )
    }

    if (selectedMenuItem && selectedMenuItem.toLowerCase() === 'employee details (class)') {
        return (
            <div className="fixed inset-0 z-0 w-screen h-screen flex justify-center">
                <EmployeeDetails showSubmission={showSubmission} setShowSubmission={setShowSubmission} />
                { showSubmission && <SuccessModal showSubmission={showSubmission} setShowSubmission={setShowSubmission} /> }
            </div>
        )
    }

    if (selectedMenuItem && selectedMenuItem.toLowerCase() === 'like - dislike (class)') {
        return (
            <div className="fixed inset-0 z-0 w-screen h-screen flex flex-col justify-center items-center">
                <LikeDislike />
            </div>
        )
    }

    if (selectedMenuItem && selectedMenuItem.toLowerCase() === 'toggle message (state)') {
        return (
            <div className="fixed inset-0 z-0 w-screen h-screen flex flex-col justify-center items-center">
                <ToggleMessage />
            </div>
        )
    }

    if (selectedMenuItem && selectedMenuItem.toLowerCase() === 'to do list') {
        return (
            <div className="fixed inset-0 z-0 px-10 w-screen h-screen flex flex-col justify-start">
                <ToDoList />
            </div>
        )
    }
    
    if (selectedMenuItem && selectedMenuItem.toLowerCase() === 'yoga benefits') {
        return (
            <div className="fixed inset-0 z-0 w-screen h-screen flex flex-col justify-start">
                <YogaBenefits />
            </div>
        )
    }

    if (selectedMenuItem && selectedMenuItem.toLowerCase() === "feedback form") {
        return (
            <div className="fixed inset-0 z-0 w-screen h-screen flex justify-center items-center">
                <FeedbackForm setShowSubmission={setShowSubmission} setMessageSent={setMessageSent} setRespMessage={setRespMessage}/>
                {showSubmission && <MessageSuccessModal messageSent={messageSent} setShowSubmission={setShowSubmission} respMessage={respMessage}/>}
            </div>
        )
    }

}

export default Content