"use client";
import React, { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import useMediaQuery from "@/hooks/useMediaQuery";
import { Navigation, EffectCoverflow } from "swiper/modules";
import "swiper/css/effect-coverflow";

// Swiper styles are imported in globals.css

// Mock data
const mockTrials = [
  {
    id: 1,
    date: "8/23",
    branch: "CAB 1 Medium",
    challenge: "Cooperate in 1-2 activities",
    successStreak: 3,
    completed: true,
  },
  {
    id: 2,
    date: "8/23",
    branch: "CAB 2 Long",
    challenge: "Cooperate in 3-5 activities",
    successStreak: 0,
    completed: false,
  },
  {
    id: 3,
    date: "8/24",
    branch: "CAB 3 Super",
    challenge: "Cooperate in 6+ activities",
    successStreak: 4,
    completed: false,
  },
  {
    id: 4,
    date: "8/24",
    branch: "CAB 4-6",
    challenge: "Advanced cooperation",
    successStreak: 1,
    completed: false,
  },
  {
    id: 5,
    date: "8/25",
    branch: "CAB 1 Short",
    challenge: "Quick cooperation",
    successStreak: 2,
    completed: false,
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
    {trial.completed && (
      <div className='mt-2 text-green-600 font-semibold text-sm flex items-center gap-1'>
        ✓ Completed
      </div>
    )}
  </div>
);

// Large card for the current, active trial
const CurrentTrialCard = ({ trial, onComplete }) => {
  const [timer, setTimer] = useState(65);
  const [responses, setResponses] = useState([]);
  const isDesktop = useMediaQuery("(min-width: 768px)");

  const handleResponse = (responseType) => {
    const timestamp = new Date().toISOString();
    const newResponse = {
      type: responseType,
      timestamp,
      trialId: trial.id,
    };
    setResponses([...responses, newResponse]);
    console.log(`Trial ${trial.id}: Logged ${responseType}`, newResponse);
  };

  const handleCompleteTrial = () => {
    console.log(`Trial ${trial.id} completed with responses:`, responses);
    onComplete();
  };

  const minutes = Math.floor(timer / 60)
    .toString()
    .padStart(2, "0");
  const seconds = (timer % 60).toString().padStart(2, "0");

  const ButtonClass =
    "w-full py-4 text-white text-lg font-bold rounded-xl shadow-md transition duration-200 hover:shadow-lg hover:brightness-110 active:scale-[.99] disabled:opacity-50 disabled:cursor-not-allowed";

  return (
    <div className='current-card-container flex flex-col h-full bg-white p-6 md:p-8 rounded-2xl shadow-xl border-t-4 border-[#091f3a] max-w-lg mx-auto'>
      {/* HEADER & STREAK */}
      <div className='mb-4 pb-4 border-b border-gray-100'>
        <h2 className='text-2xl font-extrabold text-gray-900'>
          {trial.branch}
        </h2>
        <p className='text-sm text-gray-500 mt-1'>{trial.challenge}</p>
        <p className='text-md font-semibold text-[#091f3a] mt-3'>
          🔥 <strong>{trial.successStreak}</strong> successful trials in a row
        </p>
      </div>

      {/* TIMER & INSTRUCTIONS */}
      <div className='flex items-center justify-between mb-6'>
        <div className='text-5xl font-mono font-extrabold text-[#091f3a] bg-blue-50 p-3 rounded-xl min-w-[120px] text-center shadow-inner'>
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
          disabled={trial.completed}
          className={`${ButtonClass} bg-[#10b981] hover:bg-[#059669]`}
        >
          FCR (Comm. Response)
        </button>

        {/* CABs */}
        <button
          onClick={() => handleResponse("CAB1")}
          disabled={trial.completed}
          className={`${ButtonClass} bg-orange-500`}
        >
          CAB 1
        </button>
        <button
          onClick={() => handleResponse("CAB2")}
          disabled={trial.completed}
          className={`${ButtonClass} bg-amber-500`}
        >
          CAB 2
        </button>
        <button
          onClick={() => handleResponse("CAB4_6")}
          disabled={trial.completed}
          className={`${ButtonClass} bg-red-500`}
        >
          CAB 4-6
        </button>

        {/* HRE BUTTON (Separated to emphasize it's post-CAB) */}
        <div className='border-t border-gray-100 my-2 pt-2'>
          <button
            onClick={() => handleResponse("HRE")}
            disabled={trial.completed}
            className={`${ButtonClass} bg-blue-500`}
          >
            HRE (Happy, Relaxed, Engaged)
          </button>
        </div>

        {/* PROBLEM BEHAVIOR (R1/R2) BUTTONS */}
        <div className='grid grid-cols-2 gap-3 mt-2'>
          <button
            onClick={() => handleResponse("R1")}
            disabled={trial.completed}
            className={`w-full py-3 text-white font-semibold rounded-xl bg-purple-600 shadow-md transition hover:bg-purple-700 disabled:opacity-50 disabled:cursor-not-allowed`}
          >
            R1 (Problem Behavior)
          </button>
          <button
            onClick={() => handleResponse("R2")}
            disabled={trial.completed}
            className={`w-full py-3 text-white font-semibold rounded-xl bg-purple-900 shadow-md transition hover:bg-purple-950 disabled:opacity-50 disabled:cursor-not-allowed`}
          >
            R2 (Severe Behavior)
          </button>
        </div>
      </div>

      {/* COMPLETE TRIAL BUTTON */}
      <div className='mt-4 pt-4 border-t border-gray-100'>
        {trial.completed ? (
          <div className='text-center py-4 text-green-600 font-bold text-lg flex items-center justify-center gap-2'>
            ✓ Trial Completed
          </div>
        ) : (
          <button
            onClick={handleCompleteTrial}
            className='w-full py-4 text-white text-lg font-bold rounded-xl shadow-md transition duration-200 bg-[#091f3a] hover:bg-[#274870] active:scale-[.99]'
          >
            Complete Trial & Continue
          </button>
        )}
      </div>

      {/* Response Log (Optional - for debugging) */}
      {responses.length > 0 && (
        <div className='mt-2 text-xs text-gray-500'>
          Responses logged: {responses.length}
        </div>
      )}
    </div>
  );
};

// --- Main Component ---

export default function SbtTrialCarousel() {
  const [swiperInstance, setSwiperInstance] = useState(null);
  const [trials, setTrials] = useState(mockTrials);
  const isDesktop = useMediaQuery("(min-width: 768px)");
  const direction = isDesktop ? "horizontal" : "vertical";

  const handleCompleteTrial = () => {
    if (swiperInstance && !swiperInstance.isEnd) {
      swiperInstance.slideNext();
    }
  };
  return (
    <div className='relative w-full h-full flex items-center justify-center overflow-hidden'>
      <div
        className={`relative flex items-center justify-center ${
          isDesktop ? "flex-row h-[90%]" : "flex-col h-full"
        } w-full max-w-6xl mx-auto bg-gray-100 rounded-2xl p-4 md:p-6`}
      >
        <Swiper
          direction={direction}
          slidesPerView={isDesktop ? 3 : 3} // Always show 3 (prev, current, next)
          centeredSlides={true}
          spaceBetween={isDesktop ? 30 : 20}
          navigation={isDesktop}
          allowTouchMove={true}
          loop={false}
          grabCursor={true}
          modules={[Navigation, EffectCoverflow]}
          effect='coverflow'
          coverflowEffect={{
            rotate: isDesktop ? 0 : 0,
            stretch: isDesktop ? 150 : 0, // horizontal spread
            depth: 200,
            modifier: 1.5,
            slideShadows: false,
          }}
          onSwiper={setSwiperInstance}
          className='sbt-swiper w-full h-full flex items-center justify-center'
          style={{
            overflow: "visible", // 👈 FIX for vertical clipping
          }}
        >
          {trials.map((trial) => (
            <SwiperSlide
              key={trial.id}
              className='flex items-center justify-center'
            >
              <div
                className='flex items-center justify-center transition-transform duration-300 ease-in-out w-full h-full'
                style={{ transformOrigin: "center" }}
              >
                <CurrentTrialCard
                  trial={trial}
                  onComplete={handleCompleteTrial}
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );

  // return (
  //   <div className='w-full h-full overflow-hidden'>
  //     <div className={`w-full h-full ${isDesktop ? "p-6" : "p-4"} bg-gray-100`}>
  //       <Swiper
  //         direction={direction}
  //         slidesPerView={isDesktop ? 3 : 1}
  //         centeredSlides={isDesktop}
  //         spaceBetween={isDesktop ? 20 : 0}
  //         navigation={isDesktop}
  //         loop={false}
  //         modules={[Navigation]}
  //         onSwiper={setSwiperInstance}
  //         className='sbt-swiper h-full w-full'
  //       >
  //         {trials.map((trial, index) => (
  //           <SwiperSlide key={trial.id} className='trial-slide h-full'>
  //             {({ isActive }) => (
  //               <div className='h-full w-full py-2'>
  //                 {isActive || !isDesktop ? (
  //                   <CurrentTrialCard
  //                     trial={trial}
  //                     onComplete={handleCompleteTrial}
  //                   />
  //                 ) : (
  //                   <PreviewCard trial={trial} />
  //                 )}
  //               </div>
  //             )}
  //           </SwiperSlide>
  //         ))}
  //       </Swiper>
  //     </div>
  //   </div>
  // );
}
