const JoiExtensionObjectId = require('../');
const Joi = require('joi').extend(JoiExtensionObjectId);

const schema = Joi.object({
    a: Joi.objectId()
});

async function init() {
    return await schema.validateAsync({
        a: "5fd777d57fcb54c356763034"
    })
}

init()
    .then(res => console.log(res))
    .catch(err => console.error(err));
