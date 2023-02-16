import { Pipe, PipeTransform } from '@angular/core';
import { Content } from './helper-files/content-interface';

@Pipe({
  name: 'pipe'
})
export class PipePipe implements PipeTransform {

 
  transform(contentList: Content[], type?: string): Content[] {
    if(!type){
      //Get content list items with no type ("")
      return contentList.filter(c => c.type == "");
    }
    return contentList.filter(c => c.type == type);
  }

}