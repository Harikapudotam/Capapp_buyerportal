sap.ui.require(
    [
        'sap/fe/test/JourneyRunner',
        'harika/ust/header/test/integration/FirstJourney',
		'harika/ust/header/test/integration/pages/Request_HeaderList',
		'harika/ust/header/test/integration/pages/Request_HeaderObjectPage',
		'harika/ust/header/test/integration/pages/Request_ItemsObjectPage'
    ],
    function(JourneyRunner, opaJourney, Request_HeaderList, Request_HeaderObjectPage, Request_ItemsObjectPage) {
        'use strict';
        var JourneyRunner = new JourneyRunner({
            // start index.html in web folder
            launchUrl: sap.ui.require.toUrl('harika/ust/header') + '/index.html'
        });

       
        JourneyRunner.run(
            {
                pages: { 
					onTheRequest_HeaderList: Request_HeaderList,
					onTheRequest_HeaderObjectPage: Request_HeaderObjectPage,
					onTheRequest_ItemsObjectPage: Request_ItemsObjectPage
                }
            },
            opaJourney.run
        );
    }
);