import { Status } from "../utils/stateStatus";
import { UserModel } from "./UserModel";

export default interface InitialAuthState {
    data: UserModel;
    loginStatus: Status.Initial | Status.Loading | Status.Success | Status.Failed;
    loginError: String | null;
    registerStatus: Status.Initial | Status.Loading | Status.Success | Status.Failed;
    registerError: String | null;
}