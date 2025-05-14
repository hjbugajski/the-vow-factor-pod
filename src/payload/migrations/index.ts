import * as migration_20250511_171601 from './20250511_171601';
import * as migration_20250511_223801 from './20250511_223801';
import * as migration_20250514_212418 from './20250514_212418';

export const migrations = [
  {
    up: migration_20250511_171601.up,
    down: migration_20250511_171601.down,
    name: '20250511_171601',
  },
  {
    up: migration_20250511_223801.up,
    down: migration_20250511_223801.down,
    name: '20250511_223801',
  },
  {
    up: migration_20250514_212418.up,
    down: migration_20250514_212418.down,
    name: '20250514_212418'
  },
];
