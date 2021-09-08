const fs = require('fs');

const checkJSON = (pathToJSON) => {
    const data = fs.readFileSync(pathToJSON, 'utf-8');
    const { flag, myPromises, element,
        screenshot, elementText, allElementsText,
        counter, config, const: constant,
        parameters, description } = JSON.parse(data);
    const errors = {};

    if (typeof flag !== 'boolean') {
        errors.flag = { is: typeof flag, be: 'be boolean' };
    }
    if (!Array.isArray(myPromises)) {
        errors.myPromises = { is: typeof myPromises, be: 'be array' };
    }
    if (element instanceof Array) {
        errors.element = { is: 'Array', be: 'be object' };
    } else if (typeof element != 'object') {
        errors.element = { is: element, be: 'be object' };
    }
    if (screenshot !== null) {
        errors.screenshot = { is: screenshot, be: 'be null' };
    }
    if (typeof elementText !== 'string') {
        errors.elementText = { is: typeof elementText, be: 'be string' };
    }
    if (!allElementsText.includes('const')) {
        errors.allElementsText = { is: allElementsText, be: 'contain const' };
    }
    if (counter <= 10) {
        errors.counter = { is: counter, be: 'be more than 10' };
    }
    if (config !== 'Common') {
        errors.config = { is: config, be: 'be Common' };
    }
    if (constant.toLowerCase() !== 'first') {
        errors.const = { is: constant, be: 'be first (case insensitive)' };
    }
    if (!Array.isArray(parameters)) {
        errors.parameters = { is: typeof parameters, be: 'be an array of 8 elements, while parameter is not an array at all' };
    } else if (parameters.length !== 8) {
        errors.parameters = { is: `an array of ${parameters.length} elements`, be: 'be an array of 8 elements' };
    }
    const descLen = description.length;
    if (descLen <= 5 || descLen >= 13) {
        errors.description = { is: `a string with length of ${descLen}`, be: 'be a string with length from 6 to 12' };
    }

    const errEntries = Object.entries(errors);
    const errMsgRows = [];
    if (errEntries.length === 0) {
        console.log('OK');
    } else {
        for(const [key, { is, be }] of errEntries) {
            errMsgRows.push(`${key} is ${is}, while it should ${be}`);
        };

        console.log('Your JSON file has errors!');
        fs.writeFileSync('./errors.txt', errMsgRows.join('\n'));
    }
};

checkJSON('./file.json');
checkJSON('./file2.json');
