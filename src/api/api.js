import fetch from 'node-fetch';


// fetch api with node-fetch
const response = await fetch('http://t-online.de/a/api/v1/pages/sections/homepage.json');
const data = await response.json();

//fetch teaser_text
export const teaserText = data.sectionPage.stages[0].streamItems[0].articleTeaser.article.fields.teaser_text;
export const teaserText1 = data.sectionPage.stages[1].streamItems[0].articleTeaser.article.fields.teaser_text;
export const teaserText2 = data.sectionPage.stages[1].streamItems[1].articleTeaser.article.fields.teaser_text;
export const teaserText3 = data.sectionPage.stages[1].streamItems[2].articleTeaser.article.fields.teaser_text;

//fetch headline
export const headline = data.sectionPage.stages[0].streamItems[0].articleTeaser.article.fields.headline;
export const headline1 = data.sectionPage.stages[1].streamItems[0].articleTeaser.article.fields.headline;
export const headline2 = data.sectionPage.stages[1].streamItems[1].articleTeaser.article.fields.headline;
export const headline3 = data.sectionPage.stages[1].streamItems[2].articleTeaser.article.fields.headline;


//fetch Image url
const elements = data.sectionPage.stages[0].streamItems[0].articleTeaser.article.elements
const titleImages = elements.filter(element => element.type === 'IMAGE')
const typeImage = titleImages[0].assets.filter(asset => asset.type === 'IMAGE')
const cropImage = typeImage.filter(asset => asset.fields.crop === '16:9')
export const teaserImageFound = cropImage[0].fields.url

//fetch image url
const elements1 = data.sectionPage.stages[1].streamItems[0].articleTeaser.article.elements
const titleImages1 = elements1.filter(element => element.type === 'IMAGE')
const typeImage1 = titleImages1[0].assets.filter(asset => asset.type === 'IMAGE')
const cropImage1 = typeImage1.filter(asset => asset.fields.crop === '16:9')
export const teaserImageFound1 = cropImage1[0].fields.url

//fetch image url
const elements2 = data.sectionPage.stages[1].streamItems[1].articleTeaser.article.elements
const titleImages2 = elements2.filter(element => element.type === 'IMAGE')
const typeImage2 = titleImages2[0].assets.filter(asset => asset.type === 'IMAGE')
const cropImage2 = typeImage2.filter(asset => asset.fields.crop === '16:9')
export const teaserImageFound2 = cropImage2[0].fields.url


//fetch image url
const elements3 = data.sectionPage.stages[1].streamItems[2].articleTeaser.article.elements
const titleImages3 = elements3.filter(element => element.type === 'IMAGE')
const typeImage3 = titleImages3[0].assets.filter(asset => asset.type === 'IMAGE')
const cropImage3 = typeImage3.filter(asset => asset.fields.crop === '16:9')
export const teaserImageFound3 = cropImage3[0].fields.url