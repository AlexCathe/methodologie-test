import { MomentDeLaJournee } from "./MomentDeLaJournee";
import { Expressions } from "./expression";
import { LangueInterface } from "./langueInterface";

export class LangueAnglaise implements LangueInterface {
    public feliciter(): string {
        return Expressions.WELL_SAID;
    }

    public saluer(moment : MomentDeLaJournee): string {
        if(moment === MomentDeLaJournee.MATIN)
            return Expressions.GOOD_MORNING;
        if(moment === MomentDeLaJournee.APRES_MIDI)
            return Expressions.GOOD_AFTERNOON;
        if(moment === MomentDeLaJournee.SOIREE)
            return Expressions.GOOD_EVENING;
        if(moment === MomentDeLaJournee.NUIT)
            return Expressions.GOOD_NIGHT;
        return Expressions.HELLO;
    }

    public quitter(moment : MomentDeLaJournee): string {
        return Expressions.GOODBYE;
    }
}