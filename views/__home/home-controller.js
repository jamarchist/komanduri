"use strict";

MyApp.home = function (params) {
    console.log('home view model invoked.')

    var viewModel = {
        homeList : [
            { key: 'Category 1', items: [
                {
                    text: "RFA for Barrett's Esophagus",
                    id: 'esophagus'
                }
            ] },
            { key: 'Category 2', items: [
                {
                    text: 'Difficult ERCP',
                    id: 'ercp'
                },
                {
                    text: 'EMR for Complex Polyps',
                    id: 'polyps'
                }
            ]}
        ]
/*
        navigateToProcedure: function (itemClicked) {
            MyApp.app.navigate('procedure/' + itemClicked.itemData.id);
        },

        onGroupItemClicked: function (evt) {
            $('#home-nav-list').find('.dx-list-item').hide();

            var group = $(evt.element);
            group.parents('.dx-list-group').children('.dx-list-item').show();
        },

        viewShown: function (args) {
            // This shouldn't be necessary, but I think something
            // crazy is going on. Removing this will cause the library
            // list to act wonky
            if (args.viewInfo.viewName === 'home') {
                $('#home-nav-list').find('.dx-list-item').hide();
            }
        }*/

    };

    return viewModel;
};

