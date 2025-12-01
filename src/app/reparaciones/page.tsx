import { Metadata } from "next";
import NichePage, { generateNicheMetadata } from "@/components/NichePage";
import { getNicheData } from "@/data/niches";

const nicheData = getNicheData("reparaciones")!;

export const metadata: Metadata = generateNicheMetadata(nicheData);

export default function ReparacionesPage() {
  return <NichePage nicheData={nicheData} />;
}
