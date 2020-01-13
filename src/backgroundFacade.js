/* global chrome */
const chromeBackground = chrome.extension.getBackgroundPage()

export const getAddress = () => {
    return chromeBackground.window.address
};
export const setAddress = (rawAddress) => {
    chromeBackground.window.setAddress(rawAddress)
};
export const getEndPoint = () => {
    return chromeBackground.window.endPoint
};
export const setEndPoint = (endPoint) => {
    return chromeBackground.window.setEndPoint(endPoint)
};
export const getHexMosaicId = () => {
    return chromeBackground.window.hexMosaicId
};
export const setHexMosaicId = (hexMosaicId) => {
    return chromeBackground.window.setHexMosaicId(hexMosaicId)
};
export const getBalance = () => {
    return chromeBackground.window.balance
};
export const getTransactions = () => {
    return chromeBackground.window.transactions
};

