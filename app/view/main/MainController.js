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

 
    AddRecord: function (grid, rowId, record) {
        Ext.create('Ext.window.Window', {
              title: "Add Person",
              height: 200,
              width: 400,
            closeAction: 'hide',
            closable: true,
           
              items: [{
                  xtype:'form',
                    defaultType: 'textfield',
                   
                 items: [{
                    fieldLabel: 'First Name',
                        name: 'First Name',
                        type: 'String',
                        allowBlank: false
                    }, {
                        fieldLabel: 'Last Name',
                        name: 'Last Name',
                        type: 'String',
                        allowBlank: false
                    }, ],
                 buttons: [{
                    text: 'Add',
                     formBind: true,
                     disabled: true,
                     handler: function () {
                             var grid = this.up('form').getStore();
                             if (form.isValid()) {
                                 form.submit({
                                     success: function (grid, rowId) {
                                         Ext.Msg.alert('Success', action.result.msg);
                                         store.remove(record);
                                     },
                                 })

                             }
                        var grid = this.up('form').getStore().submit()
                     },
                 }, {
                         text: 'Close', handler: function () {
                            this.up('window').close();
                 }
                 
             }],
        
              }]
            
         }).show();
        }
    });

