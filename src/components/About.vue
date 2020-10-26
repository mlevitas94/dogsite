<template>
  <div class="aboutCont">
    <h3>About Me</h3>
    <span></span>
    <div>
      <img src="../assets/IMG_3070.jpg" />
      <pre>
Ever since I was a young child, I have been surrounded by animals. From your run-of-the-mill dogs and cats to exotic birds and reptiles, pet care has been a life-long passion. 

I started dog walking as a teenager, accepting ice cream as payment. When I was 17, I started working at dog daycares and by the time I was 20, I was working for multiple pet-care companies in the Park Slope and Ditmas Park neighborhoods. 

During this time, I trained with experts in leash aggression and dog anxiety to better understand how to help clients with their dogs and other pets, which lead to several training opportunities that where incorporated into daily walks and other services. I also volunteered at various animal shelters and wildlife reservations, expanding my areas of expertise from just dog walking and training to working with reptiles and birds, like the gray parrot and owls. On top of this, I also fostered kittens, puppies and bunnies, re-homing them in the process. 

In 2015, I co-founded a pet-care company and acted as the general manager during my tenure there. During this time, I became skilled in pet photography, managing several clients at one time, and even branched out into pet and house sitting. Recently, I worked at a Veterinarian Hospital in NYC, where I learned, practiced and gained knowledge in animal health — and also gained my current furry companion, Link. 
          </pre
      >
    </div>
  </div>
</template>

<style lang="scss">
@import "../../variables.scss";
.aboutCont {
  margin-top: 44px;
  position: relative;
  h3 {
    text-align: center;
    font-size: $size3;
  }
  span {
    @include spanDash;
  }
  div {
    background-color: $color1;
    position: relative;
    margin-top: 60vw;
    img {
      width: 80%;
      margin: 0 auto;
      display: block;
      margin-top: 44px;
      border: 20px solid $color1;
      border-radius: 75px;
      position: absolute;
      top: -60vw;
      left: 0;
      right: 0;
    }
    pre {
      width: 100%;
      white-space: pre-wrap;
      padding: 60vw 22px 22px 22px;
      line-height: $size1;
    }
  }
}
</style>