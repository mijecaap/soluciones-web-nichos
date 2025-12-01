// Types
export type { NicheData } from "./types";

// Individual niche data - Premium
export { veterinariasData } from "./veterinarias";
export { salonesBellezaData } from "./salones-belleza";
export { restaurantesData } from "./restaurantes";
export { odontologiaData } from "./odontologia";
export { agenciasViajesData } from "./agencias-viajes";

// Individual niche data - Económicos
export { tiendasRopaData } from "./tiendas-ropa";
export { artesaniaData } from "./artesania";
export { transporteData } from "./transporte";
export { limpiezaData } from "./limpieza";
export { cafeteriasData } from "./cafeterias";
export { instructoresData } from "./instructores";
export { reparacionesData } from "./reparaciones";
export { agricolaData } from "./agricola";
export { bellezaEconomicoData } from "./belleza-economico";
export { freelancersData } from "./freelancers";

// Re-export types for convenience
import type { NicheData } from "./types";
import { veterinariasData } from "./veterinarias";
import { salonesBellezaData } from "./salones-belleza";
import { restaurantesData } from "./restaurantes";
import { odontologiaData } from "./odontologia";
import { agenciasViajesData } from "./agencias-viajes";
import { tiendasRopaData } from "./tiendas-ropa";
import { artesaniaData } from "./artesania";
import { transporteData } from "./transporte";
import { limpiezaData } from "./limpieza";
import { cafeteriasData } from "./cafeterias";
import { instructoresData } from "./instructores";
import { reparacionesData } from "./reparaciones";
import { agricolaData } from "./agricola";
import { bellezaEconomicoData } from "./belleza-economico";
import { freelancersData } from "./freelancers";

/**
 * Consolidated niches data object
 * Maps slug to niche data for easy lookup
 */
export const nichesData: Record<string, NicheData> = {
  // Premium niches
  veterinarias: veterinariasData,
  "salones-belleza": salonesBellezaData,
  restaurantes: restaurantesData,
  odontologia: odontologiaData,
  "agencias-viajes": agenciasViajesData,
  // Economic niches
  "tiendas-ropa": tiendasRopaData,
  artesania: artesaniaData,
  transporte: transporteData,
  limpieza: limpiezaData,
  cafeterias: cafeteriasData,
  instructores: instructoresData,
  reparaciones: reparacionesData,
  agricola: agricolaData,
  "belleza-economico": bellezaEconomicoData,
  freelancers: freelancersData,
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

// Cached category arrays (since niche data is static)
const premiumNichesCache = Object.values(nichesData).filter((niche) => niche.category === "premium");
const economicoNichesCache = Object.values(nichesData).filter((niche) => niche.category === "economico");

/**
 * Get niches by category
 * @param category - The category to filter by ("premium" or "economico")
 * @returns Array of niche data objects for the specified category
 */
export function getNichesByCategory(category: "premium" | "economico"): NicheData[] {
  return category === "premium" ? premiumNichesCache : economicoNichesCache;
}
