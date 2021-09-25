<template>
  <div class="orders">
    <div class="intro">
      <div class="columns pt-6 is-justify-content-center is-align-items-center">
        <div class="column">
          <h3 class="subtitle is-3">Orders Page</h3>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book.
          </p>
        </div>
        <div class="column">
          <figure class="image is-3by2">
            <img :src="require(`@/assets/${'orders.svg'}`)" alt="" class="" />
          </figure>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Orders",
  props: {
    msg: String,
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss"></style>
