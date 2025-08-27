interface PaginationButtonProps {
  href: string;
  disabled: boolean;
  label: string;
}

export default function PaginationButton({
  href,
  disabled,
  label,
}: PaginationButtonProps) {
  const baseClasses = "px-3 py-1 border rounded transition-colors";
  const disabledClasses = "opacity-50 pointer-events-none bg-gray-100";
  const enabledClasses = "hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500";

  return (
    <a
      href={href}
      className={`${baseClasses} ${disabled ? disabledClasses : enabledClasses}`}
      aria-disabled={disabled}
    >
      {label}
    </a>
  );
}