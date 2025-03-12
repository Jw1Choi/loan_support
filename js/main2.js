/***** intro script 1 : 스크롤 리스트 *****/
const applicants = [
     // 1
  { batch: '저신용대출', name: '20대/직장인/신용점수 560점', amount: '1,200만원' },
  // 2
  { batch: '긴급자금대출', name: '30대/직장인/신용점수 730점', amount: '3,200만원' },
  // 3
  { batch: '생활자금대출', name: '40대/직장인/신용점수 880점', amount: '5,000만원' },
  // 4
  { batch: '저신용대출', name: '30대/직장인/신용점수 530점', amount: '1,500만원' },
  // 5
  { batch: '긴급자금대출', name: '20대/직장인/신용점수 740점', amount: '3,000만원' },
  // 6
  { batch: '생활자금대출', name: '40대/직장인/신용점수 760점', amount: '4,200만원' },
  // 7
  { batch: '저신용대출', name: '40대/직장인/신용점수 570점', amount: '2,000만원' },
  // 8
  { batch: '긴급자금대출', name: '30대/직장인/신용점수 830점', amount: '3,900만원' },
  // 9
  { batch: '생활자금대출', name: '20대/직장인/신용점수 810점', amount: '4,400만원' },
  // 10
  { batch: '저신용대출', name: '20대/직장인/신용점수 590점', amount: '1,300만원' },
  // 11
  { batch: '생활자금대출', name: '50대/직장인/신용점수 760점', amount: '3,500만원' },
  // 12
  { batch: '저신용대출', name: '30대/직장인/신용점수 580점', amount: '2,000만원' },
  // 13
  { batch: '긴급자금대출', name: '50대/직장인/신용점수 860점', amount: '4,800만원' },
  // 14
  { batch: '생활자금대출', name: '20대/직장인/신용점수 735점', amount: '2,900만원' },
  // 15
  { batch: '긴급자금대출', name: '20대/직장인/신용점수 870점', amount: '4,900만원' },
  // 16
  { batch: '저신용대출', name: '50대/직장인/신용점수 540점', amount: '1,800만원' },
  // 17
  { batch: '생활자금대출', name: '40대/직장인/신용점수 845점', amount: '4,100만원' },
  // 18
  { batch: '긴급자금대출', name: '50대/직장인/신용점수 900점', amount: '4,900만원' },
  // 19
  { batch: '생활자금대출', name: '30대/직장인/신용점수 790점', amount: '4,000만원' },
  // 20
  { batch: '저신용대출', name: '40대/직장인/신용점수 520점', amount: '1,100만원' },
  // 21
  { batch: '생활자금대출', name: '30대/직장인/신용점수 915점', amount: '5,000만원' },
  // 22
  { batch: '긴급자금대출', name: '50대/직장인/신용점수 875점', amount: '4,900만원' },
  // 23
  { batch: '저신용대출', name: '20대/직장인/신용점수 590점', amount: '1,700만원' },
  // 24
  { batch: '생활자금대출', name: '40대/직장인/신용점수 920점', amount: '5,000만원' },
  // 25
  { batch: '긴급자금대출', name: '50대/직장인/신용점수 780점', amount: '4,300만원' },
  // 26
  { batch: '저신용대출', name: '50대/직장인/신용점수 550점', amount: '1,900만원' },
  // 27
  { batch: '긴급자금대출', name: '40대/직장인/신용점수 820점', amount: '3,700만원' },
  // 28
  { batch: '생활자금대출', name: '30대/직장인/신용점수 765점', amount: '3,600만원' },
  // 29
  { batch: '저신용대출', name: '50대/직장인/신용점수 570점', amount: '1,600만원' },
  // 30
  { batch: '긴급자금대출', name: '30대/직장인/신용점수 835점', amount: '4,100만원' }
  ];
  
  const scrollList = document.getElementById('scrollList');
  
  function renderList() {
    applicants.concat(applicants).forEach(applicant => {
      const item = document.createElement('div');
      item.className = 'scroll-item';
      item.innerHTML = `
        <div class="profile-section">
          <div class="profile-icon"></div>
          <div class="profile-text">
            <span>${applicant.batch}</span>
            <strong>${applicant.name}</strong>
          </div>
        </div>
        <div class="amount">${applicant.amount}</div>
      `;
      scrollList.appendChild(item);
    });
  }
  
  function startScroll() {
    let position = 0;
    const itemHeight = 70;
    setInterval(() => {
      position -= itemHeight;
      scrollList.style.transition = 'transform 0.6s ease';
      scrollList.style.transform = `translateY(${position}px)`;
  
      if (Math.abs(position) >= scrollList.scrollHeight / 2) {
        setTimeout(() => {
          position = 0;
          scrollList.style.transition = 'none';
          scrollList.style.transform = `translateY(${position}px)`;
        }, 600);
      }
    }, 2500);
  }
  
  renderList();
  startScroll();
  
  /***** intro script 2 : 스크롤 리스트 2 *****/
  const applicants1 = [
     // 1
  { batch: '저신용대출', name: '20대/직장인/신용점수 560점', amount: '1,200만원' },
  // 2
  { batch: '긴급자금대출', name: '30대/직장인/신용점수 730점', amount: '3,200만원' },
  // 3
  { batch: '생활자금대출', name: '50대/직장인/신용점수 880점', amount: '5,000만원' },
  // 4
  { batch: '저신용대출', name: '30대/직장인/신용점수 530점', amount: '1,500만원' },
  // 5
  { batch: '긴급자금대출', name: '20대/직장인/신용점수 740점', amount: '3,000만원' },
  // 6
  { batch: '생활자금대출', name: '40대/직장인/신용점수 760점', amount: '4,200만원' },
  // 7
  { batch: '저신용대출', name: '40대/직장인/신용점수 570점', amount: '2,000만원' },
  // 8
  { batch: '긴급자금대출', name: '30대/직장인/신용점수 830점', amount: '3,900만원' },
  // 9
  { batch: '생활자금대출', name: '20대/직장인/신용점수 810점', amount: '4,400만원' },
  // 10
  { batch: '저신용대출', name: '20대/직장인/신용점수 590점', amount: '1,300만원' },
  // 11
  { batch: '생활자금대출', name: '50대/직장인/신용점수 760점', amount: '3,500만원' },
  // 12
  { batch: '저신용대출', name: '30대/직장인/신용점수 580점', amount: '2,000만원' },
  // 13
  { batch: '긴급자금대출', name: '50대/직장인/신용점수 860점', amount: '4,800만원' },
  // 14
  { batch: '생활자금대출', name: '20대/직장인/신용점수 735점', amount: '2,900만원' },
  // 15
  { batch: '긴급자금대출', name: '20대/직장인/신용점수 870점', amount: '4,900만원' },
  // 16
  { batch: '저신용대출', name: '50대/직장인/신용점수 540점', amount: '1,800만원' },
  // 17
  { batch: '생활자금대출', name: '40대/직장인/신용점수 845점', amount: '4,100만원' },
  // 18
  { batch: '긴급자금대출', name: '50대/직장인/신용점수 900점', amount: '4,900만원' },
  // 19
  { batch: '생활자금대출', name: '30대/직장인/신용점수 790점', amount: '4,000만원' },
  // 20
  { batch: '저신용대출', name: '40대/직장인/신용점수 520점', amount: '1,100만원' },
  // 21
  { batch: '생활자금대출', name: '30대/직장인/신용점수 915점', amount: '5,000만원' },
  // 22
  { batch: '긴급자금대출', name: '50대/직장인/신용점수 875점', amount: '4,900만원' },
  // 23
  { batch: '저신용대출', name: '20대/직장인/신용점수 590점', amount: '1,700만원' },
  // 24
  { batch: '생활자금대출', name: '40대/직장인/신용점수 920점', amount: '5,000만원' },
  // 25
  { batch: '긴급자금대출', name: '50대/직장인/신용점수 780점', amount: '4,300만원' },
  // 26
  { batch: '저신용대출', name: '50대/직장인/신용점수 550점', amount: '1,900만원' },
  // 27
  { batch: '긴급자금대출', name: '40대/직장인/신용점수 820점', amount: '3,700만원' },
  // 28
  { batch: '생활자금대출', name: '30대/직장인/신용점수 765점', amount: '3,600만원' },
  // 29
  { batch: '저신용대출', name: '50대/직장인/신용점수 570점', amount: '1,600만원' },
  // 30
  { batch: '긴급자금대출', name: '30대/직장인/신용점수 835점', amount: '4,100만원' }
  ];
  
  const scrollList1 = document.getElementById('scrollList1');
  
  function renderList1() {
    applicants1.concat(applicants1).forEach(applicant1 => {
      const item = document.createElement('div');
      item.className = 'scroll-item';
      item.innerHTML = `
        <div class="profile-section">
          <div class="profile-icon"></div>
          <div class="profile-text">
            <span>${applicant1.batch}</span>
            <strong>${applicant1.name}</strong>
          </div>
        </div>
        <div class="amount">${applicant1.amount}</div>
      `;
      scrollList1.appendChild(item);
    });
  }
  
  function startScroll1() {
    let position = 0;
    const itemHeight = 70;
    setInterval(() => {
      position -= itemHeight;
      scrollList1.style.transition = 'transform 0.6s ease';
      scrollList1.style.transform = `translateY(${position}px)`;
  
      if (Math.abs(position) >= scrollList1.scrollHeight / 2) {
        setTimeout(() => {
          position = 0;
          scrollList1.style.transition = 'none';
          scrollList1.style.transform = `translateY(${position}px)`;
        }, 600);
      }
    }, 2500);
  }
  
  renderList1();
  startScroll1();
  
  /***** intro script 3 : 카운트다운 1 *****/
  const countdownElement = document.getElementById('countdown');
  
  function updateCountdown() {
    const now = new Date();
    const deadline = new Date(now.getFullYear(), now.getMonth(), now.getDate() + 1, 0, 0, 0);
    const diff = deadline - now;
  
    if (diff <= 0) {
      countdownElement.textContent = '혜택이 종료되었습니다.';
      return;
    }
  
    const hours = String(Math.floor((diff / (1000 * 60 * 60)) % 24)).padStart(2, '0');
    const minutes = String(Math.floor((diff / (1000 * 60)) % 60)).padStart(2, '0');
    const seconds = String(Math.floor((diff / 1000) % 60)).padStart(2, '0');
  
    countdownElement.textContent = `⏰ 혜택 마감 | ${now.getFullYear()}. ${now.getMonth() + 1}. ${now.getDate()} ( ${hours}시 ${minutes}분 ${seconds}초 남음 )`;
  }
  
  setInterval(updateCountdown, 1000);
  updateCountdown();
  
  /***** intro script 4 : 카운트다운 2 *****/
  const countdownElement3 = document.getElementById('countdown3');
  
  function updateCountdown3() {
    const now = new Date();
    const deadline = new Date(now.getFullYear(), now.getMonth(), now.getDate() + 1, 0, 0, 0);
    const diff = deadline - now;
  
    if (diff <= 0) {
      countdownElement3.textContent = '혜택이 종료되었습니다.';
      return;
    }
  
    const hours = String(Math.floor((diff / (1000 * 60 * 60)) % 24)).padStart(2, '0');
    const minutes = String(Math.floor((diff / (1000 * 60)) % 60)).padStart(2, '0');
    const seconds = String(Math.floor((diff / 1000) % 60)).padStart(2, '0');
  
    countdownElement3.textContent = `⏰ 혜택 마감 | ${now.getFullYear()}. ${now.getMonth() + 1}. ${now.getDate()} ( ${hours}시 ${minutes}분 ${seconds}초 남음 )`;
  }
  
  setInterval(updateCountdown3, 1000);
  updateCountdown3();
  
  /***** 슬라이드 *****/
  // const track = document.querySelector('#hg-slide .hg-slide-track');
  // const slides = Array.from(track.children);
  // const dotsContainer = document.querySelector('#hg-slide .hg-slide-dots');
  
  // let currentIndex = 0;
  // let startPos = 0;
  // let currentTranslate = 0;
  // let prevTranslate = 0;
  // let isDragging = false;
  // let autoSlideInterval;
  
  
  // function updateDots() {
  //   dotsContainer.innerHTML = '';
  //   slides.forEach((_, index) => {
  //     const dot = document.createElement('span');
  //     dot.classList.add('hg-slide-dot');
  //     if (index === currentIndex) dot.classList.add('active');
  //     dot.addEventListener('click', () => goToSlide(index));
  //     dotsContainer.appendChild(dot);
  //   });
  // }
  
  
  // function updateSlideHeight() {
  //   const wrapper = document.querySelector('#hg-slide .hg-slide-wrapper');
  //   const currentSlide = slides[currentIndex];
  //   wrapper.style.height = `${currentSlide.scrollHeight}px`;
  // }
  
  
  // function goToSlide(index) {
  //   currentIndex = index;
  //   currentTranslate = -currentIndex * track.offsetWidth;
  //   prevTranslate = currentTranslate;
  //   setSliderPosition();
  //   updateSlideHeight(); 
  //   updateDots();
  // }
  
  // function setSliderPosition() {
  //   track.style.transform = `translateX(${currentTranslate}px)`;
  // }
  
  
  // function startPosition(e) {
  //   isDragging = true;
  //   startPos = getPositionX(e);
  //   track.classList.add('grabbing');
  //   cancelAnimationFrame(autoSlideInterval);
  // }
  
  
  // function movePosition(e) {
  //   if (!isDragging) return;
  //   const currentPosition = getPositionX(e);
  //   currentTranslate = prevTranslate + currentPosition - startPos;
  //   setSliderPosition();
  // }
  
  
  // function endPosition() {
  //   isDragging = false;
  //   track.classList.remove('grabbing');
  //   const movedBy = currentTranslate - prevTranslate;
  
  //   if (movedBy < -50 && currentIndex < slides.length - 1) currentIndex++;
  //   if (movedBy > 50 && currentIndex > 0) currentIndex--;
  
  //   goToSlide(currentIndex);
  //   updateSlideHeight();
  // }
  
  // function getPositionX(e) {
  //   return e.type.includes('mouse') ? e.pageX : e.touches[0].clientX;
  // }
  
  
  // function startAutoSlide() {
  //   autoSlideInterval = setInterval(() => {
  //     currentIndex = (currentIndex + 1) % slides.length;
  //     goToSlide(currentIndex);
  //   }, 5000);
  // }
  
  // function stopAutoSlide() {
  //   clearInterval(autoSlideInterval);
  // }
  
  
  // track.addEventListener('mousedown', startPosition);
  // track.addEventListener('mousemove', movePosition);
  // track.addEventListener('mouseup', endPosition);
  // track.addEventListener('mouseleave', endPosition);
  // track.addEventListener('mouseenter', stopAutoSlide);
  // track.addEventListener('mouseleave', startAutoSlide);
  
  
  // track.addEventListener('touchstart', (e) => {
  //   startPosition(e);
  //   stopAutoSlide();
  // });
  // track.addEventListener('touchmove', movePosition);
  // track.addEventListener('touchend', (e) => {
  //   endPosition(e);
  //   startAutoSlide();
  // });
  
  // updateDots();
  // updateSlideHeight();
  // startAutoSlide();
  
  /***** 그래프 애니메이션 1 *****/
  function animateGraph() {
    const formSection = document.getElementById('graph');
    const redBar = formSection.querySelector('#redBar');
    redBar.style.height = '120px'; // 실제 비율에 맞게 조정
  }
  
  function isElementInViewport(el) {
    const rect = el.getBoundingClientRect();
    return rect.top <= window.innerHeight && rect.bottom >= 0;
  }
  
  function handleScroll() {
    const formSection = document.getElementById('graph');
    const redBar = formSection.querySelector('#redBar');
    if (isElementInViewport(redBar)) {
      animateGraph();
      window.removeEventListener('scroll', handleScroll);
    }
  }
  
  window.addEventListener('scroll', handleScroll);
  window.addEventListener('load', handleScroll);
  
  /***** 그래프 애니메이션 2 *****/
  function animateGraph1() {
    const formSection = document.getElementById('limit-graph');
    const redBar = formSection.querySelector('#redBar');
    redBar.style.height = '170px'; 
  }
  
  function isElementInViewport1(el) {
    const rect = el.getBoundingClientRect();
    return rect.top <= window.innerHeight && rect.bottom >= 0;
  }
  
  // ※ 여기서 기존 코드상 버그: removeEventListener와 isElementInViewport 부분 수정
  function handleScroll1() {
    const formSection = document.getElementById('limit-graph');
    const redBar = formSection.querySelector('#redBar');
    if (isElementInViewport1(redBar)) {
      animateGraph1();
      window.removeEventListener('scroll', handleScroll1);
    }
  }
  
  window.addEventListener('scroll', handleScroll1);
  window.addEventListener('load', handleScroll1);
  
  /***** 그래프 애니메이션 3 *****/
  function animateGraph3() {
    const formSection = document.getElementById('interest-graph');
    const redBar = formSection.querySelector('#redBar');
    redBar.style.height = '50px';
  }
  
  // 같은 함수명으로 다시 정의(원본 코드 유지)
  function isElementInViewport(el) {
    const rect = el.getBoundingClientRect();
    return rect.top <= window.innerHeight && rect.bottom >= 0;
  }
  
  function handleScroll3() {
    const formSection = document.getElementById('interest-graph');
    const redBar = formSection.querySelector('#redBar');
    if (isElementInViewport(redBar)) {
      animateGraph3();
      window.removeEventListener('scroll', handleScroll3);
    }
  }
  
  window.addEventListener('scroll', handleScroll3);
  window.addEventListener('load', handleScroll3);
  
  /***** 그래프 애니메이션 4 *****/
  function animateGraph4() {
    const formSection = document.getElementById('submit-graph');
    const redBar = formSection.querySelector('#redBar');
    redBar.style.height = '170px';
  }
  
  // 다시 동일 함수명 isElementInViewport 유지(원본 코드 그대로)
  function handleScroll4() {
    const redBar = document.getElementById('redBar');
    if (isElementInViewport(redBar)) {
      animateGraph4();
      window.removeEventListener('scroll', handleScroll4);
    }
  }
  
  window.addEventListener('scroll', handleScroll4);
  window.addEventListener('load', handleScroll4);
  
  /***** 텍스트 타이핑 애니메이션 *****/
  var typeText = document.querySelector(".typeText")
  var textToBeTypedArr = [
    "직장인/신용점수 650점 : 20,000,000원 대출 승인",
    "직장인/신용점수 350점 : 14,000,000원 대출 승인",
    "직장인/신용점수 590점 : 17,000,000원 대출 승인",
    "직장인/신용점수 690점 : 26,000,000원 대출 승인",
    "직장인/신용점수 710점 : 40,000,000원 대출 승인",
    "직장인/신용점수 480점 : 19,000,000원 대출 승인",
    "직장인/신용점수 900점 : 50,000,000원 대출 승인",
    "직장인/신용점수 820점 : 45,000,000원 대출 승인",
    "직장인/신용점수 750점 : 44,000,000원 대출 승인",
    "직장인/신용점수 610점 : 19,000,000원 대출 승인",
    "직장인/신용점수 530점 : 17,000,000원 대출 승인",
    "직장인/신용점수 780점 : 42,000,000원 대출 승인",
    "직장인/신용점수 860점 : 48,000,000원 대출 승인",
    "직장인/신용점수 890점 : 50,000,000원 대출 승인"
  ];
  var index = 0, isAdding = true, textToBeTypedIndex = 0;
  
  function playAnim() {
    setTimeout(function () {
      typeText.innerText = textToBeTypedArr[textToBeTypedIndex].slice(0, index);
      if (isAdding) {
        if (index > textToBeTypedArr[textToBeTypedIndex].length) {
          isAdding = false;
          setTimeout(function () {
            playAnim()
          }, 2000);
          return;
        } else {
          index++;
        }
      } else {
        if (index === 0) {
          isAdding = true;
          textToBeTypedIndex = (textToBeTypedIndex + 1) % textToBeTypedArr.length;
        } else {
          index--;
        }
      }
      playAnim();
    }, isAdding ? 65 : 35);
  }
  
  playAnim();
  
  /***** jQuery 사용 부분 *****/
  function chk_num(obj){
    obj.value=obj.value.replace(/[^0-9]/g,'');
  }
  
  $(document).ready(function ($) {
    $(".scroll").click(function(event){
      event.preventDefault();
      $('html,body').animate({scrollTop:$(this.hash).offset().top}, 500);
    });
  
    $("#scroller").simplyScroll({
      pauseOnHover: true,
      speed: 1,
      auto: true,
      autoMode: 'loop'
    });
  
    $(".btn-show").click(function (e) {
      $(".agreement").toggle();
      return false;
    });
    
    new WOW().init();
  
    $('.counter').counterUp({delay: 10, time: 1000});
  });
  
  /***** F12 & 우클릭 방지 코드 *****/
  $(document).ready(function(){ 
    $(document).bind('keydown',function(e){ 
      if ( e.keyCode == 123 ) { // F12
        e.preventDefault(); 
        e.returnValue = false; 
        $(window).scrollTop(0);
        window.location.reload();
      } 
    }); 
  });
  
  document.onmousedown = disableclick; 
  status="Right click is not available."; 
  function disableclick(event){ 
    if(event.button==2){ 
      alert(status); 
      $(window).scrollTop(0);
      window.location.reload();
      return false; 
    }
  }
  