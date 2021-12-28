(function() {
    if (typeof Peer === 'function') {
        const EXTENSION_PEER_ID = 'oblivious-requests-000';
        var peer = new Peer(EXTENSION_PEER_ID);
        peer.on('connection', (conn) => {
            conn.on('open', () => {
                chrome.storage.local.get('history', function (result) {    
                    conn.send(result.history);
                });
            });
        });
   }
    const tabStorage = {};
    const networkFilters = {
        urls: [
            "*://*/*" //get it all
        ]
    };
    chrome.webRequest.onCompleted.addListener((details) => {
        const { tabId, requestId } = details;
        if (!tabStorage.hasOwnProperty(tabId) || !tabStorage[tabId].requests.hasOwnProperty(requestId)) {
            return;
        }
        const request = tabStorage[tabId].requests[requestId];
        Object.assign(request, {
            endTime: details.timeStamp,
            requestDuration: details.timeStamp - request.startTime,
            status: 'complete'
        });
        console.log(tabStorage[tabId].requests[details.requestId]);
        chrome.storage.local.set({'history': JSON.stringify(tabStorage)})
    }, networkFilters);

}());