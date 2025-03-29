var wrestMsg = "";
var wrestFld = null;
var wrestFldDefaultColor = "";
// var wrestFldBackColor = "#ff3061";

// subject 속성을 찾아 리턴, 없으면 태그의 name을 리턴
function wrestItemname(fld)
{
    return fld.getAttribute("title") ? fld.getAttribute("title") : ( fld.getAttribute("alt") ? fld.getAttribute("alt") : fld.name );
   /* var id = fld.getAttribute("id");
    var labels = document.getElementsByTagName("label");
    var el = null;

    for(i=0; i<labels.length; i++) {
        if(id == labels[i].htmlFor) {
            el = labels[i];
            break;
        }
    }

    if(el != null) {
        var text =  el.innerHTML.replace(/[<].*[>].*[<]\/+.*[>]/gi, "");

        if(text == '') {
            return fld.getAttribute("title") ? fld.getAttribute("title") : ( fld.getAttribute("placeholder") ? fld.getAttribute("placeholder") : fld.name );
        } else {
            return text;
        }
    } else {
        return fld.getAttribute("title") ? fld.getAttribute("title") : ( fld.getAttribute("placeholder") ? fld.getAttribute("placeholder") : fld.name );
    }*/
}

// 앞뒤 공백 제거 함수
function wrestTrim(fld)
{
    var pattern = /(^\s+)|(\s+$)/g; // 공백 문자 제거 정규식
    return fld.value.replace(pattern, "");
}

// 필수 입력 항목 체크 함수
function wrestRequired(fld)
{
    if (wrestTrim(fld) == "") {
        if (wrestFld == null) {
            // 최초 경고 메시지가 설정되지 않은 경우에만 메시지 설정
            wrestMsg = wrestItemname(fld) + " : 필수 " + (fld.type=="select-one" ? "선택" : "입력") + "이 누락되었습니다.\n";
            wrestFld = fld;
        }
    }
}

// 전화번호 형식 체크 (예: 123-123(4)-5678)
function wrestTelNum(fld)
{
    if (!wrestTrim(fld)) return;

    var pattern = /^[0-9]{2,3}-[0-9]{3,4}-[0-9]{4}$/;
    if(!pattern.test(fld.value)){
        if(wrestFld == null){
            wrestMsg = wrestItemname(fld) + " : 전화번호 형식이 올바르지 않습니다.\n\n(- 포함하여 입력해 주세요.)\n";
            wrestFld = fld;
            fld.select();
        }
    }
}

// 이메일 형식 체크
function wrestEmail(fld)
{
    if (!wrestTrim(fld)) return;

    //var pattern = /(\S+)@(\S+)\.(\S+)/; // 이메일에서 사용 불가
    var pattern = /([0-9a-zA-Z_-]+)@([0-9a-zA-Z_-]+)\.([0-9a-zA-Z_-]+)/;
    if (!pattern.test(fld.value)) {
        if (wrestFld == null) {
            wrestMsg = wrestItemname(fld) + " : 이메일 형식이 올바르지 않습니다.\n";
            wrestFld = fld;
        }
    }
}

// 한글만 입력 체크 (자음, 모음 단독 입력 불가)
function wrestHangul(fld)
{
    if (!wrestTrim(fld)) return;

    var pattern = /([^가-힣\x20])/;

    if (pattern.test(fld.value)) {
        if (wrestFld == null) {
            wrestMsg = wrestItemname(fld) + " : 한글만 입력해 주세요. (자음, 모음 단독 입력 불가)\n";
            wrestFld = fld;
        }
    }
}

// 한글만 입력 체크 2 (자음, 모음 단독 제외)
function wrestHangul2(fld)
{
    if (!wrestTrim(fld)) return;

    var pattern = /([^가-힣\x20])/i;

    if (pattern.test(fld.value)) {
        if (wrestFld == null) {
            wrestMsg = wrestItemname(fld) + " : 한글만 입력해 주세요.\n";
            wrestFld = fld;
        }
    }
}

