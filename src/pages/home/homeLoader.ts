import type { PackageDetails } from "../../api/types/packageDetails";
import { getFeaturedPackages } from "../../api/queries/getFeaturedPackages";

export interface HomeLaoderResult {
  featuredPackages: PackageDetails[];
}

export async function homeLoader(): Promise<HomeLaoderResult> {
  const featuredPackages = await getFeaturedPackages();

  return {
    featuredPackages,
  };
}
