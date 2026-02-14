import Header from "@components/snackverse/Header";
import Footer from "@components/snackverse/Footer";
import SubscriptionBox from "@components/snackverse/SubscriptionBox";
import { boxes } from "./data";

export default function SubscribePage() {
  return (
    <main
      className="flex flex-col flex-1 overflow-x-hidden"
      style={{ minHeight: "100vh" }}
    >
      {/* Header */}
      <div
        className="bg-purple relative z-40"
        style={{ backgroundColor: "#4D008A" }}
      >
        <Header />
      </div>

      {/* Subscribe section */}
      <section className="block overflow-hidden flex-1">
        <style
          dangerouslySetInnerHTML={{
            __html: `
              .bg {
                background-image: url('/images/bang_bg.png');
                background-color: #560299;
                background-size: cover;
                background-position: center;
                background-repeat: no-repeat;
              }
              @media only screen and (max-width: 1025px) {
                .bg { background-size: auto 300%; }
              }
            `,
          }}
        />
        <div className="bg overflow-hidden relative">
          <div className="flex flex-col flex-wrap md:flex-row mx-auto max-w-90 md:max-w-md md:px-6 lg:px-0 lg:max-w-xl w-full lg:gap-x-4 relative mt-6 lg:mt-0">
            <div
              style={{
              }}
              className="ml-20 flex flex-col items-center md:items-start justify-start relative overflow-hidden mt-8 mb-4 md:mb-10 md:mt-4 lg:mt-10 w-fill"
            >
              <h1
                className="text-white leading-120 block font-bold text-50 md:text-60 xl:text-70 2xl:text-70 lg:leading-120 lg:pt-0 js-moveUp lg:mx-0 w-auto text-left md:max-w-md"
                style={{
                  transform: "translate(0px, 0px)",
                  opacity: 1,
                  visibility: "inherit",
                }}
              >
                Subscribe
              </h1>
              <div
                className="js-moveUp"
                style={{
                  transform: "translate(0px, 0px)",
                  opacity: 1,
                  visibility: "inherit",
                }}
              >
                <p className="text-white leading-100 block text-18 sm:text-24 md:text-30 lg:leading-140 lg:pt-0 lg:mx-0 w-auto text-left w-full md:max-w-md mt-4 opacity-60 pb-2">
                  Select your subscription plan
                </p>
              </div>
            </div>
            <div className="fade-trigger flex flex-col-reverse flex-wrap lg:flex-row mx-auto max-w-full lg:max-w-xl w-full lg:flex-wrap lg:flex-row relative md:justify-center md:items-center lg:items-start gap-y-4 md:gap-y-14 flex-wrap">
              {boxes.map((box) => (
                <SubscriptionBox key={box.sku} box={box} />
              ))}
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
