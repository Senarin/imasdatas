var prefix = "ml_birthday";

// 밀리언 라이브 소셜 게임 기준 속성
var imas_gree_vocal = new Array(220,531,607,628,704,818,914,926,1005,1111,1229);
var imas_gree_dance = new Array(108,127,212,322,330,429,517,612,723,810,920,1026,1121,1203);
var imas_gree_visual = new Array(118,204,301,318,415,424,730,827,902,1021,1106,1216);
var imas_gree_special = new Array(327,529);

// 시어터 데이즈 기준 속성
var theaterdays_princess = new Array(628,1005,322,204,318,1229,607,810,1216,108,818,212,330);
var theaterdays_fairy = new Array(914,415,301,1111,118,723,1021,127,1121,920,1106,926,529);
var theaterdays_angel = new Array(730,1026,220,1203,531,704,612,429,902,424,827,517,327);

// 밀리언 스타즈 아이돌 이미지 컬러 코드
var millionstars_idolcolors = {
 14 : "ea5b76",
 15 : "6495cf",
 16 : "fed552",
 17 : "92cfbb",
 18 : "9bce92",
 19 : "58a6dc",
 20 : "454341",
 21 : "5abfb7",
 22 : "ed90ba",
 23 : "eb613f",
 24 : "7e6ca8",
 25 : "fff03c",
 26 : "c7b83c",
 27 : "7f6575",
 28 : "b54461",
 29 : "e9739b",
 30 : "f7e78e",
 31 : "bee3e3",
 32 : "554171",
 33 : "afa690",
 34 : "e25a9b",
 35 : "d1342c",
 36 : "f5ad3b",
 37 : "788bc5",
 38 : "f19257",
 39 : "f1becb",
 40 : "ee762e",
 41 : "7278a8",
 42 : "d7a96b",
 43 : "eceb70",
 44 : "99b7dc",
 45 : "b63b40",
 46 : "f19591",
 47 : "aeb49c",
 48 : "6bb6b0",
 49 : "efb864",
 50 : "d7385f",
 51 : "b5b1e1",
 52 : "152b65"
};

var setting_name = "theatertype";

function toggletypes_million(){
 if(document.getElementById("type_idolunique").checked == true){
  for(n=14;n<=52;n++){
   var matchingIdol = document.getElementById("millionstars_"+n);
   if(matchingIdol == null){continue;}
   else{
    matchingIdol.className = "";
    matchingIdol.style.color = "#"+ millionstars_idolcolors[n];
   }
  }
  localStorage.setItem(setting_name,2);
 }else if(document.getElementById("type_theaterdays").checked == true){
  for(d=0;d<=1231;d++){
   var matchingIdol = document.getElementById(prefix+"_"+d);
   if(matchingIdol == null){continue;}
   matchingIdol.getElementsByTagName("span")[0].removeAttribute("style");
   if(theaterdays_princess.indexOf(d) != -1){matchingIdol.getElementsByTagName("span")[0].className = "princess765";}
   else if(theaterdays_fairy.indexOf(d) != -1){matchingIdol.getElementsByTagName("span")[0].className = "fairy765";}
   else if(theaterdays_angel.indexOf(d) != -1){matchingIdol.getElementsByTagName("span")[0].className = "angel765";}
  }
  localStorage.setItem(setting_name,1);
 }else if(document.getElementById("type_legacy").checked == true){
  for(p=0;p<=1231;p++){
   var matchingIdol = document.getElementById(prefix+"_"+p);
   if(matchingIdol == null){continue;}
   matchingIdol.getElementsByTagName("span")[0].removeAttribute("style");
   if(imas_gree_vocal.indexOf(p) != -1){matchingIdol.getElementsByTagName("span")[0].className = "mlvocal";}
   else if(imas_gree_dance.indexOf(p) != -1){matchingIdol.getElementsByTagName("span")[0].className = "mldance";}
   else if(imas_gree_visual.indexOf(p) != -1){matchingIdol.getElementsByTagName("span")[0].className = "mlvisual";}
   else if(imas_gree_special.indexOf(p) != -1){matchingIdol.getElementsByTagName("span")[0].className = "mlspecial";}
  }
  localStorage.setItem(setting_name,0);
 }
}

function load_theatertypes_setting(){
 if(typeof(Storage) == "undefined"){return false;}
 var setting_value = new Number(localStorage.getItem(setting_name));
 if(setting_value == 0){document.getElementById("type_legacy").checked = "checked";}
 else if(setting_value == 1){document.getElementById("type_theaterdays").checked = "checked";}
 else if(setting_value == 2){document.getElementById("type_idolunique").checked = "checked";}
 toggletypes_million();
}


var imas_315pro_units_b = {
 0 : [303,214,420], // Jupiter
 1 : [223,924,602], // DRAMATIC STARS
 2 : [1122,412,102,618,330], // High✕Joker
 3 : [202,801,322], // Beit
 4 : [707], // W (더블)
 5 : [113,901,808], // S.E.M
 6 : [824,1112,703], // 彩 (사이)
 7 : [505,307,1224], // FRAME
 8 : [819,1009,117,1212,1108], // Cafe Parade
 9 : [404,722], // 신속일혼
 10 : [402,617], // Altessimo
 11 : [422,325,210], // 모후모후엔
 12 : [1013,915,520], // F-LAGS
 13 : [1221,914,514], // THE 코가도
 14 : [1128,1031,1011] // Legenders
};

var imas_315pro_units_n = new Array("Jupiter","DRAMATIC STARS","High✕Joker","Beit","W (더블)",
"S.E.M","彩 (사이)","FRAME","Cafe Parade","신속일혼",
"Altessimo","모후모후엔","F-LAGS","THE 虎牙道 (코가도)","Legenders");

function append_315pro_unitname(){
 for(d=0;d<=1231;d++){
  var matchingIdol = document.getElementById("sm_birthday_"+d);
  if(matchingIdol == null){continue;}
  for(u=0;u<=14;u++){
   if(imas_315pro_units_b[u].indexOf(d) != -1){
    var a = matchingIdol.getElementsByTagName("span").length;
    for(i=0;i<a;i++){matchingIdol.getElementsByTagName("span")[i].title = "소속 유닛: "+imas_315pro_units_n[u];}
   }
  }
 }
}




