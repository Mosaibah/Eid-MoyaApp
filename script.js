jQuery(document).ready(function () {
    viewport = document.querySelector("meta[name=viewport]");
    function downloadURI(uri, name) {
         var link = document.createElement("a");
         link.download = name;
         link.href = uri;
         document.body.appendChild(link);
         link.click();
         document.body.removeChild(link);
         delete link;
        }
     function setCompany(comapny) {
         jQuery(".companyImage").attr("src", comapny.imageUrl);
     }
     var fonFamilyClasses = {
         ar: "Tahoma;",
         en: "Tahoma;",
        };
        var companies = [
            {
                id: 1,
             name: "ٌEid",
             imageUrl: "post.png",
            },
        ];
     setCompany(companies[0]);
jQuery("#nameInput").on("input", function () {
 var arRegex = /[\u0600-\u06FF]/;
 var inputText = jQuery(this).val();
 if (inputText) {
     if (arRegex.test(inputText)) {
   jQuery("#result1 span").addClass(fonFamilyClasses.ar);
   jQuery("#result1 span").removeClass(fonFamilyClasses.en);
} else {
    jQuery("#result1 span").addClass(fonFamilyClasses.en);
    jQuery("#result1 span").removeClass(fonFamilyClasses.ar);
}
}
jQuery("#result1 span").text(inputText);
});
jQuery("#name2Input").on("input", function () {
var arRegex = /[\u0600-\u06FF]/;
var inputText = jQuery(this).val();
if (inputText) {
    if (arRegex.test(inputText)) {
        jQuery("#result2 span").addClass(fonFamilyClasses.ar);
        jQuery("#result2 span").removeClass(fonFamilyClasses.en);
    } else {
        jQuery("#result2 span").addClass(fonFamilyClasses.en);
        jQuery("#result2 span").removeClass(fonFamilyClasses.ar);
    }
}
jQuery("#result2 span").text(inputText);
});

jQuery("#btn-Convert-Html2Image").on("click", function () {

var element = jQuery(".boxContainer")[0];
var resultSpan =  jQuery(element).find('span');
for (const a of resultSpan ) {
    if (a.textContent=="Name here") {
        jQuery(a).text('');
    }
}
//var fontSize = jQuery(element).find("#result").css("fontSize");
//var bottomText = jQuery(element).find(".result1").css("bottom");
//jQuery(element).css("width", "100%");

jQuery(element).find(".resultContainer1").css("bottom", "3%");
jQuery(element).find(".resultContainer2").css("bottom", "13%");

viewport.setAttribute('content', '');
html2canvas(element, {
 onrendered: function (canvas) {
   var imgageData = canvas.toDataURL("image/png");
   var newData = imgageData.replace(
       /^data:image\/png/,
       "data:application/octet-stream"
       );
       downloadURI(newData, "Eid-MoyaApp.png");
       jQuery(".inputsContainer").remove();
       viewport.setAttribute('content', 'width=device-width, initial-scale=1, maximum-scale=1, viewport-fit=cover');
       //location.reload();
    },
});
});
})