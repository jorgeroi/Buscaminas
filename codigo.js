
<script src="https://cdn.jsdelivr.net/gh/objetos/p5.quadrille.js/p5.quadrille.min.js"></script>

const COLS = 10, ROWS = 10;
Quadrille.CELL_LENGTH = 60;
let bombas;
let r;
let p;
let band;
let mina;

let banderita=false;
let  bomb=false;


let jugar=false;
let primera=true;

let celdanula=true;

let m;

let B;
let N;

let umin=true;
let vacia=true;
let num=true;
let JUEG=true;

function setup() {
  createCanvas(660,700);
  bombas = createQuadrille(11, 11, 15, '💣');
  p = createQuadrille(11, 11);
  n = createQuadrille(11, 11);
  bndr = createQuadrille(11, 11);
  
  band = createCheckbox ('BANDERA 🚩', false)
  band.position(20,665)
  
  mina= []
  mina2=[]
  
  bndrs=[]
  
  restart = createButton('Reiniciar');
  restart.position(250,665);
  restart.mousePressed(reiniciar)
  
  revisar = createButton('Revisar');
  revisar.position(400,665);
  revisar.mousePressed(check)
  
  
  
  
  
  p.fill(color('grey'))
  
  for (let i = 0 ; i <11; i++) {
    for (let j =0; j<11;j++){
      
      if (bombas.isEmpty(i,j)==false){
        append(mina, [i,j])
        
        mina2  += ['('+i,j+')']
      }
      else {
        r=bombas.ring(i,j) 
        let m= r.order
        z=m.toString()
        n.fill(i,j,z)
        if (z=='0'){
            n.clear(i,j)
            }    
      }
      
    }
  }
  juego = Quadrille.OR(n,bombas);
}

function draw() {
  background('grey');
  if (umin==false){
  drawQuadrille(bombas, {outline:'black', });
  }
  if(vacia==true){
  drawQuadrille(p, {outline:'black', });
  }
  if(num==false){
  drawQuadrille(n, {outline:'black', })
  }
  if(JUEG==false){
  drawQuadrille(juego, {outline:'black', })
  }
  
  
}


