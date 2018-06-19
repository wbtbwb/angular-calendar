import { Injectable } from "@angular/core";

@Injectable()
export class EventCreatorService {

    colors: string[] = [
            "red",
            "yellow",
            "aqua",
            "blue",
            "black",
            "light-blue",
            "green",
            "gray",
            "navy",
            "teal",
            "olive",
            "lime",
            "orange",
            "fuchsia",
            "purple",
            "maroon"
    ];

    getColors() :string[] {
        return this.colors;
    }
    
}
