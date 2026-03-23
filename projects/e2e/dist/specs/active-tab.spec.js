import { testActiveTab } from './../common/active-tab';
export const activeTab = (beforeEach) => describe('Active Tab', () => {
    beforeEach();
    testActiveTab('UnixCron');
    testActiveTab('QuartzCron');
});
