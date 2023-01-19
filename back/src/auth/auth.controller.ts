import { AuthService } from './auth.service'
import { Body, Controller, Post } from '@nestjs/common'

@Controller('auth')
export class AuthController {
	constructor(private readonly AuthService: AuthService) {}

	@Post('register') //путь -/auth/register
	async register(@Body() dto: any) {
		return this.AuthService.register(dto)
	}
}

//Body() - то что идет в теле запроса
