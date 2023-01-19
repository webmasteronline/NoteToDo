import { Controller, Get } from '@nestjs/common'
import { AppService } from './app.service'

@Controller() //здесь мы можем написать како-то адрес например: /auth
export class AppController {
	constructor(private readonly appService: AppService) {}

	@Get()
	getHello() {
		return this.appService.getHello()
	}
}
