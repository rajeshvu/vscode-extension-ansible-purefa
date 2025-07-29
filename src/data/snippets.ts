import { snippets_1_35_1 } from "./snippets-1.35.1";
import { snippets_1_36_0 } from "./snippets-1.36.0";

export interface SnippetItem {
    label: string;
    description: string;
    body: string;
}

export interface Snippets {
    version: string;
    snippets: SnippetItem[];
}

export const all_snippets: Snippets[] = [
    {
        version: '1.36.0',
        snippets: snippets_1_36_0
    },
    {
        version: '1.35.1',
        snippets: snippets_1_35_1
    },
]