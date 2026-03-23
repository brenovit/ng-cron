/// <reference types="cypress" />
/// <reference types="cypress" />
/// <reference types="cypress" />
import { Type } from '@sbzen/cron-core';
export declare const getTabsClasses: (cssClassPrefix: string) => {
    box: string;
    tab: string;
};
export declare const cssClassesHelpers: (type: string, cssClassPrefix?: string) => {
    getTabs: () => Cypress.Chainable<JQuery<HTMLElement>>;
    checkClasses: (tab: Type, classes: {
        [key: string]: string | undefined;
    }) => void;
    getTabsContainer: () => Cypress.Chainable<JQuery<HTMLElement>>;
    getContentByTab: (tab: Type) => Cypress.Chainable<JQuery<HTMLElement>>;
    getTabsList: () => Type[];
};
