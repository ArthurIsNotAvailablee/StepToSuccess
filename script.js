// var sliderImages = document.querySelectorAll('.slider img');
// var prevBtn = document.querySelector('.prev');
// var nextBtn = document.querySelector('.next');
// var current = 0;

// function reset() {
//   for (var i = 0; i < sliderImages.length; i++) {
//     sliderImages[i].style.display = 'none';
//   }
// }

// function startSlide() {
//   reset();
//   sliderImages[0].style.display = 'block';
// }

// function slideLeft() {
//   reset();
//   sliderImages[current - 1].style.display = 'block';
//   current--;
// }

// function slideRight() {
//   reset();
//   sliderImages[current + 1].style.display = 'block';
//   current++;
// }

// prevBtn.addEventListener('click', function() {
//   if (current === 0) {
//     current = sliderImages.length;
//   }
//   slideLeft();
// });

// nextBtn.addEventListener('click', function() {
//   if (current === sliderImages.length - 1) {
//     current = -1;
//   }
//   slideRight();
// });

// startSlide();


var sliderImages = document.querySelectorAll('.slider img');
var prevBtn = document.querySelector('.prev');
var nextBtn = document.querySelector('.next');
var current = 0;

function reset() {
  for (var i = 0; i < sliderImages.length; i++) {
    sliderImages[i].style.display = 'none';
  }
}

function startSlide() {
  reset();
  sliderImages[0].style.display = 'block';
  setInterval(function() {
    slideRight();
  }, 5000); // change image every 5 seconds
}

function slideLeft() {
  reset();
  if (current === 0) {
    current = sliderImages.length;
  }
  current--;
  sliderImages[current].style.opacity = 0;
  sliderImages[current].style.display = 'block';
  fadeIn(sliderImages[current]);
}

function slideRight() {
  reset();
  if (current === sliderImages.length - 1) {
    current = -1;
  }
  current++;
  sliderImages[current].style.opacity = 0;
  sliderImages[current].style.display = 'block';
  fadeIn(sliderImages[current]);
}

function fadeIn(el) {
  var op = 0.1; // initial opacity
  el.style.opacity = op;
  var timer = setInterval(function () {
      if (op >= 1){
          clearInterval(timer);
      }
      el.style.opacity = op;
      op += op * 0.1;
  }, 30); // fade in effect time
}

prevBtn.addEventListener('click', function() {
  slideLeft();
});

nextBtn.addEventListener('click', function() {
  slideRight();
});

startSlide();




//////////////////////////// js scroll



var p1S = document.querySelector(".p1S")
var p2S = document.querySelector(".p2S")
var p3S = document.querySelector(".p3S")
var p4S = document.querySelector(".p4S")

var p1Ss = document.querySelector(".p1Ss")
var p2Ss = document.querySelector(".p2Ss")
var p3Ss = document.querySelector(".p3Ss")
var p4Ss = document.querySelector(".p4Ss")


var aboutUs = document.querySelector(".aboutUs")
var portfolio = document.querySelector(".portfolio")
var sixPack = document.querySelector(".Services")
var footie = document.querySelector(".Footie")


p1S.addEventListener('click', function() {
  aboutUs.scrollIntoView({ behavior: "smooth" });
});
p2S.addEventListener('click', function() {
  portfolio.scrollIntoView({ behavior: "smooth" });
});
p3S.addEventListener('click', function() {
  sixPack.scrollIntoView({ behavior: "smooth" });
});
p4S.addEventListener('click', function() {
  footie.scrollIntoView({ behavior: "smooth" });
});





p1Ss.addEventListener('click', function() {
  aboutUs.scrollIntoView({ behavior: "smooth" });
});
p2Ss.addEventListener('click', function() {
  portfolio.scrollIntoView({ behavior: "smooth" });
});
p3Ss.addEventListener('click', function() {
  sixPack.scrollIntoView({ behavior: "smooth" });
});
p4Ss.addEventListener('click', function() {
  footie.scrollIntoView({ behavior: "smooth" });
});



///////////////////// Languages CODE ////////////////



const amParagraph = document.getElementById("AM");
const enParagraph = document.getElementById("EN");
const ruParagraph = document.getElementById("RU");

