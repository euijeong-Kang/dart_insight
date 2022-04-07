let color = '#3aa757';

chrome.runtime.onInstalled.addListener(() => {
  chrome.storage.sync.set({ color });
  console.log('Default background color set to %cgreen', `color: ${color}`);
});

chrome.runtime.onInstalled.addListener(() => {
  chrome.storage.sync.set(
    {
      toggleSitesActive: false,
      toggleSitesList: 'example.com',
    },
    () => {},
  );
});

// const toggleSitesActive = false;
// const toggleSitesList = 'example.com';

// chrome.storage.sync.get(['toggleSitesActive', 'toggleSitesList'], result => {
//   toggleSitesActive = result.toggleSitesActive;
//   toggleSitesList = result.toggleSitesList;
// });
