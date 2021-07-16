// when height and weight type change
$(document).on("change", "#weightType", function () {
  $("#weight").val('');
  $("#bmi").val("0.00");
  $("#bsa").val("0.00");
});
$(document).on("change", "#heightType", function () {
  $("#height").val('');
  $("#bmi").val("0.00");
  $("#bsa").val("0.00");
});

// bmi and bsa automatically calculation
$(document).on("keyup", "#height, #weight", function () {
    let weight = parseInt($("#weight").val());
    var highType = $("#heightType").val();
    var weightType = $("#weightType").val();

    if (parseInt( weightType ) == 2) {
        weight = weight / 2.2046; // lbs to kg
    }
    bmi(highType, weight);
    bsa(highType, weight);
});

// only bmi calculation
function bmi( hightType = 0, weight = 0 ) {
  let suggestion = '';
  let height = parseInt($("#height").val());

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
        // if ( result<18.5 ) {
        // 	suggestion += "You gotta eat something, Dying on an empty stomach isn't good. <img src='https://cdn4.iconfinder.com/data/icons/smileys-for-fun/128/smiley__20-512.png' style='width:80px; height:80px;'><br>";


        // }
        // else if ( result>18.5 && result<25 ) {
        // 	suggestion += "Congrats, You are fine, just maintain it. <img src='https://cdn0.iconfinder.com/data/icons/emoji-3-5/64/thumbup_good_emoticon-512.png' style='width:60px; height:60px;'><br>";

        // }
        // else if ( result>25 && result<30 ) {
        // 	suggestion += "You should consider dieting, its gonna help. <img src='https://www.flaticon.com/svg/static/icons/svg/168/168522.svg' style='width:80px; height:80px;'> <br>";

        // }
        // else if ( result>30 && result<35 ) {
        // 	suggestion += "You should go out, exercise a lot and believe me, You'll be better. <br>";

        // } else if ( result>35 ) {
        // 	suggestion += "Hey, Have some mercy on food, and Call a doctor, You really need it. <img src='https://cdn4.iconfinder.com/data/icons/smileys-for-fun/128/smiley__24-512.png' style='width:80px; height:80px;'><br>";

        // } else {
        // 	suggestion += "Wait a sec. What the hell? <img src='https://cdn4.iconfinder.com/data/icons/smileys-for-fun/128/smiley__9-512.png' style='width:60px; height:60px;'>";
        // }
        // $("#suggestion").append(suggestion);
    }
}

// only bsa calculation
function bsa( hightType = 0, weight = 0 ) {
    var height = parseInt($("#height").val());

    if ( parseInt(hightType) == 2 ) {
        height = ( height * 2.54 );  // (inc * 2.54) == inc to cm
    }

    var result = Math.sqrt((weight * height) / 3600);
    result = parseFloat(result.toFixed(2));

    if ( (result == "Infinity") || (isNaN(result) == true) ) {
      $("#bsa").val('0.00');
    } else {
      $("#bsa").val(result);
    }
}



