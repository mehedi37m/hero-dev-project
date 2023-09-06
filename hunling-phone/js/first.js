const loadPhone = async (searchText, isShowAll) => {
  const res = await fetch(
    `https://openapi.programming-hero.com/api/phones?search=${searchText} `
  );
  const data = await res.json();
  phone = data.data;

  displayPhone(phone, isShowAll);
};

const displayPhone = (phone, isShowAll) => {
  const phoneContainer = document.getElementById("phone-container");
  phoneContainer.innerText = "";

  const showContainer = document.getElementById("show-container");
  if (phone.length > 12 && !isShowAll) {
    showContainer.classList.remove("hidden");
  } else {
    showContainer.classList.add("hidden");
  } 

  if (!isShowAll) {
    phone = phone.slice(0, 12);
  }

  phone.forEach((element) => {
    const phoneCard = document.createElement("div");
    phoneCard.classList = `card w-96 pt-5 bg-pink-100 shadow-xl`;
    phoneCard.innerHTML = `
  
  <figure><img src="${element.image}" alt="Shoes" /></figure>
  <div class="card-body">
    <h2 class="card-title">${element.phone_name}</h2>
    <p>If a dog chews shoes whose shoes does he choose?</p>
    <div class="card-actions justify-center">
       <button onclick ="handleShowDetails('${element.slug}')" class="btn btn-primary">Show Details</button>
    </div>
  </div>
  
  `;
    phoneContainer.appendChild(phoneCard);
  });
  toggleDots(false);
};

// first step
const handleSearch = (isShowAll) => {
  toggleDots(true);
  const searchField = document.getElementById("search-input");
  const searchText = searchField.value;
  loadPhone(searchText, isShowAll);
};

const toggleDots = (isLoading) => {
  const loadingDots = document.getElementById("loading-dots");
  if (isLoading) {
    loadingDots.classList.remove("hidden");
  } else {
    loadingDots.classList.add("hidden");
  }
};

const showAllContainer = () => {
  handleSearch(true);
};


const handleShowDetails = async (id) => {

  const res = await fetch(` https://openapi.programming-hero.com/api/phone/${id} `);
  const data = await res.json();
 const phone = data.data;
 showPhoneDetails(phone);

}

const showPhoneDetails = (phone) => {
  
  const phoneName = document.getElementById('show-phone-name');
  phoneName.innerText = phone.name;

  const showPhoneImg = document.getElementById('show-phone-img');
  showPhoneImg.innerHTML = `
  
  <img src="${phone.image}"/>
  `

  show_modal.showModal();
}