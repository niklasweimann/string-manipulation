class TrainCase extends BaseCasing {
  regexPattern: string = "[A-Z][a-zd]+(?:-[A-Z]+[a-zd]*)*";
  displayName: string = "Train-Case";
  internalName: string = "train-case";
  convertTo(src: string): string {
    throw new Error("not implemented");
  }
}
