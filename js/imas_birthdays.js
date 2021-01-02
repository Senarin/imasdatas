
var imasStartDate = {
allstars : { year : 2005, date : 726 },
dearlystars : { year : 2009, date : 917 },
cinderella : { year : 2011, date : 1128 },
million : { year : 2013, date : 227 },
sidem : { year : 2014, date : 717 },
shinycolors : { year : 2018, date : 424 }
};

var weekdayNames = new Array("일","월","화","수","목","금","토");
var as_prefix = "as_birthday";

function dummyaction(){return;}

// 시리즈 런칭일 기념
function notify_series_birthday(){
 var dateNow = new Date();
 var yearNow = dateNow.getFullYear();
 var monthNow = dateNow.getMonth()+1;
 var dayNow = dateNow.getDate();
 
 var dateChecksum = (monthNow * 100)+dayNow;
 
 if(dateChecksum == imasStartDate.allstars.date){
  var anniversaryCount = (yearNow - imasStartDate.allstars.year);
  document.getElementById("series_birthday").innerHTML = "오늘은 아이마스 시리즈가 시작된 지 "+anniversaryCount+"년이 되는 날입니다. 축하해주세요!!";
 }else if(dateChecksum == imasStartDate.dearlystars.date){
  var anniversaryCount = (yearNow - imasStartDate.dearlystars.year);
  document.getElementById("series_birthday").innerHTML = "오늘은 디어리 스타즈(DS)가 발매된 지 "+anniversaryCount+"년이 되는 날입니다. 축하해주세요!!";
 }else if(dateChecksum == imasStartDate.cinderella.date){
  var anniversaryCount = (yearNow - imasStartDate.cinderella.year);
  document.getElementById("series_birthday").innerHTML = "오늘은 신데렐라 걸즈가 런칭된지 "+anniversaryCount+"년이 되는 날입니다. 축하해주세요!!";
 }else if(dateChecksum == imasStartDate.million.date){
  var anniversaryCount = (yearNow - imasStartDate.million.year);
  document.getElementById("series_birthday").innerHTML = "오늘은 밀리언 라이브가 런칭된지 "+anniversaryCount+"년이 되는 날입니다. 축하해주세요!!";
 }else if(dateChecksum == imasStartDate.sidem.date){
  var anniversaryCount = (yearNow - imasStartDate.sidem.year);
  document.getElementById("series_birthday").innerHTML = "오늘은 SideM(315 프로덕션)이 런칭된지 "+anniversaryCount+"년이 되는 날입니다. 축하해주세요!!";
 }else if(dateChecksum == imasStartDate.shinycolors.date){
  var anniversaryCount = (yearNow - imasStartDate.shinycolors.year);
  if(anniversaryCount == 0){document.getElementById("series_birthday").innerHTML = "샤이니 컬러즈(283 프로덕션)가 오늘 자로 런칭되었습니다. 축하해주세요!!";}
  else{document.getElementById("series_birthday").innerHTML = "오늘은 샤이니 컬러즈(283 프로덕션)가 런칭된지 "+anniversaryCount+"년이 되는 날입니다. 축하해주세요!!";}
 }
}


// 올스타즈, 디어리 스타즈
function birthdayhighlight_765876(){
 var dateNow = new Date();
 var monthNow = dateNow.getMonth()+1;
 var dayNow = dateNow.getDate();
 
 var matchCounter = document.getElementById("birthday_count");
 var matchCount = new Number(matchCounter.value);
 
 var quarterNow = parseInt(Math.floor((monthNow-1) / 3)+1);
 
 document.getElementById("as_quarter_"+quarterNow).style.backgroundColor = "#FFFFEE";
 
 var idTextA = "as_birthday_"+((monthNow * 100)+dayNow);
 var matchingIdolA = document.getElementById(idTextA);
 
 var idTextD = "ds_birthday_"+((monthNow * 100)+dayNow);
 var matchingIdolD = document.getElementById(idTextD);
 
 for(d=1;d<((monthNow * 100)+dayNow);d++){
  var nonMatchingA = document.getElementById("as_birthday_"+d);
  var nonMatchingD = document.getElementById("ds_birthday_"+d);
  if(nonMatchingA != null){nonMatchingA.style.backgroundColor = "";}
  if(nonMatchingD != null){nonMatchingD.style.backgroundColor = "";}
 }
 
 var nonBirthday = document.getElementById("non_birthday");
 
 if(matchingIdolA != null){
  matchCounter.value = new Number(matchCount+1);
  nonBirthday.style.display = "none";
  matchingIdolA.style.backgroundColor = "#EEEEAA";
  document.getElementById("birthtoday_765").style.display = "block";
  document.getElementById("birthtoday_765").innerHTML = matchingIdolA.childNodes[0].innerText+" (765 올스타즈)";
 }
 if(matchingIdolD != null){
  matchCounter.value = new Number(matchCount+1);
  matchingIdolD.style.backgroundColor = "#EEEEAA";
  document.getElementById("birthtoday_876").style.display = "block";
  if(((monthNow * 100)+dayNow) == 915){document.getElementById("birthtoday_876").innerHTML = matchingIdolD.getElementsByTagName("span")[0].innerText+" (디어리 스타즈, 315 프로덕션)";} // 아키즈키 료에 대한 예외처리
  else{document.getElementById("birthtoday_876").innerHTML = matchingIdolD.getElementsByTagName("span")[0].innerText+" (디어리 스타즈)";}
 }
}


