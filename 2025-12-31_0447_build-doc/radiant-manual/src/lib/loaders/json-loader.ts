import { ManualData } from '../types/manual.types';

export async function loadManualFromJSON(path: string = '/data/manual/sections.json'): Promise<ManualData> {
  const response = await fetch(path);
  if (!response.ok) {
    throw new Error(`Failed to load manual data: ${response.statusText}`);
  }
  return response.json();
}
