import { Metadata } from "next";
import NichePage, { generateNicheMetadata } from "@/components/NichePage";
import { getNicheData } from "@/data/niches";

const nicheData = getNicheData("belleza-economico")!;

export const metadata: Metadata = generateNicheMetadata(nicheData);

export default function BellezaEconomicoPage() {
  return <NichePage nicheData={nicheData} />;
}
