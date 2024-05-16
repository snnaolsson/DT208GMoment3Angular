import { Component, Input } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-convert',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './convert.component.html',
  styleUrl: './convert.component.scss'
})
export class ConvertComponent {
 
  inputNumber: number=0;
  result:number =0;
  measurement:string='';
  inputType:string='';

  //Fahrenheit konverterat till celcius
  convertFtoC():void{
   this.result = (this.inputNumber - 32)/1.8;
   this.measurement='Celcius';
   this.inputType='Fahrenheit';

  }
  //celcius konverterat till fahrenheit
  convertCtoF():void{
this.result = (this.inputNumber*(9/5))+30;
this.measurement = 'Fahrenheit';
this.inputType='Celcius';
  }
  //meter konverterat till feet
  convertMtoF():void{
    this.result = this.inputNumber*3.281;
    this.measurement='Feet';
    this.inputType='Meter';
  }
  //feet konverterat till meter
  convertFtoM():void{
this.result = this.inputNumber*0.3048;
this.measurement='Meter';
this.inputType='Feet';
  }

}
