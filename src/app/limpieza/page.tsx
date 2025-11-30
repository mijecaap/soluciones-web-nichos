import { Metadata } from "next";
import NichePage, { generateNicheMetadata } from "@/components/NichePage";
import { getNicheData } from "@/data/niches";

const nicheData = getNicheData("limpieza")!;

export const metadata: Metadata = generateNicheMetadata(nicheData);

export default function LimpiezaPage() {
  return <NichePage nicheData={nicheData} />;
}
