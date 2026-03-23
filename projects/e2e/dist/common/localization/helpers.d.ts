/// <reference types="cypress" />
/// <reference types="cypress" />
/// <reference types="cypress" />
import { Type } from '@sbzen/cron-core';
export declare const getHelper: (type: string) => {
    getCronType: () => import("../../enums/cron-type.enum").CronType;
    activateTab: (tab: Type) => Cypress.Chainable<JQuery<HTMLElement>>;
    findInContainer: (selector: string) => Cypress.Chainable<JQuery<HTMLElement>>;
    buildFieldSelector: (tab: Type, postfix: string) => string;
    checkLocalizationField: (fieldSelector: string, textSelector: string) => void;
};
