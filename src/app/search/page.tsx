"use client";
import { useSearchParams } from "next/navigation";

// app/search/page.tsx
const SearchPage: React.FC = () => {
  const searchParams: any = useSearchParams();
  const search = searchParams.get('keyword')
  const term = searchParams.get('term')
  return <h1>Search Results for: {search} {term}</h1>;
};
export default SearchPage;
