const container = document.createElement('div');
container.classList.add("card-container");
container.classList.add("container");
container.classList.add("mt-5");
container.classList.add("card-background");


document.body.appendChild(container);


const row = document.createElement('div');
row.classList.add("row");
row.classList.add("d-flex");
row.classList.add("justify-content-center");
container.appendChild(row);

const card = document.createElement('div');
card.classList.add("card");
card.classList.add("col-md-4");
card.classList.add("rounded-card");
card.classList.add("mx-3");
card.classList.add("my-3");
card.style.width="20rem";
row.appendChild(card);


const cardBody = document.createElement('div');
cardBody.classList.add("card-body");
card.appendChild(cardBody);


const iconWrapper = document.createElement('div');
iconWrapper.classList.add("icon-wrapper");
cardBody.appendChild(iconWrapper);


const cardTitle1 = document.createElement('h5');
cardTitle1.classList.add("card-title");
cardTitle1.classList.add("d-flex");
cardTitle1.classList.add("align-items-center");
cardTitle1.classList.add("mx-auto");
cardTitle1.style.width="1rem"
cardTitle1.style.height="6rem";
iconWrapper.appendChild(cardTitle1);

const star = document.createElement('i');
star.classList.add("fa-regular");
star.classList.add("fa-star");
star.style.color="#f2ec40";
cardTitle1.appendChild(star);

const cardTextWrapper = document.createElement('div');
cardTextWrapper.classList.add("my-5");
cardTextWrapper.classList.add("mx-auto");
cardBody.appendChild(cardTextWrapper);

const cardTitle2 = document.createElement('h5');
cardTitle2.classList.add("card-title");
cardTitle2.classList.add("test1");
cardTitle2.innerText="الافضل مشورة"
cardTextWrapper.appendChild(cardTitle2);

const cardText = document.createElement('p');
cardTitle2.classList.add("card-text");
cardTitle2.classList.add("test2");
cardTitle2.classList.add("mt-3");
cardText.innerHTML= "بالإضافة إلى استقلاليتنا في دراية، فقد طورناالعديد من الآليات الحصرية التي تساعد المستثمر على تكوين محافظ متنوعة وعلى انتقاء المنتجات الأفضل."
cardTextWrapper.appendChild(cardText);


// second card

const card2 = document.createElement('div');
card2.classList.add("card");
card2.classList.add("col-md-4");
card2.classList.add("rounded-card");
card2.classList.add("mx-3");
card2.classList.add("my-3");
card2.style.width="20rem";
row.appendChild(card2);


const cardBody2 = document.createElement('div');
cardBody2.classList.add("card-body");
card2.appendChild(cardBody2);


const iconWrapper2 = document.createElement('div');
iconWrapper2.classList.add("icon-wrapper");
cardBody2.appendChild(iconWrapper2);


const card2Title1 = document.createElement('h5');
card2Title1.classList.add("card-title");
card2Title1.classList.add("d-flex");
card2Title1.classList.add("align-items-center");
card2Title1.classList.add("mx-auto");
card2Title1.style.width="1rem"
card2Title1.style.height="6rem";
iconWrapper2.appendChild(card2Title1);

const star2 = document.createElement('i');
star2.classList.add("fa-regular");
star2.classList.add("fa-star");
star2.style.color="#f2ec40";
card2Title1.appendChild(star2);

const cardTextWrapper2 = document.createElement('div');
cardTextWrapper2.classList.add("my-5");
cardTextWrapper2.classList.add("mx-auto");
cardBody2.appendChild(cardTextWrapper2);

const card2Title2 = document.createElement('h5');
card2Title2.classList.add("card-title");
card2Title2.classList.add("test1");
card2Title2.innerText="الافضل مشورة"
cardTextWrapper2.appendChild(card2Title2);

const cardText2 = document.createElement('p');
card2Title2.classList.add("card-text");
card2Title2.classList.add("test2");
card2Title2.classList.add("mt-3");
cardText2.innerHTML= "بالإضافة إلى استقلاليتنا في دراية، فقد طورناالعديد من الآليات الحصرية التي تساعد المستثمر على تكوين محافظ متنوعة وعلى انتقاء المنتجات الأفضل."
cardTextWrapper2.appendChild(cardText2);

