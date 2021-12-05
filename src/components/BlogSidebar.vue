<template>
  <div class="category-box">
    <h3 class="heading">Category</h3>
    <ul>
      <li>IT <span>20</span></li>
      <li>Marks <span>54</span></li>
      <li>Systems <span>16</span></li>
      <li>Secretary <span>7</span></li>
      <li>Manager <span>24</span></li>
      <li>Technical <span>14</span></li>
      <li>Pharmacist <span>34</span></li>
    </ul>
  </div>
</template>

<style lang="scss" scoped>
.category-box {
  background-color: #fff;
  text-align: left;
  box-shadow: 0 0 10px #ddd;
  .heading {
    padding: 15px;
    border-bottom: 2px solid #19947f;
    color: #555;
  }
  ul {
    list-style: none;
    padding: 0;

    li {
      display: flex;
      justify-content: space-between;
      font-size: 18px;
      padding: 10px 20px;
      color: #888;

      &:not(:last-of-type) {
        border-bottom: 1px dotted #eee;
      }
      span {
        background-color: rgb(33, 157, 195);
        color: #fff;
        padding: 1px 5px;
        border-radius: 5px;
      }
    }
  }
}
</style>
