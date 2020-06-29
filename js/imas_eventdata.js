
var annivEventIDs = new Array(44,92,142);

var MLIdolNames = {
 // 올스타즈
 1 : "아마미 하루카",
 2 : "키사라기 치하야",
 3 : "호시이 미키",
 4 : "하기와라 유키호",
 5 : "타카츠키 야요이",
 6 : "키쿠치 마코토",
 7 : "미나세 이오리",
 8 : "시죠 타카네",
 9 : "아키즈키 리츠코",
 10 : "미우라 아즈사",
 11 : "후타미 아미",
 12 : "후타미 마미",
 13 : "가나하 히비키",
 // 밀리언 스타즈
 14 : "카스가 미라이",
 15 : "모가미 시즈카",
 16 : "이부키 츠바사",
 17 : "타나카 코토하",
 18 : "시마바라 엘레나",
 19 : "사타케 미나코",
 20 : "토코로 메구미",
 21 : "토쿠가와 마츠리",
 22 : "하코자키 세리카",
 23 : "노노하라 아카네",
 24 : "모치즈키 안나",
 25 : "한다 로코",
 26 : "나나오 유리코",
 27 : "타카야마 사요코",
 28 : "마츠다 아리사",
 29 : "코사카 우미",
 30 : "나카타니 이쿠",
 31 : "텐쿠바시 토모카",
 32 : "에밀리 스튜어트",
 33 : "키타자와 시호",
 34 : "마이하마 아유무",
 35 : "키노시타 히나타",
 36 : "야부키 카나",
 37 : "요코야마 나오",
 38 : "니카이도 치즈루",
 39 : "바바 코노미",
 40 : "오가미 타마키",
 41 : "토요카와 후카",
 42 : "미야오 미야",
 43 : "후쿠다 노리코",
 44 : "마카베 미즈키",
 45 : "시노미야 카렌",
 46 : "모모세 리오",
 47 : "나가요시 스바루",
 48 : "키타카미 레이카",
 49 : "스오 모모코",
 50 : "줄리아",
 51 : "시라이시 츠무기",
 52 : "사쿠라모리 카오리"
};

