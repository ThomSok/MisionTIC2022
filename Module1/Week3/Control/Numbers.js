function numberAmount() {
    let num = Number(document.getElementById("Read").value);
    let amount = num.toString().length;

    document.getElementById("Amount").innerHTML = amount;
}

function minorNumber() {
    let num1 = Number(document.getElementById("NumComp1").value);
    let num2 = Number(document.getElementById("NumComp2").value);
    let num3 = Number(document.getElementById("NumComp3").value);
    let minor;

    if (num1 < num2 && num1 < num3) {
        minor = num1;
        document.getElementById("MinorAns").innerHTML = minor;
    } else if (num2 < num1 && num2 < num3) {
        minor = num2;
        document.getElementById("MinorAns").innerHTML = minor;
    } else if (num3 < num1 && num3 < num2) {
        minor = num3;
        document.getElementById("MinorAns").innerHTML = minor;
    }
}

function upDown() {
    let num1 = Number(document.getElementById("NumUpDown1").value);
    let num2 = Number(document.getElementById("NumUpDown2").value);
    let num3 = Number(document.getElementById("NumUpDown3").value);

    if (num1 < num2 && num2 < num3) {
        document.getElementById("UpDownAns").innerHTML = "ascendente";
    } else if (num1 > num2 && num2 > num3) {
        document.getElementById("UpDownAns").innerHTML = "descendente";
    }
    else {
        document.getElementById("UpDownAns").innerHTML = "desorganizada";
    }
}

function athletesInfo() {
    let list = document.getElementById("SelectGender");
    let selected = list.options[list.selectedIndex].value;
    let age = document.getElementById("Age").value;
    let minutes = document.getElementById("Minutes").value;

    switch (key) {
        case value:
            
            break;
    
        default:
            break;
    }
}