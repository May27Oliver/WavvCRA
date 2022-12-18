export interface composerType {
  composerName: string;
  composerPic: string;
}

export interface songDetailType extends composerType {
  songTitle: string;
  songPic: string;
  clickNum: number;
  duration: string;
  hot: boolean;
  recommend: boolean;
  mayLike: boolean;
  more: boolean;
}