amParagraph.addEventListener("click", () => {
  const paragraphs = document.getElementsByTagName("p");
  for (let i = 0; i < paragraphs.length; i++) {


    const styleElement = document.createElement('style');
    document.head.appendChild(styleElement);
    styleElement.sheet.insertRule("@font-face { font-family: 'Noto Sans Armenian'; src: url('Fonts/NotoSansArmenian.ttf') format('truetype'); }", 0);
    paragraphs[i].style.fontFamily = "'Noto Sans Armenian', sans-serif";
    paragraphs[i].style.fontWeight = '400';
    paragraphs[0].innerHTML = "ՄԵՐ ՄԱՍԻՆ";
    paragraphs[1].innerHTML = "ՊՈՐՏՖՈԼԻՈ";
    paragraphs[2].innerHTML = "ԾԱՌԱՅՈՒԹՅՈՒՆՆԵՐ";
    paragraphs[3].innerHTML = "ԿԱՊ ՄԵԶ ՀԵՏ";
    paragraphs[4].innerHTML = "AM";
    paragraphs[5].innerHTML = "EN";
    paragraphs[6].innerHTML = "RU";
    paragraphs[7].innerHTML = "ՄԵՐ ՄԱՍԻՆ";
    paragraphs[8].innerHTML = "STS-ը  IT ընկերություն է, որն առաջարկում է ծառայությունների լայն տեսականի, որոնք ներառում են գրաֆիկական դիզայն և կայքերի ստեղծում: Մենք հավատում ենք տարամիտ մտածողության ուժին, որը թույլ է տալիս ուսումնասիրել ստեղծագործական անսահման հնարավորությունները և արտահայտել յուրաքանչյուրիս  անհատականությունը: Մենք կօգնենք ձեզ առանձնանալ մարդաշատ շուկայում ՝ ստեղծելով դիզայն, որն արդյունավետորեն կփոխանցի Ձեր առաքելությունը: Եկեք միասին ստեղծենք իսկապես արտասովոր մի բան:";
    paragraphs[9].innerHTML = "ՊՈՐՏՖՈԼԻՈ";
    paragraphs[10].innerHTML = "BOOK&LOVE";
    paragraphs[11].innerHTML = "EGROW";
    paragraphs[12].innerHTML = "GOLDEN BROWN";
    paragraphs[13].innerHTML = "KITSUNE";
    paragraphs[14].innerHTML = "VALHALLA";
    paragraphs[15].innerHTML = "VIBE";
    paragraphs[16].innerHTML = "ԾԱՌԱՅՈՒԹՅՈՒՆՆԵՐ";
    paragraphs[17].innerHTML = "ԲՐԵՆԴԻՆԳ";
    paragraphs[18].innerHTML = "Բրենդինգը կազմում է յուրաքանչյուր կազմակերպության կարևոր մի մաս, քանի որ փոխանցում է նրա անհատականությունը և հեղինակությունը շուկայում, հանգեցնում է ավելի մեծ ճանաչման, խթանում ՝ հավատարմության և եկամուտների աճին:";
    paragraphs[19].innerHTML = "ԱՆՎԱՆՈՒՄ";
    paragraphs[20].innerHTML = "Անվանումը՝ ընկերության և նրա հաճախորդների միջև շփման առաջին կետն է: Ճիշտ ընտրված անունը կօգնի տարբերակել ընկերությունը մրցակիցներից և հեշտացնել հաճախորդների կողմից այն գտնելն ու հիշելը, հասնել բրենդի ճանաչելիությանը, ստեղծել հուզական կապ թիրախային լսարանի հետ։";
    paragraphs[21].innerHTML = "ԻՆՖՈԳՐԱՖԻԿԱ";
    paragraphs[22].innerHTML = "Ինֆոգրաֆիկան հզոր գործիք է այն ընկերությունների համար, ովքեր ցանկանում են տեղեկատվությունը փոխանցել հասկանալի, գրավիչ ձևով, թիրախային լսարանի կողմից արձագանք ստանալու նպատակով:";
    paragraphs[23].innerHTML = "ԼՈԳՈՅԻ ԱՆԻՄԱՑԻԱ";
    paragraphs[24].innerHTML = "Լոգոյի անիմացիան արդյունավետ գործիք է բիզնեսի և կազմակերպությունների համար, որոնք ձգտում են բարձրացնել ապրանքանիշի իրազեկությունն ու օգտատիրոջ ներգրավվածությունը: Իրենց պատկերանշանին անիմացնելով, ընկերությունները կարող են ստեղծել ավելի հիշարժան և գրավիչ կորպորատիվ ինքնություն:";
    paragraphs[25].innerHTML = "ՌԵԲՐԵՆԴԻՆԳ";
    paragraphs[26].innerHTML = "Կազմակերպությունները պետք է դիմեն ռեբրենդինգի, եթե բախվելով աճող մրցակցությանը իրենց կորպորատիվ ինքնությունն այլևս արձագանք չի ստանում թիրախային լսարանի կողմից, կամ եթե տեղի են ունեցել առաքելության և արժեքների զգալի փոփոխություններ: Ռեբրենդինգը կօգնի թարմացնել ընկերության իմիջը, ձեռք բերել նոր հաճախորդներ և կրկին ներգրավել գոյություն ունեցողներին:";
    paragraphs[27].innerHTML = "ՎԵԲ ԴԻԶԱՅՆ ԵՒ ԿԱՅՔԵՐԻ ՍՏԵՂԾՈՒՄ";
    paragraphs[28].innerHTML = "Վեբ դիզայնը  և կայքերի ստեղծումը ընկերություններին ապահովում են պրոֆեսիոնալ առցանց ներկայություն, բարձրացնում են ապրանքանիշի իրազեկությունը, բարելավում են հաճախորդների ներգրավվածությունը, հեշտացնում հաղորդակցությունը և օպտիմիզացնում բիզնեսի գործառնությունները,հանգեցնում պոտենցիալ հաճախորդների և վաճառքի աճին:";
    paragraphs[29].innerHTML = "ՀՐԱՊԱՐԱԿՄԱՆ ԴԻԶԱՅՆ";
    paragraphs[30].innerHTML = "Հրապարակման (տպագրական) դիզայնը հաճախորդներին տալիս է ավելի գրավիչ ձևավորում, ստեղծում է հիերարխիայի և կազմակերպվածության զգացում ՝ բովանդակությանն ավելի ընթերցելի և ավելի մեծ տպավորություն թողնելով:";
    paragraphs[31].innerHTML = "3D ՄՈԴԵԼԱՎՈՐՈՒՄ";
    paragraphs[32].innerHTML = "3D մոդելավորումը արդյունավետ գործիք է, որը թույլ է տալիս, բարելավել վիզուալիզացիան, խնայել ժամանակ և ծախսեր, բարձրացնել ստեղծագործականությունը և հասնել բազմակողմանիության Ձեր նախագծերում: Հնարավորություն է տալիս տեսնել օբյեկտը ՝ առանց դրա իրականացման մեջ գումար ներդնելու: Նաև հեշտացնում է հասկանալ դրա կառուցվածքը շրջակա տարածքի համատեքստում:";
    paragraphs[33].innerHTML = "Think out of the system. Be divergent.";
    paragraphs[34].innerHTML = "ՄԵՐ ՄԱՍԻՆ";
    paragraphs[35].innerHTML = "ՊՈՐՏՖՈԼԻՈ";
    paragraphs[36].innerHTML = "ԾԱՌԱՅՈՒԹՅՈՒՆՆԵՐ";
    paragraphs[37].innerHTML = "ԿԱՊ ՄԵԶ ՀԵՏ";
    paragraphs[38].innerHTML = "partnerships@steptosuccess.io hello@steptosuccess.io";
    paragraphs[39].innerHTML = "STS ON SOCIAL MEDIA";
  }
});