// 본가 아이돌에 배정된 타입 (신데렐라 걸즈 소셜 게임)
var as_types_cute = new Array(325,403,829,1010);
var as_types_cool = new Array(121,225,623,719);
var as_types_passion = new Array(505,522,1123,1224);

// 신데렐라 걸즈
function birthdayhighlight_cg(){
 var dateNow = new Date();
 var monthNow = dateNow.getMonth()+1;
 var dayNow = dateNow.getDate();
 
 var matchCounter = document.getElementById("birthday_count");
 var matchCount = new Number(matchCounter.value);
 
 document.getElementById("cg_month_"+monthNow).style.backgroundColor = "#FFFFEE";
 
 var idText = "cg_birthday_"+((monthNow * 100)+dayNow);
 var matchingIdol = document.getElementById(idText);
 
 for(d=1;d<((monthNow * 100)+dayNow);d++){
  var nonMatching = document.getElementById("cg_birthday_"+d);
  if(nonMatching != null){nonMatching.style.backgroundColor = "";}
 }
 
 var nonBirthday = document.getElementById("non_birthday");
 
 if(matchingIdol != null){
  matchCounter.value = new Number(matchCount+1);
  nonBirthday.style.display = "none";
  matchingIdol.style.backgroundColor = "#EEEEAA";
  var matchingIdols = "";
  for(i=0;i<matchingIdol.getElementsByTagName("span").length;i++){
   if(typeof matchingIdol.getElementsByTagName("span")[i] != "undefined"){matchingIdols += matchingIdol.getElementsByTagName("span")[i].innerText+", ";}
  }
  matchingIdols = matchingIdols.slice(0,-2);
  document.getElementById("birthtoday_cg").style.display = "block";
  document.getElementById("birthtoday_cg").innerHTML = matchingIdols+" (신데렐라 걸즈)";
 }
}

function closestbirthdays_cg(){
 var dateNow = new Date();
 var monthNow = dateNow.getMonth()+1;
 var dayNow = dateNow.getDate();

 var idolList = new Array();
 var idolDates = new Array();
 var idolIndex = 0;

 for(d=1;d<=1231;d++){
  var idText = "cg_birthday_"+d;
  if(document.getElementById(idText) != null){
   idolList[d] = document.getElementById(idText);
   idolDates[idolIndex] = d;
   idolIndex++;
  }else{continue;}
 }

 var dateChecksum = ((monthNow * 100)+dayNow);
 var i = 0;
 while(idolDates[++i] < dateChecksum);

 var nearest = --i;
 var numIdols = idolDates.length-1;

 var matchingIdols_prev = "";
 var matchingIdols_next = "";

 if(dateChecksum <= idolDates[0]){
  for(x=0;x<idolList[idolDates[numIdols]].getElementsByTagName("span").length;x++){matchingIdols_prev += idolList[idolDates[numIdols]].getElementsByTagName("span")[x].innerText+", ";}
 }else{
  for(x=0;x<idolList[idolDates[nearest]].getElementsByTagName("span").length;x++){
   if(typeof idolList[idolDates[nearest]].getElementsByTagName("span")[x] != "undefined"){matchingIdols_prev += idolList[idolDates[nearest]].getElementsByTagName("span")[x].innerText+", ";}
  }
 }
 
 if(dateChecksum <= idolDates[0]){var prevBirthday = new Array(idolDates[numIdols],matchingIdols_prev.slice(0,-2));}
 else{var prevBirthday = new Array(idolDates[nearest],matchingIdols_prev.slice(0,-2));}
 
 if(dateChecksum >= idolDates[numIdols]){var n = 0;}
 else if(dateChecksum == idolDates[0] || idolDates.indexOf(dateChecksum) == -1){var n = nearest+1;}
 else{var n = nearest+2;}

 for(x=0;x<idolList[idolDates[n]].getElementsByTagName("span").length;x++){
  if(typeof idolList[idolDates[n]].getElementsByTagName("span")[x] != "undefined"){matchingIdols_next += idolList[idolDates[n]].getElementsByTagName("span")[x].innerText+", ";}
 }
 var nextBirthday = new Array(idolDates[n],matchingIdols_next.slice(0,-2));

 document.getElementById("prevbirthday_cg").innerHTML = prevBirthday[1]+" ("+parseInt(prevBirthday[0] / 100)+"월 "+(prevBirthday[0] % 100)+"일)";
 document.getElementById("nextbirthday_cg").innerHTML = nextBirthday[1]+" ("+parseInt(nextBirthday[0] / 100)+"월 "+(nextBirthday[0] % 100)+"일)";;
}


