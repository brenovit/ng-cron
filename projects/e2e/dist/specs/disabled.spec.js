import { testDisabled } from './../common/disabled';
export const disabled = (beforeEach) => describe('Disabled', () => {
    beforeEach();
    testDisabled('UnixCron');
    testDisabled('QuartzCron');
});
