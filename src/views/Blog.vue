<template>
  <div class="container">
    <div class="row">
      <div class="blog-post col-md-8">
        <div class="post-area">
          <blogPost
            v-for="post in posts"
            :key="post.id"
            :title="post.title"
            :views="post.views"
            :date="post.date"
            :content="post.content"
            :auther="post.auther"
            :category="post.category"
          />
        </div>
      </div>
      <div class="blog-category col-md-4">
        <div class="sidebar">
          <blogSidebar />
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import blogPost from "@/components/BlogPost";
import blogSidebar from "@/components/BlogSidebar";
import JsonPosts from "@/Json/blog_posts.json";

export default {
  name: "Blog",
  data() {
    return {
      posts: JsonPosts,
    };
  },
  components: {
    blogPost,
    blogSidebar,
  },
};
</script>

<style lang="scss" scoped>
.container {
  margin-top: 40px;
}
</style>
