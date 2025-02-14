import { Md5 } from "./md5";
class ToMd5 extends BaseCommand {
  commandName: string = "toMd5";

  transformAction(src: string): string {
    return Md5.hashStr(src, false);
  }
}
