import testimonialsGridSection from "@assets/images/testimonials-grid-section.jpg";
import orderSummaryComponent from "@assets/images/order-summary-component.jpg";
import adviceGeneratorApp from "@assets/images/advice-generator-app.jpg";
import interactiveRatingComponent from "@assets/images/interactive-rating-component.jpg";
import nftPreviewCardComponent from "@assets/images/nft-preview-card-component.jpg";
import huddleLandingPageWithASingleIntroductorySection from "@assets/images/huddle-landing-page-with-a-single-introductory-section.jpg";
import baseApparelComingSoonPage from "@assets/images/base-apparel-coming-soon-page.jpg";
import fyloDataStorageComponent from "@assets/images/fylo-data-storage-component.jpg";
import tipCalculatorApp from "@assets/images/tip-calculator-app.jpg";
import faqAccordionCard from "@assets/images/faq-accordion-card.jpg";
import interactivePricingComponent from "@assets/images/interactive-pricing-component.jpg";
import codingBootcampTestimonialsSlider from "@assets/images/coding-bootcamp-testimonials-slider.jpg";
import launchCountdownTimer from "@assets/images/launch-countdown-timer.jpg";
import chatAppCssIllustration from "@assets/images/chat-app-css-illustration.jpg";
import socialMediaDashboardWithThemeSwitcher from "@assets/images/social-media-dashboard-with-theme-switcher.jpg";
import introSectionWithDropdownNavigation from "@assets/images/intro-section-with-dropdown-navigation.jpg";
import easybankLandingPage from "@assets/images/easybank-landing-page.jpg";
import urlShorteningApiLandingPage from "@assets/images/url-shortening-api-landing-page.jpg";
import bookmarkLandingPage from "@assets/images/bookmark-landing-page.jpg";
import restCountriesApiWithColorThemeSwitcher from "@assets/images/rest-countries-api-with-color-theme-switcher.jpg";
import todoApp from "@assets/images/todo-app.jpg";
import failybank from "@assets/images/failybank.png";
import eCommerceProductPage from "@assets/images/e-commerce-product-page.jpg";

interface Project {
  name: string;
  description: string;
  image: string;
  url: string;
  tags: string[];
  tools: string[];
}

