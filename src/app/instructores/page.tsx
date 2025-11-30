import { Metadata } from "next";
import NichePage, { generateNicheMetadata } from "@/components/NichePage";
import { getNicheData } from "@/data/niches";

const nicheData = getNicheData("instructores")!;

export const metadata: Metadata = generateNicheMetadata(nicheData);

export default function InstructoresPage() {
  return <NichePage nicheData={nicheData} />;
}
