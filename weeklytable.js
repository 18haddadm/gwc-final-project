function myFunction() {
    var day = prompt("Enter the day you would like to complete the task", "monday");
    var time = prompt("Enter the time you would like to complete the task", "5:00");
    var task = prompt("Enter the task you would like ot complete", "write essay");
    if (day == ("monday")){
      document.getElementById("monday").innerHTML = document.getElementById("monday").innerHTML + "<br>" + "on" + " " + day + " " + "at" + " " + time + " " + task;
    }
    if (day == ("tuesday")){
      document.getElementById("tuesday").innerHTML = document.getElementById("tuesday").innerHTML + "<br>" + "on" + " " + day + " " + "at" + " " + time + " " + task;
    }
    if (day == ("wednesday")){
      document.getElementById("wednesday").innerHTML = document.getElementById("wednesday").innerHTML + "<br>" + "on" + " " + day + " " + "at" + " " + time + " " + task;
    }
    if (day == ("thursday")){
      document.getElementById("thursday").innerHTML = document.getElementById("thursday").innerHTML + "<br>" + "on" + " " + day + " " + "at" + " " + time + " " + task;
    }
    if (day == ("friday")){
      document.getElementById("friday").innerHTML = document.getElementById("friday").innerHTML + "<br>" + "on" + " " + day + " " + "at" + " " + time + " " + task;
    }
    if (day == ("saturday")){
      document.getElementById("saturday").innerHTML = document.getElementById("saturday").innerHTML + "<br>" + "on" + " " + day + " " + "at" + " " + time + " " + task;
    }
    if (day == ("sunday")){
      document.getElementById("sunday").innerHTML = document.getElementById("sunday").innerHTML + "<br>" + "on" + " " + day + " " + "at" + " " + time + " " + task;
    }
}