function mouseClicked() {
  
  let col = Math.floor(mouseX / 60);
  let row = Math.floor(mouseY / 60);
  
  
  if(primera==true){
   
  for (let i = 0 ; i <11; i++) {
    for (let j =0; j<11;j++){
      row=i
      col=j
      if (juego.isEmpty(i,j)==true){
        
        
        
        
  let derecha1=true;
  let izquierda1=true;
  let arriba1=true;
  let abajo1=true;
  
    
  
  if(celdanula==true){
         for (let x = 1 ; x <11; x++) {

          if(derecha1==true){
              if (juego.isEmpty(row,col+x)==false){
                p.fill(row,col+x,str(n.read(row,col+x)))  
                redraw()
                derecha1=false
                }
              else{
                p.fill(row,col+x,70)
                for(let y = 1 ; y<11; y++){
                  abajo1=true
                  arriba1=true
                  if(abajo1==true){
                    if (juego.isEmpty(row+y,col+x)==false  ){
                      p.fill(row+y,col+x,str(n.read(row+y,col+x)))  
                      redraw()
                      abajo1=false
                      }
                    
                    }
                  if(arriba1==true){
                      if (juego.isEmpty(row-y,col+x)==false){
                        p.fill(row-y,col+x,str(n.read(row-y,col+x)))  
                        redraw()
                        arriba1=false
                        }
                      
                  }
                  break
                  abajo1=false
                  arriba1=false
                }  
              }
            abajo1=true
            arriba1=true
          }
          if(izquierda1==true){
              if (juego.isEmpty(row,col-x)==false){
                p.fill(row,col-x,str(n.read(row,col-x)))  
                redraw()
                izquierda1=false
                }
              else{
                p.fill(row,col-x,70)
                for(let y = 1 ; y<11; y++){
                  abajo1=true
                  arriba1=true
                  if(abajo1==true){
                    if (juego.isEmpty(row+y,col-x)==false  ){
                    p.fill(row+y,col-x,str(n.read(row+y,col-x)))  
                    redraw()
                    abajo1=false
                    }
                  }
                  if(arriba1==true){
                      if (juego.isEmpty(row-y,col-x)==false){
                        p.fill(row-y,col-x,str(n.read(row-y,col-x)))  
                        redraw()
                        arriba1=false
                        }
                  }
                  break
                  abajo1=false
                  arriba1=false
                }  
              }
            }
        }
       
      for (let x = 1 ; x <11; x++) {
          
        if(abajo1==true){
             if (juego.isEmpty(row+x,col)==false){

                p.fill(row+x,col,str(n.read(row+x,col)))  
                redraw()

                abajo1=false
                }
              else{
                p.fill(row+x,col,70)
                for(let y = 1 ; y<11; y++){
                  izquierda1=true
                  derecha1=true
                  if(izquierda1==true){
                    if (juego.isEmpty(row+x,col-y)==false  ){
                    p.fill(row+x,col-y,str(n.read(row+x,col-y)))  
                    redraw()
                    izquierda1=false
                    }
                  
                  }


                  if(derecha1==true){
                      if (juego.isEmpty(row+x,col+y)==false){
                        p.fill(row+x,col+y,str(n.read(row+x,col+y)))  
                        redraw()
                        derecha1=false
                        }
                      
                  }
                  break
                  derecha1=false
                  izquierda1=false
                  
                }  
              }
            }
        if(arriba1==true){
              if (juego.isEmpty(row-x,col)==false){

                p.fill(row-x,col,str(n.read(row-x,col)))  
                redraw()

                arriba1=false
                }
              else{
                p.fill(row-x,col,70) 
                for(let y = 1 ; y<11; y++){
                  izquierda1=true
                  derecha1=true
                  if(izquierda1==true){
                    if (juego.isEmpty(row-x,col-y)==false  ){
                    p.fill(row-x,col-y,str(n.read(row-x,col-y)))  
                    redraw()
                    izquierda1=false
                    }
                  }


                  if(derecha1==true){
                      if (juego.isEmpty(row-x,col+y)==false){
                        p.fill(row-x,col+y,str(n.read(row-x,col+y)))  
                        redraw()
                        derecha1=false
                        }
                  }
                  break
                  derecha1=false
                  izquierda1=false
                  
                }  
              }
            }
        
      }
       
  
    derecha1=true
      izquierda1=true
      abajo1=true
      arriba1=true
  }
        
        
        
      }
    
    }
    jugar=true
    break
  }
    
    primera=false
}
   col = Math.floor(mouseX / 60);
   row = Math.floor(mouseY / 60);
  
  if (jugar==true){
  
  
  
  J=juego.read(row,col)
  B=bombas.read(row, col)
  N=n.read(row,col)
  
  
 
  
  if (bomb==false) {
     if (B=='💣'){
         
          juego.fill(row,col,color('red')) 
          JUEG=false
     setTimeout(()=>{
             p.clear()
             n.clear()
             bombas.clear() 
             juego.clear()
             p.fill(5,1,'P')
             p.fill(5,2,'E')
             p.fill(5,3,'R')
             p.fill(5,4,'D')
             p.fill(5,5,'I')
             p.fill(5,6,'S')
             p.fill(5,7,'T')
             p.fill(5,8,'E')
             p.fill(5,9,'!')
        setTimeout(()=>{
            reiniciar()
        },2000)
     },2000)
  
          
       
        }
    if (n.isEmpty(row,col)==false){
      p.fill(row,col,N)
      redraw()

        }
  
    else{
      p.fill(row,col,70)
      celdaNula()
    }
  }
  

  
  
   if (band.checked()) {
     
     celdanula=false
     bomb=true
      p.fill(row,col,'🚩')
      redraw()
     bndr.fill(row,col,'🚩')
     juego.fill(row,col,'🚩')
      
 }
   else{
     bomb=false
     celdanula=true
   }


function celdaNula(){
  
 
  let derecha1=true;
  let izquierda1=true;
  let arriba1=true;
  let abajo1=true;
  
    if(row>=10){
    celdanula=false
  }
    else{
      celdanula=true
    }
  
  
  if(celdanula==true){
      if(J==null){
         for (let i = 1 ; i <11; i++) {

          if(derecha1==true){
              if (juego.isEmpty(row,col+i)==false){
                p.fill(row,col+i,str(n.read(row,col+i)))  
                redraw()
                derecha1=false
                }
              else{
                p.fill(row,col+i,70)
                for(let j = 1 ; j<11; j++){
                  abajo1=true
                  arriba1=true
                  if(abajo1==true){
                    if (juego.isEmpty(row+j,col+i)==false  ){
                      p.fill(row+j,col+i,str(n.read(row+j,col+i)))  
                      redraw()
                      abajo1=false
                      }
                    
                    }
                  if(arriba1==true){
                      if (juego.isEmpty(row-j,col+i)==false){
                        p.fill(row-j,col+i,str(n.read(row-j,col+i)))  
                        redraw()
                        arriba1=false
                        }
                      
                  }
                  break
                  abajo1=false
                  arriba1=false
                }  
              }
            abajo1=true
            arriba1=true
          }
          if(izquierda1==true){
              if (juego.isEmpty(row,col-i)==false){
                p.fill(row,col-i,str(n.read(row,col-i)))  
                redraw()
                izquierda1=false
                }
              else{
                p.fill(row,col-i,70)
                for(let j = 1 ; j<11; j++){
                  abajo1=true
                  arriba1=true
                  if(abajo1==true){
                    if (juego.isEmpty(row+j,col-i)==false  ){
                    p.fill(row+j,col-i,str(n.read(row+j,col-i)))  
                    redraw()
                    abajo1=false
                    }
                  }
                  if(arriba1==true){
                      if (juego.isEmpty(row-j,col-i)==false){
                        p.fill(row-j,col-i,str(n.read(row-j,col-i)))  
                        redraw()
                        arriba1=false
                        }
                  }
                  break
                  abajo1=false
                  arriba1=false
                }  
              }
            }
        }
       
      for (let i = 1 ; i <11; i++) {
          
        if(abajo1==true){
             if (juego.isEmpty(row+i,col)==false){

                p.fill(row+i,col,str(n.read(row+i,col)))  
                redraw()

                abajo1=false
                }
              else{
                p.fill(row+i,col,70)
                for(let j = 1 ; j<11; j++){
                  izquierda1=true
                  derecha1=true
                  if(izquierda1==true){
                    if (juego.isEmpty(row+i,col-j)==false  ){
                    p.fill(row+i,col-j,str(n.read(row+i,col-j)))  
                    redraw()
                    izquierda1=false
                    }
                  
                  }


                  if(derecha1==true){
                      if (juego.isEmpty(row+i,col+j)==false){
                        p.fill(row+i,col+j,str(n.read(row+i,col+j)))  
                        redraw()
                        derecha1=false
                        }
                      
                  }
                  break
                  derecha1=false
                  izquierda1=false
                  
                }  
              }
            }
        if(arriba1==true){
              if (juego.isEmpty(row-i,col)==false){

                p.fill(row-i,col,str(n.read(row-i,col)))  
                redraw()

                arriba1=false
                }
              else{
                p.fill(row-i,col,70) 
                for(let j = 1 ; j<11; j++){
                  izquierda1=true
                  derecha1=true
                  if(izquierda1==true){
                    if (juego.isEmpty(row-i,col-j)==false  ){
                    p.fill(row-i,col-j,str(n.read(row-i,col-j)))  
                    redraw()
                    izquierda1=false
                    }
                  }


                  if(derecha1==true){
                      if (juego.isEmpty(row-i,col+j)==false){
                        p.fill(row-i,col+j,str(n.read(row-i,col+j)))  
                        redraw()
                        derecha1=false
                        }
                  }
                  break
                  derecha1=false
                  izquierda1=false
                  
                }  
              }
            }
        
      }
       
  }
    derecha1=true
      izquierda1=true
      abajo1=true
      arriba1=true
  }
}

}
}


