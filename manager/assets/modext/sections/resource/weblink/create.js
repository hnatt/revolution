/**
 * Loads the create resource page
 * 
 * @class MODx.page.CreateWebLink
 * @extends MODx.Component
 * @param {Object} config An object of config properties
 * @xtype modx-page-weblink-create
 */
MODx.page.CreateWebLink = function(config) {
    config = config || {};
    Ext.applyIf(config,{
        url: MODx.config.connector_url
        ,formpanel: 'modx-panel-resource'
        ,id: 'modx-page-update-resource'
        ,which_editor: 'none'
        ,action: 'resource/create'
        ,actions: {
            'new': 'resource/create'
            ,edit: 'resource/update'
            ,cancel: 'welcome'
        }
        ,buttons: this.getButtons(config)
        ,components: [{
            xtype: 'modx-panel-weblink'
            ,renderTo: 'modx-panel-weblink-div'
            ,resource: 0
            ,record: config.record || {}
            ,publish_document: config.publish_document
            ,access_permissions: config.access_permissions
            ,show_tvs: config.show_tvs
            ,url: config.url       
        }]
    });
    MODx.page.CreateWebLink.superclass.constructor.call(this,config);
};
Ext.extend(MODx.page.CreateWebLink,MODx.Component,{
    getButtons: function(cfg) {
        var btns = [];
        if (cfg.canSave == 1) {
            btns.push({
                process: 'resource/create'
                ,reload: true
                ,id: 'modx-abtn-save'
                ,text: _('save')
                ,method: 'remote'
                ,checkDirty: true
                ,keys: [{
                    key: MODx.config.keymap_save || 's'
                    ,ctrl: true
                }]
            });
            btns.push('-');
        }
        btns.push({
            process: 'cancel'
            ,text: _('cancel')
            ,id: 'modx-abtn-cancel'
            ,params: { a: 'welcome' }
        });
        /*btns.push('-');
        btns.push({
            text: _('help_ex')
            ,handler: MODx.loadHelpPane
            ,id: 'modx-abtn-help'
        });*/
        return btns;
    }
});
Ext.reg('modx-page-weblink-create',MODx.page.CreateWebLink);
