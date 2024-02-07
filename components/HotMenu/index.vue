<template>
   <el-affix :offset="127">
    <el-card header="在线工具" shadow="never" class="mb20">
      <div v-for="link in props.anchorPoints" :key="link.id" class="link-item">
        <el-link :type="activeSection === link.id ? 'success' : 'info'" @click="scrollTo(link.id)">{{  link.name }}</el-link>
      </div>
    </el-card>
    <el-card header="热门推荐" shadow="never">
      <div v-for="route in rankRouteList" :key="route.path" class="link-item">
        <el-link :icon="Link" :type="activeRoute === route.path ? 'primary' : 'default'" :href="route.path">{{ route.name }}</el-link>
      </div>
    </el-card>
  </el-affix>
</template>
<script setup lang="ts">
import { withDefaults, defineProps, ref, onMounted, onUnmounted, computed } from 'vue'
import { Link } from '@element-plus/icons-vue';
import { routeList } from '~/assets/utils/routeList'
import { flattenArray } from '~/assets/utils/tools'
import { useRoute } from 'vue-router';

const route = useRoute()


interface Props {
  anchorPoints: Array<AnchorPoint>
}
const props = withDefaults(defineProps<Props>(), {

})

const activeRoute = ref('')
const activeSection = ref('')

const rankRouteList = computed(() => {
  const sortedArray  = flattenArray(routeList).filter(item => item.rank).sort((a, b) => b.rank - a.rank)
  return sortedArray.slice(0, 10)
})



function scrollTo(selector: string) {
  const element = document.getElementById(selector);
  if (element) {
    element.scrollIntoView({ behavior: "smooth" });
  }
};

const updateActiveSection = () => {
  for (const section of props.anchorPoints) {
    const el = document.getElementById(section.id);
    if (el) {
      const rect = el.getBoundingClientRect();
      console.log(rect)
      if (rect.top <= 0 && rect.bottom > 0) {
        activeSection.value = section.id;
        break;
      }
    }
  }
};
onMounted(() => {
  const scrollBox = document.getElementById('el-main-scroll-box')
  if (scrollBox) {
    scrollBox.addEventListener('scroll', updateActiveSection);
  }
});

onUnmounted(() => {
  const scrollBox = document.getElementById('el-main-scroll-box')
  if (scrollBox) {
    scrollBox.removeEventListener('scroll', updateActiveSection);
  }
});

watch(() => route.path, path => {
  activeRoute.value = path
}, {
  immediate: true
})


</script>
<style lang="scss" scoped>
.link-item{
  padding: 8px;
  border-bottom: 1px solid var(--el-border-color-light);
}

</style>