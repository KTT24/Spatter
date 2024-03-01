<template>
  <div class="grid">
    <div class="card">
      <span class="icon">
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-bodywidth="1.2"
          stroke-linecap="round"
          stroke-linejoin="round"
          xmlns="http://www.w3.org/2000/svg">
          <!-- waterdrop icon -->
          <path d="M12 2.69l5.66 5.66a8 8 0 11-11.31 0L12 2.69z"></path>
        </svg>
      </span>
      <slot />
      <div class="shine"></div>
      <div class="background">
        <div class="tiles">
          <div class="tile tile-1"></div>
          <div class="tile tile-2"></div>
          <div class="tile tile-3"></div>
          <div class="tile tile-4"></div>

          <div class="tile tile-5"></div>
          <div class="tile tile-6"></div>
          <div class="tile tile-7"></div>
          <div class="tile tile-8"></div>

          <div class="tile tile-9"></div>
          <div class="tile tile-10"></div>
        </div>

        <div class="line line-1"></div>
        <div class="line line-2"></div>
        <div class="line line-3"></div>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
  body {
    --background-color: #18181b;
    --text-color: #a1a1aa;

    --card-background-color: rgba(255, 255, 255, 0.015);
    --card-border-color: rgba(255, 255, 255, 0.1);
    --card-box-shadow-1: rgba(0, 0, 0, 0.05);
    --card-box-shadow-1-y: 3px;
    --card-box-shadow-1-blur: 6px;
    --card-box-shadow-2: rgba(0, 0, 0, 0.1);
    --card-box-shadow-2-y: 8px;
    --card-box-shadow-2-blur: 15px;
    --card-label-color: #ffffff;
    --card-icon-color: #d4d4d8;
    --card-icon-background-color: rgba(255, 255, 255, 0.08);
    --card-icon-border-color: rgba(255, 255, 255, 0.12);
    --card-shine-opacity: 0.1;
    --card-shine-gradient: conic-gradient(
      from 205deg at 50% 50%,
      rgba(185, 16, 16, 0) 0deg,
      #ac0d0d 25deg,
      rgba(211, 52, 52, 0.18) 295deg,
      rgba(185, 16, 16, 0) 360deg
    );
    --card-line-color: #2a2b2c;
    --card-tile-color: rgba(185, 16, 16, 0.05);

    --card-hover-border-color: rgba(255, 255, 255, 0.2);
    --card-hover-box-shadow-1: rgba(0, 0, 0, 0.04);
    --card-hover-box-shadow-1-y: 5px;
    --card-hover-box-shadow-1-blur: 10px;
    --card-hover-box-shadow-2: rgba(0, 0, 0, 0.3);
    --card-hover-box-shadow-2-y: 15px;
    --card-hover-box-shadow-2-blur: 25px;
    --card-hover-icon-color: #ac0d0d;
    --card-hover-icon-background-color: rgba(211, 52, 52, 0.1);
    --card-hover-icon-border-color: rgba(211, 52, 52, 0.2);

    --blur-opacity: 0.01;
  }

  .grid {
    display: grid;
    grid-template-columns: repeat(3, 240px);
    grid-gap: 32px;
    position: relative;
    z-index: 1;
  }

  .card {
    background-color: var(--background-color);
    box-shadow: 0px var(--card-box-shadow-1-y) var(--card-box-shadow-1-blur) var(--card-box-shadow-1),
      0px var(--card-box-shadow-2-y) var(--card-box-shadow-2-blur) var(--card-box-shadow-2),
      0 0 0 1px var(--card-border-color);
    padding: 56px 16px 16px 16px;
    border-radius: 15px;
    cursor: pointer;
    position: relative;
    margin: 20px;
    transition: box-shadow 0.25s;

    &::before {
      content: "";
      position: absolute;
      inset: 0;
      border-radius: 15px;
      background-color: var(--card-background-color);
    }

    .icon {
      z-index: 2;
      position: relative;
      display: table;
      padding: 8px;

      &::after {
        content: "";
        position: absolute;
        inset: 4.5px;
        border-radius: 50%;
        background-color: var(--card-icon-background-color);
        border: 1px solid var(--card-icon-border-color);
        backdrop-filter: blur(2px);
        transition: background-color 0.25s, border-color 0.25s;
      }

      svg {
        position: relative;
        z-index: 1;
        display: block;
        width: 24px;
        height: 24px;
        transform: translateZ(0);
        color: var(--card-icon-color);
        transition: color 0.25s;
      }
    }

    h4 {
      z-index: 2;
      position: relative;
      margin: 12px 0 4px 0;
      font-family: inherit;
      font-weight: 600;
      font-size: 14px;
      line-height: 2;
      color: var(--card-label-color);
    }

    p {
      z-index: 2;
      position: relative;
      margin: 0;
      font-weight: 400;
      font-size: 14px;
      line-height: 1.7;
      color: var(--text-color);
    }

    .shine {
      border-radius: inherit;
      position: absolute;
      inset: 0;
      z-index: 1;
      overflow: hidden;
      opacity: 0;
      transition: opacity 0.5s;

      &:before {
        content: "";
        width: 150%;
        padding-bottom: 150%;
        border-radius: 50%;
        position: absolute;
        left: 50%;
        bottom: 55%;
        filter: blur(35px);
        opacity: var(--card-shine-opacity);
        transform: translateX(-50%);
        background-image: var(--card-shine-gradient);
      }
    }

    .background {
      border-radius: inherit;
      position: absolute;
      inset: 0;
      overflow: hidden;
      -webkit-mask-image: radial-gradient(circle at 60% 5%, black 0%, black 15%, transparent 60%);
      mask-image: radial-gradient(circle at 60% 5%, black 0%, black 15%, transparent 60%);

      .tiles {
        opacity: 0;
        transition: opacity 0.25s;

        .tile {
          position: absolute;
          background-color: var(--card-tile-color);
          animation-duration: 8s;
          animation-iteration-count: infinite;
          opacity: 0;

          &.tile-4,
          &.tile-6,
          &.tile-10 {
            animation-delay: -2s;
          }

          &.tile-3,
          &.tile-5,
          &.tile-8 {
            animation-delay: -4s;
          }

          &.tile-2,
          &.tile-9 {
            animation-delay: -6s;
          }

          &.tile-1 {
            top: 0;
            left: 0;
            height: 10%;
            width: 22.5%;
          }

          &.tile-2 {
            top: 0;
            left: 22.5%;
            height: 10%;
            width: 27.5%;
          }

          &.tile-3 {
            top: 0;
            left: 50%;
            height: 10%;
            width: 27.5%;
          }

          &.tile-4 {
            top: 0;
            left: 77.5%;
            height: 10%;
            width: 22.5%;
          }

          &.tile-5 {
            top: 10%;
            left: 0;
            height: 22.5%;
            width: 22.5%;
          }

          &.tile-6 {
            top: 10%;
            left: 22.5%;
            height: 22.5%;
            width: 27.5%;
          }

          &.tile-7 {
            top: 10%;
            left: 50%;
            height: 22.5%;
            width: 27.5%;
          }

          &.tile-8 {
            top: 10%;
            left: 77.5%;
            height: 22.5%;
            width: 22.5%;
          }

          &.tile-9 {
            top: 32.5%;
            left: 50%;
            height: 22.5%;
            width: 27.5%;
          }

          &.tile-10 {
            top: 32.5%;
            left: 77.5%;
            height: 22.5%;
            width: 22.5%;
          }
        }
      }

      @keyframes tile {
        0%,
        12.5%,
        100% {
          opacity: 1;
        }

        25%,
        82.5% {
          opacity: 0;
        }
      }

      .line {
        position: absolute;
        inset: 0;
        opacity: 0;
        transition: opacity 0.35s;

        &:before,
        &:after {
          content: "";
          position: absolute;
          background-color: var(--card-line-color);
          transition: transform 0.35s;
        }

        &:before {
          left: 0;
          right: 0;
          height: 1px;
          transform-origin: 0 50%;
          transform: scaleX(0);
        }

        &:after {
          top: 0;
          bottom: 0;
          width: 1px;
          transform-origin: 50% 0;
          transform: scaleY(0);
        }

        &.line-1 {
          &:before {
            top: 10%;
          }

          &:after {
            left: 22.5%;
          }

          &:before,
          &:after {
            transition-delay: 0.3s;
          }
        }

        &.line-2 {
          &:before {
            top: 32.5%;
          }

          &:after {
            left: 50%;
          }

          &:before,
          &:after {
            transition-delay: 0.15s;
          }
        }

        &.line-3 {
          &:before {
            top: 55%;
          }

          &:after {
            right: 22.5%;
          }
        }
      }
    }

    &:hover {
      box-shadow: 0px 3px 6px var(--card-hover-box-shadow-1),
        0px var(--card-hover-box-shadow-2-y) var(--card-hover-box-shadow-2-blur) var(--card-hover-box-shadow-2),
        0 0 0 1px var(--card-hover-border-color);

      .icon {
        &::after {
          background-color: var(--card-hover-icon-background-color);
          border-color: var(--card-hover-icon-border-color);
        }

        svg {
          color: var(--card-hover-icon-color);
        }
      }

      .shine {
        opacity: 1;
        transition-duration: 0.5s;
        transition-delay: 0s;
      }

      .background {
        .tiles {
          opacity: 1;
          transition-delay: 0.25s;

          .tile {
            animation-name: tile;
          }
        }

        .line {
          opacity: 1;
          transition-duration: 0.15s;

          &:before {
            transform: scaleX(1);
          }

          &:after {
            transform: scaleY(1);
          }

          &.line-1 {
            &:before,
            &:after {
              transition-delay: 0s;
            }
          }

          &.line-2 {
            &:before,
            &:after {
              transition-delay: 0.15s;
            }
          }

          &.line-3 {
            &:before,
            &:after {
              transition-delay: 0.3s;
            }
          }
        }
      }
    }
  }

  .day-night {
    cursor: pointer;
    position: absolute;
    right: 20px;
    top: 20px;
    opacity: 0.3;

    input {
      display: none;

      & + div {
        border-radius: 50%;
        width: 20px;
        height: 20px;
        position: relative;
        box-shadow: inset 8px -8px 0 0 var(--text-color);
        transform: scale(1) rotate(-2deg);
        transition: box-shadow 0.5s ease 0s, transform 0.4s ease 0.1s;

        &:before {
          content: "";
          width: inherit;
          height: inherit;
          border-radius: inherit;
          position: absolute;
          left: 0;
          top: 0;
          transition: background-color 0.3s ease;
        }

        &:after {
          content: "";
          width: 6px;
          height: 6px;
          border-radius: 50%;
          margin: -3px 0 0 -3px;
          position: absolute;
          top: 50%;
          left: 50%;
          box-shadow: 0 -23px 0 var(--text-color), 0 23px 0 var(--text-color), 23px 0 0 var(--text-color),
            -23px 0 0 var(--text-color), 15px 15px 0 var(--text-color), -15px 15px 0 var(--text-color),
            15px -15px 0 var(--text-color), -15px -15px 0 var(--text-color);
          transform: scale(0);
          transition: all 0.3s ease;
        }
      }

      &:checked + div {
        box-shadow: inset 20px -20px 0 0 var(--text-color);
        transform: scale(0.5) rotate(0deg);
        transition: transform 0.3s ease 0.1s, box-shadow 0.2s ease 0s;

        &:before {
          background: var(--text-color);
          transition: background-color 0.3s ease 0.1s;
        }

        &:after {
          transform: scale(1);
          transition: transform 0.5s ease 0.15s;
        }
      }
    }
  }

  html {
    box-sizing: border-box;
    -webkit-font-smoothing: antialiased;
  }

  * {
    box-sizing: inherit;
    &:before,
    &:after {
      box-sizing: inherit;
    }
  }

  // Center
  body {
    min-height: 100vh;
    font-family: "Inter", Arial;
  }

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

  /* THIS CODE BELOW IS NECESSARY */

  button {
    border-radius: 45px;
  }

  .glow-on-hover {
    width: 100px;
    height: 50px;
    border: none;
    outline: none;
    color: #fff;
    background: #111;
    cursor: pointer;
    position: relative;
    z-index: 0;
    border-radius: 45px;
    
}

  .glow-on-hover:before {
    content: '';
    background: linear-gradient(45deg, #ff0000, #000,#000,   #ff0000);
    position: absolute;
    top: -2px;
    left:-2px;
    background-size: 400%;
    z-index: -1;
    filter: blur(5px);
    width: calc(100% + 4px);
    height: calc(100% + 4px);
    animation: glowing 20s linear infinite;
    opacity: 0;
    transition: opacity .3s ease-in-out;
    border-radius: 45px;
}

.glow-on-hover:active {
    color: #000
}

.glow-on-hover:active:after {
    background: transparent;
}

.glow-on-hover:hover:before {
    opacity: 1;
}

.glow-on-hover:after {
    z-index: -1;
    content: '';
    position: absolute;
    width: 100%;
    height: 100%;
    background: #111;
    left: 0;
    top: 0;
    border-radius: 45px;
}

  @keyframes glowing {
      0% { background-position: 0 0; }
      50% { background-position: 400% 0; }
      100% { background-position: 0 0; }
  }

  button:hover {
    // do an outer glow that moves around 
    animation: glowing 1s infinite;

  }

  
  

  span {
    font-weight: bolder;
    text-transform: uppercase;
    font-family: "Assistant";
    font-size: 14px;
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
