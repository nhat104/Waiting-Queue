import { Controller, Get, UseGuards } from '@nestjs/common';
import { AppService } from './app.service';
import { RoleGuard } from './auth/role.guard';
import { HasRole } from './common/decorators';
import { MailService } from './mail/mail.service';

@Controller('/api')
export class AppController {
  constructor(
    private readonly appService: AppService,
    private readonly mailService: MailService,
  ) {}

  @Get()
  @UseGuards(RoleGuard)
  @HasRole()
  // @UseGuards(JwtAuthGuard)
  getHello(): string {
    return this.appService.getHello();
  }
}
