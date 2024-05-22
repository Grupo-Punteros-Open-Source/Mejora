import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {InvoiceListComponent} from "./manager/invoices/pages/invoice-list/invoice-list.component";
import {AddInvoiceComponent} from "./manager/invoices/components/add-invoice/add-invoice.component";
import {InvoicePreviewComponent} from "./manager/invoices/components/invoice-preview/invoice-preview.component";


const routes: Routes = [
  {path:'workshop/invoices', component: InvoiceListComponent},
  {path:'workshop/invoices/add-invoice', component: AddInvoiceComponent},
  {path:'workshop/invoices/invoice-preview/:clientId/:invoiceId', component: InvoicePreviewComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }