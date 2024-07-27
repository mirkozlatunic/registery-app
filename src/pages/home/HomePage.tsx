import type { HomeLaoderResult } from "./homeLoader";
import { useLoaderData } from "react-router-dom";

export default function HomePage() {
  const { featuredPackages } = useLoaderData() as HomeLaoderResult;

  console.log(featuredPackages);

  return <div>Home Page</div>;
}
