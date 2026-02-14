export default function ProductSections() {
  return (
    <>
      <div className="relative py-14 pb-10 md:py-20 md:pb-10 lg:pb-0 fade-trigger">
        <div className="flex flex-col text-center text-black items-center justify-center gap-x-0 mx-auto max-w-90 xl:max-w-xl pb-14 pb-10">
          <div className="relative overflow-hidden">
            <em className="font-bold text-36 xl:text-70 relative leading-120 relative z-10 pb-4 md:pb-0 fadeIn block" style={{ pointerEvents: "auto", transform: "translate(0px, 0px)", opacity: 1 }}>What's inside the box?</em>
          </div>
        </div>

        <div className="flex flex-col relative mx-auto max-w-90 xl:max-w-xl">
          <div className="flex flex-col lg:flex-row items-center justify-center gap-x-0 relative">
            <picture>
              <source media="(min-width: 300px)" srcSet="/images/radial_bg.webp" type="image/webp" />
              <img src="/page_files/radial_bg.png" alt="Picture" className="max-w-400 w-full md:max-w-500 absolute left-40 -top-10 transform mx-auto" />
            </picture>

            <div className="flex flex-col gap-y-8 order-1 lg:order-2 z-10 relative fadeIn md:hidden" style={{ pointerEvents: "auto", transform: "translate(0px, 0px)", opacity: 1 }}>
              <div className="max-w-400 w-full md:max-w-700 transform scale-125 md:scale-100 md:scale-110 -translate-x-0 xl:translate-x-10 mx-auto">
                <picture>
                  <source media="(min-width: 300px)" srcSet="/images/box_inside.webp" type="image/webp" />
                  <img src="/page_files/box_inside.png" alt="Picture" className="js-parallax" data-parallax='{"rotateZ": -2, "smoothness": 40}' style={{ transform: "translate3d(0px, 0px, 0px) rotateX(0deg) rotateY(0deg) rotateZ(0deg) scaleX(1) scaleY(1) scaleZ(1)", WebkitTransform: "translate3d(0px, 0px, 0px) rotateX(0deg) rotateY(0deg) rotateZ(0deg) scaleX(1) scaleY(1) scaleZ(1)" }} />
                </picture>
              </div>
            </div>

            <div className="flex flex-col gap-y-8 order-2 lg:order-1 mt-14 lg:mt-0 z-10 relative">
              <div className="relative flex flex-row items-center fadeIn" style={{ pointerEvents: "auto", transform: "translate(0px, 0px)", opacity: 1 }}>
                <div className="bubble py-6 px-6 md:px-8 relative flex flex-1 items-center flex-col justify-center">
                  <em className="font-bold text-aqua text-20 md:text-24 w-full">Discover new cultures</em>
                  <p className="text-black text-14 md:text-16">with our themed <b>20-page guide</b> to learn more about the country of the month and the delicious snacks you're trying.</p>
                </div>

                <svg className="pointer" xmlns="http://www.w3.org/2000/svg" width="34" height="56" viewBox="0 0 34 55" fill="none"><path fill="#ECFAFF" d="M.55 55.097v-55c0 5.915 3.028 11.42 8.023 14.588l21.63 13.72c4.969 3.153 3.104 10.813-2.758 11.328L13.5 40.958C6.172 41.603.55 47.74.55 55.097Z" /></svg>
              </div>

              <div className="relative flex flex-row items-center fadeIn" style={{ pointerEvents: "auto", transform: "translate(0px, 0px)", opacity: 1 }}>
                <div className="bubble bubble--purple py-6 px-6 md:px-8 relative flex flex-1 items-center flex-col justify-center">
                  <em className="font-bold text-aqua text-20 md:text-24 w-full">10+ full-size snacks!</em>
                  <p className="text-black text-14 md:text-16">Send yourself and loved ones on a tasting journey with snacks from different countries each month! With the <b>premium box</b>, you'll enjoy <b>20+ tasty snacks.</b> </p>
                </div>

                <svg className="pointer" xmlns="http://www.w3.org/2000/svg" width="34" height="55" viewBox="0 0 34 55" fill="none"><path fill="#F6ECFF" d="M.736 55V0c0 5.915 3.027 11.42 8.022 14.588l21.63 13.72c4.97 3.152 3.105 10.812-2.758 11.328L13.687 40.86C6.358 41.505.736 47.643.736 55Z" /></svg>
              </div>

              <div className="relative flex flex-row items-center relative z-10 fadeIn" style={{ pointerEvents: "auto", transform: "translate(0px, 0px)", opacity: 1 }}>
                <div className="bubble bubble--orange py-10 px-6 md:px-8 relative flex flex-1 items-center flex-col justify-center">
                  <em className="font-bold text-aqua text-20 md:text-24 w-full">Every box includes</em>
                  <p className="text-black text-14 md:text-16">a varied selection of <b>sweets, chocolates, crisps, biscuits, drinks,</b> and lots more!</p>
                </div>

                <svg className="pointer" xmlns="http://www.w3.org/2000/svg" width="34" height="55" viewBox="0 0 34 55" fill="none"><path fill="#FFEFEF" d="M.963 0v55c0-5.916 3.027-11.42 8.022-14.589l21.63-13.72c4.969-3.152 3.104-10.812-2.758-11.327l-13.944-1.226C6.584 13.494.963 7.357.963 0Z" /></svg>
              </div>
            </div>

            <div className="flex flex-col gap-y-8 order-1 lg:order-2 z-10 relative fadeIn hidden md:flex" style={{ pointerEvents: "auto", transform: "translate(0px, 0px)", opacity: 1 }}>
              <div className="max-w-400 w-full md:max-w-700 transform scale-125 md:scale-100 md:scale-110 -translate-x-0 xl:translate-x-10 mx-auto">
                <picture>
                  <source media="(min-width: 300px)" srcSet="/images/box_inside.webp" type="image/webp" />
                  <img src="/page_files/box_inside.png" alt="Picture" className="js-parallax" data-parallax='{"rotateZ": -2, "smoothness": 40}' style={{ transform: "translate3d(0px, 0px, 0px) rotateX(0deg) rotateY(0deg) rotateZ(0deg) scaleX(1) scaleY(1) scaleZ(1)", WebkitTransform: "translate3d(0px, 0px, 0px) rotateX(0deg) rotateY(0deg) rotateZ(0deg) scaleX(1) scaleY(1) scaleZ(1)" }} />
                </picture>
              </div>
            </div>
          </div>

          <div className="flex flex-row justify-center fadeIn" style={{ pointerEvents: "auto", transform: "translate(0px, 0px)", opacity: 1 }}>
            <a href="https://snackverse.com/subscribe" className="w-full max-w-450 md:max-w-auto text-center justify-center px-14 rounded-full bg-orange text-white px-6 md:px-10 py-4 text-white inline-flex mt-14 lg:mt-20 xl:mt-20 mb-8 md:mb-14 lg:mb-28 font-bold transition duration-300 ease-in-out hover:bg-darkorange text-20 md:text-24 lg:text-28 2xl:text-32 relative z-10 md:py-6 xl:py-6 xl:px-14 2xl:px-10 xl:max-w-500">Let's get started!</a>
          </div>
          <div className="hidden lg:inline-flex max-w-140 md:max-w-180 transform absolute -left-20 lg:-left-26 bottom-80 z-0">
            <picture>
              <source media="(min-width: 300px)" srcSet="/images/cake_1.webp" type="image/webp" />
              <img src="/page_files/cake_1.png" alt="Picture" className="js-parallax" data-parallax='{"rotateZ": 50, "x": -80, "y":40, "smoothness": 20}' style={{ transform: "translate3d(0px, 0.019px, 0px) rotateX(0deg) rotateY(0deg) rotateZ(0.019deg) scaleX(1) scaleY(1) scaleZ(1)", WebkitTransform: "translate3d(0px, 0.019px, 0px) rotateX(0deg) rotateY(0deg) rotateZ(0.019deg) scaleX(1) scaleY(1) scaleZ(1)" }} />
            </picture>
          </div>

          <div className="hidden lg:inline-flex max-w-140 md:max-w-250 transform absolute left-auto -right-20 md:right-auto md:-left-26 bottom-0 z-0 ">
            <picture>
              <source media="(min-width: 300px)" srcSet="/images/cake_2.webp" type="image/webp" />
              <img src="/page_files/cake_2.png" alt="Picture" className="js-parallax" data-parallax='{"rotateZ": 100, "x": -100, "y":100, "smoothness": 40}' style={{ transform: "translate3d(0px, 0.039px, 0px) rotateX(0deg) rotateY(0deg) rotateZ(0.039deg) scaleX(1) scaleY(1) scaleZ(1)", WebkitTransform: "translate3d(0px, 0.039px, 0px) rotateX(0deg) rotateY(0deg) rotateZ(0.039deg) scaleX(1) scaleY(1) scaleZ(1)" }} />
            </picture>
          </div>
        </div>
      </div>

      <div className="flex flex-col pt-14 lg:pt-24 fade-trigger" style={{ backgroundColor: "#9F4CE1" }}>
        <div className="relative max-w-90 w-full mx-auto lg:max-w-md">
          <div className="max-w-50 md:max-w-100 transform absolute left-0 top-0 transform xl:-translate-y-10 xl:-translate-x-32">
            <picture>
              <source media="(min-width: 300px)" srcSet="/images/fb.webp" type="image/webp" />
              <img src="/page_files/fb.png" alt="Picture" className="js-parallax" data-parallax='{"rotateZ": -20, "scale": 0.76,"y":40, "smoothness": 10}' style={{ transform: "translate3d(0px, 0.01px, 0px) rotateX(0deg) rotateY(0deg) rotateZ(0deg) scaleX(1) scaleY(1) scaleZ(1)", WebkitTransform: "translate3d(0px, 0.01px, 0px) rotateX(0deg) rotateY(0deg) rotateZ(0deg) scaleX(1) scaleY(1) scaleZ(1)" }} />
            </picture>
          </div>

          <div className="max-w-40 md:max-w-80 transform absolute right-0 md:right-auto md:left-1/2 top-0 transform xl:translate-y-20 xl:translate-x-20">
            <picture>
              <source media="(min-width: 300px)" srcSet="/images/mail.webp" type="image/webp" />
              <img src="/page_files/mail.png" alt="Picture" className="js-parallax" data-parallax='{"rotateZ": 30, "scale": 0.7, "x": 20, "smoothness": 20}' style={{ transform: "translate3d(0.019px, 0px, 0px) rotateX(0deg) rotateY(0deg) rotateZ(0.019deg) scaleX(1) scaleY(1) scaleZ(1)", WebkitTransform: "translate3d(0.019px, 0px, 0px) rotateX(0deg) rotateY(0deg) rotateZ(0.019deg) scaleX(1) scaleY(1) scaleZ(1)" }} />
            </picture>
          </div>

          <div className="max-w-50 md:max-w-80 transform absolute -right-10 md:right-0 top-20 md:top-1/3 md:top-0 transform xl:-translate-y-20 xl:translate-x-32">
            <picture>
              <source media="(min-width: 300px)" srcSet="/images/twitter.webp" type="image/webp" />
              <img src="/page_files/twitter.png" alt="Picture" className="js-parallax" data-parallax='{"rotateZ": 40, "scale": 0.6, "y": 20, "smoothness": 40}' style={{ transform: "translate3d(0px, 0.039px, 0px) rotateX(0deg) rotateY(0deg) rotateZ(0.039deg) scaleX(1) scaleY(1) scaleZ(1)", WebkitTransform: "translate3d(0px, 0.039px, 0px) rotateX(0deg) rotateY(0deg) rotateZ(0.039deg) scaleX(1) scaleY(1) scaleZ(1)" }} />
            </picture>
          </div>

          <div className="flex flex-col md:flex-row w-full items-center xl:gap-x-5 w-full relative justify-between">
            <div className="flex flex-col w-full text-white md:w-1/2">
              <div className="relative overflow-hidden">
                <em className="font-bold text-36 md:text-40 xl:text-70 relative leading-120 relative z-10 text-center md:text-left block fadeIn" style={{ pointerEvents: "auto", transform: "translate(0px, 0px)", opacity: 1 }}>Give 5 <strong className="text-lime">Get £5</strong></em>
              </div>
              <div className="relative overflow-hidden">
                <p className="mt-6 xl:pr-10 text-14 md:text-16 fadeIn" style={{ pointerEvents: "auto", transform: "translate(0px, 0px)", opacity: 1 }}>
                  <b>Invite a friend via Facebook, Twitter or email and they'll get a £5 welcome credit, plus you'll get £5 in your own account</b> with their first order, as our little thank you.
                </p>
              </div>
            </div>

            <div className="flex flex-row w-full 2xs:w-auto my-10 lg:my-0 fadeIn" style={{ pointerEvents: "auto", transform: "translate(0px, 0px)", opacity: 1 }}>
              <a href="https://snackverse.com/refer-a-friend/" className="rounded-full bg-lime text-white px-10 py-4 text-black inline-flex font-bold hover:text-white transition duration-300 ease-in-out hover:bg-orange text-20 w-full lg:w-auto text-center justify-center md:text-24 lg:text-28 2xl:text-32 md:px-16 md:py-6">Refer a friend</a>
            </div>
          </div>
        </div>

        <picture>
          <source media="(min-width: 768px)" srcSet="/images/people.webp" type="image/webp" />
          <source media="(min-width: 300px)" srcSet="/images/people-640x200-c-default.webp" type="image/webp" />
          <img src="/page_files/people.png" alt="Picture" className="max-w-full w-full lg:max-w-xl mx-auto" />
        </picture>
      </div>
    </>
  );
}
