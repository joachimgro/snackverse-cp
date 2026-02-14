export const subscribeHtml = `
<!doctype html>
<html lang="en-GB">

<head>
    <link rel='stylesheet' id='engine-css'
        href='/wp-content/themes/shopkeeper/dist/assets/css/app-f30f2585d9.css'
        type='text/css' media='all' />
    <link rel='preload' as='font' id='wpzoom-social-icons-font-academicons-woff2-css'
        href='/wp-content/plugins/social-icons-widget-by-wpzoom/assets/font/academicons.woff2?v=1.9.2'
        type='font/woff2' crossorigin />
    <link rel='preload' as='font' id='wpzoom-social-icons-font-fontawesome-3-woff2-css'
        href='/wp-content/plugins/social-icons-widget-by-wpzoom/assets/font/fontawesome-webfont.woff2?v=4.7.0'
        type='font/woff2' crossorigin />
    <link rel='preload' as='font' id='wpzoom-social-icons-font-genericons-woff-css'
        href='/wp-content/plugins/social-icons-widget-by-wpzoom/assets/font/Genericons.woff'
        type='font/woff' crossorigin />
    <link rel='preload' as='font' id='wpzoom-social-icons-font-socicon-woff2-css'
        href='/wp-content/plugins/social-icons-widget-by-wpzoom/assets/font/socicon.woff2?v=4.2.14'
        type='font/woff2' crossorigin />
    <link rel='stylesheet' id='font-awesome-official-v4shim-css'
        href='https://use.fontawesome.com/releases/v5.10.2/css/v4-shims.css' type='text/css' media='all'
        integrity="sha384-updXts+unDswrMsYxLc5R+HfSmF8CuEIOe48Rj3DoVoPUIImOT1fs26H/tr/H9gC" crossorigin="anonymous" />
    
    <script type="text/template"
        id="tmpl-unavailable-variation-template"><p role="alert">Sorry, this product is unavailable. Please choose a different combination.</p></script>
    <script type="text/javascript" src="/wp-includes/js/jquery/jquery.min.js"
        id="jquery-core-js"></script>
    <script data-optimized="1" type="text/javascript"
        src="/wp-content/litespeed/js/da954e522ecdc9652ba4d9ca582193f2.js?ver=193f2"
        id="jquery-migrate-js"></script>
    <script data-optimized="1" type="text/javascript"
        src="/wp-content/litespeed/js/d6a316de24869b34a2a9d7973a9cfc80.js?ver=cfc80"
        id="gbt_18_sk_slider_script-js"></script>
    <script data-optimized="1" type="text/javascript"
        src="/wp-content/litespeed/js/782b839a5b11c8b973cca4b10f160cd8.js?ver=60cd8"
        id="wc-jquery-blockui-js" defer="defer" data-wp-strategy="defer"></script>
    <script type="text/javascript" id="wc-add-to-cart-js-extra">/*  */
        var wc_add_to_cart_params = { "ajax_url": "\/wp-admin\/admin-ajax.php", "wc_ajax_url": "\/?wc-ajax=%%endpoint%%", "i18n_view_cart": "View basket", "cart_url": "https:\/\/staging.snackverse.com\/checkout\/", "is_cart": "", "cart_redirect_after_add": "no" };
        /*  */</script>
    <script data-optimized="1" type="text/javascript"
        src="/wp-content/litespeed/js/5e744c8ad73eff98152a13cb2634173d.js?ver=4173d"
        id="wc-add-to-cart-js" defer="defer" data-wp-strategy="defer"></script>
    <script data-optimized="1" type="text/javascript"
        src="/wp-content/litespeed/js/45de1a29174020ad9ddb92b86d6c165f.js?ver=c165f"
        id="wc-js-cookie-js" defer="defer" data-wp-strategy="defer"></script>
    <script type="text/javascript" id="woocommerce-js-extra">/*  */
        var woocommerce_params = { "ajax_url": "\/wp-admin\/admin-ajax.php", "wc_ajax_url": "\/?wc-ajax=%%endpoint%%", "i18n_password_show": "Show password", "i18n_password_hide": "Hide password" };
        /*  */</script>
    <script data-optimized="1" type="text/javascript"
        src="/wp-content/litespeed/js/9d23429c23510acbe56d8c989c94c514.js?ver=4c514"
        id="woocommerce-js" defer="defer" data-wp-strategy="defer"></script>
    <script type="text/javascript"
        src="/wp-content/plugins/duracelltomi-google-tag-manager/js/gtm4wp-woocommerce-enhanced.js"
        id="gtm4wp-woocommerce-enhanced-js"></script>
    <script data-optimized="1" type="text/javascript"
        src="/wp-content/litespeed/js/e740bb8d4b4d3161bffcb2360864fb78.js?ver=4fb78"
        id="underscore-js"></script>
    <script type="text/javascript" id="wp-util-js-extra">/*  */
        var _wpUtilSettings = { "ajax": { "url": "\/wp-admin\/admin-ajax.php" } };
        /*  */</script>
    <script data-optimized="1" type="text/javascript"
        src="/wp-content/litespeed/js/af5e0792f7b1bbd3f4b9dfa0c25b8f5d.js?ver=b8f5d"
        id="wp-util-js"></script>
    <script type="text/javascript" id="wc-add-to-cart-variation-js-extra">/*  */
        var wc_add_to_cart_variation_params = { "wc_ajax_url": "\/?wc-ajax=%%endpoint%%", "i18n_no_matching_variations_text": "Sorry, no products matched your selection. Please choose a different combination.", "i18n_make_a_selection_text": "Please select some product options before adding this product to your basket.", "i18n_unavailable_text": "Sorry, this product is unavailable. Please choose a different combination.", "i18n_reset_alert_text": "Your selection has been reset. Please select some product options before adding this product to your cart." };
        /*  */</script>
    <script data-optimized="1" type="text/javascript"
        src="/wp-content/litespeed/js/d4e10958c0a093a429214589dbde7683.js?ver=e7683"
        id="wc-add-to-cart-variation-js" defer="defer" data-wp-strategy="defer"></script>
    <script type="text/javascript"
        src="https://cdnjs.cloudflare.com/ajax/libs/jquery-modal/0.9.1/jquery.modal.min.js?ver=1"
        id="jquery.modal.js-js"></script>
    <script type="text/javascript" id="enr-frontend-js-extra">/*  */
        var enr_frontend_params = { "ajax_url": "https:\/\/staging.snackverse.com\/wp-admin\/admin-ajax.php", "is_switch_request": "", "subscribe_now_nonce": "7ef1f84af6", "subscribe_now_button_text": "Sign up now", "single_add_to_cart_text": "Add to cart", "hide_variable_limited_notice": "" };
        /*  */</script>
    <script data-optimized="1" type="text/javascript"
        src="/wp-content/litespeed/js/47d6568f132bee4deadebe16666204b6.js?ver=204b6"
        id="enr-frontend-js"></script>
    <script data-optimized="1" type="text/javascript"
        src="/wp-content/litespeed/js/4af5f516ac71a12462decee9b1673ca4.js?ver=73ca4"
        id="wc-select2-js" defer="defer" data-wp-strategy="defer"></script>
    <script type="text/javascript" id="wc-settings-dep-in-header-js-after">/*  */
        console.warn("Scripts that have a dependency on [wc-settings, wc-blocks-checkout] must be loaded in the footer, automatewoo-marketing-optin-editor-script was registered to load in the header, but has been switched to load in the footer instead. See https://github.com/woocommerce/woocommerce-gutenberg-products-block/pull/5059");
        /*  */</script>
    <script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.9.1/gsap.min.js"
        id="gsap-js"></script>
    <script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/gsap/2.0.2/TweenMax.min.js"
        id="TweenMax-js"></script>
    <script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/gsap/2.0.2/TimelineMax.min.js"
        id="TimelineMax-js"></script>
    <script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.6.0/jquery.min.js"
        id="jQuery-js"></script>
    <script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.9.0/slick.min.js"
        id="slick-js"></script>
    <script data-optimized="1" type="text/javascript"
        src="/wp-content/litespeed/js/447277c1bbee59282cbc75606f109320.js?ver=09320"
        id="scripts-js"></script>
    <link rel="https://api.w.org/" href="/wp-json/" />
    <link rel="alternate" title="JSON" type="application/json"
        href="/wp-json/wp/v2/pages/8613" />
    <link rel="alternate" title="oEmbed (JSON)" type="application/json+oembed"
        href="/wp-json/oembed/1.0/embed?url=https%3A%2F%2Fstaging.snackverse.com%2Fsubscribe%2F" />
    <link rel="alternate" title="oEmbed (XML)" type="text/xml+oembed"
        href="/wp-json/oembed/1.0/embed?url=https%3A%2F%2Fstaging.snackverse.com%2Fsubscribe%2F&#038;format=xml" />
    <script>(function (w, d, s, l, i) {
            w[l] = w[l] || []; w[l].push({
                'gtm.start':
                    new Date().getTime(), event: 'gtm.js'
            }); var f = d.getElementsByTagName(s)[0],
                j = d.createElement(s), dl = l != 'dataLayer' ? '&l=' + l : ''; j.async = true; j.src =
                    'https://www.googletagmanager.com/gtm.js?id=' + i + dl; f.parentNode.insertBefore(j, f);
        })(window, document, 'script', 'dataLayer', 'GTM-N6W8ZJP');</script>
    <script data-cfasync="false" data-pagespeed-no-defer type="text/javascript">var dataLayer_content = { "pagePostType": "page", "pagePostType2": "single-page", "pagePostAuthor": "Asad Zeeshan" };
        dataLayer.push(dataLayer_content);</script>
    <script>console.warn && console.warn("[GTM4WP] Google Tag Manager container code placement set to OFF !!!");
        console.warn && console.warn("[GTM4WP] Data layer codes are active but GTM container must be loaded using custom coding !!!");</script>
    <meta name="google-site-verification" content="RovU-W3pYF6SclIK-VCkPxQUsaqsMYbZuhs44RwuHac" />
    <noscript>
        <style>
            .woocommerce-product-gallery {
                opacity: 1 !important;
            }
        </style>
    </noscript>
    <script type="text/javascript">!function (f, b, e, v, n, t, s) {
            if (f.fbq) return; n = f.fbq = function () {
                n.callMethod ?
                n.callMethod.apply(n, arguments) : n.queue.push(arguments)
            }; if (!f._fbq) f._fbq = n;
            n.push = n; n.loaded = !0; n.version = '2.0'; n.queue = []; t = b.createElement(e); t.async = !0;
            t.src = v; s = b.getElementsByTagName(e)[0]; s.parentNode.insertBefore(t, s)
        }(window,
            document, 'script', 'https://connect.facebook.net/en_US/fbevents.js');</script>
    <script type="text/javascript">fbq('init', '347182682934351', {}, {
            "agent": "woocommerce-10.3.5-3.1.5"
        });

        fbq('track', 'PageView', {
            "source": "woocommerce",
            "version": "10.3.5",
            "pluginVersion": "3.1.5"
        });

        document.addEventListener('DOMContentLoaded', function () {
            jQuery && jQuery(function ($) {
                // Insert placeholder for events injected when a product is added to the cart through AJAX.
                $(document.body).append('<div class=\"wc-facebook-pixel-event-placeholder\"></div>');
            });
        }, false);</script>
    <meta name="generator" content="Powered by WPBakery Page Builder - drag and drop page builder for WordPress." />
    <link rel="icon" href="/wp-content/uploads/2022/10/cropped-PNG-2-32x32.png"
        sizes="32x32" />
    <link rel="icon" href="/wp-content/uploads/2022/10/cropped-PNG-2-192x192.png"
        sizes="192x192" />
    <link rel="apple-touch-icon"
        href="/wp-content/uploads/2022/10/cropped-PNG-2-180x180.png" />
    <meta name="msapplication-TileImage"
        content="/wp-content/uploads/2022/10/cropped-PNG-2-270x270.png" />
    <style type="text/css" id="wp-custom-css">
        #wc-stripe-payment-request-button-separator,
        #wc-stripe-payment-request-wrapper {
            display: none !important;
        }


        .site-footer-copyright-area {
            display: none
        }

        .woocommerce-store-notice__dismiss-link {
            border: 1px solid #000 !important;
        }

        #site-footer.on_screen {
            padding-bottom: 0px
        }

        .order-tracking-container section.woocommerce-order-details {
            width: 100% !important;
            padding: 0;
        }

        .order-tracking-container table.woocommerce-table.woocommerce-table--order-details.shop_table.order_details {
            margin-bottom: 3rem !important;
        }

        .product_meta {
            display: none;
        }

        .product_socials_wrapper,
        .product_navigation {
            display: none;
        }

        footer ul li a {
            font-weight: normal !important;
        }

        .main-navigation ul li:hover>a {
            color: #f828f9;
            opacity: 1;
        }

        .woocommerce-product-details__short-description {
            margin-bottom: 0;
        }

        .site-footer-widget-area {
            margin-bottom: 0;
        }

        .site-footer-widget-area>.row {
            border-bottom: 0;
        }

        .ppom-wrapper .form-check-label {
            padding-left: 0 !important;
        }

        .ppom-wrapper .form-check {
            display: inline-block !important;
            margin-right: 0.75rem !important;
        }

        .woocommerce-variation-add-to-cart {
            margin-top: -15px;
        }

        #zoom-social-icons-widget-2 p {
            font-size: 13.6px;
            margin-bottom: 9px
        }

        div.woocommerce-shipping-fields {
            margin-top: 5px;
        }

        p.mc4wp-checkbox-woocommerce {
            padding-top: 20px
        }

        div.form-row.place-order {
            margin-top: -23px
        }

        /* Change FAQ toggle color */
        .vc_toggle_color_sky.vc_toggle_simple .vc_toggle_icon::after,
        .vc_toggle_color_sky.vc_toggle_simple .vc_toggle_icon::before {
            background-color: #f828f9;
            /* Change the color to whatever you want */
        }

        /* Remove ZigZag */
        .cart-collaterals:before {
            display: none !important;
        }

        /* Remove ZigZag */
        .cart-collaterals:after {
            display: none !important;
        }

        .payment_box.payment_method_stripe p {
            padding: 0 !important;
        }

        ul.wc_payment_methods.payment_methods.methods fieldset#wc-stripe-cc-form {
            margin: 0 !important;
        }

        div#order_review:before {
            display: none;
        }

        div#order_review:after {
            display: none;
        }

        tr.cart-subtotal.recurring-total th,
        tr.cart-subtotal.recurring-total td {
            padding-top: 1.1rem !important;
        }

        .woocommerce-checkout .col2-set .col-2 {
            margin-top: 0;
        }

        .current-menu-item a {
            color: #f828f9;

        }

        #site-footer a:hover {
            color: #f828f9;
            opacity: 1;
        }

        site-tools li:hover a,
        .site-tools li:hover span {
            color: #f828f9;
            opacity: 1;
        }

        .site-tools ul li:hover {
            opacity: 1 !important;
        }

        .site-tools a:hover {
            opacity: 1 !important;
        }

        @media only screen and (max-width: 800px) {
            .vc_general.vc_tta.vc_tta-tabs.vc_tta-o-shape-group.vc_tta-o-no-fill.vc_tta-tabs-position-top.vc_tta-pageable {
                height: 69px;
            }
        }

        @media screen and (min-width: 768px) {
            .product_layout_2 .product_content_wrapper .product_infos form.cart #wc-stripe-payment-request-button-separator+.single_add_to_cart_button {
                width: auto !important;
            }
        }

        .woocommerce div.product .woocommerce-tabs ul.tabs li.active,
        .woocommerce #content div.product .woocommerce-tabs ul.tabs li.active,
        .woocommerce-page div.product .woocommerce-tabs ul.tabs li.active,
        .woocommerce-page #content div.product .woocommerce-tabs ul.tabs li.active {
            margin: 0 !important;
        }

        #additional_details_field {
            padding-bottom: 0px;
            padding-top: 10px
        }

        #order_comments_field {
            padding-top: 0px
        }

        @media only screen and (max-width: 640px) {

            #ship-to-different-address {
                margin-bottom: 0
            }

        }

        section.woocommerce-order-details {
            padding: 0;
        }

        section.woocommerce-customer-details {
            padding: 0;
        }

        table.woocommerce-table.woocommerce-table--order-details.shop_table.order_details+header,
        table.shop_table.order_details+header,
        table.shop_table.subscription_details+h2 {
            padding-top: 4rem;
        }

        p.comment-notes {
            text-align: left;
        }

        nav.woocommerce-breadcrumb {
            display: none;
        }

        /* Apply coupon button on checkout */
        @media (min-width: 456px) {
            .large-12 .entry-content .woocommerce .checkout_coupon_box .row .checkout_coupon button[type=submit] {
                opacity: unset !important;
                background-color: #ffc024 !important;
                min-width: 30%;
                color: #fff !important;
            }
        }

        @media (max-width: 456px) {
            .large-12 .entry-content .woocommerce .checkout_coupon_box .row .checkout_coupon button[type=submit] {
                opacity: unset !important;
                background-color: #ffc024 !important;
                min-width: 30%;
                color: #fff !important;
                position: relative !important;
                width: 100% !important
            }
        }

        .hidden {
            visibility: unset !important;
        }
    </style>
    <style type="text/css" data-type="vc_shortcodes-custom-css">
        .vc_custom_1586059258391 {
            margin-top: 40px !important;
            margin-bottom: 55px !important;
            padding-bottom: 0px !important;
        }

        .vc_custom_1698347294217 {
            margin-top: 0px !important;
            margin-bottom: 0px !important;
            padding-top: 5px !important;
            padding-bottom: 0px !important;
        }

        .vc_custom_1586059268030 {
            margin-top: 0px !important;
            margin-bottom: 10px !important;
            padding-top: 0px !important;
            padding-bottom: 0px !important;
        }
    </style><noscript>
        <style>
            .wpb_animate_when_almost_visible {
                opacity: 1;
            }
        </style>
    </noscript>
    <link rel="apple-touch-icon" sizes="180x180"
        href="/wp-content/themes/shopkeeper/favicons/apple-touch-icon.png">
    <link rel="icon" type="image/png" sizes="32x32"
        href="/wp-content/themes/shopkeeper/favicons/favicon-32x32.png">
    <link rel="icon" type="image/png" sizes="16x16"
        href="/wp-content/themes/shopkeeper/favicons/favicon-16x16.png">
    <link rel="manifest" href="/wp-content/themes/shopkeeper/favicons/site.webmanifest">
    <link rel="mask-icon"
        href="/wp-content/themes/shopkeeper/favicons/safari-pinned-tab.svg"
        color="#ba271a">
    
</head>

<body
    class="en_GB wp-singular page-template page-template-page-templates page-template-subscribe page-template-page-templatessubscribe-php page page-id-8613 wp-embed-responsive wp-theme-shopkeeper theme-shopkeeper woocommerce-no-js gbt_custom_notif wpb-js-composer js-comp-ver-6.2.0 vc_responsive font-sans ">
    <main class="block overflow-hidden">
        <style>
            .bg {
                background-image: url('/wp-content/themes/shopkeeper/images/bang_bg.png');
                background-color: #560299;
                background-size: cover;
                background-position: center;
                background-repeat: no-repeat;

                @media only screen and (max-width: 1025px) {
                    background-size: auto 300%;
                }
            }
        </style>
        <div class="bg overflow-hidden relative">
            <style>
                .hero {
                    background-size: 120% 80%;
                    background-position: center 0%;
                    background-repeat: no-repeat;
                }

                @media only screen and (min-width: 500px) {
                    .hero {
                        min-height: 300px;
                    }
                }

                @media only screen and (min-width: 768px) {
                    .hero {
                        min-height: 380px;
                    }
                }

                @media only screen and (min-width: 1025px) {
                    .hero {
                        background-size: 110% 120%;
                        background-position: 50% 20%;
                    }
                }

                @media only screen and (min-width: 1600px) {
                    .hero {
                        max-height: auto;
                        background-size: 140% 120%;
                        background-position: 50% 0%;
                    }
                }
            </style>
            
            <div
                class="flex flex-col flex-wrap md:flex-row mx-auto max-w-90 md:max-w-md md:px-6 lg:px-0 lg:max-w-xl w-full lg:gap-x-4 relative mt-6 lg:mt-0">
                <div
                    class="fade-trigger flex flex-col-reverse flex-wrap lg:flex-row mx-auto max-w-full lg:max-w-xl w-full lg:flex-wrap lg:flex-row relative md:justify-center md:items-center lg:items-start gap-y-4 md:gap-y-14 flex-wrap">
                    <div
                        class="fadeIn w-full max-w-400 mx-auto md:mx-0 lg:max-w-full lg:w-1/3 px-2 lg:px-4 lg:h-full lg:flex lg:flex-col lg:flex-1 group box_1">
                        <img src="/wp-content/themes/shopkeeper/images/sun--white.png"
                            alt="i"
                            class="hidden lg:block max-w-300 absolute right-5 top-0 transform -translate-y-20 translate-x-20 lg:scale-95 xl:scale-100"
                            style="z-index:-1;" />
                        <div
                            class="w-full border-3 border-white rounded-40 lg:rounded-60 px-0 lg:px-0 mb-10 lg:mb-20 relative bg-darkpurple flex flex-col flex-1 overflow-hidden">
                            <img src="/wp-content/themes/shopkeeper/images/sun_white_mobile.png"
                                alt="i"
                                class="lg:hidden max-w-full w-full absolute right-0 left-0 -top-2 pointer-events-none z-10" /><img
                                src="/wp-content/themes/shopkeeper/images/sb_radialbg.png"
                                alt="Snacks"
                                class="hidden lg:block object-cover w-full absolute left-0 -top-20 right-0 bottom-0 opacity-10" />
                            <div
                                class="flex flex-col px-0 pb-0 flex-0 text-white relative z-10 pt-14 lg:pt-8 relative overflex-hidden">
                                <em class="block font-bold text-white text-30 text-center">Mini Box</em>
                                <em
                                    class="w-full px-6 text-16 md:text-16 leading-140 text-white opacity-50 lg:px-0 xl:px-4 text-center mb-1">A
                                    tiny taste of the world</em>
                                <div
                                    class="flex flex-col text-center items-center w-full items-center flex flex-col jutify-center border-b border-white border-opacity-50 relative overflow-hidden h-240 lg:h-220 xl:h-240 subscription__snack_fix">
                                    <picture
                                        class="max-w-110 fadeIn absolute right-4 lg:right-2 xl:right-5 2xl:right-6 bottom-3 lg:bottom-0 xl:bottom-1 z-20 transform scale-110 qty">
                                        <source media="(min-width: 300px)"
                                            srcset="/wp-content/themes/shopkeeper/images/5_snacks.webp"
                                            type="image/webp">
                                        <img src="/wp-content/themes/shopkeeper/images/5_snacks.png"
                                            alt="Snacks" class="group-hover:-translate-y-5 duration-500 ease-in" />
                                    </picture>
                                    <picture
                                        class="transform -translate-y-5 lg:-translate-y-2 xl:-translate-y-8 lg:group-hover:-translate-y-1 xl:group-hover:-translate-y-2 transition duration-500 ease-in-out snacks">
                                        <source media="(min-width: 300px)"
                                            srcset="/wp-content/themes/shopkeeper/images/box-mini-2024-600x0-c-default.webp"
                                            type="image/webp">
                                        <img src="/wp-content/themes/shopkeeper/images/box-mini-2024.png"
                                            alt="Snacks"
                                            class="w-full fadeIn transform -rotate-12 scale-90 lg:scale-95 xl:scale-90" />
                                    </picture>
                                </div>
                            </div>
                            <div
                                class="flex flex-col pb-10 pt-10 lg:pt-8 xl:pt-10 flex-1 text-white relative z-10 px-6 lg:px-4 xl:px-8 2xl:px-10 items-start mt-auto">
                                <div class="cms_bullet_list flex flex-col flex-1">
                                    <ul>
                                        <li><strong>5+</strong> full size & unique snacks</li>
                                        <li class="cross">No drink included in this box</li>
                                        <li>Try a new country every month</li>
                                        <li>No duplicated snacks</li>
                                        <li>Information guide included</li>
                                        <li>Shipping is free for addresses in the United Kingdom</li>
                                    </ul>
                                </div><em
                                    class="block pb-4 pt-4 md:pb-6 text-40 lg:text-45 text-center w-full mt-auto">£<strong>7.99</strong><span
                                        class="text-30">/mo</span></em>
                                <a href="/product/the-mini-box/"
                                    class="mt-auto rounded-full bg-orange text-white px-0 py-4 text-20 lg:text-20 w-full md:max-w-300 mx-auto font-bold flex flex-col text-center lg:py-3 transition duration-300 ease-in-out hover:bg-purple w-full">Select</a><small
                                    class="text-white opacity-50 text-14 md:text-15 leading-140 block text-center mt-4 md:mt-4 w-full">Cancel
                                    subscription at anytime</small>
                            </div>
                        </div>
                    </div>
                    <div
                        class="fadeIn w-full max-w-400 mx-auto md:mx-0 lg:max-w-full lg:w-1/3 px-2 lg:px-4 lg:h-full lg:flex lg:flex-col lg:flex-1 group box_2">
                        <img src="/wp-content/themes/shopkeeper/images/sun--orange.png"
                            alt="i"
                            class="hidden lg:block max-w-480 absolute right-3 top-0 transform -translate-y-36 translate-x-28 lg:scale-95 xl:scale-100"
                            style="z-index:-1;" />
                        <img src="/wp-content/themes/shopkeeper/images/best_seller.svg"
                            alt="i"
                            class="max-w-150 absolute left-1/2 transform -translate-x-1/2 -translate-y-10 z-30 group-hover:-rotate-2 transition duration-500" />
                        <div
                            class="w-full border-3 border-darkorange rounded-40 lg:rounded-60 px-0 lg:px-0 mb-10 lg:mb-20 relative bg-darkpurple flex flex-col flex-1 overflow-hidden">
                            <img src="/wp-content/themes/shopkeeper/images/sun_orange_mobile.png"
                                alt="i"
                                class="lg:hidden max-w-full w-full absolute right-0 left-0 -top-6 pointer-events-none z-10" /><img
                                src="/wp-content/themes/shopkeeper/images/sb_radialbg.png"
                                alt="Snacks"
                                class="hidden lg:block object-cover w-full absolute left-0 -top-20 right-0 bottom-0 opacity-10" />
                            <div
                                class="flex flex-col px-0 pb-0 flex-0 text-white relative z-10 pt-14 lg:pt-8 relative overflex-hidden">
                                <em class="block font-bold text-white text-30 text-center">Original Box</em>
                                <em
                                    class="w-full px-6 text-16 md:text-16 leading-140 text-white opacity-50 lg:px-0 xl:px-4 text-center mb-1">The
                                    perfect amount of snacks</em>
                                <div
                                    class="flex flex-col text-center items-center w-full items-center flex flex-col jutify-center border-b border-white border-opacity-50 relative overflow-hidden h-240 lg:h-220 xl:h-240 subscription__snack_fix">
                                    <picture
                                        class="max-w-110 fadeIn absolute right-4 lg:right-2 xl:right-5 2xl:right-6 bottom-3 lg:bottom-0 xl:bottom-1 z-20 transform scale-110 qty">
                                        <source media="(min-width: 300px)"
                                            srcset="/wp-content/themes/shopkeeper/images/10_snacks.webp"
                                            type="image/webp">
                                        <img src="/wp-content/themes/shopkeeper/images/10_snacks.png"
                                            alt="Snacks" class="group-hover:-translate-y-5 duration-500 ease-in" />
                                    </picture>
                                    <picture
                                        class="transform -translate-y-5 lg:-translate-y-2 xl:-translate-y-7 lg:group-hover:-translate-y-1 xl:group-hover:-translate-y-2 transition duration-500 ease-in-out snacks">
                                        <source media="(min-width: 300px)"
                                            srcset="/wp-content/themes/shopkeeper/images/box-original-2024-600x0-c-default.webp"
                                            type="image/webp">
                                        <img src="/wp-content/themes/shopkeeper/images/box-original-2024.png"
                                            alt="Snacks"
                                            class="w-full fadeIn transform -rotate-12 scale-90 lg:scale-95 xl:scale-90" />
                                    </picture>
                                </div>
                            </div>
                            <div
                                class="flex flex-col pb-10 pt-10 lg:pt-8 xl:pt-10 flex-1 text-white relative z-10 px-6 lg:px-4 xl:px-8 2xl:px-10 items-start mt-auto">
                                <div class="cms_bullet_list flex flex-col flex-1">
                                    <ul>
                                        <li><strong>10+</strong> full size & unique snacks</li>
                                        <li><strong>1 Drink</strong> included in every box</li>
                                        <li>Try a new country every month</li>
                                        <li>No duplicated snacks</li>
                                        <li>Information guide included</li>
                                        <li>Shipping is free for addresses in the United Kingdom</li>
                                    </ul>
                                </div><em
                                    class="block pb-4 pt-4 md:pb-6 text-40 lg:text-45 text-center w-full mt-auto">£<strong>13.99</strong><span
                                        class="text-30">/mo</span></em>
                                <a href="/product/the-original-box/"
                                    class="mt-auto rounded-full bg-orange text-white px-0 py-4 text-20 lg:text-20 w-full md:max-w-300 mx-auto font-bold flex flex-col text-center lg:py-3 transition duration-300 ease-in-out hover:bg-purple w-full">Select</a><small
                                    class="text-white opacity-50 text-14 md:text-15 leading-140 block text-center mt-4 md:mt-4 w-full">Cancel
                                    subscription at anytime</small>
                            </div>
                        </div>
                    </div>
                    <div
                        class="fadeIn w-full max-w-400 mx-auto md:mx-0 lg:max-w-full lg:w-1/3 px-2 lg:px-4 lg:h-full lg:flex lg:flex-col lg:flex-1 group box_3">
                        <img src="/wp-content/themes/shopkeeper/images/sun--lightorange.png"
                            alt="i"
                            class="hidden lg:block max-w-600 absolute right-10 lg:right-14 xl:right-10 top-0 transform -translate-y-1/3 translate-x-1/3 lg:scale-95 xl:scale-125"
                            style="z-index:-1;" />
                        <img src="/wp-content/themes/shopkeeper/images/best_value.svg"
                            alt="i"
                            class="max-w-150 absolute left-1/2 transform -translate-x-1/2 -translate-y-10 z-30 group-hover:rotate-2 transition duration-500" />
                        <div
                            class="w-full border-3 border-orange rounded-40 lg:rounded-60 px-0 lg:px-0 mb-10 lg:mb-20 relative bg-darkpurple flex flex-col flex-1 overflow-hidden">
                            <img src="/wp-content/themes/shopkeeper/images/sun_darker_orange_mobile.png"
                                alt="i"
                                class="lg:hidden max-w-full w-full absolute right-0 left-0 -top-6 pointer-events-none z-10" /><img
                                src="/wp-content/themes/shopkeeper/images/sb_radialbg.png"
                                alt="Snacks"
                                class="hidden lg:block object-cover w-full absolute left-0 -top-20 right-0 bottom-0 opacity-10" />
                            <div
                                class="flex flex-col px-0 pb-0 flex-0 text-white relative z-10 pt-14 lg:pt-8 relative overflex-hidden">
                                <em class="block font-bold text-white text-30 text-center">Premium Box</em>
                                <em
                                    class="w-full px-6 text-16 md:text-16 leading-140 text-white opacity-50 lg:px-0 xl:px-4 text-center mb-1">The
                                    ultimate snacking experience!</em>
                                <div
                                    class="flex flex-col text-center items-center w-full items-center flex flex-col jutify-center border-b border-white border-opacity-50 relative overflow-hidden h-240 lg:h-220 xl:h-240 subscription__snack_fix">
                                    <picture
                                        class="max-w-110 fadeIn absolute right-4 lg:right-2 xl:right-5 2xl:right-6 bottom-3 lg:bottom-0 xl:bottom-1 z-20 transform scale-110 qty">
                                        <source media="(min-width: 300px)"
                                            srcset="/wp-content/themes/shopkeeper/images/20_snacks.webp"
                                            type="image/webp">
                                        <img src="/wp-content/themes/shopkeeper/images/20_snacks.png"
                                            alt="Snacks" class="group-hover:-translate-y-5 duration-500 ease-in" />
                                    </picture>
                                    <picture
                                        class="transform -translate-y-5 lg:-translate-y-2 xl:-translate-y-6 lg:group-hover:-translate-y-1 xl:group-hover:-translate-y-2 transition duration-500 ease-in-out snacks">
                                        <source media="(min-width: 300px)"
                                            srcset="/wp-content/themes/shopkeeper/images/box-premium-2024-600x0-c-default.webp"
                                            type="image/webp">
                                        <img src="/wp-content/themes/shopkeeper/images/box-premium-2024.png"
                                            alt="Snacks"
                                            class="w-full fadeIn transform -rotate-12 scale-90 lg:scale-95 xl:scale-90" />
                                    </picture>
                                </div>
                            </div>
                            <div
                                class="flex flex-col pb-10 pt-10 lg:pt-8 xl:pt-10 flex-1 text-white relative z-10 px-6 lg:px-4 xl:px-8 2xl:px-10 items-start mt-auto">
                                <div class="cms_bullet_list flex flex-col flex-1">
                                    <ul>
                                        <li><strong>20+</strong> full size & unique snacks</li>
                                        <li><strong>1+ Drink</strong> included in every box</li>
                                        <li>Try a new country every month</li>
                                        <li>No duplicated snacks</li>
                                        <li>Information guide included</li>
                                        <li>Shipping is free for addresses in the United Kingdom</li>
                                    </ul>
                                </div><em
                                    class="block pb-4 pt-4 md:pb-6 text-40 lg:text-45 text-center w-full mt-auto">£<strong>23.99</strong><span
                                        class="text-30">/mo</span></em>
                                <a href="/product/the-premium-box/"
                                    class="mt-auto rounded-full bg-orange text-white px-0 py-4 text-20 lg:text-20 w-full md:max-w-300 mx-auto font-bold flex flex-col text-center lg:py-3 transition duration-300 ease-in-out hover:bg-purple w-full">Select</a><small
                                    class="text-white opacity-50 text-14 md:text-15 leading-140 block text-center mt-4 md:mt-4 w-full">Cancel
                                    subscription at anytime</small>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <style>
            .bg-custom * {
                color: white;
            }

            @media only screen and (max-width: 767px) {
                .bg-custom {
                    background-image: url(/wp-content/themes/shopkeeper/images/newsletterbg_mobile.png);
                    background-size: 101% 101%;
                    background-position: center;
                }
            }

            @media only screen and (min-width: 768px) {
                .bg-custom {
                    background-size: cover;
                    background-position: center;
                    background-image: url(/wp-content/themes/shopkeeper/images/newsletterbg.png);
                }
            }
        </style>
        <div class="bg-custom">
            <div
                class="mx-auto flex flex-col lg:flex-row max-w-90 w-full lg:max-w-lg py-16 lg:py-20 text-black items-center md:justify-center lg:gap-x-0 xl-gap-10 xl:justify-between lg:items-center text-center lg:text-left fade-trigger xl:max-w-1010 flex-wrap">
                <div class="w-full lg:w-auto flex flex-col fadeIn max-w-340 lg:max-w-400">
                    <em class="text-24 lg:text-35 xl:text-40 font-bold block">Keep up-to date</em>
                    <p class="flex flex-col pt-4 lg:pt-2">Be the first to get the latest updates from SnackVerse and get
                        exclusive promo codes.</p>
                </div>
                <div class="w-full lg:w-auto fadeIn md:max-w-600 lg:max-w-lg">
                    <form
                        action="https://snackverse.us4.list-manage.com/subscribe/post?u=72c4c261e8f5253c5b06bb09d&amp;id=e62161c8d6&amp;f_id=00212fe9f0"
                        method="post" id="mc-embedded-subscribe-form" name="mc-embedded-subscribe-form"
                        class="validate flex flex-col w-auto" target="_blank">
                        <div class="flex flex-col lg:flex-row gap-y-4 lg:gap-y-0 mt-6 lg:mt-0">
                            <input type="email" name="EMAIL" placeholder="Your email address"
                                class="lg:max-w-300 text-grey xl:max-w-md border px-10 py-4 border-grey text-16 lg:text-24 rounded-l-full rounded-r-full lg:rounded-r-0 lg:border-r-0 lg:rounded-r-none focus:border-orange focus:outline-none transition duration-300 ease-in-outrequired email"
                                id="mce-EMAIL" required="" value="">
                            <input type="submit" name="subscribe" id="mc-embedded-subscribe" value="Subscribe"
                                class="w-auto bg-orange px-10 py-4 text-20 lg:text-24 font-bold rounded-l-full lg:rounded-l-none rounded-r-full text-white hover:bg-darkorange cursor-pointer transition duration-300 ease-in-out">
                        </div>
                        <div id="mce-responses"
                            class="clear foot flex flex-col w-full text-left px-10 text-orange text-14 pt-4">
                            <div class="response" id="mce-error-response" style="display: none;"></div>
                            <div class="response" id="mce-success-response" style="display: none;"></div>
                        </div>
                        <div style="position: absolute; left: -5000px;" aria-hidden="true">
                            <input type="text" name="b_08f6def7eec8d41d04affe886_52cc97fe18" tabindex="-1" value="">
                        </div>
                    </form>
                </div>
            </div>
        </div>
        <script type="text/javascript" src="//s3.amazonaws.com/downloads.mailchimp.com/js/mc-validate.js"></script>
        <script
            type="text/javascript">(function ($) { window.fnames = new Array(); window.ftypes = new Array(); fnames[0] = 'EMAIL'; ftypes[0] = 'email'; fnames[1] = 'FNAME'; ftypes[1] = 'text'; fnames[2] = 'LNAME'; ftypes[2] = 'text'; fnames[3] = 'ADDRESS'; ftypes[3] = 'address'; fnames[4] = 'PHONE'; ftypes[4] = 'phone'; fnames[5] = 'BIRTHDAY'; ftypes[5] = 'birthday'; }(jQuery)); var $mcj = jQuery.noConflict(true);</script>
        </div>
    </main>
    


</body>

</html>



`;
