import React, { Component, ReactText, createRef } from "react";
import * as d3 from 'd3';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import { Alert, AlertTitle } from '@material-ui/lab';

const mock_api_response =
{
    "meta": {
        "currency": "RUB",
        "symbol": "HYDR.ME",
        "exchangeName": "MCX",
        "instrumentType": "EQUITY",
        "firstTradeDate": 1267597800,
        "regularMarketTime": 1594654224,
        "gmtoffset": 10800,
        "timezone": "MSK",
        "exchangeTimezoneName": "Europe/Moscow",
        "regularMarketPrice": 0.7639,
        "chartPreviousClose": 0.7662,
        "previousClose": 0.7662,
        "scale": 4,
        "priceHint": 4,
        "currentTradingPeriod": {
            "pre": {
                "timezone": "MSK",
                "start": 1594621800,
                "end": 1594621800,
                "gmtoffset": 10800
            },
            "regular": {
                "timezone": "MSK",
                "start": 1594621800,
                "end": 1594656000,
                "gmtoffset": 10800
            },
            "post": {
                "timezone": "MSK",
                "start": 1594656000,
                "end": 1594656000,
                "gmtoffset": 10800
            }
        },
        "tradingPeriods": [
            [
                {
                    "timezone": "MSK",
                    "start": 1594621800,
                    "end": 1594656000,
                    "gmtoffset": 10800
                }
            ]
        ],
        "dataGranularity": "5m",
        "range": "1d",
        "validRanges": [
            "1d",
            "5d",
            "1mo",
            "3mo",
            "6mo",
            "1y",
            "2y",
            "5y",
            "10y",
            "ytd",
            "max"
        ]
    },
    "timestamp": [
        1594623300,
        1594623600,
        1594623900,
        1594624200,
        1594624500,
        1594624800,
        1594625100,
        1594625400,
        1594625700,
        1594626000,
        1594626300,
        1594626600,
        1594626900,
        1594627200,
        1594627500,
        1594627800,
        1594628100,
        1594628400,
        1594628700,
        1594629000,
        1594629300,
        1594629600,
        1594629900,
        1594630200,
        1594630500,
        1594630800,
        1594631100,
        1594631400,
        1594631700,
        1594632000,
        1594632300,
        1594632600,
        1594632900,
        1594633200,
        1594633500,
        1594633800,
        1594634100,
        1594634400,
        1594634700,
        1594635000,
        1594635300,
        1594635600,
        1594635900,
        1594636200,
        1594636500,
        1594636800,
        1594637100,
        1594637400,
        1594637700,
        1594638000,
        1594638300,
        1594638600,
        1594638900,
        1594639200,
        1594639500,
        1594639800,
        1594640100,
        1594640400,
        1594640700,
        1594641000,
        1594641300,
        1594641600,
        1594641900,
        1594642200,
        1594642500,
        1594642800,
        1594643100,
        1594643400,
        1594643700,
        1594644000,
        1594644300,
        1594644600,
        1594644900,
        1594645200,
        1594645500,
        1594645800,
        1594646100,
        1594646400,
        1594646700,
        1594647000,
        1594647300,
        1594647600,
        1594647900,
        1594648200,
        1594648500,
        1594648800,
        1594649100,
        1594649400,
        1594649700,
        1594650000,
        1594650300,
        1594650600,
        1594650900,
        1594651200,
        1594651500,
        1594651800,
        1594652100,
        1594652400,
        1594652700,
        1594653000,
        1594653300,
        1594653600,
        1594653900,
        1594654200,
        1594654224
    ],
    "indicators": {
        "quote": [
            {
                "close": [
                    0.7677000164985657,
                    0.7712000012397766,
                    0.7696999907493591,
                    0.7692999839782715,
                    0.7680000066757202,
                    0.7703999876976013,
                    0.7696999907493591,
                    0.7689999938011169,
                    0.76910001039505,
                    0.7689999938011169,
                    0.7678999900817871,
                    0.7670000195503235,
                    0.7653999924659729,
                    0.7631999850273132,
                    0.7648000121116638,
                    0.7656999826431274,
                    0.7657999992370605,
                    0.7648000121116638,
                    0.76419997215271,
                    0.7616999745368958,
                    0.7608000040054321,
                    0.7603999972343445,
                    0.7603999972343445,
                    0.7609000205993652,
                    0.7580999732017517,
                    0.7595000267028809,
                    0.7595999836921692,
                    0.7605000138282776,
                    0.7599999904632568,
                    0.7599999904632568,
                    0.7591000199317932,
                    0.7597000002861023,
                    0.7598999738693237,
                    0.7594000101089478,
                    0.7603999972343445,
                    0.7605000138282776,
                    0.7615000009536743,
                    0.7599999904632568,
                    0.7576000094413757,
                    0.7566999793052673,
                    0.7587000131607056,
                    0.7595999836921692,
                    0.7598000168800354,
                    0.7601000070571899,
                    0.7598000168800354,
                    0.7608000040054321,
                    0.7602999806404114,
                    0.7613000273704529,
                    0.7627999782562256,
                    0.7634999752044678,
                    0.7627999782562256,
                    0.7635999917984009,
                    0.7628999948501587,
                    0.7631999850273132,
                    0.7626000046730042,
                    0.7630000114440918,
                    0.7616000175476074,
                    0.7609999775886536,
                    0.7599999904632568,
                    0.7626000046730042,
                    0.761900007724762,
                    0.7617999911308289,
                    0.7633000016212463,
                    0.7634000182151794,
                    0.7628999948501587,
                    0.7628999948501587,
                    0.7634000182151794,
                    0.7633000016212463,
                    0.7635999917984009,
                    0.763700008392334,
                    0.7635999917984009,
                    0.7642999887466431,
                    0.7634999752044678,
                    0.7645000219345093,
                    0.7652000188827515,
                    0.7653999924659729,
                    0.7660999894142151,
                    0.7660999894142151,
                    0.7649999856948853,
                    0.7664999961853027,
                    0.7663999795913696,
                    0.7663999795913696,
                    0.7670999765396118,
                    0.765999972820282,
                    0.7648000121116638,
                    0.7639999985694885,
                    0.7657999992370605,
                    0.7652000188827515,
                    0.7666000127792358,
                    0.7666000127792358,
                    0.7670999765396118,
                    0.7671999931335449,
                    0.7667999863624573,
                    0.7660999894142151,
                    0.7670000195503235,
                    0.7663000226020813,
                    0.765999972820282,
                    0.7652000188827515,
                    0.7656999826431274,
                    0.7651000022888184,
                    0.7651000022888184,
                    0.7644000053405762,
                    0.7644000053405762,
                    null,
                    0.7638999819755554
                ],
                "open": [
                    0.7677000164985657,
                    0.7671999931335449,
                    0.7705000042915344,
                    0.7695000171661377,
                    0.7692999839782715,
                    0.7684999704360962,
                    0.7710999846458435,
                    0.7696999907493591,
                    0.7689999938011169,
                    0.7694000005722046,
                    0.7689999938011169,
                    0.7682999968528748,
                    0.7667999863624573,
                    0.7653999924659729,
                    0.7631000280380249,
                    0.7649999856948853,
                    0.7657999992370605,
                    0.7657999992370605,
                    0.7642999887466431,
                    0.76419997215271,
                    0.7617999911308289,
                    0.7609999775886536,
                    0.7605999708175659,
                    0.7603999972343445,
                    0.760699987411499,
                    0.7580999732017517,
                    0.7598999738693237,
                    0.7594000101089478,
                    0.7602999806404114,
                    0.760200023651123,
                    0.7599999904632568,
                    0.7591000199317932,
                    0.7591999769210815,
                    0.7597000002861023,
                    0.7594000101089478,
                    0.7602999806404114,
                    0.7605000138282776,
                    0.7612000107765198,
                    0.7599999904632568,
                    0.7576000094413757,
                    0.7567999958992004,
                    0.7590000033378601,
                    0.7591999769210815,
                    0.7591999769210815,
                    0.7597000002861023,
                    0.760200023651123,
                    0.7603999972343445,
                    0.7602999806404114,
                    0.7615000009536743,
                    0.7627999782562256,
                    0.7631000280380249,
                    0.7627000212669373,
                    0.7635999917984009,
                    0.7628999948501587,
                    0.7631999850273132,
                    0.7627000212669373,
                    0.7630000114440918,
                    0.7613000273704529,
                    0.7615000009536743,
                    0.7599999904632568,
                    0.7626000046730042,
                    0.7617999911308289,
                    0.7620000243186951,
                    0.7633000016212463,
                    0.7634000182151794,
                    0.7630000114440918,
                    0.7630000114440918,
                    0.7631000280380249,
                    0.7634000182151794,
                    0.7634000182151794,
                    0.7634999752044678,
                    0.7635999917984009,
                    0.7642999887466431,
                    0.7634999752044678,
                    0.7641000151634216,
                    0.7651000022888184,
                    0.765500009059906,
                    0.7663999795913696,
                    0.7657999992370605,
                    0.7651000022888184,
                    0.7663999795913696,
                    0.7669000029563904,
                    0.7663999795913696,
                    0.7670999765396118,
                    0.765999972820282,
                    0.7651000022888184,
                    0.7645000219345093,
                    0.7659000158309937,
                    0.7657999992370605,
                    0.7666000127792358,
                    0.7670000195503235,
                    0.7670999765396118,
                    0.767300009727478,
                    0.7664999961853027,
                    0.7660999894142151,
                    0.7671999931335449,
                    0.7663000226020813,
                    0.7659000158309937,
                    0.765500009059906,
                    0.765500009059906,
                    0.7645000219345093,
                    0.7648000121116638,
                    0.7642999887466431,
                    null,
                    0.7638999819755554
                ],
                "low": [
                    0.7677000164985657,
                    0.7670999765396118,
                    0.7680000066757202,
                    0.7684999704360962,
                    0.7677000164985657,
                    0.7681999802589417,
                    0.76910001039505,
                    0.7684999704360962,
                    0.7682999968528748,
                    0.7685999870300293,
                    0.7674999833106995,
                    0.7667999863624573,
                    0.7653999924659729,
                    0.7631000280380249,
                    0.7626000046730042,
                    0.7648000121116638,
                    0.7656000256538391,
                    0.7644000053405762,
                    0.7639999985694885,
                    0.7613000273704529,
                    0.7587000131607056,
                    0.7598999738693237,
                    0.7595999836921692,
                    0.7601000070571899,
                    0.7576000094413757,
                    0.7574999928474426,
                    0.7592999935150146,
                    0.7585999965667725,
                    0.7591999769210815,
                    0.7594000101089478,
                    0.7591000199317932,
                    0.7587000131607056,
                    0.7591999769210815,
                    0.758899986743927,
                    0.758899986743927,
                    0.7602999806404114,
                    0.7605000138282776,
                    0.7597000002861023,
                    0.7559999823570251,
                    0.7559000253677368,
                    0.7567999958992004,
                    0.7587000131607056,
                    0.758899986743927,
                    0.758400022983551,
                    0.7597000002861023,
                    0.7598000168800354,
                    0.7595000267028809,
                    0.760200023651123,
                    0.7615000009536743,
                    0.762499988079071,
                    0.7621999979019165,
                    0.7623000144958496,
                    0.762499988079071,
                    0.7623999714851379,
                    0.762499988079071,
                    0.7623999714851379,
                    0.7609000205993652,
                    0.7599999904632568,
                    0.7595000267028809,
                    0.7599999904632568,
                    0.7613000273704529,
                    0.7612000107765198,
                    0.7616999745368958,
                    0.7627999782562256,
                    0.7627000212669373,
                    0.762499988079071,
                    0.7627999782562256,
                    0.7628999948501587,
                    0.7631000280380249,
                    0.7634000182151794,
                    0.7634000182151794,
                    0.7633000016212463,
                    0.7634999752044678,
                    0.7634999752044678,
                    0.7641000151634216,
                    0.7651000022888184,
                    0.7649000287055969,
                    0.7657999992370605,
                    0.7639999985694885,
                    0.7651000022888184,
                    0.7663000226020813,
                    0.765999972820282,
                    0.7660999894142151,
                    0.7657999992370605,
                    0.7648000121116638,
                    0.763700008392334,
                    0.7641000151634216,
                    0.7652000188827515,
                    0.7657999992370605,
                    0.7663999795913696,
                    0.7669000029563904,
                    0.7667999863624573,
                    0.7664999961853027,
                    0.7657999992370605,
                    0.7660999894142151,
                    0.7660999894142151,
                    0.7653999924659729,
                    0.7649999856948853,
                    0.7652999758720398,
                    0.7651000022888184,
                    0.7638000249862671,
                    0.7639999985694885,
                    0.7635999917984009,
                    null,
                    0.7638999819755554
                ],
                "volume": [
                    0,
                    18870000,
                    17034000,
                    2430000,
                    4683000,
                    29530000,
                    6887000,
                    1652000,
                    3097000,
                    2230000,
                    5392000,
                    2875000,
                    2461000,
                    12218000,
                    6400000,
                    4205000,
                    3521000,
                    518000,
                    1228000,
                    11480000,
                    24370000,
                    2397000,
                    3121000,
                    1442000,
                    3257000,
                    2259000,
                    1303000,
                    2229000,
                    5276000,
                    3823000,
                    2678000,
                    5204000,
                    6579000,
                    7129000,
                    5211000,
                    504000,
                    1086000,
                    6069000,
                    15220000,
                    4704000,
                    15358000,
                    1268000,
                    574000,
                    1714000,
                    535000,
                    2432000,
                    2185000,
                    11540000,
                    1820000,
                    1434000,
                    1973000,
                    2341000,
                    674000,
                    2547000,
                    786000,
                    1966000,
                    11585000,
                    2698000,
                    5093000,
                    2623000,
                    1716000,
                    1666000,
                    3706000,
                    812000,
                    1388000,
                    464000,
                    2209000,
                    1378000,
                    1496000,
                    606000,
                    1777000,
                    3207000,
                    1135000,
                    920000,
                    4805000,
                    3069000,
                    9116000,
                    3192000,
                    6142000,
                    3952000,
                    2194000,
                    3894000,
                    3930000,
                    2958000,
                    2411000,
                    8503000,
                    3444000,
                    2489000,
                    3892000,
                    2380000,
                    1197000,
                    1780000,
                    931000,
                    3840000,
                    5038000,
                    1324000,
                    6039000,
                    5805000,
                    793000,
                    3183000,
                    6933000,
                    2514000,
                    6611000,
                    null,
                    0
                ],
                "high": [
                    0.7677000164985657,
                    0.7731999754905701,
                    0.7716000080108643,
                    0.7698000073432922,
                    0.7692999839782715,
                    0.7720000147819519,
                    0.7710999846458435,
                    0.7698000073432922,
                    0.7695000171661377,
                    0.7699999809265137,
                    0.7689999938011169,
                    0.7682999968528748,
                    0.7674000263214111,
                    0.7657999992370605,
                    0.7648000121116638,
                    0.765999972820282,
                    0.766700029373169,
                    0.765999972820282,
                    0.7648000121116638,
                    0.7648000121116638,
                    0.7620999813079834,
                    0.7612000107765198,
                    0.7608000040054321,
                    0.7613999843597412,
                    0.7609000205993652,
                    0.7595000267028809,
                    0.7599999904632568,
                    0.7605000138282776,
                    0.7616000175476074,
                    0.7603999972343445,
                    0.760699987411499,
                    0.7599999904632568,
                    0.7602999806404114,
                    0.7605999708175659,
                    0.7603999972343445,
                    0.7605999708175659,
                    0.7615000009536743,
                    0.7615000009536743,
                    0.7599999904632568,
                    0.7577999830245972,
                    0.7595000267028809,
                    0.7599999904632568,
                    0.7598000168800354,
                    0.7601000070571899,
                    0.7601000070571899,
                    0.7609999775886536,
                    0.7605999708175659,
                    0.761900007724762,
                    0.7627999782562256,
                    0.7635999917984009,
                    0.7639999985694885,
                    0.7635999917984009,
                    0.7635999917984009,
                    0.7631999850273132,
                    0.7634000182151794,
                    0.7630000114440918,
                    0.7631000280380249,
                    0.7616000175476074,
                    0.7615000009536743,
                    0.7627000212669373,
                    0.7626000046730042,
                    0.7620999813079834,
                    0.763700008392334,
                    0.7634999752044678,
                    0.7634999752044678,
                    0.7630000114440918,
                    0.7634000182151794,
                    0.7633000016212463,
                    0.7635999917984009,
                    0.763700008392334,
                    0.763700008392334,
                    0.7642999887466431,
                    0.7642999887466431,
                    0.7645000219345093,
                    0.7659000158309937,
                    0.7657999992370605,
                    0.767300009727478,
                    0.7666000127792358,
                    0.7657999992370605,
                    0.7664999961853027,
                    0.7669000029563904,
                    0.7680000066757202,
                    0.7674000263214111,
                    0.7670999765396118,
                    0.7671999931335449,
                    0.765500009059906,
                    0.7657999992370605,
                    0.766700029373169,
                    0.7669000029563904,
                    0.767300009727478,
                    0.767300009727478,
                    0.767300009727478,
                    0.767300009727478,
                    0.7667999863624573,
                    0.767300009727478,
                    0.7671999931335449,
                    0.7666000127792358,
                    0.765999972820282,
                    0.7656999826431274,
                    0.765999972820282,
                    0.7652000188827515,
                    0.7649999856948853,
                    0.7644000053405762,
                    null,
                    0.7638999819755554
                ]
            }
        ]
    }
}
type TradingPeriod = {
    "timezone": string,
    "start": Number,
    "end": Number,
    "gmtoffset": Number
}
type CurrentTradingPeriod = {
    "pre": TradingPeriod,
    "regular": TradingPeriod,
    "post": TradingPeriod
}
type Meta = {
    "currency": string,
    "symbol": string,
    "exchangeName": string,
    "instrumentType": string,
    "firstTradeDate": Number,
    "regularMarketTime": Number,
    "gmtoffset": Number,
    "timezone": string,
    "exchangeTimezoneName": string,
    "regularMarketPrice": Number,
    "chartPreviousClose": Number,
    "previousClose": Number,
    "scale": Number,
    "priceHint": Number,
    "currentTradingPeriod": CurrentTradingPeriod,
    "tradingPeriods": Array<Array<TradingPeriod>>,
    "dataGranularity": string,
    "range": string,
    "validRanges": Array<string>
}
type Quote = {
    "close": Array<Number | null>,
    "open": Array<Number | null>,
    "low": Array<Number | null>,
    "volume": Array<Number | null>,
    "high": Array<Number | null>
}
type CurentData = {
    [key: string]: any,
    "close": Number | null,
    "open": Number | null,
    "low": Number | null,
    "volume": Number | null,
    "high": Number | null,
    "date": Date
}
type MovingAvarage = {
    [key: string]: any,
    "average": Number,
    "date": Date
}
type Indicators = {
    "quote": Array<Quote>
}
type YahooFinancesApiResponse = {
    "meta": Meta
    "timestamp": Array<Number>,
    "indicators": Indicators
}
type MyProps = {  };
type MyState = { 
    region: string,
    symbol: string,
    interval: string,
    range: string,
    classes: any,
    data: YahooFinancesApiResponse,
    size: Array<Number>,
    alert: Boolean
 };

