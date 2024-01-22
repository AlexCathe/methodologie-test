import { MomentDeLaJournee } from "../src/domain/MomentDeLaJournee";
import { Expressions } from "../src/domain/expression"
import { LangueAnglaise } from "../src/domain/langueAnglaise"
import { LangueFrançaise } from "../src/domain/langueFrançaise";
import { LangueInterface } from "../src/domain/langueInterface";

describe('test languages', () => {
    test.each([
        [new LangueAnglaise(), MomentDeLaJournee.INCONNU ,Expressions.HELLO],
        [new LangueAnglaise(), MomentDeLaJournee.MATIN, Expressions.GOOD_MORNING],
        [new LangueAnglaise(), MomentDeLaJournee.APRES_MIDI, Expressions.GOOD_AFTERNOON],
        [new LangueAnglaise(), MomentDeLaJournee.SOIREE, Expressions.GOOD_EVENING],
        [new LangueAnglaise(), MomentDeLaJournee.NUIT, Expressions.GOOD_NIGHT],
        [new LangueFrançaise(), MomentDeLaJournee.INCONNU ,Expressions.BONJOUR],
        [new LangueFrançaise(), MomentDeLaJournee.MATIN, Expressions.BONJOUR],
        [new LangueFrançaise(), MomentDeLaJournee.APRES_MIDI, Expressions.BONJOUR],
        [new LangueFrançaise(), MomentDeLaJournee.SOIREE, Expressions.BONSOIR],
        [new LangueFrançaise(), MomentDeLaJournee.NUIT, Expressions.BONSOIR],
    ])('QUAND l\' utilisateur parle %s et qu\'il est le %s ALORS on le salue avec %s', (langue : LangueInterface, moment : MomentDeLaJournee ,attendu : string) => {
        expect(langue.saluer(moment)).toBe(attendu);
    })

    test.each([
        [new LangueAnglaise(), MomentDeLaJournee.INCONNU ,Expressions.GOODBYE],
        [new LangueAnglaise(), MomentDeLaJournee.MATIN, Expressions.GOODBYE],
        [new LangueAnglaise(), MomentDeLaJournee.APRES_MIDI, Expressions.GOODBYE],
        [new LangueAnglaise(), MomentDeLaJournee.SOIREE, Expressions.GOODBYE],
        [new LangueAnglaise(), MomentDeLaJournee.NUIT, Expressions.GOODBYE],
        [new LangueFrançaise(), MomentDeLaJournee.INCONNU ,Expressions.AU_REVOIR],
        [new LangueFrançaise(), MomentDeLaJournee.MATIN, Expressions.BONNE_JOURNEE],
        [new LangueFrançaise(), MomentDeLaJournee.APRES_MIDI, Expressions.BONNE_APRES_MIDI],
        [new LangueFrançaise(), MomentDeLaJournee.SOIREE, Expressions.BONNE_SOIREE],
        [new LangueFrançaise(), MomentDeLaJournee.NUIT, Expressions.BONNE_NUIT],
    ])('QUAND l\' utilisateur parle %s et qu\'il est le %s ALORS on le quitte avec %s', (langue : LangueInterface, moment : MomentDeLaJournee ,attendu : string) => {
        expect(langue.quitter(moment)).toBe(attendu);
    })
})