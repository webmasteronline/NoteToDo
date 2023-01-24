import { Injectable, UnauthorizedException } from '@nestjs/common'
import { ModelType } from '@typegoose/typegoose/lib/types'
import { InjectModel } from 'nestjs-typegoose'
import { BadRequestException } from '@nestjs/common'
import { hash, compare, genSalt } from 'bcryptjs'

import { AuthDto } from './dto/auth.dto'
import { UserModel } from './../user/user.model'

@Injectable()
export class AuthService {
	constructor(
		@InjectModel(UserModel) private readonly UserModel: ModelType<UserModel>
	) {}

	async login(dto: AuthDto) {
		return this.validateUser(dto)
	}

	async register(dto: AuthDto) {
		const oldUser = await this.UserModel.findOne({ email: dto.email })
		if (oldUser)
			throw new BadRequestException(
				'User with this email is already in the system'
			)

		const salt = await genSalt(10)

		const newUser = new this.UserModel({
			email: dto.email,
			password: await hash(dto.password, salt),
		})
		return newUser.save()
	}
	async validateUser(dto: AuthDto): Promise<UserModel> {
		const user = await this.UserModel.findOne({ email: dto.email })
		if (!user) throw new UnauthorizedException('User not found') // если мы вернули throw тоесть user не найден - все что ниже throw выполняться не будет

		const isValidPassword = await compare(dto.password, user.password) // сравниваем пароли внещний (dto.password ) и тот что нам пришел из БЗ данных(user.password)
		if (!isValidPassword) throw new UnauthorizedException('Invalid password !')

		return user
	}
}
