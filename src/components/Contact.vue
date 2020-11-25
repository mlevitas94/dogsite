<template>
  <div class="contactCont">
    <div class="sizeCont">
      <div class="topCont">
        <p>
          To me, all pets deserve the love and care needed to have a great life
          — and that is my goal when caring for pets in any and all capacities.
          If interested in my dog walking, pet photography and other pet-care
          services, please contact me here:
        </p>
        <div>
          <a href="#">mail@mail.com</a>
          <div class="social">
            <font-awesome-icon :icon="['fab', 'instagram']" size="2x" />
            <font-awesome-icon :icon="['fab', 'twitter']" size="2x" />
          </div>
        </div>
      </div>
      <div class="buttons">
        <button
          v-on:click="
            formOn = true;
            contactOn = false;
          "
          class="appointmentReq"
        >
          Appointment Request
        </button>
        <button
          v-on:click="
            contactOn = true;
            formOn = false;
          "
          class="contactReq"
        >
          Contact me
        </button>
      </div>
      <form v-if="contactOn || formOn">
        <div v-if="contactOn" class="formWrap">
          <div class="group">
            <label for="name">Name <span>*</span></label>
            <input type="text" id="name" />
          </div>
          <div class="group">
            <label for="email">Email <span>*</span></label>
            <input type="email" id="email" />
          </div>
          <div class="fullDiv group">
            <label for="message">Message <span>*</span></label>
            <textarea name="message" id="message" rows="5"></textarea>
          </div>
        </div>

        <div v-if="formOn" class="formWrap">
          <div class="group">
            <label for="firstname">First Name <span>*</span></label>
            <input type="text" name="firstname" id="firstname" />
          </div>
          <div class="group">
            <label for="lastname">Last Name <span>*</span></label>
            <input type="text" name="lastname" id="lastname" />
          </div>
          <div class="fullDiv group">
            <label for="email">Email <span>*</span></label>
            <input placeholder="you@example.com" name="email" type="email" id="email" />
          </div>
          <div class="group">
            <label for="phone">Phone <span>*</span></label>
            <input placeholder="e.g. 999-999-9999" name="phone" type="tel" id="phone" />
          </div>
          <div class="group">
            <label for="date">Starting Date <span>*</span></label>
            <input type="date" name="date" id="date" />
          </div>
          <div class="fullDiv options group">
            <div>
              <label for=""
                >What Services are you interested in? <span>*</span>
              </label>
            </div>
            <div>
              <input type="checkbox" name="service" id="optionone" /><label
                for="optionone"
                >Weekly Dog Walking</label
              >
            </div>
            <div>
              <input type="checkbox" name="service" id="optiontwo" /><label
                for="optiontwo"
                >As Needed Dog Walking</label
              >
            </div>
            <div>
              <input type="checkbox" name="service" id="optionthree" /><label
                for="optionthree"
                >Pet Sitting</label
              >
            </div>
            <div>
              <input type="checkbox" name="service" id="optionfour" /><label
                for="optionfour"
                >Medical Visits (Insulin, Post Op Care, etc.)</label
              >
            </div>
            <div>
              <input type="checkbox" name="service" id="optionfive" /><label
                for="optionfive"
                >Senior Pet Care</label
              >
            </div>
            <div>
              <input type="checkbox" name="service" id="optionsix" /><label
                for="optionsix"
                >Pet Photography</label
              >
            </div>
          </div>
          <div class="fullDiv options group">
            <div>
              <label for="">What Pets Do You Have? <span>*</span> </label>
            </div>
            <div>
              <input type="checkbox" name="pet" id="petoptionone" /><label
                for="petoptionone"
                >Dog(s)</label
              >
            </div>
            <div>
              <input type="checkbox" name="pet" id="petoptiontwo" /><label
                for="petoptiontwo"
                >Cat(s)</label
              >
            </div>
            <div>
              <input type="checkbox" name="pet" id="petoptionthree" /><label
                for="petoptionthree"
                >Small Mammal (e.g. Hamster)</label
              >
            </div>
            <div>
              <input type="checkbox" name="pet" id="petoptionfour" /><label
                for="petoptionfour"
                >Reptile</label
              >
            </div>
            <div>
              <input type="checkbox" name="pet" id="petoptionfive" /><label
                for="petoptionfive"
                >Bird</label
              >
            </div>
            <div>
              <input type="checkbox" name="pet" id="petoptionsix" /><label
                for="petoptionsix"
                >Fish</label
              >
            </div>
          </div>
          <div class="fullDiv group">
            <label for="needs">Tell me more about your pet needs</label>
            <textarea name="needs" id="needs" rows="5"></textarea>
          </div>
        </div>
        <button v-on:click="(e) => e.preventDefault()">Submit</button>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      formOn: false,
      contactOn: false,
    };
  },
};
</script>

<style lang="scss">
@import "../../variables.scss";

.contactCont {
  background-color: $color1;
  padding: 22px 22px 66px 22px;
  line-height: $size1;
  .sizeCont {
    max-width: $breakLg;
    margin: 0 auto;
    p {
      margin-bottom: 44px;
      line-height: 22px;
    }
    a {
      display: block;
      color: black;
    }
    button {
      font-family: $font2;
      &:hover {
        cursor: pointer;
      }
    }
    .buttons {
      display: flex;
      flex-direction: column;
      width: 60%;
      margin: 0 auto;
      margin: 22px auto;
      button {
        margin: 11px 0;
        border: none;
        outline: none;
      }
      .appointmentReq {
        background-color: $color3;
        padding: 11px 0;
        border-radius: 20px;
        color: black;
        font-weight: bold;
        font-size: 14px;
      }
      .contactReq {
        background-color: transparent;
        text-decoration: underline;
        color: #636363;
      }
    }
    form {
      display: flex;
      flex-direction: column;
      .formWrap {
        .group{
          margin-bottom: 44px;
        }
        div {
          margin-bottom: 22px;
          label {
            display: block;
            margin-bottom: 5px;
            font-weight: bold;
            span {
              color: red;
            }
          }
          input[type="text"],
          input[type="tel"],
          input[type="email"] {
            width: 100%;
            padding: 5px 10px;
            box-sizing: border-box;
            border-radius: 10px;
            border: 1px solid #cacaca;
            outline: none;
            font-size: 16px;
            &::placeholder {
              color: rgb(189, 189, 189);
            }
          }
          textarea {
            width: 100%;
            box-sizing: border-box;
            border: 1px solid #cacaca;
            border-radius: 10px;
            outline: none;
            padding: 5px 10px;
            resize: vertical;
            font-size: 16px;
          }
        }
        .options {
          div {
            &:first-child {
              font-weight: bold;
            }
            label {
              font-weight: unset;
            }
          }
          label {
            display: inline;
          }
        }
      }
      button {
        width: 100px;
        border: 1px solid #c3c3c3;
        background-color: $color2;
        padding: 5px 0;
        border-radius: 10px;
        margin: 0 auto;
      }
    }
    .social {
      margin-top: 22px;
      svg {
        margin-right: 22px;
      }
    }
  }
  @media screen and (min-width: $breakMd) {
    .sizeCont {
      .topCont {
        display: flex;
        justify-content: space-around;
        p {
          width: 50%;
        }
      }
      .buttons {
        width: 300px;
      }
      form {
        .formWrap {
          display: flex;
          justify-content: space-between;
          flex-flow: wrap;
          width: 80%;
          margin: 0 auto;
          div {
            width: 45%;
          }
          .fullDiv {
            width: 100%;
            textarea {
              width: 100%;
            }
          }
        }
      }
    }
  }
}
</style>