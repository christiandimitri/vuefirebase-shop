<template>
  <div class="overview">
    <div class="intro">
      <div class="columns pt-6">
        <div class="column">
          <h3 class="subtitle is-3">Overview Page</h3>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book.
          </p>
        </div>
        <div class="column">
          <img :src="require(`@/assets/${'overview.svg'}`)" alt="" class="" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Overview",
  props: {
    msg: String,
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss"></style>
