import {Module} from "@nestjs/common";
import {UserMicroserviceController} from "./users.controller";
import {UsersService} from "./users.service";
import {TypeOrmModule} from "@nestjs/typeorm";
import {User} from "../typeorm/entities/User";
import {Payment} from "../typeorm/entities/Payment";

@Module({
    imports: [
        TypeOrmModule.forFeature([User, Payment])
    ],
    controllers: [UserMicroserviceController],
    providers: [UsersService]
})

export class UsersModule {}