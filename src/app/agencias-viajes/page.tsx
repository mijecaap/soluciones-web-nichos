import { Metadata } from "next";
import NichePage, { generateNicheMetadata } from "@/components/NichePage";
import { getNicheData } from "@/data/niches";

const nicheData = getNicheData("agencias-viajes")!;

export const metadata: Metadata = generateNicheMetadata(nicheData);

export default function AgenciasViajesPage() {
  return <NichePage nicheData={nicheData} />;
}
