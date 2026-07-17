import {Body, Controller, Get, Post} from '@nestjs/common';
import { SpotifyService } from './spotify.service';
import {CreatePlaylistDto} from "./dto/create-playlist.dto";

@Controller('spotify')
export class SpotifyController {
  constructor(private readonly spotifyService: SpotifyService) {}

  @Get('top10')
  getTopTen() {
    return this.spotifyService.getTopTen();
  }

  @Post('playlist')
  createPlaylist(@Body() dto: CreatePlaylistDto) {
    return this.spotifyService.createPlaylist(dto);
  }
}
