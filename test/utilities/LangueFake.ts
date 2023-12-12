import { MomentDeLaJournee } from "../../src/domain/MomentDeLaJournee";
import { LangueInterface } from "../../src/domain/langueInterface";

export class LangueFake implements LangueInterface {
    feliciter(): string {
        return 'Félicitations';
    }
    saluer(moment : MomentDeLaJournee): string {
        return 'Bien le bonjour/' + moment.toString()
    }
    quitter(): string {
        return 'Arvi'
    }

}