function makeCGTypeTable_AS(){
 var as_text_cute = "";
 var as_text_cool = "";
 var as_text_passion = "";
 for(d=0;d<=1231;d++){
  var matchingIdolA = document.getElementById(as_prefix+"_"+d);
  if(matchingIdolA == null){continue;}
  if(as_types_cute.indexOf(d) != -1){
   as_text_cute = matchingIdolA.getElementsByTagName("span")[0].innerText;
   var idolNameItem0 = document.createElement("li");
   idolNameItem0.appendChild(document.createTextNode(as_text_cute));
   document.getElementById("table_cgtype_ascute").appendChild(idolNameItem0);
  }else if(as_types_cool.indexOf(d) != -1){
   as_text_cool = matchingIdolA.getElementsByTagName("span")[0].innerText;
   var idolNameItem1 = document.createElement("li");
   idolNameItem1.appendChild(document.createTextNode(as_text_cool));
   document.getElementById("table_cgtype_ascool").appendChild(idolNameItem1);
  }else if(as_types_passion.indexOf(d) != -1){
   as_text_passion = matchingIdolA.getElementsByTagName("span")[0].innerText;
   var idolNameItem2 = document.createElement("li");
   idolNameItem2.appendChild(document.createTextNode(as_text_passion));
   document.getElementById("table_cgtype_aspassion").appendChild(idolNameItem2);
  }
 }
}

function showCGTypeTable_AS(){
 var isHidden = document.getElementById("astype_cg").style.display;
 if(isHidden == "none"){
  document.getElementById("astype_cg").style.display = "block";
  document.getElementById("show_cgtype_table").style.display = "none";
  document.getElementById("hide_cgtype_table").style.display = "inline";
 }else{
  document.getElementById("astype_cg").style.display = "none";
  document.getElementById("show_cgtype_table").style.display = "inline";
  document.getElementById("hide_cgtype_table").style.display = "none";
 }
}

// 본가 아이돌에 배정된 타입 (소셜 게임)
var as_types_vocal = new Array(121,225,403,505,719);
var as_types_dance = new Array(325,829,1010);
var as_types_visual = new Array(522,623,1123,1224);

// 본가 아이돌에 배정된 타입 (시어터 데이즈)
var as_types_princess = new Array(403,829,1010,1224);
var as_types_fairy = new Array(121,225,505,623);
var as_types_angel = new Array(325,522,719,1123);

