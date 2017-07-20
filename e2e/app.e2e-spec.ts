import { NgtesttwoPage } from './app.po';

describe('ngtesttwo App', () => {
  let page: NgtesttwoPage;

  beforeEach(() => {
    page = new NgtesttwoPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
