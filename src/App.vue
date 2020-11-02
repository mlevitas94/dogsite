<template>
  <div id="app">
    <div class="contactButton">
      <font-awesome-icon icon="comment-dots" size="2x" />
    </div>
    <Nav />
    <Intro />
    <About />
    <Price />
    <Contact />
  </div>
</template>

<script>
import Nav from "./components/Nav";
import Intro from "./components/Intro";
import About from "./components/About";
import Price from "./components/Price";
import Contact from "./components/Contact";
export default {
  name: "App",
  components: {
    Nav,
    Intro,
    About,
    Price,
    Contact,
  },
};
</script>

<style lang="scss">
@import '../variables.scss';
#app {
  background-image: url("./assets/dogprint.png");
  background-size: contain;
  background-position:center;
  background-attachment: fixed;
  background-repeat: no-repeat;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  @media screen and (min-width:$breakMd){
    background-position: top 35px center;
  }
}

.contactButton {
  position: fixed;
  bottom: 0;
  right: 0;
  padding: 11px;
  z-index: 100;
  background-color: black;
  border-top-left-radius: 10px;
  svg {
    color: white;
    transform: scaleX(-1);
  }
}

html,
body,
div,
span,
applet,
object,
iframe,
h1,
h2,
h3,
h4,
h5,
h6,
p,
blockquote,
pre,
a,
abbr,
acronym,
address,
big,
cite,
code,
del,
dfn,
em,
img,
ins,
kbd,
q,
s,
samp,
small,
strike,
strong,
sub,
sup,
tt,
var,
b,
u,
i,
center,
dl,
dt,
dd,
ol,
ul,
li,
fieldset,
form,
label,
legend,
table,
caption,
tbody,
tfoot,
thead,
tr,
th,
td,
article,
aside,
canvas,
details,
embed,
figure,
figcaption,
footer,
header,
hgroup,
menu,
nav,
output,
ruby,
section,
summary,
time,
mark,
audio,
video {
  margin: 0;
  padding: 0;
  border: 0;
  font-size: 100%;
  font: inherit;
  vertical-align: baseline;
  box-sizing: border-box;
  scroll-behavior: smooth;
}
/* HTML5 display-role reset for older browsers */
article,
aside,
details,
figcaption,
figure,
footer,
header,
hgroup,
menu,
nav,
section {
  display: block;
}
body {
  line-height: 1;
  background-color: $color2;
}
ol,
ul {
  list-style: none;
}
blockquote,
q {
  quotes: none;
}
blockquote:before,
blockquote:after,
q:before,
q:after {
  content: "";
  content: none;
}
table {
  border-collapse: collapse;
  border-spacing: 0;
}
</style>
