import { AngularCourseCarsalesPage } from './app.po';

describe('angular-course-carsales App', () => {
  let page: AngularCourseCarsalesPage;

  beforeEach(() => {
    page = new AngularCourseCarsalesPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
