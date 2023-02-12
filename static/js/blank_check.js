function space_check(){
    if (!document.getElementById("content").value.replace(/(^\s*)|(\s*$)/gi, ""))
    {
        alert("내용을 입력하세요.");
        document.getElementById("content").focus();
        return false;
    }
}