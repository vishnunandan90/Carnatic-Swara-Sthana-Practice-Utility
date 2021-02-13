import { Component, OnInit, Output } from "@angular/core";
import { EventEmitter, $ } from "protractor";
// import { faArrowUp } from '@fortawesome';
@Component({
  selector: "app-swaras",
  templateUrl: "./swaras.component.html",
  styleUrls: ["./swaras.component.css"],
})
export class SwarasComponent implements OnInit {
  constructor() {}
  // filmIcon = fa-arrow-up;

  //could be converted to a swara bean with a sound property

  // @Output() count = new EventEmitter();
  private notesPerPattern: number = 0;
  private hideAnswer: boolean = true;
  private notes: string[] = [
    "C",
    "Cs",
    "D",
    "Ds",
    "E",
    "F",
    "Fs",
    "G",
    "Gs",
    "A",
    "As",
    "B",
    "C2",
  ];
  private swaras: string[] = [
    "sa",
    "ri1",
    "ri2/ga1",
    "ri3/ga2",
    "ga3",
    "ma1",
    "ma2",
    "pa",
    "dha1",
    "dha2/ni1",
    "dha3/ni2",
    "ni3",
    "sa*",
  ];
  private chosenSwaras: string[] = [];
  private chosenNotes: number[] = [];
  private pattern: number[] = [];
  ngOnInit() {}

  addSwara(event) {
    let swara: string = event.target.innerText;
    if (!this.chosenSwaras.includes(swara)) {
      this.chosenSwaras.push(swara);
      this.chosenNotes.push(this.swaras.indexOf(swara));
      this.notesPerPattern++;
      this.updatePattern();
    }
  }

  changeSA(event) {
    let sa: string = event.target.value;
    this.notes.pop();
    while (this.notes[0] !== sa) {
      this.notes.unshift(this.notes.pop());
    }
    this.notes.push(sa);
  }

  removeNote() {
    if (this.notesPerPattern > this.chosenSwaras.length) {
      this.notesPerPattern--;
      this.updatePattern();
    }
  }

  increaseNotesPerPattern() {
    this.notesPerPattern++;
    this.updatePattern();
    // this.count.emit(this.notesPerPattern +'');
  }

  updatePattern() {
    this.pattern = [];
    let max = this.chosenSwaras.length;
    let count = this.notesPerPattern;

    // console.log(this.chosenSwaras);
    while (count != 0) {
      this.pattern.push(Math.floor(Math.random() * max));
      count--;
    }
    console.log(this.pattern);
  }

  //TODO: async
  async playAudio() {
    //play the file
    // have to play any random file (from chosen swaras) notePerPattern times
    let max = this.chosenSwaras.length;
    let count = this.notesPerPattern;
    let path = "../../../assets/sounds/";

    for (let i = 0; i < this.pattern.length; i++) {
      let audio = new Audio();
      audio.src = path + this.notes[this.chosenNotes[this.pattern[i]]] + ".mp3";
      audio.load();
      audio.play();
      await this.sleep(1000);
    }
  }

  sleep(ms) {
    return new Promise((resolve) => setTimeout(resolve, ms));
  }
  showSwaras() {
    // $("#answer").toggle();
    this.hideAnswer = !this.hideAnswer;
  }
}

//TODO
//toggle for answer
//timing for notes , user should be able to change
//changing sa should work get other audio files as well
//edge cases like disableing when not correct, etc
