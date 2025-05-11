import * as migration_20250511_171601 from './20250511_171601';
import * as migration_20250511_223801 from './20250511_223801';

export const migrations = [
  {
    up: migration_20250511_171601.up,
    down: migration_20250511_171601.down,
    name: '20250511_171601',
  },
  {
    up: migration_20250511_223801.up,
    down: migration_20250511_223801.down,
    name: '20250511_223801'
  },
];
