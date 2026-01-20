export default function Footer() {
  return (
    <footer className="bg-purple pt-20 pb-14 xl:pt-26 xl:pb-20 text-center md:text-left fade-trigger" style={{ backgroundColor: "#4D008A" }}>
      <div className="flex flex-row max-w-90 w-full xl:max-w-xl justify-center items-center mx-auto">
        <div className="mx-auto w-auto">
          <a href="https://snackverse.com/" className="fadeIn inline-flex" style={{ pointerEvents: "auto", transform: "translate(0px, 0px)", opacity: 1 }}>
            <picture>
              <source media="(min-width: 300px)" srcSet="https://snackverse.com/wp-content/themes/shopkeeper/images/logo.webp" type="image/webp" />
              <img src="/page_files/logo.png" className="logo max-w-100 md:max-w-200" alt="Picture" />
            </picture>
          </a>
        </div>
      </div>
      <div className="flex flex-col md:flex-row flex-wrap max-w-90 w-full md:max-w-95 xl:max-w-1010 justify-between mt-14 md:mt-20 mx-auto text-white md:px-0 lg:px-0 footer__links gap-y-10 fadeIn" style={{ pointerEvents: "auto", transform: "translate(0px, 0px)", opacity: 1 }}>
        <div className="flex flex-col w-auto">
          <strong style={{ color: "#944ACE" }} className="block">Our Company</strong>
          <div className="flex flex-col gap-y-2 text-white text-14 lg:text-16 mt-4">
            <div><a href="https://snackverse.com/terms-of-use/" className="inline-flex ">Terms of Use</a></div>
            <div><a href="https://snackverse.com/privacy-policy/" className="inline-flex">Privacy Policy</a></div>
            <div><a href="https://snackverse.com/collaborate/" className="inline-flex">Collaborate With Us</a></div>
          </div>
        </div>

        <div className="flex flex-col w-auto">
          <strong style={{ color: "#944ACE" }} className="block">Shop</strong>
          <div className="flex flex-col gap-y-2 text-white text-14 lg:text-16 mt-4">
            <div><a href="https://snackverse.com/subscribe/" className="inline-flex">Subscribe</a></div>
            <div><a href="https://snackverse.com/gift/" className="inline-flex">Give A Gift</a></div>
            <div><a href="https://snackverse.com/refer-a-friend/" className="inline-flex">Refer A Friend</a></div>
            <div><a href="https://snackverse.com/our-previous-boxes/" className="inline-flex">Our Previous Boxes</a></div>
            <div><a href="https://snackverse.com/corporate/" className="inline-flex">Corporate Order</a></div>
          </div>
        </div>

        <div className="flex flex-col w-auto">
          <strong style={{ color: "#944ACE" }} className="block">Customer Service</strong>
          <div className="flex flex-col gap-y-2 text-white text-14 lg:text-16 mt-4">
            <div><a href="https://snackverse.com/faqs/" className="inline-flex">F.A.Q.s</a></div>
            <div><a href="https://snackverse.com/contact-us/" className="inline-flex">Contact Us</a></div>
            <div><a href="https://snackverse.com/my-account/" className="inline-flex">My Account</a></div>
            <div><a href="https://snackverse.com/order-tracking/" className="inline-flex">Order Tracking</a></div>
            <div><a href="https://snackverse.com/my-account/lost-password/" className="inline-flex">Lost Password</a></div>
          </div>
        </div>

        <div className="flex flex-col w-auto md:max-w-250 md:pr-4 pl-4 lg:pl-0">
          <small className="opacity-40 md:opacity-100 leading-160 block">
            © 2024 SnackVerse Limited.<br />All rights reserved. 128 City Road, EC1V 2NX, London, United Kingdom. Registration Number: 14307826
          </small>
        </div>
      </div>
    </footer>
  );
}
