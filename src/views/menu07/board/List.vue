<!-- 컴포넌트 UI 정의 -->
<template>
  <div class="card">
    <div class="card-header">게시물 목록</div>
    <div class="card-body">
      <div v-if="page != null">
        <table class="table table-sm table-striped table-bordered">
          <thead>
            <tr>
              <th class="text-center" style="width: 70px">번호</th>
              <th class="text-center">제목</th>
              <th class="text-center" style="width: 90px">글쓴이</th>
              <th class="text-center" style="width: 120px">날짜</th>
              <th class="text-center" style="width: 70px">조회수</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="board in page.boards" :key="board.bno">
              <td class="text-center">{{ board.bno }}</td>
              <td>
                <router-link
                  :to="`/menu07/board/read?bno=${board.bno}&pageNo=${page.pager.pageNo}&hit=true`"
                  >{{ board.btitle }}</router-link
                >
              </td>
              <td class="text-center">{{ board.mid }}</td>
              <td class="text-center">{{ new Date(board.bdate).toLocaleDateString() }}</td>
              <td class="text-center">{{ board.bhitcount }}</td>
            </tr>
            <tr>
              <td colspan="5" class="text-center">
                <button class="btn btn-outline-primary btn-sm mr-1" @click="changePageNo(1)">
                  처음
                </button>
                <button
                  class="btn btn-outline-info btn-sm"
                  v-if="page.pager.groupNo > 1"
                  @click="changePageNo(page.pager.startPageNo - 1)"
                >
                  이전
                </button>
                <button
                  :class="`btn ${
                    pageNo != page.pager.pageNo ? 'btn-outline-success' : 'btn-danger'
                  } btn-sm mr-1`"
                  v-for="pageNo in range(page.pager.startPageNo, page.pager.endPageNo)"
                  :key="pageNo"
                  @click="changePageNo(pageNo)"
                >
                  {{ pageNo }}
                </button>
                <button
                  class="btn btn-outline-info btn-sm mr-1"
                  v-if="page.pager.groupNo < page.pager.totalGroupNo"
                  @click="changePageNo(page.pager.endPageNo + 1)"
                >
                  다음
                </button>
                <button
                  class="btn btn-outline-primary btn-sm"
                  @click="changePageNo(page.pager.totalPageNo)"
                >
                  맨끝
                </button>
              </td>
            </tr>
          </tbody>
        </table>
        <div class="text-right">
          <router-link to="/menu07/board/writeform" class="btn btn-info btn-sm">생성</router-link>
        </div>
      </div>
    </div>
    <alert-dialog
      v-if="alertDialog"
      :loading="loading"
      :message="alertDialogMessage"
      @close="alertDialog = false"
    />
  </div>
</template>

<script>
import board from "@/apis/board";
import AlertDialog from "@/components/menu07/AlertDialog.vue";

export default {
  // 컴포넌트의 대표이름(devtools에 나오는 이름)
  name: "List",
  // 추가하고 싶은 컴포넌트 등록(import something from "/path")
  components: { AlertDialog },
  // 컴포넌트 데이터 정의
  data() {
    return {
      loading: false,
      alertDialog: false,
      alertDialogMessage: "",
      page: null,
    };
  },
  // 컴포넌트 메소드 정의
  methods: {
    changePageNo(pageNo) {
      // 같은 컴포넌트 내에서 URL만 변경
      this.$router.push(`/menu07/board/list?pageNo=${pageNo}`).catch(() => {});
      // URL 변경을 감시하는 Watch에서 데이터 가져옴
    },

    getBoardList(pageNo) {
      this.loading = true;
      this.alertDialog = true;
      board
        .getBoardList(pageNo)
        .then((response) => {
          this.loading = false;
          this.alertDialog = false;
          this.page = response.data;
          // console.log(response.data);
        })
        .catch((error) => {
          if (error.response) {
            if (error.response.status === 403) {
              this.loading = false;
              this.alertDialog = false;
              this.$router.push("/menu07/auth/jwtauth");
            }
          } else {
            this.loading = false;
            this.alertDialogMessage = "네트워크 통신오류";
          }
        });
    },

    range(start, end) {
      const arr = [];
      for (let i = start; i <= end; i++) {
        arr.push(i);
      }
      return arr;
    },
  },
  // 컴포넌트가 생성될 때 실행되는 Hook
  created() {
    let pageNo = this.$route.query.pageNo !== "undefined" ? this.$route.query.pageNo : 1;
    this.getBoardList(pageNo);
  },
  watch: {
    // 브라우저의 뒤로 가기 버튼을 이용해서 URL이 변경되었을 때 데이터 갱신을 위해 $route 감시
    $route(to, from) {
      // URL이 변경되면 해당 페이지 내용을 가져오기
      this.getBoardList(to.query.pageNo !== "undefined" ? to.query.pageNo : 1);
    },
  },
};
</script>

<!-- 컴포넌트 스타일 정의 -->
<style scoped>
/* scoped: 전역 범위X, 컴포넌트 범위 */
</style>