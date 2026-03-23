import { Type } from '@sbzen/cron-core';
import { baseQuartzSchema } from './../schema';
export declare const dayQuartzTab: () => ReturnType<typeof baseQuartzSchema>['content'][Type.DAY];
