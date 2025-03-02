$(document).ready(function () {
    // typing ani
    (function ($) {
      $.fn.writeText = function (content) {
        var contentArray = content.split(""),
          current = 0,
          elem = this;
        setInterval(function () {
          if (current < contentArray.length) {
            elem.text(elem.text() + contentArray[current++]);
          }
        }, 80);
      };
    })(jQuery);
  
    // texto com animação de digitação
    $("#holder").writeText("DESENVOLVEDOR FULL STACK");

    // inicia o wow.js
    new WOW().init();
  
    // quando clica no menu
    var main = function () {
      $(".fa-bars").click(function () {
        $(".nav-screen").animate(
          {
            right: "0px"
          },
          200
        );
  
        $("body").animate(
          {
            right: "285px"
          },
          200
        );
      });
  
      // JQuery - abre e fecha o menu */
      $(".fa-times").click(function () {
        $(".nav-screen").animate(
          {
            right: "-285px"
          },
          200
        );
  
        $("body").animate(
          {
            right: "0px"
          },
          200
        );
      });
  
      $(".nav-links a").click(function () {
        $(".nav-screen").animate(
          {
            right: "-285px"
          },
          500
        );
  
        $("body").animate(
          {
            right: "0px"
          },
          500
        );
      });
    };
  
    $(document).ready(main);
  
    //fullpage.js scroll
    $("#fullpage").fullpage({
      scrollBar: true,
      responsiveWidth: 400,
      navigation: true,
      navigationTooltips: ["Home", "Sobre", "Projeto 1", "Projeto 2", "Projeto 3", "Projeto 4", "Projeto 5", "Conecte-se"],
      anchors: ["home", "sobre", "Projeto 1", "Projeto 2", "Projeto 3", "Projeto 4", "Projeto 5", "conecte-se"],
      menu: "#myMenu",
      fitToSection: false,
  
      afterLoad: function (anchorLink, index) {
        var loadedSection = $(this);
  
        //altera estilo scroll
        if (index == 1) {

          /* adiciona opacidade*/
          $(".fa-chevron-down").each(function () {
            $(this).css("opacity", "1");
          });
          $(".header-links a").each(function () {
            $(this).css("color", "white");
          });
          $(".header-links").css("background-color", "transparent");
        } else if (index != 1) {
          $(".header-links a").each(function () {
            $(this).css("color", "black");
          });
          $(".header-links").css("background-color", "white");
        }
  
        //animação scroll
        if (index == 2) {

          /* animação skill bars */
          $(".skillbar").each(function () {
            $(this)
              .find(".skillbar-bar")
              .animate(
                {
                  width: $(this).attr("data-percent")
                },
                2500
              );
          });
        }
      }
    });
  
    // move para a seção de baixo
    $(document).on("click", "#moveDown", function () {
      $.fn.fullpage.moveSectionDown();
    });
  
    // fullpage.js link navegação
    $(document).on("click", "#skills", function () {
      $.fn.fullpage.moveTo(2);
    });
  
    $(document).on("click", "#projects", function () {
      $.fn.fullpage.moveTo(3);
    });
  
    $(document).on("click", "#connect", function () {
      $.fn.fullpage.moveTo(4);
    });
  
    // JQuery - scroll suave
    $(function () {
      $("a[href*=#]:not([href=#])").click(function () {
        if (
          location.pathname.replace(/^\//, "") ==
            this.pathname.replace(/^\//, "") &&
          location.hostname == this.hostname
        ) {
          var target = $(this.hash);
          target = target.length
            ? target
            : $("[name=" + this.hash.slice(1) + "]");
          if (target.length) {
            $("html,body").animate(
              {
                scrollTop: target.offset().top
              },
              700
            );
            return false;
          }
        }
      });
    });



   


    $( document ).ready(function() {
      $('.trigger').click(function() {
         $('.modal-wrapper').toggleClass('open');
        $('.page-wrapper').toggleClass('blur');
         return false;
      });
    });


   

  

    
   

    

  });