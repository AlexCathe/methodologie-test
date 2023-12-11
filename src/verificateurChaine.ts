import * as os from 'os';
export class verificateurChaine {

    public static verifier(chaine:string) : string {

         let miroir = chaine.split('').reverse().join('')

         if(chaine == miroir) {
            miroir = chaine + os.EOL + 'Bien dit !'
         }
        return 'Bonjour' + os.EOL + miroir;

    }
}