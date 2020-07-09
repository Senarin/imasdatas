// 밀리시타 이벤트 형식
var theaterEventType = {
 1 : "시어터 쇼타임(추가보상형)",
 2 : "밀리코레(구)",
 3 : "재화(PSTheater)",
 4 : "투어(PSTour)",
 5 : "n주년 이벤트",
 6 : "워킹",
 7 : "만우절 특별 이벤트",
 9 : "밀리코레",
 10 : "트윈"
};

// 데레스테 이벤트 형식
var starlightEventType = {
 1 : "재화수집",
 2 : "캐러밴",
 3 : "그루브(버스트)",
 4 : "라이브 파티",
 5 : "퍼레이드(투어)",
 6 : "로드",
 7 : "카니발"
};

var requestPage = {
 makeRequest : function(){return new XMLHttpRequest();}
};

var tickEvent = {
 remain : function(Y,m,d,H,i,s,eDisplay){
  var stampNow = new Number(new Date()) / 1000;
  var dateFinish = new Date(Y,m-1,d,H,i,s,0);
  var stampFinish = new Number(dateFinish) / 1000;

  var remainingTime0 = (stampFinish - stampNow);
  var remainingDays = Math.floor(remainingTime0 / 86400);
  var remainingHours = Math.floor((remainingTime0 % 86400) / 3600);
  var remainingMins = Math.floor((remainingTime0 % 3600) / 60);
  var remainingSecs = Math.ceil(remainingTime0 % 60);
  if(remainingHours == 24){
   remainingDays++;
   remainingHours = 0;
  }
  if(remainingMins == 60){
   remainingHours++;
   remainingMins = 0;
  }
  if(remainingSecs == 60){
   remainingMins++;
   remainingSecs = 0;
  }

  if(remainingTime0 < 60){var remainingTimeFormat = remainingSecs+"초";}
  else if(remainingTime0 < 3600){var remainingTimeFormat = remainingMins+"분 "+remainingSecs+"초";}
  else if(remainingTime0 < 86400){var remainingTimeFormat = remainingHours+"시간 "+remainingMins+"분 "+remainingSecs+"초";}
  else{var remainingTimeFormat = remainingDays+"일 "+remainingHours+"시간 "+remainingMins+"분 "+remainingSecs+"초";}

  if(remainingTime0 >= 0){document.getElementById(eDisplay).innerHTML = remainingTimeFormat;}
  else{document.getElementById(eDisplay).innerHTML = "개최 중인 이벤트가 없습니다.";}
 },

 boost : function(Y,m,d,H,i,s,eDisplay){
  var stampNow = new Number(new Date()) / 1000;
  var dateFinish = new Date(Y,m-1,d,H,i,s,0);
  var stampFinish = new Number(dateFinish) / 1000;

  var remainingTime0 = (stampFinish - stampNow);
  var remainingDays = Math.floor(remainingTime0 / 86400);
  var remainingHours = Math.floor((remainingTime0 % 86400) / 3600);
  var remainingMins = Math.floor((remainingTime0 % 3600) / 60);
  var remainingSecs = Math.ceil(remainingTime0 % 60);
  if(remainingHours == 24){
   remainingDays++;
   remainingHours = 0;
  }
  if(remainingMins == 60){
   remainingHours++;
   remainingMins = 0;
  }
  if(remainingSecs == 60){
   remainingMins++;
   remainingSecs = 0;
  }

  if(remainingTime0 < 3600){var remainingTimeFormat = remainingMins+"분 "+remainingSecs+"초";}
  else if(remainingTime0 < 86400){var remainingTimeFormat = remainingHours+"시간 "+remainingMins+"분 "+remainingSecs+"초";}
  else{var remainingTimeFormat = remainingDays+"일 "+remainingHours+"시간 "+remainingMins+"분 "+remainingSecs+"초";}

  if(remainingTime0 >= 0){document.getElementById(eDisplay).innerHTML = remainingTimeFormat;}
  else{document.getElementById(eDisplay).innerHTML = "후반전이 시작되었습니다.";}
 },


 announce : function(Y,m,d,H,i,s){
  var stampNow = new Number(new Date()) / 1000;
  var dateFinish = new Date(Y,m-1,d,H,i,s,0);
  var stampFinish = new Number(dateFinish) / 1000;

  var remainingTime0 = (stampFinish - stampNow);
  var remainingDays = Math.floor(remainingTime0 / 86400);
  var remainingHours = Math.floor((remainingTime0 % 86400) / 3600);
  var remainingMins = Math.floor((remainingTime0 % 3600) / 60);
  var remainingSecs = Math.ceil(remainingTime0 % 60);
  if(remainingHours == 24){
   remainingDays++;
   remainingHours = 0;
  }
  if(remainingMins == 60){
   remainingHours++;
   remainingMins = 0;
  }
  if(remainingSecs == 60){
   remainingMins++;
   remainingSecs = 0;
  }

  if(remainingTime0 < 3600){var remainingTimeFormat = remainingMins+"분 "+remainingSecs+"초";}
  else if(remainingTime0 < 86400){var remainingTimeFormat = remainingHours+"시간 "+remainingMins+"분 "+remainingSecs+"초";}
  else{var remainingTimeFormat = remainingDays+"일 "+remainingHours+"시간 "+remainingMins+"분 "+remainingSecs+"초";}

  if(remainingTime0 >= 0){document.getElementById("resannounce_time").innerHTML = remainingTimeFormat;}
  else{document.getElementById("resannounce_time").innerHTML = "결과발표 시간이 되었습니다. 게임에 접속하여 확인해주세요.";}
 }



};


