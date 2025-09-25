import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LoginComponent } from './login/login.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { IndexComponent } from './index/index.component';
import { HomeComponent } from './menu/home/home/home.component';
import { AboutUsComponent } from './menu/about-us/about-us.component';
import { ContactUsComponent } from './menu/contact-us/contact-us.component';
import { InvoiceComponent } from './invoice/invoice.component';

import { BillComponent } from './bill/bill.component';
import { BillListComponent } from './bill/bill-list/bill-list.component';

import { DepartmentComponent } from './department/department.component';
import { DepartmentListComponent } from './department/department-list/department-list.component';
import { DepartmentDetailsComponent } from './department/department-details/department-details.component';

import { DoctorComponent } from './doctor/doctor.component';
import { DoctorListComponent } from './doctor/doctor-list/doctor-list.component';
import { DoctorDetailsComponent } from './doctor/doctor-details/doctor-details.component';

import { EmployeeComponent } from './employee/employee.component';
import { EmployeeListComponent } from './employee/employee-list/employee-list.component';
import { EmployeeDetailsComponent } from './employee/employee-details/employee-details.component';

import { InsuranceComponent } from './insurance/insurance.component';
import { InsuranceListComponent } from './insurance/insurance-list/insurance-list.component';
import { InsuranceDetailsComponent } from './insurance/insurance-details/insurance-details.component';

import { MedicosComponent } from './medicos/medicos.component';
import { MedicosListComponent } from './medicos/medicos-list/medicos-list.component';
import { MedicosDetailsComponent } from './medicos/medicos-details/medicos-details.component';

import { OperationComponent } from './operation/operation.component';
import { OperationListComponent } from './operation/operation-list/operation-list.component';
import { OperationDetailsComponent } from './operation/operation-details/operation-details.component';

import { PatientComponent } from './patient/patient.component';
import { PatientListComponent } from './patient/patient-list/patient-list.component';
import { PatientDetailsComponent } from './patient/patient-details/patient-details.component';

import { SpecializationComponent } from './specialization/specialization.component';
import { SpecializationListComponent } from './specialization/specialization-list/specialization-list.component';
import { SpecializationDetailsComponent } from './specialization/specialization-details/specialization-details.component';

import { TestComponent } from './test/test.component';
import { TestListComponent } from './test/test-list/test-list.component';
import { TestDetailsComponent } from './test/test-details/test-details.component';

import { WardComponent } from './ward/ward.component';
import { WardLIstComponent } from './ward/ward-list/ward-list.component';
import { WardDeatilsComponent } from './ward/ward-deatils/ward-deatils.component';

const routes: Routes = [
  // public/auth
  { path: 'login', component: LoginComponent },
  { path: 'signup', component: SignUpComponent },

  // shell layout
  {
    path: '',
    component: IndexComponent,                // renders navbar/sidebar etc.
    children: [
      { path: '', pathMatch: 'full', redirectTo: 'home' },

      { path: 'home', component: DoctorComponent },
      { path: 'about', component: AboutUsComponent },
      { path: 'contact', component: ContactUsComponent },

      { path: 'invoice/:id', component: InvoiceComponent },

      { path: 'bill', component: BillComponent },
      { path: 'billUpdate/:id', component: BillComponent },
      { path: 'billList', component: BillListComponent },

      { path: 'department', component: DepartmentComponent },
      { path: 'departmentList', component: DepartmentListComponent },
      { path: 'departmentUpdate/:id', component: DepartmentComponent },
      { path: 'departmentDetail/:id', component: DepartmentDetailsComponent },

      { path: 'doctor', component: DoctorComponent },
      { path: 'doctorList', component: DoctorListComponent },
      { path: 'doctorUpdate/:id', component: DoctorComponent },
      { path: 'doctorDetail/:id', component: DoctorDetailsComponent },

      { path: 'employee', component: EmployeeComponent },
      { path: 'employeeList', component: EmployeeListComponent },
      { path: 'employeeUpdate/:id', component: EmployeeComponent },
      { path: 'employeeDetail/:id', component: EmployeeDetailsComponent },

      { path: 'insurance', component: InsuranceComponent },
      { path: 'insuranceList', component: InsuranceListComponent },
      { path: 'insuranceUpdate/:id', component: InsuranceComponent },
      { path: 'insuranceDetail/:id', component: InsuranceDetailsComponent },

      { path: 'medicos', component: MedicosComponent },
      { path: 'medicosList', component: MedicosListComponent },
      { path: 'medicosUpdate/:id', component: MedicosComponent },
      { path: 'medicosDetail/:id', component: MedicosDetailsComponent },

      { path: 'operation', component: OperationComponent },
      { path: 'operationList', component: OperationListComponent },
      { path: 'operationUpdate/:id', component: OperationComponent },
      { path: 'operationDetail/:id', component: OperationDetailsComponent },

      { path: 'patient', component: PatientComponent },
      { path: 'patientList', component: PatientListComponent },
      { path: 'patientUpdate/:id', component: PatientComponent },
      { path: 'patientDetail/:id', component: PatientDetailsComponent },

      { path: 'specialization', component: SpecializationComponent },
      { path: 'specializationList', component: SpecializationListComponent },
      { path: 'specializationUpdate/:id', component: SpecializationComponent },
      { path: 'specializationDetail/:id', component: SpecializationDetailsComponent },

      { path: 'test', component: TestComponent },
      { path: 'testList', component: TestListComponent },
      { path: 'testUpdate/:id', component: TestComponent },
      { path: 'testDetail/:id', component: TestDetailsComponent },

      { path: 'ward', component: WardComponent },
      { path: 'wardList', component: WardLIstComponent },
      { path: 'wardUpdate/:id', component: WardComponent },
      { path: 'wardDetail/:id', component: WardDeatilsComponent },
    ]
  },

  // fallback
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })],
  exports: [RouterModule]
})
export class AppRoutingModule {}
