<!-- 컴포넌트 UI 정의 -->
<template>
  <div class="card">
    <div class="card-header">Exam07Template</div>
    <div class="card-body">
      <button class="btn btn-info btn-sm mr-2" @click="showModalDialogTemplate = true">
        Show ModalDialogTemplate
      </button>
      <button class="btn btn-info btn-sm mr-2" @click="showDialogA = true">Show DialogA</button>
      <button class="btn btn-info btn-sm mr-2" @click="showDialogB = true">Show DialogB</button>
    </div>
    <modal-dialog-template
      v-if="showModalDialogTemplate"
      @close="showModalDialogTemplate = false"
    />
    <dialog-a v-if="showDialogA" @close="showDialogA = false" />
    <dialog-b v-if="showDialogB" @close="showDialogB = fasle" />
  </div>
</template>

<script>
import ModalDialogTemplate from "@/components/menu02/ModalDialogTemplate.vue";
import DialogA from "./DialogA.vue";
import DialogB from "./DialogB.vue";

export default {
  // 컴포넌트의 대표이름(devtools에 나오는 이름)
  name: "Exam07Template",
  // 추가하고 싶은 컴포넌트 등록(import something from "/path")
  components: { ModalDialogTemplate, DialogA, DialogB },
  // 컴포넌트 데이터 정의
  data() {
    return {
      showModalDialogTemplate: false,
      showDialogA: false,
      showDialogB: false,
    };
  },
  // 컴포넌트 메소드 정의
  methods: {},
};
</script>

<!-- 컴포넌트 스타일 정의 -->
<style scoped>
/* scoped: 전역 범위X, 컴포넌트 범위 */
</style>