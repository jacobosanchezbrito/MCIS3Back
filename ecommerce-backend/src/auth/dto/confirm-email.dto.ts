import { IsEmail, IsString, Length } from 'class-validator';

export class ConfirmEmailDto {
  @IsEmail()
  email: string;

  @IsString()
  @Length(6, 7) // código de 6–7 dígitos
  code: string;
}