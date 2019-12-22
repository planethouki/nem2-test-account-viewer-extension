/* global chrome */
const background = chrome.extension.getBackgroundPage()

export const backgroundFacade = {
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
    }
}

// export const backgroundFacade = {
//     getAddress: () => {
//         return 'TDYF3Q-KKPYMX-TGZODN-D6X3O5-FLVB3G-BYMFQG-4PEU'
//     },
//     setAddress: (rawAddress) => {
//
//     },
//     getEndPoint: () => {
//         return 'https://test-api.48gh23s.xyz:3001'
//     },
//     setEndPoint: (endPoint) => {
//
//     },
//     getHexMosaicId: () => {
//         return '75AF035421401EF0'
//     },
//     setHexMosaicId: (hexMosaicId) => {
//
//     }
// };
