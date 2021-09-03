import { Component, ViewEncapsulation } from '@angular/core';

export interface PeriodicElement {
    name: string;
    position: number;
    amount: number;
    symbol: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
    { position: 1, name: 'Hydrogen', amount: 1.0079, symbol: 'H' },
    { position: 2, name: 'Helium', amount: 4.0026, symbol: 'He' },
    { position: 3, name: 'Lithium', amount: 6.941, symbol: 'Li' },
    { position: 4, name: 'Beryllium', amount: 9.0122, symbol: 'Be' },
    { position: 5, name: 'Boron', amount: 10.811, symbol: 'B' },
    { position: 6, name: 'Carbon', amount: 12.0107, symbol: 'C' },
    { position: 7, name: 'Nitrogen', amount: 14.0067, symbol: 'N' },
    { position: 8, name: 'Oxygen', amount: 15.9994, symbol: 'O' },
    { position: 9, name: 'Fluorine', amount: 18.9984, symbol: 'F' },
    { position: 10, name: 'Neon', amount: 20.1797, symbol: 'Ne' },
];

@Component({
    selector: 'transfer',
    templateUrl: './transfer.component.html',
    encapsulation: ViewEncapsulation.None,
})
export class TransferComponent {
    formFieldHelpers: string[] = [''];
    displayedColumns: string[] = ['position', 'name', 'amount'];
    dataSource = ELEMENT_DATA;

    /**
     * Constructor
     */
    constructor() {}

    getFormFieldHelpersAsString(): string {
        return this.formFieldHelpers.join(' ');
    }
}