var tickGacha = {
 remain : function(Y,m,d,H,i,s){
  var stampNow = new Number(new Date()) / 1000;
  var dateFinish = new Date(Y,m-1,d,H,i,s,0);
  var stampFinish = new Number(dateFinish) / 1000;

  var remainingTime0 = (stampFinish - stampNow);
  var remainingDays = Math.floor(remainingTime0 / 86400);
  var remainingHours = Math.floor((remainingTime0 % 86400) / 3600);
  var remainingMins = Math.floor((remainingTime0 % 3600) / 60);
  var remainingSecs = Math.ceil(remainingTime0 % 60);
  if(remainingHours == 24){
   remainingDays++;
   remainingHours = 0;
  }
  if(remainingMins == 60){
   remainingHours++;
   remainingMins = 0;
  }
  if(remainingSecs == 60){
   remainingMins++;
   remainingSecs = 0;
  }
  
  if(remainingTime0 < 60){var remainingTimeFormat = remainingSecs+"초";}
  else if(remainingTime0 < 3600){var remainingTimeFormat = remainingMins+"분 "+remainingSecs+"초";}
  else if(remainingTime0 < 86400){var remainingTimeFormat = remainingHours+"시간 "+remainingMins+"분 "+remainingSecs+"초";}
  else{var remainingTimeFormat = remainingDays+"일 "+remainingHours+"시간 "+remainingMins+"분 "+remainingSecs+"초";}

  if(remainingTime0 >= 0){document.getElementById("countdown_time").innerHTML = remainingTimeFormat;}
  else{document.getElementById("countdown_time").innerHTML = "가챠가 갱신되었습니다. 페이지를 새로고침(F5)해주세요.";}
 }
};

