/**
 * This class is the controller for the main view for the application. It is specified as
 * the "controller" of the Main view class.
 *
 * TODO - Replace this content of this view to suite the needs of your application.
 */
Ext.define('MyApp.view.main.MainController', {
    extend: 'Ext.app.ViewController',

    alias: 'controller.main',

     onItemSelected: function (sender, record) {
        Ext.toast('You clicked on' + " " + record.get('FullName'));
    },  

    OnEdit: function (grid, rowId) {
        var record = grid.getStore().getAt(rowId);
        Ext.Msg.alert('Edit', 'Edit' + " " + record.get('FullName'));

    },
    
    OnDelete: function (grid, rowId) {
        var record = grid.getStore().getAt(rowId);
        Ext.Msg.confirm('Delete Changes', 'Do you want to delete' + " " + record.get('FullName'), function (choice) {
            if (choice === 'yes') {
                var store = grid.getStore('id-gridData');
                console.log(store)
                store.remove(record);

            }
        })
    },

  AddRecord: function (sender, record, grid) {
        Ext.create('Ext.window.Window', {
            extend: 'Ext.form',
            title: "Add Person",
            height: 200,
            width: 400,
            closeAction: 'hide',
            closable: true,
            items: [{
                xtype: 'form',
                defaultType: 'textfield',
                layout: 'anchor',
                items: [{
                    fieldLabel: 'First Name',
                    name: 'first_name',
                    type: 'String',
                    allowBlank: false
                }, {
                    fieldLabel: 'Last Name',
                    name: 'last_name',
                    type: 'String',
                    allowBlank: false
                }, ],
                buttons: [{
                    text: 'Add',
                    formBind: true,
                    disabled: true,
                    handler: function () {
                        let record = this.up('form').getForm().getValues();
                        let form = this.up('form').getForm();
                        console.log('record ', record);
                        var store = Ext.getStore('PersonnelStore');
                        console.log(store);
                        //var form = this.up('form').grid.getStore();
                        if (form.isValid()) {
                            store.add(record);
                            close.window();
                        }
                    },


                }, {
                    text: 'Close',
                    handler: function () {
                        this.up('window').close();
                    }

                }],

            }]

        }).show();
    }
});
