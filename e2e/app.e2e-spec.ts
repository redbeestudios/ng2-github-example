import { Ng2GithubExamplePage } from './app.po';

describe('ng2-github-example App', function() {
  let page: Ng2GithubExamplePage;

  beforeEach(() => {
    page = new Ng2GithubExamplePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
