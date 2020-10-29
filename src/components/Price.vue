<template>
  <div class="priceCont">
    <h3>Pricing</h3>
    <span></span>

    <div class="pricingGroups">
      <div class="group">
        <h4>Service One</h4>
        <h5>99$/hr</h5>
        <ul>
          <li>I can do this and that</li>
          <li>I can do this and that</li>
          <li>I can do this and that</li>
        </ul>
      </div>
      <div class="group">
        <h4>Service Two</h4>
        <h5>99$/hr</h5>
        <ul>
          <li>I can do this and that</li>
          <li>I can do this and that</li>
          <li>I can do this and that</li>
        </ul>
      </div>
      <div class="group">
        <h4>Service Three</h4>
        <h5>99$/hr</h5>
        <ul>
          <li>I can do this and that</li>
          <li>I can do this and that</li>
          <li>I can do this and that</li>
        </ul>
      </div>
    </div>
  </div>
</template>


<style lang="scss">
@import "../../variables.scss";

.priceCont {
  margin: 44px auto 0 auto;
  max-width: $breakLg;
  h3 {
    font-size: $size3;
    text-align: center;
  }
  span {
    @include spanDash;
  }
  .pricingGroups {
    margin: 44px 22px;
    display: flex;
    flex-direction: column;
    flex-flow: wrap;
    justify-content: center;
    .group {
      margin: 44px 0;
      width: 100%;
      h4 {
        padding: 10px 5px;
        background-color: $color1;
        font-weight: bold;
      }
      h5 {
        margin: 11px 0 11px 5px;
      }
      ul {
        margin-top: 22px;
        list-style: disc;
        list-style-position: inside;
        li {
          margin: 11px 0 0 5px;
        }
      }
    }
  }
  @media screen and(min-width: $breakMd){
    .pricingGroups{
      h4{
        text-align: center;
      }
      .group{
        width: 40%;
        margin: 22px
      }
    }
  }
}
</style>