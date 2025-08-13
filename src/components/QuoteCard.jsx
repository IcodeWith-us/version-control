import React, { useState } from "react";

const quotes = [
  {
    text: "The best way to get started is to quit talking and begin doing.",
    author: "Walt Disney",
  },
  { text: "Dream big and dare to fail.", author: "Norman Vaughan" },
  {
    text: "Do what you can with all you have, wherever you are.",
    author: "Theodore Roosevelt",
  },
  {
    text: "Everything you’ve ever wanted is on the other side of fear.",
    author: "George Addair",
  },
  {
    text: "Act as if what you do makes a difference. It does.",
    author: "William James",
  },
];

const gradients = [
  "from-pink-500 via-red-500 to-yellow-500",
  "from-purple-500 via-pink-500 to-red-500",
  "from-green-400 via-blue-500 to-purple-600",
  "from-yellow-400 via-orange-500 to-red-500",
  "from-blue-500 via-indigo-500 to-purple-500",
];

function QuoteCard() {
  const [quote, setQuote] = useState(quotes[0]);
  const [gradient, setGradient] = useState(gradients[0]);

  const getRandom = () => {
    const newQuote = quotes[Math.floor(Math.random() * quotes.length)];
    const newGradient = gradients[Math.floor(Math.random() * gradients.length)];
    setQuote(newQuote);
    setGradient(newGradient);
  };

  return (
    <div
      className={`flex flex-col items-center justify-center min-h-screen p-6 bg-gradient-to-r ${gradient} text-white transition-all duration-500`}
    >
      <div className="bg-black bg-opacity-50 p-8 rounded-2xl shadow-lg max-w-lg text-center">
        <p className="text-2xl italic">"{quote.text}"</p>
        <p className="mt-4 text-lg font-semibold">- {quote.author}</p>
        <button
          onClick={getRandom}
          className="mt-6 px-6 py-3 bg-white text-black rounded-full hover:scale-105 transform transition duration-300"
        >
          New Quote
        </button>
      </div>
    </div>
  );
}

export default QuoteCard;
