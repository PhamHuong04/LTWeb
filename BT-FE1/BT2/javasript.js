function sum() {
    var a = document.getElementById('a').value;
    var b = document.getElementById('b').value;
    var result =0;
    a = Number(a);
    b = Number(b);

    if (isNaN(a) || isNaN(b)) {
        alert("Bạn phải nhập vào hai số");
        return false;
    }

    result = parseInt(a) + parseInt(b);
    document.getElementById('result').value = result;
}