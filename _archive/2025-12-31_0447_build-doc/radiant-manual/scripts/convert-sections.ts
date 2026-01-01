// scripts/convert-sections.ts
import MANUAL_SECTIONS from '../src/components/manual/sections-data';
import { writeFileSync } from 'fs';

const data = {
  sections: MANUAL_SECTIONS
};

writeFileSync(
  './public/data/manual/sections.json',
  JSON.stringify(data, null, 2)
);

console.log('✅ Converted sections-data.ts → sections.json');
