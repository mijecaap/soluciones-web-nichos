import { Metadata } from "next";
import NichePage, { generateNicheMetadata } from "@/components/NichePage";
import { getNicheData } from "@/data/niches";

const nicheData = getNicheData("agricola")!;

export const metadata: Metadata = generateNicheMetadata(nicheData);

export default function AgricolaPage() {
  return <NichePage nicheData={nicheData} />;
}
