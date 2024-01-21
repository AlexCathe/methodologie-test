export class ConsoleInput {
    private static instance: ConsoleInput;
  
    private constructor() {
      // Constructeur privé
    }
  
    public static getInstance(): ConsoleInput {
      // Utilise un singleton pour garantir une seule instance de la classe
      if (!this.instance) {
        this.instance = new ConsoleInput();
      }
      return this.instance;
    }
  
    public processInput(input: string): string {
      // Simulation de traitement de l'entrée
      return `Commande reçue : ${input}`;
    }
  
    public displayOutput(output: string): void {
      // Simulation d'affichage de la sortie
      console.log(output);
    }
  }