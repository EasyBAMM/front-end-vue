<!-- 컴포넌트 UI 정의 -->
<template>
  <div class="card">
    <div class="card-header">Exam03AttrBinding</div>
    <div class="card-body">
      <p>
        <img v-bind:src="require(`@/assets/photos/${imgName1}`)" height="150px" class="mr-2" />
        <img v-bind:src="require(`@/assets/photos/${imgName2}`)" height="150px" class="mr-2" />
      </p>
      <div>
        <p v-bind:class="className">아름다운 풍경</p>
        <p v-bind:style="css">가을에는 Vue를 공부하고 싶어요.</p>
      </div>

      <hr />
      <button @click="changeData()" class="btn btn-info btn-sm">변경</button>
    </div>
  </div>
</template>

<script>
export default {
  // 컴포넌트의 대표이름(devtools에 나오는 이름)
  name: "Exam03AttrBinding",
  // 추가하고 싶은 컴포넌트 등록(import something from "/path")
  components: {},
  // 컴포넌트 데이터 정의
  data() {
    return {
      imgName1: "photo1.jpg",
      imgName2: "photo2.jpg",
      className: "class1",
      css: "color:blue",
      toggle: true,
    };
  },
  // 컴포넌트 메소드 정의
  methods: {
    changeData() {
      if (this.toggle) {
        this.imgName1 = "photo1.jpg";
        this.imgName2 = "photo2.jpg";
        this.className = "class2";
        this.css = "color: skyblue";
      } else {
        this.imgName1 = "photo2.jpg";
        this.imgName2 = "photo1.jpg";
        this.className = "class1";
        this.css = "color: blue";
      }
      this.toggle = !this.toggle;
    },
  },
};
</script>

<!-- 컴포넌트 스타일 정의 -->
<style scoped>
/* scoped: 전역 범위X, 컴포넌트 범위 */
.class1 {
  color: red;
}
.class2 {
  color: green;
}
</style>