enParagraph.addEventListener("click", () => {
  const paragraphs = document.getElementsByTagName("p");
  for (let i = 0; i < paragraphs.length; i++) {
    paragraphs[i].style.fontFamily = "sans-serif";
    paragraphs[i].style.fontWeight = '400';
    paragraphs[0].innerHTML = "ABOUT US";
    paragraphs[1].innerHTML = "PORTFOLIO";
    paragraphs[2].innerHTML = "SERVICES";
    paragraphs[3].innerHTML = "CONTACT US";
    paragraphs[4].innerHTML = "AM";
    paragraphs[5].innerHTML = "EN";
    paragraphs[6].innerHTML = "RU";
    paragraphs[7].innerHTML = "ABOUT US";
    paragraphs[8].innerHTML = "STS is an IT company offering a wide range of services, including graphic design and web development. We believe in the power of divergent thinking, which allows us to explore the limitless possibilities of creativity and helps to show our uniqueness. We will help you stand out in a crowded market by creating a design that effectively conveys your message. Let's create something really extraordinary together.";
    paragraphs[9].innerHTML = "PORTFOLIO";
    paragraphs[10].innerHTML = "BOOK&LOVE";
    paragraphs[11].innerHTML = "EGROW";
    paragraphs[12].innerHTML = "GOLDEN BROWN";
    paragraphs[13].innerHTML = "KITSUNE";
    paragraphs[14].innerHTML = "VALHALLA";
    paragraphs[15].innerHTML = "VIBE";
    paragraphs[16].innerHTML = "SERVICES";
    paragraphs[17].innerHTML = "BRANDING";
    paragraphs[18].innerHTML = "Branding is important for a company because it gives a company a unique identity and reputation in the market, which can lead to increased customer recognition, loyalty, and revenue.";
    paragraphs[19].innerHTML = "NAMING";
    paragraphs[20].innerHTML = "Naming is important for business because it is often the first point of contact between a company and its customers. A well-chosen name helps achieve brand awareness, create an emotional connection with the target audience. A strong name can also differentiate a company from its competitors and make it easier for customers to find and remember.";
    paragraphs[21].innerHTML = "INFOGRAPHIC";
    paragraphs[22].innerHTML = "Infographics are a powerful tool for businesses looking to communicate complex information in a clear, engaging way that resonates with their target audience.";
    paragraphs[23].innerHTML = "LOGO ANIMATION";
    paragraphs[24].innerHTML = "Logo animation is an effective tool for businesses and organizations looking to increase brand recognition and engagement. By adding motion and animation to their logos, businesses can create a more memorable and engaging brand identity.";
    paragraphs[25].innerHTML = "REBRANDING";
    paragraphs[26].innerHTML = "A company need to consider rebranding if their current brand identity is no longer resonating with their target audience, if there has been a significant change in the company's mission or values, if they are facing increased competition. Rebranding can help to refresh the company's image, attract new customers, and re-engage existing ones.";
    paragraphs[27].innerHTML = "UI/UX";
    paragraphs[28].innerHTML = "Naming is important for business because it is often the first point of contact between a company and its customers. A well-chosen name helps achieve brand awareness, create an emotional connection with the target audience. A strong name can also differentiate a company from its competitors and make it easier for customers to find and remember.";
    paragraphs[29].innerHTML = "PUBLICATION DESIGN";
    paragraphs[30].innerHTML = "Publication design gives customers a more visually appealing and engaging design that improves the readability and hierarchy of content, enhances brand identity, and improves the overall aesthetics of the design. It can also create a sense of hierarchy and organization, making the content easier to read and more impactful.";
    paragraphs[31].innerHTML = "3D MODELING";
    paragraphs[32].innerHTML = "3D modeling is an effective tool that allows you to improve visualization, save time and costs, increase creativity and achieve versatility in your projects. Gives you the opportunity to see the object without investing money in its implementation. It also makes it easier to understand its structure in the context of the surrounding space.";
    paragraphs[33].innerHTML = "Think out of the system. Be divergent.";
    paragraphs[34].innerHTML = "ABOUT US";
    paragraphs[35].innerHTML = "PORTFOLIO";
    paragraphs[36].innerHTML = "SERVICES";
    paragraphs[37].innerHTML = "CONTACT US";
    paragraphs[38].innerHTML = "partnerships@steptosuccess.io hello@steptosuccess.io";
    paragraphs[39].innerHTML = "STS ON SOCIAL MEDIA";
  } 
});

