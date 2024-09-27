import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {

  transform(adatok:any[], keresendo:string, keresMezo:string): any {
    if (!adatok) return null;
    if (keresendo =="" || !keresendo) return adatok;
    if (keresMezo="")
      return adatok.filter(
        (elem)=>JSON.stringify(elem).toLowerCase().includes(keresendo.toLowerCase()))
    
    return adatok.filter(
      (elem)=> elem[keresMezo].toLowerCase().includes(keresendo.toLowerCase())
    )
  }

}
