const JoiExtensionObjectId = require('../');
const Joi = require('joi').extend(JoiExtensionObjectId);
const {ObjectID} = require('mongodb');

const validObjectId = "5fd777d57fcb54c356763034";
const schema = Joi.object({
    objectIdKey: Joi.objectId()
});

test('is a valid ObjectID', async () => {
    const data = await schema.validateAsync({
        objectIdKey: validObjectId
    })
    expect(ObjectID.isValid(data.objectIdKey)).toBeTruthy();
});

test('is a valid ObjectID', async () => {
    const data = await schema.validateAsync({
        objectIdKey: validObjectId
    })
    expect(data.objectIdKey instanceof ObjectID).toBeTruthy();
});

test('isn\'t a valid ObjectID', async () => {
    try{
        const data = await schema.validateAsync({
            objectIdKey: "joi_is_awesome"
        })
    }
    catch (e){
        expect(e.details[0].message).toBe('"objectIdKey" must be a valid ObjectId');
    }
});