// 밀리언 라이브
function birthdayhighlight_ml(){
 var dateNow = new Date();
 var monthNow = dateNow.getMonth()+1;
 var dayNow = dateNow.getDate();
 
 var matchCounter = document.getElementById("birthday_count");
 var matchCount = new Number(matchCounter.value);
 
 var quarterNow = parseInt(Math.floor((monthNow-1) / 3)+1);
 
 document.getElementById("ml_quarter_"+quarterNow).style.backgroundColor = "#FFFFEE";
 
 var idText = "ml_birthday_"+((monthNow * 100)+dayNow);
 var matchingIdol = document.getElementById(idText);
 
 for(d=1;d<((monthNow * 100)+dayNow);d++){
  var nonMatching = document.getElementById("ml_birthday_"+d);
  if(nonMatching != null){nonMatching.style.backgroundColor = "";}
 }
 
 var nonBirthday = document.getElementById("non_birthday");
 
 if(matchingIdol != null){
  matchCounter.value = new Number(matchCount+1);
  nonBirthday.style.display = "none";
  matchingIdol.style.backgroundColor = "#EEEEAA";
  document.getElementById("birthtoday_million").style.display = "block";
  document.getElementById("birthtoday_million").innerHTML = matchingIdol.getElementsByTagName("span")[0].innerText+" (밀리언 라이브)";
 }
}

// 765 밀리언 올스타즈
function closestbirthdays_765(){
 var dateNow = new Date();
 var monthNow = dateNow.getMonth()+1;
 var dayNow = dateNow.getDate();

 var idolList = new Array();
 var idolDates = new Array();
 var idolIndex = 0;

 for(d=1;d<=1231;d++){
  var idTextA = "as_birthday_"+d;
  var idTextM = "ml_birthday_"+d;
  if(document.getElementById(idTextM) != null){
   idolList[d] = new Array(document.getElementById(idTextM),"ML");
   idolDates[idolIndex] = d;
   idolIndex++;
  }else if(document.getElementById(idTextA) != null){
   idolList[d] = new Array(document.getElementById(idTextA),"AS");
   idolDates[idolIndex] = d;
   idolIndex++;
  }else{continue;}
 }

 var dateChecksum = ((monthNow * 100)+dayNow);
 var i = 0;
 while(idolDates[++i] < dateChecksum);

 var nearest = --i;
 var numIdols = idolDates.length-1;
 
 if(dateChecksum <= idolDates[0]){
  var birthdayGroupPrev = idolList[idolDates[numIdols]][1];
  var prevBirthday = new Array(idolDates[numIdols],idolList[idolDates[numIdols]][0].getElementsByTagName("span")[0]);
 }else{
  var birthdayGroupPrev = idolList[idolDates[nearest]][1];
  var prevBirthday = new Array(idolDates[nearest],idolList[idolDates[nearest]][0].getElementsByTagName("span")[0]);
 }

 if(dateChecksum >= idolDates[numIdols]){var n = 0;}
 else if(dateChecksum == idolDates[0] || idolDates.indexOf(dateChecksum) == -1){var n = nearest+1;}
 else{var n = nearest+2;}

 console.log(dateChecksum+" // "+n);
 console.log(idolDates);
 
 var birthdayGroupNext = idolList[idolDates[n]][1];
 var nextBirthday = new Array(idolDates[n],idolList[idolDates[n]][0].getElementsByTagName("span")[0]);

 document.getElementById("prevbirthday_765").innerHTML = "["+birthdayGroupPrev+"] "+prevBirthday[1].innerText+" ("+parseInt(prevBirthday[0] / 100)+"월 "+(prevBirthday[0] % 100)+"일)";
 document.getElementById("nextbirthday_765").innerHTML = "["+birthdayGroupNext+"] "+nextBirthday[1].innerText+" ("+parseInt(nextBirthday[0] / 100)+"월 "+(nextBirthday[0] % 100)+"일)";;
}

function makeMLTypeTable(){
 var loadtable = new XMLHttpRequest();

 loadtable.onreadystatechange = function(){
  if(loadtable.readyState == 4){
   if(loadtable.status == 200){
    var datas = JSON.parse(loadtable.responseText);
    for(n=1;n<=52;n++){
     if(n >= 14){
      var idolNameText = document.getElementById("millionstars_"+n).innerText;
      var idolNameItem = document.createElement("li");
      idolNameItem.appendChild(document.createTextNode(idolNameText));
      if(datas[n].type_g != -1){document.getElementById("table_mltype_"+datas[n].type_g+"_"+datas[n].type_t).appendChild(idolNameItem);}
      else{document.getElementById("table_mltype_others_"+datas[n].type_t).appendChild(idolNameItem);}
     }else{
      if(n != 12){var idolNameText = document.getElementById("allstars_"+n).innerText;}
      else{continue;}
      var idolNameItem = document.createElement("li");
      idolNameItem.appendChild(document.createTextNode(idolNameText));
      idolNameItem.style.fontWeight = "bold";
      document.getElementById("table_mltype_"+datas[n].type_g+"_"+datas[n].type_t).appendChild(idolNameItem);
     }
    }
   }
  }
 };
 loadtable.open("GET","./embedpages/imasml_types.json",true);
 loadtable.send();
}

