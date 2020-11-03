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
        <button class="appointmentReq">Appointment Request</button>
        <button class="contactReq">Contact me</button>
      </div>
      <form>
        <div class="contactForm">
          <div>
            <label for="">Name</label>
            <input type="text" />
          </div>
          <div>
            <label for="">Email</label>
            <input type="email" />
          </div>
          <div class="messageCont">
            <label for="">Message</label>
            <textarea name="message" id="" rows="5"></textarea>
          </div>
        </div>
        <button>Submit</button>
      </form>
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

  padding: 22px 22px 66px 22px;
  line-height: $size1;
  .sizeCont {
    max-width: $breakLg;
    margin: 0 auto;
    p {
      margin-bottom: 44px;
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
        background-color: #4c4c4c;
        padding: 11px 0;
        border-radius: 20px;
        color: white;
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
      div {
        margin-bottom: 22px;
        label {
          display: block;
          margin-bottom: 5px;
        }
        input {
          width: 100%;
          padding: 5px 10px;
          box-sizing: border-box;
          border-radius: 10px;
          border: 1px solid #cacaca;
          outline: none;
        }
        textarea {
          width: 100%;
          box-sizing: border-box;
          border: 1px solid #cacaca;
          border-radius: 10px;
          outline: none;
          padding: 5px 10px;
          resize: vertical;
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
        .contactForm {
          display: flex;
          justify-content: space-between;
          flex-flow: wrap;
          width: 80%;
          margin: 0 auto;
          div {
            width: 45%;
          }
          .messageCont {
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