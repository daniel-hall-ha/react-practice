import axios from 'axios';

async function sendAMessage(data, setMessageSent, setRespMessage) {
  try {
    const resp = await axios.post('http://localhost:3001/api/send-email', data);
    console.log(resp);
    
    if (resp.data.success === true) {
      setMessageSent(true);
    }
    setRespMessage(resp.data.message);
  } catch (error) {
    console.error("API Error:", error.response?.data || error.message);
    setRespMessage(error.response?.data?.message || "An error occurred.");
  }
}

export default sendAMessage;
