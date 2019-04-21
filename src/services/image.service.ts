import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root"
})
export class ImageService {
  visibleImages = [];

  getImages() {
    return (this.visibleImages = IMAGES.slice(0));
  }

  getImage(id: number) {
    return IMAGES.slice(0).find(image => image.id == id);
  }

  getImageByNationality(nationality: string) {
    return IMAGES.slice(0).find(image => image.caption == nationality);
  }

}

const IMAGES = [
  {
    id: 1,
    category: "women",
    caption: "Beauty",
    url: "../assets/imgs/women/Ukrainian/Carpathian-type-Ukrainian.jpg"
  },
  {
    id: 2,
    category: "women",
    caption: "Beauty",
    url:
      "../assets/imgs/women/Ukrainian/Central-anthropological-area-ukrainian.jpg"
  },
  {
    id: 3,
    category: "women",
    caption: "Beauty",
    url: "../assets/imgs/women/Ukrainian/Higher-Dnipro-type-Ukrainian-women.jpg"
  },
  {
    id: 4,
    category: "women",
    caption: "Beauty",
    url: "../assets/imgs/women/Ukrainian/Lower-Dnipro-type-ukrainian-woman.jpg"
  },
  {
    id: 5,
    category: "women",
    caption: "Beauty",
    url:
      "../assets/imgs/women/Ukrainian/Polessky-and-Volyn-type-Ukrainian-woman.jpg"
  },
  {
    id: 6,
    category: "women",
    caption: "Beauty",
    url: "../assets/imgs/women/Ukrainian/Danube-type-ukrainian.jpg"
  }
];


