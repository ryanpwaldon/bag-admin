<template>
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24" class="text-yellow-400 transform -rotate-12">
    <g stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2">
      <path ref="spark1" d="M5 3v4M3 5h4" class="origin-center" style="transform-box: fill-box" />
      <path ref="spark2" d="M6 17v4m-2-2h4" class="origin-center" style="transform-box: fill-box" />
      <path
        ref="spark3"
        d="M15.286 9.857L13 3l-2.286 6.857L5 12l5.714 2.143L13 21l2.286-6.857L21 12l-5.714-2.143z"
        class="origin-center"
        style="transform-box: fill-box"
      />
    </g>
  </svg>
</template>

<script lang="ts">
import anime from 'animejs'
import { defineComponent, onMounted, ref } from 'vue'
export default defineComponent({
  setup() {
    const spark1 = ref()
    const spark2 = ref()
    const spark3 = ref()
    onMounted(() => {
      const tl = anime.timeline({ duration: 2000, endDelay: -800 })
      tl.add({ targets: spark1.value, scale: [0, 1], rotate: [-180, 0] }, 200)
      tl.add({ targets: spark2.value, scale: [0, 1], rotate: [-180, 0] }, 400)
      tl.add({ targets: spark3.value, scale: [0, 1], rotate: [-45, 0], easing: 'easeOutElastic(1, 1)' }, 600)
    })
    return { spark1, spark2, spark3 }
  }
})
</script>
