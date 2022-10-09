// Custom Game data object
export interface GameData {
    id : string;
    name: string;
    shortDesc: string;
    description: string;
    imageUrl: string;
    images: Array<string>;
    links: DownloadLinks;
    version: VersionInformation;
}

export interface DownloadLinks {
    android: string;
    windows: string;
    playOnline: string;
    source: string;
}

export interface VersionInformation {
    releasedOn: string;
    lastUpdate: string;
    version: string;
    whatsNew: Array<string>;
}