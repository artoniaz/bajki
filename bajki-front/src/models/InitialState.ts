export enum Status {
  Initial,
  Loading,
  Success,
  Failed,
}

export default interface InitialState<T> {
  data: T;
  status: Status.Initial | Status.Loading | Status.Success | Status.Failed;
  error: String | null;
}
