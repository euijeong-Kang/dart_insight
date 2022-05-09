<template id="tem">
  <b-container class="container">
    <b-row calss="head">
      <b-col class="mb-4">
        <div class="title">
          <h1 id="main-title"><span id="DI">Dart Insight</span> Grab</h1>
          <p>Share Your Insight!</p>
        </div>
      </b-col>
    </b-row>
    <b-row>
      <b-col>
        <label for="input-title" class="labels">제목</label>
        <b-form-input
          id="input-title"
          v-model="content.title"
          placeholder="제목을 입력해주세요"
        >
        </b-form-input>
      </b-col>
    </b-row>

    <b-row class="my-3">
      <b-col>
        <label for="tags-basic" class="labels">키워드</label>
        <br />
        <b-form-tags
          id="tags-basic"
          v-model="value"
          tag-pills
          size="lg"
          separator=" "
          placeholder=""
        ></b-form-tags>
        <!-- <b-form-tags id="tags-basic" v-model="content.keyword"></b-form-tags> -->
      </b-col>
    </b-row>
    <b-button class="button" variant="outline-success" @click="post"
      ><span v-if="check">공유하기</span>
      <b-spinner v-if="!check" variant="success" label="Spinning"></b-spinner
    ></b-button>
  </b-container>
</template>

<script>
import { postNewContent } from '@/api/content.js';
export default {
  data() {
    return {
      content: {
        title: '',
        url: '',
        author: 'master',
        createdDate: '',
        keywords: '',
      },
      value: [],
      check: true,
    };
  },
  methods: {
    getInfo() {
      chrome.tabs.query({ active: true, lastFocusedWindow: true }, tabs => {
        this.content.url = tabs[0].url;
        this.content.title = tabs[0].title.split(/-|:|\|/)[0];
      });
    },
    async post() {
      this.check = false;
      if (this.content.title.length > 60) {
        alert('title is too long!');
        return;
      }
      this.content.keywords = this.value.join();
      await postNewContent(this.content);
      this.check = true;
      window.close();
    },
  },
  created() {
    this.getInfo();
  },
};
</script>

<style scoped>
.container {
  width: 450px;
  padding-top: 15%;
  padding-left: 40px;
  padding-right: 40px;
  margin-bottom: 100px;
  float: left;
}
.labels {
  font-weight: bold;
  text-align: left;
  float: left;
}
.mb-5 {
  text-align: left;
  float: left;
}
.button {
  margin-top: 60px;
  width: 170px;
  height: 45px;
}
.title {
  text-align: left;
}
#main-title {
  font-weight: bold;
}
#DI {
  color: #42b983;
}
</style>
