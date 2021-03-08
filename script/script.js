$(function(){//제이쿼리 사용 시작

	// 온에어 클릭시
	$("#index li.on").click(function(){
			$("#contents").show(500);
			$("#contents2").hide(500);

		})

	// 오시는길 클릭시
	$("#index li.way").click(function(){
			$("#contents2").show(500);
			$("#contents").hide(500);

		})
	

})//제이쿼리 사용 끝