export class Code {
  public code: number;
  public unlocked = false;
  public disabled = false;
  public url: string;
  public message = 'Zugriff auf das Modul gewährt.';
  public label = 'Insert Text here!';
  public imageUrl = '../../assets/img/placeholder.png';


  constructor(code: number, url: string, message?: string) {
    this.code = code;
    this.url = url;
    this.message = message;
  }

}
