;(function () {
    var btn =  document.getElementsByClassName('ajax-example')[0],
    btn2 =  document.getElementsByClassName('ajax-btn2')[0],
        demo = document.getElementById("demo");

    btn.addEventListener('click', function () {
        loadAjax("GET", "https://api.privatbank.ua/p24api/pubinfo?exchange&json&coursid=11")
    });
    btn2.addEventListener('click', function () {
        loadAjax("GET", "https://api.privatbank.ua/p24api/pubinfo?exchange&coursid=11")
    });

    function loadAjax(method, url) {
        var xhttp = new XMLHttpRequest();
        xhttp.onreadystatechange = function () {
            if(this.readyState == 4 && this.status == 200){
                if(this.responseXML == null) {
                    console.log("json");
                    demo.innerHTML = this.response;
                    document.getElementById("xmlTable").innerHTML =  "<tr><td></td></tr>";


                } else {
                    console.log("xml");
                    xmlReader(this);
                }

                demo.innerHTML = this.response;
            }
        };
        xhttp.open(method, url, true);
        xhttp.send();
    }

    function xmlReader(xml) {
        let i,
            xmlDoc = xml.responseXML,
            table = "<tr><td>ccy</td><td>base_ccy</td><td>buy</td><td>sale</td></tr>",
            x = xmlDoc.getElementsByTagName("row");

        let attributes = x[0].getElementsByTagName('exchangerate')[0].attributes;
            table += "<tr>";
            for (let z = 0; z < attributes.length; z++) {
                table += "<td>" +  attributes[z].nodeValue + "</td>";
            }
            table += "</tr>";
        for(i = 0; i < x.length; i++) {
            let attributes = x[i].getElementsByTagName('exchangerate')[0].attributes;


            table += "<tr>";
            for (let z = 0; z < attributes.length; z++) {
                table += "<td>" +  attributes[z].nodeValue + "</td>";
            }
            table += "</tr>";

        }

        document.getElementById("xmlTable").innerHTML = table;
    }

}());