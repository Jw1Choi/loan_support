const form = document.getElementById('form');
form.innerHTML = `
<div class="form-box" id="fm-box">
<div class="inner" style="text-align:-webkit-center;">
<div style="text-align:-webkit-center;border:1.5px solid #000;width:95%;padding:10px 20px;max-width:450px;" > 
<a href="" class="scroll box" style="border-color:#000;text-align:-webkit-center;">
                    
    <span class="timer" style="color:#000;font-size:14px;font-weight:600;">
        혜택 마감 | <span id="day1" style="font-weight:600;"></span> ( <span id="countdown1" style="font-weight:600;"></span>)
    </span>
</a></div><br><br>

    <div style="text-align:-webkit-center;">
       
    <h1 class="form-top-title">신용, 기록 걱정 없는 무료 한도 조회</h1>
    <h1 class="form-top-title" style="color:red;font-weight: 600;">무직자·연체자·개인회생<br>파산자·프리랜서·과다대출자 신청불가</h1>
    <div class="form-box-inner">
        <form action="" id="form_e11" method="POST" target="hidden_iframe11" onsubmit="dll(); submitted=true;">
          <input type="hidden" name="entry.925560115" value="당근">
            <div class="form-box-tb-out">
            <br>
                <table class="form-box-tb">
                    <tbody>
                    
                    <tr>
                        <th><!--<i class="fa fa-user" aria-hidden="true"></i>-->이름</th>
                        <td>
                            <input type='text' name='entry.286048134' id='name' class="form-control" placeholder="성함" maxlength="4">
                        </td>
                    </tr>
                  
                   <!-- <tr>
                        <th>연령</th>
                        <td>
                            <input type='text' name='entry.1336420307' id='age' class="form-control" placeholder="연령" maxlength="2">
                           
                        </td>
                    </tr> -->

                  
            <tr>
              <th><!--<i class="fa fa-phone" aria-hidden="true"></i>-->연락처</th>
              <td>
                  <input type='text' name='entry.440436541' id='phone' class="form-control" placeholder="휴대폰번호" maxlength="11">
              </td>
          </tr>

          <tr id="select_lic">
                        <th>담보 여부<br></th>
                        <td>
    
                            <select name='entry.449270036' id='db' class="form-control" placeholder="현재 조건">
    
                                <option value="딤보 여부" selected disabled>담보 여부 </option>
                                    <option value="있음">있음 [우대]</option>
                                    <option value="없음">없음</option>
                                   
                                  
                            </select>
    
                        
                        </td>
                    </tr>

                      <tr id="select_lic">
                        <th>신용카드<br></th>
                        <td>
    
                            <select name='entry.1160702980' id='card' class="form-control" placeholder="신용카드 사용여부">
    
                                <option value="신용카드 사용여부" selected disabled>신용카드 사용여부</option>
                                    <option value="신용카드 사용 중">신용카드 사용 중 [우대]</option>
                                    <option value="없음">없음</option>
                                   
                                  
                            </select>
    
                        
                        </td>
                    </tr>

                <tr id="select_lic">
                  <th><!--<i class="fa fa-user" aria-hidden="true"></i>-->소득 유형<br></th>
                  <td>

                      <select name='entry.673750585' id='type' class="form-control" placeholder="소득 유형">

                          <option value="소득 유형" selected disabled>소득 유형</option>
                              <option value="4대보험가입자">4대보험가입 직장인</option>
                              <option value="3개월 이상 급여 근로자">3개월 이상 급여 근로자</option>
                              
                              
                             
                            
                      </select>

                  
                  </td>
              </tr>

           <tr>
                        <th>주의 확인</th>
                        <td>
                            <label style="display: flex; align-items: center;">
                                <input type="checkbox" id="warningCheck" name="warningCheck" style="width: 18px; height: 18px; margin-right: 8px;">
                                <span style="font-size: 13px; color: red; font-weight: 600;text-align:-webkit-left;line-height:140%;">
                                    과다대출, 파산, 회생, 회복, 연체자, 무직자는 신청이 불가함을 확인합니다.
                                </span>
                            </label>
                        </td>
                    </tr>


                    <!-- <tr>
                        <th>통화가능시간</th>
                        <td>
                            <select name="entry.882151947" id='position' class="form-control" placeholder="현재 조건">

                                <option value="통화가능시간" selected disabled>통화가능시간
                                    <option value="언제나 통화 가능">언제나 통화 가능</option>
                                    <option value="오전 09:00~10:00">오전 09:00 ~ 10:00</option>
                                    <option value="오전 10:00~11:00">오전 10:00 ~ 11:00</option>
                                    <option value="오전 11:00~12:00">오전 11:00 ~ 12:00</option>
                                    <option value="점심 12:00~01:00">점심 12:00 ~ 01:00</option>
                                    <option value="오후 01:00~02:00">오후 01:00 ~ 02:00</option>
                                    <option value="오후 02:00~03:00">오후 02:00 ~ 03:00</option>
                                    <option value="오후 03:00~04:00">오후 03:00 ~ 04:00</option>
                                    <option value="오후 04:00~05:00">오후 04:00 ~ 05:00</option>
                                    <option value="오후 05:00~06:00">오후 05:00 ~ 06:00</option>
                                    <option value="오후 06:00~07:00">오후 06:00 ~ 07:00</option>
                            </select>
                        </td>
                    </tr> -->

                   <!-- <tr id="select_lic">
                    <th>희망 장소<br></th>
                    <td>

                        <select name='entry.882151947' id='location' class="form-control" placeholder="교육 희망 지점">

                         
                            <option value="종로">종로</option>
                            <option value="강남">강남</option>
                            <option value="신촌">신촌</option>
                            <option value="천호">천호</option>
                            <option value="구로">구로</option>
                            <option value="안양">안양 </option>
                              
                        </select>

                   
                    </td>
                </tr>  -->

                <tr>
                <th><!--<i class="fa fa-phone" aria-hidden="true"></i>-->희망금액</th>
                <td>
                    <input type='text' name='entry.882151947' id='loan' class="form-control" placeholder="희망 금액">
                </td>
            </tr>

                
                    <tr>
                        <th>문의사항</th>
                        <td>
                            <textarea name='entry.2051055902' id='message' class="form-control" placeholder="문의사항을 적어주세요.(선택)" style="min-height:100px"></textarea>
                        </td>
                    </tr>
                   

                    

                    <tr>
                        <td colspan="2" style="border-bottom: none"> 
                          
                        
                            <input class="submit-btn" type='submit' id='send_message' value='무료 상담 신청하기' disabled >
                            <div class="form-agree-box">
                                <p class="form-info-agree">
                                    <span>
                                       
                                        <input type="checkbox" name="agree11" id="agree11" value="개인정보보호정책 동의" checked style="width:20px;">
                                        <label style="color:#000; font-weight:500;font-size:13px;" for="agree11">개인정보보호정책</label>
                    
                    
                                        <span class="privacyBtn" style="color:#000;font-weight:400; font-size: 13px;margin-top:-3px; " onclick="privacyPopUp()">
                                            [자세히 보기]
                                        </span>
                                    </span>
                                </p>

                                <script type="text/javascript">var submitted = false;</script>

                                <iframe name="hidden_iframe11" id="hidden_iframe11" style="display:none;" onload=""></iframe>
                                <iframe name="hidden_iframe12" id="hidden_iframe12" style="display:none;" onload=""></iframe>
                               
                            </div>
                        </td>
                    </tr>

                
                    
                    </tbody>
                </table>
            </div>
        </form>
    </div>
</div>
</div><!----form-end------>




<section id="dbscf" style="display:none;">
  <form id="db" name="f1" accept-charset="euc-kr" method="post" action="https://dbdbdeep.com/site19/land/oksaving/pc/save.php" target="hidden_iframe12">
<input type="hidden" name="ms" value="S00261816I"/>
<input type="hidden" name="ca" value="C05739008R"/>
<input type="hidden" name="auto_defense" />
<section class="dbfield_sec">
  <div class="dbfield">
      <div id="mi_db" style="top: -50px;">
          <span class="hidden">디비필드로 이동할 위치값</span>
      </div>
      <div>
          <img src='img_new/db_title.jpg' style="width: 100%;padding-bottom: 6%;">
      </div>
      <div class="dbfield_tbl_w">
          <table>
              <caption class="hidden">디비필드 입력폼</caption>
              <tbody>
              <tr>
                  <th scope="row">
                      <label>성함</label>
                  </th>
                  <td>
                      <input type="text" name="name" style="width: 10em;">
                      <!-- <span class="dbfield_explain">설명</span> -->
                  </td>
              </tr>
              <tr>
                  <th scope="row">
                      <label>전화번호</label>
                  </th>
                  <td>
                      <input class="align_center" type="tel" name="tel1" maxlength="3" value="010"
                               onclick="this.select();" style="width: 3em;">
                      -
                      <input class="align_center" type="tel" name="tel2" maxlength="4" style="width: 4em;">
                      -
                      <input class="align_center" type="tel" name="tel3" maxlength="4" style="width: 4em;">
                      <!-- <span class="dbfield_explain">설명</span> -->
                  </td>
              </tr>
              <tr>
                  <th scope="row">
                      <label>신청금액</label>
                  </th>
                  <td>
                      <input type="text" name="item1" style="width: 10em;">
                      <!-- <span class="dbfield_explain">설명</span> -->
                  </td>
              </tr>
              <tr>
                  <th scope="row">
                      <label>문의사항</label>
                  </th>
                  <td>
                      <textarea name="etc" placeholder="상담신청메모 요청사항있으면 적어주세요~"></textarea>
                      <!-- <span class="dbfield_explain">설명</span> -->
                  </td>
              </tr>
              <tr>
                  <th scope="row">
                      <label>
                          <span class="no_br">개인정보</span>
                          <span class="no_br">취급동의</span>
                      </label>
                  </th>
                  <td>
                      <a href="javascript:dbdb_pri_popup();" class="btn_private">
                          <span>개인정보 취급방침</span>
                      </a>
                      <span class="private_chk">
                          <label>
                              <input type="radio" name="agree" checked="checked">
                              <span>예</span>
                          </label>
                          <label>
                              <input type="radio" name="agree">
                              <span>아니오</span>
                          </label>
                      </span>
                  </td>
              </tr>
              </tbody>
          </table>
      </div>
      <div class="btn_dbfield_submit_w">
          <button type="button" class="btn_dbfield_submit"
                    onclick="javascript:OnSubmit(document.f1);" style="width:100%;background:#015fd3;padding:5px 1.5em">
              <span>빠른상담 신청하기</span>
          </button>
          <div style="color: red !important;font-weight: bold;">
              <font  style="color: red !important;font-weight: bold;">파산면책자,연체자는 신청불가</font>
          </div>
      </div>
  </div>
</section>
</form>

  
  
  </section>



`;

document.body.appendChild(form.content);