function showMLTypeTable(){
 var isHidden = document.getElementById("typecomp_ml").style.display;
 if(isHidden == "none"){
  document.getElementById("typecomp_ml").style.display = "block";
  document.getElementById("show_mltype_table").style.display = "none";
  document.getElementById("hide_mltype_table").style.display = "inline";
 }else{
  document.getElementById("typecomp_ml").style.display = "none";
  document.getElementById("show_mltype_table").style.display = "inline";
  document.getElementById("hide_mltype_table").style.display = "none";
 }
}


// SideM
function birthdayhighlight_315(){
 var dateNow = new Date();
 var monthNow = dateNow.getMonth()+1;
 var dayNow = dateNow.getDate();
 
 var matchCounter = document.getElementById("birthday_count");
 var matchCount = new Number(matchCounter.value);
 
 var quarterNow = parseInt(Math.floor((monthNow-1) / 3)+1);
 
 document.getElementById("sm_quarter_"+quarterNow).style.backgroundColor = "#FFFFEE";
 
 var idText = "sm_birthday_"+((monthNow * 100)+dayNow);
 var matchingIdol = document.getElementById(idText);
 
 for(d=1;d<((monthNow * 100)+dayNow);d++){
  var nonMatching = document.getElementById("sm_birthday_"+d);
  if(nonMatching != null){nonMatching.style.backgroundColor = "";}
 }
 
 var nonBirthday = document.getElementById("non_birthday");
 
 if(matchingIdol != null){
  matchCounter.value = new Number(matchCount+1);
  nonBirthday.style.display = "none";
  matchingIdol.style.backgroundColor = "#EEEEAA";
  var matchingIdols = "";
  for(i=0;i<matchingIdol.getElementsByTagName("span").length;i++){
   if(typeof matchingIdol.getElementsByTagName("span")[i] != "undefined"){matchingIdols += matchingIdol.getElementsByTagName("span")[i].innerText+", ";}
  }
  matchingIdols = matchingIdols.slice(0,-2);
  document.getElementById("birthtoday_315").style.display = "block";
  if(((monthNow * 100)+dayNow) != 915){document.getElementById("birthtoday_315").innerHTML = matchingIdols+" (315 프로덕션)";} // 아키즈키 료에 대한 예외처리
 }
}

function closestbirthdays_315(){
 var dateNow = new Date();
 var monthNow = dateNow.getMonth()+1;
 var dayNow = dateNow.getDate();

 var idolList = new Array();
 var idolDates = new Array();
 var idolIndex = 0;

 for(d=1;d<=1231;d++){
  var idText = "sm_birthday_"+d;
  if(document.getElementById(idText) != null){
   idolList[d] = document.getElementById(idText);
   idolDates[idolIndex] = d;
   idolIndex++;
  }else{continue;}
 }

 var dateChecksum = ((monthNow * 100)+dayNow);
 var i = 0;
 while(idolDates[++i] < dateChecksum);

 var nearest = --i;
 var numIdols = idolDates.length-1;

 var matchingIdols_prev = "";
 var matchingIdols_next = "";

 if(dateChecksum <= idolDates[0]){
  for(x=0;x<idolList[idolDates[numIdols]].getElementsByTagName("span").length;x++){matchingIdols_prev += idolList[idolDates[numIdols]].getElementsByTagName("span")[x].innerText+", ";}
 }else{
  for(x=0;x<idolList[idolDates[nearest]].getElementsByTagName("span").length;x++){
   if(typeof idolList[idolDates[nearest]].getElementsByTagName("span")[x] != "undefined"){matchingIdols_prev += idolList[idolDates[nearest]].getElementsByTagName("span")[x].innerText+", ";}
  }
 }
 
 if(dateChecksum <= idolDates[0]){var prevBirthday = new Array(idolDates[numIdols],matchingIdols_prev.slice(0,-2));}
 else{var prevBirthday = new Array(idolDates[nearest],matchingIdols_prev.slice(0,-2));}


 if(dateChecksum >= idolDates[numIdols]){var n = 0;}
 else if(dateChecksum == idolDates[0] || idolDates.indexOf(dateChecksum) == -1){var n = nearest+1;}
 else{var n = nearest+2;}

 for(x=0;x<idolList[idolDates[n]].getElementsByTagName("span").length;x++){
  if(typeof idolList[idolDates[n]].getElementsByTagName("span")[x] != "undefined"){matchingIdols_next += idolList[idolDates[n]].getElementsByTagName("span")[x].innerText+", ";}
 }
 var nextBirthday = new Array(idolDates[n],matchingIdols_next.slice(0,-2));

 document.getElementById("prevbirthday_315").innerHTML = prevBirthday[1]+" ("+parseInt(prevBirthday[0] / 100)+"월 "+(prevBirthday[0] % 100)+"일)";
 document.getElementById("nextbirthday_315").innerHTML = nextBirthday[1]+" ("+parseInt(nextBirthday[0] / 100)+"월 "+(nextBirthday[0] % 100)+"일)";;
}


