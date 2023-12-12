import { MomentDeLaJournee } from "../../src/MomentDeLaJournee";
import { LangueInterface } from "../../src/langueInterface";

export class LangueFake implements LangueInterface {
    feliciter(): string {
        return 'Félicitations';
    }
    saluer(): string {
        return 'Bien le bonjour'
    }
    quitter(): string {
        return 'Arvi'
    }

}