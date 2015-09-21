/**
 * Запросы к Slack API
 * @module
 */
modules.define('api', ['socket-io', 'jquery', 'vow', 'lodash'],
    function (provide, io, $, vow, _) {
        var api = {
            /**
             * GET-запрос
             *
             * @param {String} action - код API метода
             * @param {Object} params - передаваемые данные
             * @return {Promise}
             */
            get : _.debounce(function(action, params) {
                return connect(action, params, 'get');
            }, 100),
            /**
             * POST-запрос
             *
             * @param {String} action - код API метода
             * @param {Object} params - передаваемые данные
             * @return {Promise}
             */
            post : _.debounce(function(action, params) {
                return connect(action, params, 'post');
            }, 100)
        }

        function connect(action, params, method) {
            params = params || {};
            method = method || 'get';

            var promise = new vow.Promise(function(resolve, reject) {
                $.get('/csrfToken')
                    .done(function(data) {
                        var url = '/slack/' + action;
                        var params = $.extend(params, { _csrf : data._csrf });

                        io.socket[method](url, params, function(resData, jwres) {
                            if (!resData || jwres.statusCode === 'error') {
                                reject();

                                return;
                            }

                            resolve(data);
                        });
                    })
                    .fail(function(err) {
                        reject(err);
                    });
            });

            return promise;
        }

        provide(api);
    }
);