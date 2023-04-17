<template>
  <div class="feature-feature">
    <div class="feature-heading">
      <img alt="image" :src="Icon" class="feature-icon" />
      <h3 class="feature-header">{{ Header }}</h3>
    </div>
    <p class="feature-description">{{ Description }}</p>
  </div>
</template>

<script>
export default {
  name: 'Feature',
  props: {
    Description: {
      type: String,
      default: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    },
    Icon: {
      type: String,
      default: '/playground_assets/thumbs-up.svg',
    },
    Header: {
      type: String,
      default: 'Hand Picked Guides',
    },
  },
}
</script>

<style scoped>
.feature-feature {
  gap: var(--dl-space-space-unit);
  width: 100%;
  display: flex;
  position: relative;
  max-width: 300px;
  align-items: flex-start;
  flex-direction: column;
}
.feature-heading {
  gap: var(--dl-space-space-unit);
  display: flex;
  align-items: center;
  flex-direction: row;
}
.feature-icon {
  height: 22px;
  object-fit: cover;
}
.feature-header {
  color: #ffffff;
  font-size: 24px;
  font-style: normal;
  font-weight: 700;
}
.feature-description {
  color: rgb(255, 255, 255);
  font-size: 18px;
  font-family: Karla;
  line-height: 27px;
}
@media(max-width: 767px) {
  .feature-feature {
    max-width: 100%;
  }
}
</style>
