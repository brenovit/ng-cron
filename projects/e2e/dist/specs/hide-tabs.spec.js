import { testHideTabs } from './../common/hide-tabs';
export const hideTabs = (beforeEach) => describe('Hide Tabs', () => {
    beforeEach();
    testHideTabs('UnixCron');
    testHideTabs('QuartzCron');
});