ruParagraph.addEventListener("click", () => {
  const paragraphs = document.getElementsByTagName("p");
  for (let i = 0; i < paragraphs.length; i++) {

    const styleElement = document.createElement('style');
    document.head.appendChild(styleElement);
    styleElement.sheet.insertRule("@font-face { font-family: 'SF UI Display'; src: url('Fonts/SF-UI-Display-Heavy.otf') format('truetype'); }", 0);
    paragraphs[i].style.fontFamily = "'SF UI Display', sans-serif";
    paragraphs[i].style.fontWeight = '100';
    paragraphs[0].innerHTML = "О НАС";
    paragraphs[1].innerHTML = "ПОРТФОЛИО"; 
    paragraphs[2].innerHTML = "УСЛУГИ"; 
    paragraphs[3].innerHTML = "СВЯЗАТЬСЯ С НАМИ";
    paragraphs[4].innerHTML = "AM";
    paragraphs[5].innerHTML = "EN";
    paragraphs[6].innerHTML = "RU";
    paragraphs[7].innerHTML = "О НАС"; 
    paragraphs[8].innerHTML = "STS – IT компания, предлагающая широкий спектр услуг, включая графический дизайн и веб-разработку. Мы верим в силу дивергентного мышления, позволяющего исследовать безграничные возможности творчества и помогающего проявить свою уникальность. Мы поможем вам выделиться на переполненном рынке, создавая дизайн который эффективно передаст ваше послание. Давайте вместе создадим что-то действительно экстраординарное.";
    paragraphs[9].innerHTML = "ПОРТФОЛИО";
    paragraphs[10].innerHTML = "BOOK&LOVE";
    paragraphs[11].innerHTML = "EGROW";
    paragraphs[12].innerHTML = "GOLDEN BROWN";
    paragraphs[13].innerHTML = "KITSUNE";
    paragraphs[14].innerHTML = "VALHALLA";
    paragraphs[15].innerHTML = "VIBE";
    paragraphs[16].innerHTML = "УСЛУГИ";    
    paragraphs[17].innerHTML = "БРЕНДИНГ"; 
    paragraphs[18].innerHTML = "Брендинг важен для компании, поскольку он придает ей уникальную индивидуальность и репутацию на рынке, что может привести к повышению узнаваемости клиентов, лояльности и доходов.";
    paragraphs[19].innerHTML = "НЕЙМИНГ"; 
    paragraphs[20].innerHTML = "Нейминг важен для бизнеса, потому что часто это первая точка соприкосновения между компанией и ее клиентами. Хорошо подобранное название поможет добиться узнаваемости бренда, создать эмоциональную связь с целевой аудиторией. Яркое название также может отличать компанию от конкурентов и облегчать ее поиск и запоминание клиентами.";
    paragraphs[21].innerHTML = "ИНФОГРАФИКА"; 
    paragraphs[22].innerHTML = "Инфографика - это мощный инструмент для компаний, стремящихся донести сложную информацию в понятной, привлекательной форме, которая найдет отклик у их целевой аудитории.";
    paragraphs[23].innerHTML = "АНИМАЦИЯ ЛОГОТИПА"; 
    paragraphs[24].innerHTML = "Анимация логотипа - эффективный инструмент для предприятий и организаций, стремящихся повысить узнаваемость бренда и вовлеченность пользователей. Добавляя движение и анимацию к своим логотипам, компании могут создать более запоминающийся и привлекательный фирменный стиль.";
    paragraphs[25].innerHTML = "РЕБРЕНДИНГ"; 
    paragraphs[26].innerHTML = "Компании необходимо рассмотреть возможность ребрендинга, если их нынешний фирменный стиль больше не находит отклика у их целевой аудитории, если произошли значительные изменения в миссии или ценностях компании, если они сталкиваются с возросшей конкуренцией. Ребрендинг может помочь обновить имидж компании, привлечь новых клиентов и повторно привлечь существующих.";
    paragraphs[27].innerHTML = "ВЕБ-ДИЗАЙН И РАЗРАБОТКА"; 
    paragraphs[28].innerHTML = "Веб-дизайн и разработка обеспечивают компании профессиональное присутствие в Интернете, повышают узнаваемость бренда, улучшают пользовательский опыт и генерируют больше потенциальных клиентов и продаж. Это также повышает вовлеченность клиентов, облегчает коммуникацию и оптимизирует бизнес-операции.";
    paragraphs[29].innerHTML = "ДИЗАЙН ПУБЛИКАЦИИ"; 
    paragraphs[30].innerHTML = "Дизайн публикации предоставляет клиентам более привлекательный дизайн, который улучшает читаемость и иерархию контента, усиливает фирменный стиль и улучшает общую эстетику дизайна. Это также может создать ощущение иерархии и организованности, делая контент более удобным для чтения и производящим большее впечатление.";
    paragraphs[31].innerHTML = "3D-МОДЕЛИРОВАНИЕ"; 
    paragraphs[32].innerHTML = "3D-моделирование - это эффективный инструмент, который позволяет, улучшить визуализацию, сэкономить время и затраты, повысить креативность и добиться универсальности в своих проектах. Дает возможность увидеть объект, не вкладывая денег в его реализацию. Также облегчает понять его структуру в контексте окружающего пространства.";
    paragraphs[33].innerHTML = "Think out of the system. Be divergent.";
    paragraphs[34].innerHTML = "О НАС";
    paragraphs[35].innerHTML = "ПОРТФОЛИО";
    paragraphs[36].innerHTML = "УСЛУГИ";
    paragraphs[37].innerHTML = "СВЯЗАТЬСЯ С НАМИ";
    paragraphs[38].innerHTML = "partnerships@steptosuccess.io hello@steptosuccess.io";
    paragraphs[39].innerHTML = "STS ON SOCIAL MEDIA";
  }
});




