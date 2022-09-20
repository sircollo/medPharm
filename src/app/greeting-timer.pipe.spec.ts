import { GreetingTimerPipe } from './greeting-timer.pipe';

describe('GreetingTimerPipe', () => {
  it('create an instance', () => {
    const pipe = new GreetingTimerPipe();
    expect(pipe).toBeTruthy();
  });
});
