	let time = "";
	var global_y=0;
	class DrawScene{
			constructor(width, height, position, border, borderType, left, top,bg, append){
			this.width=width;
			this.height=height;
			this.position=position;
			this.border=border;
			this.borderType=borderType;
			this.left=left;
			this.top=top;
			this.append=append;
			this.bg = bg;
			this.obj='';
			this.obj2='';
			this.append = append
			}		
			create = () => {let div = document.createElement("div");
			div.style.width = this.width + "px";
			div.style.height = this.height + "px";
			div.style.position = this.position;
			div.style.border = this.border;
			div.style.left = this.left+"px"; 
			div.style.top = this.top + "px";
			div.style.backgroundColor = this.bg;
			for(var i=0;i<10;i++){
				for(var j=0;j<3;j++){
					let drawBricks = new DrawItem(50, 50,"absolute","1px solid black","0px",i*52,j*52,null,"red",div);
					drawBricks.create();
				}
			}
			this.append.appendChild(div);
			this.obj = div;
			}	
		}
		class DrawItem{
			constructor(width, height, position, border, borderType, left, top, bottom, bg, append){
			this.width=width;
			this.height=height;
			this.position=position;
			this.border=border;
			this.borderType=borderType;
			this.left=left;
			this.top=top;
			this.bottom=bottom;
			this.bg = bg;
			this.append=append;
			this.obj='';
			}
			
			create = () => {let div = document.createElement("div");
			div.style.width = this.width + "px";
			div.style.height = this.height + "px";
			div.style.position = this.position;
			div.style.border = this.border;
			div.style.left = this.left+"px"; 
			div.style.top = this.top + "px";
			div.style.bottom = this.bottom + "px";
			div.style.backgroundColor = this.bg;
			div.id =  this.left+this.top*10
			div.style.borderRadius = this.borderType;
			this.append.appendChild(div);
			this.obj = div;
			}
			addInterface = (append) =>{
			let button = new Button('<',append,move,stop);
			button.create();
			let button2 = new Button('>',append,move,stop)
			button2.create();
			}
			
		}
		class Button{
			constructor(content,append,f1,f2){
			this.content=content;
			this.append = append
			this.f1 = f1;
			this.f2 = f2
			}
			
			create = () => {
			let button = document.createElement("button");
			button.style.height = "50px";
			button.style.width = "50px";
			button.innerHTML = this.content
			button.onmousedown = this.f1;
			button.style.border = "2px solid white";
			button.style.borderRadius = "30px"
			button.onmouseup = this.f2;
			this.append.appendChild(button)			
			}			
		}
		move = (e) => {
			let sign = e.currentTarget.innerText
			
			time = setInterval(()=>{
			console.log(sign)
				if(sign=="<"&& global_y>0) {
				console.log("tyl")
				global_y-=20}
			else if(sign==">" && global_y<420){ 
			console.log("przod")
			global_y+=20}	
			},50)	
		}
		
		stop = (e) => {
		console.log("clear")
		 clearInterval(time)	
		}
		
		run = (e) => {
		console.log("okkk")
		let name = e.currentTarget.innerText
		if(name=='fast') speed=10
		else speed=200
		}