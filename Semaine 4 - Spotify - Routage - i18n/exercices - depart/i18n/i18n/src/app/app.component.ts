import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'i18n';
  lang = 'fr';

  constructor(public translate:TranslateService){
    translate.setDefaultLang(this.lang);
    translate.use(this.lang);
  }

  useLanguage(language:string){
    this.translate.use(language);
    this.lang = language;
  }

}
