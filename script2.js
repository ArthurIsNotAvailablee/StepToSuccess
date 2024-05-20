/*
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



*/




const slider = document.querySelector('.slider');
const slideWidth = 350;
let slidePosition = 0;

function moveToNextSlide() {
  if (slidePosition === -(slideWidth * (slider.children.length - 1))) {
    slidePosition = 0;
  } else {
    slidePosition -= slideWidth;
  }
  updateSlidePosition();
}

function updateSlidePosition() {
  slider.style.transform = `translateX(${slidePosition}px)`;
}

setInterval(moveToNextSlide, 2000);














function toggleAccordion(index) {
  var content = document.getElementsByClassName("accordion-content")[index - 1];
  content.classList.toggle("active");
}








var burgerMenu = document.querySelector('.burgerMenu');
var NewBarSectionVnV = document.querySelector('.NewBarSectionVnV');

burgerMenu.addEventListener('click', function() {

    if (NewBarSectionVnV.style.visibility === 'hidden') {
    NewBarSectionVnV.style.visibility = 'visible';
  } else {
    NewBarSectionVnV.style.visibility = 'hidden';
}
  
});


var divSectionsScroll1 = document.querySelector('.divSectionsScroll1');
var divSectionsScroll2 = document.querySelector('.divSectionsScroll2');
var divSectionsScroll3 = document.querySelector('.divSectionsScroll3');
var divSectionsScroll4 = document.querySelector('.divSectionsScroll4');

var AboutUS = document.querySelector('.AboutUS');
var Portfolio = document.querySelector('.Portfolio');
var services = document.querySelector('.services');
var Contacts = document.querySelector('.Contacts');


divSectionsScroll1.addEventListener('click', function() {

    AboutUS.scrollIntoView({ behavior: "smooth" });
    NewBarSectionVnV.style.visibility = 'hidden';
  
});

divSectionsScroll2.addEventListener('click', function() {

    Portfolio.scrollIntoView({ behavior: "smooth" });
    NewBarSectionVnV.style.visibility = 'hidden';
  
});

divSectionsScroll3.addEventListener('click', function() {

    services.scrollIntoView({ behavior: "smooth" });
    NewBarSectionVnV.style.visibility = 'hidden';
  
});

divSectionsScroll4.addEventListener('click', function() {

    Contacts.scrollIntoView({ behavior: "smooth" });
    NewBarSectionVnV.style.visibility = 'hidden';
  
});








////////////////////// Languages ///////////////////


const amParagraph = document.querySelector('.AM');
const ruParagraph = document.querySelector('.RU');
const enParagraph = document.querySelector('.EN');



