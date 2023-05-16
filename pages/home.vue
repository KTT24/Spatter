<template>
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

  <h1 class="about" style="text-align: left; padding: 10px">About</h1>
  <p style="text-align: left; padding: 10px; width: 500px">
    Sit ad adipisicing ipsum eu aliqua ipsum est incididunt enim et sit cillum. Do incididunt deserunt mollit incididunt
    proident deserunt magna ipsum velit. Duis pariatur amet labore voluptate non. Non excepteur consequat aliquip
    laborum. Occaecat ut esse eu anim officia minim commodo. Commodo magna consequat consectetur consectetur laborum sit
    proident. Dolor Lorem cillum ad pariatur id veniam sint velit ex incididunt quis ipsum.
  </p>
</template>

<script>
  import welcome from "~/components/welcome.vue"
  export default {
    components: { welcome },
    name: "home",
    data() {},
  }
</script>