// 샤이니 컬러즈
function birthdayhighlight_sc(){
 var dateNow = new Date();
 var monthNow = dateNow.getMonth()+1;
 var dayNow = dateNow.getDate();
 
 var matchCounter = document.getElementById("birthday_count");
 var matchCount = new Number(matchCounter.value);
 
 var quarterNow = parseInt(Math.floor((monthNow-1) / 3)+1);
 
 document.getElementById("sc_quarter_"+quarterNow).style.backgroundColor = "#FFFFEE";
 
 var idText = "sc_birthday_"+((monthNow * 100)+dayNow);
 var matchingIdol = document.getElementById(idText);
 
 for(d=1;d<((monthNow * 100)+dayNow);d++){
  var nonMatching = document.getElementById("sc_birthday_"+d);
  if(nonMatching != null){nonMatching.style.backgroundColor = "";}
 }
 
 var nonBirthday = document.getElementById("non_birthday");
 
 if(matchingIdol != null){
  matchCounter.value = new Number(matchCount+1);
  nonBirthday.style.display = "none";
  matchingIdol.style.backgroundColor = "#EEEEAA";
  var matchingIdols = "";
  for(i=0;i<matchingIdol.getElementsByTagName("span").length;i++){
   if(typeof matchingIdol.getElementsByTagName("span")[i] != "undefined"){matchingIdols += matchingIdol.getElementsByTagName("span")[i].innerText+", ";}
  }
  matchingIdols = matchingIdols.slice(0,-2);
  document.getElementById("birthtoday_283").style.display = "block";
  document.getElementById("birthtoday_283").innerHTML = matchingIdols+" (샤이니 컬러즈)";
 }
}

function closestbirthdays_sc(){
 var dateNow = new Date();
 var monthNow = dateNow.getMonth()+1;
 var dayNow = dateNow.getDate();

 var idolList = new Array();
 var idolDates = new Array();
 var idolIndex = 0;

 for(d=1;d<=1231;d++){
  var idText = "sc_birthday_"+d;
  if(document.getElementById(idText) != null){
   idolList[d] = document.getElementById(idText);
   idolDates[idolIndex] = d;
   idolIndex++;
  }else{continue;}
 }

 var dateChecksum = ((monthNow * 100)+dayNow);
 var i = 0;
 while(idolDates[++i] < dateChecksum);

 var nearest = --i;
 var numIdols = idolDates.length-1;

 var matchingIdols_prev = "";
 var matchingIdols_next = "";

 if(dateChecksum <= idolDates[0]){
  for(x=0;x<idolList[idolDates[numIdols]].getElementsByTagName("span").length;x++){matchingIdols_prev += idolList[idolDates[numIdols]].getElementsByTagName("span")[x].innerText+", ";}
 }else{
  for(x=0;x<idolList[idolDates[nearest]].getElementsByTagName("span").length;x++){
   if(typeof idolList[idolDates[nearest]].getElementsByTagName("span")[x] != "undefined"){matchingIdols_prev += idolList[idolDates[nearest]].getElementsByTagName("span")[x].innerText+", ";}
  }
 } 

 if(dateChecksum <= idolDates[0]){var prevBirthday = new Array(idolDates[numIdols],matchingIdols_prev.slice(0,-2));}
 else{var prevBirthday = new Array(idolDates[nearest],matchingIdols_prev.slice(0,-2));}

 if(dateChecksum >= idolDates[numIdols]){var n = 0;}
 else if(dateChecksum == idolDates[0] || idolDates.indexOf(dateChecksum) == -1){var n = nearest+1;}
 else{var n = nearest+2;}

 for(x=0;x<idolList[idolDates[n]].getElementsByTagName("span").length;x++){
  if(typeof idolList[idolDates[n]].getElementsByTagName("span")[x] != "undefined"){matchingIdols_next += idolList[idolDates[n]].getElementsByTagName("span")[x].innerText+", ";}
 }
 var nextBirthday = new Array(idolDates[n],matchingIdols_next.slice(0,-2));

 document.getElementById("prevbirthday_283").innerHTML = prevBirthday[1]+" ("+parseInt(prevBirthday[0] / 100)+"월 "+(prevBirthday[0] % 100)+"일)";
 document.getElementById("nextbirthday_283").innerHTML = nextBirthday[1]+" ("+parseInt(nextBirthday[0] / 100)+"월 "+(nextBirthday[0] % 100)+"일)";;
}

