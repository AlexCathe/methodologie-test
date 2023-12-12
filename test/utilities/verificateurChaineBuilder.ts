import { LangueInterface } from '../../src/domain/langueInterface';
import {VerificateurChaine} from '../../src/domain/verificateurChaine';
import { LangueFrançaise } from '../../src/domain/langueFrançaise';
import { MomentDeLaJournee } from '../../src/domain/MomentDeLaJournee';

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