var showRemainingTime = {

showRemainingSL : function(){
  var r = requestPage.makeRequest();

  r.onreadystatechange = function(){
   if(r.readyState == 4){
    if(r.status == 200){
     var s = JSON.parse(r.responseText);
     var eInfo = s.events;
     if(eInfo.length == 0){
      document.getElementById("starlight_event_name").innerHTML = "개최 중인 이벤트가 없습니다.";
      document.getElementById("starlight_ename_orig").style.display = "none";
      document.getElementById("countdown_time").innerHTML = "개최 중인 이벤트가 없습니다.";
      document.getElementById("nearend_event").style.display = "none";
      console.log("["+(new Date()).toLocaleString()+"] 현재 개최 중인 이벤트가 없습니다.");
      return;
     }

     var startingTimestamp = new Number(new Date($(".starlight_events td[data-event-id][data-event-id!='-1']").last().data("eventStart")));
     var nowTimestamp = new Number(new Date());

     var numEvents = $(".starlight_events td[data-event-id][data-event-id!='-1']").length;

     if(startingTimestamp <= nowTimestamp){var $eTitle = document.createTextNode($(".starlight_events td[data-event-id][data-event-id!='-1']").last().html().replace(/<[^>]*>/g,"").replace("&amp;","&"));}
     else{var $eTitle = document.createTextNode($(".starlight_events td[data-event-id][data-event-id!='-1']").eq(numEvents-2).html().replace(/<[^>]*>/g,"").replace("&amp;","&"));}

     var eInfoLink = document.createElement("a");
     eInfoLink.href = "https://starlight.kirara.ca/history";
     eInfoLink.target = "_blank";

     eInfoLink.appendChild($eTitle);
     document.getElementById("starlight_event_name").innerHTML = "";
     document.getElementById("starlight_event_name").appendChild(eInfoLink);
     document.getElementById("starlight_ename_orig").innerHTML = "("+eInfo[0].name+")";
     document.getElementById("starlight_ename_orig").style.display = "inline-block";

     var eDateTime0 = new Number(new Date(eInfo[0].end_date));
     var eDateTime = new Date(eDateTime0+1000);
     var eYear = eDateTime.getFullYear();
     var eMonth = eDateTime.getMonth()+1;
     var eDay = eDateTime.getDate();
     var eHours = eDateTime.getHours();
     var eMins = eDateTime.getMinutes();
     var eSecs = eDateTime.getSeconds();
	 
     var eType = parseInt(Math.floor(new Number(eInfo[0].id) / 1000));
     console.log("["+(new Date()).toLocaleString()+"] 현재 개최 중인 이벤트 종류 : "+starlightEventType[eType]);

     setInterval(function(){tickEvent.remain(eYear,eMonth,eDay,eHours,eMins,eSecs,"countdown_time");},50);

     var dateTimeNow = new Number(new Date());
     var nearEndThreshold = 43200;
     var underdayRemain = 86400;

     if((eDateTime - dateTimeNow) <= (underdayRemain * 1000) && (eDateTime - dateTimeNow) > (nearEndThreshold * 1000)){document.getElementById("underday_event").style.display = "block";}
     else if((eDateTime - dateTimeNow) <= (nearEndThreshold * 1000)){document.getElementById("underday_event").style.display = "none";}

     if((eDateTime - dateTimeNow) <= (nearEndThreshold * 1000)){document.getElementById("nearend_event").style.display = "block";}
     else if((eDateTime - dateTimeNow) <= 0){document.getElementById("nearend_event").style.display = "none";}

    }else{
     alert("오류가 발생했습니다. ["+r.status+"]");
     document.getElementById("countdown_time").innerHTML = "서버가 점검 중이거나 오류가 발생했습니다. 잠시 후 다시 시도해주세요.";
     return false;
    }
   }
  };

  r.open("GET","https://starlight.kirara.ca/api/v1/happening/now?datetime=iso8601");
  r.send();
 },

showGachaRemainingSL : function(){
  var r = requestPage.makeRequest();

  r.onreadystatechange = function(){
   if(r.readyState == 4){
    if(r.status == 200){
     var g = JSON.parse(r.responseText);
     var gInfo = g.gachas;
     if(gInfo.length == 0){document.getElementById("countdown_time").innerHTML = "개최 중인 가챠가 없습니다.";return;}
     var gDateTime0 = new Number(new Date(gInfo[0].end_date));
     var gDateTime = new Date(gDateTime0+1000);
     var gYear = gDateTime.getFullYear();
     var gMonth = gDateTime.getMonth()+1;
     var gDay = gDateTime.getDate();
     var gHours = gDateTime.getHours();
     var gMins = gDateTime.getMinutes();
     var gSecs = gDateTime.getSeconds();

     setInterval(function(){tickGacha.remain(gYear,gMonth,gDay,gHours,gMins,gSecs);},50);
    }else{
     alert("오류가 발생했습니다. ["+r.status+"]");
     document.getElementById("countdown_time").innerHTML = "서버가 점검 중이거나 오류가 발생했습니다. 잠시 후 다시 시도해주세요.";
     return false;
    }
   }
  };

  r.open("GET","https://starlight.kirara.ca/api/v1/happening/now?datetime=iso8601");
  r.send();
 },

 showRemainingTD : function(){
  var r = requestPage.makeRequest();

  r.onreadystatechange = function(){
   if(r.readyState == 4){
    if(r.status == 200){
     var s = JSON.parse(r.responseText);
     if(s.length == 0){
      document.getElementById("countdown_time").innerHTML = "개최 중인 이벤트가 없습니다.";
      document.getElementById("theater_event_name_j").innerHTML = "(개최 중인 이벤트가 없습니다)";
      document.getElementById("theater_ename_orig_j").style.display = "none";
      document.getElementById("boost_time").innerHTML = "";
      document.getElementById("boost_countdown").style.display = "none";
      document.getElementById("nearend_event").style.display = "none";
      console.log("["+(new Date()).toLocaleString()+"] [현지(일본어)판] 현재 개최 중인 이벤트가 없습니다.");
      return;
     }
     var eid = new Number(s[0].id);
     document.getElementById("theater_eid_j").value = eid;

     var startingTimestamp = new Number(new Date($("#theater_elist_j td[data-event-id][data-event-id!='-1']").last().data("eventStart")));
     var nowTimestamp = new Number(new Date());

     var numEvents = $("#theater_elist_j td[data-event-id][data-event-id!='-1']").length;

     if(startingTimestamp <= nowTimestamp){var $eTitle = document.createTextNode($("#theater_elist_j td[data-event-id][data-event-id!='-1']").last().html().replace(/<[^>]*>/g,"").replace("&amp;","&"));}
     else{var $eTitle = document.createTextNode($("#theater_elist_j td[data-event-id][data-event-id!='-1']").eq(numEvents-2).html().replace(/<[^>]*>/g,"").replace("&amp;","&"));}

     var eInfoLink = document.createElement("a");
     eInfoLink.href = "https://mltd.matsurihi.me/events/"+eid;
     eInfoLink.target = "_blank";

     eInfoLink.appendChild($eTitle);
     document.getElementById("theater_event_name_j").innerHTML = "";
     document.getElementById("theater_event_name_j").appendChild(eInfoLink);
     document.getElementById("theater_ename_orig_j").innerHTML = "("+s[0].name+")";
     document.getElementById("theater_ename_orig_j").style.display = "inline-block";
     
     console.log("["+(new Date()).toLocaleString()+"] [현지(일본어)판] 현재 개최 중인 이벤트 종류 : "+theaterEventType[s[0].type]);

     var eDateTime0 = new Number(new Date(s[0].schedule.endDate));
     var eDateTime = new Date(eDateTime0+1000);
     var eYear = eDateTime.getFullYear();
     var eMonth = eDateTime.getMonth()+1;
     var eDay = eDateTime.getDate();
     var eHours = eDateTime.getHours();
     var eMins = eDateTime.getMinutes();
     var eSecs = eDateTime.getSeconds();

     setInterval(function(){tickEvent.remain(eYear,eMonth,eDay,eHours,eMins,eSecs,"countdown_time");},50);

     var dateTimeNow = new Number(new Date());
     var nearEndThreshold = 0;
     var underdayRemain = 86400;

     var sDateTime0 = new Number(new Date(s[0].schedule.beginDate));
     var sDateTime = new Date(sDateTime0+1000);

     var eventProgressRatio = ((dateTimeNow - sDateTime) / (eDateTime - sDateTime));
     var progressRatioPercentage = new Number((100 * eventProgressRatio).toFixed(2));

     if(s[0].type == 3 || s[0].type == 4){nearEndThreshold = 43200;} // PST 이벤트 (3 = 시어터, 4 = 투어)
     else if(s[0].type == 2 || s[0].type == 9){nearEndThreshold = 21600;} // 밀리코레
     else if(s[0].type == 5){nearEndThreshold = 43200;} // n주년 이벤트
     else if(s[0].type == 6){nearEndThreshold = 10800;} // 워킹
     else if(s[0].type == 7){nearEndThreshold = 3600;} // 만우절 특별 이벤트
     else{nearEndThreshold = 21600;} // 그 외

     if((eDateTime - dateTimeNow) <= (underdayRemain * 1000) && (eDateTime - dateTimeNow) > (nearEndThreshold * 1000)){document.getElementById("underday_event").style.display = "block";}
     else if((eDateTime - dateTimeNow) <= (nearEndThreshold * 1000)){document.getElementById("underday_event").style.display = "none";}

     if((eDateTime - dateTimeNow) <= (nearEndThreshold * 1000)){document.getElementById("nearend_event").style.display = "block";}
     else if((eDateTime - dateTimeNow) <= 0){document.getElementById("nearend_event").style.display = "none";}

     if((eDateTime - dateTimeNow) <= 0){document.getElementById("theater_ename_orig_j").style.display = "none";}

     if((eDateTime - dateTimeNow) > 0){document.getElementById("event_progress").style.display = "block";}
     else if((eDateTime - dateTimeNow) <= 0){document.getElementById("event_progress").style.display = "none";}

     document.getElementById("event_progress").innerHTML = "(진행률 "+progressRatioPercentage+"%)";
     
     if("boostBeginDate" in s[0].schedule){ // 후반전이 존재할 경우
      var bDateTime = new Date(s[0].schedule.boostBeginDate);
      var bYear = bDateTime.getFullYear();
      var bMonth = bDateTime.getMonth()+1;
      var bDay = bDateTime.getDate();
      var bHours = bDateTime.getHours();
      var bMins = bDateTime.getMinutes();
      var bSecs = bDateTime.getSeconds();
 
      setInterval(function(){tickEvent.boost(bYear,bMonth,bDay,bHours,bMins,bSecs,"boost_time");},50);
     }else{
      document.getElementById("boost_time").innerHTML = "후반전 없음";
      document.getElementById("resannounce_time").innerHTML = "결과발표 없음";
      console.log("["+(new Date()).toLocaleString()+"] [현지(일본어)판] 현재 개최 중인 이벤트는 후반전이 없는 이벤트 형식입니다.");
     }

     if(s[0].type == 3){ // 시어터 이벤트인 경우에만 어필치 보너스 적용
      var aTypeText = "";
      if("appealType" in s[0]){
       if(s[0].appealType == 1){aTypeText = "보컬(Vo)";}
       else if(s[0].appealType == 2){aTypeText = "댄스(Da)";}
       else if(s[0].appealType == 3){aTypeText = "비쥬얼(Vi)";}
       else{aTypeText = "보너스 없음";}
      }else{aTypeText = "보너스 없음";}
      console.log("["+(new Date()).toLocaleString()+"] [현지(일본어)판] 이벤트 보너스 적용 어필치 : "+aTypeText);
     }
    }else{
     alert("오류가 발생했습니다. ["+r.status+"]");
     document.getElementById("countdown_time").innerHTML = "서버가 점검 중이거나 오류가 발생했습니다. 잠시 후 다시 시도해주세요.";
     return false;
    }
   }
  };

  var nowDate = new Date();
  var tzAdjust = ((540 - ((-1) * nowDate.getTimezoneOffset())) * 60000); // 한일 시간대(UTC+9) 에 맞춰서 조정
  var adjustedDate = new Date(new Number(nowDate)+(((-1) * nowDate.getTimezoneOffset() * 60000)+tzAdjust));
  var dt = adjustedDate.toISOString().replace("Z","");

  r.open("GET","https://api.matsurihi.me/mltd/v1/events?at="+dt);
  r.send();
 },

 showRemainingTDKorean : function(){
  var r = requestPage.makeRequest();

  r.onreadystatechange = function(){
   if(r.readyState == 4){
    if(r.status == 200){
     var s = JSON.parse(r.responseText);
     if(s.length == 0){
      document.getElementById("countdown_time_k").innerHTML = "개최 중인 이벤트가 없습니다.";
      document.getElementById("theater_event_name_k").innerHTML = "(개최 중인 이벤트가 없습니다)";
      document.getElementById("theater_ename_orig_k").style.display = "none";
      document.getElementById("boost_time_k").innerHTML = "";
      document.getElementById("boost_countdown_k").style.display = "none";
      document.getElementById("nearend_event_k").style.display = "none";
      console.log("["+(new Date()).toLocaleString()+"] [한국어판] 현재 개최 중인 이벤트가 없습니다.");
      return;
     }
     var eid = new Number(s[0].id);
     document.getElementById("theater_eid_k").value = eid;

     var startingTimestamp = new Number(new Date($("#theater_elist_k td[data-event-id][data-event-id!='-1']").last().data("eventStart")));
     var nowTimestamp = new Number(new Date());

     var numEvents = $("#theater_elist_k td[data-event-id][data-event-id!='-1']").length;

     if(startingTimestamp <= nowTimestamp){var $eTitle = document.createTextNode($("#theater_elist_k td[data-event-id][data-event-id!='-1']").last().html().replace(/<[^>]*>/g,"").replace("&amp;","&"));}
     else{var $eTitle = document.createTextNode($("#theater_elist_k td[data-event-id][data-event-id!='-1']").eq(numEvents-2).html().replace(/<[^>]*>/g,"").replace("&amp;","&"));}

     var eInfoLink = document.createElement("a");
     eInfoLink.href = "https://unionlive.kr/events";
     eInfoLink.target = "_blank";

     eInfoLink.appendChild($eTitle);
     document.getElementById("theater_event_name_k").innerHTML = "";
     document.getElementById("theater_event_name_k").appendChild(eInfoLink);
     document.getElementById("theater_ename_orig_k").innerHTML = "("+s[0].name+")";
     document.getElementById("theater_ename_orig_k").style.display = "inline-block";
     
     console.log("["+(new Date()).toLocaleString()+"] [한국어판] 현재 개최 중인 이벤트 종류 : "+theaterEventType[s[0].type]);

     var eDateTime0 = new Number(new Date(s[0].schedule.endDate));
     var eDateTime = new Date(eDateTime0+1000);
     var eYear = eDateTime.getFullYear();
     var eMonth = eDateTime.getMonth()+1;
     var eDay = eDateTime.getDate();
     var eHours = eDateTime.getHours();
     var eMins = eDateTime.getMinutes();
     var eSecs = eDateTime.getSeconds();

     setInterval(function(){tickEvent.remain(eYear,eMonth,eDay,eHours,eMins,eSecs,"countdown_time_k");},50);

     var dateTimeNow = new Number(new Date());
     var nearEndThreshold = 0;
     var underdayRemain = 86400;

     var sDateTime0 = new Number(new Date(s[0].schedule.beginDate));
     var sDateTime = new Date(sDateTime0+1000);

     var eventProgressRatio = ((dateTimeNow - sDateTime) / (eDateTime - sDateTime));
     var progressRatioPercentage = new Number((100 * eventProgressRatio).toFixed(2));

     if(s[0].type == 3 || s[0].type == 4){nearEndThreshold = 43200;} // PST 이벤트 (3 = 시어터, 4 = 투어)
     else if(s[0].type == 2 || s[0].type == 9){nearEndThreshold = 21600;} // 밀리코레
     else if(s[0].type == 5){nearEndThreshold = 43200;} // n주년 이벤트
     else if(s[0].type == 6){nearEndThreshold = 10800;} // 워킹
     else if(s[0].type == 7){nearEndThreshold = 3600;} // 만우절 특별 이벤트
     else{nearEndThreshold = 21600;} // 그 외

     if((eDateTime - dateTimeNow) <= (underdayRemain * 1000) && (eDateTime - dateTimeNow) > (nearEndThreshold * 1000)){document.getElementById("underday_event_k").style.display = "block";}
     else if((eDateTime - dateTimeNow) <= (nearEndThreshold * 1000)){document.getElementById("underday_event_k").style.display = "none";}

     if((eDateTime - dateTimeNow) <= (nearEndThreshold * 1000)){document.getElementById("nearend_event_k").style.display = "block";}
     else if((eDateTime - dateTimeNow) <= 0){document.getElementById("nearend_event_k").style.display = "none";}

     if((eDateTime - dateTimeNow) <= 0){document.getElementById("theater_ename_orig_k").style.display = "none";}

     if((eDateTime - dateTimeNow) > 0){document.getElementById("event_progress_k").style.display = "block";}
     else if((eDateTime - dateTimeNow) <= 0){document.getElementById("event_progress_k").style.display = "none";}

     document.getElementById("event_progress_k").innerHTML = "(진행률 "+progressRatioPercentage+"%)";
     
     if("boostBeginDate" in s[0].schedule){ // 후반전이 존재할 경우
      var bDateTime = new Date(s[0].schedule.boostBeginDate);
      var bYear = bDateTime.getFullYear();
      var bMonth = bDateTime.getMonth()+1;
      var bDay = bDateTime.getDate();
      var bHours = bDateTime.getHours();
      var bMins = bDateTime.getMinutes();
      var bSecs = bDateTime.getSeconds();
 
      setInterval(function(){tickEvent.boost(bYear,bMonth,bDay,bHours,bMins,bSecs,"boost_time_k");},50);
     }else{
      document.getElementById("boost_time_k").innerHTML = "후반전 없음";
      console.log("["+(new Date()).toLocaleString()+"] [한국어판] 현재 개최 중인 이벤트는 후반전이 없는 이벤트 형식입니다.");
     }

     if(s[0].type == 3){ // 시어터 이벤트인 경우에만 어필치 보너스 적용
      var aTypeText = "";
      if("appealType" in s[0]){
       if(s[0].appealType == 1){aTypeText = "보컬(Vo)";}
       else if(s[0].appealType == 2){aTypeText = "댄스(Da)";}
       else if(s[0].appealType == 3){aTypeText = "비쥬얼(Vi)";}
       else{aTypeText = "보너스 없음";}
      }else{aTypeText = "보너스 없음";}
      console.log("["+(new Date()).toLocaleString()+"] [한국어판] 이벤트 보너스 적용 어필치 : "+aTypeText);
     }
    }else{
     alert("오류가 발생했습니다. ["+r.status+"]");
     document.getElementById("countdown_time_k").innerHTML = "서버가 점검 중이거나 오류가 발생했습니다. 잠시 후 다시 시도해주세요.";
     return false;
    }
   }
  };

  var nowDate = new Date();
  var tzAdjust = ((540 - ((-1) * nowDate.getTimezoneOffset())) * 60000); // 한일 시간대(UTC+9) 에 맞춰서 조정
  var adjustedDate = new Date(new Number(nowDate)+(((-1) * nowDate.getTimezoneOffset() * 60000)+tzAdjust));
  var dt = adjustedDate.toISOString().replace("Z","");

  r.open("GET","https://api.matsurihi.me/mltd/v1/ko/events?at="+dt);
  r.send();
 },

 showSLSongSpecial : function(){
  var startingDate0 = new Date(2017,1,13,0,0,0,0);
  var dateNow = new Date();
  var tzAdjust = (540-((-1) * dateNow.getTimezoneOffset())) * 60000;
  var startingDate = new Date(new Number(startingDate0)+tzAdjust);
  var stampNow = new Number(new Date());

  var groupEpoch = Math.floor((stampNow - startingDate) / (1000 * 1209600)) % 3;

  if(groupEpoch == 0){
   document.getElementById("s_album_epoch").innerHTML = "A조 (큐트)";
   document.getElementById("s_album_epoch").className = "cgcute";
  }else if(groupEpoch == 1){
   document.getElementById("s_album_epoch").innerHTML = "B조 (쿨)";
   document.getElementById("s_album_epoch").className = "cgcool";
  }else if(groupEpoch == 2){
   document.getElementById("s_album_epoch").innerHTML = "C조 (패션)";
   document.getElementById("s_album_epoch").className = "cgpassion";
  }

  var stampNextGroup = new Number(startingDate)+(Math.ceil((stampNow - new Number(startingDate)) / (1000 * 1209600)) * (1000 * 1209600));

  var remainingTime0 = (stampNextGroup - stampNow) / 1000;
  
  var remainingDays = Math.floor(remainingTime0 / 86400) % 14;
  var remainingHours = Math.floor((remainingTime0 % 86400) / 3600);
  var remainingMins = Math.floor((remainingTime0 % 3600) / 60);
  var remainingSecs = Math.ceil(remainingTime0 % 60);
  if(remainingHours == 24){
   remainingDays++;
   remainingHours = 0;
  }
  if(remainingMins == 60){
   remainingHours++;
   remainingMins = 0;
  }
  if(remainingSecs == 60){
   remainingMins++;
   remainingSecs = 0;
  }

  if(remainingTime0 < 60){var remainingTimeFormat = remainingSecs+"초";}
  else if(remainingTime0 < 3600){var remainingTimeFormat = remainingMins+"분 "+remainingSecs+"초";}
  else if(remainingTime0 < 86400){var remainingTimeFormat = remainingHours+"시간 "+remainingMins+"분 "+remainingSecs+"초";}
  else{var remainingTimeFormat = remainingDays+"일 "+remainingHours+"시간 "+remainingMins+"분 "+remainingSecs+"초";}
  
  document.getElementById("s_countdown_type_a").innerHTML = "다음";
  document.getElementById("s_countdown_type_b").innerHTML = "갱신";

  if(remainingTime0 >= 0){document.getElementById("s_countdown_time").innerHTML = remainingTimeFormat;}
  else{document.getElementById("s_countdown_time").innerHTML = "기간이 종료되었습니다.";}

 },

 showCountdownAnniversary : function(arrFinishTimestamp,dispOut){
  var Y;
  var m = arrFinishTimestamp[0];
  var d = arrFinishTimestamp[1];
  var H = arrFinishTimestamp[2];
  var i = arrFinishTimestamp[3];
  var s = arrFinishTimestamp[4];
  var Z = arrFinishTimestamp[5];

  var c = (m * 100)+d;
  
  var dateNow = new Date();
  var YNow = dateNow.getFullYear();
  var mNow = dateNow.getMonth()+1;
  var dNow = dateNow.getDate();

  var cNow = (mNow * 100)+dNow;
  
  if(cNow >= c){Y = YNow+1;}
  else{Y = YNow;}

  var stampNow = new Number(new Date()) / 1000;
  var tzAdjust = (540-((-1) * dateNow.getTimezoneOffset())) * 60000;
  var dateFinish = new Date(new Number(new Date(Y,m-1,d,H,i,s,0))+tzAdjust);
  var stampFinish = new Number(dateFinish) / 1000;

  var remainingTime0 = (stampFinish - stampNow);
  var remainingDays = Math.floor(remainingTime0 / 86400);
  var remainingHours = Math.floor((remainingTime0 % 86400) / 3600);
  var remainingMins = Math.floor((remainingTime0 % 3600) / 60);
  var remainingSecs = Math.ceil(remainingTime0 % 60);
  if(remainingHours == 24){
   remainingDays++;
   remainingHours = 0;
  }
  if(remainingMins == 60){
   remainingHours++;
   remainingMins = 0;
  }
  if(remainingSecs == 60){
   remainingMins++;
   remainingSecs = 0;
  }

  if(remainingTime0 < 60){var remainingTimeFormat = remainingSecs+"초";}
  else if(remainingTime0 < 3600){var remainingTimeFormat = remainingMins+"분 "+remainingSecs+"초";}
  else if(remainingTime0 < 86400){var remainingTimeFormat = remainingHours+"시간 "+remainingMins+"분 "+remainingSecs+"초";}
  else{var remainingTimeFormat = remainingDays+"일 "+remainingHours+"시간 "+remainingMins+"분 "+remainingSecs+"초";}

  if(remainingTime0 >= 0){document.getElementById(dispOut).innerHTML = remainingTimeFormat;}
  else{document.getElementById(dispOut).innerHTML = "카운트다운 종료!!";}

 },

 showCountdownMonthlyNow : function(){

  var dateNow = new Date();
  var YNow = dateNow.getFullYear();
  var mNext = dateNow.getMonth()+1;
  var dNow = dateNow.getDate();

  var stampNow = new Number(new Date()) / 1000;
  var tzAdjust = (540-((-1) * dateNow.getTimezoneOffset())) * 60000;
  var dateFinish = new Date(new Number(new Date(YNow,mNext,1,0,0,0,0))+tzAdjust);
  var stampFinish = new Number(dateFinish) / 1000;

  var remainingTime0 = (stampFinish - stampNow);
  var remainingDays = Math.floor(remainingTime0 / 86400);
  var remainingHours = Math.floor((remainingTime0 % 86400) / 3600);
  var remainingMins = Math.floor((remainingTime0 % 3600) / 60);
  var remainingSecs = Math.ceil(remainingTime0 % 60);
  if(remainingHours == 24){
   remainingDays++;
   remainingHours = 0;
  }
  if(remainingMins == 60){
   remainingHours++;
   remainingMins = 0;
  }
  if(remainingSecs == 60){
   remainingMins++;
   remainingSecs = 0;
  }

  if(remainingTime0 < 60){var remainingTimeFormat = remainingSecs+"초";}
  else if(remainingTime0 < 3600){var remainingTimeFormat = remainingMins+"분 "+remainingSecs+"초";}
  else if(remainingTime0 < 86400){var remainingTimeFormat = remainingHours+"시간 "+remainingMins+"분 "+remainingSecs+"초";}
  else{var remainingTimeFormat = remainingDays+"일 "+remainingHours+"시간 "+remainingMins+"분 "+remainingSecs+"초";}

  if(remainingTime0 >= 0){document.getElementById("countdown_time_monthly").innerHTML = remainingTimeFormat;}

 }
};

