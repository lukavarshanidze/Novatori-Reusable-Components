import { GenreCollection } from "./GenreCollection"

export type dataTypes = {
    id: number, 
    coverImg: string, 
    firstName: string, 
    lastName: string, 
    albumName: string, 
    genre: keyof typeof GenreCollection, 
    releaseDate: Date, 
    duration: string
}[]