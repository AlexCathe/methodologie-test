import { verificateurChaine } from '../src/verificateurChaine';
import * as os from "os";
describe('test works', () => {
    test.each([
        ['test'],
        ['ynov']
    ])('QUAND on saisit un non-palindrome %s ' + 
    'ALORS elle est renvoyée en miroir',
    (chaine : string) => {
        const resultat = verificateurChaine.verifier(chaine);

        let attendu = chaine.split('').reverse().join('');
        expect(resultat).toContain(attendu);
    });

    test.each([
        ['engagelejeuquejelegagne'],
        ['girafarig']
    ])('QUAND on saisit un palindrome, ALORS il est renvoyé Bien dit !',
     (chaine: string) => {

        let resultat = verificateurChaine.verifier(chaine);

        expect(resultat).toContain(chaine + os.EOL + 'Bien dit !')
     })

     test('QUAND on saisit une chaine, ALORS Bonjour est affiché en première ligne',
     () => {
        const chaine = 'test';

        let resultat = verificateurChaine.verifier(chaine);
        var premiereLigne = resultat.split(os.EOL)[0]
        expect(premiereLigne).toEqual('Bonjour')
     })

     test('QUAND on saisit un chaîne ' +
        'ALORS "Au revoir" est envoyé en dernier.', () => {
            const chaine = 'test';

            let resultat = verificateurChaine.verifier(chaine);
            var derniereLigne = resultat.split(os.EOL)[2];
            expect(derniereLigne).toEqual("Au revoir");
        })

})