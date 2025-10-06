"use client";
import React, { useState, useRef, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, EffectCoverflow } from "swiper/modules";
import useMediaQuery from "@/hooks/useMediaQuery";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/effect-coverflow";

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

// Small preview for side/above/below
const PreviewCard = ({ trial, compact = true }) => (
  <div
    className={`flex flex-col h-full p-3 rounded-lg bg-gray-50 border border-gray-200 shadow-sm ${
      compact ? "text-sm" : "text-base"
    }`}
  >
    <div className='text-xs font-semibold text-gray-500'>
      Trial {trial.id} - {trial.date}
    </div>
    <div className='font-bold text-gray-700 mt-1 truncate'>{trial.branch}</div>
    <div className='text-xs text-gray-400 mt-auto'>
      Streak: {trial.successStreak}
    </div>
    {trial.completed && (
      <div className='mt-2 text-green-600 font-semibold text-xs'>
        ✓ Completed
      </div>
    )}
  </div>
);

// Main interactive card — make inner area scrollable
const CurrentTrialCard = ({ trial, onComplete }) => {
  const [timer] = useState(65);
  const minutes = Math.floor(timer / 60)
    .toString()
    .padStart(2, "0");
  const seconds = (timer % 60).toString().padStart(2, "0");

  const ButtonClass =
    "w-full py-3 text-white text-lg font-bold rounded-xl shadow-md transition duration-200 hover:shadow-lg active:scale-[.99]";

  return (
    <div
      className='current-card-container flex flex-col bg-white rounded-2xl shadow-xl border-t-4 border-[#091f3a] max-w-full w-full'
      style={{
        minHeight: 0,
        maxHeight: "68vh" /* ensures the card itself doesn't push the page */,
      }}
    >
      {/* header */}
      <div className='p-5 border-b border-gray-100'>
        <h2 className='text-2xl font-extrabold text-gray-900'>
          {trial.branch}
        </h2>
        <p className='text-sm text-gray-500 mt-1'>{trial.challenge}</p>
        <p className='text-md font-semibold text-[#091f3a] mt-3'>
          🔥 <strong>{trial.successStreak}</strong> successful trials in a row
        </p>
      </div>

      {/* content area — this scrolls internally if it overflows */}
      <div
        className='p-5 flex flex-col gap-3 overflow-y-auto'
        style={{ minHeight: 0 }}
      >
        <div className='flex items-center justify-between mb-1'>
          <div className='text-4xl font-mono font-extrabold text-[#091f3a] bg-blue-50 p-3 rounded-xl min-w-[96px] text-center shadow-inner'>
            {minutes}:{seconds}
          </div>
          <div className='text-right text-sm text-gray-600 space-y-1'>
            <p>• FCR/CAB in 10s</p>
            <p>• Write R(s) if prob bx</p>
          </div>
        </div>

        <div className='grid grid-cols-1 gap-3'>
          <button className={`${ButtonClass} bg-[#10b981]`}>
            FCR (Comm. Response)
          </button>
          <button className={`${ButtonClass} bg-orange-500`}>CAB 1</button>
          <button className={`${ButtonClass} bg-amber-500`}>CAB 2</button>
          <button className={`${ButtonClass} bg-red-500`}>CAB 4-6</button>

          <div className='border-t border-gray-100 my-2 pt-2'>
            <button className={`${ButtonClass} bg-blue-500`}>
              HRE (Happy, Relaxed, Engaged)
            </button>
          </div>

          <div className='grid grid-cols-2 gap-3 mt-2'>
            <button className='w-full py-3 text-white font-semibold rounded-xl bg-purple-600'>
              R1 (Problem Behavior)
            </button>
            <button className='w-full py-3 text-white font-semibold rounded-xl bg-purple-900'>
              R2 (Severe Behavior)
            </button>
          </div>
        </div>
      </div>

      <div className='p-5 border-t border-gray-100'>
        <button
          onClick={onComplete}
          className='w-full py-3 text-white text-lg font-bold rounded-xl shadow-md transition duration-200 bg-[#091f3a]'
        >
          Complete Trial & Continue
        </button>
      </div>
    </div>
  );
};

