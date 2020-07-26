import { Before, Given, Then, When } from 'cucumber';
import {expect} from 'chai';
import {AngularHomepage as AppPage} from '../pages/AngularHomepage.po';

console.log('------------------ MODULE BEGIN');
let page: AppPage;

Before(() => {
  console.log('------------------ BEFORE 1');
  page = new AppPage();
});

Given(/^I am on the home page$/, async () => {
  console.log('------------------ I am on the home page');
  await page.navigateTo();
});

When(/^I do nothing$/, async () => {});

Then(/^I should see the title$/, async () => {
  console.log('------------------ I should see the title: ');
  let papeTitle = await page.getTitleText();
    expect(papeTitle).to.equal('AngularJS — Superheroic JavaScript MVW Framework');
});