var showSLDailyType = {
 weekdayNames : new Array("일","월","화","수","목","금","토"),
 todayType : function(){
  var timestampNow = new Date();
  var tzAdjust = (540-((-1) * timestampNow.getTimezoneOffset())) * 60000;
  var dateNow = new Date(new Number(timestampNow)+tzAdjust);
  var weekdayNow = dateNow.getDay();
  document.getElementById("cgsongs_weekday").innerHTML = this.weekdayNames[weekdayNow]+"요일";
  if(weekdayNow <= 2 || weekdayNow == 6){ // 월~화, 주말
   if(weekdayNow == 1 || weekdayNow == 6){
    document.getElementById("daily_type_slitems").className = "cgspecial";
    document.getElementById("daily_type_slitems").innerHTML = "모든 속성의";
    if(weekdayNow == 6){document.getElementById("daily_other_slitems").innerHTML = "머니 획득량이 2배로 상승합니다.";}
    else{document.getElementById("daily_other_slitems").innerHTML = "이외의 보정은 없습니다.";}
   }else if(weekdayNow == 2 || weekdayNow == 0){
    document.getElementById("daily_type_slitems").className = "cgspecial";
    document.getElementById("daily_type_slitems").innerHTML = "공통";
    if(weekdayNow == 0){document.getElementById("daily_other_slitems").innerHTML = "머니 획득량이 2배로 상승합니다.";}
    else{document.getElementById("daily_other_slitems").innerHTML = "이외의 보정은 없습니다.";}
   }
  }else if(weekdayNow == 3){ // 수요일
   document.getElementById("daily_type_slitems").className = "cgcute";
   document.getElementById("daily_type_slitems").innerHTML = "큐트 속성";
   document.getElementById("daily_other_slitems").innerHTML = "이외의 보정은 없습니다.";
  }else if(weekdayNow == 4){ // 목요일
   document.getElementById("daily_type_slitems").className = "cgcool";
   document.getElementById("daily_type_slitems").innerHTML = "쿨 속성";
   document.getElementById("daily_other_slitems").innerHTML = "이외의 보정은 없습니다.";
  }else if(weekdayNow == 5){ // 금요일
   document.getElementById("daily_type_slitems").className = "cgpassion";
   document.getElementById("daily_type_slitems").innerHTML = "패션 속성";
   document.getElementById("daily_other_slitems").innerHTML = "이외의 보정은 없습니다.";
  }
 }
};


