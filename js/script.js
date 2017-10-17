$(function () {

    var num = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 0],
        $box = $('#box');

    // премешать array

    $('#reset').on('click', function (){                                 // по клику создаем и перемешиваем []
        shuffleArray(num);
        //console.log($box);
        showItems(num);
    });

    function showItems(array){                                            // создаем игровое поле
        var dots = '';
        for (i = 0; i < array.length; i++) {
            if (array[i] === 0) {
                dots += '<div class="squares hidden">' + array[i] + '</div>'; //  // устанавливаем div='class' []
            }else {
                dots += '<div class="squares">' + array[i] + '</div>';   // устанавливаем div='squares' '0' клетке []
            }
        }
        $box.html(dots); //добавление <div> in html DOM
    }

    function shuffleArray(array) {                                       // функция перемешивания []
        for (var i = array.length - 1; i > 0; i--) {
            var j = Math.floor(Math.random() * (i + 1));
            var temp = array[i];
            array[i] = array[j];
            array[j] = temp;
        }
        return array;
    }

});

/* $(function(){
     $('.buttons button').on('click', function(){
         $(this).prependTo($(this).parent());
     });
 }); */