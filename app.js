 var answer = [];

function Answers (nq , que , ans) {
    answer[que] = ans;
  if (nq > 0) {
      jQuery('.question .row').removeClass("active");
      jQuery('.q' + nq).addClass("active");
  } else {
      q1 = answer[1];
      q2 = answer[2];
      q3 = answer[3];
      q4 = answer[4];
      q5 = answer[5];
      q6 = answer[6];
      q7 = answer[7];
      q8 = answer[8];
      q9 = answer[9];
      q10 = answer[10];

      if((q1,q2,q4,q6,q8,q9 == 1) && (q3,q5,q7,q10 == 1 || 2)) {
        jQuery('.question .row').removeClass("active");
        jQuery('.row.result1').addClass("active");
      } else {
          if((q1,q2,q4 == 1) && (q3,q5,q6,q7,q8,q9,q10 == 1 || 2)){
            jQuery('.question .row').removeClass("active");
            jQuery('.row.result2').addClass("active");
          } else {
            jQuery('.question .row').removeClass("active");
            jQuery('.row.result3').addClass("active");
          }
      }
  }
}