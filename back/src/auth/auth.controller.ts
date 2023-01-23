import { AuthDto } from './dto/auth.dto'
import { AuthService } from './auth.service'
import {
	Body,
	Controller,
	HttpCode,
	Post,
	UsePipes,
	ValidationPipe,
} from '@nestjs/common'

@Controller('auth')
export class AuthController {
	constructor(private readonly AuthService: AuthService) {}

	@UsePipes(new ValidationPipe())
	@HttpCode(200)
	@Post('register') //путь -/auth/register
	async register(@Body() dto: AuthDto) {
		return this.AuthService.register(dto)
	}
}

//Body() - то что идет в теле запроса
