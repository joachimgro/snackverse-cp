"use client";

import { useEffect, useState } from "react";
import styles from "./PromoMarquee.module.css";

interface PromoMarqueeProps {
  variant: "sale" | "stats";
}

const SALE_ENDS_AT = new Date("2024-12-31T23:59:59Z"); // update later

export default function PromoMarquee({ variant }: PromoMarqueeProps) {
  const [countdown, setCountdown] = useState<string | null>(null);

  useEffect(() => {
    if (variant !== "sale") return;

    const updateCountdown = () => {
      const now = new Date();
      const diff = SALE_ENDS_AT.getTime() - now.getTime();

      if (diff <= 0) {
        setCountdown(null);
        return;
      }

      const hours = Math.floor(diff / (1000 * 60 * 60));
      const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((diff % (1000 * 60)) / 1000);

      setCountdown(`${hours}h ${minutes}m ${seconds}s`);
    };

    updateCountdown();
    const interval = setInterval(updateCountdown, 1000);
    return () => clearInterval(interval);
  }, [variant]);

  if (variant === "sale") {
    const saleText = `🚨 FLASH SALE ENDS TONIGHT! 🚨 Use Code: `;
    const codeLink = "GONEBYMIDNIGHT";
    const endText = ` for 50% OFF ⏳ Ends `;
    const countdownText = countdown ? `in ${countdown}` : "tonight";

    return (
      <section className={`${styles.promoRoot} ${styles.promoRootSale}`}>
        <div className={styles.promoRotate}>
          <div className={styles.promoBand}>
            <div className={styles.promoViewport} aria-label="Promotion">
              <div className={styles.promoTrack}>
                <div className={styles.promoItem}>
                  {saleText}
                  <a href="#svcountdowncode">{codeLink}</a>
                  {endText}
                  <a href="#svcountdown">{countdownText}</a>
                  <a href="/terms-of-use">*</a>
                </div>

              
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }

  // stats variant
  return (
    <section className={`${styles.promoRoot} ${styles.promoRootStats}`}>
      <div className={`${styles.promoRotate} ${styles.promoRotateReverse}`}>
        <div className={`${styles.promoBand} ${styles.promoBandPurple}`}>
          <div className={styles.promoViewport} aria-label="Promotion">
            <div className={`${styles.promoTrack} ${styles.promoTrackReverse}`}>
              <div className={`${styles.promoItem} ${styles.promoItemWhite}`}>
                Discover endless delights with over{" "}
                <strong style={{ color: "#ff8c23" }}>2 million</strong> boxes shipped!
              </div>
             
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
