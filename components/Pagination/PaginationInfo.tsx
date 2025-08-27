interface PaginationInfoProps {
  currentPage: number;
  totalPages: number;
}

export default function PaginationInfo({
  currentPage,
  totalPages,
}: PaginationInfoProps) {
  return (
    <span className="px-3 py-1 border rounded bg-gray-50 text-gray-700">
      {currentPage} / {totalPages}
    </span>
  );
}