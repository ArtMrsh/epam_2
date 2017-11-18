window.onload = function () {
   // Switching item type function
   function switchBoxType() {
      let toggleType = document.querySelectorAll(".toggleType");
      for(let i of toggleType) {
         i.addEventListener('change', function () {
            if(this.checked) {
               this.parentNode.nextElementSibling.classList.add('hide-box');
               this.parentNode.nextElementSibling.nextElementSibling.classList.add("show-box");
            } else {
               this.parentNode.nextElementSibling.classList.remove('hide-box');
               this.parentNode.nextElementSibling.nextElementSibling.classList.remove("show-box");
            };
         });
      };
   };
   // Switching item type initialization
   switchBoxType();

   const addBtn = document.querySelector(".add-item");
   const removeBtn = document.querySelector(".remove-item");
   const itemsContainer = document.querySelector(".items-wrap");
   const firstItem = document.querySelectorAll(".item")[0];
   let count = 3;

   // Adding item
   function addItem (e) {
      e.preventDefault();
      count++;
      let newItem = firstItem.cloneNode(true);
      newItem.className = `item ${count}`;
      itemsContainer.appendChild(newItem);
      switchBoxType();
   };
   // Removing item
   function removeItem(e) {
      e.preventDefault();
      let itemList = document.querySelectorAll(".item");
      let lastItem = itemList[itemList.length - 1];
      if(itemList.length > 1) {
         lastItem.remove();
         count--;
      }
   };
   addBtn.addEventListener("click", addItem);
   removeBtn.addEventListener("click", removeItem);

   const showBtn = document.querySelector(".show-items");
   function showItemsArr(e) {
      e.preventDefault();
      // parcelValues
      let parcelValues = document.querySelectorAll(".parcel-container .sign-field");
      for(let i of parcelValues) {
         let parcelFieldName = i.parentNode.previousElementSibling.innerHTML;
         let parcelFieldValue = i.value;
         let unitValue =  i.nextElementSibling.innerHTML;
         if(i.value !== ''){
            let parentCount = i.parentNode.parentNode.parentNode.parentNode.className;
            console.log(`PARCELS: ${parentCount} ${parcelFieldName} ${parcelFieldValue} ${unitValue}`);
         }
      }
      // Pallet values
      let palletValues = document.querySelectorAll(".pallet-container .sign-field");
      for(let i of palletValues) {
         let palletFieldName = i.parentNode.previousElementSibling.innerHTML;
         let palletFieldValue = i.value;
         let unitValue =  i.nextElementSibling.innerHTML;
         if(i.value !== '') {
            let parentCount = i.parentNode.parentNode.parentNode.parentNode.className;
            console.log(`PALLETS: ${parentCount} ${palletFieldName} ${palletFieldValue} ${unitValue}`);
         }
      }
   };
   showBtn.addEventListener("click", showItemsArr);
};
