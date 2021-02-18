$("#formSend").click(function(){

  //modalview('ere');
/*
  $.ajax({
      type: "POST",
      url: "send.php",
      data: $('#sendForm').serialize(),
      success: function(data){
        console.log(data);
        if(data=='1'){
          //alert('Спасибо! Мы с вами свяжемся в ближайшее время');
          
          $('#sendForm')[0].reset();
        } else {
          alert('Что-то пошло не так..');
        }
      }
    });
    */
    //return false;
});

function emailTest(input){
    return !/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,8})+$/.test(input);
  }


function sendFormBtn(){


  fname=$('#formInputName');
  fmail=$('#formInputEmail');
  fphone=$('#formInputPhone');
  i=0;
  if(fname.val()==''){
    fname.addClass("input-error");
    i++;
  } else {
    fname.removeClass("input-error");
  }
  if(fmail.val()==''){
    fmail.addClass("input-error");
    i++;
  } else {
    if(emailTest(fmail.val())){
      fmail.addClass("input-error");
      i++;
    } else {
      fmail.removeClass("input-error");
    }
  }
  if(fphone.val()==''){
    fphone.addClass("input-error");
    i++;
  } else {
    fphone.removeClass("input-error");
  }

  if(i!=0){
    $('#errorMessage').css('display','block');
  } else {
    $.ajax({
      type: "POST",
      url: "send.php",
      data: $('#sendForm').serialize(),
      success: function(data){
        console.log(data);
        if(data=='1'){
          modalView();
          $('#sendForm')[0].reset();
          $('#errorMessage').css('display','none');
        } else {
          alert('Что-то пошло не так..');
        }
      }
    });
  }

  void(0);
}

function modalView(){
  $('#modal').css('display','block');
  $('#modal').addClass("visible");
  setTimeout(function(){
     $('#modal').removeClass("visible");
     $('#modal').css('display','none');
  },2000);
}