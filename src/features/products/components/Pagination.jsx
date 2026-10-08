import Button from "../../../shared/components/Button";

function Pagination({
  currentPage,
  totalPages,
  onPageChange,
}) {
  if (totalPages <= 1) {
    return null;
  }

  return (
    <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
      <Button
        intent="secondary"
        size="sm"
        disabled={currentPage === 1}
        onClick={() =>
          onPageChange(
            currentPage - 1
          )
        }
      >
        ← Previous
      </Button>

      <span className="text-sm font-medium text-gray-700 dark:text-gray-200">
        Page {currentPage} of{" "}
        {totalPages}
      </span>

      <Button
        intent="secondary"
        size="sm"
        disabled={
          currentPage === totalPages
        }
        onClick={() =>
          onPageChange(
            currentPage + 1
          )
        }
      >
        Next →
      </Button>
    </div>
  );
}

export default Pagination;