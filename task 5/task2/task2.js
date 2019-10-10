			var q=0;
			var arr = new Array();
			var pass=new Array();
			pass[0]="Ford GT";
			pass[1]="Lamborghini Aventador";
			pass[2]="BMW i8 M";
			pass[3]="Toyta RAV4"
			pass[4]="Ford Mustang"
			var caas=0;
			var xx = new Image();
			xx.src="https://3.bp.blogspot.com/-hT27KyPbhsA/XH237isndYI/AAAAAAAAAFA/Q5W7VfAuGt4FcT-o-jY8GmBAGrod_PlDACPcBGAYYCw/s1600/gfdgfgjhklk%253B.jpgs";

			arr[0]=new Image();
			arr[0].src="https://www.netcarshow.com/Ford-GT-2017-1024-01.jpg";

			arr[1]=new Image();
			arr[1].src='https://cdn.motor1.com/images/mgl/MoVM6/s1/lamborghini-sc18-alston.jpg';

			arr[2]=new Image();
			arr[2].src='https://cdn.motor1.com/images/mgl/vEJmQ/s1/bmw-i8-m-rendering.jpg';

			arr[3]=new Image();
			arr[3].src='https://i.ytimg.com/vi/1-0cD9thTIA/maxresdefault.jpg';

			arr[4]=new Image();
			arr[4].src='https://d3lp4xedbqa8a5.cloudfront.net/imagegen/max/ccr/1023/-/s3/digital-cougar-assets/whichcar/2018/07/30/-1/2018-Ford-Mustang-GT-in-depth-review.jpg';



			function s(){
			document.getElementById("resim").src=document.getElementById("second").src;

					}

			function f(){
						document.getElementById("resim").src=document.getElementById("first").src;

					}

			function t(){
						document.getElementById("resim").src=document.getElementById("three").src;

					}


			function x(){
						document.getElementById("resim").src=document.getElementById("four").src;

					}

			function back(){
				if(q==0){
					q=5;
					document.getElementById("resim").src = arr[q-1].src;
					document.getElementById("first").src = arr[q-1].src;


					q--;
				}else{
					document.getElementById("resim").src = arr[q-1].src;
					document.getElementById("first").src = arr[q-1].src;

					q--;
				}
			}

			function next(){
				if(q==4){
					q=-1;
					document.getElementById("resim").src = arr[q+1].src;
					document.getElementById("first").src = arr[q+1].src;

					q++;
				}else{
					document.getElementById("resim").src=arr[q+1].src;
					document.getElementById("first").src = arr[q+1].src;

					q++;

			}








		}var v=1;


		function back2(){
				if(v==0){
					v=4;
					document.getElementById("second").src=arr[v].src;


				}
				else{
				v-=1;
				document.getElementById("second").src=arr[v].src;

			}


			}

			function next2(){

				if(v==4){
					document.getElementById("second").src=arr[0].src;
					v=0;
				}
				else{
					v+=1;
					document.getElementById("second").src=arr[v].src;				}
			}









		var b=2;

		function next3(){
			if(b==4){
					document.getElementById("three").src=arr[0].src;
					b=0;
				}
				else{
					b+=1;
					document.getElementById("three").src=arr[b].src;				}

}

		function back3(){
				if(b==0){
					b=4;
					document.getElementById("three").src=arr[b].src;


				}
				else{
				b-=1;
				document.getElementById("three").src=arr[b].src;

			}


			}





		var n=3;
		function next4(){
			if(n==4){
					document.getElementById("four").src=arr[0].src;
					n=0;
				}
				else{
					n+=1;
					document.getElementById("four").src=arr[n].src;				}
			}

					function back4(){
				if(n==0){
					n=4;
					document.getElementById("four").src=arr[n].src;


				}
				else{
				n-=1;
				document.getElementById("four").src=arr[n].src;

			}


			}
		function go(){
			var a = document.getElementById("in").value;
 		 	var result = a.link("https://kolesa.kz/cars/"+a+"/");
			document.getElementById("sear").innerHTML = result;

		}

		function apa(){
			caas-=1;
			if(caas==-1){
				caas=4;
			}
			document.getElementById("PA").innerHTML = pass[caas];

		}
		function apa2(){
			caas+=1;
			if(caas==5){
				caas=0;
			}
			document.getElementById("PA").innerHTML = pass[caas];
		}
