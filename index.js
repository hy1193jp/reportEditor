function handleDownload() {
  const regexp1 = /^(.*行　)/gm
  var content = document.querySelector("#rtxt").value;
  var gno = document.querySelector("#gno").value;
  console.log(gno);
  content = content.replace(regexp1, '');
  var blob = new Blob([ content ], { "type" : "text/plain" });

  if (window.navigator.msSaveBlob) { 
    window.navigator.msSaveBlob(blob, gno + ".txt"); 
    // msSaveOrOpenBlobの場合はファイルを保存せずに開ける
    //window.navigator.msSaveOrOpenBlob(blob, "test.txt"); 
 } else {
    var e = document.getElementById("download");
	e.href = window.URL.createObjectURL( blob );
	e.download = gno + ".txt";
 }
}
