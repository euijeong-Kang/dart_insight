<template>
  <b-container>
    <b-row>
      <b-col>
        <h3>Share Your Insight!</h3>
      </b-col>
    </b-row>
    <b-card id="post-card">
      <b-row class="my-3">
        <b-col>
          <label for="input-title" class="float-left">제목</label>
          <b-form-input
            id="input-title"
            v-model="title"
            placeholder="제목을 입력해주세요"
          >
          </b-form-input>
        </b-col>
      </b-row>
      <b-row class="my-3">
        <b-col>
          <label for="input-description">선정이유</label>
          <b-form-input
            id="input-description "
            v-model="description"
            placeholder="선정이유를 간단히 입력해주세요"
          >
          </b-form-input>
        </b-col>
      </b-row>
      <b-button variant="outline-primary" @click="getUrl">공유하기</b-button>
    </b-card>
  </b-container>
</template>

<script>
export default {
  data() {
    return {
      title: '',
      url: '',
      description: '',
    };
  },
  methods: {
    getInfo() {
      chrome.tabs.query({ active: true, lastFocusedWindow: true }, tabs => {
        this.url = tabs[0].url;
        this.title = tabs[0].title;
      });
    },
  },
  created() {
    this.getInfo();
  },
};
</script>

<style scoped>
#post-card {
  background-color: #d9e4f3;
}
</style>
