<template>
  <div
    class="flex justify-center items-center h-16 border-b-[3px] border-gray-100"
  >
    <p>Игра в города на время</p>
  </div>
  <div class="p-6 flex flex-col items-center justify-center">
    <div
      class="prose prose-sm prose-ul:my-6 prose-li:my-0 prose-p:text-gray-700 prose-li:text-gray-700 prose-li:marker:text-gray-700"
    >
      <p>Цель: Назвать как можно больше реальных городов.</p>
      <ul class="list-disc">
        <li>Запрещается повторение городов.</li>
        <li>
          Названий городов на твердый “ъ” и мягкий “ъ” знак нет. Из-за этого бы
          пропускаем эту букву и игрок должен назвать город на букву стоящую
          перед ъ или ь знаком.
        </li>
        <li>
          Каждому игроку дается 2 минуты на размышления, если спустя это время
          игрок не вводит слово он считается проигравшим
        </li>
      </ul>
    </div>
    <button
      class="py-2 px-4 bg-violet-600 rounded text-white font-medium"
      @click="startGame"
    >
      Начать игру
    </button>
  </div>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router';

const router = useRouter();

const startGame = () => {
  router.push({ name: 'game' });
};
</script>
