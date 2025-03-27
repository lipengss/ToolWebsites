<template>
  <el-space class="filter-tag" v-if="filterTagList.length > 1">
    <div
      v-for="tag in filterTagList"
      :key="tag.value"
      class="tag-wrap"
      :class="{ active: tag.value === props.active }"
      :style="{ '--color': tag.color }"
      @click="onActive(tag)"
    >
      <div class="tag">{{ tag.label }}</div>
    </div>
  </el-space>
</template>

<script setup lang="ts">
import { defineProps, defineEmits, computed } from 'vue';
import tagList from '~/assets/website/tagList.json';

interface Tag {
  value: string;
  label: string;
  color: string;
}

const props = defineProps<{
  active: string;
  tags: string[];
}>();

const emit = defineEmits<{
  'update:active': [value: string];
}>();

const filterTagList = computed<Tag[]>(() => {
  return tagList.filter((tag) => props.tags?.includes(tag.value)).concat({ value: 'all', label: '全部', color: '#fff'}).reverse();
});

function onActive(tag: Tag) {
  emit('update:active', tag.value);
}
</script>

<style lang="scss" scoped>
.filter-tag {
	min-height: 30px;
  margin: 0 auto;
  .tag-wrap {
    border-radius: 20px;
    transition: all 0.3s ease;
		padding: 2px;
    &.active {
      border: 1px solid var(--color);
    }
    .tag {
      padding: 4px 16px;
      font-size: 12px;
      color: #333;
      border-radius: 20px;
      background-color: var(--color);
      cursor: pointer;
      transition: all 0.3s ease;
      
      &:hover {
        opacity: 0.8;
      }
    }
  }
}
</style>
