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
  min-height: calc(100vh - 43px);
  padding-top: 43px;
  max-height: 500px;
  &::before{
    content: '';
    position: absolute;
    display: none;
    top: 0;
    left: -400px;
    height: 100%;
    width: 100vh;
    min-width: 668px;
    min-height: 668px;
    border-top-right-radius: 50%;
    border-bottom-right-radius: 50%;
    background-color: $color1;
  }
  h3,
  h1 {
    text-align: center;
    margin-bottom: 15vh;
    span {
      color: $color1;
    }
  }
  h3 {
    font-size: 2rem;
    margin-bottom: 14vh;
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
  @media screen and(min-width : $breakMd){
    display: flex;
    flex-direction: column;
    justify-content: center;
    &::before{
      display: block;
      z-index: 10;
    }
    .introTitles{
      position: absolute;
      margin-left: 44px;
      z-index: 20;
      top: 42vh;
      h3{
        margin-bottom: 44px;
      }
    }
    h3{
      
    }
    h1{
      top: 60vh;
      span{
        color: $color2;
      }
    }
    .photoCont{
      z-index: 0;
    }
  }
}
</style>