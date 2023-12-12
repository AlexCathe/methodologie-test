import { LangueAnglaise } from './../src/langueAnglaise';
import * as os from "os";
import { VerificateurChaineBuilder } from './utilities/verificateurChaineBuilder';
import { LangueInterface } from '../src/langueInterface';
import { LangueFrançaise } from '../src/langueFrançaise';
import { Expressions } from '../src/expression';
import { LangueFake } from './utilities/LangueFake';
import { LangueStub } from './utilities/LangueStub';
import { MomentDeLaJournee } from '../src/MomentDeLaJournee';

const palindrome = ['engagelejeuquejelegagne', 'radar'];
const nonPalindrome = ['test', 'ynov'];
const moments : MomentDeLaJournee[] = [MomentDeLaJournee.INCONNU, 
    MomentDeLaJournee.MATIN,
    MomentDeLaJournee.APRES_MIDI,
    MomentDeLaJournee.SOIREE,
    MomentDeLaJournee.NUIT]

function casSalutations() {
    const chaines: string[] = [...nonPalindrome, ...palindrome];
    const cases: [MomentDeLaJournee, string][] = [];
    for (let chaine of chaines) {
        for (let moment of moments) {
            cases.push([moment, chaine])
        }
    }

    return cases;
}

describe('test works', () => {
    test.each([
        ['test', new LangueFrançaise()],
        ['radar', new LangueFrançaise()],
        ['test', new LangueAnglaise()],
        ['radar', new LangueAnglaise()]
    ])('QUAND on saisit une chaine %s ' + 
    'ALORS elle est renvoyée en miroir',
    (chaine : any) => {
        const resultat = VerificateurChaineBuilder.Default().verifier(chaine);

        let attendu = chaine.split('').reverse().join('');
        expect(resultat).toContain(attendu);
    });

    test.each([
        ...palindrome
    ])('QUAND on saisit un palindrome, ALORS il est renvoyé Bien dit !',
     (chaine: string) => {

        let resultat = VerificateurChaineBuilder.Default().verifier(chaine);

        expect(resultat).toContain(chaine + os.EOL + Expressions.BIEN_DIT)
     })

    test.each(casSalutations())
    ('ETANT DONNE un utilisateur parlant une langue ' +
    'ET que nous somme le %s'+
    'QUAND on entre une chaine ' +
    'ALORS il est renvoyé et le bonjour de cette langue est envoyé avant tout', 
    (moment : MomentDeLaJournee, chaine : string) => {
        
        const langue : LangueFake = new LangueFake();
        let resultat = new VerificateurChaineBuilder()
                            .AyantPourLangue(langue)
                            .AyantPourMomentDeLaJournee(moment)
                            .Build()
                            .verifier(chaine);
        var derniereLigne = resultat.split(os.EOL)[0]
        expect(derniereLigne).toEqual(langue.saluer())
    })
})