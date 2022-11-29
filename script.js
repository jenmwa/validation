/************* VARIABLES INPUTS *************************************************/
// const submitBtn = document.querySelector('#submit');
// const resetBtn = document.querySelector('#reset');

// const nameField = document.querySelector('#firstname');
// const lastnameField = document.querySelector('#familyName');
// const adressField = document.querySelector('#adress');
// const zipField = document.querySelector('#zip');
// const cityField = document.querySelector('#city');
// const phoneField = document.querySelector('#phoneNumber');
// const emailField = document.querySelector('#email');

// const kreditDebit = document.querySelector('#kreditDebit');
// const invoice = document.querySelector('#invoice');

// const cardField = document.querySelector('#cardNumber');
// const cardDate = document.querySelector('#cardDate');
// const cardSecurity = document.querySelector('#cardSecurity');

// const socialSecurityField = document.querySelector('#socialSecurity');

// const gdpr = document.querySelector('#gdpr');
// const newsletter =document.querySelector('#newsletter');


// const formContainer = document.querySelector('#formOrder');

const formOrderInputs = Array.from(document.querySelector('.formOrder').querySelectorAll('input'));

/************* EVENT LISTENERS ********************************************/
for (let i = 0; i < formOrderInputs.length; i++) {
  formOrderInputs[i].addEventListener('change', checkInputs);
}

/************* FUNCTION CHECKNAME ********************************************/

function checkInputs() {
  console.log(formOrderInputs[0].value);
}

/************* ORDER FORM *************************************************/

function renderOrderForm() {
  // formContainer.innerHTML = '';

  // //for (let i = 0; i < formOrderList.length; i++)
  // {
  //   formContainer.innerHTML += `
  //   <form action="" onsubmit="validate()">
  //     <label>
  //     Namn:* 
  //       <input type="text" id="firstname" name="firstname" placeholder="Förnamn" /><br>
  //     </label>
  //     <label>
  //     Efternamn:* 
  //       <input type="text" id="familyName" name="familyName" placeholder="Efternamn"/> <br>
  //     </label>
  //     <label>
  //     Adress (gata):* 
  //       <input type="text" id="adress" name="adress" placeholder="Adress (gata)"/> <br>
  //     </label>
  //     <label>
  //     ev Portkod: 
  //       <input type="text" id="portkod" name="portkod" placeholder="portkod "/> <br>
  //     </label>
  //     <label>
  //     Postnummer:* 
  //       <input type="text" id="zip" name="zip" placeholder="postnummer" /><br>
  //     </label>
  //     <label>
  //     Postort:* 
  //       <input type="text" id="cirt" name="city" placeholder="postort" /><br>
  //     </label>
  //     <label>
  //     <label>
  //       Telefonnummer (mobil):     
  //       +46 <input type="tel" id="phoneNumber" name="phoneNumber" placeholder="07xxxxxxxx"/> <br>
  //     </label>  
  //     <label>
  //     Epost:* 
  //       <input type="text" id="email" name="email" placeholder="E-postadress"/> <br>
  //     </label>
        
  //     <fieldset>
  //       <legend>Betalalternativ:</legend>

  //       <label>
  //         <input type="radio" name="paymentOptions" id="debitKredit" />
  //         <span>Debit/Kreditkort</span>
  //       </label>

  //       <label>
  //         <input type="radio" name="paymentOptions" id="invoice" />
  //         <span>Faktura</span>
  //       </label>

  //       <div class="cardPayment">
  //           <label>
  //             <span>Kortnummer:</span><br />
  //             <input type="number" name="cardNumber" id="cardNumber" /><br />
  //           </label>

  //           <label>
  //             <span>Datum/år:</span><br />
  //             <input type="month" name="cardDate" id="cardDate" /><br />
  //           </label>

  //           <label>
  //             <span>CVC:</span><br />
  //             <input type="number" name="cardSecurity" id="cardSecurity" />
  //           </label>
  //         </div>

  //         <div class="fakturaPayment">
  //           <label>
  //             <div class="errorMessage"></div>
  //             <span>Personnummer:*</span><br>
  //             <input
  //               type="text"
  //               name="socialSecurity"
  //               id="socialSecurity"
  //               minlength="10"
  //               maxlength="10"
  //               placeholder="ÅÅMMDDXXXX"
  //             />
  //           </label>
  //         </div>
  //       </fieldset>

  //       <label>
  //         <input type="checkbox" id="gdpr" name="gdpr" required />
  //         <span>Godkännande för behandling av personuppgifter.*</span><br />
  //       </label>

  //       <label>
  //         <input type="checkbox" id="newsletter" name="newsletter" checked />
  //         <span>Få vårat nyhetsbrev en gång i veckan för alla nyheter och erbjudanden.</span><br />
  //       </label>
  //     </form>
  //   <br><br>
  //       <button id="submit" type="submit" disabled>Submit</button> <br>
  //       <button id="reset">Reset</button><br>
  //   `;
  // }
}
renderOrderForm();

