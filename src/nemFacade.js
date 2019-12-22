import { AccountHttp, Address, MosaicHttp, MosaicId } from 'nem2-sdk';
import 'babel-polyfill';

export const nemFacade = {
    getBalance(rawAddress, endPoint, hexMosaicId) {
        const address = Address.createFromRawAddress(rawAddress);
        const accountHttp = new AccountHttp(endPoint, address.networkType);
        const mosaicHttp = new MosaicHttp(endPoint, address.networkType);
        return Promise.all([
            accountHttp.getAccountInfo(address).toPromise(),
            mosaicHttp.getMosaic(new MosaicId(hexMosaicId)).toPromise()
        ])
            .then(([accountInfo, mosaicInfo]) => {
                const mosaicsFiltered = accountInfo.mosaics
                    .filter((mosaic) => {
                        return mosaic.id.toHex().toUpperCase() === hexMosaicId.toUpperCase()
                    })
                if (mosaicsFiltered.length === 0) {
                    return 0
                }
                return mosaicsFiltered[0].amount.compact() / (10 ** mosaicInfo.divisibility)
            })
    },
    getTransactions(rawAddress, endPoint) {
        const address = Address.createFromRawAddress(rawAddress);
        const accountHttp = new AccountHttp(endPoint, address.networkType);
        return accountHttp.getAccountTransactions(address).toPromise()
            .then((transactions) => {
                return transactions.map((transaction) => {
                    return {
                        hash: transaction.transactionInfo.hash,
                        id: transaction.transactionInfo.id
                    }
                })
            })
    }
};

