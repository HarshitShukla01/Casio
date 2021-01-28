function myfunc(ref)
			{
			ref.currentTime=0;
		    ref.play();
			}
			document.addEventListener("keypress", e=>{
		        var key=e.key;
				if(key=='q') $("#w1").click();
				else if(key=='w') $("#w2").click();
				else if(key=='e') $("#w3").click();
				else if(key=='r') $("#w4").click();
				else if(key=='t') $("#w5").click();
				else if(key=='y') $("#w6").click();
				else if(key=='u') $("#w7").click();
				else if(key=='i') $("#w8").click();
		        else if(key=='o') $("#w9").click();
				else if(key=='p') $("#w0").click();
				else if(key=='a') $("#w10").click();
				else if(key=='s') $("#w11").click();
		        else if(key=='d') $("#w12").click();
				else if(key=='f') $("#w13").click();
				else if(key=='1') $("#b1").click();
				else if(key=='2') $("#b2").click();
				else if(key=='3') $("#b3").click();
				else if(key=='4') $("#b4").click();
				else if(key=='5') $("#b5").click();
				else if(key=='6') $("#b6").click();
				else if(key=='7') $("#b7").click();
				else if(key=='8') $("#b8").click();
				else if(key=='9') $("#b9").click();
				else if(key=='0') $("#b0").click();
			})