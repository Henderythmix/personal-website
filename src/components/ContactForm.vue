<script setup>
import { supabase } from '@/lib/supabase';
import { onMounted, ref } from 'vue';

const sent = ref(false);

const form = ref({
  name: '',
  email: '',
  purpose: '',
  subject: '',
  message: ''
});

onMounted(() => {
  grecaptcha.render('captcha', {
    'sitekey' : '6LdgtekqAAAAAHdZmrkDk1kzEFYA3aKsOaOZKyeQ',
    'theme' : 'dark',
  });
});

function submitForm() {
  if (grecaptcha.getResponse() == '') {
    alert("Please complete the reCAPTCHA");
    return;
  }

  if (sent.value) {
    alert("If you wish to resubmit, please refresh the page.");
    return;
  }

  for (Element in form.value) {
    if (form.value[Element] == '') {
      alert("Please fill out all fields");
      return;
    }
  }

  supabase
    .from('emails')
    .insert({
      name: form.value.name,
      email: form.value.email,
      purpose: form.value.purpose,
      subject: form.value.subject,
      message: form.value.message
    })
    .then(({ data, error }) => {
      if (error) {
        console.log(error);
      } else {
        sent.value = true;
        alert("Message Sent!");
        console.log(data);
      }
    });
}
</script>

<template>
  <div id="contact-container">
    <h1>Contact Me</h1>
    <form @submit.prevent="sendMessage">
      <input type="text" class="box-container" id="fname" name="name" v-model="form.name" placeholder="Your name..">
      <input type="text" class="box-container" id="fname" name="email" v-model="form.email" placeholder="Your email..">

      <h2>Email Purpose:</h2>
      <div class="email-option">
        <label for="internship">Internship</label>
        <input type="radio" name="jobType" v-model="form.purpose" id="jobType" value="Internship">
      </div>

      <div class="email-option">
        <label for="freelance">Freelancing</label>
        <input type="radio" name="jobType" v-model="form.purpose" id="jobType" value="Freelancing">
      </div>

      <div class="email-option">
        <label for="other">Other</label>
        <input type="radio" name="jobType" v-model="form.purpose" id="jobType" value="Other">
      </div>

      <input type="text" class="box-container" id="subject" name="subject" v-model="form.subject" placeholder="More About Subject..">

      <textarea class="box-container" id="subject" name="context" v-model="form.message" placeholder="Write something.." style="height:200px"></textarea>
      <div id="captcha"></div>
      <button @click="submitForm()" class="btn" type="submit">Submit</button>
    </form>
  </div>
</template>

<style lang="scss" scoped>
@use '@/assets/vars';

#contact-container {
  width: 90%;
}

form {
  display: inline-flex;
  flex-direction: column;
  width: 100%;

  & > * {
    width: calc(100% - 2rem);
  }

  textarea {
    resize: vertical;
  }
}

.email-option {
  display: flex;
  flex-direction: row;
}

button {
  background: linear-gradient(vars.$light-green, vars.$dark-green);
  padding: 1rem;
  margin: 0.5rem;
  border-radius: vars.$corner-radius;
  border: none;
  color: white;
  font-family: monospace;
  font-size: 16px;
  display: inline-block;
}

</style>