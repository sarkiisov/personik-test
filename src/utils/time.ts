import durations from '@/appConstants/durations';

const generateTurnTimestamp = (): number => {
  return Date.now() + durations.gameTurn;
};

const isTimestampExpired = (timestamp: number): boolean => {
  return Date.now() >= timestamp;
};

export default {
  generateTurnTimestamp,
  isTimestampExpired,
};
