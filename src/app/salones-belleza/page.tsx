import { Metadata } from "next";
import NichePage, { generateNicheMetadata } from "@/components/NichePage";
import { getNicheData } from "@/data/niches";

const nicheData = getNicheData("salones-belleza")!;

export const metadata: Metadata = generateNicheMetadata(nicheData);

export default function SalonesBellezaPage() {
  return <NichePage nicheData={nicheData} />;
}
