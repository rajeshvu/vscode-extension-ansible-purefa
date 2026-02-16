import { snippets_1_42_0 } from "./snippets-1.42.0";

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
        version: '1.42.0',
        snippets: snippets_1_42_0
    }
]