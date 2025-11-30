// Types
export type { NicheData } from "./types";

// Individual niche data
export { veterinariasData } from "./veterinarias";
export { salonesBellezaData } from "./salones-belleza";
export { restaurantesData } from "./restaurantes";
export { odontologiaData } from "./odontologia";
export { agenciasViajesData } from "./agencias-viajes";

// Re-export types for convenience
import type { NicheData } from "./types";
import { veterinariasData } from "./veterinarias";
import { salonesBellezaData } from "./salones-belleza";
import { restaurantesData } from "./restaurantes";
import { odontologiaData } from "./odontologia";
import { agenciasViajesData } from "./agencias-viajes";

/**
 * Consolidated niches data object
 * Maps slug to niche data for easy lookup
 */
export const nichesData: Record<string, NicheData> = {
  veterinarias: veterinariasData,
  "salones-belleza": salonesBellezaData,
  restaurantes: restaurantesData,
  odontologia: odontologiaData,
  "agencias-viajes": agenciasViajesData,
};

/**
 * Get niche data by slug
 * @param slug - The unique identifier for the niche
 * @returns The niche data or undefined if not found
 */
export function getNicheData(slug: string): NicheData | undefined {
  return nichesData[slug];
}

/**
 * Get all available niche slugs
 * @returns Array of all niche slugs
 */
export function getAllNicheSlugs(): string[] {
  return Object.keys(nichesData);
}

/**
 * Get all niches as an array
 * @returns Array of all niche data objects
 */
export function getAllNiches(): NicheData[] {
  return Object.values(nichesData);
}
