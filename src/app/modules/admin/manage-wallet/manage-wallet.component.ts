import { Component, ViewEncapsulation } from '@angular/core';

export interface PeriodicElement {
    name: string;
    position: number;
    saving: number;
    symbol: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
    { position: 1, name: 'Hydrogen', saving: 1.0079, symbol: 'H' },
    { position: 2, name: 'Helium', saving: 4.0026, symbol: 'He' },
    { position: 3, name: 'Lithium', saving: 6.941, symbol: 'Li' },
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
