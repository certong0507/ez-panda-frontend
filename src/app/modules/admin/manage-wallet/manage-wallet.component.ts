import { Component, ViewEncapsulation } from '@angular/core';

export interface PeriodicElement {
    name: string;
    position: number;
    saving: number;
    symbol: string;
  }

const ELEMENT_DATA: PeriodicElement[] = [
    {position: 1, name: 'Hydrogen', saving: 1.0079, symbol: 'H'},
    {position: 2, name: 'Helium', saving: 4.0026, symbol: 'He'},
    {position: 3, name: 'Lithium', saving: 6.941, symbol: 'Li'},
    {position: 4, name: 'Beryllium', saving: 9.0122, symbol: 'Be'},
    {position: 5, name: 'Boron', saving: 10.811, symbol: 'B'},
    {position: 6, name: 'Carbon', saving: 12.0107, symbol: 'C'},
    {position: 7, name: 'Nitrogen', saving: 14.0067, symbol: 'N'},
    {position: 8, name: 'Oxygen', saving: 15.9994, symbol: 'O'},
    {position: 9, name: 'Fluorine', saving: 18.9984, symbol: 'F'},
    {position: 10, name: 'Neon', saving: 20.1797, symbol: 'Ne'},
  ];
  
@Component({
    selector: 'manage-wallet',
    templateUrl: './manage-wallet.component.html',
    encapsulation: ViewEncapsulation.None,
})
  
export class ManageWallet {
    displayedColumns: string[] = ['position', 'name', 'saving'];
    dataSource = ELEMENT_DATA;

    /**
     * Constructor
     */
    constructor() {}
}
