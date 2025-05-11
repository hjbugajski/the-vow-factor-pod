import * as migration_20250511_171601 from './20250511_171601';

export const migrations = [
  {
    up: migration_20250511_171601.up,
    down: migration_20250511_171601.down,
    name: '20250511_171601'
  },
];
