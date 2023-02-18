const isCityExist = (city: string, citiesArray: string[]): boolean => {
  return citiesArray.includes(city);
};

const isCityUnique = (city: string, citiesArray: string[]): boolean => {
  return !isCityExist(city, citiesArray);
};

const getLeadingChar = (previousCity: string): string => {
  if (!previousCity) return '';
  const restrictedChars = ['ъ', 'ь', 'й', 'ы'];
  const leadingChar = previousCity
    .split('')
    .reverse()
    .find((char) => !restrictedChars.includes(char));
  if (!leadingChar) return '';
  return leadingChar.toUpperCase();
};

const isLeadingCharMatch = (leadingChar: string, city: string): boolean => {
  if (leadingChar === '') return true;
  return leadingChar === city[0];
};

export default {
  isCityExist,
  isCityUnique,
  getLeadingChar,
  isLeadingCharMatch,
};
