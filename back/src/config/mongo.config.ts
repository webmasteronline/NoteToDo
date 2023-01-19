import { ConfigService } from '@nestjs/config'
import { TypegooseModuleOptions } from 'nestjs-typegoose'

export const getMongoDbConfig = async (
	configService: ConfigService
): Promise<TypegooseModuleOptions> => ({
	uri: configService.get('MONGO_URI'),
})

//getMongoDbConfig отдает obj так как ({ все находится в круглых скобках})
//Promise<TypegooseModuleOptions>  - прописываем дженерик в промессе что бы у нас были подсказки uri и установили configService что бы  легко было обращатся к нашим env переменным
