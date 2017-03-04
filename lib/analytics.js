(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
(i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
})(window,document,'script','https://www.google-analytics.com/analytics.js','ga');

const TRACKING_VERSION = '1';
const dimensions = {
  CLIENT_ID: 'dimension1',
  WINDOW_ID: 'dimension2',
  TRACKING_VERSION: 'dimension3',
};

function uuid() {
  return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
    var r = Math.random()*16|0, v = c == 'x' ? r : (r&0x3|0x8);
    return v.toString(16);
  });
}

ga('create', 'UA-93012389-1', 'auto');
ga('set', 'transport', 'beacon');
ga((tracker) => {
  var clientId = tracker.get('clientId');
  tracker.set(dimensions.CLIENT_ID, clientId);
});
ga('set', dimensions.WINDOW_ID, uuid());
ga('set', dimensions.TRACKING_VERSION, TRACKING_VERSION);
ga('send', 'pageview');
