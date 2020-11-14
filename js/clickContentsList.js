console.log("Script Load");
(function($) {
    $(document).ready(function() {
        console.log('jQuery Ready');
        var $_1 = $('li._1');
        var $_2 = $('li._2');
        var $_3 = $('li._3');
        var $_4 = $('li._4');

        $_1.on('click',function(){
            console.log('클릭했수다');
            $_1.css('transform', 'translateY(242px)');
            $_1.css('transition-delay', '0.8s');
            $_2.css('opacity', '0');
            $_3.css('opacity', '0');
            $_4.css('opacity', '0');
            setTimeout(function(){
                $_2.css('transform', 'translateX(10000px)');
                $_3.css('transform', 'translateX(10000px)');
                $_4.css('transform', 'translateX(10000px)');
                // $_3.remove();
                // $_4.remove();
            },1000);
            $('.nav').append('<div class="_line"></div>');
            $('.nav').append('<a href="../html/MemoriesOfMatsuko.html"><div class="_line2"></div></a>');
            $('title').append('<meta http-equiv="refresh" content="2; url=../html/MemoriesOfMatsuko.html">');
        });
        $_2.on('click',function(){
            console.log('클릭했수다2');
            $_2.css('transform', 'translateY(84px)');
            $_2.css('transition-delay', '0.8s');
            $_1.css('opacity', '0');
            $_3.css('opacity', '0');
            $_4.css('opacity', '0');
            setTimeout(function(){
                $_1.css('transform', 'translateX(10000px)');
                $_3.css('transform', 'translateX(10000px)');
                $_4.css('transform', 'translateX(10000px)');
                // $_3.remove();
                // $_4.remove();
            },1000);
            $('.nav').append('<div class="_line"></div>');
            $('.nav').append('<a href="../html/Moonassi.html"><div class="_line2"></div></a>');
            $('title').append('<meta http-equiv="refresh" content="2; url=../html/Moonassi.html">');
        });
        $_3.on('click',function(){
            console.log('클릭했수다');
            $_3.css('transform', 'translateY(-80px)');
            $_3.css('transition-delay', '0.8s');
            $_2.css('opacity', '0');
            $_1.css('opacity', '0');
            $_4.css('opacity', '0');
            setTimeout(function(){
                $_2.css('transform', 'translateX(10000px)');
                $_1.css('transform', 'translateX(10000px)');
                $_4.css('transform', 'translateX(10000px)');
                // $_3.remove();
                // $_4.remove();
            },1000);
            $('.nav').append('<div class="_line"></div>');
            $('.nav').append('<a href="../html/Takkoyakki.html"><div class="_line2"></div></a>');
            $('title').append('<meta http-equiv="refresh" content="2; url=../html/Takkoyakki.html">');
        });
        $_4.on('click',function(){
            console.log('클릭했수다');
            $_4.css('transform', 'translateY(-280px)');
            $_4.css('transition-delay', '0.8s');
            $_2.css('opacity', '0');
            $_3.css('opacity', '0');
            $_1.css('opacity', '0');
            setTimeout(function(){
                $_2.css('transform', 'translateX(10000px)');
                $_3.css('transform', 'translateX(10000px)');
                $_1.css('transform', 'translateX(10000px)');
                // $_3.remove();
                // $_4.remove();
            },1000);
            $('.nav').append('<div class="_line"></div>');
            $('.nav').append('<a href="../html/WhatYum.html"><div class="_line2"></div></a>');
            $('title').append('<meta http-equiv="refresh" content="2; url=../html/WhatYum.html">');
        });
    });
})(jQuery);