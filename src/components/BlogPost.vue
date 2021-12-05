<template>
  <div class="post-box">
    <span class="post-views"> {{ views }} </span>
    <h3 class="post-title">{{ title }}</h3>
    <span class="post-date">{{ date }}</span>
    <p class="post-content">
      {{ content | lengthCut(200, " ...") }}
    </p>
    <div class="row">
      <div class="col-sm-6 text-start">
        <span class="post-auther"> {{ auther | lengthCut(25, null) }} </span>
      </div>
      <div class="col-sm-6 text-end">
        <span class="post-category">
          {{ category | lengthCut(25, null) }}
        </span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["title", "views", "date", "content", "auther", "category"],
  name: "blogPost",
};
</script>

<style lang="scss" scoped>
.post-box {
  background-color: #fff;
  padding: 20px;
  box-shadow: 0 0 10px #ddd;
  text-align: left;
  position: relative;
  margin-bottom: 25px;
  .post-views {
    position: absolute;
    top: 0px;
    right: 0px;
    padding: 1px 7px;
    border-bottom-left-radius: 5px;
    background-color: rgb(25, 148, 127);
    color: #fff;
  }
  .post-date {
    color: #888;
    display: block;
    margin: 15px 0 5px;
  }
  .post-content {
    color: #888;
    line-height: 1.8;
    margin-bottom: 20px;
  }
  .post-auther,
  .post-category {
    color: #fff;
    padding: 5px 10px;
    border-radius: 5px;
  }
  .post-auther {
    background-color: rgb(27, 141, 218);
  }
  .post-category {
    background-color: rgb(226, 111, 165);
  }
}
</style>
