import { Metadata } from "next";
import NichePage, { generateNicheMetadata } from "@/components/NichePage";
import { getNicheData } from "@/data/niches";

const nicheData = getNicheData("cafeterias")!;

export const metadata: Metadata = generateNicheMetadata(nicheData);

export default function CafeteriasPage() {
  return <NichePage nicheData={nicheData} />;
}
