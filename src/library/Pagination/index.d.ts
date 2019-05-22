import {
  DetailedHTMLProps,
  ElementType,
  HTMLAttributes,
  ReactElement
} from 'react';

export interface PaginationMessages {
  category?: string;
  label: string;
  pages?: {
    next: string;
    pageLabel: (
      isCurrentPage: boolean,
      isLastPage: boolean,
      page: number
    ) => string;
    previous: string;
  };
  pageJumper?: {
    label: string;
    placeholder: string;
  };
  pageSizer?: {
    itemText: (pageSize: number) => string;
    status: (
      category: string,
      first: number,
      last: number,
      total: number
    ) => string;
  };
}

export interface PaginationProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLElement>, HTMLElement> {
  as?: ElementType;
  css?: { [key: string]: any };
  currentPage: number;
  messages?: PaginationMessages;
  onPageChange: (currentPage: number) => void;
  onPageSizeChange?: (pageSize: number) => void;
  pageSize: number;
  pageSizes?: number[];
  showPageJumper?: boolean;
  showPageNumbers?: boolean;
  showPageSizer?: boolean;
  size?: string;
  theme?: { [key: string]: any };
  totalCount: number;
  visibleRange?: number;
}

export function Pagination(props: PaginationProps): ReactElement;

export default Pagination;
