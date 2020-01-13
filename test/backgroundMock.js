/* global chrome */

import transactions from './transactions.json';

export const getAddress = () => {
    return 'TDYF3Q-KKPYMX-TGZODN-D6X3O5-FLVB3G-BYMFQG-4PEU'
};
export const setAddress = (rawAddress) => {

};
export const getEndPoint = () => {
    return 'https://test-api.48gh23s.xyz:3001'
};
export const setEndPoint = (endPoint) => {

};
export const getHexMosaicId = () => {
    return '75AF035421401EF0'
};
export const setHexMosaicId = (hexMosaicId) => {

};
export const getBalance = () => {
    return Math.floor(1000000 * Math.random()) / 1000
};
export const getTransactions = () => {
    return transactions
        .map((transaction) => {
            return {
                hash: transaction.meta.hash,
                id: transaction.meta.id
            }
        })
        .filter(() => {
            return Math.random() > 0.2
        })
};
