<template>
  <div class="introCont">
    <h3>Jeffery Rosario</h3>
    <div class="photoCont">
      <div class="slideCont">
        <div v-for="(dog, i) in Doglist" v-bind:key="i">
          <img :src="dog" />
        </div>
        <div v-for="(dog, i) in Doglist" v-bind:key="`extra${i}`">
          <img :src="dog" />
        </div>
      </div>
    </div>
    <h1>Dog Walking <span>•</span> Dog Sitting</h1>
  </div>
</template>

<script>
import Dogs from "./compAssets/dogs";
export default {
  name: "Intro",
  data() {
    return {
      Doglist: [...Dogs],
    };
  },
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
    overflow: hidden;
    display: flex;
    @keyframes slide {
      0% {
        transform: translate(0px);
      }
      100% {
        transform: translate(-50%);
      }
    }
    .slideCont {
      display: inline-flex;
      animation: slide 60s linear infinite;
      div {
        min-width: 225px;
        max-height: 225px;
        overflow: hidden;
        margin: 0 22px;
        border-radius: 50%;
        img {
          width: 100%;
        }
      }
    }
  }
}
</style>