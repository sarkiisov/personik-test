import cities from '@/appConstants/cities.json';
import { computed, Ref } from 'vue';
import { useGameStore } from '@/store/game';
import cityValidationUtils from '@/utils/validation';

export const useCityValidation = (city: Ref<string>) => {
  const gameStore = useGameStore();

  const isCityExist = computed<boolean>(() =>
    cityValidationUtils.isCityExist(city.value, cities)
  );

  const leadingChar = computed<string>(() =>
    cityValidationUtils.getLeadingChar(gameStore.previousCity)
  );

  const isLeadingCharMatch = computed<boolean>(() =>
    cityValidationUtils.isLeadingCharMatch(leadingChar.value, city.value)
  );

  const isCityUnique = computed<boolean>(() =>
    cityValidationUtils.isCityUnique(city.value, gameStore.citiesChain)
  );

  const isCityValid = computed<boolean>(() => {
    return isCityExist.value && isLeadingCharMatch.value && isCityUnique.value;
  });

  return { isCityValid, leadingChar };
};