var showSLEventCategory = {
 choice : function(){
  var eTypeToShow = new Number(document.getElementById("slevents_category").value);
  $(".starlight_events td[class^='cg_starlight_']").parent().css("display","table-row");

  if(eTypeToShow == 1){$(".starlight_events td[class^='cg_starlight_'][class!='cg_starlight_atapon']").parent().css("display","none");}
  else if(eTypeToShow == 3){$(".starlight_events td[class^='cg_starlight_'][class!='cg_starlight_burst']").parent().css("display","none");}
  else if(eTypeToShow == 0){$(".starlight_events td[class^='cg_starlight_']").parent().css("display","table-row");}
  else{$(".starlight_events td[class^='cg_starlight_'][data-event-type!='"+eTypeToShow+"']").parent().css("display","none");}

  var numEventYears = $(".starlight_events").length;

  var p = document.getElementsByClassName("blank_results_text").length;

  if(p > 0){$(".blank_results_text").remove();}

  for(y=0;y<numEventYears;y++){
   var numCols = $(".starlight_events").eq(y).find("tr:nth-child(1)").children().length;
   if($(".starlight_events").eq(y).find("td[class^='cg_starlight_']:visible").length == 0){
    var blankResRow = document.createElement("tr");
    blankResRow.setAttribute("class","blank_results_text");
    var blankResCol = document.createElement("td");
    blankResCol.setAttribute("colspan",numCols);
    blankResCol.appendChild(document.createTextNode("조건에 해당하는 이벤트가 없습니다."));
    blankResRow.appendChild(blankResCol);
    $(".starlight_events").eq(y).find("td[class^='cg_starlight_']").parent().parent().append(blankResRow);
   }
  }
 }
};



