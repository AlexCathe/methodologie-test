import { MomentDeLaJournee } from "./MomentDeLaJournee";

export interface LangueInterface {
    feliciter(): string;
    saluer(moment : MomentDeLaJournee): string;
    quitter(moment : MomentDeLaJournee): string;
}