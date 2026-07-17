import {Injectable} from '@nestjs/common';
import {ConfigService} from '@nestjs/config';
import {CreatePlaylistDto} from "./dto/create-playlist.dto";

@Injectable()
export class SpotifyService {
    constructor(private readonly configService: ConfigService) {
    }

    private async fetchApi(endpoint: string, method: string, body?: any) {
        const res = await fetch(`https://api.spotify.com/${endpoint}`, {
            headers: {
                Authorization: `Bearer ${this.configService.get<string>('SPOTIFY_TOKEN')}`,
            },
            method,
            body: JSON.stringify(body),
        });
        return await res.json();
    }

    async getTopTen() {
        const topFive = await this.fetchApi('v1/me/top/tracks?time_range=short_term&limit=10', 'GET');

        return topFive.items.map(item => ({
            name: item.name,
            artists: item.artists.map(artist => artist.name),
        }));
    }

    async createPlaylist(dto: CreatePlaylistDto) {
        const newPlaylist = await this.fetchApi('v1/me/playlists', 'POST', dto);
        return !!newPlaylist;
    }
}
