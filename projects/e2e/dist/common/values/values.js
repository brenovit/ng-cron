import { CronType } from './../../enums/cron-type.enum';
import { getSharedHelper } from './../helpers';
import { testQuartz } from './quartz';
export const testValues = (type) => {
    const { findInContainer, getCronType } = getSharedHelper(type);
    if (getCronType() === CronType.QUARTZ) {
        testQuartz(type);
    }
};
