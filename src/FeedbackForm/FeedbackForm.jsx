import { useEffect, useState } from "react";
import SendAMessage from "./SendAMessage.js";

function FeedbackForm({setShowSubmission, setMessageSent, setRespMessage}) {
  const [FormData, SetFormData] = useState({
    name: "",
    email: "",
    feedback: "",
  });

  const [Error, SetError] = useState({
    name_error: "",
    email_error: ""
  });

  useEffect(() => console.log(FormData));

  function NameInputHandler(value) {
    if (value.trim().length == 0) {
      SetError((prev) => ({
        ...prev,
        name_error: "This field is required.",
      }));
    } else if (value.trim().length < 3) {
      SetError((prev) => ({
        ...prev,
        name_error: "Minimum 3 characters are required.",
      }));
    } else {
      SetError((prev) => ({ ...prev, name_error: null }));
    }
  }

  function EmailInputHandler(value) {
    if (value.trim().length == 0) {
      SetError((prev) => ({
        ...prev,
        email_error: "Email is required.",
      }));
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) {
      SetError((prev) => ({
        ...prev,
        email_error: "Please enter a valid email address.",
      }));
    } else {
      SetError((prev) => ({
        ...prev,
        email_error: null,
      }));
    }
  }

  return (
    <div className="w-fit h-fit px-10 py-10 flex flex-col gap-3">
      <h1 className="font-medium text-2xl">We'd love to hear from you!</h1>
      <p>Please share your feedback with us.</p>
      <form
        className="flex flex-col gap-5 mt-5"
        autocomplete="off"
        onSubmit={async (e) => {
          e.preventDefault()
          await setShowSubmission(true)
          await SendAMessage(FormData, setMessageSent, setRespMessage)
        }}
      >
        <input
          type="text"
          placeholder="Your Name"
          name="Name"
          autocomplete="off"
          className="w-80 px-3 py-2 bg-gray-400/30"
          value={FormData.name}
          onChange={(event) => {
            SetFormData({ ...FormData, name: event.target.value });
            NameInputHandler(event.target.value);
          }}
          required
        />
        {Error.name_error && (
          <span className="text-sm text-red-600">{Error.name_error}</span>
        )}
        <input
          type="email"
          placeholder="Your Email"
          name="Email"
          autocomplete="off"
          className="w-80 px-3 py-2 bg-gray-400/30"
          value={FormData.email}
          onChange={(event) => {
            SetFormData({ ...FormData, email: event.target.value });
            EmailInputHandler(event.target.value);
          }}
          required
        />
        {Error.email_error && (
          <span className="text-sm text-red-600">{Error.email_error}</span>
        )}
        <textarea
          placeholder="Your Feedback"
          className="w-80 h-50 resize-none px-3 py-2 bg-gray-400/30"
          onChange={(event) => {
            SetFormData((prev) => ({ ...prev, feedback: event.target.value }));
          }}
        />
        {!Error.name_error && !Error.email_error ? (
          <button className="w-full h-fit px-10 py-3 self-center bg-sky-500 text-white flex gap-3 justify-center items-center">
            <div>
              <i class="fa-solid fa-paper-plane"></i>
            </div>
            <div>Send a Message</div>
          </button>
        ) : (
          <button className="w-full h-fit px-10 py-3 self-center bg-gray-300 text-white disabled flex gap-3 justify-center items-center">
            <div>
              <i class="fa-solid fa-paper-plane"></i>
            </div>
            <div>Send a Message</div>
          </button>
        )}
      </form>
    </div>
  );
}

export default FeedbackForm;
