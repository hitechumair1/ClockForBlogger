# ClockForBlogger
Visit Our Website For Demo See Bio

See Image For Result

![image](https://github.com/hitechumair1/ClockForBlogger/assets/144042982/224f25a7-444b-4d70-b9ca-d7980f97e305)

#How to Apply Code

HTML Complete Code:

```
<div align="center" id="clock" onload="currentTime()">
      <div class="greeting">
        <h1 id="greet"></h1>
      </div>

      <div class="time">
        <b id="hours"></b>
        <b id="colontime">:</b>
        <b id="minutes"></b>
        <b id="colontime">:</b>
        <b id="seconds"></b>
        <b id="ampm"></b>
      </div>
      <h3></h3>
      <h2 class="welcometext">Welcome to Hi-Tech Umair
      <hr width="265px" class="linee" />
    
      <span class="belowlinetext">Here You Can get Best Tech News , Tips and Codes</span>
    <hr class="line22" width="183px" />
    </h2></div>
    <style>
        #greet{
            text-shadow: yellow 1px 1px 25px;
        }
.linee{
    background-color: orange;
    height: 1px;
box-shadow: black 1px 1px 12px;
}
#hours{
    color: green;
    text-shadow: #0000ff 0px 1px 25px ;
}
#minutes{
    color: blue;
    text-shadow: blue 0px 1px 25px ;
}
#seconds{
    color:green    ;
    text-shadow: blue 0px 1px 25px ;
}
#ampm{
    text-shadow: yellow 1px 1px 55px;
}
.time{
    font-size: 25px;
}
.welcometext{
 text-shadow: yellow 1px 1px 15px;   
    font-weight: bold;
animation: wel;
animation-direction: alternate-reverse;
animation-duration: 3s;
animation-iteration-count: infinite;

}
.belowlinetext{
    font-size: 9px;
    
}
.line22{
    animation: line;
animation-direction: alternate-reverse;
animation-duration: 3s;
transition: 1s;
animation-iteration-count: infinite;
background-color: green;
height: 1px;
}
#colontime{
animation: blink;
animation-direction: alternate-reverse;
animation-duration: 0.7s;
animation-delay: 0s;
animation-iteration-count: infinite;
}


@keyframes blink{
    0%{
        opacity: 0; 
       
    }

        100%{

    opacity: 1;
}
}
@keyframes line{
0%{
width: 0px;
background-color: green;
box-shadow: yellow 1px 2px 16px;
}
100%{
width: 183px;
background-color: orange;
box-shadow: black 1px 2px 16px;

}
}

    </style>

    <script>
      function currentTime() {
        let date = new Date();
        let hh = date.getHours();
        let mm = date.getMinutes();
        let ss = date.getSeconds();
        let session = "AM";

        var greet;

        if (hh === 0) {
          hh = 12;
        } else if (hh > 12) {
          hh = hh - 12;
          session = "PM";
        } else if (hh > 0 && hh <= 6) {
          greet = "Early Morning";
        } else if (hh > 6 && hh <= 12) {
          greet = "Good Morning";
        } else if (hh > 12 && hh <= 16) {
          greet = "Good Afternon";
        } else if (hh > 16 && hh <= 21) {
          greet = "Good Evening";
        } else if (hh > 21 && hh <= 24) {
          greet = "Good Night";
        } else {
          console.log("error");
        }

        hh = hh < 10 ? "0" + hh : hh;
        mm = mm < 10 ? "0" + mm : mm;
        ss = ss < 10 ? "0" + ss : ss;
        var hhh = hh;
        var mmm = mm;
        var sss = ss;

        document.getElementById("hours").innerText = hhh;
        document.getElementById("minutes").innerText = mmm;
        document.getElementById("seconds").innerText = sss;
        document.getElementById("ampm").innerText = session;
        document.getElementById("greet").innerText = greet;

        let t = setTimeout(function () {
          currentTime();
        }, 1000);
      }

      currentTime();
    </script>
```

<a src="https://www.youtube.com/c/hitechumair/videos">Subscribe on YouTube</a>



