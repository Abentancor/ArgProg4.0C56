
/*******10*******/
$(document).ready(function() {
    $("#parrafo1").click(function() {
      alert("Hiciste clic en el primer párrafo");
    });
  });

  /*********11*********/

$(document).ready(function() {
			$(".fila1 td").click(function() {
				$(this).toggleClass("fila1 fila2");
			});
		});
    

/*********12*********/

$("li").click(function() {
  $(this).hide();
});


/**********13***********/

$(document).ready(function() {
  $('table:first-of-type .fila').click(function() {
    $(this).toggleClass('fila-gris');
  });
});

/**********14**********/

$(document).ready(function() {
  $("#btn1").click(function() {
    $(".noticia1").find("h3,p").toggleClass("font-grande");
  });
  $("#btn2").click(function() {
    $(".noticia2").find("h3,p").toggleClass("font-grande");
  });
  $("#btn3").click(function() {
    $(".noticia3").find("h3,p").toggleClass("font-grande");
  });
});