$(function () {

    //JavaSCript
    const http = new XMLHttpRequest();

    http.onreadystatechange = function () {
        if (this.readyState === 4 || this.status !== 200) {
            //console.log(this.status + ": " + this.statusText);
            document.getElementById('result').innerHTML =
            this.responseText
        }
        // else {
        //     console.log('Tinas ERROR ' + this.status + ": " + this.statusText);
        //     //window.location = "404.html";
        // }
        
    }
    http.open("GET", "test.txt", true);
    http.send();

});