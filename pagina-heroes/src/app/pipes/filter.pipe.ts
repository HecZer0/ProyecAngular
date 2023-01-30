import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
    name: 'filter',
})

export class FilterPipe implements PipeTransform {

    transform(values: string[], args: string): string[] {
        let result: string[] = [];

        for (const value of values) {
            if (value.toLocaleLowerCase().indexOf(args.toLocaleLowerCase()) > -1){
                result = [...result, value];
            }
        }
        return result;
    }


}