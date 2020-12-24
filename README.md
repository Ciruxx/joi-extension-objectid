# joi-extension-objectid

[![version](https://img.shields.io/npm/v/@ciruxx/joi-extension-objectid)][npm]
[![license](https://img.shields.io/npm/l/@ciruxx/joi-extension-objectid)][npm]

[npm]: https://www.npmjs.com/package/joi-extension-objectid
[build]: https://github.com/dszakallas/joi-extension-objectid/actions?query=branch%3Amaster+workflow%3A%22Node.js+CI%22

ObjectId extension for the [Joi][] validation library

[joi]: https://github.com/sideway/joi

## Usage

```js
const JoiExtensionObjectId = require('@ciruxx/joi-extension-objectid');
const Joi = require('joi').extend(JoiExtensionObjectId);

const schema = Joi.object({
    objectIdKey: Joi.objectId()
});

const validatedData = await schema.validateAsync({
    objectIdKey: "5fd777d57fcb54c356763034"
})

data.objectIdKey instanceof ObjectID // true!
```

![offrex](https://mark.trademarkia.com/services/logo.ashx?sid=85595934)
