/*
 * Copyright (c) 2020-2021 Ciro Santillo<ciro1693@gmail.com>.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

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
