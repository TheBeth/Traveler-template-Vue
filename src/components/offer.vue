<template>
  <div class="offer-offer">
    <img alt="image" :src="Image" class="offer-image" />
    <div class="offer-content">
      <div class="offer-details">
        <span class="offer-text">{{ Location }}</span>
        <span class="offer-text1">{{ Guides }}</span>
      </div>
      <span class="offer-text2">{{ Description }}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Offer',
  props: {
    Image: {
      type: String,
      default: 'f8ae1ece-a597-4603-a6d6-066768a42c4c',
    },
    Guides: {
      type: String,
      default: '3 Local guides',
    },
    Description: {
      type: String,
      default:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.',
    },
    Location: {
      type: String,
      default: 'Crete, Greece',
    },
  },
}
</script>

<style scoped>
.offer-offer {
  gap: var(--dl-space-space-oneandhalfunits);
  width: 100%;
  display: flex;
  position: relative;
  flex-direction: column;
}
.offer-image {
  object-fit: cover;
}
.offer-content {
  gap: var(--dl-space-space-oneandhalfunits);
  display: flex;
  flex-direction: column;
}
.offer-details {
  gap: var(--dl-space-space-unit);
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
}
.offer-text {
  font-size: 20px;
  font-style: normal;
  font-weight: 700;
}
.offer-text1 {
  font-size: 20px;
  font-style: normal;
  font-weight: 500;
}
.offer-text2 {
  max-width: 400px;
  line-height: 24px;
}
@media(max-width: 991px) {
  .offer-image {
    width: 100%;
  }
}
</style>
