import { CableNetworkClientPage } from './app.po';

describe('cable-network-client App', () => {
  let page: CableNetworkClientPage;

  beforeEach(() => {
    page = new CableNetworkClientPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
