import { testTabs } from './../common/tabs';
export const tabs = (beforeEach) => describe('Tabs', () => {
    beforeEach();
    testTabs('UnixCron');
    testTabs('QuartzCron');
});
