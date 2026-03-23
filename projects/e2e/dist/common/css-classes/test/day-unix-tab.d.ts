import { Type } from '@sbzen/cron-core';
import { baseUnixSchema } from './../schema';
export declare const testDayUnixTab: (code: string, contentSelector: string, schema: ReturnType<typeof baseUnixSchema>['content'][Type.DAY], tabLink: string, exact?: boolean) => void;
