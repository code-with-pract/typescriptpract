abstract class TakePhoto {
  constructor(
    public cameraMode: string,
    public filter: string // private
  ) {}

  abstract getSepia(): void;
  getReelTime(): number {
    // some complex calculation
    return 8;
  }
}

// const hc = new TakePhoto("test", "test");

class Instagram extends TakePhoto {
  constructor(
    public cameraMode: string,
    public filter: string,
    public burst: number
  ) {
    super(cameraMode, filter);
  }

  getSepia(): void {
    console.log("Sepia");
  }
}

const hc = new Instagram("test", "test", 3);

// hc.getReelTime()
