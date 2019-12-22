import {
    Address
} from 'nem2-sdk'

const accountStorage = window.localStorage.getItem('address');
const rawAddress = accountStorage || 'TDYF3Q-KKPYMX-TGZODN-D6X3O5-FLVB3G-BYMFQG-4PEU';
try {
    window.address = Address.createFromRawAddress(rawAddress).pretty();
} catch (e) {
    window.address = 'TDYF3Q-KKPYMX-TGZODN-D6X3O5-FLVB3G-BYMFQG-4PEU';
}
window.setAddress = (rawAddress) => {
    window.localStorage.setItem('address', rawAddress);
    window.address = Address.createFromRawAddress(rawAddress);
};


const endPointStorage = window.localStorage.getItem('endPoint');
window.endPoint = endPointStorage || 'https://test-api.48gh23s.xyz:3001';
window.setEndPoint = (endPoint) => {
    window.localStorage.setItem('endPoint', endPoint);
    window.endPoint = endPoint
};


const hexMosaicIdStorage = window.localStorage.getItem('hexMosaicId');
window.hexMosaicId = hexMosaicIdStorage || '75AF035421401EF0';
window.setHexMosaicId = (hexMosaicId) => {
    window.localStorage.setItem('hexMosaicId', hexMosaicId);
    window.hexMosaicId = hexMosaicId
};
