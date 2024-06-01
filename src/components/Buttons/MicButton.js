import { useState } from "react";

import { IoMdMic, IoMdMicOff } from "react-icons/io";

export function MicButton({ onTextChange }) {
  const [listening, setListening] = useState(false);
  const [recognition, setRecognition] = useState(null);

  const handleMicClick = () => {
    if (listening) {
      recognition.stop();
    } else {
      if (!recognition) {
        const SpeechRecognition =
          window.SpeechRecognition || window.webkitSpeechRecognition;
        const newRecognition = new SpeechRecognition();

        newRecognition.lang = "ar-SA";
        newRecognition.continuous = false;

        newRecognition.onstart = () => {
          setListening(true);
        };
        newRecognition.onend = () => setListening(false);
        newRecognition.onresult = async (event) => {
          const transcript = event.results[0][0].transcript;
          onTextChange(transcript);
        };
        newRecognition.start();
        setRecognition(newRecognition);
      } else {
        recognition.start();
      }
    }
  };
  console.log(listening);
  return (
    <button
      onClick={handleMicClick}
      className="btn btn-icon"
      disabled={listening ? true : false}
    >
      {listening ? <IoMdMicOff /> : <IoMdMic />}
    </button>
  );
}