amParagraph.addEventListener("click", () => {
  const paragraphs = document.getElementsByTagName("p");
  for (let i = 0; i < paragraphs.length; i++) {

    NewBarSectionVnV.style.visibility = 'hidden';
    const styleElement = document.createElement('style');
    document.head.appendChild(styleElement);
    styleElement.sheet.insertRule("@font-face { font-family: 'Noto Sans Armenian'; src: url('Fonts/NotoSansArmenian.ttf') format('truetype'); }", 0);
    paragraphs[i].style.fontFamily = "'Noto Sans Armenian', sans-serif";
    paragraphs[0].innerHTML = "EN";
    paragraphs[1].innerHTML = "AM"; 
    paragraphs[2].innerHTML = "RU";
    paragraphs[3].innerHTML = "ՄԵՐ ՄԱՍԻՆ";
    paragraphs[4].innerHTML = "STS-ը  IT ընկերություն է, որն առաջարկում է գրաֆիկական դիզայնի և կայքերի ստեղծման ծառայություններ։ Մենք կօգնենք ձեզ առանձնանալ մարդաշատ շուկայում ՝ ստեղծելով դիզայն, որն արդյունավետորեն կփոխանցի Ձեր առաքելությունը: Եկեք միասին ստեղծենք իսկապես արտասովոր մի բան:";
    paragraphs[5].innerHTML = "ՊՈՐՏՖՈԼԻՈ";
    paragraphs[6].innerHTML = "BOOK&LOVE";
    paragraphs[7].innerHTML = "EGROW";
    paragraphs[8].innerHTML = "GOLDEN BROWN";
    paragraphs[9].innerHTML = "KITSUNE";
    paragraphs[10].innerHTML = "TIMELESS";
    paragraphs[11].innerHTML = "VALHALLA";
    paragraphs[12].innerHTML = "VIBE";
    paragraphs[13].innerHTML = "ԾԱՌԱՅՈՒԹՅՈՒՆՆԵՐ";
    paragraphs[14].innerHTML = "Բրենդինգը կազմում է յուրաքանչյուր կազմակերպության կարևոր մի մաս, քանի որ փոխանցում է նրա անհատականությունը և հեղինակությունը շուկայում, հանգեցնում է ավելի մեծ ճանաչման, խթանում ՝ հավատարմության և եկամուտների աճին: Կազմակերպությունները պետք է դիմեն ռեբրենդինգի, եթե բախվելով աճող մրցակցությանը իրենց կորպորատիվ ինքնությունն այլևս արձագանք չի ստանում թիրախային լսարանի կողմից, կամ եթե տեղի են ունեցել առաքելության և արժեքների զգալի փոփոխություններ: Ռեբրենդինգը կօգնի թարմացնել ընկերության իմիջը, ձեռք բերել նոր հաճախորդներ և կրկին ներգրավել գոյություն ունեցողներին:";
    paragraphs[15].innerHTML = "Անվանումը՝ ընկերության և նրա հաճախորդների միջև շփման առաջին կետն է: Ճիշտ ընտրված անունը կօգնի տարբերակել ընկերությունը մրցակիցներից և հեշտացնել հաճախորդների կողմից այն գտնելն ու հիշելը, հասնել բրենդի ճանաչելիությանը, ստեղծել հուզական կապ թիրախային լսարանի հետ։";
    paragraphs[16].innerHTML = "Վեբ դիզայնը և կայքերի ստեղծումը ընկերություններին ապահովում են պրոֆեսիոնալ առցանց ներկայություն, բարձրացնում են ապրանքանիշի իրազեկությունը, բարելավում են հաճախորդների ներգրավվածությունը, հեշտացնում հաղորդակցությունը և օպտիմիզացնում բիզնեսի գործառնությունները,հանգեցնում պոտենցիալ հաճախորդների և վաճառքի աճին:";
    paragraphs[17].innerHTML = "Ինֆոգրաֆիկան հզոր գործիք է այն ընկերությունների համար, ովքեր ցանկանում են տեղեկատվությունը փոխանցել հասկանալի, գրավիչ ձևով, թիրախային լսարանի կողմից արձագանք ստանալու նպատակով:";
    paragraphs[18].innerHTML = "Հրապարակման (տպագրական) դիզայնը հաճախորդներին տալիս է ավելի գրավիչ ձևավորում, ստեղծում է հիերարխիայի և կազմակերպվածության զգացում ՝ բովանդակությանն ավելի ընթերցելի և ավելի մեծ տպավորություն թողնելով:";
    paragraphs[19].innerHTML = "Լոգոյի անիմացիան արդյունավետ գործիք է բիզնեսի և կազմակերպությունների համար, որոնք ձգտում են բարձրացնել ապրանքանիշի իրազեկությունն ու օգտատիրոջ ներգրավվածությունը: Իրենց պատկերանշանին անիմացնելով, ընկերությունները կարող են ստեղծել ավելի հիշարժան և գրավիչ կորպորատիվ ինքնություն:";
    paragraphs[20].innerHTML = "3D մոդելավորումը արդյունավետ գործիք է, որը թույլ է տալիս, բարելավել վիզուալիզացիան, խնայել ժամանակ և ծախսեր, բարձրացնել ստեղծագործականությունը և հասնել բազմակողմանիության Ձեր նախագծերում: Հնարավորություն է տալիս տեսնել օբյեկտը ՝ առանց դրա իրականացման մեջ գումար ներդնելու: Նաև հեշտացնում է հասկանալ դրա կառուցվածքը շրջակա տարածքի համատեքստում:";

  }



  const paragraphs2 = document.getElementsByTagName("h2");
  for (let i = 0; i < paragraphs2.length; i++) {

    NewBarSectionVnV.style.visibility = 'hidden';
    const styleElement = document.createElement('style');
    document.head.appendChild(styleElement);
    styleElement.sheet.insertRule("@font-face { font-family: 'Noto Sans Armenian'; src: url('Fonts/NotoSansArmenian.ttf') format('truetype'); }", 0);
    paragraphs2[i].style.fontFamily = "'Noto Sans Armenian', sans-serif";


          paragraphs2[0].innerHTML = "ՄԵՐ ՄԱՍԻՆ";
          paragraphs2[1].innerHTML = "ՊՈՐՏՖՈԼԻՈ";
          paragraphs2[2].innerHTML = "ԾԱՌԱՅՈՒԹՅՈՒՆՆԵՐ";
          paragraphs2[3].innerHTML = "ԿԱՊ ՄԵԶ ՀԵՏ";
          paragraphs2[4].innerHTML = "ԲՐԵՆԴԻՆԳ/ՌԵԲՐԵՆԴԻՆԳ";
          paragraphs2[5].innerHTML = "ԱՆՎԱՆՈՒՄ";
          paragraphs2[6].innerHTML = "ՎԵԲ ԴԻԶԱՅՆ ԵՒ ԿԱՅՔԵՐԻ ՍՏԵՂԾՈՒՄ";
          paragraphs2[7].innerHTML = "ԻՆՖՈԳՐԱՖԻԿԱ";
          paragraphs2[8].innerHTML = "ՀՐԱՊԱՐԱԿՄԱՆ ԴԻԶԱՅՆ";
          paragraphs2[9].innerHTML = "ԼՈԳՈՅԻ ԱՆԻՄԱՑԻԱՆ";
          paragraphs2[10].innerHTML = "3D ՄՈԴԵԼԱՎՈՐՈՒՄ"
      }

});