// third card

const card3 = document.createElement('div');
card3.classList.add("card");
card3.classList.add("col-md-4");
card3.classList.add("rounded-card");
card3.classList.add("mx-3");
card3.classList.add("my-3");
card3.style.width="20rem";
row.appendChild(card3);


const cardBody3 = document.createElement('div');
cardBody3.classList.add("card-body");
card3.appendChild(cardBody3);


const iconWrapper3 = document.createElement('div');
iconWrapper3.classList.add("icon-wrapper");
cardBody3.appendChild(iconWrapper3);


const card3Title1 = document.createElement('h5');
card3Title1.classList.add("card-title");
card3Title1.classList.add("d-flex");
card3Title1.classList.add("align-items-center");
card3Title1.classList.add("mx-auto");
card3Title1.style.width="1rem"
card3Title1.style.height="6rem";
iconWrapper3.appendChild(card3Title1);

const star3 = document.createElement('i');
star3.classList.add("fa-regular");
star3.classList.add("fa-star");
star3.style.color="#f2ec40";
card3Title1.appendChild(star3);

const cardTextWrapper3 = document.createElement('div');
cardTextWrapper3.classList.add("my-5");
cardTextWrapper3.classList.add("mx-auto");
cardBody3.appendChild(cardTextWrapper3);

const card3Title2 = document.createElement('h5');
card3Title2.classList.add("card-title");
card3Title2.classList.add("test1");
card3Title2.innerText="الافضل مشورة"
cardTextWrapper3.appendChild(card3Title2);

const cardText3 = document.createElement('p');
card3Title2.classList.add("card-text");
card3Title2.classList.add("test2");
card3Title2.classList.add("mt-3");
cardText3.innerHTML= "بالإضافة إلى استقلاليتنا في دراية، فقد طورناالعديد من الآليات الحصرية التي تساعد المستثمر على تكوين محافظ متنوعة وعلى انتقاء المنتجات الأفضل."
cardTextWrapper3.appendChild(cardText3);


// forth card

const row2 = document.createElement('div');
row2.classList.add("row");
row2.classList.add("d-flex");
row2.classList.add("justify-content-center");
container.appendChild(row2);

const card4 = document.createElement('div');
card4.classList.add("card");
card4.classList.add("col-md-4");
card4.classList.add("rounded-card");
card4.classList.add("mx-3");
card4.classList.add("my-3");
card4.style.width="20rem";
row2.appendChild(card4);


const cardBody4 = document.createElement('div');
cardBody4.classList.add("card-body");
card4.appendChild(cardBody4);


const iconWrapper4 = document.createElement('div');
iconWrapper4.classList.add("icon-wrapper");
cardBody4.appendChild(iconWrapper4);


const card4Title1 = document.createElement('h5');
card4Title1.classList.add("card-title");
card4Title1.classList.add("d-flex");
card4Title1.classList.add("align-items-center");
card4Title1.classList.add("mx-auto");
card4Title1.style.width="1rem"
card4Title1.style.height="6rem";
iconWrapper4.appendChild(card4Title1);

const star4 = document.createElement('i');
star4.classList.add("fa-regular");
star4.classList.add("fa-star");
star4.style.color="#f2ec40";
card4Title1.appendChild(star4);

const cardTextWrapper4 = document.createElement('div');
cardTextWrapper4.classList.add("my-5");
cardTextWrapper4.classList.add("mx-auto");
cardBody4.appendChild(cardTextWrapper4);

const card4Title2 = document.createElement('h5');
card4Title2.classList.add("card-title");
card4Title2.classList.add("test1");
card4Title2.innerText="الافضل مشورة"
cardTextWrapper4.appendChild(card4Title2);

const cardText4 = document.createElement('p');
card4Title2.classList.add("card-text");
card4Title2.classList.add("test2");
card4Title2.classList.add("mt-3");
cardText4.innerHTML= "بالإضافة إلى استقلاليتنا في دراية، فقد طورناالعديد من الآليات الحصرية التي تساعد المستثمر على تكوين محافظ متنوعة وعلى انتقاء المنتجات الأفضل."
cardTextWrapper4.appendChild(cardText4);