class TodoComponent extends Component<MyProps, MyState> {
    private myRef = createRef<HTMLDivElement>()

    constructor(props: MyProps) {
        super(props);
        this.state = {
            region: 'US',
            symbol: 'HYDR.ME',
            interval: '5m',
            range: '1d',
            classes: '',
            data: mock_api_response,
            size: [400, 400],
            alert: false
        }

        this._setSymbol = this._setSymbol.bind(this);
        this._setRegion = this._setRegion.bind(this);
        this._setInterval = this._setInterval.bind(this);
        this._setRange = this._setRange.bind(this);
        this.getNewStockChartData = this.getNewStockChartData.bind(this);
    }

    componentDidMount() {
        this.setState({
            classes: makeStyles((theme) => ({
                root: {
                    flexGrow: 1,
                },
                paper: {
                    padding: theme.spacing(2),
                    textAlign: 'center',
                    color: theme.palette.text.secondary,
                },
            }))
        });

        this.getNewStockChartData();
        if(!this.state.alert) {
            this.createBarChart();
        }
    };

    componentDidUpdate() {
        const node : HTMLDivElement | null = this.myRef.current;
        d3
            .select(node)
            .html("");

        if(!this.state.alert) {
            this.createBarChart();
        }
    }

    getNewStockChartData() {
        type YahooFinanceApiRequestParams = {
            [key: string]: string,
            "region": string,
            "lang": string,
            "symbol": string,
            "interval": string,
            "range": string
        }

        var paramz : YahooFinanceApiRequestParams = {
            region: this.state.region,
            lang: 'en',
            symbol: this.state.symbol,
            interval: this.state.interval,
            range: this.state.range
        }

        var url = new URL("https://apidojo-yahoo-finance-v1.p.rapidapi.com/market/get-charts"),
        params = paramz
        Object.keys(params).forEach(key => url.searchParams.append(key, params[key]))

        fetch(url.toString(), {
            "method": "GET",
            "headers": {
                "x-rapidapi-host": "apidojo-yahoo-finance-v1.p.rapidapi.com",
                "x-rapidapi-key": "API_KEY_TO_BE_COMPLETED"
            }
        })
            .then(response => {
                response.json()
                    .then(data => {
                        if (data.chart.result !== null) {
                            this.setState({ data: data['chart']['result'][0] });
                            this.setState({ alert: false});
                            
                        } else {
                            this.setState({ alert: true});
                        }
                    });
            })
            .catch(err => {
                console.log(err);
            });
    }

