import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Currency_Calculator';
  From = ""
  To = ""
  value: any
  result: any

  calculate_currency(){
    if(this.From =="INR" && this.To =="USD"){
      this.result=this.value*0.013
    }
    else if(this.From =="INR" && this.To =="CAD"){
      this.result=this.value*0.017
    }
    else if(this.From =="INR" && this.To =="EUR"){
      this.result=this.value*0.012
    }
    else if(this.From =="INR" && this.To =="GBP"){
      this.result=this.value*0.0099
    }
    else if(this.From =="USD" && this.To =="INR"){
      this.result=this.value/0.013
    }
    else if(this.From =="USD" && this.To =="CAD"){
      this.result=this.value/0.79
    }
    else if(this.From =="USD" && this.To =="EUR"){
      this.result=this.value*0.88
    }
    else if(this.From =="USD" && this.To =="GBP"){
      this.result=this.value*0.74
    }
    else if(this.From =="CAD" && this.To =="INR"){
      this.result=this.value/0.017
    }
    else if(this.From =="CAD" && this.To =="USD"){
      this.result=this.value*0.79
    }
    else if(this.From =="CAD" && this.To =="EUR"){
      this.result=this.value*0.7
    }
    else if(this.From =="CAD" && this.To =="GBP"){
      this.result=this.value*0.59
    }
    else if(this.From =="EUR" && this.To =="INR"){
      this.result=this.value/0.012
    }
    else if(this.From =="EUR" && this.To =="USD"){
      this.result=this.value/0.88
    }
    else if(this.From =="EUR" && this.To =="CAD"){
      this.result=this.value/0.7
    }
    else if(this.From =="EUR" && this.To =="GBP"){
      this.result=this.value*0.84
    }
    else if(this.From =="GBP" && this.To =="INR"){
      this.result=this.value/0.0099
    }
    else if(this.From =="GBP" && this.To =="USD"){
      this.result=this.value/0.74
    }
    else if(this.From =="GBP" && this.To =="CAD"){
      this.result=this.value/0.59
    }
    else if(this.From =="GBP" && this.To =="EUR"){
      this.result=this.value/0.84
    }
    else if(this.From==this.To){
      this.result=this.value
    }
  }
}
