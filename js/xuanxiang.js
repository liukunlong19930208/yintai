 /*搜索框失去焦点*/
 var search4=$(".search4")[0];
 search4.onfocus=function(){
 	  if (search4.value=="夏季美裙趴") {
 	  	search4.value="";
 	  };
 }
 search4.onblur=function(){
 	if (search4.value=="") {
 		search4.value="夏季美裙趴"
 	};
 }
/*选项卡*/
 //获取
window.onload = function() {
	var tupianbox = $(".tupianbox");
	var title = $(".te1");
  var red=$(".redrow");
  title[0].style.cssText="border-bottom:5px solid red";
  red[0].style.display="block";
	//移入事件，设置样式
	for (var i = 0; i < title.length; i++) {
		title[i].index = i;
		title[i].onmouseover = function() {
			for (var j = 0; j < tupianbox.length; j++) {
				title[j].style.cssText = "font-weight:normal;border-bottom:5px solid black;"
				tupianbox[j].style.display = "none"
        red[j].style.display="none";
			}
			this.style.cssText = "font-weight:bold;border-bottom:5px solid red;"
			tupianbox[this.index].style.display = "block"
      red[this.index].style.display="block";
		}
	}



	/* 银泰百货*/
	var tupianbox1 = $(".tupianbox2");
	var title1 = $(".te2");
  var smallrow=$(".smallrow");
  title1[0].style.cssText="border-bottom:3px solid red";
  smallrow[0].style.display="block";
	//移入事件，设置样式
	for (var i = 0; i < title1.length; i++) {
		title1[i].index = i
		title1[i].onmouseover = function() {
			for (var j = 0; j < tupianbox1.length; j++) {
				title1[j].style.cssText = "font-weight:normal;border-bottom:3px solid black;"
				tupianbox1[j].style.display = "none";
        smallrow[j].style.display="none";
			};
			this.style.cssText = "font-weight:bold;border-bottom:3px solid red;"
			tupianbox1[this.index].style.display = "block"
      smallrow[this.index].style.display="block";
		}
	}



	/*black box */


	var blackbox = $(".blackbox");
	var b = $(".banner4");
	//移入事件，设置样式
	for (var i = 0; i < b.length; i++) {
		b[i].index = i
		b[i].onmouseover = function() {
			for (var j = 0; j < blackbox.length; j++) {

				blackbox[j].style.display = "none"
			}
			blackbox[this.index].style.display = "block";
		}
		b[i].onmouseout = function() {
			for (var j = 0; j < blackbox.length; j++) {
				blackbox[j].style.display = "none"
			}
			blackbox[this.index].style.display = "none";
		}
	}
/*顶部导航1,2*/
 var daohang31 = $(".daohang31")[0]; 
 var dao1=$(".dao1")[0];
 var wexin=$(".wexin")[0];
 var wechat=$(".wechat")[0];
 var daohang55=$(".daohang55");
 var jiayou=$(".jiayou")[0];
        daohang31.onmouseover = function() {
			wechat.style.display = "block";
      daohang55[0].style.color="red";
      daohang55[1].style.color="red";
      jiayou.style.display="block";


		
     

		}
		daohang31.onmouseout = function() {
			wechat.style.display = "none";
      daohang55[0].style.color="";
      daohang55[1].style.color="";
      jiayou.style.display="none";
		
      
		}

 var daohang32 = $(".daohang32")[0];
 var dao2=$(".dao2")[0];
 var sjewm=$(".sjewm")[0];
 var sjhe=$(".sjhe")[0];
 var dao10=$(".dao10");
 var hayou=$(".hayou")[0];
        daohang32.onmouseover = function() {
			sjhe.style.display = "block";
      dao10[0].style.color="red";
      dao10[1].style.color="red";
      hayou.style.display="block";

		}
		daohang32.onmouseout = function() {
			sjhe.style.display = "none";
       dao10[0].style.color="";
      dao10[1].style.color="";
      hayou.style.display="none";
		}
/*顶部导航3*/
var my=$(".my")[0];
var list=$(".list")[0];
my.onmouseover=function(){
  my.style.background="white";
  list.style.display="block";
}
my.onmouseout=function(){
  my.style.background="";
  list.style.display="none";
}


	/*  轮播 */
	//记录当前窗口中是图片的下标。
	var imgs = $("a", $(".imgbox")[0]);
	var middle1 = $(".middle1")[0];
    var bb= $(".yuan");
    var mw=parseInt(getStyle(imgs[0],"width"));
    var rightbtn=$(".btnr")[0];
    var leftbtn=$(".btnl")[0];
    var banner1=$(".banner1");
    banner1[0].style.zIndex=10;
	imgs[0].style.zIndex = 10;
	bb[0].style.background="red";
	var n=0;

    var t = setInterval(move, 4000);
	middle1.onmouseover = function() {
		clearInterval(t);
		leftbtn.style.display="block";
		rightbtn.style.display="block";
	}
	middle1.onmouseout = function() {
		t = setInterval(move, 4000)
		leftbtn.style.display="none";
		rightbtn.style.display="none";
	}
	      function move(){
	   	    n++;
            if (n==imgs.length) {
            	n=0;
            }
	      

	   for(var i=0;i<imgs.length;i++){
	   	   // imgs[i].style.display="none";
	   	     animate(imgs[i],{opacity:0},600);
	   	   	 bb[i].style.background="#666";
	   	   	 animate(banner1[i],{opacity:0},600);
	   }
	     // imgs[n].style.display="block";
	     animate(imgs[n],{opacity:1},600);
	     animate(banner1[n],{opacity:1},600);
	     bb[n].style.background="red";
	     }
       
            for(var i=0;i<bb.length;i++){
       	    bb[i].index=i;
       	    bb[i].onclick=function(){
       	    	    for(var i=0;i<imgs.length;i++){
       	    	    	bb[i].style.background="#666";
       	    	    	// imgs[i].style.display="none";
       	    	    	animate(imgs[i],{opacity:0},600);
       	    	    	animate(banner1[i],{opacity:0},600);

       	    	    }
       	    	    bb[this.index].style.background="red";
       	    	    // imgs[this.index].style.display="block";
       	    	    animate(imgs[this.index],{opacity:1},600);
       	    	    animate(banner1[this.index],{opacity:1},600);
       	    	    n=this.index;
       	    }
       }

       function movel(){
	   	    n--;
            if (n<0) {
            	n=imgs.length-1;
            }
	      

	   for(var i=0;i<imgs.length;i++){
	   	   // imgs[i].style.display="none";
	   	     animate(imgs[i],{opacity:0},600);
	   	     animate(banner1[i],{opacity:0},600);
	   	   	 bb[i].style.background="#666";
	   }
	     // imgs[n].style.display="block";
	     animate(imgs[n],{opacity:1},600);
	     animate(banner1[n],{opacity:1},600);
	     bb[n].style.background="red";
	     }

       rightbtn.onclick=function(){
       	  move();
       }
       leftbtn.onclick=function(){
       	  movel();
       }  
   

  /*中间小轮播1*/
      var shichuans=$("a",$(".shichuan")[0]);
      var btn1=$(".btn1")[0];
      var btn2=$(".btn2")[0];
      var dd=$(".yuan3");
      var shi=$(".shichuan")[0];
      var mw=parseInt(getStyle(shichuans[0],"width"));
      shichuans[0].style.zIndex=10;
      dd[0].style.background="red";
      var now=0;
      var next=0;
      shi.onmouseover=function(){
      	btn1.style.display="block";
      	btn2.style.display="block";
      }
      shi.onmouseout=function(){
      	btn1.style.display="none";
      	btn2.style.display="none";
      }
      for (var i = 0; i < dd.length; i++) {
      	dd[i].index=i;
      	dd[i].onclick=function(){
      		if (now>this.index) {
      			shichuans[this.index].style.left=-mw+"px";
      			animate(shichuans[now],{left:mw});
      			animate(shichuans[this.index],{left:0});
      		}else if (now<this.index) {
      			shichuans[this.index].style.left=mw+"px";
      			animate(shichuans[now],{left:-mw});
      			animate(shichuans[this.index],{left:0});
      		}else{
      			 return;
      		}
      		dd[now].style.background="#ccc";
      		dd[this.index].style.background="red";
      		now=this.index;
      		next=this.index;
      	}
      }
     
     
     
    btn1.onclick=function(){
     	dd[0].style.background="red";
     	dd[1].style.background="";
     	animate(shichuans[1],{left:mw});
     	animate(shichuans[0],{left:0});
        
    }	
    
     btn2.onclick=function(){
     dd[0].style.backgroundColor="";
     dd[1].style.backgroundColor="red";
     animate(shichuans[0],{left:-mw});
     animate(shichuans[1],{left:0})
    }

/*中间小轮播4*/
      var shichuan1=$("a",$(".shichuan1")[0]);
      var btn3=$(".btn3")[0];
      var btn4=$(".btn4")[0];
      var cc=$(".yuan5");
      var shi1=$(".shichuan1")[0];
      var mw=parseInt(getStyle(shichuan1[0],"width"));
      shichuan1[0].style.zIndex=10;
      cc[0].style.background="red";
      var now10=0;
      var next10=0;
      shi1.onmouseover=function(){
        btn3.style.display="block";
        btn4.style.display="block";
      }
      shi1.onmouseout=function(){
        btn3.style.display="none";
        btn4.style.display="none";
      }
      for (var i = 0; i < cc.length; i++) {
        cc[i].index=i;
        cc[i].onclick=function(){
          if (now10>this.index) {
            shichuan1[this.index].style.left=-mw+"px";
            animate(shichuan1[now10],{left:mw});
            animate(shichuan1[this.index],{left:0});
          }else if (now10<this.index) {
            shichuan1[this.index].style.left=mw+"px";
            animate(shichuan1[now10],{left:-mw});
            animate(shichuan1[this.index],{left:0});
          }else{
             return;
          }
          cc[now10].style.background="#ccc";
          cc[this.index].style.background="red";
          now10=this.index;
          next10=this.index;
        }
      }
     
     
     
    btn3.onclick=function(){
      cc[0].style.background="red";
      cc[1].style.background="";
      animate(shichuan1[1],{left:mw});
      animate(shichuan1[0],{left:0});
        
    } 
    
     btn4.onclick=function(){
     cc[0].style.backgroundColor="";
     cc[1].style.backgroundColor="red";
     animate(shichuan1[0],{left:-mw});
     animate(shichuan1[1],{left:0})
    }

/*中间小轮播5*/
      var shichuan2=$("a",$(".shichuan2")[0]);
      var btn5=$(".btn5")[0];
      var btn6=$(".btn6")[0];
      var ff=$(".yuan7");
      var shi2=$(".shichuan2")[0];
      var mw=parseInt(getStyle(shichuan2[0],"width"));
      shichuan2[0].style.zIndex=10;
      ff[0].style.background="red";
      var now11=0;
      var next11=0;
      shi2.onmouseover=function(){
        btn5.style.display="block";
        btn6.style.display="block";
      }
      shi2.onmouseout=function(){
        btn5.style.display="none";
        btn6.style.display="none";
      }
      for (var i = 0; i < ff.length; i++) {
        ff[i].index=i;
        ff[i].onclick=function(){
          if (now11>this.index) {
            shichuan2[this.index].style.left=-mw+"px";
            animate(shichuan2[now11],{left:mw});
            animate(shichuan2[this.index],{left:0});
          }else if (now11<this.index) {
            shichuan2[this.index].style.left=mw+"px";
            animate(shichuan2[now11],{left:-mw});
            animate(shichuan2[this.index],{left:0});
          }else{
             return;
          }
          ff[now11].style.background="#ccc";
          ff[this.index].style.background="red";
          now11=this.index;
          next11=this.index;
        }
      }
     
     
     
    btn5.onclick=function(){
      ff[0].style.background="red";
      ff[1].style.background="";
      animate(shichuan2[1],{left:mw});
      animate(shichuan2[0],{left:0});
        
    } 
    
     btn6.onclick=function(){
     ff[0].style.backgroundColor="";
     ff[1].style.backgroundColor="red";
     animate(shichuan2[0],{left:-mw});
     animate(shichuan2[1],{left:0})
    }
/*中间小轮播6*/
      var shichuan3=$("a",$(".shichuan3")[0]);
      var btn7=$(".btn7")[0];
      var btn8=$(".btn8")[0];
      var gg=$(".yuan9");
      var shi3=$(".shichuan3")[0];
      var mw=parseInt(getStyle(shichuan3[0],"width"));
      shichuan3[0].style.zIndex=10;
      gg[0].style.background="red";
      var now12=0;
      var next12=0;
      shi3.onmouseover=function(){
        btn7.style.display="block";
        btn8.style.display="block";
      }
      shi3.onmouseout=function(){
        btn7.style.display="none";
        btn8.style.display="none";
      }
      for (var i = 0; i < gg.length; i++) {
        gg[i].index=i;
        gg[i].onclick=function(){
          if (now12>this.index) {
            shichuan3[this.index].style.left=-mw+"px";
            animate(shichuan3[now12],{left:mw});
            animate(shichuan3[this.index],{left:0});
          }else if (now12<this.index) {
            shichuan3[this.index].style.left=mw+"px";
            animate(shichuan3[now12],{left:-mw});
            animate(shichuan3[this.index],{left:0});
          }else{
             return;
          }
          gg[now12].style.background="#ccc";
          gg[this.index].style.background="red";
          now12=this.index;
          next12=this.index;
        }
      }
     
     
     
    btn7.onclick=function(){
      gg[0].style.background="red";
      gg[1].style.background="";
      animate(shichuan3[1],{left:mw});
      animate(shichuan3[0],{left:0});
        
    } 
    
     btn8.onclick=function(){
     gg[0].style.backgroundColor="";
     gg[1].style.backgroundColor="red";
     animate(shichuan3[0],{left:-mw});
     animate(shichuan3[1],{left:0})
    }
   /*中间小轮播7*/
      var shichuan4=$("a",$(".shichuan4")[0]);
      var btn9=$(".btn9")[0];
      var btn10=$(".btn10")[0];
      var kk=$(".yuan11");
      var shi4=$(".shichuan4")[0];
      var mw=parseInt(getStyle(shichuan4[0],"width"));
      shichuan4[0].style.zIndex=10;
      kk[0].style.background="red";
      var now13=0;
      var next13=0;
      shi4.onmouseover=function(){
        btn9.style.display="block";
        btn10.style.display="block";
      }
      shi4.onmouseout=function(){
        btn9.style.display="none";
        btn10.style.display="none";
      }
      for (var i = 0; i < kk.length; i++) {
        kk[i].index=i;
        kk[i].onclick=function(){
          if (now13>this.index) {
            shichuan4[this.index].style.left=-mw+"px";
            animate(shichuan4[now13],{left:mw});
            animate(shichuan4[this.index],{left:0});
          }else if (now13<this.index) {
            shichuan4[this.index].style.left=mw+"px";
            animate(shichuan4[now13],{left:-mw});
            animate(shichuan4[this.index],{left:0});
          }else{
             return;
          }
          kk[now13].style.background="#ccc";
          kk[this.index].style.background="red";
          now13=this.index;
          next13=this.index;
        }
      }
     
     
     
    btn9.onclick=function(){
      kk[0].style.background="red";
      kk[1].style.background="";
      animate(shichuan4[1],{left:mw});
      animate(shichuan4[0],{left:0});
        
    } 
    
     btn10.onclick=function(){
     kk[0].style.backgroundColor="";
     kk[1].style.backgroundColor="red";
     animate(shichuan4[0],{left:-mw});
     animate(shichuan4[1],{left:0})
    }
 /*中间小轮播8*/
      var shichuan5=$("a",$(".shichuan5")[0]);
      var btn11=$(".btn11")[0];
      var btn12=$(".btn12")[0];
      var ll=$(".yuan13");
      var shi5=$(".shichuan5")[0];
      var mw=parseInt(getStyle(shichuan5[0],"width"));
      shichuan5[0].style.zIndex=10;
      ll[0].style.background="red";
      var now14=0;
      var next14=0;
      shi5.onmouseover=function(){
        btn11.style.display="block";
        btn12.style.display="block";
      }
      shi5.onmouseout=function(){
        btn11.style.display="none";
        btn12.style.display="none";
      }
      for (var i = 0; i < ll.length; i++) {
        ll[i].index=i;
        ll[i].onclick=function(){
          if (now14>this.index) {
            shichuan5[this.index].style.left=-mw+"px";
            animate(shichuan5[now14],{left:mw});
            animate(shichuan5[this.index],{left:0});
          }else if (now14<this.index) {
            shichuan5[this.index].style.left=mw+"px";
            animate(shichuan5[now14],{left:-mw});
            animate(shichuan5[this.index],{left:0});
          }else{
             return;
          }
          ll[now14].style.background="#ccc";
          ll[this.index].style.background="red";
          now14=this.index;
          next14=this.index;
        }
      }
     
     
     
    btn11.onclick=function(){
      ll[0].style.background="red";
      ll[1].style.background="";
      animate(shichuan5[1],{left:mw});
      animate(shichuan5[0],{left:0});
        
    } 
    
     btn12.onclick=function(){
     ll[0].style.backgroundColor="";
     ll[1].style.backgroundColor="red";
     animate(shichuan5[0],{left:-mw});
     animate(shichuan5[1],{left:0})
    } 

/*最左边小轮播1*/
   var content=$(".ma");
   var zl=$(".ma1")[0];
   var yr=$(".ma2")[0];
   var width=parseInt(getStyle(content[0],"width"));
   for (var i = 0; i < content.length; i++) {
   	if (i==0) {
   		continue;
   	};
   	content[i].style.left=width+"px";
   };
   var now1=0;
   var next1=0;
   function moveL(){
   	next1++;
   	if (next1>content.length-1) {
   		next1=0;
   	}
   	content[next1].style.left=width+"px";
   	animate(content[now1],{left:-width});
   	animate(content[next1],{left:0});
   	now1=next1;
   }
    function moveR(){
   	next1--;
   	if (next1<0) {
   		next1=content.length-1;
   	}
   	content[next1].style.left=-width+"px";
   	animate(content[now1],{left:width});
   	animate(content[next1],{left:0});
   	now1=next1;
   }
   zl.onclick=function(){
   	   moveR();
   }
   yr.onclick=function(){
   	      moveL();
   }
/*最左边小轮播2*/
   var f=$(".fa");
   var fl=$(".fa1")[0];
   var fr=$(".fa2")[0];
   var width=parseInt(getStyle(f[0],"width"));
   for (var i = 0; i < f.length; i++) {
   	if (i==0) {
   		continue;
   	};
   	f[i].style.left=width+"px";
   };
   var now2=0;
   var next2=0;
   function moveL1(){
   	next2++;
   	if (next2>f.length-1) {
   		next2=0;
   	}
   	f[next2].style.left=width+"px";
   	animate(f[now2],{left:-width});
   	animate(f[next2],{left:0});
   	now2=next2;
   }
    function moveR1(){
   	next2--;
   	if (next2<0) {
   		next2=f.length-1;
   	}
   	f[next2].style.left=-width+"px";
   	animate(f[now2],{left:width});
   	animate(f[next2],{left:0});
   	now2=next2;
   }
   fl.onclick=function(){
   	   moveR1();
   }
   fr.onclick=function(){
   	      moveL1();
   }
/*最左边小轮播3*/
   var jing=$(".jing");
   var jingl=$(".jing1")[0];
   var jingr=$(".jing2")[0];
   var width=parseInt(getStyle(jing[0],"width"));
   for (var i = 0; i < jing.length; i++) {
   	if (i==0) {
   		continue;
   	};
   	jing[i].style.left=width+"px";
   };
   var now3=0;
   var next3=0;
   function moveL2(){
   	next3++;
   	if (next3>jing.length-1) {
   		next3=0;
   	}
   	jing[next3].style.left=width+"px";
   	animate(jing[now3],{left:-width});
   	animate(jing[next3],{left:0});
   	now3=next3;
   }
    function moveR2(){
   	next3--;
   	if (next3<0) {
   		next3=jing.length-1;
   	}
   	jing[next3].style.left=-width+"px";
   	animate(jing[now3],{left:width});
   	animate(jing[next3],{left:0});
   	now3=next3;
   }
   jingl.onclick=function(){
   	   moveR2();
   }
   jingr.onclick=function(){
   	      moveL2();
   }
/*最左边小轮播4*/
   var sh=$(".sh");
   var shl=$(".sh1")[0];
   var shr=$(".sh2")[0];
   var width=parseInt(getStyle(sh[0],"width"));
   for (var i = 0; i < sh.length; i++) {
   	if (i==0) {
   		continue;
   	};
   	sh[i].style.left=width+"px";
   };
   var now4=0;
   var next4=0;
   function moveL3(){
   	next4++;
   	if (next4>sh.length-1) {
   		next4=0;
   	}
   	sh[next4].style.left=width+"px";
   	animate(sh[now4],{left:-width});
   	animate(sh[next4],{left:0});
   	now4=next4;
   }
    function moveR3(){
   	next4--;
   	if (next4<0) {
   		next4=sh.length-1;
   	}
   	sh[next4].style.left=-width+"px";
   	animate(sh[now4],{left:width});
   	animate(sh[next4],{left:0});
   	now4=next4;
   }
   shl.onclick=function(){
   	   moveR3();
   }
   shr.onclick=function(){
   	      moveL3();
   }
/*最左边小轮播5*/
   var be=$(".be");
   var bel=$(".be1")[0];
   var ber=$(".be2")[0];
   var width=parseInt(getStyle(be[0],"width"));
   for (var i = 0; i < be.length; i++) {
   	if (i==0) {
   		continue;
   	};
   	be[i].style.left=width+"px";
   };
   var now5=0;
   var next5=0;
   function moveL4(){
   	next5++;
   	if (next5>be.length-1) {
   		next5=0;
   	}
   	be[next5].style.left=width+"px";
   	animate(be[now5],{left:-width});
   	animate(be[next5],{left:0});
   	now5=next5;
   }
    function moveR4(){
   	next5--;
   	if (next5<0) {
   		next5=be.length-1;
   	}
   	be[next5].style.left=-width+"px";
   	animate(be[now5],{left:width});
   	animate(be[next5],{left:0});
   	now5=next5;
   }
   bel.onclick=function(){
   	   moveR4();
   }
   ber.onclick=function(){
   	      moveL4();
   }
/*最左边小轮播6*/
   var sp=$(".sp");
   var spl=$(".sp1")[0];
   var spr=$(".sp2")[0];
   var width=parseInt(getStyle(sp[0],"width"));
   for (var i = 0; i < sp.length; i++) {
   	if (i==0) {
   		continue;
   	};
   	sp[i].style.left=width+"px";
   };
   var now6=0;
   var next6=0;
   function moveL5(){
   	next6++;
   	if (next6>sp.length-1) {
   		next6=0;
   	}
   	sp[next6].style.left=width+"px";
   	animate(sp[now6],{left:-width});
   	animate(sp[next6],{left:0});
   	now6=next6;
   }
    function moveR5(){
   	next6--;
   	if (next6<0) {
   		next6=sp.length-1;
   	}
   	sp[next6].style.left=-width+"px";
   	animate(sp[now6],{left:width});
   	animate(sp[next6],{left:0});
   	now6=next6;
   }
   spl.onclick=function(){
   	   moveR5();
   }
   spr.onclick=function(){
   	      moveL5();
   }
/*最左边小轮播7*/
   var in1=$(".in1");
   var in1l=$(".in2")[0];
   var in1r=$(".in3")[0];
   var width=parseInt(getStyle(in1[0],"width"));
   for (var i = 0; i < in1.length; i++) {
   	if (i==0) {
   		continue;
   	};
   	in1[i].style.left=width+"px";
   };
   var now7=0;
   var next7=0;
   function moveL6(){
   	next7++;
   	if (next7>in1.length-1) {
   		next7=0;
   	}
   	in1[next7].style.left=width+"px";
   	animate(in1[now7],{left:-width});
   	animate(in1[next7],{left:0});
   	now7=next7;
   }
    function moveR6(){
   	next7--;
   	if (next7<0) {
   		next7=in1.length-1;
   	}
   	in1[next7].style.left=-width+"px";
   	animate(in1[now7],{left:width});
   	animate(in1[next7],{left:0});
   	now7=next7;
   }
   in1l.onclick=function(){
   	   moveR6();
   }
   in1r.onclick=function(){
   	      moveL6();
   }
/*最左边小轮播8*/
   var ke=$(".ke");
   var kel=$(".ke1")[0];
   var ker=$(".ke2")[0];
   var width=parseInt(getStyle(ke[0],"width"));
   for (var i = 0; i < ke.length; i++) {
   	if (i==0) {
   		continue;
   	};
   	ke[i].style.left=width+"px";
   };
   var now8=0;
   var next8=0;
   function moveL7(){
   	next8++;
   	if (next8>ke.length-1) {
   		next8=0;
   	}
   	ke[next8].style.left=width+"px";
   	animate(ke[now8],{left:-width});
   	animate(ke[next8],{left:0});
   	now8=next8;
   }
    function moveR7(){
   	next8--;
   	if (next8<0) {
   		next8=ke.length-1;
   	}
   	ke[next8].style.left=-width+"px";
   	animate(ke[now8],{left:width});
   	animate(ke[next8],{left:0});
   	now8=next8;
   }
   kel.onclick=function(){
   	   moveR7();
   }
   ker.onclick=function(){
   	      moveL7();
   }
   /*最左边小轮播9*/
   var ol=$(".ol");
   var oll=$(".ol1")[0];
   var olr=$(".ol2")[0];
   var width=parseInt(getStyle(ol[0],"width"));
   for (var i = 0; i < ol.length; i++) {
   	if (i==0) {
   		continue;
   	};
   	ol[i].style.left=width+"px";
   };
   var now9=0;
   var next9=0;
   function moveL8(){
   	next9++;
   	if (next9>ol.length-1) {
   		next9=0;
   	}
   	ol[next9].style.left=width+"px";
   	animate(ol[now9],{left:-width});
   	animate(ol[next9],{left:0});
   	now9=next9;
   }
    function moveR8(){
   	next9--;
   	if (next9<0) {
   		next9=ol.length-1;
   	}
   	ol[next9].style.left=-width+"px";
   	animate(ol[now9],{left:width});
   	animate(ol[next9],{left:0});
   	now9=next9;
   }
   oll.onclick=function(){
   	   moveR8();
   }
   olr.onclick=function(){
   	      moveL8();
   }
/*最左边的小箭头*/
var zuo=$(".zuoshijian");
var you=$(".youshijian");
var hei=$(".hei");
var hei1=$(".hei1");
var huishi=$(".huishi");
var huishi1=$(".huishi1");
for (var i = 0; i < zuo.length; i++) {
	zuo[i].index=i;
	zuo[i].onmouseover=function(){
		hei[this.index].style.display="block";
		huishi[this.index].style.display="none";
	}
	zuo[i].onmouseout=function(){
		hei[this.index].style.display="none";
		huishi[this.index].style.display="block";
	}
}	
  for (var i = 0; i < you.length; i++) {
  	you[i].index=i;
  
	you[i].onmouseover=function(){
		hei1[this.index].style.display="block";
		huishi1[this.index].style.display="none";
	}
	you[i].onmouseout=function(){
		hei1[this.index].style.display="none";
		huishi1[this.index].style.display="block";
	}
}
  /*楼层跳转*/
//返回顶部
var dear=$(".miss")
var famous=$(".famous")
for (var i = 0; i < dear.length; i++) {
  dear[i].aa=i
  dear[i].onmouseover=function(){
    famous[this.aa].style.display="block"
  }
  dear[i].onmouseout=function(){
    famous[this.aa].style.display="none"
  }
};
   //侧边导航
document.documentElement.scrollTop=1;
var obj=document.documentElement.scrollTop?document.documentElement:document.body;
var nav=$(".nav")[0];
var louceng2=$(".louceng2")
var flagtop=1
var flagdown=true
var nowl=0
window.onscroll=function  () {
  if(obj.scrollTop>=700){
    if (flagtop==1) {
      nav.style.display="block"
      flagtop=2
      flagdown=true
    }
  }
  else{
    if (flagdown==true) {
      nav.style.display="none"
      flagtop=1
      flagdown=false
    }
  }
  for (var i = 0; i < louceng2.length; i++) {
    if(louceng2[i].offsetTop<=obj.scrollTop+200){
      for (var j = 0; j < famous.length; j++) {
        famous[j].style.display="none"
      }
      famous[i].style.display="block"
      nowl=i
    }
  };
}
for (var q = 0; q < famous.length; q++) {
  famous[q].aa=q
  famous[q].onclick=function  () {
    animate(obj,{scrollTop:louceng2[this.aa].offsetTop-150},300)
      famous[this.aa].style.display="block" 
      nowl=this.aa
  }
  }

/*移动黑色框*/
var kuang=$(".kuang")
var tops=$(".topp")
var lefts=$(".leftt")
var rights=$(".right")
var bottom=$(".bottom")
for (var i = 0; i < kuang.length; i++) {
  kuang[i].aa=i
  kuang[i].onmouseover=function  () {
    var ow=this.offsetWidth
    var oh=this.offsetHeight
    animate(tops[this.aa],{width:ow},400)
    animate(bottom[this.aa],{width:ow},400)
    animate(lefts[this.aa],{height:oh},400)
    animate(rights[this.aa],{height:oh},400)
  }
  kuang[i].onmouseout=function  () {
    var ow=this.offsetWidth
    var oh=this.offsetHeight
    animate(tops[this.aa],{width:0},400)
    animate(bottom[this.aa],{width:0},400)
    animate(lefts[this.aa],{height:0},400)
    animate(rights[this.aa],{height:0},400)
  }
};

}