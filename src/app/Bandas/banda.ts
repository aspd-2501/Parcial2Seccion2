export class Banda {
  id: number;
  name: String;
  numberOfMemebers: number;
  description: String;
  popularSongs: Array<String>;
  image: String;


  public constructor(id: number, name: String, numberOfMemebers: number, description: String, popularSongs: Array<String>, image: String)
  {
    this.id = id;
    this.name = name;
    this.numberOfMemebers = numberOfMemebers;
    this.description = description;
    this.popularSongs = popularSongs;
    this.image = image;
  }
}
