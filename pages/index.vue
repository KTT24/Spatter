<script lang="ts">
  export default {
    name: "index",
  }
</script>

<template>
  <div>
    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
    <link
      href="https://fonts.googleapis.com/css2?family=Assistant:wght@200;300;400;500;600;700;800&display=swap"
      rel="stylesheet" />

    <div class="color-header">
      <div class="nav-menu-frame">
        <navbar />
      </div>
      <div class="color-header-text">
        <img src="~/assets/images/SpatterLogo.svg" width="35%" alt="" class="section-5fade" />
        <h3>Have a bloody good time!</h3>
      </div>
    </div>

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
</template>
