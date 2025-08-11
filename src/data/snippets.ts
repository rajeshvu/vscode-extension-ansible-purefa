import { snippets_1_35._ } from "./snippets-1.35.1";

export interface SnippetItem {
    label: string;
    description: string;
    body: string;
}

export interface Snippets {
    version: string;
    snippets: SnippetItem[];
}

export const SNIPPETS: Snippets[] = [
    {
        version: '1.35.1',
        snippets: snippets_1_35._
    }
]