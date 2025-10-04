"use client";
import React, { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import useMediaQuery from "@/hooks/useMediaQuery";

// Import Swiper styles (you need these in your global CSS or main layout file)
// import 'swiper/css';
// import 'swiper/css/navigation';

// Mock data (keep this separate or load it from a source)
const mockTrials = [
  {
    id: 1,
    date: "8/23",
    branch: "CAB 1 Medium",
    challenge: "Cooperate in 1-2 activities",
    successStreak: 3,
  },
  {
    id: 2,
    date: "8/23",
    branch: "CAB 2 Long",
    challenge: "Cooperate in 3-5 activities",
    successStreak: 0,
  },
  {
    id: 3,
    date: "8/24",
    branch: "CAB 3 Super",
    challenge: "Cooperate in 6+ activities",
    successStreak: 4,
  },
  {
    id: 4,
    date: "8/24",
    branch: "CAB 4-6",
    challenge: "Advanced cooperation",
    successStreak: 1,
  },
  {
    id: 5,
    date: "8/25",
    branch: "CAB 1 Short",
    challenge: "Quick cooperation",
    successStreak: 2,
  },
];
// --- Sub-Components for Cards ---

// Small card for 'Previous' and 'Next' previews (Desktop Only)
const PreviewCard = ({ trial }) => (
  <div className='flex flex-col h-full p-4 border border-gray-200 rounded-lg bg-gray-50 shadow-sm transition duration-300 hover:shadow-md'>
    <div className='text-sm font-semibold text-gray-500'>
      Trial {trial.id} - {trial.date}
    </div>
    <div className='text-xl font-bold text-gray-700 mt-1'>{trial.branch}</div>
    <div className='text-xs text-gray-400 mt-auto'>
      Streak: {trial.successStreak}
    </div>
  </div>
);

// Large card for the current, active trial
const CurrentTrialCard = ({ trial }) => {
  const [timer, setTimer] = useState(65); // Mock timer state (1:05)
  const isDesktop = useMediaQuery("(min-width: 768px)");

  const handleResponse = (responseType) => {
    // In a real app, this would log the data and trigger a slide to the next trial
    console.log(`Trial ${trial.id}: Logged ${responseType}`);
  };

  const minutes = Math.floor(timer / 60)
    .toString()
    .padStart(2, "0");
  const seconds = (timer % 60).toString().padStart(2, "0");

  const ButtonClass =
    "w-full py-4 text-white text-lg font-bold rounded-xl shadow-md transition duration-200 hover:shadow-lg hover:brightness-110 active:scale-[.99]";

  return (
    <div className='current-card-container flex flex-col h-full bg-white p-6 md:p-8 rounded-2xl shadow-xl border-t-4 border-indigo-500 max-w-lg mx-auto'>
      {/* HEADER & STREAK */}
      <div className='mb-4 pb-4 border-b border-gray-100'>
        <h2 className='text-2xl font-extrabold text-gray-900'>
          {trial.branch}
        </h2>
        <p className='text-sm text-gray-500 mt-1'>{trial.challenge}</p>
        <p className='text-md font-semibold text-indigo-600 mt-3'>
          🔥 **{trial.successStreak}** successful trials in a row
        </p>
      </div>

      {/* TIMER & INSTRUCTIONS */}
      <div className='flex items-center justify-between mb-6'>
        <div className='text-5xl font-mono font-extrabold text-indigo-700 bg-indigo-50 p-3 rounded-xl min-w-[120px] text-center shadow-inner'>
          {minutes}:{seconds}
        </div>
        <div className='text-right text-sm text-gray-600 space-y-1'>
          <p>• FCR/CAB in 10s</p>
          <p>• Write R(s) if prob bx</p>
        </div>
      </div>

      {/* PRIMARY RESPONSE BUTTONS (FCR, CABs) */}
      <div className='grid grid-cols-1 gap-3 flex-grow overflow-y-auto pr-1'>
        {/* FCR */}
        <button
          onClick={() => handleResponse("FCR")}
          className={`${ButtonClass} bg-green-500`}
        >
          FCR (Comm. Response)
        </button>

        {/* CABs - Note: You can add dynamic CAB buttons based on the trial branch */}
        <button
          onClick={() => handleResponse("CAB1")}
          className={`${ButtonClass} bg-orange-500`}
        >
          CAB 1
        </button>
        <button
          onClick={() => handleResponse("CAB2")}
          className={`${ButtonClass} bg-amber-500`}
        >
          CAB 2
        </button>
        <button
          onClick={() => handleResponse("CAB4_6")}
          className={`${ButtonClass} bg-red-500`}
        >
          CAB 4-6
        </button>

        {/* HRE BUTTON (Separated to emphasize it's post-CAB) */}
        <div className='border-t border-gray-100 my-2 pt-2'>
          <button
            onClick={() => handleResponse("HRE")}
            className={`${ButtonClass} bg-blue-500`}
          >
            HRE (Happy, Relaxed, Engaged)
          </button>
        </div>

        {/* PROBLEM BEHAVIOR (R1/R2) BUTTONS */}
        <div className='grid grid-cols-2 gap-3 mt-2'>
          <button
            onClick={() => handleResponse("R1")}
            className={`w-full py-3 text-white font-semibold rounded-xl bg-purple-600 shadow-md transition hover:bg-purple-700`}
          >
            R1 (Problem Behavior)
          </button>
          <button
            onClick={() => handleResponse("R2")}
            className={`w-full py-3 text-white font-semibold rounded-xl bg-purple-900 shadow-md transition hover:bg-purple-950`}
          >
            R2 (Severe Behavior)
          </button>
        </div>
      </div>
    </div>
  );
};

// --- Main Component ---

export default function SbtTrialCarousel() {
  const isDesktop = useMediaQuery("(min-width: 768px)");
  const direction = isDesktop ? "horizontal" : "vertical";

  return (
    <div
      className={`w-full ${
        isDesktop ? "h-[500px] p-6" : "h-screen p-4"
      } bg-gray-100`}
    >
      <Swiper
        direction={direction}
        slidesPerView={isDesktop ? 3 : 1}
        centeredSlides={isDesktop}
        spaceBetween={isDesktop ? 20 : 0}
        navigation={true}
        modules={[Navigation]}
        className='sbt-swiper h-full w-full'
      >
        {mockTrials.map((trial, index) => (
          <SwiperSlide key={trial.id} className='trial-slide h-full'>
            {({ isActive }) => (
              <div className='h-full w-full py-2'>
                {
                  // On Desktop: If active, show large card. If not active, show preview.
                  // On Mobile: Always show large card.
                  isActive || !isDesktop ? (
                    <CurrentTrialCard trial={trial} />
                  ) : (
                    <PreviewCard trial={trial} />
                  )
                }
              </div>
            )}
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

// Remember to use 'export default SbtTrialCarousel;' in your page file.
