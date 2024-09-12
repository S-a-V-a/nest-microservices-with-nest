import {Injectable} from "@nestjs/common";
import {CreatePaymentDto} from "./dtos/CreatePayment.dto";
import {InjectRepository} from "@nestjs/typeorm";
import {Payment} from "../typeorm/entities/Payment";
import {Repository} from "typeorm";

@Injectable()
export class PaymentsService {
    constructor(@InjectRepository(Payment) private paymentsRepository: Repository<Payment>) {}

    createPayment({ userId, ...createPaymentDto }: CreatePaymentDto) {
        const newPayment = this.paymentsRepository.create(createPaymentDto)
        return this.paymentsRepository.save(newPayment)
    }
}