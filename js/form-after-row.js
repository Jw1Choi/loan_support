const form = document.getElementById('form');
form.innerHTML = `
 <div class="form-box" id="fm-box" style="padding-top:50px;">
    <div class="inner" style="text-align:-webkit-center;">
    <!-- <div style="text-align:-webkit-center;border:1.5px solid #000;width:95%;padding:10px 20px 15px;max-width:450px;" > 
    <a href="" class="scroll box" style="border-color:#000;text-align:-webkit-center;">
                        
        <span class="timer" style="color:#000;font-size:14px;font-weight:600;">
            신청 마감 | <span id="day1" style="font-weight:600;"></span> ( <span id="countdown1" style="font-weight:600;"></span>)
        </span>
    </a>
  </div><br><br> -->
  <h2>1분 신청으로 간편하게<br>승인 가능 최대 한도 조회하기</h2><br>
        <h1 class="form-top-title" style="line-height:200%;text-indent:0px;"><img src="./img/secret.png" style="width:40px;"><br>모든 정보는 안전하게 보호되며<br>인원 마감시 자동 종료됩니다.<br><span class="blink"></span><br><span style=font-size:20px;>[ 현재 남은 인원 <span class="blink counter" style="color:red;"> 8</span> 명 ]</span></h1>
        <div class="form-box-inner">
            <form action="" id="form_e11" method="POST" target="hidden_iframe11" onsubmit="dll(); submitted=true;">
            <input type="hidden" name="entry.31896802" value="당근 광고" >
                <div class="form-box-tb-out">
                <br>
                    <table class="form-box-tb">
                        <tbody>
                           
                        <tr>
                            <th>이름</th>
                            <td>
                                <input type='text' name='entry.1984308859' id='name' class="form-control" placeholder="성함" maxlength="4">
                            </td>
                        </tr>
                        <tr>
                            <th>연락처</th>
                            <td>
                                <input type='text' name='entry.668010623' id='phone' class="form-control" placeholder="휴대폰번호" maxlength="11">
                            </td>
                        </tr>
    
                        <!-- <tr id="select_lic">
                        <th>담보 여부<br></th>
                        <td>
    
                            <select name='entry.2128379181' id='db' class="form-control" placeholder="현재 조건">
    
                                <option value="딤보 여부" selected disabled>담보 여부 </option>
                                    <option value="있음">있음</option>
                                    <option value="없음">없음</option>
                                   
                                  
                            </select>
    
                        
                        </td>
                    </tr> -->

                   <!-- <tr id="select_lic">
                      <th>신용카드 유무<br></th>
                      <td>
  
                          <select name='entry.593407762' id='card' class="form-control" placeholder="현재 조건">
  
                              <option value="신용카드 유무" selected disabled>신용카드 유무 </option>
                                  <option value="있음">있음</option>
                                  <option value="없음">없음</option>
                                 
                                
                          </select>
  
                      
                      </td>
                  </tr> -->

                  <tr id="select_lic">
                    <th>대출 종류<br></th>
                    <td>

                        <select name='entry.490720003' id='loan' class="form-control" placeholder="대출 종류">

                            <option value="대출 종류" selected disabled>대출 종류</option>
                                <option value="사업자금 후순위대출">사업자금 후순위대출</option>
                                <option value="저금리전환대출(대환대출)">저금리전환대출(대환대출)</option>
                                <option value="생활자금 후순위대출">생활자금 후순위대출</option>
                                
                               
                              
                        </select>

                    
                    </td>
                </tr>
                <tr id="select_lic">
                  <th>사업자 유형<br></th>
                  <td>

                      <select name='entry.1412376890' id='type' class="form-control" placeholder="사업자 유형">

                          <option value="사업자 유형" selected disabled>사업자 유형</option>
                              <option value="개인사업자">개인사업자</option>
                              <option value="법인">법인</option>
                              
                              
                             
                            
                      </select>

                  
                  </td>
              </tr>
  
    
                       <!-- <tr>
                            <th>나이</th>
                            <td>
                                <input type='text' name='entry.1336420307' id='id-number' class="form-control" placeholder="나이" maxlength="2">
                               
                            </td>
                        </tr> -->
                         <tr>
                            <th>통화가능시간</th>
                            <td>
                                <select name="entry.1731822693" id='position' class="form-control" placeholder="현재 조건">
    
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
                        </tr>
                       
                        <tr>
                            <th>문의사항</th>
                            <td>
                                <textarea name='entry.1385130098' id='message' class="form-control" placeholder="문의사항을 적어주세요. (선택)" style="min-height:100px"></textarea>
                            </td>
                        </tr>
    
                     <!--  <tr>
                        <th>이메일</th>
                        <td>
                            <span>* 맞춤 무료 자격증 정보를 전달드립니다.</span>
                            <br><input type="text" name='entry.1667605872' id='email' class="form-control" placeholder="이메일 주소 (선택)" >
                        </td>
                    </tr> --> 
                    
                        <tr>
                            <td colspan="2" style="border-bottom: none"> 
                                <!-- <span class="red-txt">신용 8~10등급은 접수 불가합니다.</span> -->
                            
                                <input class="submit-btn" type='submit' id='send_message' value='무료 상담 신청하기' disabled style="background:#595959">
                                <div class="form-agree-box">
                                    <p class="form-info-agree">
                                        <span>
                                           
                                            <input type="checkbox" name="agree11" id="agree11" value="개인정보보호정책 동의" checked>
                                            <label style="color:black; font-weight:300;font-size:13px;margin-top:-3px;" for="agree11">개인정보보호정책</label>
                        
                        
                                            <span class="privacyBtn" style="color:black;font-weight:400; font-size: 13px;margin-top:-3px; " onclick="privacyPopUp()">
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
    

`;

document.body.appendChild(form.content);