import { LangueAnglaise } from './../src/langueAnglaise';
import { VerificateurChaine } from '../src/verificateurChaine';
import * as os from "os";
import { VerificateurChaineBuilder } from './utilities/verificateurChaineBuilder';
import { LangueInterface } from '../src/langueInterface';
import { LangueFrançaise } from '../src/langueFrançaise';
import { Expressions } from '../src/expression';

const palindrome = 'engagelejeuquejelegagne';
const nonPalindrome = ['test', 'ynov'];

function* casSalutations() {
    const chaines: string[] = [...nonPalindrome, palindrome];
    const langues: LangueInterface[] = [new LangueAnglaise(), new LangueFrançaise()];
    const cases: any[] = [];
    for (let chaine of chaines) {
        for (let langue of langues) {
            cases.push([chaine, langue])
        }
    }

    return cases;
}

describe('test works', () => {
    test.each([
        casSalutations()
    ])('QUAND on saisit un non-palindrome %s ' + 
    'ALORS elle est renvoyée en miroir',
    (chaine : any) => {
        const resultat = VerificateurChaineBuilder.Default().verifier(chaine);

        let attendu = chaine.split('').reverse().join('');
        expect(resultat).toContain(attendu);
    });

    test.each([
        ['engagelejeuquejelegagne'],
        ['girafarig']
    ])('QUAND on saisit un palindrome, ALORS il est renvoyé Bien dit !',
     (chaine: string) => {

        let resultat = VerificateurChaineBuilder.Default().verifier(chaine);

        expect(resultat).toContain(chaine + os.EOL + Expressions.BIEN_DIT)
     })

     test('QUAND on saisit une chaine, ALORS Bonjour est affiché en première ligne',
     () => {
        const chaine = 'test';

        let resultat = VerificateurChaineBuilder.Default().verifier(chaine);
        var premiereLigne = resultat.split(os.EOL)[0]
        expect(premiereLigne).toEqual('Bonjour')
     })

     test('QUAND on saisit un chaîne ' +
        'ALORS "Au revoir" est envoyé en dernier.', () => {
            const chaine = 'test';

            let resultat =VerificateurChaineBuilder.Default().verifier(chaine);
            var derniereLigne = resultat.split(os.EOL)[2];
            expect(derniereLigne).toEqual("Au revoir");
        })

    test.each([[new LangueFrançaise(), Expressions.BIEN_DIT], [new LangueAnglaise(), Expressions.WELL_SAID]])
    ('ETANT DONNE un utilisateur parlant une langue ' +
    'QUAND on entre un palindrome' +
    'ALORS il est renvoyé et le <bienDit> de cette langue est envoyé avant tout', 
    (langue: LangueInterface, attendu: string) => {
      
        let verificateur = new VerificateurChaineBuilder().AyantPourLangue(langue).Build();

        let resultat = verificateur.verifier(palindrome);

        expect(resultat).toContain(palindrome + os.EOL + attendu)
    })
    
    test.each([[new LangueFrançaise(), Expressions.BONJOUR], [new LangueAnglaise(), Expressions.HELLO]])
    ('ETANT DONNE un utilisateur parlant une langue ' +
    'QUAND on entre une chaine ' +
    'ALORS il est renvoyé et le <BONJOUR> de cette langue est envoyé avant tout', 
    (langue: LangueInterface, attendu: string) => {

        let resultat = new VerificateurChaineBuilder().AyantPourLangue(langue).Build().verifier("test");
        var premiereLigne = resultat.split(os.EOL)[0]
        expect(premiereLigne).toEqual(attendu)
    })

    test.each([[new LangueFrançaise(), Expressions.AU_REVOIR], [new LangueAnglaise(), Expressions.GOODBYE]])
    ('ETANT DONNE un utilisateur parlant une langue ' +
    'QUAND on entre une chaine ' +
    'ALORS il est renvoyé et le <au revoir> de cette langue est envoyé avant tout', 
    (langue: LangueInterface, attendu: string) => {

        let resultat = new VerificateurChaineBuilder().AyantPourLangue(langue).Build().verifier("test");
        var derniereLigne = resultat.split(os.EOL)[2]
        expect(derniereLigne).toEqual(attendu)
    })
})