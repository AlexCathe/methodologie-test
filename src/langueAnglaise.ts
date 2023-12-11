import { Expressions } from "./expression";
import { LangueInterface } from "./langueInterface";

export class LangueAnglaise implements LangueInterface {
    public feliciter(): string {
        return Expressions.WELL_SAID;
    }

    public saluer(): string {
        return Expressions.HELLO;
    }

    public quitter(): string {
        return Expressions.GOODBYE;
    }
}