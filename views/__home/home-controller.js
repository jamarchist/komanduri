
MyApp.home = function (params) {
    console.log('home view model invoked.')

    var viewModel = {
        homeList : [
            { key: 'Category 1', items: [
                {
                    text: "RFA for Barrett's Esophagus",
                    id: 'esophagus',
                    links: [
                        { url: 'http://www.sciencedirect.com/science/article/pii/S0016510713026266' },
                        { url: 'http://www.sciencedirect.com/science/article/pii/S0016508513015965' },
                        { url: 'http://www.sciencedirect.com/science/article/pii/S0016510713021408' }
                    ],
                    photos: [
                        '/content/procedures/esophagus/images/CRIM-NBI.JPEG',
                        '/content/procedures/esophagus/images/CRIM.JPEG',
                        '/content/procedures/esophagus/images/GAVE-p-RFA-1.JPEG',
                        '/content/procedures/esophagus/images/GAVE-post-1.JPEG',
                        '/content/procedures/esophagus/images/GAVE-Pre-1.JPEG',
                        '/content/procedures/esophagus/images/image-1.JPEG',
                        '/content/procedures/esophagus/images/image.JPEG',
                        '/content/procedures/esophagus/images/jc-post-1.JPEG',
                        '/content/procedures/esophagus/images/jc-post2.JPEG',
                        '/content/procedures/esophagus/images/JC-pre-2.JPEG',
                        '/content/procedures/esophagus/images/JC-pre1.JPEG'
                    ],
                    videos: [
                        'https://www.dropbox.com/s/1ckj20x6zkt64nx/esophagus.mp4',
                        'https://www.dropbox.com/s/1ckj20x6zkt64nx/esophagus.mp4',
                        'https://www.dropbox.com/s/1ckj20x6zkt64nx/esophagus.mp4'
                    ],
                    guidelines: [
                        { name: 'EET 2014 (pdf)', url: '/content/procedures/esophagus/guidelines/EET%202014.pdf' }
                    ]
                }
            ] },
            { key: 'Category 2', items: [
                {
                    text: 'Difficult ERCP',
                    id: 'ercp',
                    links: [
                        { url: 'http://www.sciencedirect.com/science/article/pii/S0016510713023523' },
                        { url: 'http://www.ncbi.nlm.nih.gov/pubmed/24409076' },
                        { url: 'http://www.ncbi.nlm.nih.gov/pmc/articles/PMC3882422/' },
                        { url: 'http://www.nejm.org/doi/full/10.1056/NEJMct1208450' }
                    ],
                    photos: [
                        '/content/procedures/ercp/images/image.png',
                        '/content/procedures/ercp/images/image-1.png',
                        '/content/procedures/ercp/images/image-2.png',
                        '/content/procedures/ercp/images/image-3.png',
                        '/content/procedures/ercp/images/image-4.png',
                        '/content/procedures/ercp/images/image-5.png',
                        '/content/procedures/ercp/images/image-6.png',
                        '/content/procedures/ercp/images/image-7.png'
                    ],
                    videos: [],
                    guidelines: [
                        { name: 'Chicago Live SK ERCP 2012 (pdf)', url: '/content/procedures/ercp/guidelines/Chicago%20Live%20SK%20ERCP%202012.pdf' }
                    ]
                },
                {
                    text: 'EMR for Complex Polyps',
                    id: 'polyps',
                    links: [
                        { url: 'http://www.sciencedirect.com/science/article/pii/S1542356513014547'},
                        { url: 'http://www.sciencedirect.com/science/article/pii/S0016510713001909'},
                        { url: 'http://www.sciencedirect.com/science/article/pii/S001651071200226X'}
                    ],
                    photos: [
                        '/content/procedures/polyps/images/channel%20colon%2023.jpeg',
                        '/content/procedures/polyps/images/channel colon final.jpeg',
                        '/content/procedures/polyps/images/channel colon.jpeg',
                        '/content/procedures/polyps/images/colon emr 1.jpeg',
                        '/content/procedures/polyps/images/colon emr 2.jpeg',
                        '/content/procedures/polyps/images/colon emr closure cook clips.jpeg',
                        '/content/procedures/polyps/images/colon emr defect.jpeg',
                        '/content/procedures/polyps/images/polyp jan 14.jpeg',
                        '/content/procedures/polyps/images/post emr jan 2014.jpeg'
                    ],
                    videos: [
                    ],
                    guidelines: [
                        { name: 'ASGE Colon EMR Talk (pdf)', url: '/content/procedures/ercp/guidelines/ASGE%20Colon%20EMR%20Talk.pdf' }
                    ]
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

