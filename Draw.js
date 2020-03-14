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
		}
		
