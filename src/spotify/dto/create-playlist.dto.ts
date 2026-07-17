import {IsBoolean, IsNotEmpty, IsOptional, IsString, MaxLength} from 'class-validator';
import {ApiProperty} from "@nestjs/swagger";

export class CreatePlaylistDto {

    @ApiProperty({description: 'Playlist name', example: 'EchoFlow Playlist'})
    @IsNotEmpty()
    @IsString()
    @MaxLength(100)
    name: string;

    @ApiProperty({description: 'Playlist description', example: 'This is EchoFlow-generated playlist'})
    @IsNotEmpty()
    @IsString()
    @MaxLength(300)
    @IsOptional()
    description: string;

    @ApiProperty({description: 'Visibility status of playlist', example: false})
    @IsNotEmpty()
    @IsBoolean()
    @IsOptional()
    public: boolean = false;
}
