import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  name: string = '???';

  prefixes = [
    'Hype',
    'Biz',
    'Lolz',
    'Rofl',
    'Galaxy',
    'Biz',
    'Fan',
    'Buzz',
    'Real',
    'Solid',
    'Inter',
    'Active',
    'Swoosh',
  ];

  suffixes = [
    'park',
    'span',
    'cloud',
    'loop',
    'verse',
    'layer',
    'er',
    'r',
    'dot',
    'dock',
    'space',
    'yard',
    'scale',
    'signal',
    'press',
    'ware',
    'port',
  ];

  generate() {
    this.name = this.getRandomName();
  }

  getRandomName() {
    return (
      this.prefixes[Math.floor(Math.random() * this.prefixes.length)] +
      this.suffixes[Math.floor(Math.random() * this.suffixes.length)]
    );
  }
}
