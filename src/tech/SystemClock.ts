import { MomentDeLaJournee } from "../domain/MomentDeLaJournee"

export class SystemClock {
    private date = new Date()
    private moment : MomentDeLaJournee

    constructor(){
        if(this.date.getHours() < 8){
            this.moment = MomentDeLaJournee.NUIT
        }
        else if(this.date.getHours() < 12 ){
            this.moment = MomentDeLaJournee.MATIN
        }
        else if(this.date.getHours() < 18 ){
            this.moment = MomentDeLaJournee.APRES_MIDI
        }
        else if(this.date.getHours() < 23 ){
            this.moment = MomentDeLaJournee.SOIREE
        }
        else {
            this.moment = MomentDeLaJournee.INCONNU
        }
    }

    public getMomentDeLaJournee() {
        return this.moment
    }
}