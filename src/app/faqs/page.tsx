import Header from "@components/snackverse/Header";
import Footer from "@components/snackverse/Footer";

export default function FaqsPage() {
  return (
    <main className="flex flex-col flex-1 overflow-x-hidden" style={{ minHeight: "100vh" }}>
      {/* Header with purple background matching the home page navbar */}
      <div className="bg-purple relative z-40" style={{ backgroundColor: "#4D008A" }}>
        <Header />
      </div>

      {/* FAQs content */}
      <section className="flex-1 flex flex-col items-center justify-center py-20 px-6 text-center">
        <h1 className="text-40 md:text-60 font-bold leading-120 mb-6" style={{ color: "#4b4354" }}>
          Frequently Asked <strong style={{ color: "#ff8c24" }}>Questions</strong>
        </h1>
        <p className="text-16 md:text-20 max-w-600 mx-auto mb-10" style={{ color: "#545454" }}>
          Got questions? We've got answers. Find everything you need to know about SnackVerse subscriptions, shipping, and more.
        </p>
        <a
          href="https://snackverse.com/faqs/"
          className="rounded-full bg-orange text-white px-10 py-4 md:py-6 font-bold transition duration-300 ease-in-out hover:bg-darkorange text-20 md:text-24 inline-flex"
        >
          Contact us
        </a>
      </section>

      <Footer />
    </main>
  );
}
