<template>
  <navbar />

  <div class="cards">
    <nuxt-link to="90">
      <card>
        <h4>90º Drops</h4>
        <p>
          Drip patterns will be large and irregular in shape, with small satellite spatters around the periphery of the
          central parent stain on the horizontal and nearby vertical surfaces....
        </p>
      </card>
    </nuxt-link>
    <card>
      <h4>Smear</h4>
      <p>
        90º Spatter is a web application that allows you to create and share your own 90º Spatter art. It is a simple
        and fun way to create something beautiful.
      </p>
    </card>
    <card>
      <h4>Trail</h4>
      <p>
        90º Spatter is a web application that allows you to create and share your own 90º Spatter art. It is a simple
        and fun way to create something beautiful.
      </p>
    </card>
    <card>
      <h4>Aterail Spurt</h4>
      <p>
        90º Spatter is a web application that allows you to create and share your own 90º Spatter art. It is a simple
        and fun way to create something beautiful.
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
</template>

<script>
  export default {
    name: "about",
    data() {
      return {
        msg: "Welcome to Spatter",
      }
    },
  }
</script>
