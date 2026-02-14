import type { SubscriptionBoxData } from "@/app/subscribe/data";

const IMG =
  "/images";

interface SubscriptionBoxProps {
  box: SubscriptionBoxData;
}

export default function SubscriptionBox({ box }: SubscriptionBoxProps) {
  return (
    <div style={{zIndex: 0}}
      className={`relative fadeIn w-full max-w-400 mx-auto md:mx-0 lg:max-w-full lg:w-1/3 px-2 lg:px-4 lg:h-full lg:flex lg:flex-col lg:flex-1 group box_${box.index}`}
    >
      {/* Sun decoration – desktop */}
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={box.sunDesktopImage}
        alt=""
        className={box.sunDesktopClass}
        style={{ zIndex: -1 }}
      />

      {/* Badge (best seller / best value) */}
      {box.badgeImage && (
        // eslint-disable-next-line @next/next/no-img-element
        <img
          src={box.badgeImage}
          alt=""
          className={box.badgeClass}
        />
      )}

      {/* Card */}
      <div
        className={`w-full border-3 ${box.borderClass} rounded-40 lg:rounded-60 px-0 lg:px-0 mb-10 lg:mb-20 relative bg-darkpurple flex flex-col flex-1 overflow-hidden`}
      >
        {/* Sun decoration – mobile */}
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={box.sunMobileImage}
          alt=""
          className={box.sunMobileClass}
        />

        {/* Radial background – desktop */}
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={`${IMG}/sb_radialbg.png`}
          alt=""
          className="hidden lg:block object-cover w-full absolute left-0 -top-20 right-0 bottom-0 opacity-10"
        />

        {/* ── Top section: title, description, box image ── */}
        <div className="flex flex-col px-0 pb-0 flex-0 text-white relative z-10 pt-14 lg:pt-8 relative overflex-hidden">
          <em className="block font-bold text-white text-30 text-center">
            {box.title}
          </em>
          <em className="w-full px-6 text-16 md:text-16 leading-140 text-white opacity-50 lg:px-0 xl:px-4 text-center mb-1">
            {box.description}
          </em>

          <div className="flex flex-col text-center items-center w-full items-center flex flex-col jutify-center border-b border-white border-opacity-50 relative overflow-hidden h-240 lg:h-220 xl:h-240 subscription__snack_fix">
            {/* Snack count badge */}
            <picture className="max-w-110 fadeIn absolute right-4 lg:right-2 xl:right-5 2xl:right-6 bottom-3 lg:bottom-0 xl:bottom-1 z-20 transform scale-110 qty">
              <source
                media="(min-width: 300px)"
                srcSet={box.snackCountImageWebp}
                type="image/webp"
              />
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={box.snackCountImage}
                alt="Snacks"
                className="group-hover:-translate-y-5 duration-500 ease-in"
              />
            </picture>

            {/* Box product image */}
            <picture className={box.snacksTranslateClass}>
              <source
                media="(min-width: 300px)"
                srcSet={box.boxImageWebp}
                type="image/webp"
              />
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={box.boxImage}
                alt="Snacks"
                className="w-full fadeIn transform -rotate-12 scale-90 lg:scale-95 xl:scale-90"
              />
            </picture>
          </div>
        </div>

        {/* ── Bottom section: features, price, CTA ── */}
        <div className="flex flex-col pb-10 pt-10 lg:pt-8 xl:pt-10 flex-1 text-white relative z-10 px-6 lg:px-4 xl:px-8 2xl:px-10 items-start mt-auto">
          <div className="cms_bullet_list flex flex-col flex-1">
            <ul>
              {box.features.map((feature, i) => (
                <li
                  key={i}
                  className={feature.included ? undefined : "cross"}
                  dangerouslySetInnerHTML={{ __html: feature.text }}
                />
              ))}
            </ul>
          </div>

          <em className="block pb-4 pt-4 md:pb-6 text-40 lg:text-45 text-center w-full mt-auto">
            £<strong>{box.price}</strong>
            <span className="text-30">/mo</span>
          </em>

          <a
            href={box.url}
            className="mt-auto rounded-full bg-orange text-white px-0 py-4 text-20 lg:text-20 w-full md:max-w-300 mx-auto font-bold flex flex-col text-center lg:py-3 transition duration-300 ease-in-out hover:bg-purple w-full"
          >
            Select
          </a>

          <small className="text-white opacity-50 text-14 md:text-15 leading-140 block text-center mt-4 md:mt-4 w-full">
            Cancel subscription at anytime
          </small>
        </div>
      </div>
    </div>
  );
}
