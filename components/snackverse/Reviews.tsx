export default function Reviews() {
  return (
    <div className="max-w-full w-full flex flex-col py-14 lg:py-24 text-black mx-auto relative bg-contain bg-center bg-no-repeat bg-cover bg-trust_pilot fade-trigger activate-slideshow">
      <div className="flex flex-col text-black mx-auto max-w-90 md:max-w-lg xl:max-w-xl relative">
        <div className="max-w-100 -top-10 -right-14 sm:-right-28 sm:max-w-200 md:top-10 xmd:translate-x-32 md:translate-x-20 lg:max-w-250 mx-auto absolute lg:top-0 scale-90 xl:scale-100 lg:-right-40 lg:translate-x-16 xl:-right-60 xl:translate-x-20 2xl:translate-x-20 transform z-10">
          <picture>
            <source media="(min-width: 300px)" srcSet="/images/spaceship.webp" type="image/webp" />
            <img src="/page_files/spaceship.png" alt="Picture" className="js-parallax" data-parallax='{"rotateZ": -10, "rotateX":30, "x":20, "smoothness": 30}' style={{ transform: "translate3d(0.029px, 0px, 0px) rotateX(0.029deg) rotateY(0deg) rotateZ(0deg) scaleX(1) scaleY(1) scaleZ(1)", WebkitTransform: "translate3d(0.029px, 0px, 0px) rotateX(0.029deg) rotateY(0deg) rotateZ(0deg) scaleX(1) scaleY(1) scaleZ(1)" }} />
          </picture>
        </div>

        <div className="max-w-200 w-full sm:max-w-250 lg:max-w-300 absolute -top-20 -right-32 md:top-10 md:translate-x-20  xmd:translate-x-32 lg:top-0 lg:translate-x-20 lg:-right-40 xl:-right-60 2xl:right-42 2xl:top-8 transform mx-auto">
          <picture>
            <source media="(min-width: 300px)" srcSet="/images/radial_bg.webp" type="image/webp" />
            <img src="/page_files/radial_bg.png" alt="Picture" className="js-parallax" data-parallax='{"scale": 0.8, "rotate": 10, "x": 20, "smoothness": 40}' style={{ transform: "translate3d(0.039px, 0px, 0px) rotateX(0deg) rotateY(0deg) rotateZ(0deg) scaleX(1) scaleY(1) scaleZ(1)", WebkitTransform: "translate3d(0.039px, 0px, 0px) rotateX(0deg) rotateY(0deg) rotateZ(0deg) scaleX(1) scaleY(1) scaleZ(1)" }} />
          </picture>
        </div>

        <div className="relative flex flex-col items-center max-w-90 mx-auto md:max-w-md mt-4 md:mt-0">
          <div className="relative overflow-hidden">
            <h4 className="text-36 sm:text-34 text-center leading-120 md:text-50 xl:text-60 font-bold fadeIn block md:max-w-500 lg:max-w-900" style={{ pointerEvents: "auto", transform: "translate(0px, 0px)", opacity: 1 }}>Over 2 million boxes shipped</h4>
          </div>

          <div className="relative overflow-hidden">
            <div className="flex flex-col gap-x-4 justify-center items-center text-black">
              <div className="flex flex-row gap-x-4 justify-center items-center text-black mt-6">
                <div className="flex flex-row gap-x-1" style={{ color: "rgba(151,21,255,1)", fontSize: "2.4em" }}>
                  <i className="fa-solid fa-star"></i>
                  <i className="fa-solid fa-star"></i>
                  <i className="fa-solid fa-star"></i>
                  <i className="fa-solid fa-star"></i>
                  <i className="fa-solid fa-star"></i>
                </div>
              </div>
              <div>
                <p className="tp-text text-27 md:text-20 text-center mt-4">Rated <strong>"Excellent"</strong> by our customers</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div>
        <div className="slider-trustpilot mt-10 md:mt-20 fadeIn mx-auto slick-initialized slick-slider slick-dotted" style={{ pointerEvents: "auto", transform: "translate(0px, 0px)", opacity: 1 }}>
          <div className="slick-list draggable">
            <div className="slick-track" style={{ opacity: 1, width: "9724.09px", transform: "translate3d(-906px, 0px, 0px)" }}>
              {/* Review slides - keeping the structure as-is for now */}
              <div className="slick-slide force-active-previous slick-current slick-active" data-slick-index="0" aria-hidden="false" style={{ width: "302px" }} role="tabpanel" id="slick-slide00" aria-describedby="slick-slide-control00">
                <div>
                  <div className="slide w-full" style={{ width: "100%", display: "inline-block" }}>
                    <div className="flex flex-col items-center justify-center w-full px-4 md:px-5 mb-5 pb-4 flex flex-col fadeIn" style={{ pointerEvents: "none", transform: "translate(0px, 0px)", opacity: 1 }}>
                      <div className="avatar-img rounded-full w-20 h-20 bg-purple text-white text-50  text-center flex items-center justify-center">
                        M
                      </div>
                      <em className="text-20 md:text-24 pb-4 font-bold pt-2"></em>
                      <svg xmlns="http://www.w3.org/2000/svg" className="forcecolorSVG relative z-10 transform translate-y-1" width="53" height="19" fill="none">
                        <path fill="currentColor" d="M52.783 18.5h-52a22.06 22.06 0 0 0 18.052-9.381l4.869-6.932c1.74-2.478 5.436-2.404 7.076.14l4.148 6.437A21.242 21.242 0 0 0 52.782 18.5Z"></path>
                      </svg>
                      <div className="slider__msg relative px-4 md:px-6 py-6">
                        <div className="flex flex-row gap-x-2 justify-center pb-4 pl-8 pr-8" style={{ color: "rgba(151,21,255,1)", fontSize: "1.5em" }}>
                          <i className="fa-solid fa-star"></i>
                          <i className="fa-solid fa-star"></i>
                          <i className="fa-solid fa-star"></i>
                          <i className="fa-solid fa-star"></i>
                          <i className="fa-solid fa-star"></i>
                        </div>
                        <p className="text-14 md:text-16">
                          Each month I can&apos;t wait to receive my box to see which countries delicious snacks I have to eat.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* Additional slides would be added here - keeping structure minimal for now */}
            </div>
          </div>
          <ul className="slick-dots" style={{}} role="tablist">
            <li className="slick-active" role="presentation">
              <button type="button" role="tab" id="slick-slide-control00" aria-controls="slick-slide00" aria-label="1 of 5" tabIndex={0} aria-selected={true}>1</button>
            </li>
            <li role="presentation">
              <button type="button" role="tab" id="slick-slide-control01" aria-controls="slick-slide03" aria-label="2 of 5" tabIndex={-1}>2</button>
            </li>
            <li role="presentation">
              <button type="button" role="tab" id="slick-slide-control02" aria-controls="slick-slide06" aria-label="3 of 5" tabIndex={-1}>3</button>
            </li>
            <li role="presentation">
              <button type="button" role="tab" id="slick-slide-control03" aria-controls="slick-slide09" aria-label="4 of 5" tabIndex={-1}>4</button>
            </li>
            <li role="presentation">
              <button type="button" role="tab" id="slick-slide-control04" aria-controls="slick-slide012" aria-label="5 of 5" tabIndex={-1}>5</button>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
