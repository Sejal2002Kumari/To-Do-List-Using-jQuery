$(document).ready(function(){

    $("#input").change(function(){ //form control :change()
        var input = $(this).val();
        console.log(input);
        $("ul").append(
          "<li>" +
            input +
            '<i class="bi bi-check-circle-fill"></i><i class="bi bi-archive-fill"></i></li>'
        );
   
        this.value = "";
   

    });


    $('ul').on('click','.bi-archive-fill',function(){
        $(this).parent('li').fadeOut(200);

    });


    $("ul").on("click", ".bi-check-circle-fill", function () {
      $(this).parent("li").toggleClass("checked");
    });

});