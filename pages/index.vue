<script lang="ts">
export default {
  name: "index",
}

</script>

<template>
  <div>
    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com" />
    <link
      href="https://fonts.googleapis.com/css2?family=Assistant:wght@200;300;400;500;600;700;800&display=swap"
      rel="stylesheet" />

    <div class="color-header">
      <div class="nav-menu-frame">
        <navbar />
      </div>
      <div class="color-header-text section-fade">
        <nuxt-img src="/SpatterLogoWhite.png" sizes="100vw sm:50vw md:400px"/>
        <h3>Have a bloody good time!</h3>
      </div>
    </div>

    <div class="section2-fade">
      <h1 class="about" style="text-align: left; padding-left: 50px; padding-top: 25px">About</h1>
      <p style="text-align: left; padding-left: 50px; width: 55%; font-weight: 250">
        Spatter is a modern and clean wiki for all things blood spatter. It is a comprehensive resource for information on
        the science, history, and application of bloodstain pattern analysis (BPA). Spatter provides users with access to
        a wide range of resources, including articles, images, videos, and interactive tools. Spatter is a valuable
        resource for anyone interested in learning more about BPA. It is an essential tool for forensic scientists, law
        enforcement professionals, and students. Spatter is also a great resource for anyone who is simply curious about
        blood spatter.
      </p>
    </div>
    
    <div class="spacer"></div>

    <footer>
      <div class="footer">
        <div class="footer-text">
          <h3>Spatter</h3>
          <p>© 2023 Spatter. All rights reserved.</p>
        </div>
        <div class="footer-links">
          <a href="kutterthornton.com"> Kutter Thornton </a>|<a href="#"> Privacy Policy </a>|
          <a href="#"> Terms of Services </a>
        </div>
      </div>
    </footer>
  </div>
</template>

<style lang="scss">
  /*--------------------------------------------------------------------------*/
  /* 1. Global css variables
/*--------------------------------------------------------------------------*/

  /* --------- LIGHT MODE --------- */

  // Background colors light
  $background-light-1: #f5f5f5;
  $background-light-2: #e5e5e5;

  // Text colors light
  $text-color-light: #000000;

  /* --------- DARK MODE --------- */

  // Background colors dark
  $background-dark-1: #212121;
  $background-dark-2: #212326;

  // Text colors dark
  $text-color-dark: #ffffff;

  // Heading colors
  $heading-1-color: #0c84cf;
  $heading-2-color: #60a5cf;

  // Text link colors
  $text-link: #0c84cf;
  $text-link-hover: #60a5cf;

  /* Header Colors (gradient) */

  //Dark mode

  $header-color-1: #bd1d1d;
  $header-color-2: #000000;
  $header-color-3: #000000;
  $header-color-4: #bd1d1d;

  //light mode
  $header-color-1-light: #bd1d1d;
  $header-color-2-light: $background-light-1;
  $header-color-3-light: $background-light-1;
  $header-color-4-light: #bd1d1d;

  /*--------------------------------------------------------------------------*/
  /* 3. Global styles
/*--------------------------------------------------------------------------*/
  * {
    font-family: "Assistant", sans-serif;
  }

  .section-fade {
    animation: fadein 2s;
  }

  @keyframes fadein {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }

  .section2-fade {
    animation: fadein2 3s;
  }

  @keyframes fadein2 {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }

  a {
    text-decoration: none;
  }

  @media (prefers-color-scheme: dark) {
    /* Dark theme styles go here */
    body {
      background-color: $background-dark-2;
      color: $text-color-dark;
    }
    .nav-menu {
      background-color: #18181b;
      color: $text-color-dark;
    }
    a {
      color: $text-color-dark;
    }
    .color-header {
      background: linear-gradient(270deg, $header-color-1, $header-color-2, $header-color-3, $header-color-4);
    }
    button > span {
      color: $text-color-dark;
    }
  }

  @media (prefers-color-scheme: light) {
    /* Light theme styles go here */
    body {
      background-color: $background-light-1;
      color: $text-color-light;
    }
    .nav-menu {
      background-color: #cacaca;
      color: $text-color-light;
    }
    a {
      color: $text-color-light;
    }
    .color-header {
      background: linear-gradient(
        270deg,
        $header-color-1-light,
        $header-color-2-light,
        $header-color-3-light,
        $header-color-4-light
      );
    }
    button > span {
      color: $text-color-light;
    }
    .color-header-text > h3 {
      color: $text-color-light;
    }
  }

  body {
    margin: 0;
    padding: 0;
    font-family: "Noto Sans";
    font-weight: bold;
  }

  /*--------------------------------------------------------------------------*/
  /* 4. Navigation
/*--------------------------------------------------------------------------*/

  .nav-menu {
    font-family: "Noto Sans";
    font-weight: bold;
    padding: 10px;
    margin: 10px;
    border-radius: 45px 45px 45px 45px;
  }

  .nav-menu > .nav-items > a {
    padding: 10px;
  }

  
  /*--------------------------------------------------------------------------*/
  /* 3. Header styles
/*--------------------------------------------------------------------------*/

  .color-header {
    background-size: 600% 600%;
    -webkit-animation: HeaderGradient 8s ease infinite;
    -moz-animation: HeaderGradient 8s ease infinite;
    animation: HeaderGradient 8s ease infinite;
    height: 55vh;
    width: 100%;
    margin: 0 0 0 0 !important;
    padding: 12px;
    border-radius: 0px 0px 55px 55px;
  }

  .color-header-text {
    font-size: 50px;
    margin-top: 5%;
    font-variant: small-caps;
    text-align: center;
    color: #ffffff;
    font-family: "Assistant";
    line-height: 100%;
  }

  .color-header-text > h3 {
    font-size: 30px;
    text-align: center;
    font-family: "Assistant";
  }

  @-webkit-keyframes HeaderGradient {
    0% {
      background-position: 30% 0%;
    }
    50% {
      background-position: 71% 100%;
    }
    100% {
      background-position: 30% 0%;
    }
  }
  @-moz-keyframes HeaderGradient {
    0% {
      background-position: 30% 0%;
    }
    50% {
      background-position: 71% 100%;
    }
    100% {
      background-position: 30% 0%;
    }
  }
  @keyframes HeaderGradient {
    0% {
      background-position: 30% 0%;
    }
    50% {
      background-position: 71% 100%;
    }
    100% {
      background-position: 30% 0%;
    }
  }
  /*--------------------------------------------------------------------------*/
  /* 3. Main
/*--------------------------------------------------------------------------*/

  .Page {
    height: 100%;
    width: 100%;
  }

  .cards {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    grid-gap: 20px;
    padding: 15px;
  }

  .about {
    font-family: "Assistant" !important ;
  }

  .footer {
    padding: 10px;
    left: 0;
    bottom: 0;
    width: 100%;
    background-color: #550d0d;
    color: white;
    text-align: center;
    border-radius: 45px 45px 00px 0px;
  }

  .footer > p {
    font-family: "Assistant";
    font-size: 12px;
  }

  .footer > a {
    font-family: "Assistant";
    font-size: 12px;
    color: white;
  }

  .footer-links {
    display: flex;
    justify-content: center;
    align-items: center;
    font-weight: 100;
  }

  .footer-links > a:hover {
    color: #ff0000;
  }

  .spacer {
    height: 300px;
  }
</style>
