"use client";

import { motion } from "framer-motion";
import { ANIMATION_CONFIG } from "./animations.config";

export default function HowItWorks() {
  return (
    <div className="bg-lightred py-14 lg:py-24 lg:pb-32 text-black text-center px-6">
      <motion.div
        className="relative overflow-hidden xl:mb-10"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ ...ANIMATION_CONFIG.scroll }}
        transition={{ duration: ANIMATION_CONFIG.duration.normal, ease: ANIMATION_CONFIG.easing.easeOut }}
      >
        <em className="font-bold text-36 xl:text-60 relative leading-120 px-10 block">How Does It Work?</em>
      </motion.div>

      <div className="flex flex-col flex-wrap gap-y-10 md:gap-y-0 md:flex-row mx-auto max-w-md xl:max-w-xl justify-between h-auto pt-0">
        <motion.div
          className="flex flex-col text-center w-full md:w-1/3 h-auto"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ ...ANIMATION_CONFIG.scroll }}
          transition={{ duration: ANIMATION_CONFIG.duration.normal, delay: 0.1, ease: ANIMATION_CONFIG.easing.easeOut }}
        >
          <div className="relative flex flex-col">
            <picture>
              <source media="(min-width: 300px)" srcSet="/images/step1_.webp" type="image/webp" />
              <img src="/page_files/step1_.png" alt="Picture" className="max-w-full xl:max-w-400 mx-auto transform -translate-x-7 md:-translate-x-4" style={{ pointerEvents: "none" }} />
            </picture>
          </div>

          <div className="relative overflow-hidden"><em className="font-bold text-24 md:text-28 lg:text-32 lg:text-36 block">You Subscribe</em></div>
          <div className="relative overflow-hidden"><p className="text-16 md:text-16 md:px-4 pt-4 md:pt-2 lg:px-10 text-purpletext">Choose either the mini, original or premium box to enjoy yourself or treat someone as a gift. Place your order using one of our many payment options, and we'll start preparing your order for lift-off!</p></div>
        </motion.div>
        <motion.div
          className="flex flex-col text-center w-full md:w-1/3 h-auto"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ ...ANIMATION_CONFIG.scroll }}
          transition={{ duration: ANIMATION_CONFIG.duration.normal, delay: 0.2, ease: ANIMATION_CONFIG.easing.easeOut }}
        >
          <div className="relative flex flex-col">
            <picture>
              <source media="(min-width: 300px)" srcSet="/images/step2_.webp" type="image/webp" />
              <img src="/page_files/step2_.png" alt="Picture" className="max-w-full xl:max-w-400 mx-auto transform -translate-x-7 md:-translate-x-4" style={{ pointerEvents: "none" }} />
            </picture>
          </div>
          <div className="relative overflow-hidden"><em className="font-bold text-24 md:text-28 lg:text-32 lg:text-36 block">We Deliver</em></div>
          <div className="relative overflow-hidden"><p className="text-16 md:text-16 md:px-4 pt-4 md:pt-2 lg:px-10 text-purpletext">We send your SnackVerse box around the end of each month. You can track the delivery status of your snack box through your account. Start getting excited and guessing which country this month will be!</p></div>
        </motion.div>
        <motion.div
          className="flex flex-col text-center w-full md:w-1/3 h-auto"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ ...ANIMATION_CONFIG.scroll }}
          transition={{ duration: ANIMATION_CONFIG.duration.normal, delay: 0.3, ease: ANIMATION_CONFIG.easing.easeOut }}
        >
          <div className="relative flex flex-col">
            <picture>
              <source media="(min-width: 768px)" srcSet="/images/step3_.webp" type="image/webp" />
              <source media="(min-width: 300px)" srcSet="/images/step3_mobile.webp" type="image/webp" />
              <img src="/page_files/step3_.png" alt="Picture" className="max-w-full xl:max-w-400 mx-auto transform -translate-x-3 md:-translate-x-2" style={{ pointerEvents: "none" }} />
            </picture>
          </div>
          <div className="relative overflow-hidden"><em className="font-bold text-24 md:text-28 lg:text-32 lg:text-36 block">You Enjoy</em></div>
          <div className="relative overflow-hidden"><p className="text-16 md:text-16 md:px-4 pt-4 md:pt-2 lg:px-10 text-purpletext">Open your box and start exploring. Try fun new snacks that are out of this world! You'll love sampling and sharing your exotic snacks! Remember each month snacks from a different country will show up!</p></div>
        </motion.div>
      </div>
    </div>
  );
}
