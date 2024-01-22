import { LangueInterface } from '../domain/langueInterface';
import { LangueFrançaise } from '../domain/langueFrançaise';
import { LangueAnglaise } from '../domain/langueAnglaise';
export class SystemLanguage {

    private language = Intl.DateTimeFormat().resolvedOptions().locale;
    private langageObj : LangueInterface

    constructor() {
        switch(this.language) {
            case 'FR-fr':
                this.langageObj = new LangueFrançaise();
                break;
            case 'EN-en':
                this.langageObj = new LangueAnglaise();
                break;
            default:
                this.langageObj = new LangueFrançaise();
        }
    }

    public getLangageObj() {
        return this.langageObj
    }
}