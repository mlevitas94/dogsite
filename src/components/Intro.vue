<template>
  <div class="introCont">
    <div class="introTitles">
      <h3>Jeffrey Rosario</h3>
      <h1>
        <span class="word">Dog Walking</span> <span class="dot">•</span>
        <span class="word"> Pet Sitting</span>
      </h1>
      <div>
        <h4><font-awesome-icon icon="map-marker-alt" size="1x" />Brooklyn</h4>
        <h4><font-awesome-icon icon="map-marker-alt" size="1x" />Manhatten</h4>
      </div>
    </div>
    <div class="photoCont">
      <div class="slideCont">
        <div v-for="(dog, i) in Doglist" v-bind:key="i">
          <img :src="dog" :class="`fade fade${i}`" :alt="`Jeffrey Rosario Dog ${i+1}`" />
        </div>
        <div v-for="(dog, i) in Doglist" v-bind:key="`extra${i}`">
          <img
            :src="dog"
            :class="`fade fade${Doglist.length + (i + 1)} extrafade${i}`"
          />
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
      counter: 0,
      Doglist: [...Dogs],
    };
  },
  //just in case to bring back fading images. Problematic for mobile and various screen sizes
  // mounted: function () {
  //   const allImages = document.querySelectorAll(".fade");

  //   function setOffset(fullspin) {
  //     allImages.forEach((img) => {
  //       if(img.classList.contains('fade1') || img.classList.contains('fade2') || img.classList.contains('fade3')){
  //         img.style.opacity = 1;
  //       }
  //       if(fullspin && img.classList.contains('fade0')){
  //         img.style.opacity = 1;
  //       }
  //       if(fullspin && img.classList.contains('fade3')){
  //         img.style.opacity = 0;
  //       }
  //     });
  //   }

  //   function fadeAllImages() {
  //     allImages.forEach((img) => {
  //       if (
  //         img.classList.contains("fade1") ||
  //         img.classList.contains("fade2") ||
  //         img.classList.contains("fade3")
  //       ) {
  //         img.style.opacity = 1;
  //       }else{
  //         img.style.opacity = 0;
  //       }
  //     });
  //   }

  //   setOffset(false);

  //   setInterval(() => {
  //     if (this.counter === Dogs.length - 2) {
  //       setOffset(true);
  //     } else if (this.counter === Dogs.length) {
  //       this.counter = 0;
  //       fadeAllImages();
  //     } else if (this.counter === Dogs.length - 1) {
  //       fadeAllImages();
  //     }
  //     allImages[this.counter + 4].style.opacity = 1;

  //     setTimeout(() => {
  //       allImages[this.counter].style.opacity = 0;
  //     }, 400);

  //     this.counter++;
  //   }, (1000 * 60) / Dogs.length);
  // },
};
</script>

<style lang="scss">
@import "../../variables.scss";

.introCont {
  height: calc(100vh - 43px);
  padding-top: 43px;
  min-height: 650px;
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
    position: relative;
    h3,
    h1 {
      text-align: center;
      font-size: $size1;
      .word {
        font-weight: bold;
      }
      .dot {
        color: $color3;
        font-size: $size3;
      }
    }
    h1 {
      width: fit-content;
      margin: 0 auto;
      border-top: 1px solid black;
      border-bottom: 1px solid black;
      padding-top: 10px;
      padding-bottom: 19px;
    }
    h3 {
      margin-bottom: 44px;
      font-size: 2rem;
    }
    div {
      width: 100vw;
      max-width: 600px;
      display: flex;
      justify-content: space-around;
      margin: 34px auto 0 auto;
      h4 {
        top: 44px;
        font-size: $size1;
        font-style: italic;
        svg {
          color: $color3;
        }
      }
    }
  }
  .photoCont {
    overflow: hidden;
    display: flex;
    align-self: flex-start;
    @keyframes slide {
      0% {
        transform: translate(0px, 0px);
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
        .fade {
          opacity: 1;
          transition: opacity 1s linear;
        }
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
    }

    .photoCont {
      position: relative;
      top: 120px;
      z-index: 0;
    }
  }
}
</style>