import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NgFor, NgClass, NgIf, NgSwitch, NgSwitchCase } from '@angular/common';
import { ClassDirective } from './class.directive';
import { TimesDirective } from './times.directive';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NgFor, NgClass, NgIf, NgSwitch, NgSwitchCase, ClassDirective, TimesDirective],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  currentPage = 0;
  images = [{
    title: 'Waves',
    url: 'https://images.unsplash.com/photo-1491378630646-3440efa57c3b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8QmVhY2h8ZW58MHx8MHx8fDA%3D'
  }, {
    title: 'Ocean View',
    url: 'https://images.unsplash.com/photo-1503756234508-e32369269deb?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8QmVhY2h8ZW58MHx8MHx8fDA%3D'
  }, {
    title: 'Mountain View',
    url: 'https://plus.unsplash.com/premium_photo-1669750817438-3f7f3112de8d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8QmVhY2h8ZW58MHx8MHx8fDA%3D'
  }, {
    title: 'Sunset',
    url: 'https://images.unsplash.com/photo-1516117172878-fd2c41f4a759?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8QmVhY2h8ZW58MHx8MHx8fDA%3D'
  },
  {
    title: 'Waves',
    url: 'https://images.unsplash.com/photo-1491378630646-3440efa57c3b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8QmVhY2h8ZW58MHx8MHx8fDA%3D'
  }, {
    title: 'Ocean View',
    url: 'https://images.unsplash.com/photo-1503756234508-e32369269deb?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8QmVhY2h8ZW58MHx8MHx8fDA%3D'
  }, {
    title: 'Mountain View',
    url: 'https://plus.unsplash.com/premium_photo-1669750817438-3f7f3112de8d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8QmVhY2h8ZW58MHx8MHx8fDA%3D'
  }, {
    title: 'Sunset',
    url: 'https://images.unsplash.com/photo-1516117172878-fd2c41f4a759?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8QmVhY2h8ZW58MHx8MHx8fDA%3D'
  },
  {
    title: 'Waves',
    url: 'https://images.unsplash.com/photo-1491378630646-3440efa57c3b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8QmVhY2h8ZW58MHx8MHx8fDA%3D'
  }, {
    title: 'Ocean View',
    url: 'https://images.unsplash.com/photo-1503756234508-e32369269deb?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8QmVhY2h8ZW58MHx8MHx8fDA%3D'
  }, {
    title: 'Mountain View',
    url: 'https://plus.unsplash.com/premium_photo-1669750817438-3f7f3112de8d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8QmVhY2h8ZW58MHx8MHx8fDA%3D'
  }, {
    title: 'Sunset',
    url: 'https://images.unsplash.com/photo-1516117172878-fd2c41f4a759?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8QmVhY2h8ZW58MHx8MHx8fDA%3D'
  },
  {
    title: 'Waves',
    url: 'https://images.unsplash.com/photo-1491378630646-3440efa57c3b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8QmVhY2h8ZW58MHx8MHx8fDA%3D'
  }, {
    title: 'Ocean View',
    url: 'https://images.unsplash.com/photo-1503756234508-e32369269deb?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8QmVhY2h8ZW58MHx8MHx8fDA%3D'
  }, {
    title: 'Mountain View',
    url: 'https://plus.unsplash.com/premium_photo-1669750817438-3f7f3112de8d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8QmVhY2h8ZW58MHx8MHx8fDA%3D'
  }, {
    title: 'Sunset',
    url: 'https://images.unsplash.com/photo-1516117172878-fd2c41f4a759?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8QmVhY2h8ZW58MHx8MHx8fDA%3D'
  },
  {
    title: 'Waves',
    url: 'https://images.unsplash.com/photo-1491378630646-3440efa57c3b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8QmVhY2h8ZW58MHx8MHx8fDA%3D'
  }, {
    title: 'Ocean View',
    url: 'https://images.unsplash.com/photo-1503756234508-e32369269deb?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8QmVhY2h8ZW58MHx8MHx8fDA%3D'
  }, {
    title: 'Mountain View',
    url: 'https://plus.unsplash.com/premium_photo-1669750817438-3f7f3112de8d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8QmVhY2h8ZW58MHx8MHx8fDA%3D'
  }, {
    title: 'Sunset',
    url: 'https://images.unsplash.com/photo-1516117172878-fd2c41f4a759?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8QmVhY2h8ZW58MHx8MHx8fDA%3D'
  }]

  checkWindowIndex(index: number) {
    return Math.abs(this.currentPage - index) < 5;
  }
}
