import { testLocalization } from './../common/localization/localization';
export const localization = (beforeEach) => describe('Localization', () => {
    beforeEach();
    testLocalization('UnixCron');
    testLocalization('QuartzCron');
});
