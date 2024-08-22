class DrawableObject {
  world;
  x = 20;
  y = 225;
  height = 200;
  width = 120;
  img;
  imageCache = {};
  currentImage = 0;

  offset = {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
  };

  /**
   * Loads an image from the specified path.
   * @param {string} path - The path to the image.
   */
  loadImage(path) {
    this.img = new Image();
    this.img.src = path;
  }

  /**
   * Loads multiple images and caches them.
   * @param {string[]} arr - Array of image paths.
   */
  loadImages(arr) {
    arr.forEach((path) => {
      let img = new Image();
      img.src = path;
      this.imageCache[path] = img;
    });
  }

  /**
   * Draws the object on the canvas context.
   * @param {CanvasRenderingContext2D} ctx - The canvas rendering context.
   */
  draw(ctx) {
    ctx.drawImage(this.img, this.x, this.y, this.width, this.height);
  }

  /**
   * Draws a frame around the object for debugging purposes.
   * @param {CanvasRenderingContext2D} ctx - The canvas rendering context.
   */
}
