import { Metadata } from "next";
import NichePage, { generateNicheMetadata } from "@/components/NichePage";
import { getNicheData } from "@/data/niches";

const nicheData = getNicheData("tiendas-ropa")!;

export const metadata: Metadata = generateNicheMetadata(nicheData);

export default function TiendasRopaPage() {
  return <NichePage nicheData={nicheData} />;
}
