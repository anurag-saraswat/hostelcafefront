function showdet(thi,p){
	var a= document.getElementsByClassName('det_week')[p-1];
	if(a.style.display=="none"){
		a.style.display="block";
		thi.classList.remove('fa-chevron-down');
		thi.classList.add('fa-chevron-up');
	}
	else{
		a.style.display="none";
		thi.classList.remove('fa-chevron-up');
		thi.classList.add('fa-chevron-down');
	}
}