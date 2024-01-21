import { MomentDeLaJournee } from './src/domain/MomentDeLaJournee';
import { SystemClock } from './src/tech/SystemClock';
import { SystemLanguage } from './src/tech/SystemLanguage';
import * as readline from 'readline';
import { VerificateurChaine } from './src/domain/verificateurChaine';

let clock = new SystemClock()
let moment = clock.getMomentDeLaJournee();

let systemLanguage = new SystemLanguage();
let language = systemLanguage.getLangageObj()
console.log(new Date('August 19, 1975 00:15:30').getHours())
let verificateur = new VerificateurChaine(language, moment);

const scanner = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

scanner.question('>', (answer) => {
    let resultat = verificateur.verifier(answer)
    console.log(resultat)
  scanner.close();
});

