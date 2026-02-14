export const snackverseHtml = `


<main class=" flex flex-col flex-1 overflow-hidden" style="min-height:100vh;">
    		

            
<style>
body {min-height: 200vh;}
.hero { 
    background-image: url('/images/hero_bg_mobile.jpg');
    background-color:#560299;
    background-size:120% 100%;
    background-position: center 0%;
    background-repeat: no-repeat;
}


@media only screen and (min-width: 1025px) {
    .hero { 
        background-image: url('/images/bg-hero.jpg'); 
        min-height:800px;
        height: 100%;
        background-size: 110% 120%;
        background-position: 50% 20%;
    }
}
@media only screen and (min-width: 1600px) {
    .hero { 
        height: 100vh;
        min-height:900px;
        max-height: auto;
        background-size:120% 120%;
        background-position: 90% 0%;
    }
}
</style>
<div class="hero flex flex-col relative bg-purple bg-no-repeat bg-hero h-full lg:h-screen xl:h-screen xl:max-h-860">
                    <picture>
        <source media="(min-width: 768px)" srcset="/images/planets-1400x0-c-default.webp" type="image/webp">
        <source media="(min-width: 300px)" srcset="/images/planets_mobile-800x0-c-default.webp" type="image/webp">
        <img src="/page_files/planets_mobile.png" alt="Picture" class="absolute top-0 right-0 w-full md:top-10 md:right-1/4 transform md:-translate-y-1/2 max-w-full md:max-w-md lg:right-auto lg:left-1/4 2xl:left-1/3 xl:-translate-x-20 2xl:translate-x-0 xl:max-w-1200 js-revealPlanets" style="opacity: 1; visibility: inherit;">
    </picture>


       
<div class="menu__wrapper bg-purplenavbar lg:bg-transaprent fixed top-0 left-0 right-0 lg:relative z-40" style="backdrop-filter: blur(0px);">
    <div class="flex flex-row justify-between mx-auto max-w-90 md:max-w-95 xl:px-6 xl:max-w-xl items-center w-full py-4">
                    <a href="/">
            <picture>
                <source media="(min-width: 300px)" srcset="/images/logo.webp" type="image/webp">
                <img src="/page_files/logo.png" class="logo max-w-80 md:max-w-200" alt="Picture">
            </picture>
        </a>
        
        <div class="flex lg:hidden">
            <a href="javascript:void(0);" class="js-menu">
                <svg width="24" height="18" viewBox="0 0 24 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect width="24" height="2" rx="1" fill="white"></rect>
                    <rect y="8" width="24" height="2" rx="1" fill="white"></rect>
                    <rect y="16" width="24" height="2" rx="1" fill="white"></rect>
                </svg>
            </a>
        </div>

        <div class="hidden lg:flex">
            

  <ul class="flex flex-col lg:flex-row items-center gap-y-10 lg:gap-y-0 lg:items-end gap-x-4 text-white lg:gap-x-10 font-medium text-24 lg:text-18 pb-8 md:pb-0">
        <li class="slideUp">
    <a href="/subscribe/" class="text-white relative menu-hover">Subscribe</a>
  </li>
  <li class="slideUp">
    <a href="/gift/" class="text-white relative menu-hover">Give a gift</a>
  </li>
  
  <li class="slideUp">
    <a href="/our-previous-boxes/" class="text-white relative menu-hover">Previous boxes</a>
  </li>

  <li class="slideUp">
    <a href="/faqs/" class="text-white relative menu-hover">FAQs</a>
  </li>

  <li class="slideUp">
    <a href="/refer-a-friend/" class="text-white relative menu-hover">Refer a friend</a>
  </li>



  <li class="flex lg:hidden slideUp">
    <a href="/my-account/" class="text-white relative menu-hover">My Account</a>
  </li>
  <li class="hidden lg:inline-flex xl:pl-4 slideUp">
    <a href="/my-account/" class="text-white hover:text-orange">
      <svg class="transition duration-300 ease-in-out" width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path fill-rule="evenodd" clip-rule="evenodd" d="M21.9998 12.5C21.9998 15.5134 20.6669 18.2154 18.5586 20.0488C16.8028 21.5756 14.5092 22.5 11.9998 22.5C9.49028 22.5 7.19669 21.5756 5.44092 20.0488C3.3326 18.2154 1.99976 15.5134 1.99976 12.5C1.99976 6.97715 6.47691 2.5 11.9998 2.5C17.5226 2.5 21.9998 6.97715 21.9998 12.5ZM14.9998 9.5C14.9998 7.84315 13.6566 6.5 11.9998 6.5C10.3429 6.5 8.99976 7.84315 8.99976 9.5C8.99976 11.1569 10.3429 12.5 11.9998 12.5C13.6566 12.5 14.9998 11.1569 14.9998 9.5ZM11.9998 14.5C13.7125 14.5 14.8388 15.4166 15.6329 16.4355C16.2255 17.1957 16.0215 18.3107 15.162 18.7467C14.2121 19.2285 13.1377 19.5 11.9998 19.5C10.8619 19.5 9.78737 19.2285 8.83754 18.7467C7.97797 18.3107 7.77403 17.1956 8.36656 16.4355C9.16072 15.4166 10.287 14.5 11.9998 14.5Z" fill="currentColor"></path>
      </svg>
    </a>
  </li>
</ul>
          </div>
    </div>

    <div class="flex lg:hidden">
        <div class="js-menuMobile absolute left-0 right-0 overflow-hidden flex relative flex-col lg:hidden w-full pb-4 max-w-90 mx-auto h-screen items-center justify-flex-start pt-14 pb-8" style="display: none; opacity: 0; min-height: auto; transform: scale(1, 0);">
            

  <ul class="flex flex-col lg:flex-row items-center gap-y-10 lg:gap-y-0 lg:items-end gap-x-4 text-white lg:gap-x-10 font-medium text-24 lg:text-18 pb-8 md:pb-0">
        <li class="slideUp" style="opacity: 0; visibility: hidden; transform: translate(0px, 20px);">
    <a href="/subscribe/" class="text-white relative menu-hover">Subscribe</a>
  </li>
  <li class="slideUp" style="opacity: 0; visibility: hidden; transform: translate(0px, 20px);">
    <a href="/gift/" class="text-white relative menu-hover">Give a gift</a>
  </li>
  
  <li class="slideUp" style="opacity: 0; visibility: hidden; transform: translate(0px, 20px);">
    <a href="/our-previous-boxes/" class="text-white relative menu-hover">Previous boxes</a>
  </li>

  <li class="slideUp" style="opacity: 0; visibility: hidden; transform: translate(0px, 20px);">
    <a href="/faqs/" class="text-white relative menu-hover">FAQs</a>
  </li>

  <li class="slideUp" style="opacity: 0; visibility: hidden; transform: translate(0px, 20px);">
    <a href="/refer-a-friend/" class="text-white relative menu-hover">Refer a friend</a>
  </li>



  <li class="flex lg:hidden slideUp" style="opacity: 0; visibility: hidden; transform: translate(0px, 20px);">
    <a href="/my-account/" class="text-white relative menu-hover">My Account</a>
  </li>
  <li class="hidden lg:inline-flex xl:pl-4 slideUp" style="opacity: 0; visibility: hidden; transform: translate(0px, 20px);">
    <a href="/my-account/" class="text-white hover:text-orange">
      <svg class="transition duration-300 ease-in-out" width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path fill-rule="evenodd" clip-rule="evenodd" d="M21.9998 12.5C21.9998 15.5134 20.6669 18.2154 18.5586 20.0488C16.8028 21.5756 14.5092 22.5 11.9998 22.5C9.49028 22.5 7.19669 21.5756 5.44092 20.0488C3.3326 18.2154 1.99976 15.5134 1.99976 12.5C1.99976 6.97715 6.47691 2.5 11.9998 2.5C17.5226 2.5 21.9998 6.97715 21.9998 12.5ZM14.9998 9.5C14.9998 7.84315 13.6566 6.5 11.9998 6.5C10.3429 6.5 8.99976 7.84315 8.99976 9.5C8.99976 11.1569 10.3429 12.5 11.9998 12.5C13.6566 12.5 14.9998 11.1569 14.9998 9.5ZM11.9998 14.5C13.7125 14.5 14.8388 15.4166 15.6329 16.4355C16.2255 17.1957 16.0215 18.3107 15.162 18.7467C14.2121 19.2285 13.1377 19.5 11.9998 19.5C10.8619 19.5 9.78737 19.2285 8.83754 18.7467C7.97797 18.3107 7.77403 17.1956 8.36656 16.4355C9.16072 15.4166 10.287 14.5 11.9998 14.5Z" fill="currentColor"></path>
      </svg>
    </a>
  </li>
</ul>

            <div class="slideUp mt-auto" style="opacity: 0; visibility: hidden; transform: translate(0px, 20px);">
                <a href="/subscribe/" class="max-w-300  md:max-w-400 md:py-6 md:mt-4 text-20 rounded-full bg-orange text-white px-10 py-4 text-white inline-flex w-full font-bold transition duration-300 ease-in-out mb-20 hover:bg-darkorange md:text-24 lg:text-32 text-center justify-center">Get your snack box</a>
            </div>
            
        </div>
    </div>
</div>
    <div class="flex flex-col lg:flex-row w-full flex-1 h-auto justify-between mx-auto md:max-w-90 xl:max-w-xl items-center w-full pt-12 md:pt-0 lg:pt-15 xl:pt-10 relative z-20 text-white">
        <div class="flex-wrap flex flex-col text-white w-full md:w-1/2 text-center md:text-left xl:ml-24 md:w-full lg:max-w-500 xl:max-w-640 xl:w-full relative z-10 md:pb-20 lg:pb-0">
            <div class="relative overflow-hidden">
                <h1 class="text-white font-bold text-40 md:text-60 xl:text-60 2xl:text-70 leading-120 lg:leading-100 pt-14 md:pt-32 lg:pt-0 js-moveUp mx-auto lg:mx-0 w-auto text-center lg:text-left" style="transform: translate(0px, 0px); opacity: 1; visibility: inherit;">
                    Welcome to<br>
                    <strong class="text-orange">SnackVerse</strong>
                </h1>
            </div>
            <div class="relative overflow-hidden">
                <p class="text-16 md:text-24 lg:text-18 xl:text-20 2xl:text-24 mt-8 px-8 sm:px-10 md:px-0 max-w-400 mx-auto lg:ml-0 md:max-w-700 xl:max-w-600 2xl:max-w-700 lg:max-w-md js-moveUp text-center lg:text-left" style="transform: translate(0px, 0px); opacity: 1; visibility: inherit;">
                    Each month we deliver a box of snacks, from a different country, to your door. <br class="md:hidden">Get a taste of the world!
                </p>
                <div class="js-moveUp js-subscribe-btn-call" style="transform: translate(0px, 0px); opacity: 1; visibility: inherit;">
                    <a href="/subscribe/" class="rounded-full bg-orange text-white px-10 py-4 lg:py-6 lg:px-10 text-white inline-flex mt-10 mb-10 md:mb-20 font-bold transition duration-300 ease-in-out hover:bg-darkorange md:text-24 xl:text-28 2xl:text-30 hidden lg:inline-flex">Get your snack box</a>
                </div>
            </div>
        </div>

        

        <div class="box-img relative xl:w-full min-h-400 md:mt-10 lg:mt-0 xl:min-h-full translate-x-2 xl:w-auto transform md:scale-105 md:-translate-y-10 xl:scale-60 3xl:scale-100 xl:-translate-y-14 2xl:translate-y-0 xl-translate-x-0 xl:-translate-x-20 2xl:translate-x-10 xl:max-w-550 js-revealBox  pointer-events-none" style="transform: translate(8px, -40px); opacity: 1; visibility: inherit;">
                            
            <div class="max-w-130 transform absolute left-0 top-0 z-10 -translate-x-4 xl:scale-140 2xl:scale-150 xl:max-w-200 js-revealBox--details pointer-events-none" style="transform: translate(-16px, 0px); opacity: 1; visibility: inherit;">
                <picture style="perspective:800px; -webkit-perspective:800px; perspective:800px; -webkit-perspective:800px; ">
                    <source media="(min-width: 768px)" srcset="/images/orange_desktop.webp" type="image/webp">
                    <source media="(min-width: 300px)" srcset="/images/orange_mobile.webp" type="image/webp">
                    <img src="/page_files/orange_mobile.png" alt="Picture" class="js-parallax" data-parallax="{&quot;rotateZ&quot;: -360, &quot;z&quot;: 10, &quot;y&quot;: -100, &quot;x&quot;: -300, &quot;smoothness&quot;: 20}" style="transform:translate3d(0px, 0px, 0.019px) rotateX(0deg) rotateY(0deg) rotateZ(0deg) scaleX(1) scaleY(1) scaleZ(1); -webkit-transform:translate3d(0px, 0px, 0.019px) rotateX(0deg) rotateY(0deg) rotateZ(0deg) scaleX(1) scaleY(1) scaleZ(1); ">
                </picture>
            </div>

                            
            <div class="max-w-220 transform absolute left-0 bottom-10 z-10 -translate-x-14 xl:scale-140 2xl:scale-150 lg:translate-y-10 lg:-translate-x-20 2xl:-translate-y-10 xl:-translate-x-4 pointer-events-none">
                <picture>
                    <source media="(min-width: 768px)" srcset="/images/apple_desktop.webp" type="image/webp">
                    <source media="(min-width: 300px)" srcset="/images/apple_mobile.webp" type="image/webp">
                    <img src="/page_files/apple_mobile.png" alt="Picture" class="js-parallax" data-parallax="{&quot;rotateZ&quot;: 80, &quot;y&quot;: 100, &quot;x&quot;: -100, &quot;smoothness&quot;: 10}" style="transform:translate3d(0px, 0.01px, 0px) rotateX(0deg) rotateY(0deg) rotateZ(0.01deg) scaleX(1) scaleY(1) scaleZ(1); -webkit-transform:translate3d(0px, 0.01px, 0px) rotateX(0deg) rotateY(0deg) rotateZ(0.01deg) scaleX(1) scaleY(1) scaleZ(1); ">
                </picture>
            </div>

                                            
            <div class="max-w-220 transform absolute right-0 bottom-0 z-10 translate-y-8 translate-x-10  lg:translate-x-20 lg:translate-y-20 2xl:translate-x-20 2xl:translate-y-4 xl:scale-150 pointer-events-none" style="perspective:800px; -webkit-perspective:800px; perspective:800px; -webkit-perspective:800px; ">
                <picture class="js-parallax" data-parallax="{&quot;z&quot;: 150, &quot;smoothness&quot;: 20}" style="transform:translate3d(0px, 0px, 0.019px) rotateX(0deg) rotateY(0deg) rotateZ(0deg) scaleX(1) scaleY(1) scaleZ(1); -webkit-transform:translate3d(0px, 0px, 0.019px) rotateX(0deg) rotateY(0deg) rotateZ(0deg) scaleX(1) scaleY(1) scaleZ(1); ">
                    <source media="(min-width: 768px)" srcset="/images/candy_desktop.webp" type="image/webp">
                    <source media="(min-width: 300px)" srcset="/images/candy_mobile.webp" type="image/webp">
                    <img src="/page_files/candy_mobile.png" alt="Picture" class="js-parallax" data-parallax="{&quot;rotateZ&quot;: 30, &quot;scaleZ&quot;: 200, &quot;y&quot;: 40, &quot;x&quot;: 20, &quot;smoothness&quot;: 30}" style="transform:translate3d(0.029px, 0.029px, 0px) rotateX(0deg) rotateY(0deg) rotateZ(0.029deg) scaleX(1) scaleY(1) scaleZ(1.029); -webkit-transform:translate3d(0.029px, 0.029px, 0px) rotateX(0deg) rotateY(0deg) rotateZ(0.029deg) scaleX(1) scaleY(1) scaleZ(1.029); ">
                </picture>
            </div>


                                            <div class="boxshadow transform scale-125 xl:scale-140 2xl:scale-150 pointer-events-none translate-x-0 xl:translate-x-20 xl:w-full max-w-400 xl:max-w-500 xl:translate-y-6 pointer-events-none">
                <picture>
                    <source media="(min-width: 768px)" srcset="/images/box_shadow_desktop.webp" type="image/webp">
                    <source media="(min-width: 300px)" srcset="/images/box_shadow_desktop.webp" type="image/webp">
                    <img src="/page_files/box_shadow.png" alt="Picture" class="js-parallax" data-parallax="{&quot;rotateZ&quot;: 100, &quot;smoothness&quot;: 30}" style="transform:translate3d(0px, 0px, 0px) rotateX(0deg) rotateY(0deg) rotateZ(0.029deg) scaleX(1) scaleY(1) scaleZ(1); -webkit-transform:translate3d(0px, 0px, 0px) rotateX(0deg) rotateY(0deg) rotateZ(0.029deg) scaleX(1) scaleY(1) scaleZ(1); ">
                </picture>
            </div>

                                            <div class="transform absolute left-auto right-auto top-10 xl:top-14 -translate-x-3 pointer-events-none max-w-400 scale-95 lg:scale-125 xl:-translate-y-10 xl:max-w-600 xl:scale-105 2xl:scale-125 2xl:-translate-y-0 xl:translate-x-2 pointer-events-none">
                <picture>
                    <source media="(min-width: 768px)" srcset="/images/box_desktop-900x0-c-default.webp" type="image/webp">
                    <source media="(min-width: 300px)" srcset="/images/box_mobile.webp" type="image/webp">
                    <img src="/page_files/box_mobile.png" alt="Picture" class="w-full js-parallax" data-parallax="{&quot;rotateZ&quot;: -10, &quot;smoothness&quot;: 20}" style="transform:translate3d(0px, 0px, 0px) rotateX(0deg) rotateY(0deg) rotateZ(0deg) scaleX(1) scaleY(1) scaleZ(1); -webkit-transform:translate3d(0px, 0px, 0px) rotateX(0deg) rotateY(0deg) rotateZ(0deg) scaleX(1) scaleY(1) scaleZ(1); ">
                </picture>
            </div>
        </div>
<style>
.subscribe-btn{ 
display: none;
}
@media only screen and (max-width: 1024px) {
#mce-EMAIL{
    max-width: none !important;
}
}

@media only screen and (max-width: 767px) {
.subscribe-btn {
            background: rgba(77, 0, 137,0.85);
    width: 100%;
    position: fixed;
    bottom: -87px;
    padding-top: 0.7em;
    display: flex !important;
    justify-content: center;
    height: 171px;
    z-index: 1000;
}
body {
    padding-bottom: 5.2em;
}

}
</style>
        <div class="pb-4 lg:hidden md-hidden sm-hidden subscribe-btn">
            <a href="/subscribe/" class="max-w-300  md:max-w-400 md:py-6 md:mt-4 text-20 rounded-full bg-orange text-white px-10 py-4 text-white inline-flex w-full font-bold transition duration-300 ease-in-out mb-20 hover:bg-darkorange md:text-24 xl:text-32 text-center justify-center">Get your snack box</a>
        </div>
        <div class="pb-4 lg:hidden w-full px-10 text-center js-moveUp js-subscribe-btn-call" style="transform: translate(0px, 0px); opacity: 1; visibility: inherit;">
            <a href="/subscribe/" class="max-w-300  md:max-w-400 md:py-6 md:mt-4 text-20 rounded-full bg-orange text-white px-10 py-4 text-white inline-flex w-full font-bold transition duration-300 ease-in-out mb-20 hover:bg-darkorange md:text-24 xl:text-32 text-center justify-center">Get your snack box</a>
        </div>
        
    </div>
</div><style>
a.no-hover:hover{
text-decoration: none;
color: #4b4354 !important;
}
</style>
<div class="revealMarquee marquee bg-lime py-4 text-black flex flex-row gap-x-10 flex-wrap lg:flex-nowrap md:text-25 lg:text-20 xl:text-25 font-bold lg:whitespace-nowrap transform rotate-2 z-10 relative -mt-4 md:-mt-6 text-center justify-center px-10 lg:px-0 overflow-hidden">
    <div class="lg:hidden">
        <div class="w-auto text" style="opacity: 1; visibility: inherit; transform: translate(0px, 0px);">
            🚨 FLASH SALE ENDS TONIGHT! 🚨 Use Code: <a href="/#svcountdowncode">GONEBYMIDNIGHT</a> for 50% OFF ⏳ Ends <a href="/#svcountdown">in 8h 51m 51s</a><a href="/terms-of-use/">*</a>
        </div> 
    </div>
    <div class="hidden lg:flex">
        <div class="w-auto text transform translate-y-4" style="opacity: 1; visibility: inherit; transform: translate(0px, 0px);">
            🚨 FLASH SALE ENDS TONIGHT! 🚨 Use Code: <a href="/#svcountdowncode">GONEBYMIDNIGHT</a> for 50% OFF ⏳ Ends <a href="/#svcountdown">in 8h 51m 51s</a><a href="/terms-of-use/">*</a>
        </div> 
    </div>
</div>
<div class="revealMarquee marqueeReverse bg-lightpurple py-4 text-white flex flex-row gap-x-10 lg:flex-nowrap md:text-25 lg:text-20 xl:text-25 font-bold lg:whitespace-nowrap transform -rotate-1 justify-center text-center px-10 lg:px-0 overflow-hidden">
    <div class="lg:hidden text" style="opacity: 1; visibility: inherit; transform: translate(0px, 0px);">
        <span>Discover endless delights with over <strong class="text-orange">2 million</strong> boxes shipped!</span>
    </div>
    <div class="hidden lg:flex text transform translate-y-4" style="opacity: 1; visibility: inherit; transform: translate(0px, 0px);">
        <span>Discover endless delights with over <strong class="text-orange">2 million</strong> boxes shipped!</span>
    </div>
</div>





<div class="mx-auto max-w-90 w-full xl:max-w-xl text-center text-black pt-60 xl:pt-60 items-center justify-center flex flex-row relative w-full fade-trigger">
    <h2 class="my-0 pb-0 text-24 md:text-30 xl:text-40 font-bold xl:max-w-500 leading-120 flex flex-col w-full pt-14 xl:pt-40 xs:px-10 md:px-20 relative z-10 lg:px-0 fadeIn" style="pointer-events: auto; transform: translate(0px, 0px); opacity: 1;">Join the SnackVerse<br> world! Every month <br>a new impression!</h2>

            <div class="transform absolute max-w-380 left-14 xs:left-10 top-24 xs:top-14 xl:top-14 scale-50 md:left-20 md:scale-60 lg:scale-80 xl:scale-100 lg:rotate-0 rotate-12 transform -translate-x-36 -translate-y-24 lg:translate-y-10 lg:-translate-x-16 xl:translate-x-0 xl:translate-y-20 w-full">
        <picture>
            <source media="(min-width: 300px)" srcset="/images/pic1.webp" type="image/webp">
            <img src="/page_files/pic1.png" alt="Picture" class="js-parallax" data-parallax="{&quot;rotateZ&quot;: -4, &quot;x&quot;: -10, &quot;y&quot;:-20, &quot;smoothness&quot;: 30}" style="transform:translate3d(0px, 0px, 0px) rotateX(0deg) rotateY(0deg) rotateZ(0deg) scaleX(1) scaleY(1) scaleZ(1); -webkit-transform:translate3d(0px, 0px, 0px) rotateX(0deg) rotateY(0deg) rotateZ(0deg) scaleX(1) scaleY(1) scaleZ(1); ">
        </picture>
    </div>
            <div class="transform absolute max-w-280 left-1/2 top-16 lg:top-20 scale-30 md:scale-50 -rotate-12 lg:rotate-0 lg:scale-70 lg:-translate-y-10 xl:scale-100 -translate-x-1/2 w-full">
        <picture>
            <source media="(min-width: 300px)" srcset="/images/pic2.webp" type="image/webp">
            <img src="/page_files/pic2.png" alt="Picture" class="js-parallax" data-parallax="{&quot;rotateZ&quot;: 4, &quot;y&quot;: 20, &quot;smoothness&quot;:10}" style="transform:translate3d(0px, 0.01px, 0px) rotateX(0deg) rotateY(0deg) rotateZ(0.01deg) scaleX(1) scaleY(1) scaleZ(1); -webkit-transform:translate3d(0px, 0.01px, 0px) rotateX(0deg) rotateY(0deg) rotateZ(0.01deg) scaleX(1) scaleY(1) scaleZ(1); ">
        </picture>
    </div>
            <div class="transform absolute max-w-410 top-5 right-12 xs:right-20 xs:-top-4 lg:top-auto lg:bottom-0 scale-50 md:scale-60 md:right-32 rotate-12 lg:rotate-0 lg:scale-70 lg:translate-y-10 lg:translate-x-32 xl:scale-100 md:-top-10 lg:top-auto w-full translate-x-1/2 xl:translate-x-14 xl:-translate-y-6 z-10">
        <picture>
            <source media="(min-width: 300px)" srcset="/images/pic3.webp" type="image/webp">
            <img src="/page_files/pic3.png" alt="Picture" class="js-parallax" data-parallax="{&quot;rotateZ&quot;: 20, &quot;y&quot;: 20, &quot;smoothness&quot;: 40}" style="transform:translate3d(0px, 0.039px, 0px) rotateX(0deg) rotateY(0deg) rotateZ(0.039deg) scaleX(1) scaleY(1) scaleZ(1); -webkit-transform:translate3d(0px, 0.039px, 0px) rotateX(0deg) rotateY(0deg) rotateZ(0.039deg) scaleX(1) scaleY(1) scaleZ(1); ">
        </picture>
    </div>
</div>



    <div class="bg-bgpurple w-full py-20 lg:py-24 lg:pt-32 bg-full bg-center bg-no-repeat mt-16 lg:mt-24 relative bg-contain fixbgposition fade-trigger" style="background-image:url(/images/bg_bars.png);">
    <div class="flex flex-col md:flex-row text-white mx-auto max-w-90 md:max-w-md md:px-6 lg:px-0 xl:max-w-xl relative w-full flex-wrap">
                    <div class="transform absolute max-w-320 w-full -top-40 -left-32 xl:-top-36 xl:left-0 transform -translate-y-10 scale-60 lg:scale-90 xl:-translate-y-20 xl:-translate-x-10">
            <picture>
                <source media="(min-width: 300px)" srcset="/images/stellar.webp" type="image/webp">
                <img src="/page_files/stellar.png" alt="Picture" class="js-parallax" data-parallax="{&quot;rotateZ&quot;:-20, &quot;smoothness&quot;: 40}" style="transform:translate3d(0px, 0px, 0px) rotateX(0deg) rotateY(0deg) rotateZ(0deg) scaleX(1) scaleY(1) scaleZ(1); -webkit-transform:translate3d(0px, 0px, 0px) rotateX(0deg) rotateY(0deg) rotateZ(0deg) scaleX(1) scaleY(1) scaleZ(1); ">
            </picture>
        </div>

                    <div class="transform absolute max-w-220 lg:max-w-400 top-0 right-0 translate-x-20 -translate-y-14 sm:-translate-y-16 lg:-translate-y-20 transform xl:-translate-y-24 xl:-translate-x-10">
            <picture>
                <source media="(min-width: 300px)" srcset="/images/meteor.webp" type="image/webp">
                <img src="/page_files/meteor.png" alt="Picture" class="js-parallax" data-parallax="{&quot;x&quot;: -100, &quot;smoothness&quot;: 20}" style="transform:translate3d(0px, 0px, 0px) rotateX(0deg) rotateY(0deg) rotateZ(0deg) scaleX(1) scaleY(1) scaleZ(1); -webkit-transform:translate3d(0px, 0px, 0px) rotateX(0deg) rotateY(0deg) rotateZ(0deg) scaleX(1) scaleY(1) scaleZ(1); ">
            </picture>
        </div>

        <div class="flex flex-col w-full md:w-1/3 justify-center md:justify-between lg:justify-center items-center text-center pb-10 lg:pb-0 md:px-2 xl:px-0">
                            <picture>
                <source media="(min-width: 300px)" srcset="/images/shipping.webp" type="image/webp">
                <img src="/page_files/shipping.png" alt="Picture" class="max-w-140 lg:max-180 xl:max-w-200 fadeIn" style="pointer-events: none; transform: translate(0px, 0px); opacity: 1;">
            </picture>
            <div class="relative mt-4 h-auto"><em class="font-bold text-24 lg:text-32 xl:text-40 fadeIn block" style="pointer-events: auto; transform: translate(0px, 0px); opacity: 1;">Free Shipping</em></div>
            <div class="relative overflow-hidden h-full pt-4 lg:pt-6"><p class="text-16 lg:text-18 xl:text-20 lg:px-6 xl:px-14 fadeIn h-auto" style="pointer-events: auto; transform: translate(0px, 0px); opacity: 1;">Enjoy free delivery on UK orders. We also ship internationally — rates may vary.</p></div>
        </div>

        <div class="flex flex-col w-full md:w-1/3 justify-center items-center text-center pb-10 lg:pb-0 md:px-2 xl:px-0">
                            <picture>
                <source media="(min-width: 300px)" srcset="/images/commitment.webp" type="image/webp">
                <img src="/page_files/commitment.png" alt="Picture" class="max-w-140 lg:max-180 xl:max-w-200 fadeIn w-full transform translate-x-2 translate-fix" style="pointer-events: none; transform: translate(8px, 0px); opacity: 1;">
            </picture>
            <div class="relative mt-4 h-auto"><em class="font-bold text-24 lg:text-32 xl:text-40 fadeIn block" style="pointer-events: auto; transform: translate(0px, 0px); opacity: 1;">No Commitment</em></div>
            <div class="relative overflow-hidden h-full pt-4 lg:pt-6"><p class="text-16 lg:text-18 xl:text-20 lg:px-6 xl:px-14 fadeIn h-auto" style="pointer-events: auto; transform: translate(0px, 0px); opacity: 1;">You can cancel your subscription anytime, from your account settings — no questions asked!</p></div>
        </div>
        <div class="flex flex-col w-full md:w-1/3 justify-center items-center text-center pb-10 lg:pb-0 md:px-2 xl:px-0">
                            <picture>
                <source media="(min-width: 300px)" srcset="/images/satisfaction.webp" type="image/webp">
                <img src="/page_files/satisfaction.png" alt="Picture" class="max-w-140 lg:max-180 xl:max-w-200 fadeIn w-full" style="pointer-events: none; transform: translate(0px, 0px); opacity: 1;">
            </picture>
            <div class="relative mt-4 h-auto"><em class="font-bold text-24 lg:text-32 xl:text-40 fadeIn block" style="pointer-events: auto; transform: translate(0px, 0px); opacity: 1;">100% Satisfaction</em></div>
            <div class="relative overflow-hidden h-full pt-4 lg:pt-6"><p class="text-16 lg:text-18 xl:text-20 lg:px-6 xl:px-14 fadeIn h-auto" style="pointer-events: auto; transform: translate(0px, 0px); opacity: 1;">We choose the best and highest-quality snacks from each month — so you’re left wanting more!</p></div>
        </div>
    </div>
</div>





<div class="bg-lightred py-14 lg:py-24 lg:pb-32 text-black text-center px-6 fade-trigger">
    <div class="relative overflow-hidden xl:mb-10 "><em class="font-bold text-36 xl:text-60 relative leading-120 px-10 block fadeIn" style="pointer-events: auto; transform: translate(0px, 0px); opacity: 1;">How Does It Work?</em></div>

    <div class="flex flex-col flex-wrap gap-y-10 md:gap-y-0 md:flex-row mx-auto max-w-md xl:max-w-xl justify-between h-auto pt-0">
        <div class="flex flex-col text-center w-full md:w-1/3 h-auto">
                            <div class="relative flex flex-col">
                <picture>
                    <source media="(min-width: 300px)" srcset="/images/step1_.webp" type="image/webp">
                    <img src="/page_files/step1_.png" alt="Picture" class="max-w-full xl:max-w-400 mx-auto transform fadeIn transform -translate-x-7 md:-translate-x-4" style="pointer-events: none; transform: translate(-16px, 0px); opacity: 1;">
                </picture>
            </div>
            
            <div class="relative overflow-hidden"><em class="font-bold text-24 md:text-28 lg:text-32 lg:text-36 fadeIn block" style="pointer-events: auto; transform: translate(0px, 0px); opacity: 1;">You Subscribe</em></div>
            <div class="relative overflow-hidden"><p class="text-16 md:text-16 md:px-4 pt-4 md:pt-2 lg:px-10 text-purpletext fadeIn" style="pointer-events: auto; transform: translate(0px, 0px); opacity: 1;">Choose either the mini, original or premium box to enjoy yourself or treat someone as a gift. Place your order using one of our many payment options, and we’ll start preparing your order for lift-off!</p></div>
        </div>
        <div class="flex flex-col text-center w-full md:w-1/3 h-auto">
                            <div class="relative flex flex-col">
                <picture>
                    <source media="(min-width: 300px)" srcset="/images/step2_.webp" type="image/webp">
                    <img src="/page_files/step2_.png" alt="Picture" class="max-w-full xl:max-w-400 mx-auto transform fadeIn transform -translate-x-7 md:-translate-x-4" style="pointer-events: none; transform: translate(-16px, 0px); opacity: 1;">
                </picture>
            </div>
            <div class="relative overflow-hidden"><em class="font-bold text-24 md:text-28 lg:text-32 lg:text-36 block fadeIn" style="pointer-events: auto; transform: translate(0px, 0px); opacity: 1;">We Deliver</em></div>
            <div class="relative overflow-hidden"><p class="text-16 md:text-16 md:px-4 pt-4 md:pt-2 lg:px-10 text-purpletext fadeIn" style="pointer-events: auto; transform: translate(0px, 0px); opacity: 1;">We send your SnackVerse box around the end of each month. You can track the delivery status of your snack box through your account. Start getting excited and guessing which country this month will be!</p></div>
        </div>
        <div class="flex flex-col text-center w-full md:w-1/3 h-auto">
                                            <div class="relative flex flex-col">
                <picture>
                    <source media="(min-width: 768px)" srcset="/images/step3_.webp" type="image/webp">
                    <source media="(min-width: 300px)" srcset="/images/step3_mobile.webp" type="image/webp">
                    <img src="/page_files/step3_.png" alt="Picture" class="max-w-full xl:max-w-400 mx-auto transform fadeIn transform -translate-x-3 md:-translate-x-2" style="pointer-events: none; transform: translate(-8px, 0px); opacity: 1;">
                </picture>
            </div>
            <div class="relative overflow-hidden"><em class="font-bold text-24 md:text-28 lg:text-32 lg:text-36 block fadeIn" style="pointer-events: auto; transform: translate(0px, 0px); opacity: 1;">You Enjoy</em></div>
            <div class="relative overflow-hidden"><p class="text-16 md:text-16 md:px-4 pt-4 md:pt-2 lg:px-10 text-purpletext fadeIn" style="pointer-events: auto; transform: translate(0px, 0px); opacity: 1;">Open your box and start exploring. Try fun new snacks that are out of this world! You’ll love sampling and sharing your exotic snacks! Remember each month snacks from a different country will show up!</p></div>
        </div>
    </div>
</div>







<div class="relative py-14 pb-10 md:py-20 md:pb-10 lg:pb-0 fade-trigger">
    <div class="flex flex-col text-center text-black items-center justify-center gap-x-0 mx-auto max-w-90 xl:max-w-xl pb-14 pb-10">
        <div class="relative overflow-hidden">
            <em class="font-bold text-36 xl:text-70 relative leading-120 relative z-10 pb-4 md:pb-0 fadeIn block" style="pointer-events: auto; transform: translate(0px, 0px); opacity: 1;">What’s inside the box?</em>
        </div>
    </div>

    <div class="flex flex-col relative mx-auto max-w-90 xl:max-w-xl">
        <div class="flex flex-col lg:flex-row items-center justify-center gap-x-0 relative">
                            <picture>
                <source media="(min-width: 300px)" srcset="/images/radial_bg.webp" type="image/webp">
                <img src="/page_files/radial_bg.png" alt="Picture" class="max-w-400 w-full md:max-w-500 absolute left-40 -top-10 transform mx-auto">
            </picture>

             <div class="flex flex-col gap-y-8 order-1 lg:order-2 z-10 relative fadeIn md:hidden" style="pointer-events: auto; transform: translate(0px, 0px); opacity: 1;">
                                    <div class="max-w-400 w-full md:max-w-700 transform scale-125 md:scale-100 md:scale-110 -translate-x-0 xl:translate-x-10 mx-auto">
                    <picture>
                        <source media="(min-width: 300px)" srcset="/images/box_inside.webp" type="image/webp">
                        <img src="/page_files/box_inside.png" alt="Picture" class="js-parallax" data-parallax="{&quot;rotateZ&quot;: -2, &quot;smoothness&quot;: 40}" style="transform:translate3d(0px, 0px, 0px) rotateX(0deg) rotateY(0deg) rotateZ(0deg) scaleX(1) scaleY(1) scaleZ(1); -webkit-transform:translate3d(0px, 0px, 0px) rotateX(0deg) rotateY(0deg) rotateZ(0deg) scaleX(1) scaleY(1) scaleZ(1); ">
                    </picture>
                </div>
            </div>


            <div class="flex flex-col gap-y-8 order-2 lg:order-1 mt-14 lg:mt-0 z-10 relative">
                <div class="relative flex flex-row items-center fadeIn" style="pointer-events: auto; transform: translate(0px, 0px); opacity: 1;">
                    <div class="bubble py-6 px-6 md:px-8 relative flex flex-1 items-center flex-col justify-center">
                        <em class="font-bold text-aqua text-20 md:text-24 w-full">Discover new cultures</em>
                        <p class="text-black text-14 md:text-16">with our themed <b>20-page guide</b> to learn more about the country of the month and the delicious snacks you’re trying.</p>
                    </div>

                    <svg class="pointer" xmlns="http://www.w3.org/2000/svg" width="34" height="56" viewBox="0 0 34 55" fill="none"><path fill="#ECFAFF" d="M.55 55.097v-55c0 5.915 3.028 11.42 8.023 14.588l21.63 13.72c4.969 3.153 3.104 10.813-2.758 11.328L13.5 40.958C6.172 41.603.55 47.74.55 55.097Z"></path></svg>
                </div>
            

                <div class="relative flex flex-row items-center fadeIn" style="pointer-events: auto; transform: translate(0px, 0px); opacity: 1;">
                    <div class="bubble bubble--purple py-6 px-6 md:px-8 relative flex flex-1 items-center flex-col justify-center">
                        <em class="font-bold text-aqua text-20 md:text-24 w-full">10+ full-size snacks!</em>
                        <p class="text-black text-14 md:text-16">Send yourself and loved ones on a tasting journey with snacks from different countries each month! With the <b>premium box</b>, you’ll enjoy <b>20+ tasty snacks.</b> </p>
                    </div>
                    
                    <svg class="pointer" xmlns="http://www.w3.org/2000/svg" width="34" height="55" viewBox="0 0 34 55" fill="none"><path fill="#F6ECFF" d="M.736 55V0c0 5.915 3.027 11.42 8.022 14.588l21.63 13.72c4.97 3.152 3.105 10.812-2.758 11.328L13.687 40.86C6.358 41.505.736 47.643.736 55Z"></path></svg>
                </div>
            

                <div class="relative flex flex-row items-center relative z-10 fadeIn" style="pointer-events: auto; transform: translate(0px, 0px); opacity: 1;">
                    <div class="bubble bubble--orange py-10 px-6 md:px-8 relative flex flex-1 items-center flex-col justify-center">
                        <em class="font-bold text-aqua text-20 md:text-24 w-full">Every box includes</em>
                        <p class="text-black text-14 md:text-16">a varied selection of <b>sweets, chocolates, crisps, biscuits, drinks,</b> and lots more!</p>
                    </div>

                    <svg class="pointer" xmlns="http://www.w3.org/2000/svg" width="34" height="55" viewBox="0 0 34 55" fill="none"><path fill="#FFEFEF" d="M.963 0v55c0-5.916 3.027-11.42 8.022-14.589l21.63-13.72c4.969-3.152 3.104-10.812-2.758-11.327l-13.944-1.226C6.584 13.494.963 7.357.963 0Z"></path></svg>
                </div>
            </div>
        
            <div class="flex flex-col gap-y-8 order-1 lg:order-2 z-10 relative fadeIn hidden md:flex" style="pointer-events: auto; transform: translate(0px, 0px); opacity: 1;">
                                    <div class="max-w-400 w-full md:max-w-700 transform scale-125 md:scale-100 md:scale-110 -translate-x-0 xl:translate-x-10 mx-auto">
                    <picture>
                        <source media="(min-width: 300px)" srcset="/images/box_inside.webp" type="image/webp">
                        <img src="/page_files/box_inside.png" alt="Picture" class="js-parallax" data-parallax="{&quot;rotateZ&quot;: -2, &quot;smoothness&quot;: 40}" style="transform:translate3d(0px, 0px, 0px) rotateX(0deg) rotateY(0deg) rotateZ(0deg) scaleX(1) scaleY(1) scaleZ(1); -webkit-transform:translate3d(0px, 0px, 0px) rotateX(0deg) rotateY(0deg) rotateZ(0deg) scaleX(1) scaleY(1) scaleZ(1); ">
                    </picture>
                </div>
            </div>
        </div>


        <div class="flex flex-row justify-center fadeIn" style="pointer-events: auto; transform: translate(0px, 0px); opacity: 1;">
            <a href="/subscribe" class="w-full max-w-450 md:max-w-auto text-center justify-center px-14 rounded-full bg-orange text-white px-6 md:px-10 py-4 text-white inline-flex mt-14 lg:mt-20 xl:mt-20 mb-8 md:mb-14 lg:mb-28 font-bold transition duration-300 ease-in-out hover:bg-darkorange text-20 md:text-24 lg:text-28 2xl:text-32 relative z-10 md:py-6 xl:py-6 xl:px-14 2xl:px-10 xl:max-w-500">Let's get started!</a>
        </div>
                    <div class="hidden lg:inline-flex max-w-140 md:max-w-180 transform absolute -left-20 lg:-left-26 bottom-80 z-0">
            <picture>
                <source media="(min-width: 300px)" srcset="/images/cake_1.webp" type="image/webp">
                <img src="/page_files/cake_1.png" alt="Picture" class="js-parallax" data-parallax="{&quot;rotateZ&quot;: 50, &quot;x&quot;: -80, &quot;y&quot;:40, &quot;smoothness&quot;: 20}" style="transform:translate3d(0px, 0.019px, 0px) rotateX(0deg) rotateY(0deg) rotateZ(0.019deg) scaleX(1) scaleY(1) scaleZ(1); -webkit-transform:translate3d(0px, 0.019px, 0px) rotateX(0deg) rotateY(0deg) rotateZ(0.019deg) scaleX(1) scaleY(1) scaleZ(1); ">
            </picture>
        </div>

                    <div class="hidden lg:inline-flex max-w-140 md:max-w-250 transform absolute left-auto -right-20 md:right-auto md:-left-26 bottom-0 z-0 ">
            <picture>
                <source media="(min-width: 300px)" srcset="/images/cake_2.webp" type="image/webp">
                <img src="/page_files/cake_2.png" alt="Picture" class="js-parallax" data-parallax="{&quot;rotateZ&quot;: 100, &quot;x&quot;: -100, &quot;y&quot;:100, &quot;smoothness&quot;: 40}" style="transform:translate3d(0px, 0.039px, 0px) rotateX(0deg) rotateY(0deg) rotateZ(0.039deg) scaleX(1) scaleY(1) scaleZ(1); -webkit-transform:translate3d(0px, 0.039px, 0px) rotateX(0deg) rotateY(0deg) rotateZ(0.039deg) scaleX(1) scaleY(1) scaleZ(1); ">
            </picture>
        </div>
    </div>
</div>





<div class="flex flex-col pt-14 lg:pt-24 fade-trigger" style="background-color:#9F4CE1;">
    <div class="relative max-w-90 w-full mx-auto lg:max-w-md">
                    <div class="max-w-50 md:max-w-100 transform absolute left-0 top-0 transform xl:-translate-y-10 xl:-translate-x-32">
            <picture>
                <source media="(min-width: 300px)" srcset="/images/fb.webp" type="image/webp">
                <img src="/page_files/fb.png" alt="Picture" class="js-parallax" data-parallax="{&quot;rotateZ&quot;: -20, &quot;scale&quot;: 0.76,&quot;y&quot;:40, &quot;smoothness&quot;: 10}" style="transform:translate3d(0px, 0.01px, 0px) rotateX(0deg) rotateY(0deg) rotateZ(0deg) scaleX(1) scaleY(1) scaleZ(1); -webkit-transform:translate3d(0px, 0.01px, 0px) rotateX(0deg) rotateY(0deg) rotateZ(0deg) scaleX(1) scaleY(1) scaleZ(1); ">
            </picture>
        </div>

                    <div class="max-w-40 md:max-w-80 transform absolute right-0 md:right-auto md:left-1/2 top-0 transform xl:translate-y-20 xl:translate-x-20">
            <picture>
                <source media="(min-width: 300px)" srcset="/images/mail.webp" type="image/webp">
                <img src="/page_files/mail.png" alt="Picture" class="js-parallax" data-parallax="{&quot;rotateZ&quot;: 30, &quot;scale&quot;: 0.7, &quot;x&quot;: 20, &quot;smoothness&quot;: 20}" style="transform:translate3d(0.019px, 0px, 0px) rotateX(0deg) rotateY(0deg) rotateZ(0.019deg) scaleX(1) scaleY(1) scaleZ(1); -webkit-transform:translate3d(0.019px, 0px, 0px) rotateX(0deg) rotateY(0deg) rotateZ(0.019deg) scaleX(1) scaleY(1) scaleZ(1); ">
            </picture>
        </div>

                    <div class="max-w-50 md:max-w-80 transform absolute -right-10 md:right-0 top-20 md:top-1/3 md:top-0 transform xl:-translate-y-20 xl:translate-x-32">
            <picture>
                <source media="(min-width: 300px)" srcset="/images/twitter.webp" type="image/webp">
                <img src="/page_files/twitter.png" alt="Picture" class="js-parallax" data-parallax="{&quot;rotateZ&quot;: 40, &quot;scale&quot;: 0.6, &quot;y&quot;: 20, &quot;smoothness&quot;: 40}" style="transform:translate3d(0px, 0.039px, 0px) rotateX(0deg) rotateY(0deg) rotateZ(0.039deg) scaleX(1) scaleY(1) scaleZ(1); -webkit-transform:translate3d(0px, 0.039px, 0px) rotateX(0deg) rotateY(0deg) rotateZ(0.039deg) scaleX(1) scaleY(1) scaleZ(1); ">
            </picture>
        </div>

        <div class="flex flex-col md:flex-row w-full items-center xl:gap-x-5 w-full relative justify-between">
            <div class="flex flex-col w-full text-white md:w-1/2">
                <div class="relative overflow-hidden">
                    <em class="font-bold text-36 md:text-40 xl:text-70 relative leading-120 relative z-10 text-center md:text-left block fadeIn" style="pointer-events: auto; transform: translate(0px, 0px); opacity: 1;">Give 5 <strong class="text-lime">Get £5</strong></em>
                </div>
                <div class="relative overflow-hidden">
                    <p class="mt-6 xl:pr-10 text-14 md:text-16 fadeIn" style="pointer-events: auto; transform: translate(0px, 0px); opacity: 1;">
                        <b>Invite a friend via Facebook, Twitter or email and they’ll get a £5 welcome credit, plus you’ll get £5 in your own account</b> with their first order, as our little thank you.
                    </p>
                </div>
            </div>

            <div class="flex flex-row w-full 2xs:w-auto my-10 lg:my-0 fadeIn" style="pointer-events: auto; transform: translate(0px, 0px); opacity: 1;">
                <a href="/refer-a-friend/" class="rounded-full bg-lime text-white px-10 py-4 text-black inline-flex font-bold hover:text-white transition duration-300 ease-in-out hover:bg-orange text-20 w-full lg:w-auto text-center justify-center md:text-24 lg:text-28 2xl:text-32 md:px-16 md:py-6">Refer a friend</a>

            </div>
        </div>
    </div>

            <picture>
        <source media="(min-width: 768px)" srcset="/images/people.webp" type="image/webp">
        <source media="(min-width: 300px)" srcset="/images/people-640x200-c-default.webp" type="image/webp">
        <img src="/page_files/people.png" alt="Picture" class="max-w-full w-full lg:max-w-xl mx-auto">
    </picture>
</div>    

        
<style>

.bg-trust_pilot { 
        background-image:url(/images/stripe.png); 
        background-position: 0% 8%; background-size: 110% 20%;
    }
@media only screen and (min-width: 768px) {
    .bg-trust_pilot { 
        background-image:url(/images/lines.png); 
        background-position: 0% 30%; background-size: 104% 30%;
    }
}

.activate-slideshow .slider-trustpilot {
    max-width: 2300px;
}
</style>

<div class="max-w-full w-full flex flex-col py-14 lg:py-24 text-black mx-auto relative bg-contain bg-center bg-no-repeat bg-cover bg-trust_pilot fade-trigger activate-slideshow">
    <div class="flex flex-col text-black mx-auto max-w-90 md:max-w-lg xl:max-w-xl relative">

                    <div class="max-w-100 -top-10 -right-14 sm:-right-28 sm:max-w-200 md:top-10 xmd:translate-x-32 md:translate-x-20 lg:max-w-250 mx-auto absolute lg:top-0 scale-90 xl:scale-100 lg:-right-40 lg:translate-x-16 xl:-right-60 xl:translate-x-20 2xl:translate-x-20 transform z-10">
            <picture>
                <source media="(min-width: 300px)" srcset="/images/spaceship.webp" type="image/webp">
                <img src="/page_files/spaceship.png" alt="Picture" class="js-parallax" data-parallax="{&quot;rotateZ&quot;: -10, &quot;rotateX&quot;:30, &quot;x&quot;:20, &quot;smoothness&quot;: 30}" style="transform:translate3d(0.029px, 0px, 0px) rotateX(0.029deg) rotateY(0deg) rotateZ(0deg) scaleX(1) scaleY(1) scaleZ(1); -webkit-transform:translate3d(0.029px, 0px, 0px) rotateX(0.029deg) rotateY(0deg) rotateZ(0deg) scaleX(1) scaleY(1) scaleZ(1); ">
            </picture>
        </div>

        
                    <div class="max-w-200 w-full sm:max-w-250 lg:max-w-300 absolute -top-20 -right-32 md:top-10 md:translate-x-20  xmd:translate-x-32 lg:top-0 lg:translate-x-20 lg:-right-40 xl:-right-60 2xl:right-42 2xl:top-8 transform mx-auto">
            <picture>
                <source media="(min-width: 300px)" srcset="/images/radial_bg.webp" type="image/webp">
                <img src="/page_files/radial_bg.png" alt="Picture" class="js-parallax" data-parallax="{&quot;scale&quot;: 0.8, &quot;rotate&quot;: 10, &quot;x&quot;: 20, &quot;smoothness&quot;: 40}" style="transform:translate3d(0.039px, 0px, 0px) rotateX(0deg) rotateY(0deg) rotateZ(0deg) scaleX(1) scaleY(1) scaleZ(1); -webkit-transform:translate3d(0.039px, 0px, 0px) rotateX(0deg) rotateY(0deg) rotateZ(0deg) scaleX(1) scaleY(1) scaleZ(1); ">
            </picture>
        </div>


        <div class="relative flex flex-col items-center max-w-90 mx-auto md:max-w-md mt-4 md:mt-0">
            <div class="relative overflow-hidden"><h4 class="text-36 sm:text-34 text-center leading-120 md:text-50 xl:text-60 font-bold fadeIn block md:max-w-500 lg:max-w-900" style="pointer-events: auto; transform: translate(0px, 0px); opacity: 1;">Over 2 million boxes shipped</h4></div>

            <div class="relative overflow-hidden">
                    <div class="flex flex-col gap-x-4 justify-center items-center text-black">
                        <div class="flex flex-row gap-x-4 justify-center items-center text-black mt-6">
                        <div class="flex flex-row gap-x-1" style="color:rgba(151,21,255,1) !important; font-size:2.4em;">
                            <i class="fa-solid fa-star"></i>
                            <i class="fa-solid fa-star"></i>
                            <i class="fa-solid fa-star"></i>
                            <i class="fa-solid fa-star"></i>
                            <i class="fa-solid fa-star"></i>
                        </div>
                    </div>
                    <div>
                        <p class="tp-text text-27 md:text-20 text-center mt-4" style="">Rated <strong>"Excellent"</strong> by our customers</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <style>
    .tp-logo{
        max-width: 180px; 
        opacity:0.8;
        height:45px;
    }
    .tp-rating{
        max-width: 140px; 
        margin-top:5px;
    }
    .tp-text{
        font-size:30px;
    }
    .avatar-img{
        font-weight:100;
        font-size: 47px;
    }
    .tp-stars-img{
        max-width: 100px;
        width: 100px;
        height:30px;
    
    }
    /* Media query for screens less than 768px wide */
    @media (max-width: 767px) {
        .tp-logo {
            /* Adjusted max-width and height for smaller screens */
            max-width: 135px; 
            opacity:0.8;
        }
        .tp-rating {
            /* Adjusted max-width and potentially margin for smaller screens */
            max-width: 115px; 
            margin-top: 2.5px;
        }
        .tp-text {
            /* Adjusted font size for smaller screens */
            font-size: 19.5px;
        }
    }
    /* Media query for screens less than 768px wide */
    @media (max-width: 480px) {
        .tp-logo {
            /* Adjusted max-width and height for smaller screens */
            max-width: 125px; 
            height: 45px;
        }
        .tp-rating {
            /* Adjusted max-width and potentially margin for smaller screens */
            max-width: 105px; 
            margin-top: 2.5px;
        }
        .tp-text {
            /* Adjusted font size for smaller screens */
            font-size: 19.5px;
        }
    }
    </style>

    <div>
        <div class="slider-trustpilot mt-10 md:mt-20 fadeIn mx-auto slick-initialized slick-slider slick-dotted" style="pointer-events: auto; transform: translate(0px, 0px); opacity: 1;"><div class="slick-list draggable"><div class="slick-track" style="opacity: 1; width: 9724.09px; transform: translate3d(-906px, 0px, 0px);"><div class="slick-slide slick-cloned" data-slick-index="-3" id="" aria-hidden="true" style="width: 302px;" tabindex="-1"><div><div class="slide w-full" style="width: 100%; display: inline-block;">
                <div class="flex flex-col items-center justify-center w-full px-4 md:px-5 mb-5 pb-4 flex flex-col ">

                                            <div class="avatar-img rounded-full w-20 h-20 bg-purple text-white text-50  text-center flex items-center justify-center">
                        C
                    </div>
                    
                    

                    <em class="text-20 md:text-24 pb-4 font-bold pt-2"></em>

                    <svg xmlns="http://www.w3.org/2000/svg" class="forcecolorSVG relative z-10 transform translate-y-1" width="53" height="19" fill="none"><path fill="currentColor" d="M52.783 18.5h-52a22.06 22.06 0 0 0 18.052-9.381l4.869-6.932c1.74-2.478 5.436-2.404 7.076.14l4.148 6.437A21.242 21.242 0 0 0 52.782 18.5Z"></path></svg>
                    <div class="slider__msg relative px-4 md:px-6 py-6">
                        <div class="flex flex-row gap-x-2 justify-center pb-4 pl-8 pr-8" style="color:rgba(151,21,255,1) !important;font-size:1.5em">
                            <i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i>
                        </div>

                        <p class="text-14 md:text-16">
                            Lovely variety of items, all tasty, fresh and good value
                        </p>
                    </div>
                </div>
            </div></div></div><div class="slick-slide slick-cloned" data-slick-index="-2" id="" aria-hidden="true" style="width: 302px;" tabindex="-1"><div><div class="slide w-full" style="width: 100%; display: inline-block;">
                <div class="flex flex-col items-center justify-center w-full px-4 md:px-5 mb-5 pb-4 flex flex-col ">

                                            <div class="avatar-img rounded-full w-20 h-20 bg-purple text-white text-50  text-center flex items-center justify-center">
                        W
                    </div>
                    
                    

                    <em class="text-20 md:text-24 pb-4 font-bold pt-2"></em>

                    <svg xmlns="http://www.w3.org/2000/svg" class="forcecolorSVG relative z-10 transform translate-y-1" width="53" height="19" fill="none"><path fill="currentColor" d="M52.783 18.5h-52a22.06 22.06 0 0 0 18.052-9.381l4.869-6.932c1.74-2.478 5.436-2.404 7.076.14l4.148 6.437A21.242 21.242 0 0 0 52.782 18.5Z"></path></svg>
                    <div class="slider__msg relative px-4 md:px-6 py-6">
                        <div class="flex flex-row gap-x-2 justify-center pb-4 pl-8 pr-8" style="color:rgba(151,21,255,1) !important;font-size:1.5em">
                            <i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i>
                        </div>

                        <p class="text-14 md:text-16">
                            Love these boxes and my children look forward to seeing what we get each month. They would have a weekly box if they could! They…
                        </p>
                    </div>
                </div>
            </div></div></div><div class="slick-slide slick-cloned" data-slick-index="-1" id="" aria-hidden="true" style="width: 302px;" tabindex="-1"><div><div class="slide w-full" style="width: 100%; display: inline-block;">
                <div class="flex flex-col items-center justify-center w-full px-4 md:px-5 mb-5 pb-4 flex flex-col ">

                                            <div class="avatar-img rounded-full w-20 h-20 bg-purple text-white text-50  text-center flex items-center justify-center">
                        H
                    </div>
                    
                    

                    <em class="text-20 md:text-24 pb-4 font-bold pt-2"></em>

                    <svg xmlns="http://www.w3.org/2000/svg" class="forcecolorSVG relative z-10 transform translate-y-1" width="53" height="19" fill="none"><path fill="currentColor" d="M52.783 18.5h-52a22.06 22.06 0 0 0 18.052-9.381l4.869-6.932c1.74-2.478 5.436-2.404 7.076.14l4.148 6.437A21.242 21.242 0 0 0 52.782 18.5Z"></path></svg>
                    <div class="slider__msg relative px-4 md:px-6 py-6">
                        <div class="flex flex-row gap-x-2 justify-center pb-4 pl-8 pr-8" style="color:rgba(151,21,255,1) !important;font-size:1.5em">
                            <i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i>
                        </div>

                        <p class="text-14 md:text-16">
                            I absolutely love the mystery that comes, on which country and what we will get I praise you all for the hard work you do…
                        </p>
                    </div>
                </div>
            </div></div></div><div class="slick-slide force-active-previous slick-current slick-active" data-slick-index="0" aria-hidden="false" style="width: 302px;" role="tabpanel" id="slick-slide00" aria-describedby="slick-slide-control00"><div><div class="slide w-full" style="width: 100%; display: inline-block;">
                <div class="flex flex-col items-center justify-center w-full px-4 md:px-5 mb-5 pb-4 flex flex-col fadeIn" style="pointer-events: none; transform: translate(0px, 0px); opacity: 1;">

                                            <div class="avatar-img rounded-full w-20 h-20 bg-purple text-white text-50  text-center flex items-center justify-center">
                        M
                    </div>
                    
                    

                    <em class="text-20 md:text-24 pb-4 font-bold pt-2"></em>

                    <svg xmlns="http://www.w3.org/2000/svg" class="forcecolorSVG relative z-10 transform translate-y-1" width="53" height="19" fill="none"><path fill="currentColor" d="M52.783 18.5h-52a22.06 22.06 0 0 0 18.052-9.381l4.869-6.932c1.74-2.478 5.436-2.404 7.076.14l4.148 6.437A21.242 21.242 0 0 0 52.782 18.5Z"></path></svg>
                    <div class="slider__msg relative px-4 md:px-6 py-6">
                        <div class="flex flex-row gap-x-2 justify-center pb-4 pl-8 pr-8" style="color:rgba(151,21,255,1) !important;font-size:1.5em">
                            <i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i>
                        </div>

                        <p class="text-14 md:text-16">
                            Each month I can't wait to receive my box to see which countries delicious snacks I have to eat.
                        </p>
                    </div>
                </div>
            </div></div></div><div class="slick-slide force-active slick-active" data-slick-index="1" aria-hidden="false" style="width: 302px;" role="tabpanel" id="slick-slide01"><div><div class="slide w-full" style="width: 100%; display: inline-block;">
                <div class="flex flex-col items-center justify-center w-full px-4 md:px-5 mb-5 pb-4 flex flex-col fadeIn" style="pointer-events: none; transform: translate(0px, 0px); opacity: 1;">

                                            <div class="avatar-img rounded-full w-20 h-20 bg-purple text-white text-50  text-center flex items-center justify-center">
                        J
                    </div>
                    
                    

                    <em class="text-20 md:text-24 pb-4 font-bold pt-2"></em>

                    <svg xmlns="http://www.w3.org/2000/svg" class="forcecolorSVG relative z-10 transform translate-y-1" width="53" height="19" fill="none"><path fill="currentColor" d="M52.783 18.5h-52a22.06 22.06 0 0 0 18.052-9.381l4.869-6.932c1.74-2.478 5.436-2.404 7.076.14l4.148 6.437A21.242 21.242 0 0 0 52.782 18.5Z"></path></svg>
                    <div class="slider__msg relative px-4 md:px-6 py-6">
                        <div class="flex flex-row gap-x-2 justify-center pb-4 pl-8 pr-8" style="color:rgba(151,21,255,1) !important;font-size:1.5em">
                            <i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i>
                        </div>

                        <p class="text-14 md:text-16">
                            Love getting my snack box through every month, it's always exciting to open it up and go through it all. Keep up the great work!
                        </p>
                    </div>
                </div>
            </div></div></div><div class="slick-slide force-active-last slick-active" data-slick-index="2" aria-hidden="false" style="width: 302px;" role="tabpanel" id="slick-slide02"><div><div class="slide w-full" style="width: 100%; display: inline-block;">
                <div class="flex flex-col items-center justify-center w-full px-4 md:px-5 mb-5 pb-4 flex flex-col fadeIn" style="pointer-events: none; transform: translate(0px, 0px); opacity: 1;">

                                            <div class="avatar-img rounded-full w-20 h-20 bg-purple text-white text-50  text-center flex items-center justify-center">
                        L
                    </div>
                    
                    

                    <em class="text-20 md:text-24 pb-4 font-bold pt-2"></em>

                    <svg xmlns="http://www.w3.org/2000/svg" class="forcecolorSVG relative z-10 transform translate-y-1" width="53" height="19" fill="none"><path fill="currentColor" d="M52.783 18.5h-52a22.06 22.06 0 0 0 18.052-9.381l4.869-6.932c1.74-2.478 5.436-2.404 7.076.14l4.148 6.437A21.242 21.242 0 0 0 52.782 18.5Z"></path></svg>
                    <div class="slider__msg relative px-4 md:px-6 py-6">
                        <div class="flex flex-row gap-x-2 justify-center pb-4 pl-8 pr-8" style="color:rgba(151,21,255,1) !important;font-size:1.5em">
                            <i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i>
                        </div>

                        <p class="text-14 md:text-16">
                            Absolutely love the boxes! So exciting for the surprise and to try lots of things I never have before!
                        </p>
                    </div>
                </div>
            </div></div></div><div class="slick-slide" data-slick-index="3" aria-hidden="true" style="width: 302px;" tabindex="-1" role="tabpanel" id="slick-slide03" aria-describedby="slick-slide-control01"><div><div class="slide w-full" style="width: 100%; display: inline-block;">
                <div class="flex flex-col items-center justify-center w-full px-4 md:px-5 mb-5 pb-4 flex flex-col fadeIn" style="pointer-events: none; transform: translate(0px, 0px); opacity: 1;">

                                            <div class="avatar-img rounded-full w-20 h-20 bg-purple text-white text-50  text-center flex items-center justify-center">
                        C
                    </div>
                    
                    

                    <em class="text-20 md:text-24 pb-4 font-bold pt-2"></em>

                    <svg xmlns="http://www.w3.org/2000/svg" class="forcecolorSVG relative z-10 transform translate-y-1" width="53" height="19" fill="none"><path fill="currentColor" d="M52.783 18.5h-52a22.06 22.06 0 0 0 18.052-9.381l4.869-6.932c1.74-2.478 5.436-2.404 7.076.14l4.148 6.437A21.242 21.242 0 0 0 52.782 18.5Z"></path></svg>
                    <div class="slider__msg relative px-4 md:px-6 py-6">
                        <div class="flex flex-row gap-x-2 justify-center pb-4 pl-8 pr-8" style="color:rgba(151,21,255,1) !important;font-size:1.5em">
                            <i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i>
                        </div>

                        <p class="text-14 md:text-16">
                            Love these boxes. As a family we look forward to receiving them on a monthly basis then looking through them and trying all the snacks…
                        </p>
                    </div>
                </div>
            </div></div></div><div class="slick-slide" data-slick-index="4" aria-hidden="true" style="width: 302px;" tabindex="-1" role="tabpanel" id="slick-slide04"><div><div class="slide w-full" style="width: 100%; display: inline-block;">
                <div class="flex flex-col items-center justify-center w-full px-4 md:px-5 mb-5 pb-4 flex flex-col fadeIn" style="pointer-events: none; transform: translate(0px, 0px); opacity: 1;">

                                            <div class="avatar-img rounded-full w-20 h-20 bg-purple text-white text-50  text-center flex items-center justify-center">
                        M
                    </div>
                    
                    

                    <em class="text-20 md:text-24 pb-4 font-bold pt-2"></em>

                    <svg xmlns="http://www.w3.org/2000/svg" class="forcecolorSVG relative z-10 transform translate-y-1" width="53" height="19" fill="none"><path fill="currentColor" d="M52.783 18.5h-52a22.06 22.06 0 0 0 18.052-9.381l4.869-6.932c1.74-2.478 5.436-2.404 7.076.14l4.148 6.437A21.242 21.242 0 0 0 52.782 18.5Z"></path></svg>
                    <div class="slider__msg relative px-4 md:px-6 py-6">
                        <div class="flex flex-row gap-x-2 justify-center pb-4 pl-8 pr-8" style="color:rgba(151,21,255,1) !important;font-size:1.5em">
                            <i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i>
                        </div>

                        <p class="text-14 md:text-16">
                            Really enjoying our Snackverse boxes. We are 3 generations, grandma, son and grandson and it is great doing something together each month. We really look…
                        </p>
                    </div>
                </div>
            </div></div></div><div class="slick-slide" data-slick-index="5" aria-hidden="true" style="width: 302px;" tabindex="-1" role="tabpanel" id="slick-slide05"><div><div class="slide w-full" style="width: 100%; display: inline-block;">
                <div class="flex flex-col items-center justify-center w-full px-4 md:px-5 mb-5 pb-4 flex flex-col fadeIn" style="pointer-events: none; transform: translate(0px, 0px); opacity: 1;">

                                            <div class="avatar-img rounded-full w-20 h-20 bg-purple text-white text-50  text-center flex items-center justify-center">
                        S
                    </div>
                    
                    

                    <em class="text-20 md:text-24 pb-4 font-bold pt-2"></em>

                    <svg xmlns="http://www.w3.org/2000/svg" class="forcecolorSVG relative z-10 transform translate-y-1" width="53" height="19" fill="none"><path fill="currentColor" d="M52.783 18.5h-52a22.06 22.06 0 0 0 18.052-9.381l4.869-6.932c1.74-2.478 5.436-2.404 7.076.14l4.148 6.437A21.242 21.242 0 0 0 52.782 18.5Z"></path></svg>
                    <div class="slider__msg relative px-4 md:px-6 py-6">
                        <div class="flex flex-row gap-x-2 justify-center pb-4 pl-8 pr-8" style="color:rgba(151,21,255,1) !important;font-size:1.5em">
                            <i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i>
                        </div>

                        <p class="text-14 md:text-16">
                            Love not knowing what country we are getting next and the love the booklet that comes with it too
                        </p>
                    </div>
                </div>
            </div></div></div><div class="slick-slide" data-slick-index="6" aria-hidden="true" style="width: 302px;" tabindex="-1" role="tabpanel" id="slick-slide06" aria-describedby="slick-slide-control02"><div><div class="slide w-full" style="width: 100%; display: inline-block;">
                <div class="flex flex-col items-center justify-center w-full px-4 md:px-5 mb-5 pb-4 flex flex-col ">

                                            <div class="avatar-img rounded-full w-20 h-20 bg-purple text-white text-50  text-center flex items-center justify-center">
                        L
                    </div>
                    
                    

                    <em class="text-20 md:text-24 pb-4 font-bold pt-2"></em>

                    <svg xmlns="http://www.w3.org/2000/svg" class="forcecolorSVG relative z-10 transform translate-y-1" width="53" height="19" fill="none"><path fill="currentColor" d="M52.783 18.5h-52a22.06 22.06 0 0 0 18.052-9.381l4.869-6.932c1.74-2.478 5.436-2.404 7.076.14l4.148 6.437A21.242 21.242 0 0 0 52.782 18.5Z"></path></svg>
                    <div class="slider__msg relative px-4 md:px-6 py-6">
                        <div class="flex flex-row gap-x-2 justify-center pb-4 pl-8 pr-8" style="color:rgba(151,21,255,1) !important;font-size:1.5em">
                            <i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i>
                        </div>

                        <p class="text-14 md:text-16">
                            this was my 3rd box and so far not disappointed with the selection of snacks, role on the next box
                        </p>
                    </div>
                </div>
            </div></div></div><div class="slick-slide" data-slick-index="7" aria-hidden="true" style="width: 302px;" tabindex="-1" role="tabpanel" id="slick-slide07"><div><div class="slide w-full" style="width: 100%; display: inline-block;">
                <div class="flex flex-col items-center justify-center w-full px-4 md:px-5 mb-5 pb-4 flex flex-col ">

                                            <div class="avatar-img rounded-full w-20 h-20 bg-purple text-white text-50  text-center flex items-center justify-center">
                        L
                    </div>
                    
                    

                    <em class="text-20 md:text-24 pb-4 font-bold pt-2"></em>

                    <svg xmlns="http://www.w3.org/2000/svg" class="forcecolorSVG relative z-10 transform translate-y-1" width="53" height="19" fill="none"><path fill="currentColor" d="M52.783 18.5h-52a22.06 22.06 0 0 0 18.052-9.381l4.869-6.932c1.74-2.478 5.436-2.404 7.076.14l4.148 6.437A21.242 21.242 0 0 0 52.782 18.5Z"></path></svg>
                    <div class="slider__msg relative px-4 md:px-6 py-6">
                        <div class="flex flex-row gap-x-2 justify-center pb-4 pl-8 pr-8" style="color:rgba(151,21,255,1) !important;font-size:1.5em">
                            <i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i>
                        </div>

                        <p class="text-14 md:text-16">
                            This was the best box yet, Spain was a massive hit. The cheeto footballs were lovely too.
                        </p>
                    </div>
                </div>
            </div></div></div><div class="slick-slide" data-slick-index="8" aria-hidden="true" style="width: 302px;" tabindex="-1" role="tabpanel" id="slick-slide08"><div><div class="slide w-full" style="width: 100%; display: inline-block;">
                <div class="flex flex-col items-center justify-center w-full px-4 md:px-5 mb-5 pb-4 flex flex-col ">

                                            <div class="avatar-img rounded-full w-20 h-20 bg-purple text-white text-50  text-center flex items-center justify-center">
                        M
                    </div>
                    
                    

                    <em class="text-20 md:text-24 pb-4 font-bold pt-2"></em>

                    <svg xmlns="http://www.w3.org/2000/svg" class="forcecolorSVG relative z-10 transform translate-y-1" width="53" height="19" fill="none"><path fill="currentColor" d="M52.783 18.5h-52a22.06 22.06 0 0 0 18.052-9.381l4.869-6.932c1.74-2.478 5.436-2.404 7.076.14l4.148 6.437A21.242 21.242 0 0 0 52.782 18.5Z"></path></svg>
                    <div class="slider__msg relative px-4 md:px-6 py-6">
                        <div class="flex flex-row gap-x-2 justify-center pb-4 pl-8 pr-8" style="color:rgba(151,21,255,1) !important;font-size:1.5em">
                            <i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i>
                        </div>

                        <p class="text-14 md:text-16">
                            My kids love getting there box each month
                        </p>
                    </div>
                </div>
            </div></div></div><div class="slick-slide" data-slick-index="9" aria-hidden="true" style="width: 302px;" tabindex="-1" role="tabpanel" id="slick-slide09" aria-describedby="slick-slide-control03"><div><div class="slide w-full" style="width: 100%; display: inline-block;">
                <div class="flex flex-col items-center justify-center w-full px-4 md:px-5 mb-5 pb-4 flex flex-col ">

                                            <div class="avatar-img rounded-full w-20 h-20 bg-purple text-white text-50  text-center flex items-center justify-center">
                        K
                    </div>
                    
                    

                    <em class="text-20 md:text-24 pb-4 font-bold pt-2"></em>

                    <svg xmlns="http://www.w3.org/2000/svg" class="forcecolorSVG relative z-10 transform translate-y-1" width="53" height="19" fill="none"><path fill="currentColor" d="M52.783 18.5h-52a22.06 22.06 0 0 0 18.052-9.381l4.869-6.932c1.74-2.478 5.436-2.404 7.076.14l4.148 6.437A21.242 21.242 0 0 0 52.782 18.5Z"></path></svg>
                    <div class="slider__msg relative px-4 md:px-6 py-6">
                        <div class="flex flex-row gap-x-2 justify-center pb-4 pl-8 pr-8" style="color:rgba(151,21,255,1) !important;font-size:1.5em">
                            <i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i>
                        </div>

                        <p class="text-14 md:text-16">
                            First box very happy 😊
                        </p>
                    </div>
                </div>
            </div></div></div><div class="slick-slide" data-slick-index="10" aria-hidden="true" style="width: 302px;" tabindex="-1" role="tabpanel" id="slick-slide010"><div><div class="slide w-full" style="width: 100%; display: inline-block;">
                <div class="flex flex-col items-center justify-center w-full px-4 md:px-5 mb-5 pb-4 flex flex-col ">

                                            <div class="avatar-img rounded-full w-20 h-20 bg-purple text-white text-50  text-center flex items-center justify-center">
                        T
                    </div>
                    
                    

                    <em class="text-20 md:text-24 pb-4 font-bold pt-2"></em>

                    <svg xmlns="http://www.w3.org/2000/svg" class="forcecolorSVG relative z-10 transform translate-y-1" width="53" height="19" fill="none"><path fill="currentColor" d="M52.783 18.5h-52a22.06 22.06 0 0 0 18.052-9.381l4.869-6.932c1.74-2.478 5.436-2.404 7.076.14l4.148 6.437A21.242 21.242 0 0 0 52.782 18.5Z"></path></svg>
                    <div class="slider__msg relative px-4 md:px-6 py-6">
                        <div class="flex flex-row gap-x-2 justify-center pb-4 pl-8 pr-8" style="color:rgba(151,21,255,1) !important;font-size:1.5em">
                            <i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i>
                        </div>

                        <p class="text-14 md:text-16">
                            Overall, excellent box. Can't wait for the next one.
                        </p>
                    </div>
                </div>
            </div></div></div><div class="slick-slide" data-slick-index="11" aria-hidden="true" style="width: 302px;" tabindex="-1" role="tabpanel" id="slick-slide011"><div><div class="slide w-full" style="width: 100%; display: inline-block;">
                <div class="flex flex-col items-center justify-center w-full px-4 md:px-5 mb-5 pb-4 flex flex-col ">

                                            <div class="avatar-img rounded-full w-20 h-20 bg-purple text-white text-50  text-center flex items-center justify-center">
                        C
                    </div>
                    
                    

                    <em class="text-20 md:text-24 pb-4 font-bold pt-2"></em>

                    <svg xmlns="http://www.w3.org/2000/svg" class="forcecolorSVG relative z-10 transform translate-y-1" width="53" height="19" fill="none"><path fill="currentColor" d="M52.783 18.5h-52a22.06 22.06 0 0 0 18.052-9.381l4.869-6.932c1.74-2.478 5.436-2.404 7.076.14l4.148 6.437A21.242 21.242 0 0 0 52.782 18.5Z"></path></svg>
                    <div class="slider__msg relative px-4 md:px-6 py-6">
                        <div class="flex flex-row gap-x-2 justify-center pb-4 pl-8 pr-8" style="color:rgba(151,21,255,1) !important;font-size:1.5em">
                            <i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i>
                        </div>

                        <p class="text-14 md:text-16">
                            Lovely variety of items, all tasty, fresh and good value
                        </p>
                    </div>
                </div>
            </div></div></div><div class="slick-slide" data-slick-index="12" aria-hidden="true" style="width: 302px;" tabindex="-1" role="tabpanel" id="slick-slide012" aria-describedby="slick-slide-control04"><div><div class="slide w-full" style="width: 100%; display: inline-block;">
                <div class="flex flex-col items-center justify-center w-full px-4 md:px-5 mb-5 pb-4 flex flex-col ">

                                            <div class="avatar-img rounded-full w-20 h-20 bg-purple text-white text-50  text-center flex items-center justify-center">
                        W
                    </div>
                    
                    

                    <em class="text-20 md:text-24 pb-4 font-bold pt-2"></em>

                    <svg xmlns="http://www.w3.org/2000/svg" class="forcecolorSVG relative z-10 transform translate-y-1" width="53" height="19" fill="none"><path fill="currentColor" d="M52.783 18.5h-52a22.06 22.06 0 0 0 18.052-9.381l4.869-6.932c1.74-2.478 5.436-2.404 7.076.14l4.148 6.437A21.242 21.242 0 0 0 52.782 18.5Z"></path></svg>
                    <div class="slider__msg relative px-4 md:px-6 py-6">
                        <div class="flex flex-row gap-x-2 justify-center pb-4 pl-8 pr-8" style="color:rgba(151,21,255,1) !important;font-size:1.5em">
                            <i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i>
                        </div>

                        <p class="text-14 md:text-16">
                            Love these boxes and my children look forward to seeing what we get each month. They would have a weekly box if they could! They…
                        </p>
                    </div>
                </div>
            </div></div></div><div class="slick-slide" data-slick-index="13" aria-hidden="true" style="width: 302px;" tabindex="-1" role="tabpanel" id="slick-slide013"><div><div class="slide w-full" style="width: 100%; display: inline-block;">
                <div class="flex flex-col items-center justify-center w-full px-4 md:px-5 mb-5 pb-4 flex flex-col ">

                                            <div class="avatar-img rounded-full w-20 h-20 bg-purple text-white text-50  text-center flex items-center justify-center">
                        H
                    </div>
                    
                    

                    <em class="text-20 md:text-24 pb-4 font-bold pt-2"></em>

                    <svg xmlns="http://www.w3.org/2000/svg" class="forcecolorSVG relative z-10 transform translate-y-1" width="53" height="19" fill="none"><path fill="currentColor" d="M52.783 18.5h-52a22.06 22.06 0 0 0 18.052-9.381l4.869-6.932c1.74-2.478 5.436-2.404 7.076.14l4.148 6.437A21.242 21.242 0 0 0 52.782 18.5Z"></path></svg>
                    <div class="slider__msg relative px-4 md:px-6 py-6">
                        <div class="flex flex-row gap-x-2 justify-center pb-4 pl-8 pr-8" style="color:rgba(151,21,255,1) !important;font-size:1.5em">
                            <i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i>
                        </div>

                        <p class="text-14 md:text-16">
                            I absolutely love the mystery that comes, on which country and what we will get I praise you all for the hard work you do…
                        </p>
                    </div>
                </div>
            </div></div></div><div class="slick-slide slick-cloned" data-slick-index="14" id="" aria-hidden="true" style="width: 302px;" tabindex="-1"><div><div class="slide w-full" style="width: 100%; display: inline-block;">
                <div class="flex flex-col items-center justify-center w-full px-4 md:px-5 mb-5 pb-4 flex flex-col fadeIn" style="pointer-events: none; transform: translate(0px, 0px); opacity: 1;">

                                            <div class="avatar-img rounded-full w-20 h-20 bg-purple text-white text-50  text-center flex items-center justify-center">
                        M
                    </div>
                    
                    

                    <em class="text-20 md:text-24 pb-4 font-bold pt-2"></em>

                    <svg xmlns="http://www.w3.org/2000/svg" class="forcecolorSVG relative z-10 transform translate-y-1" width="53" height="19" fill="none"><path fill="currentColor" d="M52.783 18.5h-52a22.06 22.06 0 0 0 18.052-9.381l4.869-6.932c1.74-2.478 5.436-2.404 7.076.14l4.148 6.437A21.242 21.242 0 0 0 52.782 18.5Z"></path></svg>
                    <div class="slider__msg relative px-4 md:px-6 py-6">
                        <div class="flex flex-row gap-x-2 justify-center pb-4 pl-8 pr-8" style="color:rgba(151,21,255,1) !important;font-size:1.5em">
                            <i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i>
                        </div>

                        <p class="text-14 md:text-16">
                            Each month I can't wait to receive my box to see which countries delicious snacks I have to eat.
                        </p>
                    </div>
                </div>
            </div></div></div><div class="slick-slide slick-cloned" data-slick-index="15" id="" aria-hidden="true" style="width: 302px;" tabindex="-1"><div><div class="slide w-full" style="width: 100%; display: inline-block;">
                <div class="flex flex-col items-center justify-center w-full px-4 md:px-5 mb-5 pb-4 flex flex-col fadeIn" style="pointer-events: none; transform: translate(0px, 0px); opacity: 1;">

                                            <div class="avatar-img rounded-full w-20 h-20 bg-purple text-white text-50  text-center flex items-center justify-center">
                        J
                    </div>
                    
                    

                    <em class="text-20 md:text-24 pb-4 font-bold pt-2"></em>

                    <svg xmlns="http://www.w3.org/2000/svg" class="forcecolorSVG relative z-10 transform translate-y-1" width="53" height="19" fill="none"><path fill="currentColor" d="M52.783 18.5h-52a22.06 22.06 0 0 0 18.052-9.381l4.869-6.932c1.74-2.478 5.436-2.404 7.076.14l4.148 6.437A21.242 21.242 0 0 0 52.782 18.5Z"></path></svg>
                    <div class="slider__msg relative px-4 md:px-6 py-6">
                        <div class="flex flex-row gap-x-2 justify-center pb-4 pl-8 pr-8" style="color:rgba(151,21,255,1) !important;font-size:1.5em">
                            <i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i>
                        </div>

                        <p class="text-14 md:text-16">
                            Love getting my snack box through every month, it's always exciting to open it up and go through it all. Keep up the great work!
                        </p>
                    </div>
                </div>
            </div></div></div><div class="slick-slide slick-cloned" data-slick-index="16" id="" aria-hidden="true" style="width: 302px;" tabindex="-1"><div><div class="slide w-full" style="width: 100%; display: inline-block;">
                <div class="flex flex-col items-center justify-center w-full px-4 md:px-5 mb-5 pb-4 flex flex-col fadeIn" style="pointer-events: none; transform: translate(0px, 0px); opacity: 1;">

                                            <div class="avatar-img rounded-full w-20 h-20 bg-purple text-white text-50  text-center flex items-center justify-center">
                        L
                    </div>
                    
                    

                    <em class="text-20 md:text-24 pb-4 font-bold pt-2"></em>

                    <svg xmlns="http://www.w3.org/2000/svg" class="forcecolorSVG relative z-10 transform translate-y-1" width="53" height="19" fill="none"><path fill="currentColor" d="M52.783 18.5h-52a22.06 22.06 0 0 0 18.052-9.381l4.869-6.932c1.74-2.478 5.436-2.404 7.076.14l4.148 6.437A21.242 21.242 0 0 0 52.782 18.5Z"></path></svg>
                    <div class="slider__msg relative px-4 md:px-6 py-6">
                        <div class="flex flex-row gap-x-2 justify-center pb-4 pl-8 pr-8" style="color:rgba(151,21,255,1) !important;font-size:1.5em">
                            <i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i>
                        </div>

                        <p class="text-14 md:text-16">
                            Absolutely love the boxes! So exciting for the surprise and to try lots of things I never have before!
                        </p>
                    </div>
                </div>
            </div></div></div><div class="slick-slide slick-cloned" data-slick-index="17" id="" aria-hidden="true" style="width: 302px;" tabindex="-1"><div><div class="slide w-full" style="width: 100%; display: inline-block;">
                <div class="flex flex-col items-center justify-center w-full px-4 md:px-5 mb-5 pb-4 flex flex-col fadeIn" style="pointer-events: none; transform: translate(0px, 0px); opacity: 1;">

                                            <div class="avatar-img rounded-full w-20 h-20 bg-purple text-white text-50  text-center flex items-center justify-center">
                        C
                    </div>
                    
                    

                    <em class="text-20 md:text-24 pb-4 font-bold pt-2"></em>

                    <svg xmlns="http://www.w3.org/2000/svg" class="forcecolorSVG relative z-10 transform translate-y-1" width="53" height="19" fill="none"><path fill="currentColor" d="M52.783 18.5h-52a22.06 22.06 0 0 0 18.052-9.381l4.869-6.932c1.74-2.478 5.436-2.404 7.076.14l4.148 6.437A21.242 21.242 0 0 0 52.782 18.5Z"></path></svg>
                    <div class="slider__msg relative px-4 md:px-6 py-6">
                        <div class="flex flex-row gap-x-2 justify-center pb-4 pl-8 pr-8" style="color:rgba(151,21,255,1) !important;font-size:1.5em">
                            <i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i>
                        </div>

                        <p class="text-14 md:text-16">
                            Love these boxes. As a family we look forward to receiving them on a monthly basis then looking through them and trying all the snacks…
                        </p>
                    </div>
                </div>
            </div></div></div><div class="slick-slide slick-cloned" data-slick-index="18" id="" aria-hidden="true" style="width: 302px;" tabindex="-1"><div><div class="slide w-full" style="width: 100%; display: inline-block;">
                <div class="flex flex-col items-center justify-center w-full px-4 md:px-5 mb-5 pb-4 flex flex-col fadeIn" style="pointer-events: none; transform: translate(0px, 0px); opacity: 1;">

                                            <div class="avatar-img rounded-full w-20 h-20 bg-purple text-white text-50  text-center flex items-center justify-center">
                        M
                    </div>
                    
                    

                    <em class="text-20 md:text-24 pb-4 font-bold pt-2"></em>

                    <svg xmlns="http://www.w3.org/2000/svg" class="forcecolorSVG relative z-10 transform translate-y-1" width="53" height="19" fill="none"><path fill="currentColor" d="M52.783 18.5h-52a22.06 22.06 0 0 0 18.052-9.381l4.869-6.932c1.74-2.478 5.436-2.404 7.076.14l4.148 6.437A21.242 21.242 0 0 0 52.782 18.5Z"></path></svg>
                    <div class="slider__msg relative px-4 md:px-6 py-6">
                        <div class="flex flex-row gap-x-2 justify-center pb-4 pl-8 pr-8" style="color:rgba(151,21,255,1) !important;font-size:1.5em">
                            <i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i>
                        </div>

                        <p class="text-14 md:text-16">
                            Really enjoying our Snackverse boxes. We are 3 generations, grandma, son and grandson and it is great doing something together each month. We really look…
                        </p>
                    </div>
                </div>
            </div></div></div><div class="slick-slide slick-cloned" data-slick-index="19" id="" aria-hidden="true" style="width: 302px;" tabindex="-1"><div><div class="slide w-full" style="width: 100%; display: inline-block;">
                <div class="flex flex-col items-center justify-center w-full px-4 md:px-5 mb-5 pb-4 flex flex-col fadeIn" style="pointer-events: none; transform: translate(0px, 0px); opacity: 1;">

                                            <div class="avatar-img rounded-full w-20 h-20 bg-purple text-white text-50  text-center flex items-center justify-center">
                        S
                    </div>
                    
                    

                    <em class="text-20 md:text-24 pb-4 font-bold pt-2"></em>

                    <svg xmlns="http://www.w3.org/2000/svg" class="forcecolorSVG relative z-10 transform translate-y-1" width="53" height="19" fill="none"><path fill="currentColor" d="M52.783 18.5h-52a22.06 22.06 0 0 0 18.052-9.381l4.869-6.932c1.74-2.478 5.436-2.404 7.076.14l4.148 6.437A21.242 21.242 0 0 0 52.782 18.5Z"></path></svg>
                    <div class="slider__msg relative px-4 md:px-6 py-6">
                        <div class="flex flex-row gap-x-2 justify-center pb-4 pl-8 pr-8" style="color:rgba(151,21,255,1) !important;font-size:1.5em">
                            <i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i>
                        </div>

                        <p class="text-14 md:text-16">
                            Love not knowing what country we are getting next and the love the booklet that comes with it too
                        </p>
                    </div>
                </div>
            </div></div></div><div class="slick-slide slick-cloned" data-slick-index="20" id="" aria-hidden="true" style="width: 302px;" tabindex="-1"><div><div class="slide w-full" style="width: 100%; display: inline-block;">
                <div class="flex flex-col items-center justify-center w-full px-4 md:px-5 mb-5 pb-4 flex flex-col ">

                                            <div class="avatar-img rounded-full w-20 h-20 bg-purple text-white text-50  text-center flex items-center justify-center">
                        L
                    </div>
                    
                    

                    <em class="text-20 md:text-24 pb-4 font-bold pt-2"></em>

                    <svg xmlns="http://www.w3.org/2000/svg" class="forcecolorSVG relative z-10 transform translate-y-1" width="53" height="19" fill="none"><path fill="currentColor" d="M52.783 18.5h-52a22.06 22.06 0 0 0 18.052-9.381l4.869-6.932c1.74-2.478 5.436-2.404 7.076.14l4.148 6.437A21.242 21.242 0 0 0 52.782 18.5Z"></path></svg>
                    <div class="slider__msg relative px-4 md:px-6 py-6">
                        <div class="flex flex-row gap-x-2 justify-center pb-4 pl-8 pr-8" style="color:rgba(151,21,255,1) !important;font-size:1.5em">
                            <i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i>
                        </div>

                        <p class="text-14 md:text-16">
                            this was my 3rd box and so far not disappointed with the selection of snacks, role on the next box
                        </p>
                    </div>
                </div>
            </div></div></div><div class="slick-slide slick-cloned" data-slick-index="21" id="" aria-hidden="true" style="width: 302px;" tabindex="-1"><div><div class="slide w-full" style="width: 100%; display: inline-block;">
                <div class="flex flex-col items-center justify-center w-full px-4 md:px-5 mb-5 pb-4 flex flex-col ">

                                            <div class="avatar-img rounded-full w-20 h-20 bg-purple text-white text-50  text-center flex items-center justify-center">
                        L
                    </div>
                    
                    

                    <em class="text-20 md:text-24 pb-4 font-bold pt-2"></em>

                    <svg xmlns="http://www.w3.org/2000/svg" class="forcecolorSVG relative z-10 transform translate-y-1" width="53" height="19" fill="none"><path fill="currentColor" d="M52.783 18.5h-52a22.06 22.06 0 0 0 18.052-9.381l4.869-6.932c1.74-2.478 5.436-2.404 7.076.14l4.148 6.437A21.242 21.242 0 0 0 52.782 18.5Z"></path></svg>
                    <div class="slider__msg relative px-4 md:px-6 py-6">
                        <div class="flex flex-row gap-x-2 justify-center pb-4 pl-8 pr-8" style="color:rgba(151,21,255,1) !important;font-size:1.5em">
                            <i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i>
                        </div>

                        <p class="text-14 md:text-16">
                            This was the best box yet, Spain was a massive hit. The cheeto footballs were lovely too.
                        </p>
                    </div>
                </div>
            </div></div></div><div class="slick-slide slick-cloned" data-slick-index="22" id="" aria-hidden="true" style="width: 302px;" tabindex="-1"><div><div class="slide w-full" style="width: 100%; display: inline-block;">
                <div class="flex flex-col items-center justify-center w-full px-4 md:px-5 mb-5 pb-4 flex flex-col ">

                                            <div class="avatar-img rounded-full w-20 h-20 bg-purple text-white text-50  text-center flex items-center justify-center">
                        M
                    </div>
                    
                    

                    <em class="text-20 md:text-24 pb-4 font-bold pt-2"></em>

                    <svg xmlns="http://www.w3.org/2000/svg" class="forcecolorSVG relative z-10 transform translate-y-1" width="53" height="19" fill="none"><path fill="currentColor" d="M52.783 18.5h-52a22.06 22.06 0 0 0 18.052-9.381l4.869-6.932c1.74-2.478 5.436-2.404 7.076.14l4.148 6.437A21.242 21.242 0 0 0 52.782 18.5Z"></path></svg>
                    <div class="slider__msg relative px-4 md:px-6 py-6">
                        <div class="flex flex-row gap-x-2 justify-center pb-4 pl-8 pr-8" style="color:rgba(151,21,255,1) !important;font-size:1.5em">
                            <i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i>
                        </div>

                        <p class="text-14 md:text-16">
                            My kids love getting there box each month
                        </p>
                    </div>
                </div>
            </div></div></div><div class="slick-slide slick-cloned" data-slick-index="23" id="" aria-hidden="true" style="width: 302px;" tabindex="-1"><div><div class="slide w-full" style="width: 100%; display: inline-block;">
                <div class="flex flex-col items-center justify-center w-full px-4 md:px-5 mb-5 pb-4 flex flex-col ">

                                            <div class="avatar-img rounded-full w-20 h-20 bg-purple text-white text-50  text-center flex items-center justify-center">
                        K
                    </div>
                    
                    

                    <em class="text-20 md:text-24 pb-4 font-bold pt-2"></em>

                    <svg xmlns="http://www.w3.org/2000/svg" class="forcecolorSVG relative z-10 transform translate-y-1" width="53" height="19" fill="none"><path fill="currentColor" d="M52.783 18.5h-52a22.06 22.06 0 0 0 18.052-9.381l4.869-6.932c1.74-2.478 5.436-2.404 7.076.14l4.148 6.437A21.242 21.242 0 0 0 52.782 18.5Z"></path></svg>
                    <div class="slider__msg relative px-4 md:px-6 py-6">
                        <div class="flex flex-row gap-x-2 justify-center pb-4 pl-8 pr-8" style="color:rgba(151,21,255,1) !important;font-size:1.5em">
                            <i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i>
                        </div>

                        <p class="text-14 md:text-16">
                            First box very happy 😊
                        </p>
                    </div>
                </div>
            </div></div></div><div class="slick-slide slick-cloned" data-slick-index="24" id="" aria-hidden="true" style="width: 302px;" tabindex="-1"><div><div class="slide w-full" style="width: 100%; display: inline-block;">
                <div class="flex flex-col items-center justify-center w-full px-4 md:px-5 mb-5 pb-4 flex flex-col ">

                                            <div class="avatar-img rounded-full w-20 h-20 bg-purple text-white text-50  text-center flex items-center justify-center">
                        T
                    </div>
                    
                    

                    <em class="text-20 md:text-24 pb-4 font-bold pt-2"></em>

                    <svg xmlns="http://www.w3.org/2000/svg" class="forcecolorSVG relative z-10 transform translate-y-1" width="53" height="19" fill="none"><path fill="currentColor" d="M52.783 18.5h-52a22.06 22.06 0 0 0 18.052-9.381l4.869-6.932c1.74-2.478 5.436-2.404 7.076.14l4.148 6.437A21.242 21.242 0 0 0 52.782 18.5Z"></path></svg>
                    <div class="slider__msg relative px-4 md:px-6 py-6">
                        <div class="flex flex-row gap-x-2 justify-center pb-4 pl-8 pr-8" style="color:rgba(151,21,255,1) !important;font-size:1.5em">
                            <i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i>
                        </div>

                        <p class="text-14 md:text-16">
                            Overall, excellent box. Can't wait for the next one.
                        </p>
                    </div>
                </div>
            </div></div></div><div class="slick-slide slick-cloned" data-slick-index="25" id="" aria-hidden="true" style="width: 302px;" tabindex="-1"><div><div class="slide w-full" style="width: 100%; display: inline-block;">
                <div class="flex flex-col items-center justify-center w-full px-4 md:px-5 mb-5 pb-4 flex flex-col ">

                                            <div class="avatar-img rounded-full w-20 h-20 bg-purple text-white text-50  text-center flex items-center justify-center">
                        C
                    </div>
                    
                    

                    <em class="text-20 md:text-24 pb-4 font-bold pt-2"></em>

                    <svg xmlns="http://www.w3.org/2000/svg" class="forcecolorSVG relative z-10 transform translate-y-1" width="53" height="19" fill="none"><path fill="currentColor" d="M52.783 18.5h-52a22.06 22.06 0 0 0 18.052-9.381l4.869-6.932c1.74-2.478 5.436-2.404 7.076.14l4.148 6.437A21.242 21.242 0 0 0 52.782 18.5Z"></path></svg>
                    <div class="slider__msg relative px-4 md:px-6 py-6">
                        <div class="flex flex-row gap-x-2 justify-center pb-4 pl-8 pr-8" style="color:rgba(151,21,255,1) !important;font-size:1.5em">
                            <i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i>
                        </div>

                        <p class="text-14 md:text-16">
                            Lovely variety of items, all tasty, fresh and good value
                        </p>
                    </div>
                </div>
            </div></div></div><div class="slick-slide slick-cloned" data-slick-index="26" id="" aria-hidden="true" style="width: 302px;" tabindex="-1"><div><div class="slide w-full" style="width: 100%; display: inline-block;">
                <div class="flex flex-col items-center justify-center w-full px-4 md:px-5 mb-5 pb-4 flex flex-col ">

                                            <div class="avatar-img rounded-full w-20 h-20 bg-purple text-white text-50  text-center flex items-center justify-center">
                        W
                    </div>
                    
                    

                    <em class="text-20 md:text-24 pb-4 font-bold pt-2"></em>

                    <svg xmlns="http://www.w3.org/2000/svg" class="forcecolorSVG relative z-10 transform translate-y-1" width="53" height="19" fill="none"><path fill="currentColor" d="M52.783 18.5h-52a22.06 22.06 0 0 0 18.052-9.381l4.869-6.932c1.74-2.478 5.436-2.404 7.076.14l4.148 6.437A21.242 21.242 0 0 0 52.782 18.5Z"></path></svg>
                    <div class="slider__msg relative px-4 md:px-6 py-6">
                        <div class="flex flex-row gap-x-2 justify-center pb-4 pl-8 pr-8" style="color:rgba(151,21,255,1) !important;font-size:1.5em">
                            <i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i>
                        </div>

                        <p class="text-14 md:text-16">
                            Love these boxes and my children look forward to seeing what we get each month. They would have a weekly box if they could! They…
                        </p>
                    </div>
                </div>
            </div></div></div><div class="slick-slide slick-cloned" data-slick-index="27" id="" aria-hidden="true" style="width: 302px;" tabindex="-1"><div><div class="slide w-full" style="width: 100%; display: inline-block;">
                <div class="flex flex-col items-center justify-center w-full px-4 md:px-5 mb-5 pb-4 flex flex-col ">

                                            <div class="avatar-img rounded-full w-20 h-20 bg-purple text-white text-50  text-center flex items-center justify-center">
                        H
                    </div>
                    
                    

                    <em class="text-20 md:text-24 pb-4 font-bold pt-2"></em>

                    <svg xmlns="http://www.w3.org/2000/svg" class="forcecolorSVG relative z-10 transform translate-y-1" width="53" height="19" fill="none"><path fill="currentColor" d="M52.783 18.5h-52a22.06 22.06 0 0 0 18.052-9.381l4.869-6.932c1.74-2.478 5.436-2.404 7.076.14l4.148 6.437A21.242 21.242 0 0 0 52.782 18.5Z"></path></svg>
                    <div class="slider__msg relative px-4 md:px-6 py-6">
                        <div class="flex flex-row gap-x-2 justify-center pb-4 pl-8 pr-8" style="color:rgba(151,21,255,1) !important;font-size:1.5em">
                            <i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i>
                        </div>

                        <p class="text-14 md:text-16">
                            I absolutely love the mystery that comes, on which country and what we will get I praise you all for the hard work you do…
                        </p>
                    </div>
                </div>
            </div></div></div></div></div><ul class="slick-dots" style="" role="tablist"><li class="slick-active" role="presentation"><button type="button" role="tab" id="slick-slide-control00" aria-controls="slick-slide00" aria-label="1 of 5" tabindex="0" aria-selected="true">1</button></li><li role="presentation"><button type="button" role="tab" id="slick-slide-control01" aria-controls="slick-slide03" aria-label="2 of 5" tabindex="-1">2</button></li><li role="presentation"><button type="button" role="tab" id="slick-slide-control02" aria-controls="slick-slide06" aria-label="3 of 5" tabindex="-1">3</button></li><li role="presentation"><button type="button" role="tab" id="slick-slide-control03" aria-controls="slick-slide09" aria-label="4 of 5" tabindex="-1">4</button></li><li role="presentation"><button type="button" role="tab" id="slick-slide-control04" aria-controls="slick-slide012" aria-label="5 of 5" tabindex="-1">5</button></li></ul></div>
    </div>
</div>

    <div class="py-16 md:py-20 overflow-hidden fade-trigger" style="background-color:#ECEAFF;">
    <div class="max-w-90 xl:max-w-xl relative flex flex-col mx-auto">

                    <picture>
            <source media="(min-width: 300px)" srcset="/images/radial_white.webp" type="image/webp">
            <img src="/page_files/radial_white.png" alt="Picture" class="max-w-400 w-full md:max-w-600 absolute -top-20 -left-40 md:-top-20 md:-left-80 xl:translate-x-10 transform mx-auto z-0">
        </picture>

                    <picture>
            <source media="(min-width: 300px)" srcset="/images/radial_bg.webp" type="image/webp">
            <img src="/page_files/radial_bg.png" alt="Picture" class="max-w-400  max-w-200 w-full md:max-w-600 absolute -bottom-20 -right-40 md:bottom-auto md:top-20 md:-right-1/3 transform mx-auto z-0">
        </picture>

                    <div class="hidden lg:inline-block max-w-200 w-full md:max-w-220 absolute top-32 xl:left-10 transform -translate-y-1/2 mx-auto z-10 lg:scale-90 2xl:scale-100">
            <picture>
                <source media="(min-width: 300px)" srcset="/images/candy_green.webp" type="image/webp">
                <img src="/page_files/candy_green.png" alt="Picture" data-parallax="{&quot;rotateZ&quot;: 100, &quot;scale&quot;: 1, &quot;smoothness&quot;: 40}" style="transform:translate3d(0px, 0px, 0px) rotateX(0deg) rotateY(0deg) rotateZ(0.039deg) scaleX(1) scaleY(1) scaleZ(1); -webkit-transform:translate3d(0px, 0px, 0px) rotateX(0deg) rotateY(0deg) rotateZ(0.039deg) scaleX(1) scaleY(1) scaleZ(1); ">
            </picture>
        </div>

                    <div class="hidden lg:inline-block max-w-200 w-full md:max-w-320 absolute top-1/2 -left-14 lg:-translate-x-10 xl:-translate-x-10 transform -translate-y-1/2 mx-auto lg:scale-90 2xl:scale-100">
            <picture>
                <source media="(min-width: 300px)" srcset="/images/cookie.webp" type="image/webp">
                <img src="/page_files/cookie.png" alt="Picture" class="js-parallax" data-parallax="{&quot;rotateZ&quot;: -10, &quot;y&quot;:20, &quot;x&quot;: 20, &quot;smoothness&quot;: 10}" style="transform:translate3d(0.01px, 0.01px, 0px) rotateX(0deg) rotateY(0deg) rotateZ(0deg) scaleX(1) scaleY(1) scaleZ(1); -webkit-transform:translate3d(0.01px, 0.01px, 0px) rotateX(0deg) rotateY(0deg) rotateZ(0deg) scaleX(1) scaleY(1) scaleZ(1); ">
            </picture>
        </div>

                    <div class="hidden lg:inline-block max-w-200 w-full md:max-w-400 absolute -bottom-20 -left-52 transform  mx-auto lg:scale-90 2xl:scale-100 lg:translate-x-16 xl:translate-x-24">
            <picture>
                <source media="(min-width: 300px)" srcset="/images/soda.webp" type="image/webp">
                <img src="/page_files/soda.png" alt="Picture" class="js-parallax" data-parallax="{&quot;rotateZ&quot;: 20, &quot;x&quot;: -10, &quot;smoothness&quot;: 14}" style="transform:translate3d(0px, 0px, 0px) rotateX(0deg) rotateY(0deg) rotateZ(0.014deg) scaleX(1) scaleY(1) scaleZ(1); -webkit-transform:translate3d(0px, 0px, 0px) rotateX(0deg) rotateY(0deg) rotateZ(0.014deg) scaleX(1) scaleY(1) scaleZ(1); ">
            </picture>
        </div>


                    <div class="hidden lg:inline-block max-w-140 w-full md:max-w-140 absolute top-18 right-10 xl:right-20 transform  mx-auto lg:scale-90 2xl:scale-100">
            <picture>
                <source media="(min-width: 300px)" srcset="/images/gum.webp" type="image/webp">
                <img src="/page_files/gum.png" alt="Picture" class="js-parallax" data-parallax="{&quot;rotateZ&quot;: 100}" style="transform:translate3d(0px, 0px, 0px) rotateX(0deg) rotateY(0deg) rotateZ(0.029deg) scaleX(1) scaleY(1) scaleZ(1); -webkit-transform:translate3d(0px, 0px, 0px) rotateX(0deg) rotateY(0deg) rotateZ(0.029deg) scaleX(1) scaleY(1) scaleZ(1); ">
            </picture>
        </div>


                    <div class="hidden lg:inline-block max-w-200 w-full md:max-w-400 w-full absolute top-1/2 -right-1/3 lg:-right-60 transform -translate-x-20 xl:-translate-x-32 -translate-y-1/2 mx-auto lg:scale-90 2xl:scale-100">
            <picture>
                <source media="(min-width: 300px)" srcset="/images/gummy.webp" type="image/webp">
                <img src="/page_files/gummy.png" alt="Picture" class="js-parallax" data-parallax="{&quot;rotateZ&quot;: 12, &quot;x&quot;: 0, &quot;y&quot;: 20, &quot;smoothness&quot;: 20}" style="transform:translate3d(0px, 0.019px, 0px) rotateX(0deg) rotateY(0deg) rotateZ(0.019deg) scaleX(1) scaleY(1) scaleZ(1); -webkit-transform:translate3d(0px, 0.019px, 0px) rotateX(0deg) rotateY(0deg) rotateZ(0.019deg) scaleX(1) scaleY(1) scaleZ(1); ">
            </picture>
        </div>


                    <div class="hidden lg:inline-block max-w-200 w-full md:max-w-320 absolute -bottom-20 -right-20 transform mx-auto lg:scale-90 2xl:scale-100">
            <picture>
                <source media="(min-width: 300px)" srcset="/images/chip.webp" type="image/webp">
                <img src="/page_files/chip.png" alt="Picture" class="js-parallax" data-parallax="{&quot;rotateZ&quot;: -30, &quot;scale&quot;: 0.8, &quot;x&quot;:-20, &quot;smoothness&quot;: 40}" style="transform:translate3d(0px, 0px, 0px) rotateX(0deg) rotateY(0deg) rotateZ(0deg) scaleX(1) scaleY(1) scaleZ(1); -webkit-transform:translate3d(0px, 0px, 0px) rotateX(0deg) rotateY(0deg) rotateZ(0deg) scaleX(1) scaleY(1) scaleZ(1); ">
            </picture>
        </div>


        <div class="flex flex-col text-center text-black items-center justify-center gap-x-0 mx-auto pb-8 md:pb-10">
            <div class="relative overflow-hidden">
                <em class="font-bold text-36 xl:text-60 relative leading-120 relative z-10 block fadeIn" style="pointer-events: auto; transform: translate(0px, 0px); opacity: 1;">FAQ</em>
            </div>
        </div>
        
        <div class="text-left flex flex-col space-y-4 accordion mx-auto max-w-90 md:max-w-600 w-full relative z-10">
                                <div class="fadeIn" style="pointer-events: auto; transform: translate(0px, 0px); opacity: 1;">
                    <div class="accordion-item rounded-3xl relative overflow-hidden bg-white text-black w-full active">
                        <div class="accordion-header bg-white px-6 py-5 cursor-pointer flex flex-row justify-between items-center">
                            <em class="block text-18 md:text-24 lg:pr-10 font-black transition duration-300 ease-in-out">What is SnackVerse?</em>
                            <div class="arrow">
                                <svg class="transition duration-300 ease-in-out" xmlns="http://www.w3.org/2000/svg" width="20" height="13" fill="none"><path stroke="currentColor" stroke-width="3" d="m18 2-8 8-8-8"></path></svg>
                            </div>
                        </div>
                        <div class="accordion-content" style="display: block;">
                            <div class="text-14 pb-6 px-6 pt-2 md:pt-0">
                                SnackVerse is a subscription service for those who love trying snacks from around the world. Each month we deliver a box of snacks to your door from a different country. 
                            </div>
                        </div>
                    </div>
                </div>
                                <div class="fadeIn" style="pointer-events: auto; transform: translate(0px, 0px); opacity: 1;">
                    <div class="accordion-item rounded-3xl relative overflow-hidden bg-white text-black w-full">
                        <div class="accordion-header bg-white px-6 py-5 cursor-pointer flex flex-row justify-between items-center">
                            <em class="block text-18 md:text-24 lg:pr-10 font-black transition duration-300 ease-in-out">How do I join SnackVerse?</em>
                            <div class="arrow">
                                <svg class="transition duration-300 ease-in-out" xmlns="http://www.w3.org/2000/svg" width="20" height="13" fill="none"><path stroke="currentColor" stroke-width="3" d="m18 2-8 8-8-8"></path></svg>
                            </div>
                        </div>
                        <div class="accordion-content">
                            <div class="text-14 pb-6 px-6 pt-2 md:pt-0">
                                It’s pretty simple, just press the “<a href="/subscribe/">join now</a>” button on our site, then select what kind of payment plan suits you and provide all the necessary details. We will then take over the process of feeding you the best tasting snacks from around the world. 
                            </div>
                        </div>
                    </div>
                </div>
                                <div class="fadeIn" style="pointer-events: auto; transform: translate(0px, 0px); opacity: 1;">
                    <div class="accordion-item rounded-3xl relative overflow-hidden bg-white text-black w-full">
                        <div class="accordion-header bg-white px-6 py-5 cursor-pointer flex flex-row justify-between items-center">
                            <em class="block text-18 md:text-24 lg:pr-10 font-black transition duration-300 ease-in-out">What kind of snacks do I receive in my box ?</em>
                            <div class="arrow">
                                <svg class="transition duration-300 ease-in-out" xmlns="http://www.w3.org/2000/svg" width="20" height="13" fill="none"><path stroke="currentColor" stroke-width="3" d="m18 2-8 8-8-8"></path></svg>
                            </div>
                        </div>
                        <div class="accordion-content">
                            <div class="text-14 pb-6 px-6 pt-2 md:pt-0">
                                You can expect to receive snacks from sweets to crisps to biscuits to chocolates and a lot more. We include all types of snacks and only pack the best and most delicious snacks from around the world! You can get an idea of the snacks we send by checking out our <a href="/our-previous-boxes/">previous month’s box</a>. 
                            </div>
                        </div>
                    </div>
                </div>
                                <div class="fadeIn" style="pointer-events: auto; transform: translate(0px, 0px); opacity: 1;">
                    <div class="accordion-item rounded-3xl relative overflow-hidden bg-white text-black w-full">
                        <div class="accordion-header bg-white px-6 py-5 cursor-pointer flex flex-row justify-between items-center">
                            <em class="block text-18 md:text-24 lg:pr-10 font-black transition duration-300 ease-in-out">Are the snacks in my box chosen from a different country every month?</em>
                            <div class="arrow">
                                <svg class="transition duration-300 ease-in-out" xmlns="http://www.w3.org/2000/svg" width="20" height="13" fill="none"><path stroke="currentColor" stroke-width="3" d="m18 2-8 8-8-8"></path></svg>
                            </div>
                        </div>
                        <div class="accordion-content">
                            <div class="text-14 pb-6 px-6 pt-2 md:pt-0">
                                That’s correct! Each month’s box will feature snacks from a different country in the world. The country you’ll receive is a secret until you receive the box! The country will be revealed at the end of each month. 
                            </div>
                        </div>
                    </div>
                </div>
                                <div class="fadeIn" style="pointer-events: auto; transform: translate(0px, 0px); opacity: 1;">
                    <div class="accordion-item rounded-3xl relative overflow-hidden bg-white text-black w-full">
                        <div class="accordion-header bg-white px-6 py-5 cursor-pointer flex flex-row justify-between items-center">
                            <em class="block text-18 md:text-24 lg:pr-10 font-black transition duration-300 ease-in-out">How many snacks do I get?</em>
                            <div class="arrow">
                                <svg class="transition duration-300 ease-in-out" xmlns="http://www.w3.org/2000/svg" width="20" height="13" fill="none"><path stroke="currentColor" stroke-width="3" d="m18 2-8 8-8-8"></path></svg>
                            </div>
                        </div>
                        <div class="accordion-content">
                            <div class="text-14 pb-6 px-6 pt-2 md:pt-0">
                                Currently we offer three types of boxes: the Mini box, the Original box, and the Premium box. The Mini box contains 5+ full-size snacks, the Original box contains 10+ full-size snacks, and the Premium box contains 20+ full-size snacks. Furthermore, both the Original and Premium boxes contain drinks for no extra fee! 
                            </div>
                        </div>
                    </div>
                </div>
            

            <div class="pt-6 flex flex-col relative z-10 fadeIn lg:pb-6" style="pointer-events: auto; transform: translate(0px, 0px); opacity: 1;">
                <a href="/faqs" class="flex flex-col rounded-full text-white px-10 py-4 xl:py-6 border-purple border-2 text-purple font-bold transition duration-300 ease-in-out hover:bg-purple hover:text-white text-20 md:text-28 lg:text-32 lg:py-6 text-center">Read all questions</a>
            </div>
        </div>
    </div>
</div>    


<div class="pt-14 lg:pt-16 relative overflow-hidden fade-trigger" style="background-color:#50018F;">

    <div class="flex flex-col lg:flex-row relative sm:max-w-550 max-w-90 lg:max-w-lg xl:max-w-xl 2xl:max-w-xl mx-auto xl:gap-x-10 text-center lg:text-left xl:min-h-440">
        <svg class="absolute left-0 -bottom-10 opacity-40 pointer-events-none" xmlns="http://www.w3.org/2000/svg" width="1048" height="560" viewBox="0 0 1048 560" fill="none"><g filter="url(#a)" opacity=".5" style="mix-blend-mode:overlay"><circle cx="524" cy="386" r="256" fill="#fff"></circle></g><defs><filter id="a" width="1048" height="1048" x="0" y="-138" color-interpolation-filters="sRGB" filterUnits="userSpaceOnUse"><feflood flood-opacity="0" result="BackgroundImageFix"></feflood><feblend in="SourceGraphic" in2="BackgroundImageFix" result="shape"></feblend><fegaussianblur result="effect1_foregroundBlur_35_1231" stdDeviation="134"></fegaussianblur></filter></defs></svg>


                    <picture>
            <source media="(min-width: 300px)" srcset="/images/planet1.webp" type="image/webp">
            <img src="/page_files/planet1.png" alt="Picture" class="absolute -right-20 -top-32 max-w-140 transform rotate-180 lg:max-w-300 lg:rotate-0 lg:top-auto lg:bottom-0 lg:-right-40 xl:-right-40">
        </picture>

                    <picture>
            <source media="(min-width: 300px)" srcset="/images/planet2.webp" type="image/webp">
            <img src="/page_files/planet2.png" alt="Picture" class="absolute -right-24 -bottom-20 max-w-200 transform lg:right-auto lg:left-40 lg:bottom-auto lg:-top-1/2 lg:-translate-y-20 transform lg:max-w-900">
        </picture>
        
        <div class="w-full lg:w-1/2 order-2 lg:order-1 mt-10 lg:mt-0 fadeIn" style="pointer-events: auto; transform: translate(0px, 0px); opacity: 1;">
                            <div class="w-full mx-auto transform -translate-x-14 lg:translate-x-0 max-w-600 lg:max-w-auto">
                <picture>
                    <source media="(min-width: 768px)" srcset="/images/astro.webp" type="image/webp">
                    <source media="(min-width: 300px)" srcset="/images/astro-600x0-c-default.webp" type="image/webp">
                    <source media="(min-width: 300px)" srcset="/images/astro.webp" type="image/webp">
                    <img src="/page_files/astro.png" alt="Picture" class="js-parallax" data-parallax="{&quot;rotateZ&quot;: 3, &quot;y&quot;: 60, &quot;smoothness&quot;: 60}" style="transform:translate3d(0px, 0.059px, 0px) rotateX(0deg) rotateY(0deg) rotateZ(0.059deg) scaleX(1) scaleY(1) scaleZ(1); -webkit-transform:translate3d(0px, 0.059px, 0px) rotateX(0deg) rotateY(0deg) rotateZ(0.059deg) scaleX(1) scaleY(1) scaleZ(1); ">
                </picture>
            </div>
        </div>


        <div class="w-full lg:w-1/2 font-bold lg:pt-10 order-1 lg:order-2 relative z-10 lg:px-10 xl:px-0 lg:pb-4 xl:max-w-550">
            <div class="relative overflow-hidden"><em class="text-30 lg:text-40 xl:text-45 2xl:text-50 text-orange fadeIn block" style="pointer-events: auto; transform: translate(0px, 0px); opacity: 1;">Order Your Box Now</em></div>
            <div class="relative overflow-hidden"><p class="text-white text-20 lg:text-26 2xl:text-32 leading-140 mt-2 fadeIn" style="pointer-events: auto; transform: translate(0px, 0px); opacity: 1;">&amp; try out-of-this-world snacks from around the globe!</p></div>
            <div class="fadeIn" style="pointer-events: auto; transform: translate(0px, 0px); opacity: 1;"><a href="/subscribe" class="rounded-full bg-orange text-white px-10 py-4 text-20 xl:px-32 inline-flex font-bold transition duration-300 ease-in-out hover:bg-darkorange lg:text-24 xl:text-32 mt-6 xl:mt-10 w-full justify-center xl:w-auto lg:py-5 2xl:py-6 lg:px-10 sm:max-w-600 lg:max-w-350 xl:max-w-900">Join now</a></div>
        </div>
    </div>
</div>




<div class="mx-auto flex flex-col lg:flex-row max-w-90 w-full lg:max-w-lg py-16 lg:py-20 text-black items-center md:justify-center lg:gap-x-0 xl-gap-10 xl:justify-between lg:items-center text-center lg:text-left fade-trigger xl:max-w-1010 flex-wrap">
    <div class="w-full lg:w-auto flex flex-col fadeIn max-w-340 lg:max-w-400" style="pointer-events: auto; transform: translate(0px, 0px); opacity: 1;">
        <em class="text-24 lg:text-35 xl:text-40 font-bold block">Keep up-to date</em>
        <p class="flex flex-col pt-4 lg:pt-2 mailchimp-text">Be the first to get the latest updates from SnackVerse and get exclusive promo codes.</p>
    </div>
    <div class="w-full lg:w-auto fadeIn md:max-w-600 lg:max-w-lg" style="pointer-events: auto; transform: translate(0px, 0px); opacity: 1;">
        <form action="https://snackverse.us4.list-manage.com/subscribe/post?u=72c4c261e8f5253c5b06bb09d&amp;id=e62161c8d6&amp;f_id=00212fe9f0" method="post" id="mc-embedded-subscribe-form" name="mc-embedded-subscribe-form" class="validate flex flex-col w-auto" target="_blank" novalidate="novalidate">
            <div class="flex flex-col lg:flex-row gap-y-4 lg:gap-y-0 mt-6 lg:mt-0">
                <input type="email" name="EMAIL" placeholder="Your email address" class="lg:max-w-300 xl:max-w-md border px-10 py-4 border-grey text-16 lg:text-24 rounded-l-full rounded-r-full lg:rounded-r-0 lg:border-r-0 lg:rounded-r-none focus:border-orange focus:outline-none transition duration-300 ease-in-outrequired email" id="mce-EMAIL" required="" value="" aria-required="true">
                <input type="submit" name="subscribe" id="mc-embedded-subscribe" value="Subscribe" class="w-auto bg-orange px-10 py-4 text-20 lg:text-24 font-bold rounded-l-full lg:rounded-l-none rounded-r-full text-white hover:bg-darkorange cursor-pointer transition duration-300 ease-in-out">
            </div>
            <div id="mce-responses" class="clear foot flex flex-col w-full text-left px-10 text-orange text-14 pt-4">
                <div class="response" id="mce-error-response" style="display: none;"></div>
                <div class="response" id="mce-success-response" style="display: none;"></div>
            </div>
            <div style="position: absolute; left: -5000px;" aria-hidden="true">
                                    <input type="text" name="b_08f6def7eec8d41d04affe886_52cc97fe18" tabindex="-1" value="">
            </div>
        </form>
    </div>
</div>




    <script type="text/javascript" src="/page_files/mc-validate.js"></script><script type="text/javascript">(function($) {window.fnames = new Array(); window.ftypes = new Array();fnames[0]='EMAIL';ftypes[0]='email';fnames[1]='FNAME';ftypes[1]='text';fnames[2]='LNAME';ftypes[2]='text';fnames[3]='ADDRESS';ftypes[3]='address';fnames[4]='PHONE';ftypes[4]='phone';fnames[5]='BIRTHDAY';ftypes[5]='birthday';}(jQuery));var $mcj = jQuery.noConflict(true);</script>


    <footer class="bg-purple pt-20 pb-14 xl:pt-26 xl:pb-20 text-center md:text-left fade-trigger" style="background-color:#4D008A;">
    <div class="flex flex-row max-w-90 w-full xl:max-w-xl justify-center items-center mx-auto">
        <div class="mx-auto w-auto">
                            <a href="/" class="fadeIn inline-flex" style="pointer-events: auto; transform: translate(0px, 0px); opacity: 1;">
                <picture>
                    <source media="(min-width: 300px)" srcset="/images/logo.webp" type="image/webp">
                    <img src="/page_files/logo.png" class="logo max-w-100 md:max-w-200" alt="Picture">
                </picture>
            </a>
        </div>
    </div>
    <div class="flex flex-col md:flex-row flex-wrap max-w-90 w-full md:max-w-95 xl:max-w-1010 justify-between mt-14 md:mt-20 mx-auto text-white md:px-0 lg:px-0 footer__links gap-y-10 fadeIn" style="pointer-events: auto; transform: translate(0px, 0px); opacity: 1;">
        <div class="flex flex-col w-auto">
            <strong style="color:#944ACE;" class="block">Our Company</strong>

            <div class="flex flex-col gap-y-2 text-white text-14 lg:text-16 mt-4">
                <div><a href="/terms-of-use/" class="inline-flex ">Terms of Use</a></div>
                <div><a href="/privacy-policy/" class="inline-flex">Privacy Policy</a></div>
                <div><a href="/collaborate/" class="inline-flex">Collaborate With Us</a></div>
            </div>
        </div>

        <div class="flex flex-col w-auto">
            <strong style="color:#944ACE;" class="block">Shop</strong>

            <div class="flex flex-col gap-y-2 text-white text-14 lg:text-16 mt-4">
                <div><a href="/subscribe/" class="inline-flex">Subscribe</a></div>
                <div><a href="/gift/" class="inline-flex">Give A Gift</a></div>
                <div><a href="/refer-a-friend/" class="inline-flex">Refer A Friend</a></div>
                <div><a href="/our-previous-boxes/" class="inline-flex">Our Previous Boxes</a></div>
                <div><a href="/corporate/" class="inline-flex">Corporate Order</a></div>
            </div>
        </div>

        <div class="flex flex-col w-auto">
            <strong style="color:#944ACE;" class="block">Customer Service</strong>

            <div class="flex flex-col gap-y-2 text-white text-14 lg:text-16 mt-4">
                <div><a href="/faqs/" class="inline-flex">F.A.Q.s</a></div>
                <div><a href="/contact-us/" class="inline-flex">Contact Us</a></div>
                <div><a href="/my-account/" class="inline-flex">My Account</a></div>
                <div><a href="/order-tracking/" class="inline-flex">Order Tracking</a></div>
                <div><a href="/my-account/lost-password/" class="inline-flex">Lost Password</a></div>
            </div>
        </div>

        <div class="flex flex-col w-auto md:max-w-250 md:pr-4 pl-4 lg:pl-0">
            <small class="opacity-40 md:opacity-100 leading-160 block">
                © 2024 SnackVerse Limited.<br>All rights reserved. 128 City Road, EC1V 2NX, London, United Kingdom. Registration Number: 14307826
            </small>
        </div>
    </div>
</footer>


    </main>

                  <!-- Facebook Pixel Code -->
  <noscript>
    <img
      height="1"
      width="1"
      style="display:none"
      alt="fbpx"
      src="https://www.facebook.com/tr?id=347182682934351&ev=PageView&noscript=1"
    />
  </noscript>
  <!-- End Facebook Pixel Code -->
  <div class="page-notifications slide-out" id="gbt-custom-notification-notice">
  <div class="gbt-custom-notification-content"></div>
</div>	<script type="text/javascript">
(function () {
  var c = document.body.className;
  c = c.replace(/woocommerce-no-js/, 'woocommerce-js');
  document.body.className = c;
})();
</script>
<link rel="stylesheet" id="wc-blocks-style-css" href="/page_files/wc-blocks.css" type="text/css" media="all">
<script type="text/javascript" src="/page_files/homepage-7dd80f40a8.js" id="extra_animations-js"></script>
<script type="text/javascript" src="/page_files/index.js" id="swv-js"></script>
<script type="text/javascript" id="contact-form-7-js-extra">
/* <![CDATA[ */
var wpcf7 = {"api":{"root":"https:\/\/snackverse.com\/wp-json\/","namespace":"contact-form-7\/v1"}};
/* ]]> */
</script>
<script type="text/javascript" src="/page_files/index(2).js" id="contact-form-7-js"></script>
<script type="text/javascript" src="/page_files/sourcebuster.min.js" id="sourcebuster-js-js"></script>
<script type="text/javascript" id="wc-order-attribution-js-extra">
/* <![CDATA[ */
var wc_order_attribution = {"params":{"lifetime":1.0e-5,"session":30,"ajaxurl":"https:\/\/snackverse.com\/wp-admin\/admin-ajax.php","prefix":"wc_order_attribution_","allowTracking":true},"fields":{"source_type":"current.typ","referrer":"current_add.rf","utm_campaign":"current.cmp","utm_source":"current.src","utm_medium":"current.mdm","utm_content":"current.cnt","utm_id":"current.id","utm_term":"current.trm","session_entry":"current_add.ep","session_start_time":"current_add.fd","session_pages":"session.pgs","session_count":"udata.vst","user_agent":"udata.uag"}};
/* ]]> */
</script>
<script type="text/javascript" src="/page_files/order-attribution.min.js" id="wc-order-attribution-js"></script>
<script type="text/javascript" src="/page_files/social-icons-widget-frontend.js" id="zoom-social-icons-widget-frontend-js"></script>
<script type="text/javascript" id="getbowtied-custom-notifications-scripts-js-extra">
/* <![CDATA[ */
var gbt_cn_info = {"icon_default_class":"spk-icon spk-icon-icon-message","error_icon_class":"spk-icon-spk_error","info_icon_class":"spk-icon spk-icon-icon-message","success_icon_class":"spk-icon spk-icon-success","slide_out":"1","cartButton":"<a class=\"button wc-forward\" href=\"https:\/\/snackverse.com\/cart\/\">View basket<\/a>","addedToCartMessage":"has been added to your cart."};
/* ]]> */
</script>
<script type="text/javascript" src="/page_files/custom-notifications.min.js" id="getbowtied-custom-notifications-scripts-js"></script>
<script type="text/javascript" id="getbowtied-predictive-search-script-js-extra">
/* <![CDATA[ */
var search = {"ajax_search_endpoint":"\/?wc-ajax=search_ajax_search","action_search":"search_ajax_search","min_chars":"3","show_preloader":"1"};
/* ]]> */
</script>
<script type="text/javascript" src="/page_files/search.min.js" id="getbowtied-predictive-search-script-js"></script>
<script type="text/javascript" id="wpcf7cf-scripts-js-extra">
/* <![CDATA[ */
var wpcf7cf_global_settings = {"ajaxurl":"https:\/\/snackverse.com\/wp-admin\/admin-ajax.php"};
/* ]]> */
</script>
<script type="text/javascript" src="/page_files/scripts.js" id="wpcf7cf-scripts-js"></script>
<script type="text/javascript" src="/page_files/foundation.min.js" id="foundation-init-js-js"></script>
<script type="text/javascript" src="/page_files/isotope.pkgd.min.js" id="isotope-js-js"></script>
<script type="text/javascript" src="/page_files/fresco.min.js" id="fresco-js"></script>
<script type="text/javascript" src="/page_files/imagesloaded.min.js" id="imagesloaded-js"></script>
<script type="text/javascript" src="/page_files/easyzoom.min.js" id="easyzoom-js"></script>
<script type="text/javascript" src="/page_files/jquery.touchSwipe.min.js" id="touchswipe-js"></script>
<script type="text/javascript" src="/page_files/swiper.min.js" id="swiper-js"></script>
<script type="text/javascript" src="/page_files/select2.full.min.js" id="select2-js" defer="defer" data-wp-strategy="defer"></script>
<script type="text/javascript" src="/page_files/jquery.nanoscroller.min.js" id="nanoscroller-js"></script>
<script type="text/javascript" src="/page_files/jquery.stellar.min.js" id="stellar-js"></script>
<script type="text/javascript" src="/page_files/velocity.min.js" id="velocity-js"></script>
<script type="text/javascript" src="/page_files/info-box.min.js" id="ultimate-vc-addons-info_box_js-js"></script>
<script type="text/javascript" src="/page_files/js_composer_front.min.js" id="wpb_composer_front_js-js"></script>
<script type="text/javascript" id="shopkeeper-scripts-dist-js-extra">
/* <![CDATA[ */
var getbowtied_scripts_vars = {"ajax_load_more_locale":"Load More Items","ajax_loading_locale":"Loading","ajax_no_more_items_locale":"No more items available.","smooth_transition":"","pagination_blog":"infinite_scroll","layout_blog":"layout-3","shop_pagination_type":"infinite_scroll","option_minicart":"2","option_minicart_open":"2","catalog_mode":"","product_lightbox":"1","product_gallery_zoom":"1","mobile_product_columns":"2","sticky_header":"","back_to_top_button":"","ajax_url":"\/wp-admin\/admin-ajax.php"};
/* ]]> */
</script>
<script type="text/javascript" src="/page_files/scripts.min.js" id="shopkeeper-scripts-dist-js"></script>
<script defer="" type="text/javascript" src="/page_files/e-202604.js" id="jetpack-stats-js"></script>
<script type="text/javascript" id="jetpack-stats-js-after">
/* <![CDATA[ */
_stq = window._stq || [];
_stq.push([ "view", {v:'ext',blog:'222488659',post:'2950',tz:'0',srv:'snackverse.com',j:'1:12.8.1'} ]);
_stq.push([ "clickTrackerInit", "222488659", "2950" ]);
/* ]]> */
</script>
<script type="text/javascript" src="/page_files/isotope.pkgd(1).min.js" id="gbt-portfolio-isotope-js"></script>
<script type="text/javascript" src="/page_files/portfolio.js" id="gbt-portfolio-scripts-js"></script>
<script type="text/javascript" src="/page_files/viewport-units-buggyfill.min.js" id="viewport-units-buggyfill-js"></script>
<script type="text/javascript" id="tiktok-pixel-tracking-handle-header-js-after">
/* <![CDATA[ */
!function (w, d, t) {
 w.TiktokAnalyticsObject=t;var ttq=w[t]=w[t]||[];ttq.methods=["page","track","identify","instances","debug","on","off","once","ready","alias","group","enableCookie","disableCookie"],ttq.setAndDefer=function(t,e){t[e]=function(){t.push([e].concat(Array.prototype.slice.call(arguments,0)))}};for(var i=0;i<ttq.methods.length;i++)ttq.setAndDefer(ttq,ttq.methods[i]);ttq.instance=function(t){for(var e=ttq._i[t]||[],n=0;n<ttq.methods.length;n++)ttq.setAndDefer(e,ttq.methods[n]);return e},ttq.load=function(e,n){var i="https://analytics.tiktok.com/i18n/pixel/events.js";ttq._i=ttq._i||{},ttq._i[e]=[],ttq._i[e]._u=i,ttq._t=ttq._t||{},ttq._t[e]=+new Date,ttq._o=ttq._o||{},ttq._o[e]=n||{},ttq._partner=ttq._partner||"WooCommerce";var o=document.createElement("script");o.type="text/javascript",o.async=!0,o.src=i+"?sdkid="+e+"&lib="+t;var a=document.getElementsByTagName("script")[0];a.parentNode.insertBefore(o,a)};
 ttq.load('COTQCRJC77UF0ROSM4Q0');
 ttq.page();
 }(window, document, 'ttq');
/* ]]> */
</script>

    

      <script defer="" src="/page_files/vcd15cbe7772f49c399c6a5babf22c1241717689176015" integrity="sha512-ZpsOmlRQV6y907TI0dKBHq9Md29nnaEIPlkf84rnaERnq6zvWvPUqr2ft8M1aS28oN72PdrCzSjY4U6VaAw1EQ==" data-cf-beacon="{&quot;version&quot;:&quot;2024.11.0&quot;,&quot;token&quot;:&quot;dee2353d432b4ae2be7967dea266fd7c&quot;,&quot;server_timing&quot;:{&quot;name&quot;:{&quot;cfCacheStatus&quot;:true,&quot;cfEdge&quot;:true,&quot;cfExtPri&quot;:true,&quot;cfL4&quot;:true,&quot;cfOrigin&quot;:true,&quot;cfSpeedBrain&quot;:true},&quot;location_startswith&quot;:null}}" crossorigin="anonymous"></script>




<div class="wc-facebook-pixel-event-placeholder">
`;