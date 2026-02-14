export default function JoinSnackverse() {
  return (
    <div className="mx-auto max-w-90 w-full xl:max-w-xl text-center text-black pt-60 xl:pt-60 items-center justify-center flex flex-row relative w-full fade-trigger">
      <h2 className="my-0 pb-0 text-24 md:text-30 xl:text-40 font-bold xl:max-w-500 leading-120 flex flex-col w-full pt-14 xl:pt-40 xs:px-10 md:px-20 relative z-10 lg:px-0 fadeIn" style={{ pointerEvents: "auto", transform: "translate(0px, 0px)", opacity: 1 }}>Join the SnackVerse<br /> world! Every month <br />a new impression!</h2>

      <div className="transform absolute max-w-380 left-14 xs:left-10 top-24 xs:top-14 xl:top-14 scale-50 md:left-20 md:scale-60 lg:scale-80 xl:scale-100 lg:rotate-0 rotate-12 transform -translate-x-36 -translate-y-24 lg:translate-y-10 lg:-translate-x-16 xl:translate-x-0 xl:translate-y-20 w-full">
        <picture>
          <source media="(min-width: 300px)" srcSet="/images/pic1.webp" type="image/webp" />
          <img src="/page_files/pic1.png" alt="Picture" className="js-parallax" data-parallax='{"rotateZ": -4, "x": -10, "y":-20, "smoothness": 30}' style={{ transform: "translate3d(0px, 0px, 0px) rotateX(0deg) rotateY(0deg) rotateZ(0deg) scaleX(1) scaleY(1) scaleZ(1)", WebkitTransform: "translate3d(0px, 0px, 0px) rotateX(0deg) rotateY(0deg) rotateZ(0deg) scaleX(1) scaleY(1) scaleZ(1)" }} />
        </picture>
      </div>
      <div className="transform absolute max-w-280 left-1/2 top-16 lg:top-20 scale-30 md:scale-50 -rotate-12 lg:rotate-0 lg:scale-70 lg:-translate-y-10 xl:scale-100 -translate-x-1/2 w-full">
        <picture>
          <source media="(min-width: 300px)" srcSet="/images/pic2.webp" type="image/webp" />
          <img src="/page_files/pic2.png" alt="Picture" className="js-parallax" data-parallax='{"rotateZ": 4, "y": 20, "smoothness":10}' style={{ transform: "translate3d(0px, 0.01px, 0px) rotateX(0deg) rotateY(0deg) rotateZ(0.01deg) scaleX(1) scaleY(1) scaleZ(1)", WebkitTransform: "translate3d(0px, 0.01px, 0px) rotateX(0deg) rotateY(0deg) rotateZ(0.01deg) scaleX(1) scaleY(1) scaleZ(1)" }} />
        </picture>
      </div>
      <div className="transform absolute max-w-410 top-5 right-12 xs:right-20 xs:-top-4 lg:top-auto lg:bottom-0 scale-50 md:scale-60 md:right-32 rotate-12 lg:rotate-0 lg:scale-70 lg:translate-y-10 lg:translate-x-32 xl:scale-100 md:-top-10 lg:top-auto w-full translate-x-1/2 xl:translate-x-14 xl:-translate-y-6 z-10">
        <picture>
          <source media="(min-width: 300px)" srcSet="/images/pic3.webp" type="image/webp" />
          <img src="/page_files/pic3.png" alt="Picture" className="js-parallax" data-parallax='{"rotateZ": 20, "y": 20, "smoothness": 40}' style={{ transform: "translate3d(0px, 0.039px, 0px) rotateX(0deg) rotateY(0deg) rotateZ(0.039deg) scaleX(1) scaleY(1) scaleZ(1)", WebkitTransform: "translate3d(0px, 0.039px, 0px) rotateX(0deg) rotateY(0deg) rotateZ(0.039deg) scaleX(1) scaleY(1) scaleZ(1)" }} />
        </picture>
      </div>
    </div>
  );
}
