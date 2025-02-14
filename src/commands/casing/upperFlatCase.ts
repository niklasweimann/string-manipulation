class UpperFlatCase extends BaseCasing {
  regexPattern: string = '[A-Zd]+';
  displayName: string = 'UPPERCASE';
  internalName: string = 'upper-flat-case'; 
  convertTo(src: string): string {
    return src.toLowerCase();
  }
}