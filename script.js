const monthNames = ["January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
];
var weekday = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];

var random;
var dict = [
    31,
    29,
    31,
    30,
    31,
    30,
    30,
    31,
    30,
    31,
    30,
    31

];


function randomExcluded(start, end, excluded) {
    var n = excluded
    while (n == excluded)
        n = Math.floor((Math.random() * (end - start + 1) + start));
    return n;
}

function hours12(date) {
    return (date + 11) % 12 + 1;
}
  random =random = (Math.floor(Math.random() * 4) + 1);;
    var today = new Date();
    if (random == 1) {
        random = (Math.floor(Math.random() * 2) + 1);
        var time = hours12(today.getHours()) + ":" + ('0' + today.getMinutes()).slice(-2)
        var time1 = (Math.floor(Math.random() * 12) + 1) + ":" + ('0' + Math.floor(Math.random() * 60)).slice(-2)
        var words = ['am', 'pm'];
        var word = words[Math.floor(Math.random() * words.length)];
        if (random == 1) {
            if (time1 != time) {
                document.getElementById("p").innerHTML = "Today is not " + time1 + word;
            } else {
                var time = hours12(today.getHours()) + 1 + ":" + ('0' + today.getMinutes()).slice(-2)
                document.getElementById("p").innerHTML = "Today is not " + t + word;
            }
        } else if (random == 2) {
            document.getElementById("p").innerHTML = "Today is not " + randomExcluded(1, 12, time) + word;
        }

    } else if (random == 2) {
        random = (Math.floor(Math.random() * 2) + 1);
        var moonth = (Math.floor(Math.random() * 11));
        var l = today.getMonth();
        if (random == 1) {
            document.getElementById("p").innerHTML = "Today is not " + monthNames[randomExcluded(0, 11, l)];
        } else if (random == 2) {

            document.getElementById("p").innerHTML = "Today is not " + monthNames[randomExcluded(0, 11, l)] + " " + randomExcluded(0, dict[l], today.getDate());
        }


    } else if(random == 3){
		   var words = ['bce', 'ce'];
        var word = words[Math.floor(Math.random() * words.length)];
		   document.getElementById("p").innerHTML = "Today is not " +randomExcluded(0, 9999, today.getFullYear()) + " " + word;
	} else if(random == 4){
		  
  document.getElementById("p").innerHTML = "Today is not " + weekday[randomExcluded(0,6,today.getDay())];
		
	}
setInterval(function() {
    random =random = (Math.floor(Math.random() * 4) + 1);;
    var today = new Date();
    if (random == 1) {
        random = (Math.floor(Math.random() * 2) + 1);
        var time = hours12(today.getHours()) + ":" + ('0' + today.getMinutes()).slice(-2)
        var time1 = (Math.floor(Math.random() * 12) + 1) + ":" + ('0' + Math.floor(Math.random() * 60)).slice(-2)
        var words = ['am', 'pm'];
        var word = words[Math.floor(Math.random() * words.length)];
        if (random == 1) {
            if (time1 != time) {
                document.getElementById("p").innerHTML = "Today is not " + time1 + word;
            } else {
                var time = hours12(today.getHours()) + 1 + ":" + ('0' + today.getMinutes()).slice(-2)
                document.getElementById("p").innerHTML = "Today is not " + t + word;
            }
        } else if (random == 2) {
            document.getElementById("p").innerHTML = "Today is not " + randomExcluded(1, 12, time) + word;
        }

    } else if (random == 2) {
        random = (Math.floor(Math.random() * 2) + 1);
        var moonth = (Math.floor(Math.random() * 11));
        var l = today.getMonth();
        if (random == 1) {
            document.getElementById("p").innerHTML = "Today is not " + monthNames[randomExcluded(0, 11, l)];
        } else if (random == 2) {

            document.getElementById("p").innerHTML = "Today is not " + monthNames[randomExcluded(0, 11, l)] + " " + randomExcluded(0, dict[l], today.getDate());
        }


    } else if(random == 3){
		   var words = ['bce', 'ce'];
        var word = words[Math.floor(Math.random() * words.length)];
		   document.getElementById("p").innerHTML = "Today is not " +randomExcluded(0, 9999, today.getFullYear()) + " " + word;
	} else if(random == 4){
		  
  document.getElementById("p").innerHTML = "Today is not " + weekday[randomExcluded(0,6,today.getDay())];
		
	}

}, 4000)