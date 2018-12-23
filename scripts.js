$('.container-number').bind('input', function(e) {
  var v = e.target.value;
  if (isNaN(v)) {
    if (v.length > 1) {
      e.target.value = v[0];
    }
  } else {
    if (v > 9) e.target.value = 9;
    if (v < 0) e.target.value = 0;
  }
});

function checkValues() {
  var val0 = $('#input-0').val();
  var val1 = $('#input-1').val();
  var val2 = $('#input-2').val();
  var val3 = $('#input-3').val();
  var val4 = $('#input-4').val();
  var val5 = $('#input-5').val();
  var val6 = $('#input-6').val();
  var val7 = $('#input-7').val();
  var val8 = $('#input-8').val();
  var word = val0 + val1 + val2 + val3 + val4 + val5 + val6 + val7 + val8;
  if (word === 'wlK8nemLu') {
    console.log('success');
    $('#container-puzzle').hide();
    var video = $('#container-video');
    video.show();
    setTimeout(function() {
      video.get(0).play();
    }, 100);
  }
}

$('#input-0').bind('input', function() {
  $('#input-1').focus();
  checkValues();
});
$('#input-1').bind('input', function() {
  $('#input-2').focus();
  checkValues();
});
$('#input-2').bind('input', function() {
  $('#input-3').focus();
  checkValues();
});
$('#input-3').bind('input', function() {
  $('#input-4').focus();
  checkValues();
});
$('#input-4').bind('input', function() {
  $('#input-5').focus();
  checkValues();
});
$('#input-5').bind('input', function() {
  $('#input-6').focus();
  checkValues();
});
$('#input-6').bind('input', function() {
  $('#input-7').focus();
  checkValues();
});
$('#input-7').bind('input', function() {
  $('#input-8').focus();
  checkValues();
});
$('#input-8').bind('input', function() {
  checkValues();
});