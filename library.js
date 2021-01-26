var https = require('https');
var pluginData = require('./plugin.json');
var winston = module.parent.require('winston');
var meta = require.main.require('./src/meta');
var isWhitelistedDomain = require('./utilities/isWhitelistedDomain');
var pluginSettings;
var Plugin = {};

pluginData.nbbId = pluginData.id.replace(/nodebb-plugin-/, '');

Plugin.load = function (params, callback) {
    var render = function (req, res, next) {
        res.render('admin/plugins/' + pluginData.nbbId, pluginData || {});
    };

    meta.settings.get(pluginData.nbbId, function (err, settings) {
        if (err)
            return callback(err);
        if (!settings) {
            winston.warn('[plugins/' + pluginData.nbbId + '] Settings not set or could not be retrieved!');
            return callback();
        }

        winston.info('[plugins/' + pluginData.nbbId + '] Settings loaded');
        pluginSettings = settings;

        params.router.get('/admin/plugins/' + pluginData.nbbId, params.middleware.admin.buildHeader, render);
        params.router.get('/api/admin/plugins/' + pluginData.nbbId, render);

        callback();
    });
};

Plugin.filterEmailRegister = function (regData, next) {
    if (regData && regData.userData && regData.userData.email) {
        if (!isWhitelistedDomain(regData.userData.email, pluginSettings.domains))
            return next(new Error('Invalid Email Domain.'));
    }
    return next(null, regData);
};

Plugin.filterEmailUpdate = function (data, next) {
    if (data && data.email) {
        if (!isWhitelistedDomain(data.email, pluginSettings.domains))
            return next(new Error('Invalid Email Domain.'));
    }
    return next(null, data);
};

Plugin.admin = {
    menu: function (header, callback) {
        header.plugins.push({
            "route": '/plugins/' + pluginData.nbbId,
            "icon": pluginData.faIcon,
            "name": pluginData.name
        });

        callback(null, header);
    }
};

module.exports = Plugin;
