import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'] // Usa styleUrls en lugar de styleUrl
})
export class LoginComponent implements OnInit {
  authenticationError: boolean = false;
  myForm: FormGroup;

  constructor(private formBuilder: FormBuilder, private router: Router) {
    this.myForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required]      
    });
  }

  ngOnInit(): void {
    // No es necesario volver a definir el formulario aquí
  }

  onSubmit(): void {
    if (this.myForm.valid) {
      // Lógica para autenticar al usuario
      console.log(this.myForm.value); // Cambiado a this.myForm.value
    } else {
      // Manejar errores de validación
    }
  }
}