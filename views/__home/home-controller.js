"use strict";

MyApp.home = function(params) {

    MyApp.debug = MyApp.debug || [];
    MyApp.debug.push('Home view model invoked.')

    return {
        homeList: [ 'A','B' ]
    };
};

