import Hero from "@components/snackverse/Hero";
import TrustStrip from "@components/snackverse/TrustStrip";
import JoinSnackverse from "@components/snackverse/JoinSnackverse";
import TrustBadges from "@components/snackverse/TrustBadges";
import HowItWorks from "@components/snackverse/HowItWorks";
import ProductSections from "@components/snackverse/ProductSections";
import Reviews from "@components/snackverse/Reviews";
import Faq from "@components/snackverse/Faq";
import Footer from "@components/snackverse/Footer";

export default function V2Page() {
  return (
    <main className="flex flex-col flex-1 overflow-x-hidden" style={{ minHeight: "100vh" }}>
      <Hero />
      <TrustStrip />
      <JoinSnackverse />
      <TrustBadges />
      <ProductSections />
      <HowItWorks />
      <Reviews />
      <Faq />
      <Footer />
    </main>
  );
}
