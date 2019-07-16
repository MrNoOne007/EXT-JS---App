/**
 * This class is the controller for the main view for the application. It is specified as
 * the "controller" of the Main view class.
 *
 * TODO - Replace this content of this view to suite the needs of your application.
 */
Ext.define('MyApp.view.main.MainController', {
    extend: 'Ext.app.ViewController',

    alias: 'controller.main',

    onItemSelected: function (sender, record, data) {
        Ext.toast('You clicked on' + " " + data);
    },

    OnEdit: function (sender, record, data, ) {
        Ext.Msg.alert('Edit', 'Edit' + " " + record);

    },

    OnDelete: function (sender, record, data) {
       
        Ext.Msg.confirm('Delete Changes', 'Do you want to delete' + " " + record, function (choice) {
            if (choice === 'yes') {
                var store = Ext.getStore('store.Personnel');
                console.log(store)
                store.remove(record);

            }
        })
    },

    AddRecord: function (sender, record) {
        Ext.create('Ext.window.Window', {
            extend: 'Ext.form.Panel',
            title: 'Add Person',
            height: 200,
            width: 400,
            closeAction: 'hide',
            closable: false,
            defaultType: 'textfield',
            xtype: 'form',
            items: [{
                fieldLabel: 'First Name',
                type: 'String',
                allowBlank: false
            }, {
                fieldLabel: 'Last Name',
                type: 'String',
                allowBlank: false
            }],

            // Reset and Submit buttons
            buttons: [{
                text: 'Add',
                formBind: true,
                disabled: true,
                handler: function () {
                    this.up('form').getForm().submit();
                }

            }, {
                text: 'Close',
                handler: function () { this.up('window').close(); }

            }]
        }).show();
    }
});
