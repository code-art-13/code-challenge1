// const stockQuotesData = [
//     {
//             symbol: "NKE",
//             name: "NIKE, Inc.",
//             currency: "USD",
//             price: "81.14",
//             price_open: "82.53",
//             day_high: "83.24",
//             day_low: "80.79",
//             '52_week_high': "90.00",
//             '52_week_low': "66.53",
//             day_change: "-1.98",
//             change_pct: "-2.38",
//             close_yesterday: "83.12",
//             market_cap: "127137456128",
//             volume: "8620047",
//             volume_avg: "5239212",
//             shares: "1258770048",
//             stock_exchange_long: "New York Stock Exchange",
//             stock_exchange_short: "NYSE",
//             timezone: "EDT",
//             timezone_name: "America/New_York",
//             gmt_offset: "-14400",
//             last_trade_time: "2019-08-02 16:00:55"
//     },
//     {
//             symbol: 'AAPL',
//             name: 'Apple Inc.',
//             currency: 'USD',
//             price: '203.36',
//             price_open: '205.53',
//             day_high: '206.43',
//             day_low: '201.64',
//             '52_week_high': '233.47',
//             '52_week_low': '142.00',
//             day_change: '-5.07',
//             change_pct: '-2.43',
//             close_yesterday: '208.43',
//             market_cap: '919013621760',
//             volume: '27338929',
//             volume_avg: '30457187',
//             shares: '4601079808',
//             stock_exchange_long: 'NASDAQ Stock Exchange',
//             stock_exchange_short: 'NASDAQ',
//             timezone: 'EDT',
//             timezone_name: 'America/New_York',
//             gmt_offset: '-14400',
//             last_trade_time: '2019-08-02 13:48:02'
//     },
//     {
//             symbol: 'AAPL',
//             name: 'Apple Inc.',
//             currency: 'USD',
//             price: '203.36',
//             price_open: '205.53',
//             day_high: '206.43',
//             day_low: '201.64',
//             '52_week_high': '233.47',
//             '52_week_low': '142.00',
//             day_change: '-5.07',
//             change_pct: '-2.43',
//             close_yesterday: '208.43',
//             market_cap: '919013621760',
//             volume: '27338929',
//             volume_avg: '30457187',
//             shares: '4601079808',
//             stock_exchange_long: 'NASDAQ Stock Exchange',
//             stock_exchange_short: 'NASDAQ',
//             timezone: 'EDT',
//             timezone_name: 'America/New_York',
//             gmt_offset: '-14400',
//             last_trade_time: '2019-08-02 13:48:02'
//     },
//     {
//             symbol: 'AAPL',
//             name: 'Apple Inc.',
//             currency: 'USD',
//             price: '203.36',
//             price_open: '205.53',
//             day_high: '206.43',
//             day_low: '201.64',
//             '52_week_high': '233.47',
//             '52_week_low': '142.00',
//             day_change: '-5.07',
//             change_pct: '-2.43',
//             close_yesterday: '208.43',
//             market_cap: '919013621760',
//             volume: '27338929',
//             volume_avg: '30457187',
//             shares: '4601079808',
//             stock_exchange_long: 'NASDAQ Stock Exchange',
//             stock_exchange_short: 'NASDAQ',
//             timezone: 'EDT',
//             timezone_name: 'America/New_York',
//             gmt_offset: '-14400',
//             last_trade_time: '2019-08-02 13:48:02'
//     },
//     {
//             symbol: "AMZN",
//             name: "Amazon.com, Inc.",
//             currency: "USD",
//             price: "1823.24",
//             price_open: "1845.07",
//             day_high: "1846.24",
//             day_low: "1808.02",
//             '52_week_high': "2050.50",
//             '52_week_low': "1307.00",
//             day_change: "-32.08",
//             change_pct: "-1.73",
//             close_yesterday: "1855.32",
//             market_cap: "901876613120",
//             volume: "4761068",
//             volume_avg: "3872075",
//             shares: "492052992",
//             stock_exchange_long: "NASDAQ Stock Exchange",
//             stock_exchange_short: "NASDAQ",
//             timezone: "EDT",
//             timezone_name: "America/New_York",
//             gmt_offset: "-14400",
//             last_trade_time: "2019-08-02 16:00:01"
//     },
//     {
//             symbol: "FB",
//             name: "Facebook, Inc.",
//             currency: "USD",
//             price: "189.02",
//             price_open: "191.10",
//             day_high: "192.61",
//             day_low: "188.07",
//             '52_week_high': "208.66",
//             '52_week_low': "123.02",
//             day_change: "-3.71",
//             change_pct: "-1.92",
//             close_yesterday: "192.73",
//             market_cap: "539264614400",
//             volume: "14853373",
//             volume_avg: "21527600",
//             shares: "2403460096",
//             stock_exchange_long: "NASDAQ Stock Exchange",
//             stock_exchange_short: "NASDAQ",
//             timezone: "EDT",
//             timezone_name: "America/New_York",
//             gmt_offset: "-14400",
//             last_trade_time: "2019-08-02 16:00:01"
//     },
//     {
//             symbol: "JPM",
//             name: "JPMorgan Chase & Co.",
//             currency: "USD",
//             price: "112.93",
//             price_open: "112.40",
//             day_high: "113.43",
//             day_low: "111.40",
//             '52_week_high': "119.24",
//             '52_week_low': "91.11",
//             day_change: "-0.01",
//             change_pct: "-0.01",
//             close_yesterday: "112.94",
//             market_cap: "361093660672",
//             volume: "10782896",
//             volume_avg: "11328437",
//             shares: "3243970048",
//             stock_exchange_long: "New York Stock Exchange",
//             stock_exchange_short: "NYSE",
//             timezone: "EDT",
//             timezone_name: "America/New_York",
//             gmt_offset: "-14400",
//             last_trade_time: "2019-08-02 16:00:10"
//     },
//     {
//             symbol: "NFLX",
//             name: "Netflix, Inc.",
//             currency: "USD",
//             price: "318.83",
//             price_open: "317.49",
//             day_high: "319.41",
//             day_low: "311.80",
//             '52_week_high': "386.80",
//             '52_week_low': "231.23",
//             day_change: "-0.67",
//             change_pct: "-0.21",
//             close_yesterday: "319.50",
//             market_cap: "139594924032",
//             volume: "5890715",
//             volume_avg: "8425337",
//             shares: "437220000",
//             stock_exchange_long: "NASDAQ Stock Exchange",
//             stock_exchange_short: "NASDAQ",
//             timezone: "EDT",
//             timezone_name: "America/New_York",
//             gmt_offset: "-14400",
//             last_trade_time: "2019-08-02 16:00:01"
//     },
//     {
//             symbol: "PEP",
//             name: "PepsiCo, Inc.",
//             currency: "USD",
//             price: "127.92",
//             price_open: "127.10",
//             day_high: "128.82",
//             day_low: "126.50",
//             '52_week_high': "135.24",
//             '52_week_low': "104.53",
//             day_change: "0.78",
//             change_pct: "0.61",
//             close_yesterday: "127.14",
//             market_cap: "178853904384",
//             volume: "4346786",
//             volume_avg: "4573600",
//             shares: "1401820032",
//             stock_exchange_long: "NASDAQ Stock Exchange",
//             stock_exchange_short: "NASDAQ",
//             timezone: "EDT",
//             timezone_name: "America/New_York",
//             gmt_offset: "-14400",
//             last_trade_time: "2019-08-02 16:00:01"
//     },
// ];

