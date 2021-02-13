import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-player",
  templateUrl: "./player.component.html",
  styleUrls: ["./player.component.css"],
})
export class PlayerComponent implements OnInit {
  constructor() {}

  ngOnInit() {}

  async playAudio() {
    //play the file
    let audio = new Audio();
    audio.src = "../../../assets/sounds/test1.mp3";
    audio.load();

    let audio2 = new Audio();
    audio2.src = "../../../assets/sounds/test2.mp3";
    audio2.load();

    let audios = [audio, audio2];

    // setTimeout(function() {console.log("AA")}, 2000);
    // audio2.play();

    for (let i = 0; i <= 1; i++) {
      audios[i].play();
      await this.sleep(1000);
    }
  }

  sleep(ms) {
    return new Promise((resolve) => setTimeout(resolve, ms));
  }
}
