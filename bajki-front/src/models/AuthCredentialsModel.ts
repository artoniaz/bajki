export default interface AuthCredentialsModel {
    name?: string,
    email: string;
    password: string;
    passwordConfirm?: string;
}