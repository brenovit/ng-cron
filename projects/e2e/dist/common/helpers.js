import { CronType } from './../enums/cron-type.enum';
export const getSharedHelper = (type) => ({
    getCronType: () => ['UnixCron', 'Bs5UnixCron'].includes(type) ? CronType.UNIX : CronType.QUARTZ,
    findInContainer: (selector) => {
        return cy.get(`[data-cron-type="${type}"]`).find(selector);
    }
});