    responsivefy = (svg : d3.Selection<SVGSVGElement, unknown, null, undefined>) => {
        const parentOfSvg = svg.node()!.parentNode as d3.BaseType
        const container = d3.select(parentOfSvg),
        width = parseInt(svg.style('width')),
        height = parseInt(svg.style('height')),
        aspect = width / height;

        const resize = () => {
            var targetWidth = parseInt(container.style('width'));
            svg.attr('width', targetWidth);
            svg.attr('height', Math.round(targetWidth / aspect));
        };

        svg
            .attr('viewBox', '0 0 ' + width + ' ' + height)
            .attr('perserveAspectRatio', 'xMinYMid')
            .call(resize);

        d3.select(window).on('resize.' + container.attr('id'), resize);
    };

    movingAverage = (data : Array<CurentData>, numberOfPricePoints : Number) => {
        return data.map((row : CurentData, index : Number, total : Array<CurentData>) => {
            const start = Math.max(0, index.valueOf() - numberOfPricePoints.valueOf());
            const end = index.valueOf();
            const subset = total.slice(start, end + 1);
            const sum = subset.reduce((a:Number, b:CurentData) => {
                return a.valueOf() + b['close']!.valueOf();
            }, 0);
            return {
                date: row['date'],
                average: sum / subset.length
            };
        });
    };

