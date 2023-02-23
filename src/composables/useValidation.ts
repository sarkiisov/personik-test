import cities from '@/appConstants/cities.json';
import { computed, Ref } from 'vue';
import { useGameStore } from '@/store/game';
import cityValidationUtils from '@/utils/validation';

export const useCityValidation = (city: Ref<string>) => {
  const gameStore = useGameStore();
  const { isCityExist, getLeadingChar, isLeadingCharMatch, isCityUnique } =
    cityValidationUtils;

  const leadingChar = computed<string>(() =>
    getLeadingChar(gameStore.previousCity)
  );

  const isCityValid = computed<boolean>(() => {
    return (
      isCityExist(city.value, cities) &&
      isLeadingCharMatch(leadingChar.value, city.value) &&
      isCityUnique(city.value, gameStore.citiesChain)
    );
  });

  return { isCityValid, leadingChar };
};
