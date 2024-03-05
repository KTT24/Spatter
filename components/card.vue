<template>
  <div class="grid">
    <div class="card" v-on:click="isExpanded = !isExpanded" v-bind:class="{ expanded: isExpanded }">
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
<script>
  export default {
    data() {
      return {
        isExpanded: false,
      }
    },
    
  }
</script>

<style scoped lang="scss">
  .cards {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    grid-gap: 20px;
    padding: 15px;
    transition: transform 0.5s ease-in-out;
  }

  .cards {
    align-self: center;
    justify-content: center;
    margin: 5% 0 0 5%;
    padding: 0 0 0 0;
  }
  

  // .expanded {
  //   animation: expand 0.5s ease-in-out;
  //   width: 100%;  
  // }

  /* Ease-in-out Expanding anamation */
  @keyframes expand {
    0% {
      scale: 0;
    }
    100% {
      scale: 1;
    }
  }

  @-webkit-keyframes expand {
    0% {
      scale: 0;
    }
    100% {
      scale: 1;
    }
  }

  @-moz-keyframes expand {
    0% {
      scale: 0;
    }
    100% {
      scale: 1;
    }
  }
</style>

