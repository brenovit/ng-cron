import { testTabChange } from './../common/tab-change';
export const tabChange = (beforeEach) => describe('Tab change', () => {
    beforeEach();
    testTabChange('UnixCron');
    testTabChange('QuartzCron');
});
