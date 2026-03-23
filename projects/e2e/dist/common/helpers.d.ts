/// <reference types="cypress" />
/// <reference types="cypress" />
/// <reference types="cypress" />
import { CronType } from './../enums/cron-type.enum';
export declare const getSharedHelper: (type: string) => {
    getCronType: () => CronType;
    findInContainer: (selector: string) => Cypress.Chainable<JQuery<HTMLElement>>;
};
