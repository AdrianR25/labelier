import { EndlineSeparator } from "./enums/endline-separator";
import { InlineSeparator } from "./enums/inline-separator";

export interface ExportOptions {
    inlineSeparator: InlineSeparator;
    endlineSeparator: EndlineSeparator;
    exportFormat: "txt";
}
