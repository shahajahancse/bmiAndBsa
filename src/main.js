// when height and weight type change 
$(document).on("change", "#weightType", function () {
  $("#weight").val('');
  $("#bmi").val("0.00");
});
$(document).on("change", "#heightType", function () {
  $("#height").val('');
  $("#bmi").val("0.00");
});

// bmi calculation
$(document).on("keyup", "#height, #weight", function () {
  var weighType = $("#weightType").val();
  var highType = $("#heightType").val();
  bmi(weighType, highType);
});

// only bmi calculation
function bmi( weightType = 0, hightType = 0 ) {
  let weight = parseInt($("#weight").val());
  let height = parseInt($("#height").val());

    if ( parseInt(weightType) == 2 ) {
        weight = ( weight / 2.2046 ); // lbs to kg
    }
    if ( parseInt(hightType) == 1 ) {
        height = ( height / 100); // cm to m
    } else {
        height = (( height * 2.54 ) / 100 );  // (inc * 2.54 / 100) = inc to m
    }

    let result = weight / (height * height);
    result = parseFloat(result.toFixed(2));

    if ( (result == "Infinity") || (isNaN(result) == true) ) {
      $("#bmi").val('0.00');
    } else {
      $("#bmi").val(result);
    }
}



