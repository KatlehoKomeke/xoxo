import { Component, Element, h, State } from '@stencil/core';

@Component({
  tag: 'app-home',
  styleUrl: 'app-home.scss',
  shadow: true,
})
export class AppHome {
  @State() state: { 
    board: {
      "zero": null|"x"|"o",
      "one": null|"x"|"o",
      "two": null|"x"|"o",
      "three": null|"x"|"o",
      "four": null|"x"|"o",
      "five": null|"x"|"o",
      "six": null|"x"|"o",
      "seven": null|"x"|"o",
      "eight": null|"x"|"o"
    },
    playerTurn: null|"x"|"o",
    winner: null|"x"|"o"
  } = { 
    board: {
      "zero": null,
      "one": null,
      "two": null,
      "three": null,
      "four": null,
      "five": null,
      "six": null,
      "seven": null,
      "eight": null
    },
    playerTurn: "x",
    winner: null
  }
  @Element() private element: HTMLElement;
  render() {
    return (
      <div class="app-home">
        <div onMouseLeave={(event)=>this.changeOnMouseLeave(event)} onMouseOver={(event)=>this.changeOnHover(event)} onClick={(event)=>this.play(event)} id="zero"></div>
        <div onMouseLeave={(event)=>this.changeOnMouseLeave(event)} onMouseOver={(event)=>this.changeOnHover(event)} onClick={(event)=>this.play(event)} id="one"></div>
        <div onMouseLeave={(event)=>this.changeOnMouseLeave(event)} onMouseOver={(event)=>this.changeOnHover(event)} onClick={(event)=>this.play(event)} id="two"></div>
        <div onMouseLeave={(event)=>this.changeOnMouseLeave(event)} onMouseOver={(event)=>this.changeOnHover(event)} onClick={(event)=>this.play(event)} id="three"></div>
        <div onMouseLeave={(event)=>this.changeOnMouseLeave(event)} onMouseOver={(event)=>this.changeOnHover(event)} onClick={(event)=>this.play(event)} id="four"></div>
        <div onMouseLeave={(event)=>this.changeOnMouseLeave(event)} onMouseOver={(event)=>this.changeOnHover(event)} onClick={(event)=>this.play(event)} id="five"></div>
        <div onMouseLeave={(event)=>this.changeOnMouseLeave(event)} onMouseOver={(event)=>this.changeOnHover(event)} onClick={(event)=>this.play(event)} id="six"></div>
        <div onMouseLeave={(event)=>this.changeOnMouseLeave(event)} onMouseOver={(event)=>this.changeOnHover(event)} onClick={(event)=>this.play(event)} id="seven"></div>
        <div onMouseLeave={(event)=>this.changeOnMouseLeave(event)} onMouseOver={(event)=>this.changeOnHover(event)} onClick={(event)=>this.play(event)} id="eight"></div>
      </div> 
    ); 
  }
  changeOnMouseLeave(event:Event){
    if((event.target as HTMLElement).textContent.length === 0){
      (event.target as HTMLElement).style.backgroundColor = "rgb(217, 217, 217)"
    }
  }
  changeOnHover(event:Event){
    console.log("event: ",(event.target as HTMLElement).style.backgroundColor = this.state.playerTurn === "o" ? "rgba(159,255,163,0.36)" : "rgba(255,95,95,0.36)")
    // if(this.state.board[boxNumber] === null){
    //   console.log(`document.querySelector(boxNumber): `,this.element.querySelector('#'+boxNumber));
    //   (document.getElementById(boxNumber)as HTMLInputElement).style.backgroundColor = this.state.playerTurn === "o" ? "rgba(159,255,163,0.36)" : "rgba(255,95,95,0.36)";
    // }
    // document.getElementById(boxNumber).innerHTML =
  }
  play(event:Event){
    console.log("event: ",(event.target as HTMLElement));
    (event.target as HTMLElement).textContent = 'x'
  }
}
