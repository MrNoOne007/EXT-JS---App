/**
 * This view is an example list of people.
 */

Ext.define('MyApp.view.main.List', {
    extend: 'Ext.grid.Panel',
    xtype: 'mainlist',
    requires: ['MyApp.store.Personnel'],

    title: 'Personnel',

    store: {
        type: 'personnel'
    },

    actions: {

        edit: {
            iconCls: 'x-fa fa-pencil-square',
            tooltip: 'Edit',
            handler: 'OnEdit'
        },

        delete: {
            iconCls: 'x-fa fa-trash-o',
            text: 'Delete',
            handler: 'OnDelete'
        }
    },

    columns: [
        { text: '', dataIndex: 'avatar', renderer: function (value) { return '<img src="' + value + '" width="32" height="32" borer="0" />'; } },
        { text: 'Name', dataIndex: 'FullName', align:'left', flex: 1 },
        { text: "Active", dataIndex: 'active', xtype: 'checkcolumn' },
        {
            text: 'Action', dataIndex: 'action', xtype: 'actioncolumn', flex: 1,
            items: ['@edit', '@delete'],
        }
    ],
    tbar: [
        { xtype: 'button', text: 'Add Record', cls: 'x-btn-default-small', handler: 'AddRecord' },
    ],

    listeners: {
        select: 'onItemSelected',
    }

});