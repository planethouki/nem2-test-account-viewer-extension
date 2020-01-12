/* global chrome */
const background = chrome.extension.getBackgroundPage()

export const methods = {
    getAddress: () => {
        return background.window.address
    },
    setAddress: (rawAddress) => {
        background.window.setAddress(rawAddress)
    },
    getEndPoint: () => {
        return background.window.endPoint
    },
    setEndPoint: (endPoint) => {
        return background.window.setEndPoint(endPoint)
    },
    getHexMosaicId: () => {
        return background.window.hexMosaicId
    },
    setHexMosaicId: (hexMosaicId) => {
        return background.window.setHexMosaicId(hexMosaicId)
    },
    getBalance: () => {
        return background.window.balance
    }
};
