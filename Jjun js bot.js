const scriptName="Jjun bot.js";


//기본 작동 스크립트
function response(room, msg, sender, isGroupChat, replier, ImageDB, packageName, threadId){
    //주식분야봇

    //종목조회
    if(msg.split(" ")[0] == "/종목"){
        var stockcode = msg.split(" ")[1];
        var stockdata = Utils.getWebText("https://finance.naver.com/item/main.nhn?code="+stockcode);
        //var split1 = stockdata.replace(/(<([^>]+)>)/g, "")
        var info1 = stockdata.split("<dt>")[1]; // 종목 시세 정보 불러오기
        var standardtime = info1.spit("</dd>")[0]; // 기준시간불러오기
        var stockname = info1.split("종목명 ")[1].split("</dd>")[0]; // 종목명 불러오기
        var listedstock = info1.split(stockcode+" ")[1].split("</dd>")[0]; // 상장된 곳 불러오기
        var nowprice = info1.split("현재가 ")[1].split(" 전일대비 상승")[0]; // 현재가 불러오기
        var pricefromyesterday = info.split("전일대비 상승 ")[1].split(" ")[0]; // 전날 대비 상승가격 불러오기
        var plusorminus1 = info1.split("전일대비 상승 ")[1].split(" ")[1]; // 가격폭이 플러스인지 마이너스인지 불러오기
        var plusorminus = "-";
            if(plusorminus1 == "플러스"){
                plusorminus == "+";
                }
        var percent = info1.split(plusorminus+" ")[1].split(" 퍼센트")[0]; // 가격폭이 몇퍼센트인지 불러오기
        var yesterdayprice = info1.split("<dd>전일가")[1].split("</dd>")[0]; // 전날 가격 불러오기
        var startprice = info1.split("<dd>시가 ")[1].split("</dd>")[0]; // 시가 불러오기
        var highprice = info1.split("<dd>고가 ")[1].split("</dd>")[0]; // 고가 불러오기
        var highedprice = info1.split("<dd>상한가 ")[1].split("</dd>")[0]; // 상한가 불러오기
        var lowprice = info1.split("<dd>저가 ")[1].split("</dd>")[0]; // 저가 불러오기
        var lowedprice = info1.split("<dd>하한가 ")[1].split("</dd>")[0]; // 하한가 불러오기
        var volume = info1.split("<dd>거래량 ")[1].split("</dd>")[0]; // 거래량 불러오기
        var transactionamount = info1.split("<dd>거래대금 ")[1].split("</dd>")[0]; // 거래대금 불러오기

        replier.reply(stockname+"("+stocktode+")"+"에 대한 정보입니다.\n종목명 : "+stockname+"\n종목코드 : "+stockcode+"("+listedstock+")"+"\n기준시간 : "+standardtime+"\n현재가 : "+nowprice+"원("+plusorminus+pricefromyesterday+"%)\n전날 가격 : "+yesterdayprice+"원\n시가 : "+startprice+"원\n고가(상한가) : "+startprice+"원("+highedprice+"원)\n저가(하한가) : "+lowedprice+"원("+lowedprice+"원)\n거래량 : "+transactionamount+"\n거래대금 : "+transactionamount+"원\n\n출처 : 네이버 금융");


            }

}

//컴파일을 시작할 때 작동하는 스크립트
function onStartCompile(){}
function onCreate(savedInstanceState,activity) {}

//다시 작동될 때 작동하는 스크립트
function onResume(activity) {}

//일시정지 되었을 때 작동하는 스크립트
function onPause(activity) {}

//정지 되었을 때 작동하는 스크립트
function onStop(activity) {}