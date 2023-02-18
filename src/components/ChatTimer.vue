<template>
  <div class="flex relative h-16">
    <div class="flex justify-between self-center w-full px-4">
      <div>
        {{ currentTurnText }}
      </div>
      <div class="text-xl font-medium">{{ remainingTimeText }}</div>
    </div>
    <div class="absolute bottom-0 h-[5px] w-full bg-gray-100">
      <div
        class="max-w-full h-full bg-violet-300"
        :style="{ width: `${remainingTimePercent}%` }"
      ></div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, watch, onMounted, onUnmounted } from 'vue';
import { useGameStore } from '@/store/game';
import durations from '@/appConstants/durations';

const timer = ref<ReturnType<typeof setInterval>>();
const timestampGap = ref(0);

const emit = defineEmits(['turnTimeExpired']);

const gameStore = useGameStore();

const remainingTimePercent = computed(() => {
  const percent = (100 * timestampGap.value) / durations.gameTurn;
  return percent > 0 ? percent.toFixed(2) : '0';
});

const currentTurnText = computed(() =>
  gameStore.isPlayerTurn ? 'Сейчас ваша очередь' : 'Сейчас очередь соперника'
);

const remainingTimeText = computed(() => {
  const minutes = (Math.floor(timestampGap.value / 1000 / 60) % 60)
    .toString()
    .padStart(2, '0');
  const seconds = (Math.floor(timestampGap.value / 1000) % 60)
    .toString()
    .padStart(2, '0');
  return `${minutes}:${seconds}`;
});

const createTimer = () => {
  timestampGap.value = gameStore.expirationTime - Date.now();
  timer.value = setInterval(() => {
    timestampGap.value = gameStore.expirationTime - Date.now();
  }, 1000);
};

const destroyTimer = () => {
  clearInterval(timer.value);
};

const handleTurnTimeExpired = () => {
  if (timestampGap.value < 0) {
    emit('turnTimeExpired');
  }
};

onMounted(createTimer);

onUnmounted(destroyTimer);

watch(timestampGap, handleTurnTimeExpired);
</script>
