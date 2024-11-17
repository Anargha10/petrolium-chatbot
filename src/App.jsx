import axios from "axios";
import React, { useState } from "react";
import ReactMarkdown from "react-markdown";

const App = () => {
  const [question, setQuestion] = useState("");
  const [answer, setAnswer] = useState(""); // Changed variable name to follow camelCase convention
  const generateAnswer = async () => {
    try {
      const response = await axios({
        url: "https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash-latest:generateContent?key=AIzaSyAnkMLMTtTk3Km7UabyDART_JUPKAUUXPo",
        method: "post",
        data: {
          contents: [{ parts: [{ text: question }] }],
        },
      });

      setAnswer(
        response["data"]["candidates"][0]["content"]["parts"][0]["text"]
      ); // Changed variable name to follow camelCase convention
    } catch (error) {
      console.error("Failed to generate answer:", error);
    }
  };

  return (
    <>
      <div className="m-auto w-[75%] h-[40%] text-center bg-blue-700 p-4 rounded-b-[35px]">
        <h1 className="text-7xl font-sans pb-8 font-bold  text-white">
          Gold Mining Bot
        </h1>

        <div class="relative m-auto w-[55%]">
          <div class="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
            <svg
              class="w-4 h-4 text-gray-500 dark:text-gray-400"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 20 20"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
              />
            </svg>
          </div>
          <input
            value={question}
            onChange={(e) => setQuestion(e.target.value)}
            type="search"
            id="search"
            class="block w-full p-4 ps-10 text-sm text-white border border-gray-300 rounded-[50px] bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-white dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Search"
            required
          />
        </div>

        {/* <textarea
        value={question}
        onChange={(e) => setQuestion(e.target.value)}
        placeholder="Ask your question here..."
        className="mt-4 w-3/4 p-2 border-2 border-gray-300 bg-white h-24 px-7 pr-16 rounded text-sm shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
      /> */}

        <button
          onClick={generateAnswer}
          className="mt-4 mb-4 bg-gray-50 hover:bg-gray-300 text-black font-bold py-2 px-4 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
        >
          Generate answer
        </button>
        <p className="text-white font-sans font-thin">
          The above chat-bot can only be used to answer queries related to
          rules, regulations and acts regarding gold mining.
        </p>
      </div>
      <div className="w-[65%] h-[350px] overflow-y-auto m-auto mt-12 border-black">
        <p className="mt-4 text-black font-normal font-sans">
          <ReactMarkdown>{answer}</ReactMarkdown>
        </p>
      </div>
    </>
  );
};

export default App;
