import { Expressions } from "./expression";
import { LangueInterface } from "./langueInterface";
import { MomentDeLaJournee } from './MomentDeLaJournee';

export class LangueFrançaise implements LangueInterface {
    public feliciter(): string {
        return Expressions.BIEN_DIT;
    }

    public saluer(moment : MomentDeLaJournee): string {
        if(moment === MomentDeLaJournee.SOIREE || moment === MomentDeLaJournee.NUIT )
            return Expressions.BONSOIR;
        return Expressions.BONJOUR;
    }
    
    public quitter(moment : MomentDeLaJournee): string {
        if(moment === MomentDeLaJournee.MATIN)
            return Expressions.BONNE_JOURNEE;
        if(moment === MomentDeLaJournee.APRES_MIDI)
            return Expressions.BONNE_APRES_MIDI;
        if(moment === MomentDeLaJournee.SOIREE)
            return Expressions.BONNE_SOIREE;
        if(moment === MomentDeLaJournee.NUIT)
            return Expressions.BONNE_NUIT;

        return Expressions.AU_REVOIR
        
        
        
        
    }
}