import { Pipe, PipeTransform } from "@angular/core";
@Pipe({
  name: 'orderBy' 
})
export class OrderByPipe implements PipeTransform {
  transform(array: [any]): any {
    //watch the console to see how many times you pipe is called
    console.log("calling pipe");
    /* javascript is async, so could be that the pipe is called before
    that the todos list is created, in this case we do nothing
    returning the array as it is */
    // if (isBlank(array)) return null;
    array.sort((a, b) => {
      if (a.distancia < b.distancia) {
        return -1;
      //.completed because we want to sort the list by completed property
      } else if (a.distancia > b.distancia) {
        return 1;
      } else {
        return 0;
      }
    });
    return array;
  }
}