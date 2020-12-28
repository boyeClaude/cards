import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'cards';

  posts = [
    {
      title: 'Neat tree',
      username: 'nature',
      content: 'Lorem ipsum dolor sit amet consectetur adipisicing.',
      imageUrl: 'assets/images/biking.jpeg',
    },

    {
      title: 'Snowy Mountain',
      username: 'John Doe',
      content: 'Lorem ipsum dolor sit amet consectetur adipisicing.',
      imageUrl: 'assets/images/mountain.jpeg',
    },

    {
      title: 'Mountain Biking',
      username: 'Anne Doe',
      content: 'Lorem ipsum dolor sit amet consectetur adipisicing.',
      imageUrl: 'assets/images/tree.jpeg',
    },

    {
      title: 'Mountain Biking',
      username: 'Anne Doe',
      content: 'Lorem ipsum dolor sit amet consectetur adipisicing.',
      imageUrl: 'assets/images/tree.jpeg',
    },

    {
      title: 'Mountain Biking',
      username: 'Anne Doe',
      content: 'Lorem ipsum dolor sit amet consectetur adipisicing.',
      imageUrl: 'assets/images/tree.jpeg',
    },

    {
      title: 'Mountain Biking',
      username: 'Anne Doe',
      content: 'Lorem ipsum dolor sit amet consectetur adipisicing.',
      imageUrl: 'assets/images/tree.jpeg',
    },

    {
      title: 'Mountain Biking',
      username: 'Anne Doe',
      content: 'Lorem ipsum dolor sit amet consectetur adipisicing.',
      imageUrl: 'assets/images/tree.jpeg',
    },

    {
      title: 'Mountain Biking',
      username: 'Anne Doe',
      content: 'Lorem ipsum dolor sit amet consectetur adipisicing.',
      imageUrl: 'assets/images/tree.jpeg',
    },

    {
      title: 'Mountain Biking',
      username: 'Anne Doe',
      content: 'Lorem ipsum dolor sit amet consectetur adipisicing.',
      imageUrl: 'assets/images/tree.jpeg',
    },

    {
      title: 'Mountain Biking',
      username: 'Anne Doe',
      content: 'Lorem ipsum dolor sit amet consectetur adipisicing.',
      imageUrl: 'assets/images/tree.jpeg',
    },
  ];
}
