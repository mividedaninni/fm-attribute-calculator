export class UtilsService {
  public static openUrl(url: string): void {
    window.open(url, '_blank');
  }
}
