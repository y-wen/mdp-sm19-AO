// The Nature of Code
// Daniel Shiffman
// http://natureofcode.com

// Path Following

class Path {

  constructor() {
    // Arbitrary radius of 20
    // A path has a radius, i.e how far is it ok for the boid to wander off
    this.radius = 140;
    // A Path is an arraylist of points (PVector objects)
    this.points = [];
  }

  // Add a point to the path
  addPoint(x, y) {
    let point = createVector(x, y);
    this.points.push(point);
  }

  // Draw the path
  display() {
    strokeJoin(ROUND);

    // Draw thick line for radius
    stroke(175,0);
    strokeWeight(this.radius * 2);
    noFill();
    beginShape();
    for (let v of this.points) {
      vertex(v.x, v.y);
    }
    endShape(CLOSE);
    // Draw thin line for center of path
    stroke(0,0);
    strokeWeight(1);
    noFill();
    beginShape();
    for (let v of this.points) {
      vertex(v.x, v.y);
    }
    endShape(CLOSE);
  }
}
