import axios from 'axios';
import React, { useState } from 'react';

const App = () => {
  const [question, setQuestion] = useState('');
  const [answer, setAnswer] = useState(''); // Changed variable name to follow camelCase convention
  const generateAnswer = async () => {
    try {
      const response = await axios({
        url: "https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash-latest:generateContent?key=AIzaSyAnkMLMTtTk3Km7UabyDART_JUPKAUUXPo",
        method: "post",
        data: {
          contents: [
            { parts: [{ text: question }] }
          ],
        },
      });
      
        setAnswer(response['data']['candidates'][0]['content']['parts'][0]['text']); // Changed variable name to follow camelCase convention
    } catch (error) {
      console.error("Failed to generate answer:", error);
    }
  };

  return (
    <div className="text-center bg-gray-100 p-4 rounded-lg shadow-lg">
      <h1 className="text-4xl font-bold underline text-blue-500">
        Chat-AI
      </h1>

      <textarea
        value={question}
        onChange={(e) => setQuestion(e.target.value)}
        placeholder="Ask your question here..."
        className="mt-4 w-3/4 p-2 border-2 border-gray-300 bg-white h-24 px-7 pr-16 rounded text-sm shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
      />

      <button onClick={generateAnswer} className="mt-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50">
        Generate answer
      </button>

      <div className="mt-4">
        <p className="text-lg font-semibold text-gray-700">Answer:</p>
        <p className="mt-2 text-gray-600">{answer}</p>
      </div>
    </div>
  );
};

export default App;