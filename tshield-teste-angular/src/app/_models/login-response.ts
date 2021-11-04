export class LoggedUserProps {
  id!: number;
  fullName!: string;
  login!: string;
  photo_url!: string;
  email!: string;
  token!: string;
  loginReturn!: {
    idLogin: number;
    idCliente: number;
  };
  loginStatusCode!: number;
}

export class LoggedUser {
  user!: LoggedUserProps;
  authenticated!: boolean;
  created!: string;
  expiration!: string;
  message!: string;
}
