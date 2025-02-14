class SnakeCase extends BaseCasing {
  regexPattern: string = "[a-zd]+(?:_[a-zd]+)*";
  displayName: string = "snake_case";
  internalName: string = "snake-case";
  convertTo(src: string): string {
    throw new Error("not implemented");
  }
}
