"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { ANIMATION_CONFIG } from "./animations.config";

export default function TrustBadges() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  // Parallax for decorative images
  const stellarY = useTransform(scrollYProgress, [0, 1], [0, -30]);
  const stellarRotate = useTransform(scrollYProgress, [0, 1], [0, -5]);
  const meteorX = useTransform(scrollYProgress, [0, 1], [0, -20]);

  return (
    <div ref={containerRef} className="bg-bgpurple w-full py-20 lg:py-24 lg:pt-32 bg-full bg-center bg-no-repeat mt-16 lg:mt-24 relative bg-contain fixbgposition" style={{ backgroundImage: "url(https://snackverse.com/wp-content/themes/shopkeeper/images/bg_bars.png)" }}>
      <div className="flex flex-col md:flex-row text-white mx-auto max-w-90 md:max-w-md md:px-6 lg:px-0 xl:max-w-xl relative w-full flex-wrap">
        <motion.div
          className="transform absolute max-w-320 w-full -top-40 -left-32 xl:-top-36 xl:left-0 transform -translate-y-10 scale-60 lg:scale-90 xl:-translate-y-20 xl:-translate-x-10"
          style={{ y: stellarY, rotate: stellarRotate }}
        >
          <picture>
            <source media="(min-width: 300px)" srcSet="https://snackverse.com/wp-content/themes/shopkeeper/images/stellar.webp" type="image/webp" />
            <img src="/page_files/stellar.png" alt="Picture" />
          </picture>
        </motion.div>

        <motion.div
          className="transform absolute max-w-220 lg:max-w-400 top-0 right-0 translate-x-20 -translate-y-14 sm:-translate-y-16 lg:-translate-y-20 transform xl:-translate-y-24 xl:-translate-x-10"
          style={{ x: meteorX }}
        >
          <picture>
            <source media="(min-width: 300px)" srcSet="https://snackverse.com/wp-content/themes/shopkeeper/images/meteor.webp" type="image/webp" />
            <img src="/page_files/meteor.png" alt="Picture" />
          </picture>
        </motion.div>

        <motion.div
          className="flex flex-col w-full md:w-1/3 justify-center md:justify-between lg:justify-center items-center text-center pb-10 lg:pb-0 md:px-2 xl:px-0"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ ...ANIMATION_CONFIG.scroll }}
          transition={{ duration: ANIMATION_CONFIG.duration.normal, ease: ANIMATION_CONFIG.easing.easeOut }}
        >
          <picture>
            <source media="(min-width: 300px)" srcSet="https://snackverse.com/wp-content/themes/shopkeeper/images/shipping.webp" type="image/webp" />
            <img src="/page_files/shipping.png" alt="Picture" className="max-w-140 lg:max-180 xl:max-w-200" style={{ pointerEvents: "none" }} />
          </picture>
          <div className="relative mt-4 h-auto"><em className="font-bold text-24 lg:text-32 xl:text-40 block">Free Shipping</em></div>
          <div className="relative overflow-hidden h-full pt-4 lg:pt-6"><p className="text-16 lg:text-18 xl:text-20 lg:px-6 xl:px-14 h-auto">Enjoy free delivery on UK orders. We also ship internationally — rates may vary.</p></div>
        </motion.div>

        <motion.div
          className="flex flex-col w-full md:w-1/3 justify-center items-center text-center pb-10 lg:pb-0 md:px-2 xl:px-0"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ ...ANIMATION_CONFIG.scroll }}
          transition={{ duration: ANIMATION_CONFIG.duration.normal, delay: 0.1, ease: ANIMATION_CONFIG.easing.easeOut }}
        >
          <picture>
            <source media="(min-width: 300px)" srcSet="https://snackverse.com/wp-content/themes/shopkeeper/images/commitment.webp" type="image/webp" />
            <img src="/page_files/commitment.png" alt="Picture" className="max-w-140 lg:max-180 xl:max-w-200 w-full transform translate-x-2 translate-fix" style={{ pointerEvents: "none" }} />
          </picture>
          <div className="relative mt-4 h-auto"><em className="font-bold text-24 lg:text-32 xl:text-40 block">No Commitment</em></div>
          <div className="relative overflow-hidden h-full pt-4 lg:pt-6"><p className="text-16 lg:text-18 xl:text-20 lg:px-6 xl:px-14 h-auto">You can cancel your subscription anytime, from your account settings — no questions asked!</p></div>
        </motion.div>
        <motion.div
          className="flex flex-col w-full md:w-1/3 justify-center items-center text-center pb-10 lg:pb-0 md:px-2 xl:px-0"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ ...ANIMATION_CONFIG.scroll }}
          transition={{ duration: ANIMATION_CONFIG.duration.normal, delay: 0.2, ease: ANIMATION_CONFIG.easing.easeOut }}
        >
          <picture>
            <source media="(min-width: 300px)" srcSet="https://snackverse.com/wp-content/themes/shopkeeper/images/satisfaction.webp" type="image/webp" />
            <img src="/page_files/satisfaction.png" alt="Picture" className="max-w-140 lg:max-180 xl:max-w-200 w-full" style={{ pointerEvents: "none" }} />
          </picture>
          <div className="relative mt-4 h-auto"><em className="font-bold text-24 lg:text-32 xl:text-40 block">100% Satisfaction</em></div>
          <div className="relative overflow-hidden h-full pt-4 lg:pt-6"><p className="text-16 lg:text-18 xl:text-20 lg:px-6 xl:px-14 h-auto">We choose the best and highest-quality snacks from each month — so you're left wanting more!</p></div>
        </motion.div>
      </div>
    </div>
  );
}
