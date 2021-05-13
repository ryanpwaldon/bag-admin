<template>
  <dl class="grid grid-cols-1 gap-5 sm:grid-cols-3">
    <div class="flex flex-col justify-center px-4 py-5 space-y-3 overflow-hidden bg-white rounded-lg shadow h-28 sm:p-6" v-for="n in 3" :key="n">
      <div class="w-2/4 h-4 bg-gray-100 rounded-full animate-pulse" />
      <div class="w-3/4 h-4 bg-gray-100 rounded-full animate-pulse" />
    </div>
  </dl>
</template>
