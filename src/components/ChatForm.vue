<template>
  <form @submit.prevent="submitPlayerAnswer">
    <div class="flex items-center px-4 h-20">
      <div class="w-full h-12 relative">
        <input
          v-model="inputValue"
          type="text"
          class="pl-3 pr-12 w-full h-full outline-none rounded-md"
          :placeholder="inputPlaceholder"
          :disabled="!gameStore.isPlayerTurn"
          :class="{
            'bg-gray-100 text-gray-700 placeholder:text-gray-700':
              gameStore.isPlayerTurn,
            'disabled:bg-gray-50 placeholder:text-gray-400':
              !gameStore.isPlayerTurn,
            'border border-red-600': gameStore.isPlayerTurn && !isCityValid,
          }"
        />
        <button
          type="submit"
          class="absolute top-0 bottom-0 right-2 my-auto flex justify-center items-center w-8 h-8 bg-violet-500 text-white rounded-md shadow disabled:bg-gray-400"
          :disabled="!gameStore.isPlayerTurn"
        >
          <SendIcon />
        </button>
      </div>
    </div>
  </form>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue';
import SendIcon from '@/components/icons/SendIcon.vue';
import { useGameStore } from '@/store/game';
import { useCityValidation } from '@/composables/useValidation';

const inputValue = ref('');

const gameStore = useGameStore();
const { isCityValid, leadingChar } = useCityValidation(inputValue);

const inputPlaceholder = computed(() => {
  if (gameStore.isPlayerTurn) {
    return gameStore.citiesCount === 0
      ? 'Напишите любой город, например: Где вы живете?'
      : `Знаете город на букву “${leadingChar.value}”?`;
  }
  return 'Ожидаем ответа соперника...';
});

const submitPlayerAnswer = () => {
  if (isCityValid.value) {
    gameStore.addCity(inputValue.value);
    inputValue.value = '';
  }
};
</script>