    createBarChart() {
        const node : HTMLDivElement | null = this.myRef.current;
        const quoteData = this.state.data['indicators']['quote'][0];
        let data = this.state.data['timestamp'].map((time : Number, index : Number) => ({
            date: new Date(time.valueOf() * 1000),
            high: quoteData['high'][index.valueOf()],
            low: quoteData['low'][index.valueOf()],
            open: quoteData['open'][index.valueOf()],
            close: quoteData['close'][index.valueOf()],
            volume: quoteData['volume'][index.valueOf()]
        }))

        data = data.filter(
            row => row['high'] && row['low'] && row['close'] && row['open']
        );

        const margin = { top: 150, right: 150, bottom: 150, left: 150 };
        const width = window.innerWidth - margin.left - margin.right;
        const height = window.innerHeight - margin.top - margin.bottom;

        const svg = d3
            .select(node)
            .append('svg')
            .attr('width', width + margin['left'] + margin['right'])
            .attr('height', height + margin['top'] + margin['bottom'])
            .call(this.responsivefy)
            .append('g')
            .attr('transform', `translate(${margin['left']},  ${margin['top']})`);

        const xMin : Date | undefined = d3.min(data, d => {
            return d['date'];
        });
        const xMax : Date | undefined = d3.max(data, d => {
            return d['date'];
        });
        const yMin : Number | undefined = d3.min(data, d => {
            return d['close'];
        });
        const yMax : Number | undefined = d3.max(data, d => {
            return d['close'];
        });

        const xScale = d3
            .scaleTime()
            .domain([xMin!, xMax!])
            .range([0, width]);
        const yScale = d3
            .scaleLinear()
            .domain([yMin!.valueOf() - 0.02, yMax!.valueOf()])
            .range([height, 0]);

        svg
            .append('g')
            .attr('id', 'xAxis')
            .attr('transform', `translate(0, ${height})`)
            .call(d3.axisBottom(xScale));
        svg
            .append('g')
            .attr('id', 'yAxis')
            .attr('transform', `translate(${width}, 0)`)
            .call(d3.axisRight(yScale));

        const line = d3
            .line<CurentData>()
            .x( (d : CurentData) => {
                return xScale(d['date']);
            })
            .y( (d : CurentData) => {
                return yScale(d['close']!);
            });

        const movingAverageLine = d3
            .line<MovingAvarage>()
            .x( (d : MovingAvarage) => {
                return xScale(d['date']);
            })
            .y( (d : MovingAvarage) => {
                return yScale(d['average']);
            })
            .curve(d3.curveBasis);

        svg
            .append('path')
            .data([data])
            .style('fill', 'none')
            .attr('id', 'priceChart')
            .attr('stroke', '#ff9900')
            .attr('stroke-width', '1.5')
            .attr('d', line);

        const movingAverageData = this.movingAverage(data, 49);
        svg
            .append('path')
            .data([movingAverageData])
            .style('fill', 'none')
            .attr('id', 'movingAverageLine')
            .attr('stroke', '#146eb4')
            .attr('d', movingAverageLine);


        const volData = data.filter(d => d['volume'] !== null && d['volume'] !== 0);

        const yMinVolume = d3.min(volData, d => {
            return Math.min(d['volume']!.valueOf());
        });

        const yMaxVolume = d3.max(volData, d => {
            return Math.max(d['volume']!.valueOf());
        });

        const yVolumeScale = d3
            .scaleLinear()
            .domain([yMinVolume!, yMaxVolume!])
            .range([height, 0]);

        svg
            .selectAll()
            .data(volData)
            .enter()
            .append('rect')
            .attr('x', d => {
                return xScale(d['date']);
            })
            .attr('y', d => {
                return yVolumeScale(d['volume']!.valueOf());
            })
            .attr('fill', (d, i) => {
                if (i === 0) {
                    return '#03a678';
                } else {
                    return volData[i - 1].close! > d.close! ? '#c0392b' : '#03a678';
                }
            })
            .attr('width', 5)
            .attr('height', d => {
                return height - yVolumeScale(d['volume']!.valueOf());
            });

        const focus = svg
            .append('g')
            .attr('class', 'focus')
            .style('display', 'none');

        focus.append('circle').attr('r', 4.5);
        focus.append('line').classed('x', true);
        focus.append('line').classed('y', true);

        const generateCrosshair = function(this: SVGRectElement) {
            const correspondingDate = xScale.invert(d3.mouse(this)[0]);
            const i = bisectDate(data, correspondingDate, 1);
            const d0 = data[i - 1];
            const d1 = data[i];

            let currentPoint;
            if(d1 === undefined) {
                currentPoint = d0;
            } else {
                currentPoint =
                correspondingDate.getTime() - d0['date'].getTime() > d1['date'].getTime() - correspondingDate.getTime() ? d1 : d0;
            }

            focus.attr(
                'transform',
                `translate(${xScale(currentPoint['date'])}, ${yScale(
                    currentPoint['close']!.valueOf()
                )})`
            );

            focus
                .select('line.x')
                .attr('x1', 0)
                .attr('x2', width - xScale(currentPoint['date']))
                .attr('y1', 0)
                .attr('y2', 0);

            focus
                .select('line.y')
                .attr('x1', 0)
                .attr('x2', 0)
                .attr('y1', 0)
                .attr('y2', height - yScale(currentPoint['close']!.valueOf()));

            updateLegends(currentPoint);
        }

        svg
            .append('rect')
            .attr('class', 'overlay')
            .attr('width', width)
            .attr('height', height)
            .on('mouseover', () => focus.style('display', null))
            .on('mouseout', () => focus.style('display', 'none'))
            .on('mousemove', generateCrosshair);

        d3.select('.overlay').style('fill', 'none');
        d3.select('.overlay').style('pointer-events', 'all');

        d3.selectAll('.focus line').style('fill', 'none');
        d3.selectAll('.focus line').style('stroke', '#f2f2f2');
        d3.selectAll('.focus line').style('stroke-width', '1.5px');
        d3.selectAll('.focus line').style('stroke-dasharray', '3 3');

        const bisectDate = d3.bisector( (d : CurentData) => d.date).left;

        const updateLegends = (currentData : CurentData) => {
            d3.selectAll('.lineLegend').remove();

            const legendKeys = Object.keys(data[0]);
            const lineLegend = svg
                .selectAll('.lineLegend')
                .data(legendKeys)
                .enter()
                .append('g')
                .attr('class', 'lineLegend')
                .attr('transform', (d, i) => {
                    return `translate(0, ${i * 20})`;
                });
            lineLegend
                .append('text')
                .text(d => {
                    if (d === 'date') {
                        return `${d}: ${currentData[d].toLocaleString()}`;
                    } else if (
                        d === 'high' ||
                        d === 'low' ||
                        d === 'open' ||
                        d === 'close'
                    ) {
                        return `${d}: ${currentData[d]!.toFixed(4)}`;
                    } else {
                        return `${d}: ${currentData[d]}`;
                    }
                })
                .style('fill', 'white')
                .attr('transform', 'translate(15,-120)');
        };
    }

