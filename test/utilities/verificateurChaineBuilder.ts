import { LangueInterface } from '../../src/langueInterface';
import {VerificateurChaine} from '../../src/verificateurChaine';
import { LangueFrançaise } from '../../src/langueFrançaise';
import { MomentDeLaJournee } from '../../src/MomentDeLaJournee';

export class VerificateurChaineBuilder {
    private _langue: LangueInterface = new LangueFrançaise();
    private _moment: MomentDeLaJournee = MomentDeLaJournee.INCONNU;

    public static Default() {
        return new VerificateurChaineBuilder().Build();
    }

    public Build() : VerificateurChaine {
        return new VerificateurChaine(this._langue, this._moment);
    }

    public AyantPourLangue(langue: LangueInterface): VerificateurChaineBuilder {
        this._langue = langue;
        return this;
    }

    public AyantPourMomentDeLaJournee(moment : MomentDeLaJournee) {
        this._moment = moment;
        return this;
    }
}