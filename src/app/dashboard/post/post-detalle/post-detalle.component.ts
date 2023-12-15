import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-post-detalle',
  templateUrl: './post-detalle.component.html',
  styleUrl: './post-detalle.component.css'
})
export class PostDetalleComponent implements OnInit {

  id: string | null = ''
  
  constructor(private router: ActivatedRoute){

  }

  ngOnInit(): void {
    this.id = this.router.snapshot.paramMap.get('id')
  }

}
