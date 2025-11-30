import { Metadata } from "next";
import NichePage, { generateNicheMetadata } from "@/components/NichePage";
import { getNicheData } from "@/data/niches";

const nicheData = getNicheData("transporte")!;

export const metadata: Metadata = generateNicheMetadata(nicheData);

export default function TransportePage() {
  return <NichePage nicheData={nicheData} />;
}
