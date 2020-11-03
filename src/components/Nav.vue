<template>
  <div class="navCont">
    <div class="mobileNav">
      <font-awesome-icon icon="bars" size="2x" v-on:click="mobileNavDrop" />
      <div class="navDrag">
        <ul>
          <li v-on:click="windowChange('aboutCont')">About</li>
          <li v-on:click="windowChange('priceCont')">Pricing</li>
          <li v-on:click="windowChange('contactCont')">Contact</li>
        </ul>
      </div>
    </div>
    <div class="deskNav">
      <ul>
        <li v-on:click="windowChange('aboutCont')">About</li>
        <li v-on:click="windowChange('priceCont')">Pricing</li>
        <li v-on:click="windowChange('contactCont')">Contact</li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    mobileNavDrop: function(){
      const drag = document.querySelector(".navDrag");
      drag.classList.toggle("dragged");
    },
    windowChange: function(scrollPoint) {
      document.getElementsByClassName(scrollPoint)[0].scrollIntoView();
      this.mobileNavDrop();
    },
  },
};
</script>

<style lang='scss'>
@import "../../variables.scss";

.navCont {
  padding-top: 11px;
  position: fixed;
  z-index: 100;
  top: 0;
  width: 100%;
  .deskNav {
    display: none;
  }
  .mobileNav {
    position: relative;
    svg {
      margin: 0 11px 0 auto;
      display: block;
      &:hover {
        cursor: pointer;
      }
    }
    .dragged {
      transform: translate(0%, 0%) !important;
      border-bottom-left-radius: 50%;
    }
    .navDrag {
      width: 300px;
      height: 300px;
      background-color: $color1;
      position: absolute;
      top: -11px;
      right: 0;
      z-index: -1;
      transform: translate(100%, -100%);
      transition: all 0.3s linear;
      ul {
        height: 100%;
        font-size: $size3;
        text-align: center;
        display: flex;
        justify-content: center;
        flex-direction: column;
        li {
          margin: 22px 0;
          &:hover {
            cursor: pointer;
          }
        }
      }
    }
  }
  @media screen and (min-width: $breakMd) {
    background-color: $color1;
    .mobileNav {
      display: none;
    }
    .deskNav {
      display: block;
      display: flex;
      flex-direction: row-reverse;
      ul {
        display: flex;
        font-size: $size2;
        li {
          margin: 0 44px;
          padding-bottom: 11px;
          &:hover {
            cursor: pointer;
          }
        }
      }
    }
  }
}
</style>