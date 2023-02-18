<template>
  <div class="h-96 flex flex-col">
    <div
      v-if="gameStore.citiesCount !== 0"
      class="flex-1 flex flex-col-reverse gap-y-2 px-4 pb-5 overflow-y-scroll scrollbar-hide"
    >
      <div>
        <ChatMessage
          v-for="(item, index) in gameStore.citiesChain"
          :key="item"
          :content="item"
          :is-player-message="index % 2 === 0"
        />
      </div>
    </div>
    <div
      v-else
      class="flex justify-center items-center h-96 text-sm text-gray-400"
    >
      Первый участник вспоминает города...
    </div>
  </div>
  <div v-if="gameStore.citiesCount >= citiesCountHintLimit">
    <p class="text-center text-gray-400 text-sm">
      Всего городов перечислено: {{ gameStore.citiesCount }}
    </p>
  </div>
</template>

<script setup lang="ts">
import { useGameStore } from '@/store/game';
import ChatMessage from '@/components/ChatMessage.vue';

const citiesCountHintLimit = 1;

const gameStore = useGameStore();
</script>

<style scoped>
.scrollbar-hide::-webkit-scrollbar {
  display: none;
}
.scrollbar-hide {
  -ms-overflow-style: none;
  scrollbar-width: none;
}
</style>
