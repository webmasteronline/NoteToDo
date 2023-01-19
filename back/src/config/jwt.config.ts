import { ConfigService } from '@nestjs/config'
import { JwtModuleOptions } from '@nestjs/jwt'

export const getJWTConfig = async (
	configService: ConfigService
): Promise<JwtModuleOptions> => ({
	secret: configService.get('JWT_SECRET'),
})

//getMongoDbConfig отдает obj так как ({ все находится в круглых скобках})
//Promise<TypegooseModuleOptions>  - прописываем дженерик в промессе что бы у нас были подсказки uri и установили configService что бы  легко было обращатся к нашим env переменным