var getSLGameClientInfo = {

 getContent : function(){
  var r = requestPage.makeRequest();

  r.onreadystatechange = function(){
   if(r.readyState == 4){
    if(r.status == 200){

     var parsingContent = JSON.parse(r.responseText);
     var cVersion = parsingContent.app.version;
     var cTime0 = new Date(parsingContent.app.updateTime);
     var cTimeDisp = cTime0.getFullYear() +"년 "+ (cTime0.getMonth()+1) +"월 "+ cTime0.getDate() +"일 "+ cTime0.getHours() +"시 "+ cTime0.getMinutes() +"분";
     var aTime0 = new Date(parsingContent.res.updateTime);
     var aTimeDisp = aTime0.getFullYear() +"년 "+ (aTime0.getMonth()+1) +"월 "+ aTime0.getDate() +"일 "+ aTime0.getHours() +"시 "+ aTime0.getMinutes() +"분";
     var dispContent = "사용 가능한 버전: "+ cVersion +"<br />최근 강제 업데이트: "+ cTimeDisp +"경<br />";
     dispContent += "최근 게임 데이터 갱신: "+ aTimeDisp +"경";
     document.getElementById("slclient_info_detail").innerHTML = dispContent;
     var uTime = new Date();
     var uTimeDisp = uTime.getFullYear() +"년 "+ (uTime.getMonth()+1) +"월 "+ uTime.getDate() +"일 "+ uTime.getHours() +"시 "+ uTime.getMinutes() +"분 기준";
     document.getElementById("lastupdate_clientinfo").innerHTML = uTimeDisp;
    }else{
     alert("오류가 발생하였습니다. [코드 "+r.status+"]");
     document.getElementById("slclient_info_detail").innerHTML = "오류가 발생하였습니다. 잠시후 다시 새로고침해주세요.";
    }
   }
  };
  r.open("GET","https://api.matsurihi.me/cgss/v1/version/latest");
  r.send();
 }
};

