"use client";
import { useDebounce } from "@/hooks/useDebounce";
import { useRouter, useSearchParams } from "next/navigation";
import React, { useEffect, useState } from "react";

function SearchBox() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const [query, setQuery] = useState(searchParams.get("q") || "");

  const debouncedQuery = useDebounce(query, 300);

  useEffect(() => {
    const params = new URLSearchParams(searchParams.toString());

    if (debouncedQuery) {
      params.set("q", debouncedQuery);
    } else {
      params.delete("q");
    }

    router.replace(`?${params.toString()}`);
  }, [debouncedQuery]);
  
  return (
    <div>
      <input
        placeholder="SearchBox"
        className="border border-orange-200 p-2 rounded-sm outline-0"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
    </div>
  );
}

export default SearchBox;
