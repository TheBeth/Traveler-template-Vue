<template>
  <div class="contact-container">
    <router-link to="/" class="contact-navlink">go Back</router-link>
    <h1>Test Link</h1>
  </div>
</template>

<script>
export default {
  name: 'Contact',
  metaInfo: {
    title: 'Contact - Traveler template',
    meta: [
      {
        property: 'og:title',
        content: 'Contact - Traveler template',
      },
    ],
  },
}
</script>

<style scoped>
.contact-container {
  width: 100%;
  display: flex;
  overflow: auto;
  min-height: 100vh;
  align-items: center;
  flex-direction: column;
  background-color: #e4d4d4;
}
.contact-navlink {
  align-self: flex-start;
  text-decoration: none;
}
@media(max-width: 1200px) {
  .contact-container {
    background-size: cover;
    background-image: url("https://play.teleporthq.io/static/svg/default-img.svg");
  }
  .contact-navlink {
    align-self: flex-start;
  }
}
</style>
