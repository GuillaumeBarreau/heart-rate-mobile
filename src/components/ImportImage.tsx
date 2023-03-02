interface Image {
  name: string;
  image: any;
}

export class ImportImage {
  private static images: Array<Image> = [
    {
      name: 'default',
      image: require('../assets/png/default.png'),
    },
    {
      name: 'alligator',
      image: require('../assets/png/alligator.png'),
    },
  ];

  static GetImage = (name: string) => {
    const found = ImportImage.images.find(e => e.name === name);
    return found ? found.image : ImportImage.images[0].image;
  };
}