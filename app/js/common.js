 
  $(window).scroll(function() {
        if ($(window).scrollTop() > $(".header").height() - 900) {
            $(".header_head").addClass("fixed");
        } else {
            $('.header_head').removeClass("fixed"); 
        }
    });
$(document).ready(function() {
});
$(function() {

    //SVG Fallback
    // if(!Modernizr.svg) {
    //  $("img[src*='svg']").attr("src", function() {
    //      return $(this).attr("src").replace(".svg", ".png");
    //  });
    // };
});
        // $(document).scroll(function(){
        //     // Фикмированная шапка при скролле
        //     $(".header_head").removeClass("default");
        //     $(window).scroll(function(){
        //         if ($(this).scrollTop() > 50) {
        //             $(".header_head").addClass("default").fadeIn('fast');
        //         } else {
        //             $(".header_head").removeClass("default").fadeIn('fast');
        //         };
        //     });
        // });


function callMobilePopup(){

        if (window.matchMedia("(max-width: 992px)").matches) {
            $('#selector1').click(function(){
                $('#selector1').lightGallery({
                       selector: '.item'
                    });
            });

         }
}
callMobilePopup();



// скролл по ссылке с атрибутом href
$(".header_nav a[href*='#']").on("click", function(e) {
    e.preventDefault();
    var anchor = $(this);
    $('html, body').stop().animate({
        scrollTop: $(anchor.attr('href')).offset().top
    }, 500);
    return false;
});
$(".header_head_nav a[href*='#']").on("click", function(e) {
    e.preventDefault();
    var anchor = $(this);
    $('html, body').stop().animate({
        scrollTop: $(anchor.attr('href')).offset().top
    }, 500);
    return false;
});

        
$(document).ready(function() {
  $(".owl-carousel").owlCarousel({
            loop: true,
            items: 1,
            dots: true
        });
	$('.order_img').css('transition','0.5s','width','100%');
	$('.order_item').hover(function(e){		
		$('.order_img').css('background-image', 'url(' + $(this).attr('data-big') + ')');
	},
	function(){
		return false;
	});

    $('.table').hover(
        function() {
        var data = $(this).data('price');
        $('.order_img span').html(data);
     }, function() {
  
     }
    );
    // для инициализации tooltips
    // $( document ).tooltip({
    //   track: true
    // });  
    // скролл по ссылке с атрибутом href 
    // $(".header_nav a[href*=#]").on("click", function(e) {
    //     e.preventDefault();
    //     var anchor = $(this);
    //     $('html, body').stop().animate({
    //         scrollTop: $(anchor.attr('href')).offset().top
    //     }, 500);
    //     return false;
    // });
    // Скролл по классу .scroll_to и атрибуту data-scroll у кнопки к примеру (data-scroll="куда скроллим" в элементе куда скроллим ставим id потом впишем в куда скроллим)
    $(".scroll_to").on("click", function(e) {
        e.preventDefault();
        var anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $("#" + anchor.data('scroll')).offset().top
        }, 500);
        return false;
    });
    //  Активация слайдера
    // $(".owl-carousel").owlCarousel({
    //     loop: true,
    //     items: 1,
    //     dots: true
    // });

    // Select в модальном окне
    $(document).click(function() {
        $('.slct').removeClass('active');
        $('.slct').parent().find('.drop').slideUp("fast");
    });
    $('.slct').click(function() {
        /* Заносим выпадающий список в переменную */
        var dropBlock = $(this).parent().find('.drop');
        //  закрываем все открытые
        $('.slct').removeClass('active').parent().find('.drop').slideUp("fast");

        /* Делаем проверку: Если выпадающий блок скрыт то делаем его видимым*/
        if (dropBlock.is(':hidden')) {
            dropBlock.slideDown();

            /* Выделяем ссылку открывающую select */
            $(this).addClass('active');
            $(this).siblings(".slct_arrow").addClass('active');


            /* Работаем с событием клика по элементам выпадающего списка */
            $('.drop').find('li').click(function() {

                /* Заносим в переменную HTML код элемента 
                списка по которому кликнули */
                var selectResult = $(this).html();

                /* Находим наш скрытый инпут и передаем в него 
                значение из переменной selectResult */
                $(this).parent().parent().find('input').val(selectResult);

                /* Передаем значение переменной selectResult в ссылку которая 
                открывает наш выпадающий список и удаляем активность */
                $(this).parent().parent().find(".slct").removeClass('active').html(selectResult);
                $(".slct_arrow").removeClass('active');

                /* Скрываем выпадающий блок */
                dropBlock.slideUp();
            });

            /* Продолжаем проверку: Если выпадающий блок не скрыт то скрываем его */
        } else {
            $(this).removeClass('active');
            $(".slct_arrow").removeClass('active');
            dropBlock.slideUp();
        }

        /* Предотвращаем обычное поведение ссылки при клике */
        return false;
    });
    // Открываем модальное окно  
    $(".modal").click(function(e) {
        e.preventDefault();
        var id = $(this).data('modal');
        var txt = $(this).data('info');
        $(".popup[data-modal=" + id + "]").toggle("fade", 500).find("form").css('display', 'block');
        $(".popup[data-modal=" + id + "] input[name=form_name").val(txt);
        $("body").css({ "overflow": "hidden", "padding-right": "17px" });
    });
     $(".modal").click(function(e) {
        e.preventDefault();
        var id = $(this).data('modal');
        var txt = $(this).data('info');
        $(".popup3[data-modal=" + id + "]").toggle("fade", 500).find("form").css('display', 'block');
        $("body").css({ "overflow": "hidden", "padding-right": "17px" });
    });
    $(".overlay").click(function() {
        $(this).parent().toggle("fade", 500);
        $("body").css({ "overflow": "inherit", "padding-right": "0" });
    });
    // закрываем модальное окно
    $("#win .close").click(function(e) {
        e.preventDefault();
        $(".popup").hide("clip", 500);
        $("body").css({ "overflow": "inherit", "padding-right": "0" });
    });



    // закрываем модальное окно
    $("#win3 .close").click(function(e) {
        e.preventDefault();
        $(".popup3").hide("clip", 500);
        $("body").css({ "overflow": "inherit", "padding-right": "0" });
    });



    

    $('.dm-modal form .drop li').on('click', function() {
        var slcVal = $(this).text();
        var slcInputColor = $('#select-color'); // этот самый input с атрибутом name="services"
        var slcInputDesign = $('#select-design');
        slcInputDesign.val(slcVal); // заносим в переменную значение скрытого inputa, которое потом передастся в письмо (по атрибуту name="services")   
        slcInputColor.val(slcVal); 
    });
    //  Отправка форм
    $("form").submit(function() { // перехватываем все при событии отправки
        var form = $(this); // запишем форму, чтобы потом не было проблем с this
        var error = [];
        form.find('.modal_form_input').each(function() { // пробежим по каждому полю в форме

            if ($(this).val() == '') { // если находим пустое
                $(this).siblings().show("fade", 500);
                error.push(true); // ошибка
            } else if ($(this).val() !== '') { // если находим не пустое
                $(this).siblings().hide("fade", 500)
                error.push(false); // нет ошибки
            }
            $(this).focus(function() {
                $(this).siblings().hide("fade", 500)
            });

        });
        form.find('.modal_form_phone').each(function() { // пробежим по каждому полю в форме
            var pattern = /^(\+|d+)*\d[\d\(\)\-]{4,14}\d$/;
            if ($(this).val() == '') { // если пустое
                $(this).siblings().show("fade", 500);
                error.push(true); // ошибка 
                if ($(this).siblings().hasClass('input_error_phone')) {
                    $(this).siblings().removeClass('input_error_phone').text("").prepend("Заполните поле<div class='modal_error_triangle'></div><div class='modal_error_chest_img'></div>");
                }
            } else if ($(this).val() !== '') {
                if ($(this).val().match(pattern)) {
                    $(this).siblings().hide("fade", 500);
                    error.push(false); // нет ошибок
                } else {
                    $(this).siblings().show("fade", 500).addClass('input_error_phone').text("").prepend("Введите правильный телефон<div class='modal_error_triangle'></div><div class='modal_error_chest_img'></div>");
                    error.push(true); // ошибка  
                }
            }
            $(this).focus(function() {
                $(this).siblings().hide("fade", 500);
            });

        });
        form.find('.modal_form_email').each(function() { // пробежим по каждому полю в форме
            var pattern = /^(([a-zA-Z0-9]|[!#$%\*\/\?\|^\{\}`~&'\+=-_])+\.)*([a-zA-Z0-9]|[!#$%\*\/\?\|^\{\}`~&'\+=-_])+@([a-zA-Z0-9-]+\.)+[a-zA-Z0-9-]+$/;
            if ($(this).val() == '') { // если пустое
                $(this).siblings().show("fade", 500);
                error.push(true); // ошибка
                if ($(this).siblings().hasClass('input_error_email')) {
                    $(this).siblings().removeClass('input_error_email').text("").prepend("Заполните поле<div class='modal_error_triangle'></div><div class='modal_error_chest_img'></div>");
                }

            } else if ($(this).val() !== '') {
                if ($(this).val().match(pattern)) {
                    $(this).siblings().hide("fade", 500).removeClass('input_error_email');
                    error.push(false); // нет ошибок
                } else {
                    $(this).siblings().show("fade", 500).addClass('input_error_email').text("").prepend("Введите правильный Email<div class='modal_error_triangle'></div><div class='modal_error_chest_img'></div>");
                    error.push(true); // ошибка  
                }
            }
            $(this).focus(function() {
                $(this).siblings().hide("fade", 500);
            });

        });
        var erorr_finish = 0;
        for (var i = 0; i < error.length; i++) {
            if (error[i] == false) {
                erorr_finish = erorr_finish + 1;
            };
            console.log(error[i]);
        }
        console.log(erorr_finish);
        var size = error.length - 1;
        if (erorr_finish > size) { // в зависимости от полей которые проверяются (в нашем случае 3 поля)
            var data = form.serialize(); // подготавливаем данные
            $.ajax({ // инициализируем ajax запрос
                type: 'POST', // отправляем в POST формате, можно GET
                url: 'mail.php', // путь до обработчика, у нас он лежит в той же папке
                dataType: 'json', // ответ ждем в json формате
                data: data, // данные для отправки
                beforeSend: function(data) { // событие до отправки
                    form.find('input[type="submit"]').attr('disabled', 'disabled'); // например, отключим кнопку, чтобы не жали по 100 раз
                },
                success: function(data) { // событие после удачного обращения к серверу и получения ответа
                    if (data['error']) { // если обработчик вернул ошибку
                        alert(data['error']); // покажем её текст
                    } else { // если все прошло ок
                        $('.dm-modal form').hide(); // пишем что все ок                
                        $('.dm-modal .sucess_mail').show('fade', 500);
                        $('.popup .close').hide();
                        $('.popup').delay(2000).fadeOut(
                            function() {
                                $('.popup').hide('fade');
                                form.trigger('reset');
                                $('.dm-modal .sucess_mail').removeClass('active');
                                $("#win .close").trigger('click');
                                $('.popup .close').show();
                            }
                        );
                        if (data['form'] == "form_2") { //Проверяем какая форма, если в форме есть <input type="hidden" name="id_form" value="form_2"> то выполняем код что ниже
                            $('.dm-modal .sucess_mail').addClass('active');
                            $('.popup2 .close').hide();
                            $('.popup2').show().delay(2000).fadeOut(
                                function() {
                                    $('.popup2').removeClass('active');
                                    form.trigger('reset');
                                    $('.dm-modal .sucess_mail').addClass('active');
                                    $("#win2 .close").trigger('click');
                                    $('.popup2 .close').show();
                                }
                            );
                        }
                    }
                },
                error: function(xhr, ajaxOptions, thrownError) { // в случае неудачного завершения запроса к серверу
                    alert(xhr.status); // покажем ответ сервера
                    alert(thrownError); // и текст ошибки
                },
                complete: function(data) { // событие после любого исхода
                    form.find('input[type="submit"]').prop('disabled', false); // в любом случае включим кнопку обратно
                }

            });
        }
        return false; // вырубаем стандартную отправку формы
    });


});
// function navButton() {
//     var headerNav = document.querySelector('#header_nav_id');
//     headerNav.classList.toggle("active");
// }

$(".loader_inner").fadeOut();
$(".loader").delay(400).fadeOut("slow");



// nav menu с использованием дополнительно библиотеки

$(function() {

 var items = $('.slideRight, .slideLeft');
 var content = $('.content-for-mobile-menu');
 
 var open = function() {
       $(items).removeClass('close-shift').addClass('open-shift');
      }
 var close = function() { 
       $(items).removeClass('open-shift').addClass('close-shift');
      }
$(document).click(function(event) {
        if ($(event.target).closest("#navToggle").length)
            return;
        if ($(event.target).closest(".nav_list_mob").length)
            return;
        $(close);
        

        event.stopPropagation();

    });

 $("#navToggle").click(function(){
  if (content.hasClass('open-shift')) {$(close)}
  else {$(open)}
 });

 $('.nav_list_mob').click(function(){
    content.removeClass('open-shift').addClass('close-shift');
 })

});