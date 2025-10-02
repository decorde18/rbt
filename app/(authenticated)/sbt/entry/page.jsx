"use client";

import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
// import './styles.css'; // Import your styles here
// import 'swiper/css';
// import 'swiper/css/navigation';

// Assume a structure for a single trial
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
  // ... more trials
];

// --- Sub-Components for Cards ---

// Small card for 'Previous' and 'Next' previews
const PreviewCard = ({ trial }) => (
  <div className='preview-card-container'>
    <div className='preview-card-header'>
      Trial {trial.id} - {trial.date}
    </div>
    <div className='preview-card-body'>{trial.branch}</div>
    <div className='preview-card-footer'>Streak: {trial.successStreak}</div>
  </div>
);

// Large card for the current, active trial
const CurrentTrialCard = ({ trial }) => {
  const [timer, setTimer] = useState(0); // Mock timer state

  const handleResponse = (responseType) => {
    // Logic to log the response, stop the timer, and move to the next trial
    console.log(`Trial ${trial.id}: Logged ${responseType} at ${timer}s`);
    // Example: send data to API, update local state, trigger Swiper.slideNext()
  };

  return (
    <div className='current-card-container'>
      {/* HEADER & STREAK */}
      <div className='card-header-area'>
        <h2 className='trial-title'>{trial.branch}</h2>
        <p className='success-streak'>
          🔥 **{trial.successStreak}** successful trials in a row
        </p>
      </div>

      {/* TIMER & INSTRUCTIONS */}
      <div className='timer-and-instructions'>
        <div className='timer-display'>
          {Math.floor(timer / 60)
            .toString()
            .padStart(2, "0")}
          :{(timer % 60).toString().padStart(2, "0")}
        </div>
        <div className='instructions'>Data Collection Guide: ...</div>
      </div>

      {/* PRIMARY RESPONSE BUTTONS (FCR, CABs) */}
      <div className='primary-responses'>
        <button onClick={() => handleResponse("FCR")} className='btn-fcr'>
          FCR
        </button>
        <button onClick={() => handleResponse("CAB1")} className='btn-cab'>
          CAB 1
        </button>
        <button onClick={() => handleResponse("CAB2")} className='btn-cab'>
          CAB 2
        </button>
        <button onClick={() => handleResponse("CAB4_6")} className='btn-cab'>
          CAB 4-6
        </button>{" "}
        {/* Including CAB 4-6 as requested */}
      </div>

      {/* PROBLEM BEHAVIOR (R1/R2) BUTTONS */}
      <div className='problem-behavior'>
        <button onClick={() => handleResponse("R1")} className='btn-r-bad'>
          R1
        </button>
        <button onClick={() => handleResponse("R2")} className='btn-r-worse'>
          R2
        </button>
      </div>

      {/* HRE BUTTON (Separated as it happens *after* CABs) */}
      <div className='hre-response'>
        <button onClick={() => handleResponse("HRE")} className='btn-hre'>
          HRE (Happy, Relaxed, Engaged)
        </button>
      </div>
    </div>
  );
};

// --- Main Component ---

export function SbtTrialCarousel() {
  // Check if screen is wider than 768px (Desktop/Laptop)
  const isDesktop = useMediaQuery("(min-width: 768px)");

  // Determine Swiper direction
  const direction = isDesktop ? "horizontal" : "vertical";

  return (
    <div className={`sbt-app-container ${direction}`}>
      <Swiper
        direction={direction}
        slidesPerView={isDesktop ? 3 : 1} // Desktop shows 3 (Prev, Current, Next), Phone shows 1 (Current)
        centeredSlides={isDesktop} // Center the active slide on desktop
        spaceBetween={10}
        navigation={true}
        modules={[Navigation]}
        className='sbt-swiper'
      >
        {mockTrials.map((trial, index) => (
          <SwiperSlide key={trial.id} className='trial-slide'>
            {
              ({ isActive }) =>
                // The main card is displayed when the slide is active (or on mobile)
                isActive || !isDesktop ? (
                  <CurrentTrialCard trial={trial} />
                ) : (
                  <PreviewCard trial={trial} />
                ) // Smaller preview card for non-active slides on desktop
            }
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
