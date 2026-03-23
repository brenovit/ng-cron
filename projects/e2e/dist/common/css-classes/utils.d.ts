/// <reference types="cypress" />
/// <reference types="cypress" />
import { Schema } from './schema';
export declare const shouldExactClassesMatch: (el: JQuery<HTMLElement>, classes: string, enable: boolean) => JQuery<HTMLElement>;
export declare const mergeSchemas: <T extends Schema>(source: T, target: T) => T;
export declare const pathSchema: <T extends Schema>(obj: T, classPrefix?: string) => T;
