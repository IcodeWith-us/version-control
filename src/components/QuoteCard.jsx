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
  const [favorites, setFavorites] = useState([]);
  const [copied, setCopied] = useState(false);

  const getRandom = () => {
    const newQuote = quotes[Math.floor(Math.random() * quotes.length)];
    const newGradient = gradients[Math.floor(Math.random() * gradients.length)];
    setQuote(newQuote);
    setGradient(newGradient);
  };

  const likeQuote = () => {
    if (!favorites.find((fav) => fav.text === quote.text)) {
      setFavorites([...favorites, quote]);
    }
  };

  const copyQuote = () => {
    navigator.clipboard.writeText(`"${quote.text}" — ${quote.author}`);
    setCopied(true);
    setTimeout(() => setCopied(false), 1500);
  };

  return (
    <div
      className={`flex flex-col items-center justify-center min-h-screen p-6 bg-gradient-to-r ${gradient} text-white transition-all duration-500`}
    >
      <div className="bg-black bg-opacity-50 p-8 rounded-2xl shadow-lg max-w-lg text-center transform transition duration-500 hover:scale-105">
        <p className="text-2xl italic mb-2">"{quote.text}"</p>
        <p className="text-lg font-semibold mb-4">- {quote.author}</p>

        <div className="flex justify-center gap-3">
          <button
            onClick={getRandom}
            className="px-5 py-2 bg-white text-black rounded-full hover:scale-105 transition"
          >
            New Quote
          </button>
          <button
            onClick={likeQuote}
            className="px-5 py-2 bg-pink-500 text-white rounded-full hover:bg-pink-600 transition"
          >
            ❤️ Like
          </button>
          <button
            onClick={copyQuote}
            className="px-5 py-2 bg-blue-500 text-white rounded-full hover:bg-blue-600 transition"
          >
            📋 {copied ? "Copied!" : "Copy"}
          </button>
        </div>
      </div>

      {favorites.length > 0 && (
        <div className="mt-8 bg-white text-black p-5 rounded-xl w-full max-w-lg shadow-lg">
          <h2 className="text-xl font-bold mb-3">⭐ Favorites</h2>
          <ul className="space-y-2">
            {favorites.map((fav, idx) => (
              <li key={idx} className="border-b pb-1">
                "{fav.text}" — <span className="font-medium">{fav.author}</span>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

export default QuoteCard;
