export interface Launch {
  mission_name: string;
  details: string;
  launch_date_local: string;
  links: Links;
}

export interface Links {
  flickr_images: string[];
  wikipedia: string;
}

export interface News {
  title: string;
  event_date_utc: string;
  id: string;
}
