import { Component } from '@angular/core';
import { Location } from '@angular/common';

import { UsersService } from '../../services/users.service';
import { ActivatedRoute, Router } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  templateUrl: './user.page.html',
  styleUrls: ['./user.page.css']
})
export class UserPage {
  userForm = new FormGroup({
    name: new FormControl('', Validators.required),
    email: new FormControl('', Validators.required),
    cpf: new FormControl('', Validators.required),
    street: new FormControl(''),
    number: new FormControl(''),
    details: new FormControl(''),
    cep: new FormControl(''),
  });

  userId: string = '';
  private docId: string = '';
  loading: boolean = false;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private usersService: UsersService,
    private _location: Location,
    private _snackBar: MatSnackBar
  ) {}

  ngOnInit(){
    this.userId = this.route.snapshot.paramMap.get('id');
    if(this.userId) this.getUser(this.userId);
  }

  private getUser(id: string) {
    this.usersService.getById(id).subscribe((data: any) => {
      const { doc } = data[0].payload;

      this.docId = doc.id;
      const result = doc.data();

      Object.keys(result)
        .filter(item => item !== 'id')
        .forEach(item => {          
          this.userForm.controls[item].setValue(result[item]);
        
          this.loading = false;
        });
        
    });
  }

  onSubmit() {
    this.loading = true;

    if (this.userId){
      this.usersService.update(this.docId, { ...this.userForm.value, id: this.userId })
      .then(() => {
        this.loading = false;

        this._snackBar.open("Usuário atualizado", "Ok", { duration: 2000 });

        this._location.back();
      }).catch((err) => {
        this.loading = false

        this._snackBar.open("Falha ao atualizar usuário", "Ok", { duration: 2000 });
      });
    } else {
      this.usersService.create(this.userForm.value)
      .then(() => {
        this.loading = false;

        this._snackBar.open("Usuário criado", "Ok", { duration: 2000 });

        this._location.back();
      })
      .catch((err) => {
        this.loading = false

        this._snackBar.open("Falha ao criar usuário", "Ok", { duration: 2000 });
      });
    }
  }
}
