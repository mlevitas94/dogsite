<template>
  <div class="contactCont">
    <p>
      To me, all pets deserve the love and care needed to have a great life —
      and that is my goal when caring for pets in any and all capacities. If
      interested in my dog walking, pet photography and other pet-care services,
      please contact me here:
    </p>

    <a href="#">mail@mail.com</a>
    <div class="social">
        <font-awesome-icon :icon="['fab', 'instagram']" size="2x"/>
        <font-awesome-icon :icon="['fab', 'twitter']" size="2x"/>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss">
@import "../../variables.scss";

.contactCont {
  background-color: $color1;
  padding: 22px;
  line-height: $size1;
  p {
    margin-bottom: 44px;
  }
  a {
    display: block;
    color: black;
  }
  .social{
      margin-top: 22px;
      svg{
          margin-right:22px;
      }
  }
}
</style>