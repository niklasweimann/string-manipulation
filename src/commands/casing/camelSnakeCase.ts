class CamelSnakeCase extends BaseCasing {
  regexPattern: string = "[A-Z][a-zd]+(?:_[A-Z]+[a-zd]*)*";
  displayName: string = "Camel_Snake_Case";
  internalName: string = "camel-snake-case";
  convertTo(src: string): string {
    throw new Error("not implemented");
  }
}
