import { LangueAnglaise } from '../src/domain/langueAnglaise';
import * as os from "os";
import { VerificateurChaineBuilder } from './utilities/verificateurChaineBuilder';
import { LangueInterface } from '../src/domain/langueInterface';
import { LangueFrançaise } from '../src/domain/langueFrançaise';
import { Expressions } from '../src/domain/expression';
import { LangueFake } from './utilities/LangueFake';
import { LangueStub } from './utilities/LangueStub';
import { MomentDeLaJournee } from '../src/domain/MomentDeLaJournee';

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

        let attendu = chaine.split('').reverse().join('');

        let resultat = VerificateurChaineBuilder.Default().verifier(chaine);
        let chainePal = resultat.split(os.EOL)[1]

        expect(chainePal).toEqual(attendu);
        expect(resultat).toContain(chaine + os.EOL + Expressions.BIEN_DIT);
     })

    test.each([
        ...palindrome
    ])('ETANT DONNÉ un utilisateur parlant une langue' +
    'QUAND on saisit un palindrome, ALORS il est renvoyé Bien dit dans la langue de la personne',
     (chaine: string) => {

        const langue: LangueFake = new LangueFake();
        let attendu = chaine.split('').reverse().join('');

        let resultat = new VerificateurChaineBuilder().AyantPourLangue(langue).Build().verifier(chaine);
        let chainePal = resultat.split(os.EOL)[1]

        expect(chainePal).toEqual(attendu);
        expect(resultat).toContain(chaine + os.EOL + langue.feliciter());
     })

    test.each(casSalutations())
    ('ETANT DONNE un utilisateur parlant une langue ' +
    'ET que nous somme le %s '+
    'QUAND il entre une chaine ' +
    'ALORS les salutations de cette langue à ce moment de la journée sont envoyées avant toute réponse', 
    (moment : MomentDeLaJournee, chaine : string) => {
        
        const langue : LangueFake = new LangueFake();
        let resultat = new VerificateurChaineBuilder()
                            .AyantPourLangue(langue)
                            .AyantPourMomentDeLaJournee(moment)
                            .Build()
                            .verifier(chaine);
        
        var premiereLigne = resultat.split(os.EOL)[0]
        expect(premiereLigne).toEqual(langue.saluer(moment))
    })

    test.each(casSalutations())
    ('ETANT DONNE un utilisateur parlant une langue ' +
    'ET que nous somme le %s '+
    'QUAND il entre une chaine ' +
    'ALORS les au revoir de cette langue à ce moment de la journée sont envoyées à la fin', 
    (moment : MomentDeLaJournee, chaine : string) => {
        
        const langue : LangueFake = new LangueFake();
        let resultat = new VerificateurChaineBuilder()
                            .AyantPourLangue(langue)
                            .AyantPourMomentDeLaJournee(moment)
                            .Build()
                            .verifier(chaine);
        var resultatSplit = resultat.split(os.EOL);
        var derniereLigne = resultatSplit[resultatSplit.length - 1]
        expect(derniereLigne).toEqual(langue.quitter(moment))
    })
})