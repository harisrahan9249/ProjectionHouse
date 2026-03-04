"use client";

import { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { motion } from "framer-motion";
import Link from "next/link";
import { Home, ArrowLeft } from "lucide-react";
import confetti from "canvas-confetti";

export default function SkinTypeSurveyPage() {
  useEffect(() => {
    AOS.init({ duration: 1200, once: true });
  }, []);

  const questions = [
    {
      text: "1. How does your skin feel when you wake up in the morning?",
      options: [
        "A. Tight and dry",
        "B. Shiny and greasy",
        "C. Oily in some areas, dry in others",
        "D. Comfortable and balanced",
        "E. Sensitive, red, or irritated",
      ],
    },
    {
      text: "2. How does your skin feel after using a face wash?",
      options: [
        "A. Soft, smooth, and refreshed",
        "B. Clean at first, but becomes oily soon after",
        "C. Dry, tight, or stretchy",
        "D. Red, itchy, or irritated",
      ],
    },
    {
      text: "3. How does your skin usually react to new skincare products?",
      options: [
        "A. Absorbs well, but sometimes feels tight",
        "B. Becomes greasy or breaks out",
        "C. Reacts differently in different areas",
        "D. Generally adjusts well with no reaction",
        "E. Easily irritated or inflamed",
      ],
    },
    {
      text: "4. How would you describe your skin’s texture?",
      options: [
        "A. Dry, rough, or flaky",
        "B. Oily with visible pores",
        "C. Uneven — smooth in places, rough in others",
        "D. Smooth and even",
      ],
    },
    {
      text: "5. How often do you experience breakouts or clogged pores?",
      options: [
        "A. Rarely",
        "B. Frequently",
        "C. Occasionally — mostly in the T-zone",
        "D. Almost never",
        "E. Sometimes, especially with new products",
      ],
    },
    {
      text: "6. What type of product texture suits your skin the best?",
      options: [
        "A. Cream-based products",
        "B. Gel-based products",
        "C. Lightweight lotions",
        "D. Oil-based products",
      ],
    },
  ];

  const [answers, setAnswers] = useState(Array(questions.length).fill(null));
  const [result, setResult] = useState(null);

  const handleSelect = (qIdx, optIdx) => {
    const updated = [...answers];
    updated[qIdx] = optIdx;
    setAnswers(updated);
  };

  const getSkinType = () => {
    const [q1, q2, q3, q4, q5, q6] = answers;

    if (q1 === 0 && q2 === 2 && q3 === 0 && q4 === 0 && (q5 === 0 || q5 === 3) && q6 === 0) {
      return "Dry Skin";
    }
    if (q1 === 1 && q2 === 1 && q3 === 1 && q4 === 1 && q5 === 1 && q6 === 1) {
      return "Oily Skin";
    }
    if (q1 === 2 && q2 === 1 && q3 === 2 && q4 === 2 && q5 === 2 && q6 === 2) {
      return "Combination Skin";
    }
    if (q1 === 3 && q2 === 0 && q3 === 3 && q4 === 3 && q5 === 3 && (q6 === 0 || q6 === 2)) {
      return "Normal Skin";
    }
    if (q1 === 4 && q2 === 3 && q3 === 4 && q4 === 2 && q5 === 2 && (q6 === 1 || q6 === 2)) {
      return "Sensitive Skin";
    }

    return "Mixed or Undefined Skin Type";
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (answers.includes(null)) {
      alert("Please answer all the questions before submitting.");
      return;
    }
    const type = getSkinType();
    setResult(type);
    confetti({ particleCount: 100, spread: 70, origin: { y: 0.6 } });
  };

  const handleRetry = () => {
    setAnswers(Array(questions.length).fill(null));
    setResult(null);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1 }}
      className="min-h-screen px-6 py-12 bg-gradient-to-b from-purple-900 via-black to-black text-white font-sans relative overflow-hidden"
    >
      <div className="flex justify-between mb-8">
        <Link href="/">
          <span className="flex items-center gap-2 text-purple-300 hover:text-white transition duration-200">
            <Home size={20} /> Home
          </span>
        </Link>
        <Link href="/">
          <span className="flex items-center gap-2 text-purple-300 hover:text-white transition duration-200">
            <ArrowLeft size={20} /> Go Back
          </span>
        </Link>
      </div>

      <h1 className="text-4xl font-bold text-center mb-10 text-purple-100" data-aos="fade-up">
        Skin Type Survey
      </h1>

      {!result && (
        <form onSubmit={handleSubmit} className="space-y-10 max-w-3xl mx-auto">
          {questions.map((q, qIdx) => (
            <div
              key={qIdx}
              data-aos="fade-up"
              className="p-6 rounded-2xl bg-gradient-to-r from-purple-800/40 to-purple-700/30 border border-purple-600"
            >
              <h2 className="text-lg font-semibold mb-4 text-purple-200">{q.text}</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {q.options.map((opt, optIdx) => (
                  <label
                    key={optIdx}
                    className={`p-3 rounded-xl cursor-pointer transition-all duration-200 border-2 ${
                      answers[qIdx] === optIdx
                        ? "bg-purple-600 border-white"
                        : "bg-black/20 border-purple-500 hover:border-white"
                    }`}
                  >
                    <input
                      type="radio"
                      name={`question-${qIdx}`}
                      className="hidden"
                      value={optIdx}
                      checked={answers[qIdx] === optIdx}
                      onChange={() => handleSelect(qIdx, optIdx)}
                    />
                    {opt}
                  </label>
                ))}
              </div>
            </div>
          ))}

          <div className="text-center">
            <button
              type="submit"
              className="mt-8 bg-purple-700 hover:bg-purple-800 text-white font-bold py-3 px-6 rounded-full shadow-lg transition-transform transform hover:scale-105"
            >
              Submit
            </button>
          </div>
        </form>
      )}

      {result && (
        <div className="mt-12 text-center text-xl text-purple-100 font-semibold" data-aos="fade-up">
          Your skin type is likely:
          <div className="text-3xl mt-4 text-white underline underline-offset-4 decoration-purple-400">
            {result}
          </div>
          <button
            onClick={handleRetry}
            className="mt-8 bg-pink-600 hover:bg-pink-700 text-white font-bold py-2 px-6 rounded-full shadow-lg transition-transform transform hover:scale-105"
          >
            Take Another Try
          </button>
        </div>
      )}
    </motion.div>
  );
}
