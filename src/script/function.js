console.log("qwertyu")

function link(e) {
    // debugger
    // e.preventdefault()
    console.log("link");

    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {

    };
    var data = document.forms.namedItem("formdata");


    var form1 = new FormData(data);


    form1.append("firstname", document.getElementById("firstname").value);
    form1.append("lastname", document.getElementById("lastname").value);
    form1.append("dob", document.getElementById("dob").value);
    form1.append("university", document.getElementById("university").value);
    form1.append("degree", document.getElementById("dob").value);
    form1.append("stream", document.getElementById("university").value);
    form1.append("yearofpassing", document.getElementById("yearofpassing").value);
    for (var pair of form1.entries()) {
        console.log(pair[0] + ',' + pair[1]);
    }
    xhttp.open("POST", "/insert", true);
    xhttp.send(form1);

}