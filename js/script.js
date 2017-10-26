$(function () {

    var num = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 0],
        final_num = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 0],
        $box = $('#box');



    $('#reset').on('click', function (){
        shuffleArray(num);
        showItems(num);

        $('.squares').on('click', function() {
            var curr_id = $(this).data('id'),
                zero_index = $('.hidden').index() + 1,
                curr_index = $(this).index() + 1,
                move_up = curr_index - 4,
                move_down = curr_index + 4,
                move_left = curr_index - 1,
                move_right = curr_index + 1,
                forbidden_l = [5, 9, 13],
                forbidden_r = [4, 8, 12];
            // console.log(curr_index);
            // console.log(zero_index);
            if ((move_left) === zero_index && !(forbidden_l.indexOf(curr_index) > -1) ){
                swap($(this), $('.hidden'), num);
            } else if ((move_right) === zero_index && !(forbidden_r.indexOf(curr_index) > -1) ){
                swap($(this), $('.hidden'), num);
            } else if ((move_up) === zero_index){
                swap($(this), $('.hidden'), num);
            } else if ((move_down) === zero_index){
                swap($(this), $('.hidden'), num);
            }

            num = [];

            $('.squares').each(function () {
                var curr_id = $(this).data('id');
                num.push(curr_id);
            });

            // console.log(final_num);
            // console.log(num);

            var is_same = num.length == final_num.length && num.every(function(element, index) {
                return element === final_num[index];
            });

            if(is_same) {
                alert('Victory');
            } else {
                console.log('Goahead');
            }

        });

    });

    function swap(a, b, arr) {
        a = $(a); b = $(b);
        var tmp = $('<div>').hide();
        a.before(tmp);
        b.before(a);
        tmp.replaceWith(b);
       // console.log(arr);
    }

    function showItems(array){
        var dots = '';
        for (i = 0; i < array.length; i++) {
            if (array[i] === 0) {
                dots += '<div class="squares hidden" data-id="' + array[i] + '">' + array[i] + '</div>';
            }else {
                dots +=  '<div class="squares" data-id="' + array[i] + '">' + array[i] + '</div>';
            }
        }
        $box.html(dots);
    }


    function shuffleArray(array) {
        for (var i = array.length - 1; i > 0; i--) {
            var j = Math.floor(Math.random() * (i + 1));
            var temp = array[i];
            array[i] = array[j];
            array[j] = temp;
        }
        return array;
    }

});