////// Links



const divElement1 = document.querySelector('.V1BigDiv');
const divElement2 = document.querySelector('.V2BigDiv');
const divElement3 = document.querySelector('.V3BigDiv');
const divElement4 = document.querySelector('.V4BigDiv');
const divElement5 = document.querySelector('.V5BigDiv');
const divElement6 = document.querySelector('.V6BigDiv');



divElement1.addEventListener('click', function() {

  window.open('https://www.behance.net/gallery/171287201/book-love', '_blank');
});



divElement2.addEventListener('click', function() {

  window.open('https://www.behance.net/gallery/168844683/Egrow', '_blank');
});



divElement3.addEventListener('click', function() {

  window.open('https://www.behance.net/gallery/155597821/Golden-Brown', '_blank');
});



divElement4.addEventListener('click', function() {

  window.open('https://www.behance.net/gallery/171328833/Kitsune-Tea', '_blank');
});



divElement5.addEventListener('click', function() {

  window.open('https://www.behance.net/gallery/171956631/Valhalla', '_blank');
});



divElement6.addEventListener('click', function() {

  window.open('https://www.behance.net/gallery/149086647/Radio-Vibe', '_blank');
});




//// Delete a div on mobile /////////




// function removeDivOnMobile() {
//   const divElement = document.querySelector('.info');
//   const divElement1 = document.querySelector('.languages');
//   if (window.matchMedia('(max-width: 1000px)').matches) {
//     divElement.remove();
//     divElement1.remove();
//   }
// }

