# @elizaos/plugin-rolldice

This plugin provides actions for simulating dice rolls.

## Description

The RollDice plugin provides functionality for simulating dice rolls with various configurations, allowing for flexible dice-based random number generation.

## Features

- Roll standard dice (d4, d6, d8, d10, d12, d20, d100)
- Custom dice with arbitrary number of sides
- Multiple dice rolls in a single action
- Roll with advantage or disadvantage
- Sum and average calculations for multiple dice

## Installation

```bash
pnpm install @elizaos/plugin-rolldice
```

## Usage

```typescript
import { ElizaOS } from '@elizaos/core';
import { RollDicePlugin } from '@elizaos/plugin-rolldice';

const eliza = new ElizaOS();
eliza.registerPlugin(new RollDicePlugin());

// Roll a single d20
const result = await eliza.execute('Roll a d20');

// Roll multiple dice
const result2 = await eliza.execute('Roll 3d6');

// Roll with advantage
const result3 = await eliza.execute('Roll a d20 with advantage');
```

## API

### Actions

- `rollDice`: Roll one or more dice with specified parameters
  - Parameters:
    - `dice`: Array of dice configurations (e.g., `[{ sides: 20, count: 1 }]`)
    - `advantage`: Boolean indicating if roll should be with advantage
    - `disadvantage`: Boolean indicating if roll should be with disadvantage

## License

ISC 