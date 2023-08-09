"use client";

import React, { useState } from "react";
import { FaArrowRight } from "react-icons/fa6";
import Layout from "./components/layout";
import { HomeCard, SliderCard } from "./components/card";

import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";

export default function Home() {
  const [currentSlide, setCurrentSlide] = React.useState(0);
  const [loaded, setLoaded] = useState(false);
  const [sliderRef, instanceRef] = useKeenSlider(
    {
      loop: true,
      defaultAnimation: {
        duration: 3000,
      },
      slides: {
        spacing: 15,
      },
      animationEnded(s) {
        setCurrentSlide(s.track.details.rel);
      },
      created() {
        setLoaded(true);
      },
    },
    [
      (slider) => {
        let timeout: ReturnType<typeof setTimeout>;
        let mouseOver = false;
        function clearNextTimeout() {
          clearTimeout(timeout);
        }
        function nextTimeout() {
          clearTimeout(timeout);
          if (mouseOver) return;
          timeout = setTimeout(() => {
            slider.next();
          }, 2000);
        }
        slider.on("created", () => {
          slider.container.addEventListener("mouseover", () => {
            mouseOver = true;
            clearNextTimeout();
          });
          slider.container.addEventListener("mouseout", () => {
            mouseOver = false;
            nextTimeout();
          });
          nextTimeout();
        });
        slider.on("dragStarted", clearNextTimeout);
        slider.on("animationEnded", nextTimeout);
        slider.on("updated", nextTimeout);
      },
    ]
  );

  return (
    <Layout>
      <div className="flex items-center gap-2 mb-4">
        <h1 className="text-lg :text-2xl font-medium">Terpopuler</h1>
        <FaArrowRight />
      </div>

      {/* <div className="navigation-wrapper">      */}
      <div ref={sliderRef} className="keen-slider">
        <div className="keen-slider__slide">
          <SliderCard />
        </div>
        <div className="keen-slider__slide">
          <SliderCard />
        </div>
        <div className="keen-slider__slide">
          <SliderCard />
        </div>
      </div>
      {loaded && instanceRef.current && (
        <div className="dots">
          {[
            ...Array(instanceRef.current.track.details.slides.length).keys(),
          ].map((idx) => {
            return (
              <button
                key={idx}
                onClick={() => {
                  instanceRef.current?.moveToIdx(idx);
                }}
                className={"dot" + (currentSlide === idx ? " active" : "")}
              ></button>
            );
          })}
        </div>
      )}

      <div className="flex items-center gap-2 mt-8">
        <h1 className="text-lg :text-2xl font-medium">Projects Terbaru</h1>
        <FaArrowRight />
      </div>

      <div className="grid grid-rows-10 lg:grid-cols-2 lg:grid-rows-5 gap-4 mt-4">
        <HomeCard />
        <HomeCard />
        <HomeCard />
        <HomeCard />
        <HomeCard />
        <HomeCard />
        <HomeCard />
        <HomeCard />
        <HomeCard />
        <HomeCard />
      </div>

      <div className="flex items-center gap-2 mt-8">
        <h1 className="text-lg :text-2xl font-medium">Update Terbaru</h1>
        <FaArrowRight />
      </div>
      <div className="grid grid-rows-10 lg:grid-cols-2 lg:grid-rows-5 gap-4 mt-4">
        <HomeCard />
        <HomeCard />
        <HomeCard />
        <HomeCard />
        <HomeCard />
        <HomeCard />
        <HomeCard />
        <HomeCard />
        <HomeCard />
        <HomeCard />
      </div>
    </Layout>
  );
}