function reiniciar(){  
  num=true
  umin=true
  vacia=true
  JUEG=true 
  primera=true
  jugar=false
  p.clear()
  n.clear()
  bombas.clear()
  setup()
  
}


function check(){
  bndrs2=[]
  for (let i = 0 ; i <11; i++) {
    for (let j =0; j<11;j++){
      if (bndr.isEmpty(i,j)==false){
        append(bndrs, [i,j])
        bndrs2  += ['('+i,j+')']
      }
    }
  }
  if(mina2==bndrs2){
     setTimeout(()=>{
           p.clear()
          n.clear()
          bombas.clear() 
       p.fill(5,1,'G')
       p.fill(5,2,'A')
       p.fill(5,3,'N')
       p.fill(5,4,'A')
       p.fill(5,5,'S')
       p.fill(5,6,'T')
       p.fill(5,7,'E')
       p.fill(5,8,'!')
          setTimeout(()=>{
            reiniciar()},2000)
       },1000)
     }
  else{
   setTimeout(()=>{ 
        JUEG=false
     setTimeout(()=>{
             p.clear()
             n.clear()
             bombas.clear() 
             juego.clear()
             p.fill(5,1,'P')
             p.fill(5,2,'E')
             p.fill(5,3,'R')
             p.fill(5,4,'D')
             p.fill(5,5,'I')
             p.fill(5,6,'S')
             p.fill(5,7,'T')
             p.fill(5,8,'E')
             p.fill(5,9,'!')
        setTimeout(()=>{
            reiniciar()
        },2000)
     },1000)
  },1000)
  }           
}
