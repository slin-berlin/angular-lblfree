import { Component, OnInit, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit, AfterViewInit {

  constructor() { }

  ngOnInit() {
    
  }


  clicked(){
    alert("asdasd");
  }

  ngAfterViewInit()
  {
    var iframeMouseOver = false; 

    window.addEventListener('blur',function(){
      if(iframeMouseOver){
        console.log('Wow! Iframe Click!');
        alert("Wow!");
        alert(document.getElementById('iFrame').contentWindow.document.body);
      }
    });


    document.getElementById('iframe').addEventListener('click', function(event) {
      console.log(this.id);
    }, false);

    document.getElementById('iframe').addEventListener('mouseover',function(){
      iframeMouseOver = true;
      console.log('Wow!  mouseover!');
    });

    document.getElementById('iframe').addEventListener('mouseout',function(){
        iframeMouseOver = false;
    });

  }
}