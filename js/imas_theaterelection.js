var webReq = {
 initalize : function(){return new XMLHttpRequest();}
};

var endpointURI = "https://api.matsurihi.me/mltd/v1/election/current";

var dateNow = new Date();
var dateStart_currentElection = new Date("2018-12-19T00:00:00+09:00");
var dateEnd_currentElection = new Date("2019-01-20T00:00:00+09:00");

var stampNow = new Number(dateNow) / 1000;
var stampStart_currentElection = new Number(dateStart_currentElection) / 1000;
var stampEnd_currentElection = new Number(dateEnd_currentElection) / 1000;


function showDateTime(){
 var dateNow = new Date();
 var dateStart = dateStart_currentElection;
 var dateEnd = dateEnd_currentElection;

 var stampNow = new Number(dateNow) / 1000;
 var stampStart = new Number(dateStart) / 1000;
 var stampEnd = new Number(dateEnd) / 1000;
 
 var yearNow = dateNow.getFullYear();
 var monthNow = dateNow.getMonth()+1;
 var dayNow = dateNow.getDate();
 var dispHourNow = dateNow.getHours();
 var dispMinsNow = dateNow.getMinutes();
 var dispSecsNow = dateNow.getSeconds();
 
 var timezoneNow0 = dateNow.getTimezoneOffset();
 var timezoneHours = ((timezoneNow0 <= 0) ? "+" : "-")+Math.floor(-timezoneNow0 / 60);
 var timezoneMins = Math.abs(timezoneNow0) % 60;
 timezoneMins = (timezoneMins < 10) ? "0"+timezoneMins : timezoneMins;
  
 var dispDateTime = "현재 날짜/시간: "+yearNow+"년 "+monthNow+"월 "+dayNow+"일 "+dispHourNow+"시 "+dispMinsNow+"분 "+dispSecsNow+"초 (UTC"+timezoneHours+":"+timezoneMins+")";

 var voteLength = stampEnd - stampStart;
 var voteElapsed = stampNow - stampStart;
 var voteTimePercentage = (100 * (Math.floor((voteElapsed / voteLength) * 100000) / 100000)).toFixed(3);

 var remainingTime0 = (stampEnd_currentElection - stampNow);
 var remainingDays = Math.floor(remainingTime0 / 86400);
 var remainingHours = Math.floor(remainingTime0 / 3600) % 24;
 var remainingMins = Math.floor(remainingTime0 / 60) % 60;
 var remainingSecs = Math.ceil(remainingTime0 % 60);
 if(remainingHours == 24){
  remainingHours = 0;
  remainingDays++;
 }
 if(remainingMins == 60){
  remainingMins = 0;
  remainingHours++;
 }
 if(remainingSecs == 60){
  remainingSecs = 0;
  remainingMins++;
 }
 var remainingTimeFormat = remainingDays+"일 "+remainingHours+"시간 "+remainingMins+"분 "+remainingSecs+"초";

 if(voteElapsed <= voteLength){document.getElementById("dt_now").innerHTML = dispDateTime +"<br />[종료까지 "+ remainingTimeFormat +" 남음 / 현재 "+voteTimePercentage+"% 경과]";}
 else{document.getElementById("dt_now").innerHTML = dispDateTime +"(투표기간 종료!!)";}
}

