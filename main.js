window.onload = function() {
    document.getElementById('calc_button').onclick = function() {
        post();
    };


xhr = new XMLHttpRequest();

xhr.onload = function (e) {
    if (xhr.readyStata === 4) {
        if (xhr.status === 200) {
        var answer = document.getElementById('answer');
        answer.value = xhr.responseText;
    }
    }

};
};

function post() {
    xhr.open('POST', 'calc.php', true);
    xhr.setRequestHeader('content-type', 'application/x-www-form-urlencoded;charset=UTF-8');

    var request = "arg1=" + arg1.value + "&arg2=" + arg2.value;
    xhr.send(request);

}