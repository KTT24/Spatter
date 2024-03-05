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
        isExpanded: false,
      }
    },
  }
</script>

<style scoped></style>
