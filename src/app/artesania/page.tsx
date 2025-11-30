import { Metadata } from "next";
import NichePage, { generateNicheMetadata } from "@/components/NichePage";
import { getNicheData } from "@/data/niches";

const nicheData = getNicheData("artesania")!;

export const metadata: Metadata = generateNicheMetadata(nicheData);

export default function ArtesaniaPage() {
  return <NichePage nicheData={nicheData} />;
}
