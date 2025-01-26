"use client";

import React, { useState, useEffect } from 'react';
import '@fortawesome/fontawesome-free/css/all.min.css';



export default function Home() {
  const [pulsating, setPulsating] = useState(true);
  const [showFullName, setShowFullName] = useState(false);
  const [showH, setShowH] = useState(false);
  const [showI2, setShowI2] = useState(false);
  const [showL, setShowL] = useState(false);
  const [showI3, setShowI3] = useState(false);
  const [showP1, setShowP1] = useState(false);
  const [showP2, setShowP2] = useState(false);

  // This controls whether we show the text below the name
  const [showCompletedText, setShowCompletedText] = useState(false);

  useEffect(() => {
    const pulsateTimer = setTimeout(() => {
      setPulsating(false);

      const timer1 = setTimeout(() => {
        setShowFullName(true);
      }, 0);

      const timer2 = setTimeout(() => {
        setShowH(true);
      }, 1000);

      const timer3 = setTimeout(() => {
        setShowI2(true);
      }, 1250);

      const timer4 = setTimeout(() => {
        setShowL(true);
      }, 1500);

      const timer5 = setTimeout(() => {
        setShowI3(true);
      }, 1750);

      const timer6 = setTimeout(() => {
        setShowP1(true);
      }, 2000);

      const timer7 = setTimeout(() => {
        setShowP2(true);
      }, 2250);

      // Show the text after everything else
      const timer8 = setTimeout(() => {
        setShowCompletedText(true);
      }, 2500);

      return () => {
        clearTimeout(timer1);
        clearTimeout(timer2);
        clearTimeout(timer3);
        clearTimeout(timer4);
        clearTimeout(timer5);
        clearTimeout(timer6);
        clearTimeout(timer7);
        clearTimeout(timer8);
      };
    }, 1800);

    return () => clearTimeout(pulsateTimer);
  }, []);

  return (
    <div className="relative h-screen/2 w-full bg-white ml-40">
      {/* Name container centered vertically and horizontally */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className={`flex items-center transition-transform ${showFullName ? 'animate-moveIAndSabell' : ''}`}>
          {/* "I" */}
          <span className={`text-6xl font-bold ${pulsating ? 'animate-pulsateIP' : ''}`}>
            I
          </span>

          {/* "sabel" */}
          <span className={`flex overflow-hidden ${showFullName ? 'animate-fadeIn' : 'opacity-0'}`}>
            <span className="text-6xl font-bold">s</span>
            <span className="text-6xl font-bold">a</span>
            <span className="text-6xl font-bold">b</span>
            <span className="text-6xl font-bold">e</span>
            <span className="text-6xl font-bold">l</span>
            <span className="text-6xl font-bold">l</span>
          </span>
        </div>

        {/* "P" */}
        <span className={`text-6xl font-bold -ml-40 ${pulsating ? 'animate-pulsateIP' : ''}`}>
          P
        </span>

        {/* Remaining letters */}
        <span className={`text-6xl font-bold ${showH ? 'animate-fadeInFromBehindP' : 'opacity-0'} ml-0`}>
          h
        </span>
        <span className={`text-6xl font-bold ${showI2 ? 'animate-fadeInFromBehindP' : 'opacity-0'} ml-0`}>
          i
        </span>
        <span className={`text-6xl font-bold ${showL ? 'animate-fadeInFromBehindP' : 'opacity-0'} ml-0`}>
          l
        </span>
        <span className={`text-6xl font-bold ${showI3 ? 'animate-fadeInFromBehindP' : 'opacity-0'} ml-0`}>
          i
        </span>
        <span className={`text-6xl font-bold ${showP1 ? 'animate-fadeInFromBehindP' : 'opacity-0'} ml-0`}>
          p
        </span>
        <span className={`text-6xl font-bold ${showP2 ? 'animate-fadeInFromBehindP' : 'opacity-0'} ml-0`}>
          p
        </span>
      </div>

      {/* Text below name */}
      <div className={`absolute inset-0 flex items-center justify-center mt-10 top-20 right-40 ${showCompletedText ? 'animate-fadeIN' : 'opacity-0'}`}>
        <div className="text-2xl">
          Portfolio Website
        </div>
      </div>
    </div>
  );
}
