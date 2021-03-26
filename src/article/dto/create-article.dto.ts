export class CreateArticleDto {
  readonly text: string;
  readonly title: string;
  readonly theme: string;
  readonly year: number;
  readonly tags: string[] | string;
}
