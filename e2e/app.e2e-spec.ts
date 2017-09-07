import { LearnNgPage } from './app.po';

describe('learn-ng App', () => {
  let page: LearnNgPage;

  beforeEach(() => {
    page = new LearnNgPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
