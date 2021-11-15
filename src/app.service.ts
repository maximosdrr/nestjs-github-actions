import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  calculateSquare(n: number) {
    return n ** 2;
  }

  calculateHip(ca: number, cb: number) {
    return Math.sqrt(this.calculateSquare(ca) + this.calculateSquare(cb));
  }
}
