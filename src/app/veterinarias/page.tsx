import { Metadata } from "next";
import NichePage, { generateNicheMetadata } from "@/components/NichePage";
import { getNicheData } from "@/data/niches";

const nicheData = getNicheData("veterinarias")!;

export const metadata: Metadata = generateNicheMetadata(nicheData);

export default function VeterinariasPage() {
  return <NichePage nicheData={nicheData} />;
}