var idolNames = {
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

var roleNames = {
 // 챌린지
 16 : "고도(孤島) 서스펜스 호러 (주인공)",
 17 : "고도(孤島) 서스펜스 호러 (친구)",
 18 : "고도(孤島) 서스펜스 호러 (선생)",
 19 : "고도(孤島) 서스펜스 호러 (관의 여주인)",
 20 : "고도(孤島) 서스펜스 호러 (메이드)",

 21 : "동화나라 이야기 (소녀)",
 22 : "동화나라 이야기 (요정)",
 23 : "동화나라 이야기 (마법사)",
 24 : "동화나라 이야기 (늑대)",
 25 : "동화나라 이야기 (여행자)",

 26 : "근미래 아웃사이더 (더스크)",
 27 : "근미래 아웃사이더 (버스터 블레이드)",
 28 : "근미래 아웃사이더 (아마릴리스)",
 29 : "근미래 아웃사이더 (벨벳)",
 30 : "근미래 아웃사이더 (파이널데이)"
};


var getTheaterElectionStats = {
 getStatsByRole : function(){
  if(stampNow < stampStart_currentElection){
   document.getElementById("no_results").innerHTML = "아직 투표 기간이 시작되지 않았습니다!!";
   $(document.getElementById("loading_stats")).css("display","none");
   return false;
  }
  if(stampNow > stampEnd_currentElection){
   document.getElementById("no_results").innerHTML = "투표 기간이 이미 종료되었습니다.";
   $(document.getElementById("loading_stats")).css("display","none");
   return false;
  }

  var _r = webReq.initalize();
  var displayField = document.getElementById("electionstats_display");
  displayField.innerHTML = "";
  $(document.getElementById("loading_stats")).css("display","");

  _r.onreadystatechange = function(){
   if(_r.readyState == 4){
    $(document.getElementById("loading_stats")).css("display","none");
    if(_r.status == 200){
     var parsingRaw = JSON.parse(_r.responseText);
     for(i=0;i<15;i++){      
      var roleTitleText = document.createElement("h3");
      var roleTitle = document.createTextNode(roleNames[parsingRaw[i].id]);
      roleTitleText.dataset.id = parsingRaw[i].id;
      roleTitleText.id = "roletitle_"+ parsingRaw[i].id;
      roleTitleText.appendChild(roleTitle);
      displayField.appendChild(roleTitleText);

      var lastUpdate = new Date(parsingRaw[i].summaryTime);
      var lastUpdate_Year = lastUpdate.getFullYear();
      var lastUpdate_Month = lastUpdate.getMonth()+1;
      var lastUpdate_Date = lastUpdate.getDate();
      var lastUpdate_Hour = lastUpdate.getHours();
      var lastUpdate_Min = lastUpdate.getMinutes();
      var lastUpdateDisplay = document.createElement("span");
      lastUpdateDisplay.style.fontSize = "0.85em";
      lastUpdateDisplay.appendChild(document.createTextNode(lastUpdate_Year+"년 "+lastUpdate_Month+"월 "+lastUpdate_Date+"일 "+lastUpdate_Hour+"시 "+lastUpdate_Min+"분 기준"));
      lastUpdateDisplay.id = "lastupdate_"+parsingRaw[i].id;
      displayField.appendChild(lastUpdateDisplay);

      var makeTable = document.createElement("table");
      makeTable.style.width = "25em";
      makeTable.style.margin = "auto";
      makeTable.className = "roles_entry";
      makeTable.dataset.role = parsingRaw[i].id;
      makeTable.id = "roles_"+ parsingRaw[i].id;
      var makeHead = document.createElement("tr");
      var headCells_rank = document.createElement("th");
      var headCells_idol = document.createElement("th");
      var headCells_score = document.createElement("th");
      headCells_rank.setAttribute("width","15%");
      headCells_idol.setAttribute("width","60%");
      headCells_score.setAttribute("width","25%");

      headCells_rank.appendChild(document.createTextNode("순위"));
      headCells_idol.appendChild(document.createTextNode("아이돌명"));
      headCells_score.appendChild(document.createTextNode("득표수"));
      
      makeHead.appendChild(headCells_rank);
      makeHead.appendChild(headCells_idol);
      makeHead.appendChild(headCells_score);

      makeTable.appendChild(makeHead);
      displayField.appendChild(makeTable);

      var roleRanks = parsingRaw[i].data[0];
      for(j=0;j<10;j++){
       var listRow = document.createElement("tr");
       listRow.className = "idolentry_"+roleRanks[j].idol_id;
       if(roleRanks[j].rank == 1){listRow.style.fontWeight = "bold";}
       var listCells_rank = document.createElement("td");
       var listCells_idol = document.createElement("td");
       var listCells_score = document.createElement("td");
       listCells_rank.appendChild(document.createTextNode(roleRanks[j].rank+"위"));
       listCells_idol.appendChild(document.createTextNode(idolNames[roleRanks[j].idol_id]));
       listCells_score.appendChild(document.createTextNode(roleRanks[j].score));
       listRow.appendChild(listCells_rank);
       listRow.appendChild(listCells_idol);
       listRow.appendChild(listCells_score);
       makeTable.appendChild(listRow);
      }
      // 경합 여부 조사
      var diffScore_a = (roleRanks[1].score / roleRanks[0].score); // 1위, 2위 득표수 비율
      var diffScore_b = (roleRanks[2].score / roleRanks[1].score); // 2위, 3위 득표수 비율
      var contending_a = 0;
      var contending_b = 0;

      if(diffScore_a > 0.9 && diffScore_a < 0.98){contending_a = 1;}
      else if(diffScore_a > 0.98){contending_a = 2;}
      if(diffScore_b > 0.9 && diffScore_b < 0.98){contending_b = 1;}
      else if(diffScore_b > 0.98){contending_b = 2;}

      var contendingDisplay = document.createElement("span");
      contendingDisplay.style.fontSize = "0.85em";
      contendingDisplay.id = "contending_"+parsingRaw[i].id;
      var contendingText = "1위-2위: ";
      switch(contending_a){
       case 0: contendingText += "1위 우세"; break;
       case 1: contendingText += "박빙"; break;
       case 2: contendingText += "초박빙"; break;
       default: contendingText += "계산불가"; break;
      }
      contendingText += ", 2위-3위: ";
      switch(contending_b){
       case 0: contendingText += "2위 우세"; break;
       case 1: contendingText += "박빙"; break;
       case 2: contendingText += "초박빙"; break;
       default: contendingText += "계산불가"; break;
      }
      contendingDisplay.appendChild(document.createTextNode(contendingText));
      displayField.appendChild(contendingDisplay);
     }

     var selectedIdol = document.getElementById("idol_select").value;
     var $roleList = $(document.getElementsByClassName("roles_entry"));
     var $overall = $(document.getElementById("electionstats_display"));
     var foundRoles = 0;
     if(selectedIdol == 0){document.getElementById("result_idol").innerHTML = "";}
     else{document.getElementById("result_idol").innerHTML = "선택한 아이돌명: "+ idolNames[selectedIdol];}

     $roleList.each(function(){
      var $roleID = $(this).attr("data-role");
      var $entriesFound = $(this).children("tr[class^=idolentry]");
      $overall.children("#roletitle_"+$roleID).css("display","");
      $overall.children("#roles_"+$roleID).css("display","");
      $overall.children("#lastupdate_"+$roleID).css("display","");
      $overall.children("#contending_"+$roleID).css("display","");
      $entriesFound.css("display","none");
      if(selectedIdol == 0){$entriesFound.css("display","");return;}
      var $idolFound = $(this).children("tr.idolentry_"+selectedIdol);
      $idolFound.css("display","");
      if($idolFound.length != 0){foundRoles += $idolFound.length;}
      if($entriesFound.find(":visible").length == 0){
       $overall.children("#roletitle_"+$roleID).css("display","none");
       $overall.children("#roles_"+$roleID).css("display","none");
       $overall.children("#lastupdate_"+$roleID).css("display","none");
       $overall.children("#contending_"+$roleID).css("display","none");
      }
     });

     if(selectedIdol != 0 && foundRoles == 0){document.getElementById("no_results").innerHTML = "해당 아이돌에 대한 검색 결과가 없습니다. (검색조건: 각 배역별 10위 이내)";}
     else{document.getElementById("no_results").innerHTML = "";}
    }else{
     alert("오류가 발생하였습니다. ["+_r.status+"]");
     document.getElementById("no_results").innerHTML = "갱신 도중 오류가 발생하였습니다. ["+_r.status+"] 잠시후 다시 시도해보세요.";
    }
   }
  };
 _r.open("GET",endpointURI);
 _r.send();
 },
 showIdolEntry : function(){
  var selectedIdol = document.getElementById("idol_select").value;
  var $roleList = $(document.getElementsByClassName("roles_entry"));
  var $overall = $(document.getElementById("electionstats_display"));
  var foundRoles = 0;
  if(selectedIdol == 0){document.getElementById("result_idol").innerHTML = "";}
  else{document.getElementById("result_idol").innerHTML = "선택한 아이돌명: "+ idolNames[selectedIdol];}

  if(stampNow < stampStart_currentElection){
   document.getElementById("no_results").innerHTML = "아직 투표 기간이 시작되지 않았습니다!!";
   $(document.getElementById("loading_stats")).css("display","none");
   return false;
  }
  if(stampNow > stampEnd_currentElection){
   document.getElementById("no_results").innerHTML = "투표 기간이 이미 종료되었습니다.";
   $(document.getElementById("loading_stats")).css("display","none");
   return false;
  }

  $roleList.each(function(){
   var $roleID = $(this).attr("data-role");
   var $entriesFound = $(this).children("tr[class^=idolentry]");
   $overall.children("#roletitle_"+$roleID).css("display","");
   $overall.children("#roles_"+$roleID).css("display","");
   $overall.children("#lastupdate_"+$roleID).css("display","");
   $overall.children("#contending_"+$roleID).css("display","");
   $entriesFound.css("display","none");
   if(selectedIdol == 0){$entriesFound.css("display","");return;}
   var $idolFound = $(this).children("tr.idolentry_"+selectedIdol);
   $idolFound.css("display","");
   if($idolFound.length != 0){foundRoles += $idolFound.length;}
   if($entriesFound.find(":visible").length == 0){
    $overall.children("#roletitle_"+$roleID).css("display","none");
    $overall.children("#roles_"+$roleID).css("display","none");
    $overall.children("#lastupdate_"+$roleID).css("display","none");
    $overall.children("#contending_"+$roleID).css("display","none");
   }
  });

  if(selectedIdol != 0 && foundRoles == 0){document.getElementById("no_results").innerHTML = "해당 아이돌에 대한 검색 결과가 없습니다. (검색조건: 각 배역별 10위 이내)";}
  else{document.getElementById("no_results").innerHTML = "";}
 },
 viewIdolBoard : function(){
  var selectedIdol = document.getElementById("idol_select").value;
  if(selectedIdol == 0){alert("아이돌을 선택해주세요!!");return;}
  window.open("https://mltd.matsurihi.me/election/board/"+selectedIdol,"_blank");
 },
 moveToIdolInfo : function(){
  var selectedIdol = document.getElementById("idol_select").value;
  if(selectedIdol == 0){alert("아이돌을 선택해주세요!!");return;}
  window.open("http://imas.gamedbs.jp/mlth/chara/show/"+selectedIdol,"_blank");
 },
 pageInit : function(){
  for(i=1;i<=52;i++){
   var idolEntry = document.createElement("option");
   idolEntry.value = i;
   idolEntry.text = idolNames[i];
   document.getElementById("idol_select").add(idolEntry);
  }

  this.getStatsByRole();
  setInterval(function(){showDateTime();},390);
 }
};
