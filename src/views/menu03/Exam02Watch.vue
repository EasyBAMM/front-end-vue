<!-- 컴포넌트 UI 정의 -->
<template>
  <div class="card">
    <div class="card-header">Exam02Watch</div>
    <div class="card-body">
      <div class="form-group row">
        <label class="col-sm-2 col-form-label">UserId</label>
        <div class="col-sm-10">
          <input type="text" class="form-control" v-model="userId" />
        </div>
      </div>
      <hr />
      <form>
        <div class="form-group row">
          <label class="col-sm-2 col-form-label">Name</label>
          <div class="col-sm-10">
            <input type="text" class="form-control" v-model="product.name" />
          </div>
        </div>
        <div class="form-group row">
          <label class="col-sm-2 col-form-label">Company</label>
          <div class="col-sm-10">
            <input type="text" class="form-control" v-model="product.company" />
          </div>
        </div>
        <div class="form-group row">
          <label class="col-sm-2 col-form-label">Price</label>
          <div class="col-sm-10">
            <input
              type="number"
              :class="`form-control ${bgColor}`"
              v-model.number="product.price"
            />
          </div>
        </div>
      </form>
      <hr />
      <button @click="handleButton" class="btn btn-info btn-sm">product 객체 변경</button>
    </div>
  </div>
</template>

<script>
export default {
  // 컴포넌트의 대표이름(devtools에 나오는 이름)
  name: "Exam02Watch",
  // 추가하고 싶은 컴포넌트 등록(import something from "/path")
  components: {},
  // 컴포넌트 데이터 정의
  data() {
    return {
      userId: "user1",
      product: {
        name: "정장",
        company: "한섬",
        price: 100000,
      },
      bgColor: "",
    };
  },
  // 컴포넌트 메소드 정의
  methods: {
    handleButton() {
      this.product = {
        name: "정장2",
        company: "한섬2",
        price: 200000,
      };
    },
  },
  // 컴포넌트 데이터 감시 정의
  watch: {
    /* 변경데이터 감시 */
    userId(newValue, oldValue) {
      console.log("newValue: ", newValue);
      console.log("oldValue: ", oldValue);
      console.log("this.userId: ", this.userId);
    },
    /* 객체데이터 감시 */
    product: {
      deep: true,
      handler(newValue, oldValue) {
        console.log("newValue: ", newValue);
        console.log("oldValue: ", oldValue);
      },
    },
    "product.name"(newValue, oldValue) {
      console.log("newValue: ", newValue);
      console.log("oldValue: ", oldValue);
      console.log("this.userId: ", this.product.name);
    },
    "product.price"(newValue, oldValue) {
      if (newValue < 0) {
        this.bgColor = "bg-danger";
      } else if (newValue >= 0 && newValue <= 100000) {
        this.bgColor = "bg-success";
      } else {
        this.bgColor = "bg-primary";
      }
    },
  },
};
</script>

<!-- 컴포넌트 스타일 정의 -->
<style scoped>
/* scoped: 전역 범위X, 컴포넌트 범위 */
</style>