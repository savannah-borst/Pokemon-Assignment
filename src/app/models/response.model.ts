export interface ListResponse<T> {
    data: T;
    succes: Boolean;
    error?: string;
}