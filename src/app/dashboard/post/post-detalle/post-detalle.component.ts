import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { PostService } from '../post.service';
import { Post } from '../post';

enum FormType{
  Create = 0,
  Update = 1
};

@Component({
  selector: 'app-post-detalle',
  templateUrl: './post-detalle.component.html',
  styleUrl: './post-detalle.component.css'
})

export class PostDetalleComponent implements OnInit {
  
  id!: string
  postForm!: FormGroup
  formType!: FormType
  formTitle!: string
  
  constructor(private router: ActivatedRoute, 
    private postService: PostService){
  }

  ngOnInit(): void {
    const postIdFromUrl = this.router.snapshot.paramMap.get('id')
    this.id = `${postIdFromUrl}`
    this.postForm = this.buildForm()
    if(postIdFromUrl !== 'nuevo'){
      this.formTitle = "Editar Post"
      this.formType = FormType.Update
      this.loadPost(Number(this.id))
    }else{
      this.formTitle = "Nuevo Post"
      this.formType = FormType.Create
    }
  }
  buildForm():FormGroup{
    return new FormGroup({
      title: new FormControl(''),
      body: new FormControl(''),
      userId: new FormControl('')
    })    
  }
  loadPost(idPost: number): void{
    this.postService.getPostById(idPost)
      .subscribe(
        (data) => {
          const {title, body, userId} = data
          this.postForm.setValue({title, body, userId})
        }
      )
  }
  onSubmit(): void {
    const postFormValues = this.postForm.value;
    if(this.formType === FormType.Create){
      this.requestForCreatePost(postFormValues)
    }else{
      const postEditValue = {...postFormValues, id: this.id}
      this.requestForUpdatePost(postEditValue)
    }
  }
  requestForCreatePost(post: Post): void{
    this.postService.addPost(post)
    .subscribe(
      (data) => {
        console.log(data)
      }
    )
  }
  requestForUpdatePost(post: Post): void{
    this.postService.updatePost(Number(this.id), post)
    .subscribe(
      (data) => {
        console.log(data)
      }
    )
  }


}