/*******************************************************************/


// //function validate data
// function validate(){
    
//     console.log(document.querySelector('#firstname').value);

//     const firstnameRGEX = /^[a-zåäöü\-.\s]{2,}$/i; // aö-AÖ //minst 2 bokstäver men tillåter dubbelnamn och dubbelefternamn
//     const familyNameRGEX = /^[a-zåäöü\-.\s]{2,}$/i; // az-AZ //minst 2 bokstäver
//     const adressRGEX = /^(?:[A-ZÅÄÖa-zåäö0-9]+\s)\d{1,}\s{0,7}(?:[A-ZÅÄÖa-zåäö0-9#])|(?:[A-ZÅÄÖa-zåäö]+\s){0,3}(?:[A-ZÅÄÖa-zåäö]+)\s*\d{1,}$/; // minst 2 bokstäver, minst 1 siffra |([A-ZÅÄÖa-zåäö0-9])
//     const zipRGEX = /^[0-9]{3}\s?[0-9]{2}$/; // godkänner siffror [xxxxx] [xxx xx]
//     const cityRGEX = /^[a-zåäöü\-.\s]{2,}$/i;
//     const phoneRGEX = /^(\s*(7)|07)([0-9][ -]*){7}[0-9]$/; //godkänner mobilnummer i ett, med eller utan 0 i början & mellanslag efter 2-3siffror. //få till 070,072,073,076,079? ^(([+]46)\s*(7)|07)[02369]\s*(\d{4})\s*(\d{3})$
//     const emailRGEX = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/; //det måste vara med @, och 2-3adress som godkänner -. och 
//     const idRGEX = /^(19|20)?(\d{6}([-+]|\s)\d{4}|(?!19|20)\d{10})$/; //personnummer, ååmmddxxxx, ååååmmddxxxx, ååmmdd-| xxxx, ååååmmdd-|xxxx,

//     const firstnameResult = firstnameRGEX.test(firstname);
//     const familyNameResult = familyNameRGEX.test(familyName);
//     const adressResult = adressRGEX.test(adress);
//     const ziplResult = zipRGEX.test(zip);
//     const cityResult = cityRGEX.tezt(zip);
//     const phoneResult = phoneRGEX.test(phoneNumber);
//     const emailResult = emailRGEX.test(email);
//     const idResult = idRGEX.test(id);

//     function validate() {
//       if (/^[a-zåäöü\-.\s]{2,}$/i.test(firstname)){
//         document.querySelector('#nameMessage') = `'<span class="material-symbols-outlined">
//         check
//         </span>'`
//     } else {
//       document.querySelector('#nameMessage').innerHTML = `'har du skrivit ditt namn med bokstäver?'`
//     }
//   }
    



    


//     // alert(
//     //     `firstname: ${firstnameResult}  
//     //     familyName: ${familyNameResult} 
//     //     adress: ${adressResult} 
//     //     zip: ${postalResult} 
//     //     phone: ${phoneResult} 
//     //     email: ${emailResult} 
//     //     id: ${idResult} ` 

//     //     );
    
//   }
// // /*

//   function checkInputNotEmpty(fieldName, errorFieldId) {
//     let inputField = document.querySelector(fieldName).value;
//     const errorField = document.getElementById(errorFieldId);
  
//     if (inputField.length == 0) {
//       document.getElementById(errorFieldId).innerHTML = '*';
//       return false;
//     }
//     errorField. innerHTML = `<span class="material-symbols-outlined">
//     check
//     </span>
//     'check'`;
  
//     return true;
//   }

//   validateInput('zipCode', 'zipCodeError');

  //HTMLstruktur
//   <div id="zipCodeError"></div>
//   <input id="zipCode" type="number"></input>*/

