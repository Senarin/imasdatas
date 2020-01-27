
var cginfo_urlbase = "https://imas.gamedbs.jp/cg/image_sp/card/xs";

var cg_portraitid_orig = {
 1 : "2af54b80c9be9ffde43904089069d877",
 2 : "b7999fc204ef28323b6b656f66d46c42",
 3 : "8f88bb5ffa40b4935ef04257ba4ba0d1",
 4 : "e44e7611282f6c57fea4ab3fc18d6519",
 5 : "0dabb79ff64691111a0abae2ffed01ce",
 6 : "1f62eb063030ed5083b0e7826245d3af",
 7 : "edd3438bd612a333a76edaea0ff73fe7",
 8 : "3a15a87af190354ae89fca368b35b69e"
};


var cg_portraitid_dere = {
 1 : "9c90f735aa3431dd6c1d78ed0fd2e4e1",
 2 : "85fc0f386df052f15d27adcb09354ebc",
 3 : "78dc475f1775fa007c1a659db07a383a",
 4 : "a7886ce9ac3c5eafd81f8b14cee2d2fc",
 5 : "2e4a0459415d8d8b8600bb80a777d85b",
 6 : "1ca766129358cfadaa734d780b7c2da4",
 7 : "8569f522a0287b4b1f4032225795aaf7",
 8 : "c0dc8d84eeca3eca56e127f92ac84ac1"
};

function switch_portait_cg(numdere){
 var portrait_url = document.getElementById("deretop_"+numdere).src;
 if(portrait_url.indexOf(cg_portraitid_orig[numdere]) != -1){document.getElementById("deretop_"+numdere).src = cginfo_urlbase+"/"+cg_portraitid_dere[numdere]+".jpg";}
 else if(portrait_url.indexOf(cg_portraitid_dere[numdere]) != -1){document.getElementById("deretop_"+numdere).src = cginfo_urlbase+"/"+cg_portraitid_orig[numdere]+".jpg";}
 document.getElementById("deretop_"+numdere).style.width="48px";
 document.getElementById("deretop_"+numdere).style.height="auto";
 document.getElementById("deretop_"+numdere).style.cursor="pointer";
}
