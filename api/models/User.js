// User model
module.exports = {
    // Enforce model schema in the case of schemaless databases
    schema : true,

    attributes : {
        id : { type : 'string', unique : true, primaryKey : true },
        email : { type : 'email', unique : true },
        passports : { collection : 'Passport', via : 'user' },
        name : { type : 'string' },
        deleted : { type : 'boolean', defaultsTo : false },
        color : { type : 'string' },
        first_name : { type : 'string' },
        last_name : { type : 'string' },
        real_name : { type : 'string' },
        skype : { type : 'string' },
        phone : { type : 'string' },
        image_24 : { type : 'string' },
        image_32 : { type : 'string' },
        image_48 : { type : 'string' },
        image_72 : { type : 'string' },
        image_192 : { type : 'string' },
        is_admin : { type : 'boolean', defaultsTo : false },
        is_owner : { type : 'boolean' },
        has_2fa : { type : 'boolean' },
        has_files : { type : 'boolean' },
        createdAt : { type : 'datetime' },
        updatedAt : { type : 'datetime' }
    }
};
