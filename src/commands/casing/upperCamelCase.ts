class UpperCamelCase extends BaseCasing {
  regexPattern: string = "(?:[A-Z][a-zd]+)(?:[A-Z]+[a-zd]*)*";
  displayName: string = "UpperCamelCase";
  internalName: string = "upper-camel-case";
  convertTo(src: string): string {
    throw new Error("not implemented");
  }
}
