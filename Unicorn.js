class Unicorn{
  
    constructor()
  {
      this.r = 100 ; 
      this.x = this.r ;
      this.y = height-this.r ;
      this.vy = 0 ;
      this.gravity = 2 ;  
  }
    
    jump(){
      
      this.vy = -30 ; 
      
      }
    
    move(){
    
    this.y += this.vy ;
    this.vy += this.gravity ; 
    this.y = constrain(this.y , 0  , height-this.r  ) ; 
    
    }
    
    show(){
        fill (255, 0 ,144);
      image(uImg , this.x , this.y , this.r , this.r) ; 
    
    }
    
  }