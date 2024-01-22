export class MomentDeLaJournee {
    private readonly _representation : string;

    public static INCONNU = new MomentDeLaJournee('Inconnu')
    public static MATIN = new MomentDeLaJournee('Matin');
    public static APRES_MIDI = new MomentDeLaJournee('Après-midi');
    public static SOIREE = new MomentDeLaJournee('Soirée');
    public static NUIT = new MomentDeLaJournee('Nuit');
    

    private constructor(representation : string) {
        this._representation = representation
    }

    public toString() {
        return this._representation
    }
}