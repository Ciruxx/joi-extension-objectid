const {ObjectID} = require('mongodb')
const extension = (joi) => {
    return {
        type: 'objectId',
        base: joi.string(),
        messages: {
            'objectId': '{{#label}} must be a valid ObjectId',
        },
        validate(value, helpers) {
            // Base validation regardless of the rules applied
            if (!ObjectID.isValid(value)) {
                return {value, errors: helpers.error('objectId')};
            }

            return {value: new ObjectID(value)}
        }
    }
};
module.exports = extension
