"use client";

import { useState } from "react";

export default function Faq() {
  const [openIndex, setOpenIndex] = useState<number>(0);

  const faqItems = [
    {
      question: "What is SnackVerse?",
      answer: "SnackVerse is a subscription service for those who love trying snacks from around the world. Each month we deliver a box of snacks to your door from a different country.",
    },
    {
      question: "How do I join SnackVerse?",
      answer: 'It\'s pretty simple, just press the "<a href="https://snackverse.com/subscribe/">join now</a>" button on our site, then select what kind of payment plan suits you and provide all the necessary details. We will then take over the process of feeding you the best tasting snacks from around the world.',
    },
    {
      question: "What kind of snacks do I receive in my box ?",
      answer: 'You can expect to receive snacks from sweets to crisps to biscuits to chocolates and a lot more. We include all types of snacks and only pack the best and most delicious snacks from around the world! You can get an idea of the snacks we send by checking out our <a href="https://snackverse.com/our-previous-boxes/">previous month\'s box</a>.',
    },
    {
      question: "Are the snacks in my box chosen from a different country every month?",
      answer: "That's correct! Each month's box will feature snacks from a different country in the world. The country you'll receive is a secret until you receive the box! The country will be revealed at the end of each month.",
    },
    {
      question: "How many snacks do I get?",
      answer: "Currently we offer three types of boxes: the Mini box, the Original box, and the Premium box. The Mini box contains 5+ full-size snacks, the Original box contains 10+ full-size snacks, and the Premium box contains 20+ full-size snacks. Furthermore, both the Original and Premium boxes contain drinks for no extra fee!",
    },
  ];

  const toggleItem = (index: number) => {
    setOpenIndex(openIndex === index ? -1 : index);
  };

  return (
    <div className="py-16 md:py-20 overflow-hidden fade-trigger" style={{ backgroundColor: "#ECEAFF" }}>
      <div className="max-w-90 xl:max-w-xl relative flex flex-col mx-auto">
        <picture>
          <source media="(min-width: 300px)" srcSet="https://snackverse.com/wp-content/themes/shopkeeper/images/radial_white.webp" type="image/webp" />
          <img src="/page_files/radial_white.png" alt="Picture" className="max-w-400 w-full md:max-w-600 absolute -top-20 -left-40 md:-top-20 md:-left-80 xl:translate-x-10 transform mx-auto z-0" />
        </picture>

        <picture>
          <source media="(min-width: 300px)" srcSet="https://snackverse.com/wp-content/themes/shopkeeper/images/radial_bg.webp" type="image/webp" />
          <img src="/page_files/radial_bg.png" alt="Picture" className="max-w-400  max-w-200 w-full md:max-w-600 absolute -bottom-20 -right-40 md:bottom-auto md:top-20 md:-right-1/3 transform mx-auto z-0" />
        </picture>

        <div className="hidden lg:inline-block max-w-200 w-full md:max-w-220 absolute top-32 xl:left-10 transform -translate-y-1/2 mx-auto z-10 lg:scale-90 2xl:scale-100">
          <picture>
            <source media="(min-width: 300px)" srcSet="https://snackverse.com/wp-content/themes/shopkeeper/images/candy_green.webp" type="image/webp" />
            <img src="/page_files/candy_green.png" alt="Picture" data-parallax='{"rotateZ": 100, "scale": 1, "smoothness": 40}' style={{ transform: "translate3d(0px, 0px, 0px) rotateX(0deg) rotateY(0deg) rotateZ(0.039deg) scaleX(1) scaleY(1) scaleZ(1)", WebkitTransform: "translate3d(0px, 0px, 0px) rotateX(0deg) rotateY(0deg) rotateZ(0.039deg) scaleX(1) scaleY(1) scaleZ(1)" }} />
          </picture>
        </div>

        <div className="hidden lg:inline-block max-w-200 w-full md:max-w-320 absolute top-1/2 -left-14 lg:-translate-x-10 xl:-translate-x-10 transform -translate-y-1/2 mx-auto lg:scale-90 2xl:scale-100">
          <picture>
            <source media="(min-width: 300px)" srcSet="https://snackverse.com/wp-content/themes/shopkeeper/images/cookie.webp" type="image/webp" />
            <img src="/page_files/cookie.png" alt="Picture" className="js-parallax" data-parallax='{"rotateZ": -10, "y":20, "x": 20, "smoothness": 10}' style={{ transform: "translate3d(0.01px, 0.01px, 0px) rotateX(0deg) rotateY(0deg) rotateZ(0deg) scaleX(1) scaleY(1) scaleZ(1)", WebkitTransform: "translate3d(0.01px, 0.01px, 0px) rotateX(0deg) rotateY(0deg) rotateZ(0deg) scaleX(1) scaleY(1) scaleZ(1)" }} />
          </picture>
        </div>

        <div className="hidden lg:inline-block max-w-200 w-full md:max-w-400 absolute -bottom-20 -left-52 transform  mx-auto lg:scale-90 2xl:scale-100 lg:translate-x-16 xl:translate-x-24">
          <picture>
            <source media="(min-width: 300px)" srcSet="https://snackverse.com/wp-content/themes/shopkeeper/images/soda.webp" type="image/webp" />
            <img src="/page_files/soda.png" alt="Picture" className="js-parallax" data-parallax='{"rotateZ": 20, "x": -10, "smoothness": 14}' style={{ transform: "translate3d(0px, 0px, 0px) rotateX(0deg) rotateY(0deg) rotateZ(0.014deg) scaleX(1) scaleY(1) scaleZ(1)", WebkitTransform: "translate3d(0px, 0px, 0px) rotateX(0deg) rotateY(0deg) rotateZ(0.014deg) scaleX(1) scaleY(1) scaleZ(1)" }} />
          </picture>
        </div>

        <div className="hidden lg:inline-block max-w-140 w-full md:max-w-140 absolute top-18 right-10 xl:right-20 transform  mx-auto lg:scale-90 2xl:scale-100">
          <picture>
            <source media="(min-width: 300px)" srcSet="https://snackverse.com/wp-content/themes/shopkeeper/images/gum.webp" type="image/webp" />
            <img src="/page_files/gum.png" alt="Picture" className="js-parallax" data-parallax='{"rotateZ": 100}' style={{ transform: "translate3d(0px, 0px, 0px) rotateX(0deg) rotateY(0deg) rotateZ(0.029deg) scaleX(1) scaleY(1) scaleZ(1)", WebkitTransform: "translate3d(0px, 0px, 0px) rotateX(0deg) rotateY(0deg) rotateZ(0.029deg) scaleX(1) scaleY(1) scaleZ(1)" }} />
          </picture>
        </div>

        <div className="hidden lg:inline-block max-w-200 w-full md:max-w-400 w-full absolute top-1/2 -right-1/3 lg:-right-60 transform -translate-x-20 xl:-translate-x-32 -translate-y-1/2 mx-auto lg:scale-90 2xl:scale-100">
          <picture>
            <source media="(min-width: 300px)" srcSet="https://snackverse.com/wp-content/themes/shopkeeper/images/gummy.webp" type="image/webp" />
            <img src="/page_files/gummy.png" alt="Picture" className="js-parallax" data-parallax='{"rotateZ": 12, "x": 0, "y": 20, "smoothness": 20}' style={{ transform: "translate3d(0px, 0.019px, 0px) rotateX(0deg) rotateY(0deg) rotateZ(0.019deg) scaleX(1) scaleY(1) scaleZ(1)", WebkitTransform: "translate3d(0px, 0.019px, 0px) rotateX(0deg) rotateY(0deg) rotateZ(0.019deg) scaleX(1) scaleY(1) scaleZ(1)" }} />
          </picture>
        </div>

        <div className="hidden lg:inline-block max-w-200 w-full md:max-w-320 absolute -bottom-20 -right-20 transform mx-auto lg:scale-90 2xl:scale-100">
          <picture>
            <source media="(min-width: 300px)" srcSet="https://snackverse.com/wp-content/themes/shopkeeper/images/chip.webp" type="image/webp" />
            <img src="/page_files/chip.png" alt="Picture" className="js-parallax" data-parallax='{"rotateZ": -30, "scale": 0.8, "x":-20, "smoothness": 40}' style={{ transform: "translate3d(0px, 0px, 0px) rotateX(0deg) rotateY(0deg) rotateZ(0deg) scaleX(1) scaleY(1) scaleZ(1)", WebkitTransform: "translate3d(0px, 0px, 0px) rotateX(0deg) rotateY(0deg) rotateZ(0deg) scaleX(1) scaleY(1) scaleZ(1)" }} />
          </picture>
        </div>

        <div className="flex flex-col text-center text-black items-center justify-center gap-x-0 mx-auto pb-8 md:pb-10">
          <div className="relative overflow-hidden">
            <em className="font-bold text-36 xl:text-60 relative leading-120 relative z-10 block fadeIn" style={{ pointerEvents: "auto", transform: "translate(0px, 0px)", opacity: 1 }}>FAQ</em>
          </div>
        </div>

        <div className="text-left flex flex-col space-y-4 accordion mx-auto max-w-90 md:max-w-600 w-full relative z-10">
          {faqItems.map((item, index) => {
            const isOpen = openIndex === index;
            return (
              <div key={index} className="fadeIn" style={{ pointerEvents: "auto", transform: "translate(0px, 0px)", opacity: 1 }}>
                <div className={`accordion-item rounded-3xl relative overflow-hidden bg-white text-black w-full ${isOpen ? "active" : ""}`}>
                  <div
                    className="accordion-header bg-white px-6 py-5 cursor-pointer flex flex-row justify-between items-center"
                    onClick={() => toggleItem(index)}
                  >
                    <em className="block text-18 md:text-24 lg:pr-10 font-black transition duration-300 ease-in-out">{item.question}</em>
                    <div className="arrow">
                      <svg
                        className="transition duration-300 ease-in-out"
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="13"
                        fill="none"
                        style={{ transform: isOpen ? "rotate(180deg)" : "rotate(0deg)" }}
                      >
                        <path stroke="currentColor" strokeWidth="3" d="m18 2-8 8-8-8"></path>
                      </svg>
                    </div>
                  </div>
                  <div className="accordion-content" style={{ display: isOpen ? "block" : "none" }}>
                    <div className="text-14 pb-6 px-6 pt-2 md:pt-0" dangerouslySetInnerHTML={{ __html: item.answer }} />
                  </div>
                </div>
              </div>
            );
          })}

          <div className="pt-6 flex flex-col relative z-10 fadeIn lg:pb-6" style={{ pointerEvents: "auto", transform: "translate(0px, 0px)", opacity: 1 }}>
            <a href="https://snackverse.com/faqs" className="flex flex-col rounded-full text-white px-10 py-4 xl:py-6 border-purple border-2 text-purple font-bold transition duration-300 ease-in-out hover:bg-purple hover:text-white text-20 md:text-28 lg:text-32 lg:py-6 text-center">Read all questions</a>
          </div>
        </div>
      </div>
    </div>
  );
}
