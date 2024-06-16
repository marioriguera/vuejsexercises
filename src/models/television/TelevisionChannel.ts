import { IChannel } from "./IChannel";

export class TelevisionChannel implements IChannel {

    constructor(name: string, embedId: string) {
        this.Name = name;
        this.EmbedId = embedId;
    }

    public Name: string = '';
    public EmbedId: string = '';
}
