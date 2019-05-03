export interface Roles {
    pacientes?: boolean;
    admin?: boolean;
  }

  export interface UserInterface {
    uid?: string;
    id?: string;
    name?: string;
    email?: string;
    password?: string;
    photoUrl?: string;
    roles: Roles;
}
