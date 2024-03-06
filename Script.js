window.onload=()=>{
	setTimeout(()=>{
	document.queryselector("body").classList.add('display');
}, 4000);
};

document.queryselector('.hamburger-menu').
addEventListener('click',()=>{
document.queryselector('.container').classList.toggle
('change');
});

document.queryselector(".scroll-btn").addEventListener("click", () =>{
	document.queryselector("html").style.scrollbehavior
	="smooth";
	setTimeout(()=>{
		document.queryselector("html").style.
	scrollbehavior="unset";
	},1000)
});