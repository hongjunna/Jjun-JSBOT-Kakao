const scriptName="Jjun bot.js";


//기본 작동 스크립트
function response(room, msg, sender, isGroupChat, replier, ImageDB, packageName, threadId){
    //주식분야봇
    if(msg.split(" ")[0] == "/종목"){
        var stockcode = msg.split(" ")[1];
        var stockdata = Utils.getWebText("https://finance.naver.com/item/main.nhn?code="+stockcode);
        var split1 = stockdata.replace(/(<([^>]+)>)/g, "")
        var standardtime1 = split1.split("종목 시세 정보")[1]
        var standardtime = standardtime1.split("종목명 ")[0]; // 기준시간불러오기
        var stockname = split1.split("종목명 ")[1]
        stockname = stockname.split("종목코드 ")[0]; // 종목명 불러오기
        var listedstock = split1.split(stockcode+" ")[1]
        listedstock = listedstock.split("현재가 ")[0]; // 상장된 곳 불러오기
        var nowprice = split1.split("현재가 ")[1]
        nowprice = nowprice.split(" 전일대비 상승 ")[0]; // 현재가 불러오기
        var pricefromyesterday = split1.split("전일대비 상승 ")[1]
        pricefromyesterday = pricefromyesterday.split(" 플러스")[0]; // 전날 대비 상승가격 불러오기
        var plusorminus1 = split1.split("전일대비 상승 ")[1]
        plusorminus1 = plusorminus1.split(" ")[1]; // 가격폭이 플러스인지 마이너스인지 불러오기
        var plusorminus = "-";
            if(plusorminus1 == "플러스"){
                plusorminus == "+";
                }
        var percent = split1.split(plusorminus+" ")[1]
        percent = split1.split(" 퍼센트")[0]; // 가격폭이 몇퍼센트인지 불러오기
        var yesterdayprice = split1.split("전일가 ")[1]
        yesterdayprice = yesterdayprice.split("시가 ")[0]; // 전날 가격 불러오기
        var startprice = split1.split("시가 ")[1]
        startprice = startprice.split("고가 ")[0]; // 시가 불러오기
        var highprice = split1.split("고가 ")[1]
        highprice = highprice.split("상한가 ")[0]; // 고가 불러오기
        var highedprice = split1.split("상한가 ")[1]
        highedprice = highedprice.split("저가 ")[0]; // 상한가 불러오기
        var lowprice = split1.split("저가 ")[1]
        lowprice = lowprice.split("하한가 ")[0]; // 저가 불러오기
        var lowedprice = split1.split("하한가 ")[1]
        lowedprice = lowedprice.split("거래량 ")[0]; // 하한가 불러오기
        var volume = split1.split("거래량 ")[1]
        volume = volume.split("거래대금 ")[0]; // 거래량 불러오기
        var transactionamount = split1.split("거래대금 ")[1]
        transactionamount = transactionamount.split(" ")[0]; // 거래대금 불러오기
        replier.reply(stockname+"("+stockcode+")"+"에 대한 정보입니다.\n종목명 : "+stockname+"\n종목코드 : "+stockcode+"("+listedstock+")"+"\n기준시간 : "+standardtime+"\n현재가 : "+nowprice+"원"+"\n전날 가격 : "+yesterdayprice+"원\n시가 : "+startprice+"원\n고가(상한가) : "+highprice+"원("+highedprice+"원)\n저가(하한가) : "+lowprice+"원("+lowedprice+"원)\n거래량 : "+volume+"\n거래대금 : "+transactionamount+"원\n\n출처 : 네이버 금융");
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