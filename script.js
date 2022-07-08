const imageName = document.getElementById("imageName")
const imageJob = document.getElementById("imageJob")

function UpdateName(){
    var name = document.getElementById("inputName").value;
    imageName.innerHTML = name
}

function UpdateJob(){
  var job = document.getElementById("inputJob").value;
  imageJob.innerHTML = job
}

function download(url){
    var a = $("<a style='display:none' id='js-downloder'>")
    .attr("href", url)
    .attr("download", "test.png")
    .appendTo("body");

    a[0].click();

    a.remove();
}

function saveCapture(element) {
html2canvas(element).then(function(canvas) {
    download(canvas.toDataURL("image/png"));
})
}

$('#btnDownload').click(function(){
var element = document.querySelector("#capture");
saveCapture(element)
})