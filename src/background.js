/* global nem */

import {
    Address
} from 'nem2-sdk'
import { Observable } from 'rxjs'

const accountStorage = window.localStorage.getItem('address');
const rawAddress = accountStorage || 'TDYF3Q-KKPYMX-TGZODN-D6X3O5-FLVB3G-BYMFQG-4PEU';
try {
    window.address = Address.createFromRawAddress(rawAddress).pretty();
} catch (e) {
    window.address = 'TDYF3Q-KKPYMX-TGZODN-D6X3O5-FLVB3G-BYMFQG-4PEU';
}
window.setAddress = (rawAddress) => {
    window.localStorage.setItem('address', rawAddress);
    window.address = rawAddress;
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

function balanceInterval() {
    return Promise.race([
        nem.getBalance(window.address, window.endPoint, window.hexMosaicId),
        new Promise((resolve) => {
            setTimeout(resolve, 1500, false);
        }),
    ])
        .then((result) => {
            if (result === false) {
                setTimeout(balanceInterval, 10000)
            } else {
                window.balance = result
                setTimeout(balanceInterval, 1000)
            }
        })
}

function transactionsInterval() {
    return Promise.race([
        nem.getTransactions(window.address, window.endPoint),
        new Promise((resolve) => {
            setTimeout(resolve, 1500, false);
        }),
    ])
        .then((result) => {
            if (result === false) {
                setTimeout(transactionsInterval, 10000)
            } else {
                window.transactions = result
                setTimeout(transactionsInterval, 1000)
            }
        })
}

balanceInterval();
transactionsInterval();