    _setSymbol =  (e: React.KeyboardEvent<HTMLInputElement>) => {
        const target = e.target as HTMLInputElement
        if (e.key === 'Enter') {
            this.getNewStockChartData();
        } else {
            this.setState({ symbol: target.value });
        }
    }

    _setRegion =  (e: React.KeyboardEvent<HTMLInputElement>) => {
        const target = e.target as HTMLInputElement
        if (e.key === 'Enter') {
            this.getNewStockChartData();
        } else {
            this.setState({ region: target.value });
        }
    }

    _setInterval =  (e: React.KeyboardEvent<HTMLInputElement>) => {
        const target = e.target as HTMLInputElement
        if (e.key === 'Enter') {
            this.getNewStockChartData();
        } else {
            this.setState({ interval: target.value });
        }
    }

    _setRange =  (e: React.KeyboardEvent<HTMLInputElement>) => {
        const target = e.target as HTMLInputElement
        if (e.key === 'Enter') {
            this.getNewStockChartData();
        } else {
            this.setState({ range: target.value });
        }
    }


    render() {
        return (
            <div>
                <Alert severity="error" style={{display: this.state.alert ? 'block' : 'none' }}>
                    <AlertTitle>Error! Please double check the inputs</AlertTitle>
                </Alert>
                <div className={this.state.classes.root}>
                    <Grid container spacing={3}>
                        <Grid item xs>
                            <Paper className={this.state.classes.paper}>
                                <label>
                                    Stock Symbol:
                                    <input type="text" defaultValue={this.state.symbol} onKeyUp={this._setSymbol} />
                                </label>
                            </Paper>
                        </Grid>
                        <Grid item xs>
                            <Paper className={this.state.classes.paper}>
                                <label>
                                    Region:
                                    <input type="text" defaultValue={this.state.region} onKeyUp={this._setRegion} />
                                </label>
                            </Paper>
                        </Grid>
                        <Grid item xs>
                            <Paper className={this.state.classes.paper}>
                                <label>
                                    Interval between quotes:
                                    <input type="text" defaultValue={this.state.interval} onKeyUp={this._setInterval} />
                                </label>
                            </Paper>
                        </Grid>
                        <Grid item xs>
                            <Paper className={this.state.classes.paper}>
                                <label>
                                    Stock range:
                                    <input type="text" defaultValue={this.state.range} onKeyUp={this._setRange} />
                                </label>
                            </Paper>
                        </Grid>
                    </Grid>
                    <Grid container spacing={3}>
                        <Grid item xs>
                            <Paper className={this.state.classes.paper}>
                                <sup>
                                    The main symbol to get data for drawing chart
                                </sup>
                            </Paper>
                        </Grid>
                        <Grid item xs>
                            <Paper className={this.state.classes.paper}>
                                <sup>
                                    REQUIRED The main region to get quotes from (AU | CA | FR | DE | HK | US | IT | ES | GB | IN)
                                </sup>
                            </Paper>
                        </Grid>
                        <Grid item xs>
                            <Paper className={this.state.classes.paper}>
                                <sup>
                                    REQUIRED Allowed values are (5m | 15m | 1d | 1wk | 1mo)
                                </sup>
                            </Paper>
                        </Grid>
                        <Grid item xs>
                            <Paper className={this.state.classes.paper}>
                                <sup>
                                    REQUIRED Allowed values are (1d | 5d | 3mo | 6mo | 1y | 5y | max)
                                </sup>
                            </Paper>
                        </Grid>
                    </Grid>
                </div>

                <div id="chart" ref={this.myRef}
                    data-width={500} data-height={500}>
                </div>
            </div>
        );
    }
}

export default TodoComponent;


