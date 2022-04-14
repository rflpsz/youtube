interface IBaseItem {
  id?: string;
  kind: string;
  etag: string;
}

export interface IYoutubeResponse extends IBaseItem {
  items: IItem[];
  nextPageToken: string;
  pageInfo: IPageInfo;
}

export class YoutubeResponse {
  items!: IItem[];
  nextPageToken!: string;
  pageInfo!: IPageInfo;
  kind!: string;
  etag!: string;
}

interface IPageInfo {
  resultsPerPage: number;
  totalResults: number;
}

export interface IItem extends IBaseItem {
  contentDetails?: IContentDetail;
  snippet?: ISnippet;
  statistics?: IStatistic;
}

interface IContentDetail {
  caption: string;
  contentRating: {};
  definition: string;
  dimension: string;
  duration: string;
  licensedContent: boolean;
  projection: string;
  regionRestriction: {
    blocked: string[];
  }
}

interface IStatistic {
  commentCount: string;
  favoriteCount: string;
  likeCount: string;
  viewCount: string;
}

interface ISnippet {
  categoryId: string;
  channelId: string;
  channelTitle: string;
  defaultAudioLanguage: string;
  description: string;
  liveBroadcastContent: string;
  localized: ILocalized;
  publishedAt: Date;
  tags: string[];
  thumbnails: {
    default?: IThumbnail,
    high?: IThumbnail,
    medium?: IThumbnail,
    maxres?: IThumbnail,
    standard?: IThumbnail
  };
}

interface IThumbnail {
  height: number;
  url: string;
  width: number;
}

interface ILocalized {
  title: string;
  description: string;
}
