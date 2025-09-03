
export interface Paginated {
  /** Total number of results */
  count: number;
  /** Number of results per page */
  pageSize: number;
  /** Total number of pages */
  totalPages: number;
  /** Current page number */
  current: number;
}