// fifth card

const card5 = document.createElement('div');
card5.classList.add("card");
card5.classList.add("col-md-4");
card5.classList.add("rounded-card");
card5.classList.add("mx-3");
card5.classList.add("my-3");
card5.style.width="20rem";
row2.appendChild(card5);


const cardBody5 = document.createElement('div');
cardBody5.classList.add("card-body");
card5.appendChild(cardBody5);


const iconWrapper5 = document.createElement('div');
iconWrapper5.classList.add("icon-wrapper");
cardBody5.appendChild(iconWrapper5);


const card5Title1 = document.createElement('h5');
card5Title1.classList.add("card-title");
card5Title1.classList.add("d-flex");
card5Title1.classList.add("align-items-center");
card5Title1.classList.add("mx-auto");
card5Title1.style.width="1rem"
card5Title1.style.height="6rem";
iconWrapper5.appendChild(card5Title1);

const star5 = document.createElement('i');
star5.classList.add("fa-regular");
star5.classList.add("fa-star");
star5.style.color="#f2ec40";
card5Title1.appendChild(star5);

const cardTextWrapper5 = document.createElement('div');
cardTextWrapper5.classList.add("my-5");
cardTextWrapper5.classList.add("mx-auto");
cardBody5.appendChild(cardTextWrapper5);

const card5Title2 = document.createElement('h5');
card5Title2.classList.add("card-title");
card5Title2.classList.add("test1");
card5Title2.innerText="الافضل مشورة"
cardTextWrapper5.appendChild(card5Title2);

const cardText5 = document.createElement('p');
card5Title2.classList.add("card-text");
card5Title2.classList.add("test2");
card5Title2.classList.add("mt-3");
cardText5.innerHTML= "بالإضافة إلى استقلاليتنا في دراية، فقد طورناالعديد من الآليات الحصرية التي تساعد المستثمر على تكوين محافظ متنوعة وعلى انتقاء المنتجات الأفضل."
cardTextWrapper5.appendChild(cardText5);

// sixth card

const card6 = document.createElement('div');
card6.classList.add("card");
card6.classList.add("col-md-4");
card6.classList.add("rounded-card");
card6.classList.add("mx-3");
card6.classList.add("my-3");
card6.style.width="20rem";
row2.appendChild(card6);


const cardBody6 = document.createElement('div');
cardBody6.classList.add("card-body");
card6.appendChild(cardBody6);


const iconWrapper6 = document.createElement('div');
iconWrapper6.classList.add("icon-wrapper");
cardBody6.appendChild(iconWrapper6);


const card6Title1 = document.createElement('h5');
card6Title1.classList.add("card-title");
card6Title1.classList.add("d-flex");
card6Title1.classList.add("align-items-center");
card6Title1.classList.add("mx-auto");
card6Title1.style.width="1rem"
card6Title1.style.height="6rem";
iconWrapper6.appendChild(card6Title1);

const star6 = document.createElement('i');
star6.classList.add("fa-regular");
star6.classList.add("fa-star");
star6.style.color="#f2ec40";
card6Title1.appendChild(star6);

const cardTextWrapper6 = document.createElement('div');
cardTextWrapper6.classList.add("my-5");
cardTextWrapper6.classList.add("mx-auto");
cardBody6.appendChild(cardTextWrapper6);

const card6Title2 = document.createElement('h5');
card6Title2.classList.add("card-title");
card6Title2.classList.add("test1");
card6Title2.innerText="الافضل مشورة"
cardTextWrapper6.appendChild(card6Title2);

const cardText6 = document.createElement('p');
card6Title2.classList.add("card-text");
card6Title2.classList.add("test2");
card6Title2.classList.add("mt-3");
cardText6.innerHTML= "بالإضافة إلى استقلاليتنا في دراية، فقد طورناالعديد من الآليات الحصرية التي تساعد المستثمر على تكوين محافظ متنوعة وعلى انتقاء المنتجات الأفضل."
cardTextWrapper6.appendChild(cardText6);


