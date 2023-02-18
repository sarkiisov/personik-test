<template>
  <GameTimer @turn-time-expired="finishGame" />
  <ChatWindow />
  <ChatForm />
</template>

<script setup lang="ts">
import { onBeforeMount, watch } from 'vue';
import ChatForm from '@/components/ChatForm.vue';
import GameTimer from '@/components/ChatTimer.vue';
import ChatWindow from '@/components/ChatWindow.vue';
import opponentUtils from '@/utils/opponent';
import { useGameStore } from '@/store/game';
import { useRouter } from 'vue-router';
import { storeToRefs } from 'pinia';

const router = useRouter();
const gameStore = useGameStore();
const { isPlayerTurn } = storeToRefs(gameStore);

const finishGame = () => {
  router.push({ name: 'result' });
};

onBeforeMount(() => {
  gameStore.$reset();
});

watch(isPlayerTurn, async () => {
  try {
    if (isPlayerTurn.value) return;
    const city = await opponentUtils.generateCityAnswer(
      gameStore.previousCity,
      gameStore.citiesChain
    );
    gameStore.addCity(city);
  } catch (error) {
    finishGame();
  }
});
</script>