export default function SbtTrialCarousel() {
  const [trials] = useState(mockTrials);
  const isDesktop = useMediaQuery("(min-width: 768px)");
  const [activeIndex, setActiveIndex] = useState(0);
  const swiperRef = useRef(null);

  useEffect(() => {
    if (activeIndex > trials.length - 1) setActiveIndex(trials.length - 1);
  }, [trials, activeIndex]);

  const handleCompleteTrial = () => {
    if (swiperRef.current && swiperRef.current.slideNext) {
      swiperRef.current.slideNext();
    }
  };

  // Outer container constrains width so centering is natural; maxWidth + margin auto
  // maxHeight ensures the widget won't expand the entire page; inner content scrolls.
  return (
    <div className='w-full flex items-center justify-center py-6'>
      <div
        className={`relative flex items-center justify-center ${
          isDesktop ? "flex-row" : "flex-col"
        } w-full`}
        style={{
          minHeight: 0,
          maxWidth: 920,
          margin: "0 auto",
          maxHeight: "80vh",
        }}
      >
        {/* MOBILE: preview above */}
        {!isDesktop && (
          <div
            className='mb-3 w-full flex items-center justify-center pointer-events-none'
            style={{ minHeight: 0 }}
          >
            {activeIndex > 0 ? (
              <div className='w-[90%] max-w-sm'>
                <PreviewCard trial={trials[activeIndex - 1]} />
              </div>
            ) : (
              // keep occupied space but invisible to prevent layout jump
              <div className='w-[90%] max-w-sm opacity-0 pointer-events-none'>
                <PreviewCard trial={trials[0]} />
              </div>
            )}
          </div>
        )}

        {/* SWIPER AREA */}
        <div
          className='w-full flex-shrink-0 flex items-center justify-center'
          style={{ minHeight: 0 }}
        >
          <Swiper
            direction={"horizontal"} // keep horizontal for predictable behavior
            slidesPerView={isDesktop ? 3 : 1} // desktop shows 3 (prev/current/next), mobile shows 1
            centeredSlides={true}
            spaceBetween={isDesktop ? 28 : 10}
            navigation={isDesktop}
            loop={false}
            grabCursor={true}
            modules={[Navigation, EffectCoverflow]}
            effect={"coverflow"}
            coverflowEffect={{
              rotate: 0,
              stretch: isDesktop ? 100 : 0,
              depth: 220,
              modifier: isDesktop ? 1.3 : 1,
              slideShadows: false,
            }}
            onSwiper={(sw) => {
              swiperRef.current = sw;
            }}
            onSlideChange={(sw) => {
              setActiveIndex(sw.activeIndex);
            }}
            className='sbt-swiper w-full'
            style={{
              overflow: "visible",
              padding: 0,
              touchAction: "pan-x",
              height: "100%",
            }}
          >
            {trials.map((trial, idx) => {
              // Define slide dimensions so active card centers correctly and side previews are compact
              const slideStyle = isDesktop
                ? {
                    flex: "0 0 auto",
                    width: idx === activeIndex ? 640 : 300,
                    display: "flex",
                    justifyContent: "center",
                  }
                : {
                    flex: "0 0 auto",
                    width: "100%",
                    maxWidth: 540,
                    display: "flex",
                    justifyContent: "center",
                  };

              return (
                <SwiperSlide
                  key={trial.id}
                  className='flex items-center justify-center'
                >
                  <div style={slideStyle} className='px-2'>
                    {isDesktop ? (
                      idx === activeIndex ? (
                        <div className='w-full max-w-lg'>
                          <CurrentTrialCard
                            trial={trial}
                            onComplete={handleCompleteTrial}
                          />
                        </div>
                      ) : (
                        <div className='w-full max-w-xs'>
                          <PreviewCard trial={trial} compact />
                        </div>
                      )
                    ) : (
                      // mobile: single main card inside slide (previews are rendered outside above/below)
                      <div className='w-full max-w-lg'>
                        <CurrentTrialCard
                          trial={trial}
                          onComplete={handleCompleteTrial}
                        />
                      </div>
                    )}
                  </div>
                </SwiperSlide>
              );
            })}
          </Swiper>
        </div>

        {/* MOBILE: preview below */}
        {!isDesktop && (
          <div
            className='mt-3 w-full flex items-center justify-center pointer-events-none'
            style={{ minHeight: 0 }}
          >
            {activeIndex < trials.length - 1 ? (
              <div className='w-[90%] max-w-sm'>
                <PreviewCard trial={trials[activeIndex + 1]} />
              </div>
            ) : (
              <div className='w-[90%] max-w-sm opacity-0 pointer-events-none'>
                <PreviewCard trial={trials[0]} />
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