ruParagraph.addEventListener("click", () => {
  const paragraphs = document.getElementsByTagName("p");
  for (let i = 0; i < paragraphs.length; i++) {

    NewBarSectionVnV.style.visibility = 'hidden';
    const styleElement = document.createElement('style');
    document.head.appendChild(styleElement);
    styleElement.sheet.insertRule("@font-face { font-family: 'Noto Sans Armenian'; src: url('Fonts/NotoSansArmenian.ttf') format('truetype'); }", 0);
    paragraphs[i].style.fontFamily = "'Noto Sans Armenian', sans-serif";
    paragraphs[0].innerHTML = "EN";
    paragraphs[1].innerHTML = "AM";
    paragraphs[2].innerHTML = "RU";
    paragraphs[3].innerHTML = "О НАС";
    paragraphs[4].innerHTML = "STS – IT компания, предлагающая услуги графического дизайна и веб-разработки. Мы поможем вам выделиться на переполненном рынке, создавая дизайн который эффективно передаст ваше послание. Давайте вместе создадим что-то действительно экстраординарное.";
    paragraphs[5].innerHTML = "ПОРТФОЛИО";
    paragraphs[6].innerHTML = "BOOK&LOVE";
    paragraphs[7].innerHTML = "EGROW";
    paragraphs[8].innerHTML = "GOLDEN BROWN";
    paragraphs[9].innerHTML = "KITSUNE";
    paragraphs[10].innerHTML = "TIMELESS";
    paragraphs[11].innerHTML = "VALHALLA";
    paragraphs[12].innerHTML = "VIBE";
    paragraphs[13].innerHTML = "УСЛУГИ";
    paragraphs[14].innerHTML = "Брендинг важен для компании, поскольку он придает ей уникальную индивидуальность и репутацию на рынке, что может привести к повышению узнаваемости клиентов, лояльности и доходов. Компании необходимо рассмотреть возможность ребрендинга, если их нынешний фирменный стиль больше не находит отклика у их целевой аудитории, если произошли значительные изменения в миссии или ценностях компании, если они сталкиваются с возросшей конкуренцией. Ребрендинг может помочь обновить имидж компании, привлечь новых клиентов и повторно привлечь существующих.";
    paragraphs[15].innerHTML = "Нейминг важен для бизнеса, потому что часто это первая точка соприкосновения между компанией и ее клиентами. Хорошо подобранное название поможет добиться узнаваемости бренда, создать эмоциональную связь с целевой аудиторией. Яркое название также может отличать компанию от конкурентов и облегчать ее поиск и запоминание клиентами.";
    paragraphs[16].innerHTML = "Веб-дизайн и разработка обеспечивают компании профессиональное присутствие в Интернете, повышают узнаваемость бренда, улучшают пользовательский опыт и генерируют больше потенциальных клиентов и продаж. Это также повышает вовлеченность клиентов, облегчает коммуникацию и оптимизирует бизнес-операции.";
    paragraphs[17].innerHTML = "Инфографика - это мощный инструмент для компаний, стремящихся донести сложную информацию в понятной, привлекательной форме, которая найдет отклик у их целевой аудитории.";
    paragraphs[18].innerHTML = "Дизайн публикации предоставляет клиентам более привлекательный дизайн, который улучшает читаемость и иерархию контента, усиливает фирменный стиль и улучшает общую эстетику дизайна. Это также может создать ощущение иерархии и организованности, делая контент более удобным для чтения и производящим большее впечатление.";
    paragraphs[19].innerHTML = "Анимация логотипа - эффективный инструмент для предприятий и организаций, стремящихся повысить узнаваемость бренда и вовлеченность пользователей. Добавляя движение и анимацию к своим логотипам, компании могут создать более запоминающийся и привлекательный фирменный стиль.";
    paragraphs[20].innerHTML = "3D-моделирование - это эффективный инструмент, который позволяет, улучшить визуализацию, сэкономить время и затраты, повысить креативность и добиться универсальности в своих проектах. Дает возможность увидеть объект, не вкладывая денег в его реализацию. Также облегчает понять его структуру в контексте окружающего пространства.";

  }



  const paragraphs2 = document.getElementsByTagName("h2");
  for (let i = 0; i < paragraphs2.length; i++) {

    NewBarSectionVnV.style.visibility = 'hidden';
    const styleElement = document.createElement('style');
    document.head.appendChild(styleElement);
    styleElement.sheet.insertRule("@font-face { font-family: 'Noto Sans Armenian'; src: url('Fonts/NotoSansArmenian.ttf') format('truetype'); }", 0);
    paragraphs2[i].style.fontFamily = "'Noto Sans Armenian', sans-serif";


          paragraphs2[0].innerHTML = "О НАС";
          paragraphs2[1].innerHTML = "ПОРТФОЛИО";
          paragraphs2[2].innerHTML = "УСЛУГИ";
          paragraphs2[3].innerHTML = "СВЯЗАТЬСЯ С НАМИ";
          paragraphs2[4].innerHTML = "БРЕНДИНГ/РЕБРЕНДИНГ";
          paragraphs2[5].innerHTML = "НЕЙМИНГ";
          paragraphs2[6].innerHTML = "ВЕБ-ДИЗАЙН И РАЗРАБОТКА";
          paragraphs2[7].innerHTML = "ИНФОГРАФИКА";
          paragraphs2[8].innerHTML = "ДИЗАЙН ПУБЛИКАЦИИ";
          paragraphs2[9].innerHTML = "АНИМАЦИЯ ЛОГОТИПА";
          paragraphs2[10].innerHTML = "3D-МОДЕЛИРОВАНИЕ"
      }

});













