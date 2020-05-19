function getBrowser(){
    var uaStr0 = navigator.userAgent;
    var devPlatform = "";
    var browserName = "";
   
    if(uaStr0.indexOf("Windows") != -1){
     if(uaStr0.indexOf("NT 10.0") != -1){devPlatform = "Windows 10";}
     else if(uaStr0.indexOf("NT 6.3") != -1){devPlatform = "Windows 8.1";}
     else if(uaStr0.indexOf("NT 6.2") != -1){devPlatform = "Windows 8";}
     else if(uaStr0.indexOf("NT 6.1") != -1){devPlatform = "Windows 7";}
     else if(uaStr0.indexOf("NT 6.0") != -1){devPlatform = "Windows Vista";}
     else{devPlatform = "구버전 Windows";}
    }else if(uaStr0.indexOf("Macintosh") != -1){devPlatform = "macOS";}
    else if(uaStr0.indexOf("Linux") != -1){
     if(uaStr0.indexOf("Android") != -1){devPlatform = "Android 계열";}
     else{devPlatform = "Linux 계열";}
    }else if(uaStr0.indexOf("iPhone") != -1){devPlatform = "iOS (iPhone)";}
    else if(uaStr0.indexOf("iPad") != -1){devPlatform = "iOS/iPad OS (iPad)";}
    else{devPlatform = "기타 기기";}
   
    var browserPattern = /(MSIE|Trident|(?!Gecko.+)Firefox|(?!AppleWebKit.+Chrome.+)Safari(?!.+Edge)|(?!AppleWebKit.+)Chrome(?!.+Edge)|(?!AppleWebKit.+Chrome.+Safari.+)Edge|AppleWebKit(?!.+Chrome|.+Safari)|Gecko(?!.+Firefox))(?: |\/)([\d\.apre]+)/;
    browserName = browserPattern.exec(uaStr0).slice(1,3).join(" ");
   
    console.log("OS 종류: "+devPlatform+", 브라우저: "+browserName);
   }