class KebabCase extends BaseCasing {
  regexPattern: string = "[a-zd]+(?:-[a-zd]+)*";
  displayName: string = "kebab-case";
  internalName: string = "kebab-case";
  convertTo(src: string): string {
    throw new Error("not implemented");
  }
}
