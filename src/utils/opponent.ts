import cities from '@/appConstants/cities.json';
import durations from '@/appConstants/durations';
import validationUtis from '@/utils/validation';

const generateRandomNumber = (minLimit: number, maxLimit: number): number => {
  return Math.floor(Math.random() * (maxLimit - minLimit)) + minLimit;
};

const generateCityAnswer = (
  previousCity: string,
  citiesChain: string[]
): Promise<string> => {
  return new Promise<string>((resolve, reject) => {
    const [minLimit, maxLimit] = durations.opponentChoiseRange;
    const answerDelay = generateRandomNumber(minLimit, maxLimit);
    setTimeout(() => {
      const availableCities = cities.filter((city) => {
        const leadingChar = validationUtis.getLeadingChar(previousCity);
        return (
          !validationUtis.isCityExist(city, citiesChain) &&
          validationUtis.isLeadingCharMatch(leadingChar, city)
        );
      });
      if (availableCities.length) {
        const randomIndex = generateRandomNumber(0, availableCities.length);
        resolve(availableCities[randomIndex]);
      } else {
        reject();
      }
    }, answerDelay);
  });
};

export default {
  generateCityAnswer,
};
