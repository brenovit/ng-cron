import { Type } from '@sbzen/cron-core';
import { baseQuartzSchema } from './../schema';
export declare const testDayQuartzTab: (code: string, contentSelector: string, schema: ReturnType<typeof baseQuartzSchema>['content'][Type.DAY], tabLink: string, exact?: boolean) => void;
