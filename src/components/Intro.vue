<template>
  <div class="introCont">
    <div class="introTitles">
      <h3>Jeffrey Rosario</h3>
      <h1>Dog Walking <span>•</span> Dog Sitting</h1>
    </div>
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
  height: calc(100vh - 43px);
  padding-top: 43px;
  min-height: 600px;
  max-height: 1000px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  overflow: hidden;
  &::before {
    content: "";
    position: absolute;
    display: none;
    top: -300px;
    left: 0;
    right: 0;
    margin: 0 auto;
    width: 600px;
    height: 600px;
    border-radius: 50%;
    background-color: $color1;
  }
  .introTitles {
    z-index: 20;
    h3,
    h1 {
      text-align: center;
      span {
        color: $color1;
      }
    }
    h3 {
      margin-bottom: 44px;
      font-size: 2rem;
    }
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
  @media screen and(min-width : $breakMd) {
    justify-content: center;

    &::before {
      display: block;
      z-index: 10;
    }
    .introTitles {
      position: absolute;
      top: 88px;
      h1 {
        span {
          color: $color2;
        }
      }
    }

    .photoCont {
      position: relative;
      top: 88px;
      z-index: 0;
    }
  }
}
</style>