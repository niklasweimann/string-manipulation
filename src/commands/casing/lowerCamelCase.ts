class LowerCamelCase extends BaseCasing {
  regexPattern: string = "[a-z]+(?:[A-Zd]+[a-zd]+[A-Za-zd]*)*";
  displayName: string = "lowerCamelCase";
  internalName: string = "lower-camel-case";
  convertTo(src: string): string {
    throw new Error("not implemented");
  }
}
