var parentCoin = "COIN";

var api = "http://poolhost:8117";
var poolHost = "poolhost.com";

var email = "support@poolhost.com";
var telegram = "https://t.me/YourPool";
var discord = "https://discordapp.com/invite/YourPool";

var marketCurrencies = ["{symbol}-BTC", "{symbol}-USD", "{symbol}-EUR", "{symbol}-CAD"];

var blockchainExplorer = "http://chainradar.com/{symbol}/block/{id}";
var transactionExplorer = "http://chainradar.com/{symbol}/transaction/{id}";

var themeCss = "themes/default.css";
var defaultLang = "en";

var networkStat = {
    "xfg": [
              ["xfg.ms-pool.net.ua", "http://xfg.ms-pool.net.ua:8117"],
              ["185.185.80.62/xfg/#","http://185.185.80.62:8207"],
              ["loudmining.com/xfg/","https://loudmining.com/fuego/api"],
              ["radioactive.sytes.net:8383/xfg/","http://radioactive.sytes.net:8383"]

            ]
};

// Merged Mining:
// var api = "http://poolhost/apiMerged";
// var blockchainExplorer = "http://explorer.ird.cash/?hash={id}#block";
// var transactionExplorer = "http://explorer.ird.cash/?hash={id}#transaction";
