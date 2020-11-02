<template>
  <div class="navCont">
    <div class="mobileNav">
      <font-awesome-icon icon="bars" size="2x" />
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
  methods : {
    windowChange : (scrollPoint) => {
      document.getElementsByClassName(scrollPoint)[0].scrollIntoView();
}
  }
}

</script>

<style lang='scss'>
@import "../../variables.scss";

.navCont {
  padding-top: 11px;
  position: fixed;
  z-index: 100;
  top: 0;
  width: 100%;
  svg {
    margin: 0 11px 0 auto;
    display: block;
  }
  .deskNav{
    display: none;
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
          &:hover{
            cursor: pointer;
          }
        }
      }
    }
  }
}
</style>