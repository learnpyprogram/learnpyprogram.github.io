function runboi(inpt, out) {
    function outf(text) {
        var mypre = document.getElementById(out);
        mypre.innerHTML = mypre.innerHTML + text;
    }

    function builtinRead(x)
    {
        if (Sk.builtinFiles === undefined || Sk.builtinFiles["files"][x] === undefined)
            throw "File not found: '" + x + "'";
        return Sk.builtinFiles["files"][x];
    }

    function runner() {
        var prog = document.getElementById(inpt).value;
        var mypre = document.getElementById(out);
        mypre.innerHTML = '';
        Sk.configure({output:outf,
            read: builtinRead
                });
        try {
            Sk.importMainWithBody("<stdin>",false,prog);
        } catch (e) {
            alert(e);
        }
    }
    runner();
}
function run1() {
    runboi("yourcode", "output");
}
const txHeight = 16;
const tx = document.getElementsByTagName("textarea");
for (let i = 0; i < tx.length; i++) {
  if (tx[i].value == '') {
    tx[i].setAttribute("style", "height:" + txHeight + "px;overflow-y:hidden;");
  } else {
    tx[i].setAttribute("style", "height:" + (tx[i].scrollHeight) + "px;overflow-y:hidden;");
  }
  tx[i].addEventListener("input", OnInput, false);
}

function OnInput(e) {
  this.style.height = "auto";
  this.style.height = (this.scrollHeight) + "px";
}