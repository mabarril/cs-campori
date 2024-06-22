import { Component, inject } from '@angular/core';

import { ReactiveFormsModule, FormBuilder, Validators } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatSelectModule } from '@angular/material/select';
import { MatRadioModule } from '@angular/material/radio';
import { MatCardModule } from '@angular/material/card';
import { MatIcon } from '@angular/material/icon';
import { NgxPrintModule } from 'ngx-print';
import { RouterLink } from '@angular/router';
import { HeaderComponent } from "../../components/header/header.component";

@Component({
    selector: 'app-formulario',
    templateUrl: './formulario.component.html',
    styleUrl: './formulario.component.css',
    standalone: true,
    imports: [
        MatInputModule,
        MatButtonModule,
        MatSelectModule,
        MatRadioModule,
        MatCardModule,
        ReactiveFormsModule,
        NgxPrintModule,
        MatIcon,
        RouterLink,
        HeaderComponent
    ]
})
export class FormularioComponent {
  private fb = inject(FormBuilder);
  addressForm = this.fb.group({
    nomeResp: [null, Validators.required],
    rgResp: [null, Validators.required],
    oeResp: [null, Validators.required],
    cpfResp: [null, Validators.required],
    endereco: [null, Validators.required],
    nomeDbv: [null, Validators.required],
    dtNascDbv: [null, Validators.required],
    rgDbv: [null, Validators.required],
    oeDbv: [null, Validators.required],
    cpfDbv: [null, Validators.required],
  });



  sendForm() {
    let dados = this.addressForm.value;
    console.log(dados)  }

  onSubmit(): void {
    alert('Thanks!');
  }
}
