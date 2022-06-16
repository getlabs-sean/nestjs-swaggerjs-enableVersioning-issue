import { Body, Controller, Get, Post } from '@nestjs/common';
import { AppService } from './app.service';
import { HelloDto } from './hello.dto';
import { ApiBody, ApiOperation } from '@nestjs/swagger';


@Controller('example')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Post()
  @ApiOperation({ description: 'Some api operation to post hello' })
  async postHello(@Body() input: HelloDto): Promise<string> {
    return this.appService.getHello();
  }
}
