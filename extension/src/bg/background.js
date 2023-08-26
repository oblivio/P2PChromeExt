(function() {
    if (typeof Peer === 'function') {
        const EXTENSION_PEER_ID = 'oblivious-requests-000';
        var peer = new Peer(EXTENSION_PEER_ID);
        console.log('peer',peer)
        peer.on('connection', (conn) => {
            conn.on('open', () => {
                console.log('connection opened')
                chrome.storage.local.get('history', function (result) {    
                    console.log('result.history',result.history)
                    conn.send(result.history);
                });
            });
        });
   }
    let tabStorage = {};
    const networkFilters = {
        urls: [
            "*://*/*" //get it all
        ]
    };
    chrome.webRequest.onCompleted.addListener((details) => {
        const { tabId, requestId } = details;
        if (!tabStorage.hasOwnProperty(details.url)){
            tabStorage[details.url] = {requests:{}}
        }
        if(!tabStorage[details.url]?.requests?.hasOwnProperty(requestId)){
            tabStorage[details.url]["requests"][requestId] = {details:details}
        }
        const request = tabStorage[details.url].requests[requestId];
        Object.assign(request, {
            timeStamp: new Date(details.timeStamp),
            status: 'complete',
        });
        chrome.storage.local.set({'history': JSON.stringify(tabStorage)})
    }, networkFilters);
}());




