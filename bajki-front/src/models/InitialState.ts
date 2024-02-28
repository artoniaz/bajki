import { Status } from "../utils/stateStatus";

export default interface InitialState<T> {
  data: T;
  status: Status.Initial | Status.Loading | Status.Success | Status.Failed;
  error: string | null;
}
