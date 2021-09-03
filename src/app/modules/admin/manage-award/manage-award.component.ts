import { Component, ViewEncapsulation } from '@angular/core';

export interface PeriodicElement {
    name: string;
    position: number;
    reward: number;
    symbol: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
    { position: 1, name: 'Hydrogen', reward: 1.0079, symbol: 'H' },
    { position: 2, name: 'Helium', reward: 4.0026, symbol: 'He' },
    { position: 3, name: 'Lithium', reward: 6.941, symbol: 'Li' },
];

@Component({
    selector: 'manage-award',
    templateUrl: './manage-award.component.html',
    encapsulation: ViewEncapsulation.None,
})
export class ManageAward {
    displayedColumns: string[] = ['position', 'name', 'reward'];
    dataSource = ELEMENT_DATA;

    /**
     * Constructor
     */
    constructor() {}
}
