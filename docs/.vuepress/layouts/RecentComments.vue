<script setup lang="ts">
import { ref, onMounted } from "vue";

interface Comment {
  objectId: string;
  comment: string;
  nick: string;
  url: string;
  createdAt: string;
}

const comments = ref<Comment[]>([]);

const APP_ID = "MY834kfYafAGoLSazf1gyGmt-MdYXbMMI";
const APP_KEY = "ujGi4CVGnRAe3vh6zxf2irPk";
const API_URL = "https://my834kfy.api.lncldglobal.com/1.1/classes/Comment";

onMounted(async () => {
  try {
    const res = await fetch(`${API_URL}?limit=100&order=-createdAt`, {
      headers: {
        "X-LC-Id": APP_ID,
        "X-LC-Key": APP_KEY,
      },
    });
    const data = await res.json();
    comments.value = data.results || [];
  } catch (err) {
    console.error("❌ 获取 LeanCloud 评论失败:", err);
  }
});
</script>

<template>
  <div class="recent-comments">
    <h1>🗨️ 最近评论</h1>
    <div class="comment-list">
      <div
        class="comment-card"
        v-for="comment in comments"
        :key="comment.objectId"
        @click="() => window.open(comment.url + '#waline-comment-' + comment.objectId, '_blank')"
      >
        <p class="comment-content">💬 {{ comment.comment }}</p>
        <p class="comment-meta">
          👤 {{ comment.nick }} · 🕒 {{ new Date(comment.createdAt).toLocaleString() }}
        </p>
        <p class="comment-link">🔗 {{ comment.url }}</p>
      </div>
    </div>
  </div>
</template>

<style scoped>
.recent-comments {
  max-width: 960px;
  margin: auto;
  padding: 2rem;
}
.comment-list {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(420px, 1fr));
  gap: 1.5rem;
}
.comment-card {
  padding: 1rem;
  border-radius: 12px;
  background: #f5f7fa;
  border: 1px solid #e0e0e0;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.04);
  cursor: pointer;
  transition: transform 0.2s ease;
}
.comment-card:hover {
  transform: translateY(-3px);
}
.comment-content {
  font-size: 1rem;
  margin-bottom: 0.5rem;
}
.comment-meta {
  font-size: 0.875rem;
  color: #666;
}
.comment-link {
  font-size: 0.75rem;
  color: #999;
  word-break: break-all;
}
</style>
