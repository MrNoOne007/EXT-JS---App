Ext.define('MyApp.store.Personnel', {
    extend: 'Ext.data.Store',
    alias: 'store.personnel',
    autoLoad: true,
    pageSize: null,

    model: 'Personnel',
    storeId: "PersonnelStore",
    proxy: {
        type: 'rest',
        url: 'https://reqres.in/api/users',
        method: 'GET',
        reader: {
            type: 'json',
            rootProperty: 'data',
        }

    },

    listeners: {
        load: function (store, record) {
        console.log(record)
            var store = Ext.util.LocalStorage.get('id');
            store.setItem('gridData', record);

        }
    }
});
