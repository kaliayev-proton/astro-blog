export class Formatter {
  static formatDate(dateString: Date): string {
    const date = new Date(dateString);
    return Intl.DateTimeFormat("es-ES", {
      year: "numeric",
      month: "2-digit",
      day: "2-digit",
    }).format(date);
  }
}
