import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'trust'
})
export class TrustPipe implements PipeTransform {
  constructor(private sanitizer:DomSanitizer){}

  transform(value: string, ...args: unknown[]): SafeResourceUrl {
    return this.sanitizer.bypassSecurityTrustResourceUrl(value);
  }

}
