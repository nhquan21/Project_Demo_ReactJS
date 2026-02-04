export interface ApiResponse<T> {
  code: number;
  message: string;
  data: T;
}
export interface PageResponse<T> {
    content: T[];
    totalElements: number;
    totalPages: number;
    size: number;
    number: number; // page index
}