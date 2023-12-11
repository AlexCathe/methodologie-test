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

    test('QUAND on saisit un palindrome, ALORS il est renvoyé Bien dit !',
     () => {
        const palindrome = 'radar';

        let resultat = verificateurChaine.verifier(palindrome);

        expect(resultat).toContain(palindrome + os.EOL + 'Bien dit !')
     })

     test('QUAND on saisit une chaine, ALORS Bonjour est affiché en première ligne',
     () => {
        const chaine = 'test';

        let resultat = verificateurChaine.verifier(chaine);
        var premiereLigne = resultat.split(os.EOL)[0]
        expect(premiereLigne).toEqual('Bonjour')
     })

})