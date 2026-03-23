import { Type } from '@sbzen/cron-core';
export declare const getSingleClasses: (type: string, tab: Type, cssClassPrefix: string | undefined, bs: 'bs4' | 'bs5') => {
    every: {
        box: string;
        switcherBox: string;
        switcher: string;
        label: string;
    };
    increment: {
        control2?: undefined;
        box: string;
        switcherBox: string;
        switcher: string;
        label: string;
        label2: string;
        control: string;
    } | {
        control2: string;
        box: string;
        switcherBox: string;
        switcher: string;
        label: string;
        label2: string;
        control: string;
    };
    and: {
        box: string;
        switcherBox: string;
        switcher: string;
        label: string;
        itemsBox: string;
        itemWrapper: (postfix: string) => string;
        itemBox: (postfix: string) => string;
        itemControl: (postfix: string) => string;
        itemLabel: (postfix: string) => string;
    };
    range: {
        control2?: undefined;
        box: string;
        switcherBox: string;
        switcher: string;
        label: string;
        label2: string;
        control: string;
    } | {
        control2: string;
        box: string;
        switcherBox: string;
        switcher: string;
        label: string;
        label2: string;
        control: string;
    };
};
export declare const getSingleClassesBs5: (type: string, tab: Type, cssClassPrefix?: string) => {
    every: {
        box: string;
        switcherBox: string;
        switcher: string;
        label: string;
    };
    increment: {
        control2?: undefined;
        box: string;
        switcherBox: string;
        switcher: string;
        label: string;
        label2: string;
        control: string;
    } | {
        control2: string;
        box: string;
        switcherBox: string;
        switcher: string;
        label: string;
        label2: string;
        control: string;
    };
    and: {
        box: string;
        switcherBox: string;
        switcher: string;
        label: string;
        itemsBox: string;
        itemWrapper: (postfix: string) => string;
        itemBox: (postfix: string) => string;
        itemControl: (postfix: string) => string;
        itemLabel: (postfix: string) => string;
    };
    range: {
        control2?: undefined;
        box: string;
        switcherBox: string;
        switcher: string;
        label: string;
        label2: string;
        control: string;
    } | {
        control2: string;
        box: string;
        switcherBox: string;
        switcher: string;
        label: string;
        label2: string;
        control: string;
    };
};
export declare const getSingleClassesBs4: (type: string, tab: Type, cssClassPrefix?: string) => {
    every: {
        box: string;
        switcherBox: string;
        switcher: string;
        label: string;
    };
    increment: {
        control2?: undefined;
        box: string;
        switcherBox: string;
        switcher: string;
        label: string;
        label2: string;
        control: string;
    } | {
        control2: string;
        box: string;
        switcherBox: string;
        switcher: string;
        label: string;
        label2: string;
        control: string;
    };
    and: {
        box: string;
        switcherBox: string;
        switcher: string;
        label: string;
        itemsBox: string;
        itemWrapper: (postfix: string) => string;
        itemBox: (postfix: string) => string;
        itemControl: (postfix: string) => string;
        itemLabel: (postfix: string) => string;
    };
    range: {
        control2?: undefined;
        box: string;
        switcherBox: string;
        switcher: string;
        label: string;
        label2: string;
        control: string;
    } | {
        control2: string;
        box: string;
        switcherBox: string;
        switcher: string;
        label: string;
        label2: string;
        control: string;
    };
};
