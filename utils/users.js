const request = require('postman-request')

const getUsers = (callback) => {
    request('https://api.minerstat.com/v2/coins?list=BTC,ETH,ADA,BNB,USDT,XRP,DOGE,USDC,DOT,SOL,UNI,BUSD,BCH,LUNA,LINK,LTC,MATIC,WBTC,ICP,AVAX,XLM,VET,ETC,FIL,THETA,TRX,DAI,OKB,XMR,ATOM,CAKE,CETH,FTT,AAVE,EOS,CUSDC,GRT,CDAI,KLAY,AXS,NEO,CRO,XTZ,SHIB,ALGO,MKR,STETH,BSV,AMP,MIOTA', (err, res, body) => {
        if(err) {
            return callback(err, undefined)
        }
        if(res) {
            if(body){
                const JSONBody = JSON.parse(body)
                return callback(undefined, JSONBody)
            }
            callback('users not found', undefined)
        }
    })
}
module.exports = {
    getUsers
}