// module.exports = stockQuotesData;

const stockQuotesData = [
    {
            symbol: "NKE",
            name: "NIKE, Inc.",
            currency: "USD",
            price: "81.14",
            price_open: "82.53",
            day_high: "83.24",
            day_low: "80.79",
            '52_week_high': "90.00",
            '52_week_low': "66.53",
            day_change: "-1.98",
            change_pct: "-2.38",
            close_yesterday: "83.12",
            market_cap: "127137456128",
            volume: "8620047",
            volume_avg: "5239212",
            shares: "1258770048",
            stock_exchange_long: "New York Stock Exchange",
            stock_exchange_short: "NYSE",
            timezone: "EDT",
            timezone_name: "America/New_York",
            gmt_offset: "-14400",
            last_trade_time: "2019-08-02 16:00:55"
    },
    {
            symbol: 'AAPL',
            name: 'Apple Inc.',
            currency: 'USD',
            price: '203.36',
            price_open: '205.53',
            day_high: '206.43',
            day_low: '201.64',
            '52_week_high': '233.47',
            '52_week_low': '142.00',
            day_change: '-5.07',
            change_pct: '-2.43',
            close_yesterday: '208.43',
            market_cap: '919013621760',
            volume: '27338929',
            volume_avg: '30457187',
            shares: '4601079808',
            stock_exchange_long: 'NASDAQ Stock Exchange',
            stock_exchange_short: 'NASDAQ',
            timezone: 'EDT',
            timezone_name: 'America/New_York',
            gmt_offset: '-14400',
            last_trade_time: '2019-08-02 13:48:02'
    },
    {
            symbol: "AMZN",
            name: "Amazon.com, Inc.",
            currency: "USD",
            price: "1823.24",
            price_open: "1845.07",
            day_high: "1846.24",
            day_low: "1808.02",
            '52_week_high': "2050.50",
            '52_week_low': "1307.00",
            day_change: "-32.08",
            change_pct: "-1.73",
            close_yesterday: "1855.32",
            market_cap: "901876613120",
            volume: "4761068",
            volume_avg: "3872075",
            shares: "492052992",
            stock_exchange_long: "NASDAQ Stock Exchange",
            stock_exchange_short: "NASDAQ",
            timezone: "EDT",
            timezone_name: "America/New_York",
            gmt_offset: "-14400",
            last_trade_time: "2019-08-02 16:00:01"
    },
    {
            symbol: "FB",
            name: "Facebook, Inc.",
            currency: "USD",
            price: "189.02",
            price_open: "191.10",
            day_high: "192.61",
            day_low: "188.07",
            '52_week_high': "208.66",
            '52_week_low': "123.02",
            day_change: "-3.71",
            change_pct: "-1.92",
            close_yesterday: "192.73",
            market_cap: "539264614400",
            volume: "14853373",
            volume_avg: "21527600",
            shares: "2403460096",
            stock_exchange_long: "NASDAQ Stock Exchange",
            stock_exchange_short: "NASDAQ",
            timezone: "EDT",
            timezone_name: "America/New_York",
            gmt_offset: "-14400",
            last_trade_time: "2019-08-02 16:00:01"
    },
    {
            symbol: "JPM",
            name: "JPMorgan Chase & Co.",
            currency: "USD",
            price: "112.93",
            price_open: "112.40",
            day_high: "113.43",
            day_low: "111.40",
            '52_week_high': "119.24",
            '52_week_low': "91.11",
            day_change: "-0.01",
            change_pct: "-0.01",
            close_yesterday: "112.94",
            market_cap: "361093660672",
            volume: "10782896",
            volume_avg: "11328437",
            shares: "3243970048",
            stock_exchange_long: "New York Stock Exchange",
            stock_exchange_short: "NYSE",
            timezone: "EDT",
            timezone_name: "America/New_York",
            gmt_offset: "-14400",
            last_trade_time: "2019-08-02 16:00:10"
    },
    {
            symbol: "NFLX",
            name: "Netflix, Inc.",
            currency: "USD",
            price: "318.83",
            price_open: "317.49",
            day_high: "319.41",
            day_low: "311.80",
            '52_week_high': "386.80",
            '52_week_low': "231.23",
            day_change: "-0.67",
            change_pct: "-0.21",
            close_yesterday: "319.50",
            market_cap: "139594924032",
            volume: "5890715",
            volume_avg: "8425337",
            shares: "437220000",
            stock_exchange_long: "NASDAQ Stock Exchange",
            stock_exchange_short: "NASDAQ",
            timezone: "EDT",
            timezone_name: "America/New_York",
            gmt_offset: "-14400",
            last_trade_time: "2019-08-02 16:00:01"
    },
    {
            symbol: "PEP",
            name: "PepsiCo, Inc.",
            currency: "USD",
            price: "127.92",
            price_open: "127.10",
            day_high: "128.82",
            day_low: "126.50",
            '52_week_high': "135.24",
            '52_week_low': "104.53",
            day_change: "0.78",
            change_pct: "0.61",
            close_yesterday: "127.14",
            market_cap: "178853904384",
            volume: "4346786",
            volume_avg: "4573600",
            shares: "1401820032",
            stock_exchange_long: "NASDAQ Stock Exchange",
            stock_exchange_short: "NASDAQ",
            timezone: "EDT",
            timezone_name: "America/New_York",
            gmt_offset: "-14400",
            last_trade_time: "2019-08-02 16:00:01"
    },
];

module.exports = stockQuotesData;