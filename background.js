chrome.browserAction.onClicked.addListener(function(activeTab){
  var newURL = "https://cs12.salesforce.com/_ui/common/apex/debug/ApexCSIPage";
  chrome.tabs.create({ url: newURL });
});