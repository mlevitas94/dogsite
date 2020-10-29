<template>
  <div class="contactCont">
    <div class="sizeCont">
      <p>
        To me, all pets deserve the love and care needed to have a great life —
        and that is my goal when caring for pets in any and all capacities. If
        interested in my dog walking, pet photography and other pet-care
        services, please contact me here:
      </p>

      <a href="#">mail@mail.com</a>
      <div class="social">
        <font-awesome-icon :icon="['fab', 'instagram']" size="2x" />
        <font-awesome-icon :icon="['fab', 'twitter']" size="2x" />
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
          <div>
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

  padding: 22px;
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
    .buttons {
      display: flex;
      flex-direction: column;
      width: 60%;
      margin: 0 auto;
      margin-top: 22px;
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
        }
        textarea {
          width: 100%;
          box-sizing: border-box;
        }
      }
      button {
        width: 40%;
        margin: 0 auto;
        border: 1px solid #848484;
        background-color: $color2;
        padding: 5px 0;
        border-radius: 10px;
      }
    }
    .social {
      margin-top: 22px;
      svg {
        margin-right: 22px;
      }
    }
  }
}
</style>