// 시리즈 내 기타 캐릭터들
function birthdayhighlight_etc(){
 var dateNow = new Date();
 var monthNow = dateNow.getMonth()+1;
 var dayNow = dateNow.getDate();
 
 var matchCounter = document.getElementById("birthday_count");
 var matchCount = new Number(matchCounter.value);
 
 var quarterNow = parseInt(Math.floor((monthNow-1) / 3)+1);
 
 document.getElementById("etc_quarter_"+quarterNow).style.backgroundColor = "#FFFFEE";
 
 var idText = "etc_birthday_"+((monthNow * 100)+dayNow);
 var matchingChara = document.getElementById(idText);
 
 for(d=1;d<((monthNow * 100)+dayNow);d++){
  var nonMatching = document.getElementById("etc_birthday_"+d);
  if(nonMatching != null){nonMatching.style.backgroundColor = "";}
 }
 
 var nonBirthday = document.getElementById("non_birthday");
 
 if(matchingChara != null){
  matchCounter.value = new Number(matchCount+1);
  nonBirthday.style.display = "none";
  matchingChara.style.backgroundColor = "#EEEEAA";
  var matchingCharas = "";
  for(i=0;i<matchingChara.getElementsByTagName("span").length;i++){
   if(typeof matchingChara.getElementsByTagName("span")[i] != "undefined"){matchingCharas += matchingChara.getElementsByTagName("span")[i].innerText+", ";}
  }
  matchingCharas = matchingCharas.slice(0,-2);
  document.getElementById("birthtoday_etc").style.display = "block";
  document.getElementById("birthtoday_etc").innerHTML = matchingCharas+" (기타)";
 }
}



function toggleBirthdayInfo(){
 if(document.getElementById("birthday_display_01").style.display != "none"){
  document.getElementById("birthday_display_02").style.display = "inline";
  document.getElementById("birthday_display_01").style.display = "none";
 }else{
  document.getElementById("birthday_display_02").style.display = "none";
  document.getElementById("birthday_display_01").style.display = "inline";
 }
 
}

function toggleDBLink(iBirthday){
 var linkContents = document.getElementById("idollinks_"+iBirthday);
 
 if(linkContents == null){return;}
 
 if(linkContents.style.display != "block"){linkContents.style.display = "block";}
 else if(linkContents.style.display == "block"){linkContents.style.display = "none";}
}

function reloadBirthday(){
 document.getElementById("series_birthday").innerHTML = "";
 document.getElementById("birthtoday_765").innerHTML = "";
 document.getElementById("birthtoday_876").innerHTML = "";
 document.getElementById("birthtoday_cg").innerHTML = "";
 document.getElementById("birthtoday_million").innerHTML = "";
 document.getElementById("birthtoday_315").innerHTML = "";
 document.getElementById("birthtoday_283").innerHTML = "";
 document.getElementById("birthtoday_etc").innerHTML = "";

 document.getElementById("birthday_count").value = 0;
 
 notify_series_birthday();
 
 birthdayhighlight_765876();
 birthdayhighlight_cg();
 birthdayhighlight_ml();
 birthdayhighlight_315();
 birthdayhighlight_sc();
 birthdayhighlight_etc();
 
 closestbirthdays_765();
 closestbirthdays_cg();
 closestbirthdays_315();
 closestbirthdays_sc();
 
 var nonBirthday = document.getElementById("non_birthday");
 var matchCount = new Number(document.getElementById("birthday_count").value);
 
 if(matchCount == 0){nonBirthday.style.display = "block";}
}

