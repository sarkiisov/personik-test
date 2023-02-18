<template>
  <div
    class="p-10 flex flex-col items-center justify-center gap-y-8 text-xl text-center"
  >
    <div>
      <p>{{ headerTextParts[0] }}</p>
      <p>{{ headerTextParts[1] }}</p>
    </div>
    <div
      class="text-3xl font-medium"
      :class="gameStore.isPlayerTurn ? 'text-red-600' : 'text-green-600'"
    >
      00:00
    </div>
    <div>
      <p>Всего было перечислено городов: {{ gameStore.citiesCount }}</p>
      <p>Очень неплохой результат!</p>
    </div>
    <div>
      <p>Последний город названный победителем</p>
      <p class="text-2xl font-medium">
        {{ gameStore.previousCity ? gameStore.previousCity : '-' }}
      </p>
    </div>
    <button
      class="py-2 px-4 bg-violet-600 rounded text-base text-white font-medium"
      @click="startGame"
    >
      Начать новую игру
    </button>
  </div>
</template>

<script setup lang="ts">
import { useGameStore } from '@/store/game';
import { computed } from 'vue';
import { useRouter } from 'vue-router';

const gameStore = useGameStore();
const router = useRouter();

const headerTextParts = computed<[string, string]>(() => {
  const winningTextParts: [string, string] = [
    'Поздравляем тебя с победой!',
    'Твой противник не вспомнил нужный город',
  ];
  const losingTextParts: [string, string] = [
    'К сожалению твое время вышло!',
    'Твой противник победил',
  ];
  return gameStore.isPlayerTurn ? losingTextParts : winningTextParts;
});

const startGame = () => {
  router.push({ name: 'game' });
};
</script>
