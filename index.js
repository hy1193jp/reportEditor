function handleDownload() {
  const regexp1 = /^(.*行　)/gm
  var gno = document.querySelector("#gno");
  var content = document.querySelector("#rtxt");
  var lines = content.value.split(/\r\n|\r|\n/);

  result = '';
  for ( var i=0; i < lines.length; i++ ) {
    if ( lines[ i ].match(regexp1) ) {
      result += lines[ i ].replace(regexp1, '') + "\r\n";
    }
  }

  var blob = new Blob([ result ], { "type" : "text/plain" });
  if (window.navigator.msSaveBlob) { 
    window.navigator.msSaveBlob(blob, gno.vaule + ".txt"); 
    // msSaveOrOpenBlobの場合はファイルを保存せずに開ける
    // window.navigator.msSaveOrOpenBlob(blob, "test.txt"); 
  } else {
    var e = document.getElementById("download");
    e.href = window.URL.createObjectURL( blob );
    e.download = gno.value + ".txt";
  }
  content.value = '';
}