// // Call the function initially
// removeDivOnMobile();

// // Add a resize event listener to check if the window is resized
// window.addEventListener('resize', removeDivOnMobile);






// ////////// Delete Divs over 1000px

// function removeDivsOnLargeScreen() {
//   const div1 = document.querySelector('.MobileFriendlyTop');
//   const div2 = document.querySelector('.BurgerMenu');

//   if (window.matchMedia('(min-width: 1000px)').matches) {
//     div1.remove();
//     div2.remove();
//   }
// }

// // Call the function initially
// removeDivsOnLargeScreen();

// // Add a resize event listener to check if the window is resized
// window.addEventListener('resize', removeDivsOnLargeScreen);




















///////////////Mobile code for redirection to mobile STS

// function isMobilePhone() {
//   return /Android|webOS|iPhone|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
// }

// // Redirect to the mobile version if the device is a mobile phone
// function redirectToMobileVersion() {
//   if (isMobilePhone()) {
//     window.location.href = "index2.html"; // Replace "mobile-version-folder" with the actual folder name of your mobile version website
//   }
// }



// window.onload = redirectToMobileVersion;



// function isMobilePhone() {
//   return /Android|webOS|iPhone|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
// }

// // Redirect to the mobile version if the device is a mobile phone
// function redirectToMobileVersion() {
//   if (isMobilePhone()) {
//     window.location.href = "index2.html"; // Replace "index2.html" with the actual URL of your mobile version website
//   }
// }

// window.onload = function() {
//   redirectToMobileVersion();

//   // Reload the page if the device orientation changes
//   window.addEventListener('orientationchange', function() {
//     location.reload();
//   });
// };





  // if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
  //   window.location.href = 'index2.html'; 
  // }





///////////////////////// SM ICONS ////////////////////////////

const sm1 = document.querySelector('.imgLink1');
const sm7 = document.querySelector('.imgLink7');
const sm3 = document.querySelector('.imgLink3');
const sm5 = document.querySelector('.imgLink5');
const sm4 = document.querySelector('.imgLink4');


sm1.addEventListener('click', function() {

  window.open('https://www.facebook.com/profile.php?id=100092870318680&mibextid=ZbWKwL', '_blank');
});

sm7.addEventListener('click', function() {

  window.open('https://instagram.com/steptosuccess_int?igshid=YmMyMTA2M2Y=', '_blank');
});

sm3.addEventListener('click', function() {

  window.open('https://www.linkedin.com/in/step-to-success-sts-6236451b7', '_blank');
});

sm5.addEventListener('click', function() {

  window.open('https://www.behance.net/steptosuccess', '_blank');
});

sm4.addEventListener('click', function() {

  window.open('https://t.me/stsint', '_blank');
});
