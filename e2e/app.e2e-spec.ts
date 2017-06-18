import { FirstPwaAppPage } from './app.po';

describe('first-pwa-app App', () => {
  let page: FirstPwaAppPage;

  beforeEach(() => {
    page = new FirstPwaAppPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
