import { AuthorType } from './type.author';

export type BookType = {
    name: string,
    gender: string,
    author: AuthorType,
    publishAt: string
}