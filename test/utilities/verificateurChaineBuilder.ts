import { LangueInterface } from '../../src/langueInterface';
import {VerificateurChaine} from '../../src/verificateurChaine';
import { LangueFrançaise } from '../../src/langueFrançaise';

export class VerificateurChaineBuilder {
    private _langue: LangueInterface = new LangueFrançaise();

    public static Default() {
        return new VerificateurChaineBuilder().Build();
    }

    public Build() : VerificateurChaine {
        return new VerificateurChaine(this._langue);
    }

    public AyantPourLangue(langue: LangueInterface): VerificateurChaineBuilder {
        this._langue = langue;
        return this;
    }
}