/* global chrome */
const background = chrome.extension.getBackgroundPage()

module.exports = {
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
    }
}