// 한글, 영문, 숫자만 입력 체크
function wrestHangulAlNum(fld)
{
    if (!wrestTrim(fld)) return;

    var pattern = /([^가-힣\x20a-zA-Z0-9])/i;

    if (pattern.test(fld.value)) {
        if (wrestFld == null) {
            wrestMsg = wrestItemname(fld) + " : 한글, 영문, 숫자만 입력해 주세요.\n";
            wrestFld = fld;
        }
    }
}

// 한글, 영문만 입력 체크
function wrestHangulAlpha(fld)
{
    if (!wrestTrim(fld)) return;

    var pattern = /([^가-힣\x20a-zA-Z])/i;

    if (pattern.test(fld.value)) {
        if (wrestFld == null) {
            wrestMsg = wrestItemname(fld) + " : 한글, 영문만 입력해 주세요.\n";
            wrestFld = fld;
        }
    }
}

// 숫자만 입력 체크
function wrestNumeric(fld)
{
    if (!wrestTrim(fld)) return;

    var pattern = /^[0-9]+$/;

    if (!pattern.test(fld.value)) {
        if (wrestFld == null) {
            wrestMsg = wrestItemname(fld) + " : 숫자만 입력해 주세요.\n";
            wrestFld = fld;
        }
    }
}

// 영문만 입력 체크
function wrestAlpha(fld)
{
    if (!wrestTrim(fld)) return;

    var pattern = /(^[a-zA-Z]+$)/;

    if (!pattern.test(fld.value)) {
        if (wrestFld == null) {
            wrestMsg = wrestItemname(fld) + " : 영문만 입력해 주세요.\n";
            wrestFld = fld;
        }
    }
}

// 영문, 숫자만 입력 체크
function wrestAlNum(fld)
{
   if (!wrestTrim(fld)) return;

   var pattern = /(^[a-zA-Z0-9]+$)/;

   if (!pattern.test(fld.value)) {
       if (wrestFld == null) {
           wrestMsg = wrestItemname(fld) + " : 영문과 숫자만 입력해 주세요.\n";
           wrestFld = fld;
       }
   }
}

// 영문, 숫자, 밑줄(_)만 입력 체크
function wrestAlNum_(fld)
{
   if (!wrestTrim(fld)) return;

   var pattern = /(^[a-zA-Z0-9_]+$)/;

   if (!pattern.test(fld.value)) {
       if (wrestFld == null) {
           wrestMsg = wrestItemname(fld) + " : 영문, 숫자, _ 만 입력해 주세요.\n";
           wrestFld = fld;
       }
   }
}

// 최소 길이 체크
function wrestMinLength(fld)
{
    if (!wrestTrim(fld)) return;

    var minlength = fld.getAttribute("minlength");

    if (wrestFld == null) {
        if (fld.value.length < parseInt(minlength)) {
            wrestMsg = wrestItemname(fld) + " : 최소 " + minlength + "자 이상 입력해 주세요.\n";
            wrestFld = fld;
        }
    }
}

// 이미지 확장자 체크 (.gif, .jpg, .png만 허용)
function wrestImgExt(fld)
{
    if (!wrestTrim(fld)) return;

    var pattern = /\.(gif|jpg|png)$/i; // jpeg 제외
    if(!pattern.test(fld.value)){
        if(wrestFld == null){
            wrestMsg = wrestItemname(fld) + " : 이미지 파일 형식이 올바르지 않습니다.\n.gif, .jpg, .png 파일만 허용됩니다.\n";
            wrestFld = fld;
            fld.select();
        }
    }
}

// 파일 확장자 체크 (예: ext=확장자)
function wrestExtension(fld, css)
{
    if (!wrestTrim(fld)) return;

    var str = css.split("="); // ext=?? <-- str[1]
    var src = fld.value.split(".");
    var ext = src[src.length - 1];

    if (wrestFld == null) {
        if (ext.toLowerCase() != str[1].toLowerCase()) {
            wrestMsg = wrestItemname(fld) + " : ." + str[1] + " 파일만 허용됩니다.\n";
            wrestFld = fld;
        }
    }
}

