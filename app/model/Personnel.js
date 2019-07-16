Ext.define('Personnel', {
extend: 'Ext.data.Model',


    fields: [
        { name: 'id', type: 'int' },
        { name: 'first_name', type: 'string' },
        { name: 'last_name', type: 'string' },
        {
            name: 'FullName', type: 'string',
            convert: function (value, record) {
                return record.get('first_name') + ' ' + record.get('last_name')
            }
        },
        { name: 'avatar', type: 'string' },
        { name: 'active', type: 'boolean', defaultValue: '1' }
        
    ]
});