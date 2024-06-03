import { Button } from '@components/ui/button';
import Link from 'next/link';

export function Pagination({ baseUrl, page, perPage, total }:{
     baseUrl: string;
    page: number;
     perPage: number;
    total: number;
   }) {
  const totalPages = Math.ceil(total / perPage);
  const isFirstPage = page === 1;
  const isLastPage = page === totalPages;

  return (
    <div className="flex justify-between items-center mt-8">
      {!isFirstPage && (
        <Link href={`${baseUrl}/${page - 1}`} rel="prev">
          <Button className="px-4 py-2 bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-200 rounded hover:bg-gray-300 dark:hover:bg-gray-600 transition duration-300">
            Previous
          </Button>
        </Link>
      )}
      <span className="text-gray-700 dark:text-gray-200">
        Page {page} of {totalPages}
      </span>
      {!isLastPage && (
        <Link href={`${baseUrl}/${page + 1}`} rel="next">
          <Button className="px-4 py-2 bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-200 rounded hover:bg-gray-300 dark:hover:bg-gray-600 transition duration-300">
            Next
          </Button>
        </Link>
      )}
    </div>
  );
}
