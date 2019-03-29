let xml = new XMLHttpRequest();
let url ="https://data.sfgov.org/api/views/yitu-d5am/rows.json?accessType=DOWNLOAD";



 xml.onreadystatechange = function(){
     if(xml.status === 200 && xml.readyState === 4){
         let text = JSON.parse(this.responseText);

         for (let i = 0; i <text.data.length ; i++) {


                let currentData = text.data[i];


                if(currentData[10]=== "Golden Gate Bridge"){
                    document.getElementById("result").innerHTML += currentData[8] + currentData[9] + currentData[12]
                    + "<br>"+"<br>";
                }
         }
     }
 };



 
xml.open("GET",url,true);
 xml.send();
