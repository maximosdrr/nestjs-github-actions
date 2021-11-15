import { AppService } from '../app.service';

describe('[App Service]', () => {
  let appService: AppService;

  beforeAll(async () => {
    appService = new AppService();
  });

  it('Should calculate square', () => {
    const result = appService.calculateSquare(5);
    expect(result).toBe(25);
  });

  it('Should calculate the hipo size', () => {
    const result = appService.calculateHip(3, 4);
    expect(result).toBe(5);
  });
});
