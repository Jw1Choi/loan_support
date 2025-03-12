$(function() {
    var targetDate = new Date();
    var today=new Date();
    var year = today.getFullYear();
    var month = today.getMonth()+1;
    var day = today.getDate();
    var day1 = today.getDate()+1;

    targetDate.setDate(targetDate.getDate() + 1);
    targetDate.setHours(0, 0, 0, 0);
    
    // 24-hour countdown
    var countDownDate = targetDate.getTime();
    
    // Update the count down every 1 second
    var x = setInterval(function() {
      // Get current time
      var now = new Date().getTime();
    
      // Find the distance between now and the countdown date
      var distance = countDownDate - now;
    
      // Calculate time units
      var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)).toString().padStart(2, "0");
      var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)).toString().padStart(2, "0");
      var seconds = Math.floor((distance % (1000 * 60)) / 1000).toString().padStart(2, "0");
    
      // Output the result in an element with id="countdown"
    //   document.getElementById("day").innerHTML = year + ". " + month + ". " + day;
    //   document.getElementById("countdown").innerHTML = hours + "시 " + minutes + "분 " + seconds + "초 남음 ";
      document.getElementById("day1").innerHTML = year + ". " + month + ". " + day1;
      document.getElementById("countdown1").innerHTML = hours + "시 " + minutes + "분 " + seconds + "초 남음 ";
      document.getElementById("day2").innerHTML = year + ". " + month + ". " + day1;
      document.getElementById("countdown2").innerHTML = hours + "시 " + minutes + "분 " + seconds + "초 남음 ";
      // If the countdown is finished, start a new countdown for the next midnight
      if (distance < 0) {
        clearInterval(x);
        targetDate.setDate(targetDate.getDate() + 1);
        countDownDate = targetDate.getTime();
        x = setInterval(arguments.callee, 1000);
      }
  
    
    }, 1000);
  
    $(function() {
      function upslide() {
        var h = $('#ticker tbody tr:first-child').outerHeight();
        var $firstRow = $('#ticker tbody tr:first-child');
        var $clone = $firstRow.clone();
        $('#ticker tbody').append($clone);
        
        $('#ticker_wrap').animate({ top: '-' + h + 'px' }, 400, function() {
          $(this).css('top', 0);
          $firstRow.remove();
          // 애니메이션이 끝난 후 1300ms 후에 다음 슬라이드를 실행 (총 주기 400 + 1300 = 1700ms)
          setTimeout(upslide, 1300);
        });
      }
      
      // 첫 슬라이드 실행
      upslide();
    });
    
    })
  
    