var getTDGameClientInfo = {

 getContent : function(){
  var r = requestPage.makeRequest();

  r.onreadystatechange = function(){
   if(r.readyState == 4){
    if(r.status == 200){
     var parsingContent = JSON.parse(r.responseText);
     var cVersion = parsingContent.app.version;
     var cTime0 = new Date(parsingContent.app.updateTime);
     var cTimeDisp = cTime0.getFullYear() +"년 "+ (cTime0.getMonth()+1) +"월 "+ cTime0.getDate() +"일 "+ cTime0.getHours() +"시 "+ cTime0.getMinutes() +"분";
     var aTime0 = new Date(parsingContent.res.updateTime);
     var aTimeDisp = aTime0.getFullYear() +"년 "+ (aTime0.getMonth()+1) +"월 "+ aTime0.getDate() +"일 "+ aTime0.getHours() +"시 "+ aTime0.getMinutes() +"분";
     var dispContent = "사용 가능한 버전: "+ cVersion +"<br />최근 강제 업데이트: "+ cTimeDisp +"경<br />";
     dispContent += "최근 게임 데이터 갱신: "+ aTimeDisp +"경";
     document.getElementById("tdclient_info_detail").innerHTML = dispContent;
     var uTime = new Date();
     var uTimeDisp = uTime.getFullYear() +"년 "+ (uTime.getMonth()+1) +"월 "+ uTime.getDate() +"일 "+ uTime.getHours() +"시 "+ uTime.getMinutes() +"분 기준";
     document.getElementById("lastupdate_clientinfo").innerHTML = uTimeDisp;
    }else{
     alert("오류가 발생하였습니다. [코드 "+r.status+"]");
     document.getElementById("tdclient_info_detail").innerHTML = "오류가 발생하였습니다. 잠시후 다시 새로고침해주세요.";
    }
   }
  };
  r.open("GET","https://api.matsurihi.me/mltd/v1/version/latest");
  r.send();
 }
};


