export interface BookType {
  cover_edition_key: string;
  title: string;
  cover_i: string;
  key: string;
  first_publish_year: number;
  author_name: string[];
  description: Description;
  subjects?: string[];
  covers: string[];
}
interface Description {
  value: string;
  name: string;
}
export interface BookList {
  docs: BookType[];
}
