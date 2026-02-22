"use client";

import { useRef, useEffect } from "react";
import type { PreviousBox } from "@/data/previousBoxes";

type PreviousBoxItemProps = {
  box: PreviousBox;
  index: number;
};

export default function PreviousBoxItem({ box, index }: PreviousBoxItemProps) {
  const isEven = index % 2 === 0;
  const pathRef = useRef<SVGPathElement>(null);
  const maskPathRef = useRef<SVGPathElement>(null);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
            // Animate mask path
            if (maskPathRef.current) {
              maskPathRef.current.style.strokeDashoffset = "0";
            }
          }
        });
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={sectionRef}
      className={`bg-single_box md:max-w-full relative previous_boxes_thumb text-darkgrey reveal-path fade-trigger ${
        index === 0 ? "first" : ""
      } ${isEven ? "odd" : "even"}`}
      data-divisible={isEven ? "odd" : "even"}
    >
      <div className="lg:max-w-full relative overflow-visible">
        <div className="py-20 lg:py-0 lg:pt-0 lg:pb-0 flex flex-col md:flex-row md:justify-center md:items-center md:gap-x-4 lg:gap-x-8 xl:gap-x-4 mx-auto relative max-w-90 md:max-w-90 lg:justify-between lg:max-w-full lg:px-10 xl:max-w-xl 2xl:px-0 2xl:max-w-xl md:min-h-750 w-full relative overflow-visible">
          {/* Content Section */}
          <div className={`w-full lg:w-1/2 ${isEven ? "lg:order-1" : "lg:order-2"} lg:scale-80 xl:scale-90 transform`}>
            <div className="w-full xl:max-w-500 mx-auto">
              {/* Header with Country and Date */}
              <div className="flex flex-row gap-x-4 items-center">
                <em className="font-bold text-40 md:text-60 xl:text-60 2xl:text-70 leading-120 lg:leading-100 lg:pt-0 block lg:mx-0 w-auto text-left fadeIn">
                  {box.country}
                </em>

                <div className="flex flex-col text-center items-center relative justify-center js-slideLeft mt-2 flex-nowrap">
                  <svg className="max-h-40 md:max-h-50 w-full" style={{ minWidth: "100px" }} viewBox="0 0 111 50" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M16.6582 2H98.1622V0H16.6582V2ZM6.6582 15.8091V12H4.6582V15.8091H6.6582ZM6.6582 38V33.9711H4.6582V38H6.6582ZM98.1622 48H16.6582V50H98.1622V48ZM108.162 12V38H110.162V12H108.162ZM98.1622 50C104.79 50 110.162 44.6274 110.162 38H108.162C108.162 43.5228 103.685 48 98.1622 48V50ZM4.6582 38C4.6582 44.6274 10.0308 50 16.6582 50V48C11.1353 48 6.6582 43.5228 6.6582 38H4.6582ZM2.90285 30.1952C4.01589 31.1336 4.6582 32.5153 4.6582 33.9711H6.6582C6.6582 31.9257 5.75579 29.9845 4.19203 28.6661L2.90285 30.1952ZM2.90285 19.5851C-0.385381 22.3575 -0.385381 27.4228 2.90285 30.1952L4.19203 28.6661C1.85156 26.6928 1.85156 23.0875 4.19203 21.1142L2.90285 19.5851ZM4.6582 15.8091C4.6582 17.265 4.01589 18.6467 2.90285 19.5851L4.19203 21.1142C5.75578 19.7957 6.6582 17.8545 6.6582 15.8091H4.6582ZM98.1622 2C103.685 2 108.162 6.47715 108.162 12H110.162C110.162 5.37259 104.79 0 98.1622 0V2ZM16.6582 0C10.0308 0 4.6582 5.37259 4.6582 12H6.6582C6.6582 6.47716 11.1354 2 16.6582 2V0Z"
                      fill="#C782FF"
                    />
                  </svg>
                  <span className="absolute left-0 right-0 font-bold text-16 md:text-20 text-purplevariant1 js-slideLeft">
                    {box.date}
                  </span>
                </div>
              </div>

              {/* Description */}
              <p className="fadeIn mt-6 text-20 md:text-20 lg:text-24 font-medium md:font-bold lg:max-w-500">{box.description}</p>

              {/* Mobile Image */}
              <div className="flex lg:hidden flex-col md:text-center mt-6 mb-4 relative justify-center">
                <picture>
                  <source media="(min-width: 300px)" srcSet={box.boxImageMobile} type="image/webp" />
                  <img src={box.boxImage} alt={box.country} className="max-w-360 fadeIn relative mx-auto z-30 relative" />
                </picture>
                <picture>
                  <source media="(min-width: 300px)" srcSet={isEven ? "/images/box_mask.png" : "/images/box_mask_2.png"} type="image/webp" />
                  <img src={isEven ? "/images/box_mask.png" : "/images/box_mask_2.png"} alt="Box Mask" className="left-1/2 transform -translate-x-1/2 top-0 absolute max-w-full sm:max-w-500 fadeIn" />
                </picture>
              </div>

              {/* Specs */}
              <div className="flex w-full flex-col gap-x-4 md:grid md:grid-cols-3 mt-2 md:mt-8 relative overflow-hidden py-2">
                {box.specs.map((spec, i) => (
                  <div key={i} className="flex flex-row md:flex-col text-center items-center fadeIn box-spec-bubble py-2 md:py-8 md:px-3 bg-transparent md:max-w-160 h-full relative">
                    <div className="flex flex-col flex-1">
                      {spec.title && <span className="font-bold spec_title order-2 md:order-1 hidden md:flex text-center w-full mx-auto flex flex-col">{spec.title}</span>}
                      <div className="h-full flex flex-col justify-center items-center order-1 md:order-2 image_wrapper relative md:h-auto">
                        {spec.image && (
                          <picture>
                            <source media="(min-width: 300px)" srcSet={spec.image.replace(".png", ".webp")} type="image/webp" />
                            <img src={spec.image} alt={spec.title} className="max-w-60 max-w-h-60" />
                          </picture>
                        )}
                      </div>
                    </div>
                    <div className="flex flex-col order-2 w-full text-left px-6 md:px-0 md:text-center relative md:mt-auto">
                      {spec.title && <span className="font-bold spec_title text-20 md:hidden">{spec.title}</span>}
                      {spec.text && <span className="text-16 leading-120 spec_text text-darkgrey font-medium whitespace-pre-line">{spec.text}</span>}
                    </div>
                  </div>
                ))}
              </div>

              {/* Subscribe Button */}
              <div className="fadeIn mt-6 md:mt-14 lg:mt-12">
                <a href="/subscribe" className="rounded-full bg-purplevariant1 text-white px-10 py-4 text-20 md:text-24 xl:px-32 w-full font-bold flex flex-col text-center lg:py-6 transition duration-300 ease-in-out hover:bg-purple">
                  Subscribe
                </a>
              </div>
            </div>
          </div>

          {/* Desktop Image */}
          <div className={`hidden relative w-full md:w-1/2 lg:flex ${isEven ? "lg:order-2" : "lg:order-1"}`}>
            <picture>
              <source media="(min-width: 300px)" srcSet={box.boxImageMobile} type="image/webp" />
              <img src={box.boxImage} alt={box.country} className="max-w-95 fadeIn lg:max-w-full lg:scale-110 xl:scale-105 translate-y-6 transform z-40 relative" />
            </picture>

            <picture>
              <source media="(min-width: 300px)" srcSet={isEven ? "/images/box_mask.png" : "/images/box_mask_2.png"} type="image/webp" />
              <img src={isEven ? "/images/box_mask.png" : "/images/box_mask_2.png"} alt="Box Mask" className="absolute w-full h-full left-1/2 top-1/2 transform -translate-y-1/2 -translate-x-1/2 max-w-full fadeIn z-10" />
            </picture>
          </div>
        </div>

        {/* SVG Path */}
        {isEven ? (
          <svg className="absolute hidden lg:block top-0 left-1/2 pointer-events-none z-20 overflow-visible" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 661 748" width="50%" height="100%" preserveAspectRatio="none" style={{ minHeight: "100%", transform: "scaleY(-1)" }}>
            <defs>
              <mask id={`pathMask${index + 1}`}>
                <path
                  ref={maskPathRef}
                  fill="none"
                  stroke="white"
                  strokeWidth="3"
                  strokeDasharray="2400"
                  strokeDashoffset="-2400"
                  style={{ transition: "stroke-dashoffset 1.5s ease-out" }}
                  d="M4.32179 1C-6.67785 74 18.768 172.5 137.822 172.5c148.817 0 521-152.0559 521 211 0 347.326-349.947 239.005-479 236C29.5 616 11 687 2 747.5"
                />
              </mask>
            </defs>
            <path
              ref={pathRef}
              className="previous_boxes_thumb--path"
              stroke="#B65BFF"
              strokeDasharray="6,6"
              strokeLinecap="round"
              strokeWidth="3"
              mask={`url(#pathMask${index + 1})`}
              d="M4.32179 1C-6.67785 74 18.768 172.5 137.822 172.5c148.817 0 521-152.0559 521 211 0 347.326-349.947 239.005-479 236C29.5 616 11 687 2 747.5"
            />
          </svg>
        ) : (
          <svg className="absolute hidden lg:block top-0 right-1/2 pointer-events-none z-20 overflow-visible" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 661 748" width="50%" height="100%" preserveAspectRatio="none" style={{ minHeight: "100%", transform: "scaleX(-1)", right: "calc(50% - 0.67%)" }}>
            <defs>
              <mask id={`pathMask${index + 1}`}>
                <path
                  ref={maskPathRef}
                  fill="none"
                  stroke="white"
                  strokeWidth="3"
                  strokeDasharray="2400"
                  strokeDashoffset="2400"
                  style={{ transition: "stroke-dashoffset 1.5s ease-out" }}
                  d="M4.32179 1C-6.67785 74 18.768 172.5 137.822 172.5c148.817 0 521-152.0559 521 211 0 347.326-349.947 239.005-479 236C29.5 616 11 687 2 747.5"
                />
              </mask>
            </defs>
            <path
              ref={pathRef}
              className="previous_boxes_thumb--path"
              stroke="#B65BFF"
              strokeDasharray="6,6"
              strokeLinecap="round"
              strokeWidth="3"
              mask={`url(#pathMask${index + 1})`}
              d="M4.32179 1C-6.67785 74 18.768 172.5 137.822 172.5c148.817 0 521-152.0559 521 211 0 347.326-349.947 239.005-479 236C29.5 616 11 687 2 747.5"
            />
          </svg>
        )}
      </div>
    </div>
  );
}
