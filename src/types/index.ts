interface IImage {
	width: number;
	height: number;
	url: string;
}

interface IArtist {
	name: string;
	images: Array<IImage>
}

interface IArtists {
	artists: Array<IArtist>
}

export type { IImage, IArtist, IArtists };