import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

// core layout & auth
import { IndexComponent } from './index/index.component';
import { LoginComponent } from './login/login.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { HomeComponent } from './menu/home/home/home.component';
import { AboutUsComponent } from './menu/about-us/about-us.component';
import { ContactUsComponent } from './menu/contact-us/contact-us.component';

// features
import { DepartmentComponent } from './department/department.component';
import { DepartmentDetailsComponent } from './department/department-details/department-details.component';
import { DepartmentListComponent } from './department/department-list/department-list.component';

import { DoctorComponent } from './doctor/doctor.component';
import { DoctorDetailsComponent } from './doctor/doctor-details/doctor-details.component';
import { DoctorListComponent } from './doctor/doctor-list/doctor-list.component';

import { EmployeeComponent } from './employee/employee.component';
import { EmployeeDetailsComponent } from './employee/employee-details/employee-details.component';
import { EmployeeListComponent } from './employee/employee-list/employee-list.component';

import { InsuranceComponent } from './insurance/insurance.component';
import { InsuranceDetailsComponent } from './insurance/insurance-details/insurance-details.component';
import { InsuranceListComponent } from './insurance/insurance-list/insurance-list.component';

import { MedicosComponent } from './medicos/medicos.component';
import { MedicosDetailsComponent } from './medicos/medicos-details/medicos-details.component';
import { MedicosListComponent } from './medicos/medicos-list/medicos-list.component';

import { OperationComponent } from './operation/operation.component';
import { OperationDetailsComponent } from './operation/operation-details/operation-details.component';
import { OperationListComponent } from './operation/operation-list/operation-list.component';

import { PatientComponent } from './patient/patient.component';
import { PatientDetailsComponent } from './patient/patient-details/patient-details.component';
import { PatientListComponent } from './patient/patient-list/patient-list.component';

import { SpecializationComponent } from './specialization/specialization.component';
import { SpecializationDetailsComponent } from './specialization/specialization-details/specialization-details.component';
import { SpecializationListComponent } from './specialization/specialization-list/specialization-list.component';

import { TestComponent } from './test/test.component';
import { TestDetailsComponent } from './test/test-details/test-details.component';
import { TestListComponent } from './test/test-list/test-list.component';

import { WardComponent } from './ward/ward.component';
import { WardDeatilsComponent } from './ward/ward-deatils/ward-deatils.component';
import { WardLIstComponent } from './ward/ward-list/ward-list.component';

import { BillComponent } from './bill/bill.component';
import { BillListComponent } from './bill/bill-list/bill-list.component';
import { InvoiceComponent } from './invoice/invoice.component';

// pipes
import { DepartmentPipe } from './filter/department/department.pipe';
import { DoctorPipe } from './filter/doctor/doctor.pipe';
import { EmployeePipe } from './filter/employee/employee.pipe';
import { InsurancePipe } from './filter/insurance/insurance.pipe';
import { MedicosPipe } from './filter/medicos/medicos.pipe';
import { OperationPipe } from './filter/operation/operation.pipe';
import { PatientPipe } from './filter/patient/patient.pipe';
import { BillPipe } from './filter/bill/bill.pipe';
import { TestPipe } from './filter/test/test.pipe';
import { WardPipe } from './filter/Ward/ward.pipe';
import { SpecializationPipe } from './filter/specialization/specialization.pipe';

@NgModule({
  declarations: [
    AppComponent,
    // layout & auth
    IndexComponent, LoginComponent, SignUpComponent, HomeComponent, AboutUsComponent, ContactUsComponent,
    // features
    DepartmentComponent, DepartmentDetailsComponent, DepartmentListComponent,
    DoctorComponent, DoctorDetailsComponent, DoctorListComponent,
    EmployeeComponent, EmployeeDetailsComponent, EmployeeListComponent,
    InsuranceComponent, InsuranceDetailsComponent, InsuranceListComponent,
    MedicosComponent, MedicosDetailsComponent, MedicosListComponent,
    OperationComponent, OperationDetailsComponent, OperationListComponent,
    PatientComponent, PatientDetailsComponent, PatientListComponent,
    SpecializationComponent, SpecializationDetailsComponent, SpecializationListComponent,
    TestComponent, TestDetailsComponent, TestListComponent,
    WardComponent, WardDeatilsComponent, WardLIstComponent,
    BillComponent, BillListComponent,
    InvoiceComponent,
    // pipes
    DepartmentPipe, DoctorPipe, EmployeePipe, InsurancePipe, MedicosPipe,
    OperationPipe, PatientPipe, BillPipe, TestPipe, WardPipe, SpecializationPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,     // provides RouterModule for <router-outlet>
    FormsModule,          // template-driven forms (ngModel/ngForm)
    ReactiveFormsModule,  // reactive forms
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
