export interface CategoryResponse{
    name: string,
    publicId: string,
    status: boolean,
    logo: string
}
export interface CategoryRequest{
    name: string,
    status: boolean
    photo: FileList
}