import { Metadata } from "next";
import NichePage, { generateNicheMetadata } from "@/components/NichePage";
import { getNicheData } from "@/data/niches";

const nicheData = getNicheData("odontologia")!;

export const metadata: Metadata = generateNicheMetadata(nicheData);

export default function OdontologiaPage() {
  return <NichePage nicheData={nicheData} />;
}
