import { Component, h, Host, State } from '@stencil/core';
import confetti from 'canvas-confetti';
@Component({
  tag: 'app-home',
  styleUrl: 'app-home.scss',
  shadow: true,
})
export class AppHome {
  @State() state: { 
    board: {
      "zero": null|"X"|"O",
      "one": null|"X"|"O",
      "two": null|"X"|"O",
      "three": null|"X"|"O",
      "four": null|"X"|"O",
      "five": null|"X"|"O",
      "six": null|"X"|"O",
      "seven": null|"X"|"O",
      "eight": null|"X"|"O"
    },
    playerTurn: null|"X"|"O",
    winner: null|"X"|"O"|"="
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
    playerTurn: "X",
    winner: null
  }

  render() {
    return (
      <Host>
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
        <div class="endOfGame">
          <div class="message">
            <p class="winner"></p>
            <p class="draw-or-win"></p>
          </div>
          <div onClick={(event)=>this.resetGame(event)} class="button">replay</div>
        </div>
      </Host>
    ); 
  }
  changeOnMouseLeave(event:Event){
    if(this.state.winner?.length > 0){
      return ;
    }
    if((event.target as HTMLElement).textContent.length === 0){
      (event.target as HTMLElement).style.backgroundColor = "rgb(217, 217, 217)"
    }
  }
  changeOnHover(event:Event){
    if(this.state.winner?.length > 0){
      return ;
    }
    if((event.target as HTMLElement).textContent.length === 0){
      (event.target as HTMLElement).style.backgroundColor = this.state.playerTurn === "O" ? "rgba(255,95,95,0.36)" : "rgba(159,255,163,0.36)"
    }
  }
  play(event:Event){
    if(this.state.winner?.length > 0){
      return ;
    }
    if((event.target as HTMLElement).textContent.length === 0){
      if(this.state.playerTurn === "X"){
        (event.target as HTMLElement).textContent = "X";
        (event.target as HTMLElement).style.color = "rgb(0,255,41)"
        this.state.board[(event.target as HTMLElement).id] = this.state.playerTurn
        this.state.playerTurn = "O"
      }else if(this.state.playerTurn === "O"){
        (event.target as HTMLElement).textContent = "O";
        (event.target as HTMLElement).style.color = "rgb(255,95,95)"
        this.state.board[(event.target as HTMLElement).id] = this.state.playerTurn
        this.state.playerTurn = "X"
      }
    }
    this.calculateWinner(event)
  }
  calculateWinner(event:Event){

    if(this.state.board['zero']?.length > 0 && this.state.board['zero'] === this.state.board['one'] && this.state.board['one'] === this.state.board['two']){
      this.state.winner = this.state.board['zero']
    }else if(this.state.board['three']?.length > 0 && this.state.board['three'] === this.state.board['four'] && this.state.board['four'] === this.state.board['five']){
      this.state.winner = this.state.board['three']
    }else if(this.state.board['six']?.length > 0 && this.state.board['six'] === this.state.board['seven'] && this.state.board['seven'] === this.state.board['eight']){
      this.state.winner = this.state.board['six']

    }else if(this.state.board['zero']?.length > 0 && this.state.board['zero'] === this.state.board['three'] && this.state.board['three'] === this.state.board['six']){
      this.state.winner = this.state.board['zero']
    }else if(this.state.board['one']?.length > 0 && this.state.board['one'] === this.state.board['four'] && this.state.board['four'] === this.state.board['seven']){
      this.state.winner = this.state.board['one']
    }else if(this.state.board['two']?.length > 0 && this.state.board['two'] === this.state.board['five'] && this.state.board['five'] === this.state.board['eight']){
      this.state.winner = this.state.board['two']

    }else if(this.state.board['zero']?.length > 0 && this.state.board['zero'] === this.state.board['four'] && this.state.board['four'] === this.state.board['eight']){
      this.state.winner = this.state.board['zero']
    }else if(this.state.board['six']?.length > 0 && this.state.board['six'] === this.state.board['four'] && this.state.board['four'] === this.state.board['two']){
      this.state.winner = this.state.board['six']

    }else if(
      this.state.board['zero']?.length > 0
      && this.state.board['one']?.length > 0
      && this.state.board['two']?.length > 0
      && this.state.board['three']?.length > 0
      && this.state.board['four']?.length > 0
      && this.state.board['five']?.length > 0
      && this.state.board['six']?.length > 0
      && this.state.board['seven']?.length > 0
      && this.state.board['eight']?.length > 0
    ){
      this.state.winner = "="
    }
    
    this.state.winner?.length > 0 ? this.gameOver(event) : null
  }
  gameOver(event:Event){
    if(this.state.winner?.length > 0 && this.state.winner !== "="){
      ((event.target as HTMLElement).parentElement.parentNode.childNodes[1] as HTMLElement).style.display = 'none';
      ((event.target as HTMLElement).parentElement.parentNode.childNodes[2] as HTMLElement).style.display = 'grid';
      console.log("?;",((event.target as HTMLElement).parentElement.parentNode.childNodes[2] as HTMLElement).childNodes[0].childNodes[0]);
      ((event.target as HTMLElement).parentElement.parentNode.childNodes[2] as HTMLElement).childNodes[0].childNodes[0].textContent = this.state.winner as string;
      (((event.target as HTMLElement).parentElement.parentNode.childNodes[2] as HTMLElement).childNodes[0].childNodes[0] as any).style.color = this.state.winner === "X" ? "rgb(0,255,41)" : "rgb(255,95,95)";
      ((event.target as HTMLElement).parentElement.parentNode.childNodes[2] as HTMLElement).childNodes[0].childNodes[1].textContent = " is the winner";
      this.sprayConfetti()
    }else{
      if(this.state?.winner === "="){
        ((event.target as HTMLElement).parentElement.parentNode.childNodes[1] as HTMLElement).style.display = 'none';
        ((event.target as HTMLElement).parentElement.parentNode.childNodes[2] as HTMLElement).style.display = 'grid';
        ((event.target as HTMLElement).parentElement.parentNode.childNodes[2] as HTMLElement).childNodes[0].childNodes[0].textContent = " ";
        ((event.target as HTMLElement).parentElement.parentNode.childNodes[2] as HTMLElement).childNodes[0].childNodes[1].textContent = "It's a draw"
      }
    }
  }
  
  resetGame(event:Event){
    this.state = { 
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
      playerTurn: "X",
      winner: null
    };

    (event.target as HTMLElement).parentElement.parentNode.childNodes[1].childNodes.forEach((value)=>{
      const valueAsHTMLElement: HTMLElement = value as HTMLElement;
      valueAsHTMLElement.textContent = "";
      valueAsHTMLElement.style.backgroundColor = "rgb(217, 217, 217)"
    });
    ((event.target as HTMLElement).parentElement.parentNode.childNodes[1] as HTMLElement).style.display = 'grid';
    ((event.target as HTMLElement).parentElement.parentNode.childNodes[2] as HTMLElement).style.display = 'none';
  }
  sprayConfetti(){
    const colors = ['#aaaaaa', '#cccccc'];
    confetti({
      particleCount: 200,
      angle: 60,
      spread: 55,
      origin: { x: 0 },
      colors: colors
    });
    confetti({
      particleCount: 200,
      angle: 120,
      spread: 55,
      origin: { x: 1 },
      colors: colors
    });
  }
}
