/**
 * @deprecated This file is deprecated. Import from '@/data/niches' instead.
 * 
 * Example:
 * import { NicheData, nichesData, getNicheData, getAllNicheSlugs } from '@/data/niches';
 * 
 * This file is kept for backwards compatibility and re-exports from the new modular structure.
 */

// Re-export everything from the new modular structure for backwards compatibility
export type { NicheData } from "./niches/types";
export {
  nichesData,
  getNicheData,
  getAllNicheSlugs,
  getAllNiches,
} from "./niches/index";

export {
  veterinariasData,
  salonesBellezaData,
  restaurantesData,
  odontologiaData,
  agenciasViajesData,
} from "./niches/index";
