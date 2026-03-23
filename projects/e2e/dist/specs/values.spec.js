import { testValues } from './../common/values/values';
export const values = (beforeEach) => describe('Values', () => {
    beforeEach();
    testValues('QuartzCron');
    // testTabs('UnixCron');
});
