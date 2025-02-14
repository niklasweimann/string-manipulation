abstract class BaseCasing{
  abstract readonly regexPattern: string;
  abstract readonly displayName: string;
  abstract readonly internalName: string;
  regex: RegExp| undefined;

  isMatch(src: string){
    if(this.regex === undefined){
      this.regex = new RegExp(this.regexPattern);
    }
    return  this.regex.test(src);
  }
  abstract convertTo(src: string): string;
}