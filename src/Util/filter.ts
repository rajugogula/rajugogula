import {Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'tableDataFilter',
    pure: false
})

export class TableDataFilter implements PipeTransform {
    transform(items: any[], filter: any): any {
             if (!items || !filter) {
                return items;
             }

             if (filter.name === 'Available') {
                 return items.filter(item => !item.reservationStatus);
             } else if (filter.name === 'Reserved') {
                return items.filter(item => item.reservationStatus);
             }
             return items;
    }
}