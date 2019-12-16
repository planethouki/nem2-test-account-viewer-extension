function injectScript () {
    try {
        const c = document.head || document.documentElement;
        const s = document.createElement('script');
        s.setAttribute('async', false);
        s.setAttribute('type', 'text/javascript');
        s.setAttribute('src', chrome.extension.getURL('/inpage.js'));
        c.insertBefore(s, c.children[0]);
        c.removeChild(s);
    } catch (e) {
        console.error('injection failed', e)
    }
}

injectScript();
