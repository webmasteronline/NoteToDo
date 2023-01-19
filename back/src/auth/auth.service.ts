import { UserModel } from './../user/user.model';
import { Injectable } from '@nestjs/common'
import { ModelType } from '@typegoose/typegoose/lib/types'
import { InjectModel } from 'nestjs-typegoose'

@Injectable()
export class AppService {
	constructor(
		@InjectModel(UserModel) private readonly UserModel: ModelType<UserModel>
	){

	}
	async register(dto: any) {
		return this.
	}
}
