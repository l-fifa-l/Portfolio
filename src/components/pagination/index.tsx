import Link from 'next/link';

export function Pagination({
  baseUrl,
  page,
  perPage,
  total,
}: {
  baseUrl: string;
  page: number;
  perPage: number;
  total: number;
}) {
  const totalPages = Math.ceil(total / perPage);
  const isFirstPage = page === 1;
  const isLastPage = page === totalPages;

  const pageNumbers = Array.from({ length: totalPages }, (_, i) => i + 1);

  // Common classes
  const commonClasses =
    'px-4 py-2 mx-1 text-gray-700 transition-colors duration-300 transform bg-white rounded-md dark:bg-gray-800 dark:text-gray-200 hover:bg-blue-500 dark:hover:bg-blue-500 hover:text-white dark:hover:text-gray-200 flex items-center';

  return (
    <div className="p-4 flex justify-center">
      {!isFirstPage && (
        <Link href={`${baseUrl}/${page - 1}`} rel="prev">
          <div className={`${commonClasses} -mx-1 flex-shrink-0`}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-6 h-6 mx-1 rtl:-scale-x-100"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M7 16l-4-4m0 0l4-4m-4 4h18"
              />
            </svg>
            <span className="mx-1">Previous</span>
          </div>
        </Link>
      )}

      {pageNumbers.map((pageNumber) => (
        <Link key={pageNumber} href={`${baseUrl}/${pageNumber}`}>
          <div
            className={`${
              commonClasses + (pageNumber === page ? ' bg-blue-500' : '')
            } -mx-1 flex-shrink-0`}
          >
            {pageNumber}
          </div>
        </Link>
      ))}

      {!isLastPage && (
        <Link href={`${baseUrl}/${page + 1}`} rel="next">
          <div className={`${commonClasses} -mx-1 flex-shrink-0`}>
            <span className="mx-1">Next</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-6 h-6 mx-1 rtl:-scale-x-100"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>
          </div>
        </Link>
      )}
    </div>
  );
}