var getTDEventRanksInfo = {
 
 makeReq : function(){return new XMLHttpRequest();},

 retrieveData : function(eid){
  if(eid <= 0){alert("아직 개최되지 않은 이벤트입니다.");return;}
  if(eid < 33){alert("이벤트 포인트 랭킹 정보는 2018년 6월 개최된 시어터(PSTheater) 이벤트부터 확인 가능합니다.\n그 이전의 정보는 다음 웹사이트를 참고하시기 바랍니다:\n - https://si.ster.li/events/");}
  else{
   var t = this.makeReq();

   t.onreadystatechange = function(){
    var etype = 0;
    if(t.readyState == 4){
     if(t.status == 200){
      var s = JSON.parse(t.responseText);
      if(s.length == 0){etype = 0;}
      else{etype = s.type;}

      if(etype == 0){alert("존재하지 않는 이벤트입니다.");return;}
      else if(etype == 3 || etype == 4 || etype == 10){
       var r = new XMLHttpRequest();

       r.onreadystatechange = function(){
        if(r.readyState == 4){
         if(r.status == 200){
          var infoText = "";
 
          var g = JSON.parse(r.responseText);
          if(typeof g[0] == "undefined"){alert("집계된 데이터가 없습니다.");return;}
          var numEntries1 = g[0].data.length;
          if(typeof g[1] != "undefined"){var numEntriesTop = g[1].data.length;}
          if(typeof g[2] != "undefined"){var numEntriesMR4 = g[2].data.length;}
          if(typeof g[3] != "undefined"){var numEntriesMR3 = g[3].data.length;}
          if(typeof g[4] != "undefined"){var numEntriesMR2 = g[4].data.length;}
          if(typeof g[5] != "undefined"){var numEntriesMR1 = g[5].data.length;}
          if(typeof g[6] != "undefined"){var numEntriesMR0= g[6].data.length;}

          infoText += "1위: "+g[0].data[numEntries1-1].score+"pts\n"; // 1위
          if(typeof g[1] != "undefined"){infoText += "100위: "+g[1].data[numEntriesTop-1].score+"pts\n";} // 100위
          if(typeof g[2] != "undefined"){infoText += "2500위: "+g[2].data[numEntriesMR4-1].score+"pts\n";} // 상위 마스터랭크 4 (2500위) 컷
          if(typeof g[3] != "undefined"){infoText += "5000위: "+g[3].data[numEntriesMR3-1].score+"pts\n";} // 상위 마스터랭크 3 (5000위) 컷
          if(typeof g[4] != "undefined"){infoText += "10000위: "+g[4].data[numEntriesMR2-1].score+"pts\n";} // 상위 마스터랭크 2 (10000위) 컷
          if(typeof g[5] != "undefined"){infoText += "25000위: "+g[5].data[numEntriesMR1-1].score+"pts\n";} // 상위 마스터랭크 1 (25000위) 컷
          if(typeof g[6] != "undefined"){infoText += "50000위: "+g[6].data[numEntriesMR0-1].score+"pts\n";} // 입상(50000위) 컷
          var eidNow = new Number(document.getElementById("theater_eid_j").value);

          var countTimestamp = g[0].data[numEntries1-1].summaryTime;

          if(eid == eidNow){alert("'"+$("#theater_elist_j td[data-event-id="+eid+"]").text()+"'의 "+countTimestamp+" 현재의 개인 이벤트 포인트 랭킹 정보\n\n"+infoText);}
          else{
           var resultNow = new Number(new Date());
           var resultEnd = new Number(new Date(s.schedule.pageEndDate));
           if(resultNow >= resultEnd-(97200 * 1000)){alert("'"+$("#theater_elist_j td[data-event-id="+eid+"]").text()+"'의 최종 개인 이벤트 포인트 랭킹 정보\n\n"+infoText);}
           else{alert("'"+$("#theater_elist_j td[data-event-id="+eid+"]").text()+"'의 결과는 현재 집계 중입니다. 발표를 기다려주세요.\n아래는 이벤트 종료 직전("+countTimestamp+")의 개인 이벤트 포인트 랭킹 정보입니다.\n\n"+infoText);}
          }
         }else{
          alert("오류가 발생하였습니다. ["+r.status+"] 잠시 후 다시 시도해주세요.");
          console.log("오류가 발생하였습니다. ["+r.status+"] 잠시 후 다시 시도해주세요.");
         }
        }
       };
       r.open("GET","https://api.matsurihi.me/mltd/v1/events/"+eid+"/rankings/logs/eventPoint/1,100,2500,5000,10000,25000,50000?prettyPrint=false");
       r.send();
      }else if(etype == 5){alert("n주년 이벤트 랭킹은 이 페이지의 상단에 있는 [n주년 이벤트 관련 데이터] 링크를 참조하세요.");return;}
      else{alert("해당 이벤트는 랭킹제 이벤트가 아닙니다.");return;}
     }else{alert("이벤트 정보를 불러오던 중 오류가 발생하였습니다.");return;}
    }
   };
   t.open("GET","https://api.matsurihi.me/mltd/v1/events/"+eid+"?prettyPrint=false");
   t.send();
  }
 }
};


