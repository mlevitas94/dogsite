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
            () => {
              formOn = true;
              contactOn = false;
            }
          "
          class="appointmentReq"
        >
          Appointment Request
        </button>
        <button
          v-on:click="
            () => {
              contactOn = true;
              formOn = false;
            }
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
            <input maxlength="100" name="name" type="text" id="name" />
          </div>
          <div class="group">
            <label for="email"
              >Email <span>*</span>
              <span class="emailErr err">Invalid Email</span></label
            >
            <input maxlength="75" name="email" type="email" id="email" />
          </div>
          <div class="fullDiv group">
            <label for="message">Message <span>*</span></label>
            <textarea
              maxlength="2000"
              name="message"
              id="message"
              rows="5"
            ></textarea>
          </div>
        </div>

        <div v-if="formOn" class="formWrap">
          <div class="group">
            <label for="firstname">First Name <span>*</span></label>
            <input maxlength="50" type="text" name="firstname" id="firstname" />
          </div>
          <div class="group">
            <label for="lastname">Last Name <span>*</span></label>
            <input maxlength="50" type="text" name="lastname" id="lastname" />
          </div>
          <div class="fullDiv group">
            <label for="email"
              >Email <span>* </span>
              <span class="emailErr err">Invalid Email</span></label
            >
            <input
              maxlength="75"
              placeholder="you@example.com"
              name="email"
              type="email"
              id="email"
            />
          </div>
          <div class="group">
            <label for="phone"
              >Phone <span>*</span>
              <span class="phoneErr err">Invalid Phone</span></label
            >
            <input
              placeholder="e.g. 999-999-9999"
              name="phone"
              type="tel"
              maxlength="15"
              id="phone"
            />
          </div>
          <div class="group">
            <label for="date">Starting Date <span>*</span></label>
            <input type="date" name="date" id="date" />
          </div>
          <div class="group">
            <label for="zip"
              >Zip Code <span>*</span>
              <span class="zipErr err">Invalid Zip</span></label
            >
            <input maxlength="5" type="tel" name="zip" id="zip" />
          </div>
          <div class="fullDiv options group">
            <div>
              <label for=""
                >What Services are you interested in? <span>*</span>
              </label>
            </div>
            <div>
              <input
                type="checkbox"
                name="service"
                id="optionone"
                value="Weekly Dog Walking"
              /><label for="optionone">Weekly Dog Walking</label>
            </div>
            <div>
              <input
                type="checkbox"
                name="service"
                id="optiontwo"
                value="As Needed Dog Walking"
              /><label for="optiontwo">As Needed Dog Walking</label>
            </div>
            <div>
              <input
                type="checkbox"
                name="service"
                id="optionthree"
                value="Pet Sitting"
              /><label for="optionthree">Pet Sitting</label>
            </div>
            <div>
              <input
                type="checkbox"
                name="service"
                id="optionfour"
                value="Medical Visits (Insulin, Post Op Care, etc.)"
              /><label for="optionfour"
                >Medical Visits (Insulin, Post Op Care, etc.)</label
              >
            </div>
            <div>
              <input
                type="checkbox"
                name="service"
                id="optionfive"
                value="Senior Pet Care"
              /><label for="optionfive">Senior Pet Care</label>
            </div>
            <div>
              <input
                type="checkbox"
                name="service"
                id="optionsix"
                value="Pet Photography"
              /><label for="optionsix">Pet Photography</label>
            </div>
          </div>
          <div class="fullDiv options group">
            <div>
              <label for="">What Pets Do You Have? <span>*</span> </label>
            </div>
            <div>
              <input
                type="checkbox"
                name="pet"
                id="petoptionone"
                value="Dog(s)"
              /><label for="petoptionone">Dog(s)</label>
            </div>
            <div>
              <input
                type="checkbox"
                name="pet"
                id="petoptiontwo"
                value="Cat(s)"
              /><label for="petoptiontwo">Cat(s)</label>
            </div>
            <div>
              <input
                type="checkbox"
                name="pet"
                id="petoptionthree"
                value="Small Mammal (e.g. Hamster)"
              /><label for="petoptionthree">Small Mammal (e.g. Hamster)</label>
            </div>
            <div>
              <input
                type="checkbox"
                name="pet"
                id="petoptionfour"
                value="Reptile"
              /><label for="petoptionfour">Reptile</label>
            </div>
            <div>
              <input
                type="checkbox"
                name="pet"
                id="petoptionfive"
                value="Bird"
              /><label for="petoptionfive">Bird</label>
            </div>
            <div>
              <input
                type="checkbox"
                name="pet"
                id="petoptionsix"
                value="Fish"
              /><label for="petoptionsix">Fish</label>
            </div>
          </div>
          <div class="fullDiv group">
            <label for="needs">Tell me more about your pet needs</label>
            <textarea
              maxlength="2000"
              name="needs"
              id="needs"
              rows="5"
            ></textarea>
          </div>
        </div>
        <button
          v-on:click="
            (e) => {
              e.preventDefault();
              submitForm();
            }
          "
        >
          Submit
        </button>
        <span class="buttonErr">Please make sure all fields are valid</span>
      </form>
      <div class="emailResult">
        <span class="fail"
          ><font-awesome-icon :icon="['fas', 'times']" size="1x" /> Something
          went wrong. Please try again later</span
        >
        <span class="success"
          ><font-awesome-icon :icon="['fas', 'check']" size="1x" /> Thanks for
          your request! I will get back to you shortly to discuss further
          details.</span
        >
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      formOn: false,
      contactOn: false,
    };
  },

  methods: {
    addBlurs: function () {
      document.querySelectorAll("input, textarea").forEach((input) => {
        input.addEventListener("blur", () => {
          if (!input.value) {
            return;
          }
          if (input.name === "email") {
            const emailRegex = RegExp(
              /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/ //eslint-disable-line
            );
            if (!emailRegex.test(input.value)) {
              return;
            }
            document.querySelector(".emailErr").style.display = "none";
          }
          if (input.name === "phone") {
            const telRegex = RegExp(
              /^([\+][0-9]{1,3}([ \.\-])?)?([\(]{1}[0-9]{3}[\)])?([0-9A-Z \.\-]{1,32})((x|ext|extension)?[0-9]{1,4}?)$/g //eslint-disable-line
            );
            if (!telRegex.test(input.value)) {
              return;
            }
            document.querySelector(".phoneErr").style.display = "none";
          }
          if (input.name === "zip") {
            if (!/\d{5}/.test(input.value)) {
              return;
            }
            document.querySelector(".zipErr").style.display = "none";
          }
          input.style.background = "white";
        });
      });
    },
    submitForm: function () {
      this.addBlurs();
      const inputs = document.querySelectorAll("input, textarea");
      const errorLabels = document.querySelectorAll(".err");
      let errorMade = false;
      let serviceSelected = this.formOn ? false : true;
      let petSelected = this.formOn ? false : true;
      document.querySelector(".buttonErr").style.display = "none";
      errorLabels.forEach((err) => {
        err.style.display = "none";
      });

      for (let i = 0; i < inputs.length; i++) {
        inputs[i].style.background = "white";
        if (!inputs[i].value && inputs[i].name !== "needs") {
          errorMade = true;
          inputs[i].style.background = "#ffe2e2";
        }
        if (inputs[i].name === "email") {
          const emailRegex = RegExp(
            /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/ //eslint-disable-line
          );
          if (!emailRegex.test(inputs[i].value)) {
            errorMade = true;
            document.querySelector(".emailErr").style.display = "inline";
            inputs[i].style.background = "#ffe2e2";
          }
        }
        if (inputs[i].name === "phone") {
          const telRegex = RegExp(
            /^([\+][0-9]{1,3}([ \.\-])?)?([\(]{1}[0-9]{3}[\)])?([0-9A-Z \.\-]{1,32})((x|ext|extension)?[0-9]{1,4}?)$/g //eslint-disable-line
          );
          if (!telRegex.test(inputs[i].value)) {
            errorMade = true;
            document.querySelector(".phoneErr").style.display = "inline";
            inputs[i].style.background = "#ffe2e2";
          }
        }
        if (inputs[i].name === "zip") {
          if (!/\d{5}/.test(inputs[i].value)) {
            errorMade = true;
            document.querySelector(".zipErr").style.display = "inline";
            inputs[i].style.background = "#ffe2e2";
          }
        }
        if (inputs[i].type === "checkbox") {
          if (inputs[i].name === "pet" && inputs[i].checked === true) {
            petSelected = true;
          }
          if (inputs[i].name === "service" && inputs[i].checked === true) {
            serviceSelected = true;
          }
        }
      }
      if (errorMade || !serviceSelected || !petSelected) {
        document.querySelector(".buttonErr").style.display = "inline";
        return;
      }

      document.querySelector("form button").disabled = true;

      const payload = {
        formType: this.contactOn ? "contact" : "request",
        firstName:
          document.querySelector("#firstname") === null
            ? null
            : document.querySelector("#firstname").value,
        lastName:
          document.querySelector("#lastname") === null
            ? null
            : document.querySelector("#lastname").value,
        name:
          document.querySelector("#name") === null
            ? null
            : document.querySelector("#name").value,
        email:
          document.querySelector("#email") === null
            ? null
            : document.querySelector("#email").value,
        phone:
          document.querySelector("#phone") === null
            ? null
            : document.querySelector("#phone").value,
        date:
          document.querySelector("#date") === null
            ? null
            : document.querySelector("#date").value,
        zip:
          document.querySelector("#zip") === null
            ? null
            : document.querySelector("#zip").value,
        services:
          document.querySelectorAll("input[name='service']") === null
            ? null
            : [...document.querySelectorAll("input[name='service']")]
                .filter((input) => input.checked === true)
                .map((input) => input.value),
        petTypes:
          document.querySelectorAll("input[name='pet']") === null
            ? null
            : [...document.querySelectorAll("input[name='pet']")]
                .filter((input) => input.checked === true)
                .map((input) => input.value),
        needs:
          document.querySelector("#needs") === null
            ? null
            : document.querySelector("#needs").value,
        message:
          document.querySelector("#message") === null
            ? null
            : document.querySelector("#message").value,
      };

      axios
        .post("/email", payload)
        .then((res) => {
          console.log(res);
          this.contactOn = false;
          this.formOn = false;

          document.querySelector(".emailResult").style.transform =
            "translate(0px, -70px)";
          document.querySelector(".emailResult .success").style.display =
            "flex";
          document.querySelector(".emailResult .fail").style.display = "none";
          setTimeout(() => {
            document.querySelector(".emailResult").style.transform =
              "translate(0px, 0px)";
          }, 5000);
        })
        .catch((err) => {
          console.log(err);
          this.contactOn = false;
          this.formOn = false;
          document.querySelector(".emailResult").style.transform =
            "translate(0px, -70px)";
          document.querySelector(".emailResult .fail").style.display = "flex";
          document.querySelector(".emailResult .success").style.display =
            "none";
          setTimeout(() => {
            document.querySelector(".emailResult").style.transform =
              "translate(0px, -55px)";
          }, 5000);
        });
    },
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
    .emailResult {
      display: flex;
      justify-content: center;
      position: fixed;
      width: 100%;
      left: 0;
      bottom: -55px;
      transition: transform 0.3s linear;
      transform: translate(0px, 0px);
      span {
        padding: 11px 22px;
        border-radius: 20px;
        color: white;
        align-items: center;
        svg {
          background: white;
          padding: 5px;
          border-radius: 50%;
          margin-right: 11px;
        }
      }
      .fail {
        display: none;
        background-color: red;
        svg {
          color: red;
        }
      }
      .success {
        display: none;
        background: #49ab4c;
        svg {
          color: #49ab4c;
        }
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
      .buttonErr {
        text-align: center;
        color: red;
        margin-top: 22px;
        display: none;
      }
      .formWrap {
        .group {
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
            .err {
              display: none;
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