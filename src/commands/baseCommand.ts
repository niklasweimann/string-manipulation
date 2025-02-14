abstract class BaseCommand{
  abstract readonly commandName:string;
  abstract transformAction(src: string): string;
}