interface IImage {
	width: number;
	height: number;
	url: string;
}

interface IArtist {
	id: string;
	name: string;
	images: Array<IImage>
}

interface ITrack {
	track: {
		id: string;
		name: string;
		album: {
			images: Array<IImage>;
		};
		artists: Array<IArtist>;
	}
}

interface IAlbum {
	id: string;
	name: string;
	images: Array<IImage>;
}

export type { IImage, IArtist, ITrack, IAlbum };