import { Metadata } from "next";
import NichePage, { generateNicheMetadata } from "@/components/NichePage";
import { getNicheData } from "@/data/niches";

const nicheData = getNicheData("freelancers")!;

export const metadata: Metadata = generateNicheMetadata(nicheData);

export default function FreelancersPage() {
  return <NichePage nicheData={nicheData} />;
}
