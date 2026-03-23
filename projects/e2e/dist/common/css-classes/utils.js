export const shouldExactClassesMatch = (el, classes, enable) => {
    if (!enable) {
        return el;
    }
    const elClasses = generateSelector(el.attr('class') || '').split('.').filter(s => !!s);
    const expectedClasses = classes.split('.').filter(s => !!s);
    const sameLength = elClasses.length === expectedClasses.length;
    const sameValues = elClasses.every(c => expectedClasses.includes(c));
    expect(sameLength, `${elClasses.join(',')} not matched to ${expectedClasses.join(',')}`).to.be.true;
    expect(sameValues).to.be.true;
    return el;
};
export const mergeSchemas = (source, target) => {
    const keys = Object.keys(source);
    return keys.reduce((acc, key) => {
        const value = source[key];
        const targetValue = target[key];
        if (typeof targetValue !== typeof value) {
            throw 'Schema dismatched';
        }
        if (typeof value === 'string') {
            return Object.assign(Object.assign({}, acc), { [key]: `${targetValue}${value}` });
        }
        return Object.assign(Object.assign({}, acc), { [key]: mergeSchemas(value, targetValue) });
    }, {});
};
export const pathSchema = (obj, classPrefix = '') => {
    const keys = Object.keys(obj);
    return keys.reduce((acc, key) => {
        const value = obj[key];
        if (typeof value === 'string') {
            return Object.assign(Object.assign({}, acc), { [key]: generateSelector(value, classPrefix) });
        }
        return Object.assign(Object.assign({}, acc), { [key]: pathSchema(value, classPrefix) });
    }, {});
};
const generateSelector = (str, classPrefix = '') => str
    .trim()
    .split(' ')
    .map(s => s.trim())
    .filter(s => !!s)
    .map(s => `.${classPrefix}${s}`)
    .join('');
