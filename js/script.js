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
         removeBtn = document.querySelector(".remove-item");
   let count = 3;

   // Adding item
   function addItem (e) {
      e.preventDefault();
      const itemsContainer = document.querySelector(".items-wrap");
      const firstItem = document.querySelectorAll(".item")[0];
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
      console.clear();
      let sendCountry = document.querySelector(".sender").value,
          recipientCountry = document.querySelector(".recipient").value,
          sendAdress = document.querySelector(".send-adress").value,
          recipientAdress = document.querySelector(".recipient-adress").value;
      console.log(`Sender: ${sendCountry}, ${sendAdress} -  Recipient: ${recipientCountry}, ${recipientAdress}`);
      let valueContainers = document.querySelectorAll(".value-field");
      for(let i of valueContainers) {
         let boxType = i.parentNode.parentNode.parentNode.dataset.type.toUpperCase(),
             fieldName = i.parentNode.previousElementSibling.innerHTML,
             fieldValue = i.value,
             unitValue =  i.nextElementSibling.innerHTML;
         if(i.value !== ''){
            let itemNumber = i.parentNode.parentNode.parentNode.parentNode.dataset.number;
            console.log(`${boxType} #${itemNumber} ${fieldName} ${fieldValue} ${unitValue}`);
         }
      }
   };
   showBtn.addEventListener("click", showValues);
};
