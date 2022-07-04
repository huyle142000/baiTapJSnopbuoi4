/**
 * BT1
 * input:
 * Giá trị nhập vào của 3 số
 * Xử lý :Cho người dùng nhập vào 3 số nguyên. Viết chương trình xuất 3 số theo thứ tự tăng dần
 * 
 */
var sort = document.getElementById('sort');
sort.addEventListener('click', () => {
    //input
    var number1 = Number(document.getElementById('takeNumber1').value);
    var number2 = Number(document.getElementById('takeNumber2').value);
    var number3 = Number(document.getElementById('takeNumber3').value);

    //output
    var output = '';
    //progress
    if (number1 < number2 && number2 < number3) {
        output = number1 + '<' + number2 + '<' + number3;
    } else if (number1 < number3 && number3 < number2) {
        output = number1 + '<' + number3 + '<' + number2;
    } else if (number2 < number1 && number1 < number3) {
        output = number2 + '<' + number1 + '<' + number3;
    } else if (number2 < number3 && number3 < number1) {
        output = number2 + '<' + number3 + '<' + number1;
    } else if (number3 < number1 && number1 < number2) {
        output = number3 + '<' + number1 + '<' + number2;
    } else if (number3 < number2 && number2 < number1) {
        output = number3 + '<' + number2 + '<' + number1;
    } else if (number3 === number1 === number2) {
        output = number3 + '=' + number2 + '=' + number1;

    }
    var resultsort = document.getElementById('resultsort');
    resultsort.innerHTML = 'Sắp xếp tăng dần : ' + output;


});
//BT2:Viết chương trình “Chào hỏi” các thành viên trong gia đình
var member = document.getElementById('member');
member.addEventListener('click', () => {
    //input
    var members = Number(document.getElementById('members').value);

    //output
    var output = '';
    //progress
    if (members === 1) {
        output = '<div class="text-warning">Xin chào :Ba</div>';
    } else if (members === 2) {
        output = '<div class="text-success">Xin chào :Mẹ </div>';
    } else if (members === 3) {
        output = '<div class="text-primary">Xin chào :Anh</div>';
    } else if (members === 4) {
        output = '<div class="text-info">Xin chào :Chị</div>';
    } else if (members === 0) {
        output = '<div class="text-danger">Người lạ ơi!</div>';
    }
    var resultMember = document.getElementById('resultMember');
    resultMember.innerHTML = output;


});


//BT3:Cho 3 số nguyên. Viết chương trình xuất ra có bao nhiêu số lẻ và bao nhiêu số chẵn.

var number1 = Number(document.getElementById('takeNumber1').value);
console.log(number1);
var checkNumber = document.getElementById('checkNumber');
checkNumber.addEventListener('click', () => {
    //input
    var number1 = Number(document.getElementById('takeInterger1').value);
    var number2 = Number(document.getElementById('takeInterger2').value);
    var number3 = Number(document.getElementById('takeInterger3').value);


    //output
    var output = '';

    //progressv
    var output1 = '';
    var output2 = '';

    var odd = 0;
    var even = 0;
    if (number1 % 2 === 0) {
        even++;
    } else {
        odd++;
    }
    if (number2 % 2 === 0) {
        even++;
    } else {
        odd++;
    }
    if (number3 % 2 === 0) {
        even++;
    } else {
        odd++;
    }
    if (odd === 1) {
        output1 = 'Có 1 số lẻ';
    } else if (odd === 2) {
        output1 = 'Có 2 số lẻ'
    } else if (odd === 3) {
        output1 = 'Có 3 số lẻ'
    } else if (odd === 0) {
        output1 = 'Có 0 số lẻ'
    }


    if (even === 1) {
        output2 = 'Có 1 số chẵn';
    } else if (even === 2) {
        output2 = 'Có 2 số chẵn';
    } else if (even === 3) {
        output2 = 'Có 3 số chẵn';
    } else if (even === 0) {
        output2 = 'Có 0 số chẵn';
    }
    output = output1 + ' , ' + output2;
    var resultcheckNumber = document.getElementById('resultcheckNumber');
    resultcheckNumber.innerHTML = output;


});

//BT4:Viết chương trình cho nhập 3 cạnh của tam giác. Hãy cho biết đó là tam giác gì?
var shape = document.getElementById('shape');
shape.addEventListener('click', () => {
    //input
    var number1 = Number(document.querySelector('.takelength').value);
    var number2 = Number(document.querySelector('.takewidth').value);
    var number3 = Number(document.querySelector('.takeheight').value);


    //output
    var output = '';

    //progressv
    var a = Math.pow(number1, 2);
    var b = Math.pow(number2, 2);
    var c = Math.pow(number3, 2);
    var d = Number((a + b) - c);
    var e = Number((c + b) - a);
    var f = Number(( a + c) - b);

    var resultshape = document.getElementById('resultshape');
    if(number1 ===0 || number2 ===0 || number3 ===0){
        return resultshape.innerHTML = '<div class="text-danger bg-white">Bạn cần nhập đủ dữ liệu</div>';
    }
    if (number1 === number2 && number3 === number1) {
        output = 'Tam giác đều';
    }else if (d === 0 || e === 0 || f === 0) {
        output = 'Tam giác vuông';

    }else if (number1 === number2 || number1 === number3 || number2 === number3) {
        output = 'Tam giác cân';
    }else{
        output = 'Tam giác thường';

    }
    resultshape.innerHTML = 'Hình này là : ' + output;


});
