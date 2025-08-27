import PaginationButton from "./PaginationButton";
import PaginationInfo from "./PaginationInfo";

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  limit: number;
  query: string;
}

export default function Pagination({
  currentPage,
  totalPages,
  limit,
  query,
}: PaginationProps) {
  const prevPage = Math.max(1, currentPage - 1);
  const nextPage = Math.min(totalPages, currentPage + 1);
  const queryParam = query ? `&q=${query}` : "";

  return (
    <nav className="flex gap-2 mt-4" aria-label="Pagination">
      <PaginationButton
        href={`?page=${prevPage}&limit=${limit}${queryParam}`}
        disabled={currentPage === 1}
        label="Previous"
      />

      <PaginationInfo currentPage={currentPage} totalPages={totalPages} />

      <PaginationButton
        href={`?page=${nextPage}&limit=${limit}${queryParam}`}
        disabled={currentPage === totalPages}
        label="Next"
      />
    </nav>
  );
}
