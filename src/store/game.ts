import { defineStore } from 'pinia';
import timeUtils from '@/utils/time';

const { generateTurnTimestamp, isTimestampExpired } = timeUtils;

export type GameState = {
  citiesChain: string[];
  expirationTime: number;
};

export const useGameStore = defineStore('game', {
  state: (): GameState => ({
    citiesChain: [],
    expirationTime: generateTurnTimestamp(),
  }),
  actions: {
    addCity(city: string) {
      if (isTimestampExpired(this.expirationTime)) return;
      this.citiesChain.push(city);
      this.expirationTime = generateTurnTimestamp();
    },
  },
  getters: {
    citiesCount(state): number {
      return state.citiesChain.length;
    },
    previousCity(state): string {
      return state.citiesChain[state.citiesChain.length - 1];
    },
    isPlayerTurn(): boolean {
      return this.citiesCount % 2 === 0;
    },
  },
});