// 밀리시타 n주년 이벤트 아이돌별 랭킹
var showTDAnniversaryEventData = {
 makeReq : function(){return new XMLHttpRequest();},

 pageInit : function(){
  for(i=1;i<=52;i++){
   var idolEntry = document.createElement("option");
   idolEntry.value = i;
   idolEntry.text = MLIdolNames[i];
   document.getElementById("idol_select").add(idolEntry);
  }
  var entryTimestamp = new Date();
  var entryDate = (entryTimestamp.getFullYear())+"년 "+(entryTimestamp.getMonth()+1)+"월 "+(entryTimestamp.getDate())+"일";
  var entryTime = (entryTimestamp.getHours())+"시 "+(entryTimestamp.getMinutes())+"분";
  document.getElementById("rank_timestamp").innerHTML = entryDate+" "+entryTime;
 },

 goIdolInfo : function(){
  var selectedIdol = new Number(document.getElementById("idol_select").value);
  if(selectedIdol == 0){alert("아이돌을 선택해주세요!!");return;}
  window.open("http://imas.gamedbs.jp/mlth/chara/show/"+selectedIdol,"_blank");
 },

 retrieveData : function(){
  var numAnniv = new Number(document.getElementById("anniv_select").value);
  var idolId = new Number(document.getElementById("idol_select").value);
  if(numAnniv == 1){var eid = 44;} // 1주년
  else if(numAnniv == 2){var eid = 92;} // 2주년
  else if(numAnniv == 3){var eid = 142;} // 2주년
  else{return false;}

  var r = this.makeReq();

  r.onreadystatechange = function(){
   if(r.readyState == 4){
    if(r.status == 200){
     if(idolId >= 1 && idolId <= 52){
      var g = JSON.parse(r.responseText);
      if(typeof g[0] == "undefined"){
       alert("이벤트가 시작되지 않았거나 집계된 데이터가 없습니다.");
       document.getElementById("rank_timestamp").innerHTML = "데이터 없음";
       document.getElementById("idol_eventrank_1").innerHTML = "--";
       document.getElementById("idol_eventrank_2").innerHTML = "--";
       document.getElementById("idol_eventrank_3").innerHTML = "--";
       document.getElementById("idol_eventrank_10").innerHTML = "--";
       document.getElementById("idol_eventrank_100").innerHTML = "--";
       document.getElementById("idol_eventrank_1000").innerHTML = "--";
       return;
      }
      var numEntries1 = g[0].data.length;
      if(typeof g[1] != "undefined"){var numEntries2 = g[1].data.length;}
      if(typeof g[2] != "undefined"){var numEntries3 = g[2].data.length;}
      if(typeof g[3] != "undefined"){var numEntries10 = g[3].data.length;}
      if(typeof g[4] != "undefined"){var numEntries100 = g[4].data.length;}
      if(typeof g[5] != "undefined"){var numEntries1000 = g[5].data.length;}

      document.getElementById("show_idolname_ml").innerHTML = MLIdolNames[idolId];
      
      var entryTimestamp = new Date(g[0].data[numEntries1-1].summaryTime);
      var entryDate = (entryTimestamp.getFullYear())+"년 "+(entryTimestamp.getMonth()+1)+"월 "+(entryTimestamp.getDate())+"일";
      var entryTime = (entryTimestamp.getHours())+"시";

      document.getElementById("idolrank_desc").style.display = "block";
      document.getElementById("please_select").style.display = "none";
      document.getElementById("rank_timestamp").innerHTML = entryDate+" "+entryTime+" 현재";

      if(typeof g[0] != "undefined"){document.getElementById("idol_eventrank_1").innerHTML = g[0].data[numEntries1-1].score+"pts";} // 1위

      if(typeof g[1] != "undefined"){document.getElementById("idol_eventrank_2").innerHTML = g[1].data[numEntries2-1].score+"pts";} // 2위
      else{document.getElementById("idol_eventrank_2").innerHTML = "--";}

      if(typeof g[2] != "undefined"){document.getElementById("idol_eventrank_3").innerHTML = g[2].data[numEntries3-1].score+"pts";} // 3위
      else{document.getElementById("idol_eventrank_3").innerHTML = "--";}

      if(typeof g[3] != "undefined"){document.getElementById("idol_eventrank_10").innerHTML = g[3].data[numEntries10-1].score+"pts";} // 10위 컷
      else{document.getElementById("idol_eventrank_10").innerHTML = "--";}

      if(typeof g[4] != "undefined"){document.getElementById("idol_eventrank_100").innerHTML = g[4].data[numEntries100-1].score+"pts";} // 100위 컷
      else{document.getElementById("idol_eventrank_100").innerHTML = "--";}

      if(typeof g[5] != "undefined"){document.getElementById("idol_eventrank_1000").innerHTML = g[5].data[numEntries1000-1].score+"pts";} // 입상(1000위) 컷
      else{document.getElementById("idol_eventrank_1000").innerHTML = "--";}

     }else{
      document.getElementById("idolrank_desc").style.display = "none";
      document.getElementById("please_select").style.display = "block";

      document.getElementById("idol_eventrank_1").innerHTML = "--";
      document.getElementById("idol_eventrank_2").innerHTML = "--";
      document.getElementById("idol_eventrank_3").innerHTML = "--";
      document.getElementById("idol_eventrank_10").innerHTML = "--";
      document.getElementById("idol_eventrank_100").innerHTML = "--";
      document.getElementById("idol_eventrank_1000").innerHTML = "--";
      var entryTimestamp = new Date();
      var entryDate = (entryTimestamp.getFullYear())+"년 "+(entryTimestamp.getMonth()+1)+"월 "+(entryTimestamp.getDate())+"일";
      var entryTime = (entryTimestamp.getHours())+"시 "+(entryTimestamp.getMinutes())+"분";
      document.getElementById("rank_timestamp").innerHTML = entryDate+" "+entryTime;
      return false;
     }
    }else{
     alert("오류가 발생하였습니다. ["+r.status+"] 잠시 후 다시 시도해주세요.");
     console.log("오류가 발생하였습니다. ["+r.status+"] 잠시 후 다시 시도해주세요.");
    }
   }
  };

  r.open("GET","https://api.matsurihi.me/mltd/v1/events/"+eid+"/rankings/logs/idolPoint/"+idolId+"/1,2,3,10,100,1000?prettyPrint=false");
  r.send();
 },

 retrieveTotal : function(){
  var numAnniv = new Number(document.getElementById("anniv_select").value);
  if(numAnniv == 1){var eid = 44;} // 1주년
  else if(numAnniv == 2){var eid = 92;} // 2주년
  else if(numAnniv == 3){var eid = 142;} // 2주년
  else{return false;}

  var r = this.makeReq();

  r.onreadystatechange = function(){
   if(r.readyState == 4){
    if(r.status == 200){
     var g = JSON.parse(r.responseText);
     if(typeof g[0] == "undefined"){
      alert("이벤트가 시작되지 않았거나 집계된 데이터가 없습니다.");
      document.getElementById("rank_timestamp_overall").innerHTML = "데이터 없음";
      document.getElementById("idol_totalrank_1").innerHTML = "--";
      document.getElementById("idol_totalrank_100").innerHTML = "--";
      document.getElementById("idol_totalrank_2500").innerHTML = "--";
      document.getElementById("idol_totalrank_5000").innerHTML = "--";
      document.getElementById("idol_totalrank_10000").innerHTML = "--";
      document.getElementById("idol_totalrank_25000").innerHTML = "--";
      document.getElementById("idol_totalrank_50000").innerHTML = "--";
      return;
     }
     var numEntries1 = g[0].data.length;
     if(typeof g[1] != "undefined"){var numEntries100 = g[1].data.length;}
     if(typeof g[2] != "undefined"){var numEntries2500 = g[2].data.length;}
     if(typeof g[3] != "undefined"){var numEntries5000 = g[3].data.length;}
     if(typeof g[4] != "undefined"){var numEntries10000 = g[4].data.length;}
     if(typeof g[5] != "undefined"){var numEntries25000 = g[5].data.length;}
     if(typeof g[6] != "undefined"){var numEntries50000 = g[6].data.length;}
     
     var entryTimestamp = new Date(g[0].data[numEntries1-1].summaryTime);
     var entryDate = (entryTimestamp.getFullYear())+"년 "+(entryTimestamp.getMonth()+1)+"월 "+(entryTimestamp.getDate())+"일";
     var entryTime = (entryTimestamp.getHours())+"시 "+(entryTimestamp.getMinutes())+"분";
      
     document.getElementById("rank_timestamp_overall").innerHTML = entryDate+" "+entryTime+" 현재";

     if(typeof g[0] != "undefined"){document.getElementById("idol_totalrank_1").innerHTML = g[0].data[numEntries1-1].score+"pts";} // 1위

     if(typeof g[1] != "undefined"){document.getElementById("idol_totalrank_100").innerHTML = g[1].data[numEntries100-1].score+"pts";} // 100위 컷
     else{document.getElementById("idol_totalrank_100").innerHTML = "--";}

     if(typeof g[2] != "undefined"){document.getElementById("idol_totalrank_2500").innerHTML = g[2].data[numEntries2500-1].score+"pts";} // 2500위 컷
     else{document.getElementById("idol_totalrank_2500").innerHTML = "--";}

     if(typeof g[3] != "undefined"){document.getElementById("idol_totalrank_5000").innerHTML = g[3].data[numEntries5000-1].score+"pts";} // 5000위 컷
     else{document.getElementById("idol_totalrank_5000").innerHTML = "--";}

     if(typeof g[4] != "undefined"){document.getElementById("idol_totalrank_10000").innerHTML = g[4].data[numEntries10000-1].score+"pts";} // 10000위 컷
     else{document.getElementById("idol_totalrank_10000").innerHTML = "--";}

     if(typeof g[5] != "undefined"){document.getElementById("idol_totalrank_25000").innerHTML = g[5].data[numEntries25000-1].score+"pts";} // 25000위 컷
     else{document.getElementById("idol_totalrank_25000").innerHTML = "--";}

     if(typeof g[6] != "undefined"){document.getElementById("idol_totalrank_50000").innerHTML = g[6].data[numEntries50000-1].score+"pts";} // 50000위(입상) 컷
     else{document.getElementById("idol_totalrank_50000").innerHTML = "--";}

    }else{
     alert("오류가 발생하였습니다. ["+r.status+"] 잠시 후 다시 시도해주세요.");
     console.log("오류가 발생하였습니다. ["+r.status+"] 잠시 후 다시 시도해주세요.");
    }
   }
  };

  r.open("GET","https://api.matsurihi.me/mltd/v1/events/"+eid+"/rankings/logs/eventPoint/1,100,2500,5000,10000,25000,50000?prettyPrint=false");
  r.send();
 },

 retrieveAll : function(){
  this.retrieveData();
  this.retrieveTotal();
 }
};