function reloadDayChange(){
 var dateNow = new Date();
 var hoursNow = dateNow.getHours();
 var minsNow = dateNow.getMinutes();
 var secsNow = dateNow.getSeconds();
 
 if(hoursNow == 0 && minsNow == 0 && secsNow == 0){reloadBirthday();}
}

function dispDateNow(){
 var dateNow = new Date();
 var yearNow = dateNow.getFullYear();
 var monthNow = dateNow.getMonth()+1;
 var dayNow = dateNow.getDate();
 var weekdayNow = dateNow.getDay();
 var dispHourNow = dateNow.getHours();
 var dispMinsNow = dateNow.getMinutes();
 var dispSecsNow = dateNow.getSeconds();

 var timezoneNow = dateNow.getTimezoneOffset();
 var tzHours = (-1) * Math.floor(timezoneNow / 60);
 var tzMins = Math.abs(timezoneNow) % 60;

 var tzDisp = "UTC"+((timezoneNow < 0) ? "+" : "-")+tzHours+":"+((tzMins < 10) ? "0"+tzMins : tzMins);

 
 var dispDateTime = "현재 시간 : "+yearNow+"년 "+monthNow+"월 "+dayNow+"일 ("+weekdayNames[weekdayNow]+"요일) "+((dispHourNow < 10) ? "0"+dispHourNow : dispHourNow)+":"+((dispMinsNow < 10) ? "0"+dispMinsNow : dispMinsNow)+":"+((dispSecsNow < 10) ? "0"+dispSecsNow : dispSecsNow)+" ("+tzDisp+")";
 
 document.getElementById("date_now").innerHTML = dispDateTime;
 document.getElementById("birthday_date_01").innerHTML = monthNow+"월 "+dayNow+"일";
 document.getElementById("birthday_date_02").innerHTML = monthNow+"월 "+dayNow+"일";

}



function birthdayDateInit(){
 setInterval("dispDateNow();",346);
 setInterval("reloadDayChange();",876);
}

function highlightingInit(){
 notify_series_birthday();
 load_theatertypes_setting();
 birthdayhighlight_765876();
 birthdayhighlight_cg();
 birthdayhighlight_ml();
 birthdayhighlight_315();
 birthdayhighlight_sc();
 birthdayhighlight_etc();

 closestbirthdays_765();
 closestbirthdays_cg();
 closestbirthdays_315();
 closestbirthdays_sc();
 
 var nonBirthday = document.getElementById("non_birthday");
 var matchCount = new Number(document.getElementById("birthday_count").value);
 
 if(matchCount == 0){nonBirthday.style.display = "block";}
}

function initPage(){
 birthdayDateInit();
 highlightingInit();
 makeMLTypeTable();
 makeCGTypeTable_AS();
 append_315pro_unitname();
}

if((navigator.appName == "Netscape" && navigator.userAgent.search("Trident") != -1) || (navigator.userAgent.indexOf("msie") != -1)){
console.log("이야기(STORY)는 끝나지 않습니다. 감동은 끝나지 않습니다. 노랫소리 또한 멈추지 않습니다.");
console.log("꿈은 다른 사람에게 맡기지 마십시오. 그것은 무엇과도 못바꿀 권리입니다.\n틀에 박힌 환상을 버리고 새 지평을 향해 달려나갑시다. 지켜야 할 것은 과거가 아닙니다.");
console.log("밀리언 라이브의 애니메이션화를 축하드립니다!!");
}else{
console.log("%c 이야기(STORY)는 끝나지 않습니다. 감동은 끝나지 않습니다. 노랫소리 또한 멈추지 않습니다.","color:#0000FF;font-weight:bold;");
console.log("%c 꿈은 다른 사람에게 맡기지 마십시오. 그것은 무엇과도 못바꿀 권리입니다.\n틀에 박힌 환상을 버리고 새 지평을 향해 달려나갑시다. 지켜야 할 것은 과거가 아닙니다.","color:#008FFF;font-weight:bold;");
console.log("%c 밀리언 라이브의 애니메이션화를 축하드립니다!!","color:#EA5B76;font-weight:bold;");
}
