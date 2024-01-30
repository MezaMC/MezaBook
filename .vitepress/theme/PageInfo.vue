<script setup>

import {useData} from "vitepress";
import {ref} from "vue";

const { frontmatter } = useData()
const imageUrl = ref(null);

fetch(`https://api.github.com/users/${frontmatter.value['author']}`)
  .then(resp => resp.json())
  .then(data => imageUrl.value = data['avatar_url'])
  .catch(() => {});

</script>


<template>
  <div class="container">
    <span class="label">Автор статьи</span>
    <div class="user">
      <img :src="imageUrl" alt="avatar" class="avatar" v-if="imageUrl">
      <a class="link" :href="`https://github.com/${frontmatter.author}`" v-if="imageUrl">{{frontmatter.author}}</a>
      <span v-else>{{frontmatter.author}}</span>
    </div>
  </div>
</template>


<style lang="scss" scoped>

.container {

  background-color: var(--vp-c-bg);

  width: auto;
  border-radius: 10px;
  margin-top: 15px;
  margin-bottom: 5px;
  padding: 4px 12px;
  display: flex;
  flex-direction: column;

  .label {
    color: rgba(206, 215, 245, 0.25);
    font-size: 12px;
    //margin-bottom: 6px;
  }

  .user {
    align-items: center;
    display: flex;
    margin-bottom: 6px;
    overflow: scroll;

    .link {
      text-decoration: underline;
      font-size: 16px;
    }

    .avatar {
      width: 30px;
      border-radius: 30px;
      margin-right: 8px;
    }
  }
}

</style>