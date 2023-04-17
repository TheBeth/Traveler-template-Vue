<template>
  <div class="location-item">
    <img alt="image" :src="Background" class="location-background" />
    <div class="location-content">
      <span class="location-location">{{ Location }}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Location',
  props: {
    Background: {
      type: String,
      default: '/playground_assets/destination-1-400h.png',
    },
    Location: {
      type: String,
      default: 'Tokyo, Japan',
    },
  },
}
</script>

<style scoped>
.location-item {
  flex: 1;
  display: flex;
  position: relative;
  align-items: center;
  flex-direction: row;
}
.location-background {
  flex: 1;
  height: 400px;
  object-fit: cover;
}
.location-content {
  top: 0px;
  flex: 1;
  left: 0px;
  right: 0px;
  bottom: 0px;
  height: 100%;
  margin: auto;
  display: flex;
  position: absolute;
  align-items: center;
  flex-direction: row;
  justify-content: center;
}
.location-location {
  color: #ffffff;
  font-size: 20px;
  font-style: normal;
  text-align: center;
  font-weight: 700;
}
</style>
