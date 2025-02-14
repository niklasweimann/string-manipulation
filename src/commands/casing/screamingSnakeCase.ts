class ScreamingSnakeCase extends BaseCasing {
  regexPattern: string = "[A-Zd]+(?:_[A-Zd]+)*";
  displayName: string = "SCREAMING_SNAKE_CASE";
  internalName: string = "screaming-snake-case";
  convertTo(src: string): string {
    throw new Error("not implemented");
  }
}
