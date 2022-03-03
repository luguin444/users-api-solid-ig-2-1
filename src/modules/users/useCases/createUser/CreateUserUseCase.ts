import { AppError } from "../../../../shared/AppError";
import { User } from "../../model/User";
import { IUsersRepository } from "../../repositories/IUsersRepository";

interface IRequest {
  name: string;
  email: string;
}

class CreateUserUseCase {
  constructor(private usersRepository: IUsersRepository) {}

  execute({ email, name }: IRequest): User {
    const user = this.usersRepository.findByEmail(email);

    if (user) {
      throw new Error("O email do usuário já está cadastrado.");
    }

    return this.usersRepository.create({ email, name });
  }
}

export { CreateUserUseCase };
