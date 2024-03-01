<template>
  <link rel="preconnect" href="https://fonts.googleapis.com" />
  <link rel="preconnect" href="https://fonts.gstatic.com" />
  <link
    href="https://fonts.googleapis.com/css2?family=Assistant:wght@200;300;400;500;600;700;800&display=swap"
    rel="stylesheet" />
  <div class="Page nav-page">
    <div class="nav-menu">
      <div class="nav-items ">
        <NuxtLink to="/">
          <button class="glow-on-hover"><span>Home</span></button>
        </NuxtLink>
        <NuxtLink to="/blood">
          <button class="glow-on-hover"><span>Blood</span></button>
        </NuxtLink>
      </div>
    </div>
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
  $background-dark-2: #000000;

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

  .section-fade {
    animation: fadein 2s;
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

  

  .cards {
    align-self: center;
    justify-content: center;
    margin: 5% 0 0 5%;
    padding: 0 0 0 0;
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
</style>
