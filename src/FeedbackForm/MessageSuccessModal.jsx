import { createPortal } from "react-dom";
function MessageSuccessModal({ messageSent, setShowSubmission, respMessage }) {
  return createPortal(
    <div className="fixed inset-0 z-20 bg-black/30 flex justify-center">
      <div className="min-w-80 min-h-40 bg-amber-50 flex flex-col self-center justify-center items-center rounded-2xl gap-4">
        {messageSent ? (
          <>
            {respMessage.toLowerCase().includes("sent") ? (
              <i class="fa-solid fa-circle-check text-4xl text-sky-500"></i>
            ) : (
              <i class="fa-solid fa-circle-xmark text-4xl text-red-500"></i>
            )}
            <p>{respMessage}</p>
          </>
        ) : (
          <>
            <i class="fa-solid fa-paper-plane text-4xl text-gray-600"></i>
            <p>Sending your message ...</p>
          </>
        )}
        <button
          className="px-4 py-2 w-fit bg-sky-500 text-sm cursor-pointer"
          onClick={() => setShowSubmission(false)}
        >
          OK
        </button>
      </div>
    </div>,
    document.body,
  );
}

export default MessageSuccessModal;
