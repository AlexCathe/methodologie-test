import { LanguageService } from 'typescript';
import { MomentDeLaJournee } from './../src/domain/MomentDeLaJournee';
import { LangueAnglaise } from '../src/domain/langueAnglaise';
import { VerificateurChaine } from '../src/domain/verificateurChaine';
import { VerificateurChaineBuilder } from './utilities/verificateurChaineBuilder';
import * as os from "os";
import { LangueFrançaise } from '../src/domain/langueFrançaise';


describe('test recette', () => {
    test.each([
        ['girafarig'],
        ['kayak']
    ])('ÉTANT donné un utilisateur parlant Anglais ' +
    'ET que la période de la journée est le soir ' +
    'QUAND il saisit un palindrome ' +
    'ALORS on lui dit Bonjour, puis on renvoie le palindrome, suivi de bien dit et de bonsoir en anglais',
    (chaine: any) => {
        const moment: MomentDeLaJournee = MomentDeLaJournee.SOIREE;
        const anglais : LangueAnglaise = new LangueAnglaise();
        const resultat = new VerificateurChaineBuilder()
                                                        .AyantPourLangue(anglais)
                                                        .AyantPourMomentDeLaJournee(moment)
                                                        .Build().verifier(chaine);

        var premiereLigne = resultat.split(os.EOL)[0];                                                
        var palindrome = resultat.split(os.EOL)[1];
        var felicitations = resultat.split(os.EOL)[2];
        var derniereLigne = resultat.split(os.EOL)[3];

        
        expect(premiereLigne).toEqual(anglais.saluer(moment))
        expect(palindrome).toEqual(chaine)
        expect(felicitations).toEqual(anglais.feliciter())
        expect(derniereLigne).toEqual(anglais.quitter(moment))

    })
    test.each([
        ['test'],
        ['coucou']
    ])('ÉTANT donné un utilisateur parlant Français ' +
    'ET que la période de la journée est le matin ' +
    'QUAND il saisit un non palindrome ' +
    "ALORS on lui dit Bonjour, puis on renvoie le mot à l'envers, suivi de au revoir en français",
    (chaine: any) => {
        const moment: MomentDeLaJournee = MomentDeLaJournee.MATIN;
        const français : LangueFrançaise = new LangueFrançaise();
        const resultat = new VerificateurChaineBuilder()
                                                        .AyantPourLangue(français)
                                                        .AyantPourMomentDeLaJournee(moment)
                                                        .Build().verifier(chaine);

        var premiereLigne = resultat.split(os.EOL)[0];                                                
        var attendu = resultat.split(os.EOL)[1];
        var reverseChaine = chaine.split('').reverse().join('');
        var derniereLigne = resultat.split(os.EOL)[2];

        
        expect(premiereLigne).toEqual(français.saluer(moment))
        expect(attendu).toEqual(reverseChaine);
        expect(derniereLigne).toEqual(français.quitter(moment))

    })
    test.each([
        ['girafarig'],
        ['engagelejeuquejelegagne']
    ])('ÉTANT donné un utilisateur parlant une langue inconnue ' +
    'ET que la période de la journée est la nuit ' +
    'QUAND il saisit un palindrome ' +
    "ALORS on lui dit Bonne nuit, puis on renvoie le palindrome, suivi de bien dit et de au revoir dans la langue par défaut",
    (chaine: any) => {
        const moment: MomentDeLaJournee = MomentDeLaJournee.NUIT;
        const français : LangueFrançaise = new LangueFrançaise();

        const resultat = new VerificateurChaineBuilder()
                                                        .AyantPourMomentDeLaJournee(moment)
                                                        .Build().verifier(chaine);

        var premiereLigne = resultat.split(os.EOL)[0];                                                
        var attendu = resultat.split(os.EOL)[1];
        var reverseChaine = chaine.split('').reverse().join('');
        var felicitations = resultat.split(os.EOL)[2];
        var derniereLigne = resultat.split(os.EOL)[3];

        expect(premiereLigne).toEqual(français.saluer(moment))
        expect(attendu).toEqual(reverseChaine);
        expect(felicitations).toEqual(français.feliciter())
        expect(derniereLigne).toEqual(français.quitter(moment))
    })
})