enParagraph.addEventListener("click", () => {
  const paragraphs = document.getElementsByTagName("p");
  for (let i = 0; i < paragraphs.length; i++) {

    NewBarSectionVnV.style.visibility = 'hidden';
    const styleElement = document.createElement('style');
    document.head.appendChild(styleElement);
    styleElement.sheet.insertRule("@font-face { font-family: 'Noto Sans Armenian'; src: url('Fonts/NotoSansArmenian.ttf') format('truetype'); }", 0);
    paragraphs[i].style.fontFamily = "'Noto Sans Armenian', sans-serif";
    paragraphs[0].innerHTML = "EN";
    paragraphs[1].innerHTML = "AM";
    paragraphs[2].innerHTML = "RU";
    paragraphs[3].innerHTML = "ABOUT US";
    paragraphs[4].innerHTML = "STS is an IT company offering a wide range of services, including graphic design and web development. We will help you stand out in a crowded market by creating a design that effectively conveys your message. Let's create something really extraordinary together.";
    paragraphs[5].innerHTML = "PORTFOLIO";
    paragraphs[6].innerHTML = "BOOK&LOVE";
    paragraphs[7].innerHTML = "EGROW";
    paragraphs[8].innerHTML = "GOLDEN BROWN";
    paragraphs[9].innerHTML = "KITSUNE";
    paragraphs[10].innerHTML = "TIMELESS";
    paragraphs[11].innerHTML = "VALHALLA";
    paragraphs[12].innerHTML = "VIBE";
    paragraphs[13].innerHTML = "SERVICES";
    paragraphs[14].innerHTML = "Branding is important for a company because it gives a company a unique identity and reputation in the market, which can lead to increased customer recognition, loyalty, and revenue. A company need to consider rebranding if their current brand identity is no longer resonating with their target audience, if there has been a significant change in the company's mission or values, if they are facing increased competition. Rebranding can help to refresh the company's image, attract new customers, and re-engage existing ones.";
    paragraphs[15].innerHTML = "Naming is important for business because it is often the first point of contact between a company and its customers. A well-chosen name helps achieve brand awareness, create an emotional connection with the target audience. A strong name can also differentiate a company from its competitors and make it easier for customers to find and remember.";
    paragraphs[16].innerHTML = "Web design and development provide a company with a professional online presence, increase brand awareness, improve user experience, and generate more leads and sales. It also enhance customer engagement, facilitate communication, and streamline business operations.";
    paragraphs[17].innerHTML = "Infographics are a powerful tool for businesses looking to communicate complex information in a clear, engaging way that resonates with their target audience.";
    paragraphs[18].innerHTML = "Publication design gives customers a more visually appealing and engaging design that improves the readability and hierarchy of content, enhances brand identity, and improves the overall aesthetics of the design. It can also create a sense of hierarchy and organization, making the content easier to read and more impactful.";
    paragraphs[19].innerHTML = "Logo animation is an effective tool for businesses and organizations looking to increase brand recognition and engagement. By adding motion and animation to their logos, businesses can create a more memorable and engaging brand identity.";
    paragraphs[20].innerHTML = "3D modeling is an effective tool that allows you to improve visualization, save time and costs, increase creativity and achieve versatility in your projects. Gives you the opportunity to see the object without investing money in its implementation. It also makes it easier to understand its structure in the context of the surrounding space.";

  }



  const paragraphs2 = document.getElementsByTagName("h2");
  for (let i = 0; i < paragraphs2.length; i++) {

    NewBarSectionVnV.style.visibility = 'hidden';
    const styleElement = document.createElement('style');
    document.head.appendChild(styleElement);
    styleElement.sheet.insertRule("@font-face { font-family: 'Noto Sans Armenian'; src: url('Fonts/NotoSansArmenian.ttf') format('truetype'); }", 0);
    paragraphs2[i].style.fontFamily = "'Noto Sans Armenian', sans-serif";


          paragraphs2[0].innerHTML = "ABOUT US";
          paragraphs2[1].innerHTML = "PORTFOLIO";
          paragraphs2[2].innerHTML = "SERVICES";
          paragraphs2[3].innerHTML = "CONTACT US";
          paragraphs2[4].innerHTML = "BRANDING/REBRANDING";
          paragraphs2[5].innerHTML = "NAMING";
          paragraphs2[6].innerHTML = "WEB DESIGN AND DEVELOPMENT";
          paragraphs2[7].innerHTML = "INFOGRAPHIC";
          paragraphs2[8].innerHTML = "PUBLICATION DESIGN";
          paragraphs2[9].innerHTML = "LOGO ANIMATION";
          paragraphs2[10].innerHTML = "3D MODELING"
      }

});







///////// clickNgooo




const divElement1 = document.getElementById("brand1");
const divElement2 = document.getElementById("brand2");
const divElement3 = document.getElementById("brand3");
const divElement4 = document.getElementById("brand4");
const divElement5 = document.getElementById("brand5");
const divElement6 = document.getElementById("brand6");
const divElement7 = document.getElementById("brand7");



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

  window.open('https://www.behance.net/gallery/171956631/Valhalla', '_blank');
});



divElement7.addEventListener('click', function() {

  window.open('https://www.behance.net/gallery/149086647/Radio-Vibe', '_blank');
});






///////////////////////// SM click ///////////////////////




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











