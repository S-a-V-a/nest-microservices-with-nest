import {InjectRepository} from "@nestjs/typeorm";
import {User} from "../typeorm/entities/User";
import {Repository} from "typeorm";
import {Injectable} from "@nestjs/common";
import {CreateUserDto} from "./dtos/CreateUser.dto";

@Injectable()
export class UsersService {
    constructor(
        @InjectRepository(User) private userRepository: Repository<User>
    ) {}

    createUser(createUserDto: CreateUserDto) {
        const newUser = this.userRepository.create(createUserDto);
        return this.userRepository.save(newUser);
    }

    async getUserById(userId: string) {
        return await this.userRepository.findOneBy({ id: userId })
    }
}