export class Post {

  constructor (title: string, content: string, loveIts: number, created_at: Date) {
    this.created_at = new Date();
    this.content = content;
    this.loveIts = loveIts;
    this.title = title;


  }

  title: string;
  content: string;
  loveIts: number;
  created_at: Date;
}
function setTitle(title: string) {
  this.title = title;
}
function getTitle() {
  return this.title;
}
function updateLove(param: number) {
  this.loveIts = param;
}
