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
