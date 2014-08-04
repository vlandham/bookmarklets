javascript: (function() {
    (function() {
        x = window.open();
        x.document.write('<ht' + 'ml><he' + 'ad><title>Display Cookies</title></he' + 'ad><bo' + 'dy>');
        if (document.cookie == '') {
            x.document.write('No Cookies Found');
        } else {
            thisCookie = document.cookie.split('; ');
            x.document.write('<ta' + 'ble>');
            nordstrom = thisCookie.filter(function(d) {
                return d.match(/nordstrom=/g);
            });
            for (i = 0; i < nordstrom.length; i++) {
                nordstrom[i] = nordstrom[i].replace(/nordstrom=/g, "");
                sections = nordstrom[i].split("&");
                sections.forEach(function(section) {
                    x.document.write('<tr' + '>');
                    key_value = section.split("=");
                    x.document.write('<td' + '>' + key_value[0] + '</td' + '>' + '<td' + '>' + key_value[1] + '</td' + '>');
                    x.document.write('</tr' + '>');
                    if(key_value[0] == "shopperid") {
                      x.document.write('<tr' + '>');
                      x.document.write('<td' + '>' + key_value[0] +"_lower" + '</td' + '>' + '<td' + '>' + key_value[1].toLowerCase() + '</td' + '>');
                      x.document.write('</tr' + '>');
                    }
                });
            }
        }
        x.document.write('</ta' + 'ble>');
        x.document.write('</bo' + 'dy></ht' + 'ml>');
        x.document.close();
    })()
})();
