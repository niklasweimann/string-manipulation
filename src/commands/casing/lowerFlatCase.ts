class LowerFlatCase extends BaseCasing {
  regexPattern: string = '[a-zd]+';
  displayName: string = 'lowercase';
  internalName: string = 'lower-flat-case'; 
  convertTo(src: string): string {
    return src.toLowerCase();
  }
}