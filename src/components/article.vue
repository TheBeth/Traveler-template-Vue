<template>
  <div class="article-article" v-bind:class="rootClassName">
    <img alt="image" :src="Image" class="article-image" />
    <div class="article-content">
      <div class="article-heading">
        <h2 class="article-header">{{ Header }}</h2>
        <p class="article-description">{{ Description }}</p>
      </div>
      <button class="button-arrow button">
        <span class="article-text">Read more</span>
        <span class="article-text1">&gt;</span>
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Article',
  props: {
    rootClassName: String,
    Image: {
      type: String,
      default: 'https://play.teleporthq.io/static/svg/default-img.svg',
    },
    Header: {
      type: String,
      default: 'Understand your customers',
    },
    Description: {
      type: String,
      default:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    },
  },
}
</script>

<style scoped>
.article-article {
  gap: var(--dl-space-space-oneandhalfunits);
  width: 100%;
  display: flex;
  position: relative;
  max-width: 500px;
  align-items: center;
  flex-direction: column;
}
.article-image {
  width: 100%;
  height: 375px;
  object-fit: cover;
}
.article-content {
  gap: var(--dl-space-space-threeunits);
  width: 100%;
  display: flex;
  align-items: flex-start;
  flex-direction: column;
}
.article-heading {
  gap: var(--dl-space-space-unit);
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  justify-content: center;
}
.article-header {
  color: rgb(53, 43, 42);
  width: 100%;
  font-size: 40px;
  max-width: 800px;
  font-style: normal;
  font-family: Cormorant Infant;
  font-weight: 600;
  line-height: 60px;
}
.article-description {
  color: rgb(53, 43, 42);
  max-width: 800px;
  font-family: Lora;
  line-height: 24px;
}
.article-text {
  font-style: normal;
  font-weight: 500;
}
.article-text1 {
  font-style: normal;
  font-weight: 500;
}




@media(max-width: 767px) {
  .article-content {
    gap: var(--dl-space-space-oneandhalfunits);
  }
  .article-header {
    font-size: 32px;
    line-height: 38px;
  }
  .article-description {
    font-size: 14px;
    line-height: 21px;
  }
  .article-root-class-name {
    max-width: 100%;
  }
  .article-root-class-name1 {
    max-width: 100%;
  }
  .article-root-class-name2 {
    max-width: 100%;
  }
  .article-root-class-name3 {
    max-width: 100%;
  }
}
</style>
