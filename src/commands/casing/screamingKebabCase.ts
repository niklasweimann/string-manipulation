class ScreamingKebabCase extends BaseCasing {
  regexPattern: string = "[A-Zd]+(?:-[A-Zd]+)*";
  displayName: string = "SCREAMING-KEBAB-CASE";
  internalName: string = "screaming-kebab-case";
  convertTo(src: string): string {
    throw new Error("not implemented");
  }
}
