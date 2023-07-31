import { Component, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { mockData } from '../utils/constants/constants';
import { MatStepper } from '@angular/material/stepper';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

  @ViewChild('stepper') private myStepper!: MatStepper;

  data: any;
  isLinear = true;
  searchedCPF = '';
  userData: any | null = null;

  formCPFGroup!: FormGroup;
  formDocumentsGroup!: FormGroup;
  formRegistrationDataGroup!: FormGroup;
  formAdmissionGroup!: FormGroup;

  constructor(private formBuilder: FormBuilder) { 
    this.createForm();
  }

  ngOnInit() { 
    
  }
  /**
  * testando mensagem  
  *@autor Pedro Gregorio
  *
  */
  nextStep() {
    this.myStepper.next();
  }

  createForm() {
    this.formCPFGroup = this.formBuilder.group({
      CPF: ['', Validators.required]
    });

    this.formDocumentsGroup = this.formBuilder.group({
      documents: ['', Validators.required]
    });

    this.formRegistrationDataGroup = this.formBuilder.group({
      registrationData: ['', Validators.required]
    });

    this.formAdmissionGroup = this.formBuilder.group({
      admission: ['', Validators.required]
    });
  }

  onSearch() {
    const cpfFormControl = this.formCPFGroup.get('CPF');
  
    if (this.formCPFGroup.valid) {
      const cleanedCPF = cpfFormControl?.value.replace(/\D/g, '');
      const userData = this.checkCPF(cleanedCPF);
  
      if (userData) {
        this.userData = userData;
        cpfFormControl?.setErrors(null);
      } else {
        this.userData = null;
        cpfFormControl?.setErrors({ invalidCPF: true }); 
      }
    } else {
      cpfFormControl?.markAsTouched(); 
    }
  }

  checkCPF(searchedCPF: string) {
    const cleanedSearchCPF = searchedCPF.replace(/\D/g, '');
    const userData = mockData.find(user => user.cpf === Number(cleanedSearchCPF));
    return userData || null;
  }
}
