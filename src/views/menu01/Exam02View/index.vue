<!-- 컴포넌트 UI 정의 -->
<template>
  <div class="card">
    <div class="card-header">Exam02View</div>
    <div class="card-body">
      <sub-a-component class="mb-2"/>
      <!-- 프로그래밍 방식 화면 이동 -->
      <button class="btn btn-info btn-sm mr-2" v-on:click="goUrl">/menu01/exam01view</button>
      <button class="btn btn-info btn-sm mr-2" v-on:click="goUrl()">/menu01/exam01view</button>
      <button class="btn btn-info btn-sm mr-2" @click="goUrl">/menu01/exam01view</button>
      <button class="btn btn-info btn-sm mr-2" @click="goUrl()">/menu01/exam01view</button>
    </div>
  </div>
</template>

<script>
import SubAComponent from "./SubAComponent.vue";

export default {
  // 컴포넌트의 대표이름(devtools에 나오는 이름)
  name: "Exam02View",
  // 추가하고 싶은 컴포넌트 등록(import something from "/path")
  components: { SubAComponent },
  // 컴포넌트 데이터 정의
  data: function () {
    return {};
  },
  // 컴포넌트 메소드 정의
  methods: {
    goUrl() {
        this.$router.push("/menu01/exam01view").catch(()=>{});
        // 현재 URL과 동일한 URL로 화면 이동을 할 경우 예외가 발생하므로 예외 처리 코드 필요
        // this.$router.push("/menu01/exam01view").catch(()=>{});

        // this.$router.push({path: "/menu01/exam01view"});
        // this.$router.push({name: "menu01_exam01view"});
    },
  },
};
</script>

<!-- 컴포넌트 스타일 정의 -->
<style scoped>
/* scoped: 전역 범위X, 컴포넌트 범위 */
</style>