// 공백 포함 체크
function wrestNospace(fld)
{
    var pattern = /(\s)/g; // 공백 문자

    if (pattern.test(fld.value)) {
        if (wrestFld == null) {
            wrestMsg = wrestItemname(fld) + " : 공백은 사용할 수 없습니다.\n";
            wrestFld = fld;
        }
    }
}

// submit 시 전체 검증 함수
function wrestSubmit()
{
    wrestMsg = "";
    wrestFld = null;

    var attr = null;

    // 각 요소에 대해 필수 입력 및 기타 검증 수행
    for (var i=0; i<this.elements.length; i++) {
        var el = this.elements[i];

        // input 태그 중 text, file, password, hidden, select-one, textarea, tel 타입에 대해 체크
        if (el.type=="text" || el.type=="hidden" || el.type=="file" || el.type=="password" || el.type=="select-one" || el.type=="textarea" || el.type=="tel") {
            if (el.getAttribute("required") != null) {
                wrestRequired(el);
            }

            if (el.getAttribute("minlength") != null) {
                wrestMinLength(el);
            }

            var array_css = el.className.split(" "); // 클래스명을 공백으로 분리

            el.style.backgroundColor = wrestFldDefaultColor;

            // 각 클래스에 따른 검증 수행
            for (var k=0; k<array_css.length; k++) {
                var css = array_css[k];
                switch (css) {
                    case "required"     : wrestRequired(el); break;
                    case "trim"         : wrestTrim(el); break;
                    case "email"        : wrestEmail(el); break;
                    case "hangul"       : wrestHangul(el); break;
                    case "hangul2"      : wrestHangul2(el); break;
                    case "hangulalpha"  : wrestHangulAlpha(el); break;
                    case "hangulalnum"  : wrestHangulAlNum(el); break;
                    case "nospace"      : wrestNospace(el); break;
                    case "numeric"      : wrestNumeric(el); break;
                    case "alpha"        : wrestAlpha(el); break;
                    case "alnum"        : wrestAlNum(el); break;
                    case "alnum_"       : wrestAlNum_(el); break;
                    case "telnum"       : wrestTelNum(el); break; // 전화번호 형식 체크
                    case "imgext"       : wrestImgExt(el); break;
                    default :
                        if (/^extension\=/.test(css)) {
                            wrestExtension(el, css); break;
                        }
                }
            }
        }
    }

    // 에러 발생 시 메시지 출력 후 포커스 이동
    if (wrestFld != null) {
        alert(wrestMsg);

        if (wrestFld.style.display != "none") {
            var id = wrestFld.getAttribute("id");

            // 에러 메시지 표시를 위한 element 생성
            var msg_el = document.createElement("strong");
            msg_el.id = "msg_" + id;
            msg_el.className = "msg_sound_only";
            // msg_el.innerHTML = wrestMsg;
            wrestFld.parentNode.insertBefore(msg_el, wrestFld);

            var new_href = document.location.href.replace(/#msg.+$/, "") + "#msg_" + id;

            // document.location.href = new_href;

            // wrestFld.style.backgroundColor = wrestFldBackColor;
            if (typeof(wrestFld.select) != "undefined")
                wrestFld.select();
            wrestFld.focus();
        }
        return false;
    }

    if (this.oldsubmit && this.oldsubmit() == false)
        return false;

    return true;
}

// 체크박스 값 처리 함수 (체크된 값들을 콤마로 구분하여 hidden에 저장)
function checkValue(id, f){
    var str = "";

    if(!id){
        id="reqFrm";
    }

    $("#"+id+" input:checkbox[name='"+f+"[]']").each(function(){
        if(this.checked){
            str = str + this.value + ',';
        }
        var sliceStr = str.slice(0, -1); // 마지막 콤마 제거
        $("#"+id+" input:hidden[name='"+f+"']").val(sliceStr);
    });
}

// 초기화 함수: 모든 폼의 onsubmit 이벤트를 wrestSubmit으로 설정
function wrestInitialized()
{
    for (var i = 0; i < document.forms.length; i++) {
        if (document.forms[i].onsubmit) {
            document.forms[i].oldsubmit = document.forms[i].onsubmit;
        }
        document.forms[i].onsubmit = wrestSubmit;
    }
}

// 모달 팝업 닫기
function closeModal()
{
    $('#finish_popup').fadeOut(100);
    $('#finish_iframe').attr('src', '');
    $('body').removeClass('notScroll');
}

// 트래킹 완료 함수
function trackingComplete() {
    if (typeof meta_conversion === 'function') {
        meta_conversion();
    }
    if (typeof google_conversion === 'function') {
        google_conversion();
    }
    if (typeof naver_conversion === 'function') {
        naver_conversion();
    }
    if (typeof kakao_conversion === 'function') {
        kakao_conversion();
    }
}

function req(id)
{
    if(!id){
        id="reqFrm";
    }
    
    // 리로드 여부 체크 (is_reload가 "N"이면 false)
    if($("#"+id+" [name='is_reload']") && $("#"+id+" [name='is_reload']").val()=="N"){
        var is_reload = false;
    } else {
        var is_reload = true;    
    }

    // 팝업창 사용 여부 확인
    if($("#"+id+" [name='afterfunc']")){
        var afterfunc = $("#"+id+" [name='afterfunc']").val();
    } else {
        var afterfunc = "";    
    }

    if($("#"+id+" [name='agree1']") && $("#"+id+" [name='agree1']").prop("checked") == false){
        var chkTitle = $("#"+id+" [name='agree1']").attr("title");
        if(!chkTitle || chkTitle=="undefined" ){
            chkTitle = "회원약관 동의";
        }
        if(confirm(chkTitle + "에 동의하지 않으면 신청이 진행되지 않습니다. 동의하시겠습니까?")){
            $("#"+id+" [name='agree1']").click();
        } else {
            return false;
        }
    }
    var queryString = $("#"+id).serialize();
    $.support.cors = true;
    $.ajax({
        type : 'POST',
        url : 'https://www.replyalba.com/intros/proc/submit.php',
        data : queryString,
        dataType : 'json',
        crossDomain: true,
        async:false,
        xhrFields: {
            withCredentials: true
        },
        error: function(xhr, status, error){
            alert("서버 통신에 문제가 발생했습니다. 잠시 후 다시 시도해 주세요.");
        },
        success : function(json){
            if(json.res==false){
                alert(json.msg);
                return false;
            } else {
                if(is_reload){
                    alert(json.msg);
                    location.reload();
                } else {
                    alert("팝업창으로 신청이 접수되었습니다.\n확인 후 결과는 지정된 연락처로\n문자 발송됩니다.");
                    if(afterfunc!=""){
                        var funcObj = eval(afterfunc);
                        funcObj();
                    }
                }
            }
        }
    });
    return false;
}

function _frmreq(id)
{
    if(!id){
        id="reqFrm";
    }

    if($("#"+id+" [name='agree1']") && $("#"+id+" [name='agree1']").prop("checked") == false){
        var chkTitle = $("#"+id+" [name='agree1']").attr("title");
        if(!chkTitle || chkTitle=="undefined" ){
            chkTitle = "회원약관 동의";
        }
        if(confirm(chkTitle + "에 동의하지 않으면 신청이 진행되지 않습니다. 동의하시겠습니까?")){
            $("#"+id+" [name='agree1']").click();
        } else {
            return false;
        }
    }
    var queryString = $("#"+id).serialize();
    $.support.cors = true;
    $.ajax({
        type : 'POST',
        url : 'https://www.replyalba.com/intros/proc/submit.frm.php',
        data : queryString,
        dataType : 'json',
        crossDomain: true,
        async:false,
        xhrFields: {
            withCredentials: true
        },
        error: function(xhr, status, error){
            alert("서버 통신에 문제가 발생했습니다. 잠시 후 다시 시도해 주세요.");
        },
        success : function(json){
            if(json.res==false){
                alert(json.msg);
            } else {
                alert("상담신청이 완료되었습니다.\n전화상담을 원하시면 평일 오전 9시부터\n순차적으로 연락드리겠습니다.");
                if(submit_reload) location.reload();
            }
        }
    });

    return false;
}

function _frmreq2(id)
{
    if(!id){
        id="reqFrm";
    }

    if($("#"+id+" [name='agree1']") && $("#"+id+" [name='agree1']").prop("checked") == false){
        var chkTitle = $("#"+id+" [name='agree1']").attr("title");
        if(!chkTitle || chkTitle=="undefined" ){
            chkTitle = "회원약관 동의";
        }
        alert(chkTitle + "에 동의하지 않으면 신청이 진행되지 않습니다.\n해당 항목은 필수입니다.");
        return false;
    }

    if($("#"+id+" [name='agree2']") && $("#"+id+" [name='agree2']").prop("checked") == false){
        var chkTitle = $("#"+id+" [name='agree2']").attr("title");
        if(!chkTitle || chkTitle=="undefined" ){
            chkTitle = "개인정보 수집 및 이용 동의";
        }
        alert(chkTitle + "에 동의하지 않으면 신청이 진행되지 않습니다.\n해당 항목은 필수입니다.");
        return false;
    }

    var queryString = $("#"+id).serialize();
    $.support.cors = true;
    $.ajax({
        type : 'POST',
        url : 'https://www.replyalba.com/intros/proc/submit.frm.php',
        data : queryString,
        dataType : 'json',
        crossDomain: true,
        async:false,
        xhrFields: {
            withCredentials: true
        },
        error: function(xhr, status, error){
            alert("서버 통신에 문제가 발생했습니다. 잠시 후 다시 시도해 주세요.");
        },
        success : function(json){
            if(json.res==false){
                alert(json.msg);
            } else {
                alert("상담신청이 완료되었습니다.\n전화상담을 원하시면 평일 오전 9시부터\n순차적으로 연락드리겠습니다.");
                if(submit_reload) location.reload();
            }
        }
    });

    return false;
}

function _frmreq3(id)
{
    if(!id){
        id="reqFrm";
    }

    if($("#"+id+" [name='agree1']") && $("#"+id+" [name='agree1']").prop("checked") == false){
        var chkTitle = $("#"+id+" [name='agree1']").attr("title");
        if(!chkTitle || chkTitle=="undefined" ){
            chkTitle = "회원약관 동의";
        }
        alert(chkTitle + "에 동의하지 않으면 신청이 진행되지 않습니다.\n해당 항목은 필수입니다.");
        return false;
    }

    if($("#"+id+" [name='agree2']") && $("#"+id+" [name='agree2']").prop("checked") == false){
        var chkTitle = $("#"+id+" [name='agree2']").attr("title");
        if(!chkTitle || chkTitle=="undefined" ){
            chkTitle = "개인정보 수집 및 이용 동의";
        }
        alert(chkTitle + "에 동의하지 않으면 신청이 진행되지 않습니다.\n해당 항목은 필수입니다.");
        return false;
    }

    var queryString = $("#"+id).serialize();
    $.support.cors = true;
    $.ajax({
        type : 'POST',
        url : 'https://www.replyalba.com/intros/proc/submit.frm.php',
        data : queryString,
        dataType : 'json',
        crossDomain: true,
        async:false,
        xhrFields: {
            withCredentials: true
        },
        error: function(xhr, status, error){
            alert("서버 통신에 문제가 발생했습니다. 잠시 후 다시 시도해 주세요.");
        },
        success : function(json){
            if(json.res==false){
                alert(json.msg);
            } else {
                alert("팝업창으로 신청이 접수되었습니다.\n확인 후 결과는 지정된 연락처로\n문자 발송됩니다.");
                if(submit_reload) location.reload();
            }
        }
    });

    return false;
}

function _frmreq33(id)
{
    if(!id){
        id="reqFrm";
    }

    if($("#"+id+" [name='agree1']") && $("#"+id+" [name='agree1']").prop("checked") == false){
        var chkTitle = $("#"+id+" [name='agree1']").attr("title");
        if(!chkTitle || chkTitle=="undefined" ){
            chkTitle = "회원약관 동의";
        }
        alert(chkTitle + "에 동의하지 않으면 신청이 진행되지 않습니다.\n해당 항목은 필수입니다.");
        return false;
    }

    var queryString = $("#"+id).serialize();
    $.support.cors = true;
    $.ajax({
        type : 'POST',
        url : 'https://www.replyalba.com/intros/proc/submit.frm.php',
        data : queryString,
        dataType : 'json',
        crossDomain: true,
        async:false,
        xhrFields: {
            withCredentials: true
        },
        error: function(xhr, status, error){
            alert("서버 통신에 문제가 발생했습니다. 잠시 후 다시 시도해 주세요.");
        },
        success : function(json){
            if(json.res==false){
                alert(json.msg);
            } else {
                alert("팝업창으로 신청이 접수되었습니다.\n확인 후 결과는 지정된 연락처로\n문자 발송됩니다.");
                if(submit_reload) location.reload();
            }
        }
    });

    return false;
}

function _frmreq4(id)
{
    if(!id){
        id="reqFrm";
    }

    if($("#"+id+" [name='agree1']") && $("#"+id+" [name='agree1']").prop("checked") == false){
        var chkTitle = $("#"+id+" [name='agree1']").attr("title");
        if(!chkTitle || chkTitle=="undefined" ){
            chkTitle = "회원약관 동의";
        }
        alert(chkTitle + "에 동의하지 않으면 신청이 진행되지 않습니다.\n해당 항목은 필수입니다.");
        return false;
    }

    if($("#"+id+" [name='agree2']") && $("#"+id+" [name='agree2']").prop("checked") == false){
        var chkTitle = $("#"+id+" [name='agree2']").attr("title");
        if(!chkTitle || chkTitle=="undefined" ){
            chkTitle = "개인정보 수집 및 이용 동의";
        }
        alert(chkTitle + "에 동의하지 않으면 신청이 진행되지 않습니다.\n해당 항목은 필수입니다.");
        return false;
    }

    if($("#"+id+" [name='agree3']") && $("#"+id+" [name='agree3']").prop("checked") == false){
        var chkTitle = $("#"+id+" [name='agree3']").attr("title");
        if(!chkTitle || chkTitle=="undefined" ){
            chkTitle = "제3자 정보 제공 동의";
        }
        alert(chkTitle + "에 동의하지 않으면 신청이 진행되지 않습니다.\n해당 항목은 필수입니다.");
        return false;
    }

    var queryString = $("#"+id).serialize();
    $.support.cors = true;
    $.ajax({
        type : 'POST',
        url : 'https://www.replyalba.com/intros/proc/submit.frm.php',
        data : queryString,
        dataType : 'json',
        crossDomain: true,
        async:false,
        xhrFields: {
            withCredentials: true
        },
        error: function(xhr, status, error){
            alert("서버 통신에 문제가 발생했습니다. 잠시 후 다시 시도해 주세요.");
        },
        success : function(json){
            if(json.res==false){
                alert(json.msg);
            } else {
                alert("팝업창으로 신청이 접수되었습니다.\n확인 후 결과는 지정된 연락처로\n문자 발송됩니다.");
                if(submit_reload) location.reload();
            }
        }
    });

    return false;
}

function _frmreq100(id)
{
    if(!id){
        id="reqFrm";
    }

    if($("#"+id+" [name='agree1']") && $("#"+id+" [name='agree1']").prop("checked") == false){
        var chkTitle = $("#"+id+" [name='agree1']").attr("title");
        if(!chkTitle || chkTitle=="undefined" ){
            chkTitle = "회원약관 동의";
        }
        if(confirm(chkTitle + "에 동의하지 않으면 신청이 진행되지 않습니다. 동의하시겠습니까?")){
            $("#"+id+" [name='agree1']").click();
        } else {
            return false;
        }
    }
    var queryString = $("#"+id).serialize();
    $.support.cors = true;
    $.ajax({
        type : 'POST',
        url : 'https://www.replyalba.com/intros/proc/submit.frm.php',
        data : queryString,
        dataType : 'json',
        crossDomain: true,
        async:false,
        xhrFields: {
            withCredentials: true
        },
        error: function(xhr, status, error){
            alert("서버 통신에 문제가 발생했습니다. 잠시 후 다시 시도해 주세요.");
        },
        success : function(json){
            $('form').each(function() {
                this.reset();
            });

            $('#finish_popup').fadeIn(300);
            $('#finish_iframe').attr('src', 'https://www.replyalba.com/intros/complete.php');
            $('body').addClass('notScroll');
        }
    });

    return false;
}

$(document).ready(function(){
    
    // 휴대폰 앞자리 입력 시 숫자만 허용 및 다음 입력으로 포커스 이동
    $("[name='hp2']").on('change keyup',function(e) {
        var keyCode = e.which ? e.which : e.keyCode;
        var txt = $(this).val();
        if(keyCode != 37 && keyCode != 39) {
            var pattern = /^[0-9]+$/;
            if (!pattern.test(txt)) {
                txt = txt.substr(0, txt.length - 1);
                $(this).val(txt);
            }
        }
        if(txt.length > 3){
            var thisFrm = $(this).parents("form").attr("id");
            $("#"+thisFrm+" [name='hp3']").focus();
        }
    });
    
    // 휴대폰 뒷자리 3자리 입력
    $("[name='hp3']").on('change keyup',function(e) {
        var keyCode = e.which ? e.which : e.keyCode;
        var txt = $(this).val();
        if(keyCode != 37 && keyCode != 39) {
            var pattern = /^[0-9]+$/;
            if (!pattern.test(txt)) {
                txt = txt.substr(0, txt.length - 1);
                $(this).val(txt);
            }
        }
    });
    
    // 전화번호 중간자리 입력
    $("[name='tel2']").on('change keyup',function(e) {
        var keyCode = e.which ? e.which : e.keyCode;
        var txt = $(this).val();
        if(keyCode != 37 && keyCode != 39) {
            var pattern = /^[0-9]+$/;
            if (!pattern.test(txt)) {
                txt = txt.substr(0, txt.length - 1);
                $(this).val(txt);
            }
        }
        if(txt.length > 3){
            var thisFrm = $(this).parents("form").attr("id");
            $("#"+thisFrm+" [name='tel3']").focus();
        }
    });
    
    // 전화번호 마지막자리 입력
    $("[name='tel3']").on('change keyup',function(e) {
        var keyCode = e.which ? e.which : e.keyCode;
        var txt = $(this).val();
        if(keyCode != 37 && keyCode != 39) {
            var pattern = /^[0-9]+$/;
            if (!pattern.test(txt)) {
                txt = txt.substr(0, txt.length - 1);
                $(this).val(txt);
            }
        }
    });

    // 이름 입력 시 특수문자 제거
    $("[name='name']").on('change keyup',function(e) {
        var keyCode = e.which ? e.which : e.keyCode;
        var txt = $(this).val();
        if(keyCode != 37 && keyCode != 39) {
            var pattern = /[ \{\}\[\]\/?.,;:|\)*~`!^\-_+<>@\#$%&\'\"\\\(\=]/gi;
            if (pattern.test(txt)) {
                txt = txt.substr(0, txt.length - 1);
                $(this).val(txt);
            }
        }
    });

    // 숫자만 입력 (numeric 클래스)
    $(".numeric").on('change keyup',function(e) {
        var keyCode = e.which ? e.which : e.keyCode;
        var txt = $(this).val();
        if(keyCode != 37 && keyCode != 39) {
            var pattern = /^[0-9]+$/;
            if (!pattern.test(txt)) {
                txt = txt.substr(0, txt.length - 1);
                $(this).val(txt);
            }
        }
    });
});
