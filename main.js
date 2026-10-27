document.querySelector("#myform").addEventListener("submit", function (event) {
    var works = document.querySelector("#works");
    var result = document.querySelector("#result");

    if (works.value == "") {
        alert("Enter Value")
        event.preventDefault();
    } else {
        var myLi = document.createElement("li");
        myLi.innerHTML = works.value;
        result.append(myLi);
        works.value = "";
        event.preventDefault();
    }
})


