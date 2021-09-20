<template>
  <div class="hero is-medium" :class="heroType">
    <div class="hero-body is-paddingless">
      <div class="columns is-gapless is-vcentered">
        <div class="column">
          <div class="container has-text-left px-6">
            <p class="title is-size-2 is-uppercase has-text-weight-medium">
              {{ title }}
            </p>
            <p class="subtitle is-size-6">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book.
            </p>
            <div class="buttons">
              <b-button
                v-if="btnOne"
                type="is-primary is-light px-6"
                outlined
                >{{ btnOne }}</b-button
              >
              <b-button
                v-if="btnTwo"
                type="is-primary px-6"
                inverted
                outlined
                >{{ btnTwo }}</b-button
              >
            </div>
          </div>
        </div>
        <div class="column">
          <div class="container">
            <img
              class="hero-image"
              :src="require(`@/assets/${imgSrc}`)"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Hero",
  props: ["title", "imgSrc", "heroType", "btnOne", "btnTwo"],
};
</script>

<style lang="scss" scoped>
.hero-image {
  object-fit: cover;
  clip-path: polygon(3% 0, 100% 0, 100% 100%, 3% 100%);
}

.hero.is-primary {
  background-color: #563fab !important;
}
</style>
