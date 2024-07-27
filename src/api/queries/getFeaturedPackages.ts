import type { PackageDetails } from "../types/packageDetails";

const FEATURES_PACKAGES = ["react", "typscript", "esbuild", "vite"];

export async function getFeaturedPackages() {
  const promises = FEATURES_PACKAGES.map(async (name) => {
    const res = await fetch(`https://registry.npmjs.org/${name}`);

    return res.json();
  });
  const data = await Promise.all(promises);

  return data as PackageDetails[];
}
