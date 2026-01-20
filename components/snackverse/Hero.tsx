"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { ANIMATION_CONFIG } from "./animations.config";
import Header from "./Header";

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  // Parallax transforms for snack images
  const planetsY = useTransform(scrollYProgress, [0, 1], [0, -100]);
  const boxY = useTransform(scrollYProgress, [0, 1], [0, 50]);
  const orangeY = useTransform(scrollYProgress, [0, 1], [0, -50]);
  const orangeRotate = useTransform(scrollYProgress, [0, 1], [0, -5]);
  const appleY = useTransform(scrollYProgress, [0, 1], [0, 30]);
  const appleRotate = useTransform(scrollYProgress, [0, 1], [0, 2]);
  const candyY = useTransform(scrollYProgress, [0, 1], [0, -30]);
  const candyRotate = useTransform(scrollYProgress, [0, 1], [0, 1]);
  const boxRotate = useTransform(scrollYProgress, [0, 1], [0, -2]);

  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: `body {min-height: 200vh;} .hero { background-image: url('https://snackverse.com/wp-content/themes/shopkeeper/images/hero_bg_mobile.jpg'); background-color:#560299; background-size:120% 100%; background-position: center 0%; background-repeat: no-repeat; } @media only screen and (min-width: 1025px) { .hero { background-image: url('https://snackverse.com/wp-content/themes/shopkeeper/images/bg-hero.jpg'); min-height:800px; height: 100%; background-size: 110% 120%; background-position: 50% 20%; } } @media only screen and (min-width: 1600px) { .hero { height: 100vh; min-height:900px; max-height: auto; background-size:120% 120%; background-position: 90% 0%; } } .subscribe-btn{ display: none; } @media only screen and (max-width: 1024px) { #mce-EMAIL{ max-width: none !important; } } @media only screen and (max-width: 767px) { .subscribe-btn { background: rgba(77, 0, 137,0.85); width: 100%; position: fixed; bottom: -87px; padding-top: 0.7em; display: flex !important; justify-content: center; height: 171px; z-index: 1000; } body { padding-bottom: 5.2em; } }` }} />
      <div ref={containerRef} className="hero flex flex-col relative bg-purple bg-no-repeat bg-hero h-full lg:h-screen xl:h-screen xl:max-h-860">
        <Header />
        <motion.picture
          style={{ y: planetsY }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: ANIMATION_CONFIG.duration.normal }}
        >
          <source media="(min-width: 768px)" srcSet="https://snackverse.com/wp-content/themes/shopkeeper/images/planets-1400x0-c-default.webp" type="image/webp" />
          <source media="(min-width: 300px)" srcSet="https://snackverse.com/wp-content/themes/shopkeeper/images/planets_mobile-800x0-c-default.webp" type="image/webp" />
          <img src="/page_files/planets_mobile.png" alt="Picture" className="absolute top-0 right-0 w-full md:top-10 md:right-1/4 transform md:-translate-y-1/2 max-w-full md:max-w-md lg:right-auto lg:left-1/4 2xl:left-1/3 xl:-translate-x-20 2xl:translate-x-0 xl:max-w-1200" />
        </motion.picture>

        <div className="flex flex-col lg:flex-row w-full flex-1 h-auto justify-between mx-auto md:max-w-90 xl:max-w-xl items-center w-full pt-12 md:pt-0 lg:pt-15 xl:pt-10 relative z-20 text-white">
          <div className="flex-wrap flex flex-col text-white w-full md:w-1/2 text-center md:text-left xl:ml-24 md:w-full lg:max-w-500 xl:max-w-640 xl:w-full relative z-10 md:pb-20 lg:pb-0">
            <motion.div
              className="relative overflow-hidden"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: ANIMATION_CONFIG.duration.normal, delay: 0.2, ease: ANIMATION_CONFIG.easing.easeOut }}
            >
              <h1 className="text-white font-bold text-40 md:text-60 xl:text-60 2xl:text-70 leading-120 lg:leading-100 pt-14 md:pt-32 lg:pt-0 mx-auto lg:mx-0 w-auto text-center lg:text-left">
                Welcome to<br />
                <strong className="text-orange">SnackVerse</strong>
              </h1>
            </motion.div>
            <motion.div
              className="relative overflow-hidden"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: ANIMATION_CONFIG.duration.normal, delay: 0.4, ease: ANIMATION_CONFIG.easing.easeOut }}
            >
              <p className="text-16 md:text-24 lg:text-18 xl:text-20 2xl:text-24 mt-8 px-8 sm:px-10 md:px-0 max-w-400 mx-auto lg:ml-0 md:max-w-700 xl:max-w-600 2xl:max-w-700 lg:max-w-md text-center lg:text-left">
                Each month we deliver a box of snacks, from a different country, to your door. <br className="md:hidden" />Get a taste of the world!
              </p>
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: ANIMATION_CONFIG.duration.normal, delay: 0.6, ease: ANIMATION_CONFIG.easing.easeOut }}
              >
                <a href="https://snackverse.com/subscribe/" className="rounded-full bg-orange text-white px-10 py-4 lg:py-6 lg:px-10 text-white inline-flex mt-10 mb-10 md:mb-20 font-bold transition duration-300 ease-in-out hover:bg-darkorange md:text-24 xl:text-28 2xl:text-30 hidden lg:inline-flex">Get your snack box</a>
              </motion.div>
            </motion.div>
          </div>

          <motion.div
            className="box-img relative xl:w-full min-h-400 md:mt-10 lg:mt-0 xl:min-h-full translate-x-2 xl:w-auto transform md:scale-105 md:-translate-y-10 xl:scale-60 3xl:scale-100 xl:-translate-y-14 2xl:translate-y-0 xl-translate-x-0 xl:-translate-x-20 2xl:translate-x-10 xl:max-w-550 pointer-events-none"
            style={{ y: boxY }}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: ANIMATION_CONFIG.duration.slow, delay: 0.3 }}
          >
            <motion.div
              className="max-w-130 transform absolute left-0 top-0 z-10 -translate-x-4 xl:scale-140 2xl:scale-150 xl:max-w-200 pointer-events-none"
              style={{ y: orangeY, rotate: orangeRotate }}
            >
              <picture style={{ perspective: "800px", WebkitPerspective: "800px" }}>
                <source media="(min-width: 768px)" srcSet="https://snackverse.com/wp-content/themes/shopkeeper/images/orange_desktop.webp" type="image/webp" />
                <source media="(min-width: 300px)" srcSet="https://snackverse.com/wp-content/themes/shopkeeper/images/orange_mobile.webp" type="image/webp" />
                <img src="/page_files/orange_mobile.png" alt="Picture" className="animate-float" />
              </picture>
            </motion.div>

            <motion.div
              className="max-w-220 transform absolute left-0 bottom-10 z-10 -translate-x-14 xl:scale-140 2xl:scale-150 lg:translate-y-10 lg:-translate-x-20 2xl:-translate-y-10 xl:-translate-x-4 pointer-events-none"
              style={{ y: appleY, rotate: appleRotate }}
            >
              <picture>
                <source media="(min-width: 768px)" srcSet="https://snackverse.com/wp-content/themes/shopkeeper/images/apple_desktop.webp" type="image/webp" />
                <source media="(min-width: 300px)" srcSet="https://snackverse.com/wp-content/themes/shopkeeper/images/apple_mobile.webp" type="image/webp" />
                <img src="/page_files/apple_mobile.png" alt="Picture" className="animate-float-slow" />
              </picture>
            </motion.div>

            <motion.div
              className="max-w-220 transform absolute right-0 bottom-0 z-10 translate-y-8 translate-x-10 lg:translate-x-20 lg:translate-y-20 2xl:translate-x-20 2xl:translate-y-4 xl:scale-150 pointer-events-none"
              style={{ perspective: "800px", WebkitPerspective: "800px", y: candyY, rotate: candyRotate }}
            >
              <picture>
                <source media="(min-width: 768px)" srcSet="https://snackverse.com/wp-content/themes/shopkeeper/images/candy_desktop.webp" type="image/webp" />
                <source media="(min-width: 300px)" srcSet="https://snackverse.com/wp-content/themes/shopkeeper/images/candy_mobile.webp" type="image/webp" />
                <img src="/page_files/candy_mobile.png" alt="Picture" className="animate-float-fast" />
              </picture>
            </motion.div>

            <div className="boxshadow transform scale-125 xl:scale-140 2xl:scale-150 pointer-events-none translate-x-0 xl:translate-x-20 xl:w-full max-w-400 xl:max-w-500 xl:translate-y-6 pointer-events-none">
              <picture>
                <source media="(min-width: 768px)" srcSet="https://snackverse.com/wp-content/themes/shopkeeper/images/box_shadow_desktop.webp" type="image/webp" />
                <source media="(min-width: 300px)" srcSet="https://snackverse.com/wp-content/themes/shopkeeper/images/box_shadow_desktop.webp" type="image/webp" />
                <img src="/page_files/box_shadow.png" alt="Picture" className="animate-bob" />
              </picture>
            </div>

            <motion.div
              className="transform absolute left-auto right-auto top-10 xl:top-14 -translate-x-3 pointer-events-none max-w-400 scale-95 lg:scale-125 xl:-translate-y-10 xl:max-w-600 xl:scale-105 2xl:scale-125 2xl:-translate-y-0 xl:translate-x-2 pointer-events-none"
              style={{ rotate: boxRotate }}
            >
              <picture>
                <source media="(min-width: 768px)" srcSet="https://snackverse.com/wp-content/themes/shopkeeper/images/box_desktop-900x0-c-default.webp" type="image/webp" />
                <source media="(min-width: 300px)" srcSet="https://snackverse.com/wp-content/themes/shopkeeper/images/box_mobile.webp" type="image/webp" />
                <img src="/page_files/box_mobile.png" alt="Picture" className="w-full" />
              </picture>
            </motion.div>
          </motion.div>

          <div className="pb-4 lg:hidden md-hidden sm-hidden subscribe-btn">
            <a href="https://snackverse.com/subscribe/" className="max-w-300  md:max-w-400 md:py-6 md:mt-4 text-20 rounded-full bg-orange text-white px-10 py-4 text-white inline-flex w-full font-bold transition duration-300 ease-in-out mb-20 hover:bg-darkorange md:text-24 xl:text-32 text-center justify-center">Get your snack box</a>
          </div>
          <motion.div
            className="pb-4 lg:hidden w-full px-10 text-center"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: ANIMATION_CONFIG.duration.normal, delay: 0.6, ease: ANIMATION_CONFIG.easing.easeOut }}
          >
            <a href="https://snackverse.com/subscribe/" className="max-w-300  md:max-w-400 md:py-6 md:mt-4 text-20 rounded-full bg-orange text-white px-10 py-4 text-white inline-flex w-full font-bold transition duration-300 ease-in-out mb-20 hover:bg-darkorange md:text-24 xl:text-32 text-center justify-center">Get your snack box</a>
          </motion.div>
        </div>
      </div>
    </>
  );
}
