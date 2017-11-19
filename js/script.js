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

   const addBtn = document.querySelector(".add-item"),
         removeBtn = document.querySelector(".remove-item"),
         itemsContainer = document.querySelector(".items-wrap"),
         firstItem = document.querySelectorAll(".item")[0];
   let count = 3;

   // Adding item
   function addItem (e) {
      e.preventDefault();
      count++;
      let newItem = firstItem.cloneNode(true);
      newItem.dataset.number = count;
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

   // Showing values
   const showBtn = document.querySelector(".show-items");

   function showValues(e) {
      e.preventDefault();
      console.log("---------------------------------------------------");
      let signField = document.querySelectorAll(".sign-field");
      for(let i of signField) {
         let boxType = i.parentNode.parentNode.parentNode.dataset.type.toUpperCase();
         let fieldName = i.parentNode.previousElementSibling.innerHTML;
         let fieldValue = i.value;
         let unitValue =  i.nextElementSibling.innerHTML;
         if(i.value !== ''){
            let itemNumber = i.parentNode.parentNode.parentNode.parentNode.dataset.number;
            console.log(`${boxType} #${itemNumber} ${fieldName} ${fieldValue} ${unitValue}`);
         }
      }
   };
   showBtn.addEventListener("click", showValues);
};
