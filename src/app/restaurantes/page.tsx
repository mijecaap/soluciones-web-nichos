import { Metadata } from "next";
import NichePage, { generateNicheMetadata } from "@/components/NichePage";
import { getNicheData } from "@/data/niches";

const nicheData = getNicheData("restaurantes")!;

export const metadata: Metadata = generateNicheMetadata(nicheData);

export default function RestaurantesPage() {
  return <NichePage nicheData={nicheData} />;
}
