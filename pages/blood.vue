<template>
  <div>
    <div class="color-header">
      <div class="nav-menu-frame">
        <navbar />
      </div>
      <div class="color-header-text">
        <h1>Blood Patterns</h1>
      </div>
    </div>

    <div class="cards">
      <card>
        <h4>90º Drops</h4>
        <p>{{ Drops }}</p>
      </card>
      <card>
        <h4>Smear</h4>
        <p>
          {{ Smear }}
        </p>
      </card>
      <card>
        <h4>Trail</h4>
        <p>
          {{ Trail }}
        </p>
      </card>
      <card>
        <h4>Cast Off</h4>
        <p>
          {{ CastOff }}
        </p>
      </card>
    </div>
    <div class="cards">
      <card>
        <h4>Expirated Blood</h4>
        <p>{{ ExpiratedBlood }}</p>
      </card>
      <card>
        <h4>High Velocity Impact</h4>
        <p>
          {{ HighVelocityImpact }}
        </p>
      </card>
      <card>
        <h4>Medium Velocity Impact</h4>
        <p>
          {{ MediumVelocityImpact }}
        </p>
      </card>
      <card>
        <h4>Low Velocity Impact</h4>
        <p>
          {{ LowVelocityImpact }}
        </p>
      </card>
    </div>

    <!-- <footer class="footer">
        <div class="content has-text-centered">
            <p>
                <strong>Spatter</strong> by <a href="">@spatter</a>. The source
                code is licensed"
                <a href="http://opensource.org/licenses/mit-license.php">MIT</a
                >. The website content is licensed
                <a href="http://creativecommons.org/licenses/by-nc-sa/4.0/">
                    CC BY NC SA 4.0
                </a>
                .
            </p>
        </div>
    </footer> -->
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
  * {
    font-family: "Assistant", sans-serif;
  }

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
    width: 100px;
    padding: 12px;
    border-radius: 20px;
    color: white;
    border: 0px solid #bd1d1d;
    border-radius: 25px 25px 25px 25px;
    cursor: pointer;
    ::-ms-tooltip {
      display: none;
    }
    background: transparent;
    background-image: url("assets/images/nav-bg-fill-red.png");
    background-repeat: repeat-x;
    background-position: 0 -100%;
    transition: 0.95s ease;
  }

  button:hover {
    background-position: center;
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

<script>
  import bloodData from "../assets/other/data/bloodData.json"
  export default {
    name: "blood",
    data() {
      return {
        Drops: bloodData.bloodTypes["90DegreeDrops"].description,
        Smear: bloodData.bloodTypes["Smear"].description,
        Trail: bloodData.bloodTypes["Trail"].description,
        CastOff: bloodData.bloodTypes["CastOff"].description,
        ExpiratedBlood: bloodData.bloodTypes["ExpiratedBlood"].description,
        HighVelocityImpact: bloodData.bloodTypes["HighVelocityImpact"].description,
        LowVelocityImpact: bloodData.bloodTypes["LowVelocityImpact"].description,
        MediumVelocityImpact: bloodData.bloodTypes["MediumVelocityImpact"].description,
      }
    },
  }
</script>
