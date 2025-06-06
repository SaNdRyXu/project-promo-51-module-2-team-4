'use strict';

const selectCompany = document.querySelector('.js-company');
const previewCompanyLogo = document.querySelector('.js-cover-company');

//Functions 
function companySelected(){
  if (selectCompany.value === "ubisoft") {
    previewCompanyLogo.src = "/project-promo-51-module-2-team-4/images/ubisoft.svg";
    previewCompanyLogo.alt = "Ubisoft Entertainment S. A.";
  } else if (selectCompany.value === "nintendo") {
    previewCompanyLogo.src = "/project-promo-51-module-2-team-4/images/nintendo.svg";
    previewCompanyLogo.alt = "Nintendo Company, Ltd.";
  } else if (selectCompany.value === "bethesda") {
    previewCompanyLogo.src = "/project-promo-51-module-2-team-4/images/bethesda.svg";
    previewCompanyLogo.alt = "Bethesda Softworks LLC";
  } else if (selectCompany.value === "activision") {
    previewCompanyLogo.src = "/project-promo-51-module-2-team-4/images/activision.svg";
    previewCompanyLogo.alt = "Activision Publishing, Inc.";
  } else if (selectCompany.value === "sega") {
    previewCompanyLogo.src = "/project-promo-51-module-2-team-4/images/sega.svg";
    previewCompanyLogo.alt = "Sega Corporation";
  } else {
    previewCompanyLogo.src = "/project-promo-51-module-2-team-4/images/ea.svg";
    previewCompanyLogo.alt = "Electronic Arts Inc.";
  }
}
//Events
selectCompany.addEventListener('change', companySelected);


