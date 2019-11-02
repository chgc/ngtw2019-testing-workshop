import { DataService } from './data.service';
import { LogicService } from './logic.service';

describe('DataService Testing', () => {
  let dataService;
  let logicService;
  beforeEach(() => {
    logicService = new LogicService();
    dataService = new DataService(logicService);
  });

  it('first test case', () => {
    expect(dataService).toBeDefined();
  });

  fit('sum two number', () => {
    spyOn(logicService, 'dosomething').and.returnValue(20);

    // dataService.add(1, 2);
    // expect(logicService.dosomething).toHaveBeenCalled();

    expect(dataService.add(1, 2)).toBe(12);
  });

  it('除法', () => {
    expect(dataService.divide(1, 2)).toBe(0.5);
  });

  it('test ramdon', () => {
    spyOn(Math, 'random').and.returnValue(0.5);
    const result = Math.random();
    expect(result).toBe(0.5);
  });
});
