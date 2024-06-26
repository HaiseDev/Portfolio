import type { GatewayActivity } from 'discord-api-types/v10';

export const useUser = () => {
	return useState<LanyardUser>('user', () => ({
		spotify: {
			track_id: '3f3FDZajRpcLQGln7OZqdi?si=7f32bf6f56294906',
			song: 'asphyxia',
			artist: 'Cö Shu Nie',
			album_art_url: 'https://open.spotify.com/embed/album/2oTP6o5ggDbudTzSvxiD6x?utm_source=generator',
			album: 'PURE'
		},
		listening_to_spotify: true,
		kv: {},
		discord_user: {
			username: 'haise.dev',
			public_flags: 0,
			id: '905274054045466644',
			discriminator: '0',
			bot: false,
			avatar: ''
		},
		discord_status: 'online',
		activities: [],
		active_on_discord_web: false,
		active_on_discord_mobile: false,
		active_on_discord_desktop: false
	}));
};

export interface LanyardUser {
	spotify: spotifyStatus;
	listening_to_spotify: boolean;
	kv: {};
	discord_user: DiscordUser;
	discord_status: Status;
	activities: GatewayActivity[];
	active_on_discord_web: boolean;
	active_on_discord_mobile: boolean;
	active_on_discord_desktop: boolean;
}

export interface spotifyStatus {
	track_id: string;
	song: string;
	artist: string;
	album_art_url: string;
	album: string;
}

export interface DiscordUser {
	username: string;
	public_flags: number;
	id: string;
	discriminator: string;
	bot: boolean;
	avatar: string;
}

export type Status = 'online' | 'idle' | 'dnd' | 'offline';

export enum LanyardOpcode {
	Event,
	Hello,
	Initialize,
	Heartbeat
}

export type LanyardIncomingPayload = LanyardEventInitStatePayload | LanyardEventPresenceUpdatePayload | LanyardHelloPayload;

interface LanyardEventInitStatePayload {
	op: LanyardOpcode.Event;
	seq: number;
	t: 'INIT_STATE';
	d: LanyardUser;
}

interface LanyardEventPresenceUpdatePayload {
	op: LanyardOpcode.Event;
	seq: number;
	t: 'INIT_STATE';
	d: LanyardUser;
}

interface LanyardHelloPayload {
	op: LanyardOpcode.Hello;
	d: { heartbeat_interval: number };
}
