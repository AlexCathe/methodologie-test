import * as os from 'os';
import { LangueInterface } from "./langueInterface";
import { MomentDeLaJournee } from './MomentDeLaJournee';

export class VerificateurChaine {
    private readonly _langue: LangueInterface;
    private readonly _moment : MomentDeLaJournee;

    constructor(langue: LangueInterface, moment : MomentDeLaJournee) {
        this._langue = langue;
        this._moment = moment;
    }

    public verifier(chaine:string) : string {

         let miroir = chaine.split('').reverse().join('')

         if(chaine == miroir) {
            miroir = chaine + os.EOL + this._langue.feliciter();
         }

        return this._langue.saluer(this._moment) + os.EOL + miroir + os.EOL + this._langue.quitter(this._moment)

    }
}