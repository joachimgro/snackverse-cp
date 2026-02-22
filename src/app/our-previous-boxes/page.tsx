import { previousBoxes } from "@/data/previousBoxes";
import PreviousBoxItem from "@components/snackverse/PreviousBoxItem";
import Header from "@components/snackverse/Header";
import Footer from "@components/snackverse/Footer";

export default function PreviousBoxesPage() {
  return (
    <>
      <style dangerouslySetInnerHTML={{
        __html: `
          .previous-boxes-hero { 
            background-color: #560299;
            background-image: url('/images/bg_bars_alternative.png');
          }
          
          .previous-boxes-hero { 
            min-height: 260px;
            background-size: 120% 80%;
            background-position: center 0%;
            background-repeat: no-repeat;
          }
          
          @media only screen and (min-width: 500px) {
            .previous-boxes-hero { 
              min-height: 300px;
            }
          }
          
          @media only screen and (min-width: 768px) {
            .previous-boxes-hero { 
              min-height: 380px;
            }
          }
          
          @media only screen and (min-width: 1025px) {
            .previous-boxes-hero { 
              background-size: 110% 120%;
              background-position: 50% 20%;
            }
          }
          
          @media only screen and (min-width: 1600px) {
            .previous-boxes-hero { 
              max-height: auto;
              background-size: 140% 120%;
              background-position: 50% 0%;
            }
          }

          .fadeIn {
            opacity: 0;
            transform: translateY(20px);
            transition: opacity 0.6s ease-out, transform 0.6s ease-out;
          }

          .visible .fadeIn {
            opacity: 1;
            transform: translateY(0);
          }

          .previous_boxes_thumb--path {
            stroke-dashoffset: 2400;
            transition: stroke-dashoffset 1.5s ease-out;
          }

          .visible .previous_boxes_thumb--path {
            stroke-dashoffset: 0;
          }

          .bg-single_box {
            background-color: #f5f1ff;
          }

          .text-darkgrey {
            color: #333;
          }

          .text-purplevariant1 {
            color: #9b4dff;
          }

          .bg-purplevariant1 {
            background-color: #9b4dff;
          }

          .box-spec-bubble:before {
            content: "";
            border: 3px solid #6abfda;
            width: 100%;
            z-index: 2;
            border-radius: 30px;
            height: 100%;
            transition: all .5s ease-in-out;
            transform: skewY(2.61deg);
            position: absolute;
            left: 0;
            right: 0;
            bottom: 0;
            top: 0;
          }

          .box-spec-bubble:after {
            content: "";
            border: 3px solid #aaebff;
            width: 100%;
            border-radius: 30px;
            z-index: 1;
            height: 100%;
            transition: all .5s ease-in-out;
            transform: skewY(-4deg);
            position: absolute;
            left: 0;
            right: 0;
            bottom: 0;
            top: 0;
          }

          .box-spec-bubble > * {
            position: relative;
            z-index: 3;
          }

          .box-spec-bubble-1:before {
            border-color: #ff8c23;
          }

          .box-spec-bubble-1:after {
            border-color: #fdcca7;
          }

          .box-spec-bubble-2:before {
            border-color: #fa6868;
          }

          .box-spec-bubble-2:after {
            border-color: #ffa4a4;
          }

          .spec_title {
            font-weight: bold;
          }

          .spec_title-0 {
            color: #6abfda;
          }

          .spec_title-1 {
            color: #ff8c23;
          }

          .spec_title-2 {
            color: #fa6868;
          }

          .spec_text {
            color: #000;
            font-size: 16px;
            font-weight: normal;
            height: 40px;
            display: flex;
            align-items: center;
          }

          .bg-purplevariant1:hover {
            background-color: #8a3de6;
          }

          .max-w-90 {
            max-width: 90%;
          }

          .max-w-360 {
            max-width: 360px;
          }

          .max-w-400 {
            max-width: 400px;
          }

          .max-w-500 {
            max-width: 500px;
          }

          .max-w-50p {
            max-width: 50%;
          }

          .max-w-95 {
            max-width: 95%;
          }

          .max-w-xl {
            max-width: 1140px;
          }

          .max-w-160 {
            max-width: 160px;
          }

          .min-h-750 {
            min-height: 750px;
          }

          .max-w-60,
          .max-w-h-60 {
            max-width: 60px;
            max-height: 60px;
          }

          .leading-100 {
            line-height: 1;
          }

          .leading-120 {
            line-height: 1.2;
          }

          .text-40 {
            font-size: 40px;
          }

          .text-60 {
            font-size: 60px;
          }

          .text-70 {
            font-size: 70px;
          }

          .text-16 { 
            font-size: 24px;
          }

          .box-spec-bubble {
            transition: transform 0.3s ease;
          }

          .box-spec-bubble:hover {
            transform: scale(1.05);
          }
        `
      }} />
      
      <main className="block overflow-hidden">
        <div className="previous-boxes-hero flex flex-col relative bg-purple bg-no-repeat">
          <Header />
          <div className="flex flex-col items-center justify-center py-20 md:py-24 lg:py-32">
            <h1 className="text-white font-bold text-40 md:text-60 xl:text-70 text-center px-4">
              Our Previous Boxes
            </h1>
            <p className="text-white text-18 md:text-20 lg:text-24 text-center mt-4 max-w-2xl px-4">
              Explore the snacks we've featured from around the world
            </p>
          </div>
        </div>
        
        <div className="flex flex-col flex-1 boxes">
          {previousBoxes.map((box, index) => (
            <PreviousBoxItem key={index} box={box} index={index} />
          ))}
        </div>

        <Footer />
      </main>
    </>
  );
}
