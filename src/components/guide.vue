<template>
  <div class="guide-guide" v-bind:class="rootClassName">
    <img alt="image" :src="Portrait" class="guide-portrait" />
    <div class="guide-details">
      <h3 class="guide-name">{{ Name }}</h3>
      <span class="guide-location">{{ Location }}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Guide',
  props: {
    Name: {
      type: String,
      default: 'Miura Avaron',
    },
    rootClassName: String,
    Portrait: {
      type: String,
      default: '/playground_assets/guide-1.png',
    },
    Location: {
      type: String,
      default: 'Tokyo, Japan',
    },
  },
}
</script>

<style scoped>
.guide-guide {
  gap: var(--dl-space-space-oneandhalfunits);
  width: 100%;
  display: flex;
  position: relative;
  align-items: center;
  flex-direction: column;
}
.guide-portrait {
  flex: 1;
  width: 100%;
  object-fit: cover;
}
.guide-details {
  gap: var(--dl-space-space-halfunit);
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
}
.guide-name {
  color: #352B2A;
  font-size: 20px;
  font-style: normal;
  font-weight: 700;
}
.guide-location {
  font-style: normal;
  font-weight: 500;
}
.guide-root-class-name {
  flex: 0 0 auto;
}
.guide-root-class-name1 {
  flex: 0 0 auto;
}
.guide-root-class-name2 {
  flex: 0 0 auto;
}
@media(max-width: 767px) {
  .guide-guide {
    gap: var(--dl-space-space-unit);
  }
  .guide-details {
    gap: 4px;
  }
}
</style>
