import { createRouter, createWebHistory } from 'vue-router';
import GameRules from '@/views/GameRules.vue';
import GameChat from '@/views/GameChat.vue';
import GameResult from '@/views/GameResult.vue';

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      name: 'rules',
      component: GameRules,
    },
    {
      path: '/game',
      name: 'game',
      component: GameChat,
    },
    {
      path: '/result',
      name: 'result',
      component: GameResult,
    },
  ],
});

export default router;
