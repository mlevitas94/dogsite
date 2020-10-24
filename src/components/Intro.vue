<template>
  <div class="introCont">
    <h3>Jeffery Rosario</h3>
    <div class="photoCont">
      <div v-for="(dog, i) in Dogs" v-bind:key="i">
        <img :src="dog"/>
      </div>
    </div>
    <h1>Dog Walking <span>•</span> Dog Sitting</h1>
  </div>
</template>

<script>
import Dogs from "./compAssets/dogs";
export default {
  name: "Intro",
  Dogs
};
</script>

<style lang="scss">
@import "../../variables.scss";

.introCont {
  background-image: url("../assets/dogprint.png");
  background-size: contain;
  background-position: center;
  background-repeat: no-repeat;
  height: calc(100vh - 43px);
  margin-top: 43px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  h3,
  h1 {
    text-align: center;
    span {
      color: $color1;
    }
  }
  h3 {
    font-size: 2rem;
  }
  .photoCont {
    min-height: 50%;
  }
}
</style>