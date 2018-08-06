function byId(id){
	return typeof(id) === "string"?document.getElementById(id):id;
}
var index=0,
	timer=null,
	pics=document.getElementById("banner").getElementsByTagName("div"),
	dots=byId("dots").getElementsByTagName("span"),
	len=pics.length,
	prev=byId("prev"),
	next=byId("next"),
	bc=byId("box-content"),
	bi=bc.getElementsByClassName("box-item");
	sm=byId("sub-menu"),
	si=sm.getElementsByClassName("sub-inner"),
	banner=byId("banner");
function slideImg(){
	var main=byId("main");
	main.onmouseover=function ci(){
		if(timer)clearInterval(timer)
	}
	main.onmouseout=function st(){
		timer = setInterval(function(){
			index++; 
			if(index>=len){
			index=0;
			}
			changeImg();
		},3000);
	}
	main.onmouseout();

	for(var d=0;d<len;d++){
		dots[d].id=d;
		dots[d].onclick=function(){
			index=this.id;
			this.className="active2";
			changeImg();
		}
	}
	prev.onclick=function(){
		index--;
		if(index<0) index=len-1;
		changeImg()
	}
	next.onclick=function(){
		index++;
		if (index>=len) index=0;
		changeImg()
	}
	// 菜单
	for(var m=0;m<bi.length;m++){
        bi[m].setAttribute("data-index",m);
        bi[m].onmouseover = function(){
            sm.className = "sub-menu";
            var idx = this.getAttribute("data-index");
            for(var j=0;j<si.length;j++){
               si[j].style.display = 'none';
               bi[j].style.background="none";
            } 
            si[idx].style.display = "block";
            bi[idx].style.background = "rgba(0,0,0,0.1)";
        }
    }
    banner.onmouseout=function(){
    	for(o=0;o<bi.length;o++){
    		bi[o].style.background="none";
    	}
    }
    console.log(banner)
    bc.onmouseout=function(){
    	sm.className="sub-menu hidden";
    }
    sm.onmouseover=function(){
    	sm.className="sub-menu";
    }
    sm.onmouseout=function(){
    	sm.className="sub-menu hidden";
    }
}
function changeImg(){
	for(var i=0;i<len;i++){
		pics[i].style.display="none"
		dots[i].className="";
	}
	pics[index].style.display='block';
	dots[index].className="active2";
}
slideImg();