const initialState: Project[] = [
  {
    name: "Testimonials grid section",
    description: "This challenge will be perfect practice for anyone wanting to test their CSS Grid skills. Grid is such a powerful addition to CSS, so it's worth getting to grips with it!",
    image: testimonialsGridSection.src,
    url: "https://john-mirage.github.io/testimonials-grid-section/",
    tags: ["html", "css"],
    tools: ["vite"]
  },
  {
    name: "Order summary component",
    description: "A perfect project for newbies who are starting to build confidence with layouts!",
    image: orderSummaryComponent.src,
    url: "https://john-mirage.github.io/order-summary-component/",
    tags: ["javascript", "html", "css"],
    tools: ["vite", "react", "sass"]
  },
  {
    name: "Advice generator app",
    description: "The perfect project if you're learning how to interact with 3rd-party APIs. This challenge uses the Advice Slip API to generate random quotes of advice.",
    image: adviceGeneratorApp.src,
    url: "https://john-mirage.github.io/advice-generator-app/",
    tags: ["javascript", "html", "css"],
    tools: ["vite", "tailwind"]
  },
  {
    name: "Interactive rating component",
    description: "This is a nice, small project to practice handling user interactions and updating the DOM. Perfect for anyone who has learned the basics of JavaScript!",
    image: interactiveRatingComponent.src,
    url: "https://john-mirage.github.io/interactive-rating-component/",
    tags: ["javascript", "html", "css"],
    tools: ["vite", "tailwind"]
  },
  {
    name: "NFT preview card component",
    description: "This HTML & CSS only challenge is perfect for anyone just starting out or anyone wanting a small project to play around with.",
    image: nftPreviewCardComponent.src,
    url: "https://john-mirage.github.io/nft-preview-card-component/",
    tags: ["html", "css"],
    tools: ["vite", "tailwind"]
  },
  {
    name: "Huddle landing page with a single introductory section",
    description: "A perfect challenge for beginners, this project will get you working with a two column layout.",
    image: huddleLandingPageWithASingleIntroductorySection.src,
    url: "https://john-mirage.github.io/huddle-landing-page/",
    tags: ["html", "css"],
    tools: ["vite", "tailwind"]
  },
  {
    name: "Base Apparel coming soon page",
    description: "This layout looks simple enough, but there are some interesting details to it that will test your CSS skills. You'll also get to practice basic form validation.",
    image: baseApparelComingSoonPage.src,
    url: "https://john-mirage.github.io/base-apparel-coming-soon/",
    tags: ["javascript", "html", "css"],
    tools: ["vite", "tailwind"]
  },
  {
    name: "Fylo data storage component",
    description: "This component has some interesting CSS challenges in the design. If you're looking to test your CSS skills, this will be a great project for you!",
    image: fyloDataStorageComponent.src,
    url: "https://john-mirage.github.io/fylo-data-storage/",
    tags: ["html", "css"],
    tools: ["vite", "tailwind"]
  },
  {
    name: "Tip calculator app",
    description: "This small app is perfect for anyone starting to get to grips with JavaScript. The calculator functionality will be a nice test!",
    image: tipCalculatorApp.src,
    url: "https://john-mirage.github.io/tip-calculator-app/",
    tags: ["javascript", "html", "css"],
    tools: ["vite", "react", "react-aria", "tailwind"]
  },
  {
    name: "FAQ accordion card",
    description: "In this challenge, you'll be building out an FAQ accordion. This is an extremely common front-end pattern, so it's a great opportunity to get some practice in!",
    image: faqAccordionCard.src,
    url: "https://john-mirage.github.io/faq-accordion-card/",
    tags: ["html", "css"],
    tools: ["vite", "tailwind"]
  },
  {
    name: "Interactive pricing component",
    description: "In this project, you'll build out an interactive pricing component complete with custom range input slider and pricing toggle. A perfect way to test your JS skills!",
    image: interactivePricingComponent.src,
    url: "https://john-mirage.github.io/interactive-pricing-component/",
    tags: ["javascript", "html", "css"],
    tools: ["vite", "react", "react-aria", "styled-components", "tailwind"]
  },
  {
    name: "Coding bootcamp testimonials slider",
    description: "This challenge will be a nice test if you're new to JavaScript. It's also a great opportunity to play around with content animations and transitions.",
    image: codingBootcampTestimonialsSlider.src,
    url: "https://john-mirage.github.io/coding-bootcamp-testimonials-slider/",
    tags: ["javascript", "html", "css"],
    tools: ["vite", "swiper", "sass"]
  },
  {
    name: "Launch countdown timer",
    description: "This will be a fun one! Your challenge is to build this countdown timer. There are lots of small CSS tests in the design as well. So it should keep you busy!",
    image: launchCountdownTimer.src,
    url: "https://john-mirage.github.io/launch-countdown-timer/",
    tags: ["javascript", "html", "css"],
    tools: ["vite", "gsap", "sass"]
  },
  {
    name: "Chat app CSS illustration",
    description: "In this challenge, you'll be building out the entire app illustration from scratch. This will seriously test your CSS skills. So give it a go if you feel confident!",
    image: chatAppCssIllustration.src,
    url: "https://john-mirage.github.io/chat-app-css-illustration/",
    tags: ["html", "css"],
    tools: ["vite", "sass"]
  },
  {
    name: "Social media dashboard with theme switcher",
    description: "This challenge will be a perfect chance to practice your Grid skills. The color theme switcher also adds a nice additional test.",
    image: socialMediaDashboardWithThemeSwitcher.src,
    url: "https://john-mirage.github.io/social-media-dashboard/",
    tags: ["javascript", "html", "css"],
    tools: ["vite"]
  },
  {
    name: "Intro section with dropdown navigation",
    description: "This challenge will test your ability to create dropdown navigation menus, a common pattern on larger sites. It will also provide some nice basic layout challenges.",
    image: introSectionWithDropdownNavigation.src,
    url: "https://john-mirage.github.io/intro-section-lit/",
    tags: ["javascript", "html", "css"],
    tools: ["vite", "lit"]
  },
  {
    name: "Easybank landing page",
    description: "This challenge will provide a nice test for your layout skills. If you're ready to move up from Junior challenges, this one is a great next step.",
    image: easybankLandingPage.src,
    url: "https://john-mirage.github.io/easybank-landing-page/",
    tags: ["javascript", "html", "css"],
    tools: ["vite", "vue", "sass"]
  },
  {
    name: "URL shortening API landing page",
    description: "Integrate with the shrtcode URL shortening API and play with browser storage in this landing page challenge.",
    image: urlShorteningApiLandingPage.src,
    url: "https://john-mirage.github.io/url-shortening-api/",
    tags: ["javascript", "html", "css"],
    tools: ["vite", "svelte", "tailwind"]
  },
  {
    name: "Bookmark landing page",
    description: "This challenge will really test your layout skills. There are also areas that will require some JavaScript, such as the tabbed features section and the FAQ accordion.",
    image: bookmarkLandingPage.src,
    url: "https://john-mirage.github.io/bookmark-landing-page/",
    tags: ["javascript", "html", "css"],
    tools: ["vite", "svelte", "sass"]
  },
  {
    name: "REST Countries API with color theme switcher",
    description: "If you're wanting to test your JavaScript skills this is the challenge for you. Use whichever JS framework you prefer and pull data from the REST Countries API.",
    image: restCountriesApiWithColorThemeSwitcher.src,
    url: "https://john-mirage.github.io/rest-countries-api-mantine/",
    tags: ["javascript", "html", "css"],
    tools: ["vite", "react", "mantine", "axios"]
  },
  {
    name: "Todo app",
    description: "The classic todo app with a few twists! This app includes a dark/light theme toggle and drag & drop reordering for anyone wanting an extra test.",
    image: todoApp.src,
    url: "https://john-mirage.github.io/todo-app/",
    tags: ["javascript", "html", "css"],
    tools: ["vite", "react", "redux", "gsap"]
  },
  {
    name: "E-commerce product page",
    description: "In this challenge, you'll build a beautiful product page. We'll be putting your JS skills to the test with a lightbox product gallery and cart functionality!",
    image: eCommerceProductPage.src,
    url: "https://john-mirage.github.io/frontend-mentor/solution/ecommerce-product-page",
    tags: ["javascript", "html", "css"],
    tools: ["vite", "react", "styled-components", "framer-motion"]
  },
  {
    name: "Bank application for GTAV roleplay server",
    description: "Bank interface for a GTAV Roleplay server using FiveM",
    image: failybank.src,
    url: "https://john-mirage.github.io/failybank/",
    tags: ["javascript", "html", "css"],
    tools: ["vite"]
  }
];

export default function todos(state = initialState, action) {
  switch (action.type) {
    default:
      return state;
  }
}