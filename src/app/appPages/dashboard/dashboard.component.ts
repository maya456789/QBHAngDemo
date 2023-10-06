import { Component } from '@angular/core';
import { map } from 'rxjs/operators';
import { Breakpoints, BreakpointObserver } from '@angular/cdk/layout';
import PhotoViewer from 'photoviewer';

interface Item {
  src:string,
  imgDesc:string
}

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {
  images: any[] = [];

  galleryData:Item[]=[
    {
      src:'./assets/img/img_mountains.jpg',
      imgDesc:'Mountain images'
    },{
      src:'./assets/img/img_forest.jpg',
      imgDesc:'Forest image'
    },
    {
      src:'../assets/img/img_lights.jpg',
      imgDesc:'Light image'
    },
    {
      src:'./assets/img/img_5terre.jpg',
      imgDesc:'Sea image'
    }
  ];

  data:any=20;
  many:number=45;
  /** Based on the screen size, switch from standard to one column per row */
  cards = this.breakpointObserver.observe(Breakpoints.Handset).pipe(
    map(({ matches }) => {
      if (matches) {
        return [
          { title: 'Card 1', cols: 1, rows: 1 },
          { title: 'Card 2', cols: 1, rows: 1 },
          { title: 'Card 3', cols: 1, rows: 1 },
          { title: 'Card 4', cols: 1, rows: 1 }
        ];
      }

      return [
        { title: 'Card 1', cols: 1, rows: 2 },
        { title: 'Card 2', cols: 1, rows: 2 },
        { title: 'Card 3', cols: 1, rows: 2 },
        { title: 'Card 4', cols: 1, rows: 2 }
      ];
    })
  );

  constructor(private breakpointObserver: BreakpointObserver) {

  }


   // Preview images
   preview(index: number) {
    const options: PhotoViewer.Options = {index ,fixedModalPos:true,initAnimation:true,keyboard:true,initMaximized:false,modalWidth:520,modalHeight:320,draggable:false,resizable:true,movable:true, fixedModalSize:true,icons: {
     minimize: 'minimize',
  maximize: 'maximize',
  close: 'close',
  zoomIn: 'zoom-in (+)',
  zoomOut: 'zoom-out (-)',
  prev: 'prev (←)',
  next: 'next (→)',
  fullscreen: 'fullscreen',
    } };
   const viewer= new PhotoViewer(this.galleryData, options);
  }
}
