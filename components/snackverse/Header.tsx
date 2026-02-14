export default function Header() {
  return (
    <div className="menu__wrapper bg-purplenavbar lg:bg-transaprent fixed top-0 left-0 right-0 lg:relative z-40" style={{ backdropFilter: "blur(0px)" }}>
      <div className="flex flex-row justify-between mx-auto max-w-90 md:max-w-95 xl:px-6 xl:max-w-xl items-center w-full py-4">
        <a href="/">
          <picture>
            <source media="(min-width: 300px)" srcSet="https://snackverse.com/wp-content/themes/shopkeeper/images/logo.webp" type="image/webp" />
            <img src="https://snackverse.com/wp-content/themes/shopkeeper/images/logo.webp" className="logo max-w-80 md:max-w-200" alt="Snackverse Logo" />
          </picture>
        </a>

        <div className="flex lg:hidden">
          <a href="javascript:void(0);" className="js-menu">
            <svg width="24" height="18" viewBox="0 0 24 18" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect width="24" height="2" rx="1" fill="white" />
              <rect y="8" width="24" height="2" rx="1" fill="white" />
              <rect y="16" width="24" height="2" rx="1" fill="white" />
            </svg>
          </a>
        </div>

        <div className="hidden lg:flex">
          <ul className="flex flex-col lg:flex-row items-center gap-y-10 lg:gap-y-0 lg:items-end gap-x-4 text-white lg:gap-x-10 font-medium text-24 lg:text-18 pb-8 md:pb-0">
            <li className="slideUp">
              <a href="/subscribe/" className="text-white relative menu-hover">Subscribe</a>
            </li>
            <li className="slideUp">
              <a href="/gift/" className="text-white relative menu-hover">Give a gift</a>
            </li>
            <li className="slideUp">
              <a href="/our-previous-boxes/" className="text-white relative menu-hover">Previous boxes</a>
            </li>
            <li className="slideUp">
              <a href="/faqs/" className="text-white relative menu-hover">FAQs</a>
            </li>
            <li className="slideUp">
              <a href="/refer-a-friend/" className="text-white relative menu-hover">Refer a friend</a>
            </li>
            <li className="flex lg:hidden slideUp">
              <a href="/my-account/" className="text-white relative menu-hover">My Account</a>
            </li>
            <li className="hidden lg:inline-flex xl:pl-4 slideUp">
              <a href="/my-account/" className="text-white hover:text-orange">
                <svg className="transition duration-300 ease-in-out" width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path fillRule="evenodd" clipRule="evenodd" d="M21.9998 12.5C21.9998 15.5134 20.6669 18.2154 18.5586 20.0488C16.8028 21.5756 14.5092 22.5 11.9998 22.5C9.49028 22.5 7.19669 21.5756 5.44092 20.0488C3.3326 18.2154 1.99976 15.5134 1.99976 12.5C1.99976 6.97715 6.47691 2.5 11.9998 2.5C17.5226 2.5 21.9998 6.97715 21.9998 12.5ZM14.9998 9.5C14.9998 7.84315 13.6566 6.5 11.9998 6.5C10.3429 6.5 8.99976 7.84315 8.99976 9.5C8.99976 11.1569 10.3429 12.5 11.9998 12.5C13.6566 12.5 14.9998 11.1569 14.9998 9.5ZM11.9998 14.5C13.7125 14.5 14.8388 15.4166 15.6329 16.4355C16.2255 17.1957 16.0215 18.3107 15.162 18.7467C14.2121 19.2285 13.1377 19.5 11.9998 19.5C10.8619 19.5 9.78737 19.2285 8.83754 18.7467C7.97797 18.3107 7.77403 17.1956 8.36656 16.4355C9.16072 15.4166 10.287 14.5 11.9998 14.5Z" fill="currentColor" />
                </svg>
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="flex lg:hidden">
        <div className="js-menuMobile absolute left-0 right-0 overflow-hidden flex relative flex-col lg:hidden w-full pb-4 max-w-90 mx-auto h-screen items-center justify-flex-start pt-14 pb-8" style={{ display: "none", opacity: 0, minHeight: "auto", transform: "scale(1, 0)" }}>
          <ul className="flex flex-col lg:flex-row items-center gap-y-10 lg:gap-y-0 lg:items-end gap-x-4 text-white lg:gap-x-10 font-medium text-24 lg:text-18 pb-8 md:pb-0">
            <li className="slideUp" style={{ opacity: 0, visibility: "hidden", transform: "translate(0px, 20px)" }}>
              <a href="/subscribe/" className="text-white relative menu-hover">Subscribe</a>
            </li>
            <li className="slideUp" style={{ opacity: 0, visibility: "hidden", transform: "translate(0px, 20px)" }}>
              <a href="/gift/" className="text-white relative menu-hover">Give a gift</a>
            </li>
            <li className="slideUp" style={{ opacity: 0, visibility: "hidden", transform: "translate(0px, 20px)" }}>
              <a href="/our-previous-boxes/" className="text-white relative menu-hover">Previous boxes</a>
            </li>
            <li className="slideUp" style={{ opacity: 0, visibility: "hidden", transform: "translate(0px, 20px)" }}>
              <a href="/faqs/" className="text-white relative menu-hover">FAQs</a>
            </li>
            <li className="slideUp" style={{ opacity: 0, visibility: "hidden", transform: "translate(0px, 20px)" }}>
              <a href="/refer-a-friend/" className="text-white relative menu-hover">Refer a friend</a>
            </li>
            <li className="flex lg:hidden slideUp" style={{ opacity: 0, visibility: "hidden", transform: "translate(0px, 20px)" }}>
              <a href="/my-account/" className="text-white relative menu-hover">My Account</a>
            </li>
            <li className="hidden lg:inline-flex xl:pl-4 slideUp" style={{ opacity: 0, visibility: "hidden", transform: "translate(0px, 20px)" }}>
              <a href="/my-account/" className="text-white hover:text-orange">
                <svg className="transition duration-300 ease-in-out" width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path fillRule="evenodd" clipRule="evenodd" d="M21.9998 12.5C21.9998 15.5134 20.6669 18.2154 18.5586 20.0488C16.8028 21.5756 14.5092 22.5 11.9998 22.5C9.49028 22.5 7.19669 21.5756 5.44092 20.0488C3.3326 18.2154 1.99976 15.5134 1.99976 12.5C1.99976 6.97715 6.47691 2.5 11.9998 2.5C17.5226 2.5 21.9998 6.97715 21.9998 12.5ZM14.9998 9.5C14.9998 7.84315 13.6566 6.5 11.9998 6.5C10.3429 6.5 8.99976 7.84315 8.99976 9.5C8.99976 11.1569 10.3429 12.5 11.9998 12.5C13.6566 12.5 14.9998 11.1569 14.9998 9.5ZM11.9998 14.5C13.7125 14.5 14.8388 15.4166 15.6329 16.4355C16.2255 17.1957 16.0215 18.3107 15.162 18.7467C14.2121 19.2285 13.1377 19.5 11.9998 19.5C10.8619 19.5 9.78737 19.2285 8.83754 18.7467C7.97797 18.3107 7.77403 17.1956 8.36656 16.4355C9.16072 15.4166 10.287 14.5 11.9998 14.5Z" fill="currentColor" />
                </svg>
              </a>
            </li>
          </ul>

          <div className="slideUp mt-auto" style={{ opacity: 0, visibility: "hidden", transform: "translate(0px, 20px)" }}>
            <a href="/subscribe/" className="max-w-300  md:max-w-400 md:py-6 md:mt-4 text-20 rounded-full bg-orange text-white px-10 py-4 text-white inline-flex w-full font-bold transition duration-300 ease-in-out mb-20 hover:bg-darkorange md:text-24 lg:text-32 text-center justify-center">Get your snack box</a>
          </div>
        </div>
      </div>
    </div>
  );
}
