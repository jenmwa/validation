/************* VARIABLES INPUTS *************************************************/

const formContainer = document.querySelector('#formContainer');

const submitBtn = document.querySelector('#submit');
// const resetBtn = document.querySelector('#reset');

const nameField = document.querySelector('#firstname');
const lastnameField = document.querySelector('#familyName');
const adressField = document.querySelector('#adress');
const zipField = document.querySelector('#zip');
const cityField = document.querySelector('#city');
const phoneField = document.querySelector('#phoneNumber');
const emailField = document.querySelector('#email');

const cardRadio = document.querySelector('#creditDebit');
const invoiceRadio = document.querySelector('#invoice');

const cardPayment = document.querySelector('.cardPayment');
const invoicePayment = document.querySelector('.invoicePayment');

// const cardField = document.querySelector('#cardNumber');
// const cardDate = document.querySelector('#cardDate');
// const cardSecurity = document.querySelector('#cardSecurity');

const socialSecurityField = document.querySelector('#socialSecurity');

const gdpr = document.querySelector('#gdpr');
// const newsletter =document.querySelector('#newsletter');




  let nameIsOk = false;
  let lastnameIsOk = false;
  let adressIsOk = false;
  let zipIsOk = false;
  let cityIsOk = false;
  let phoneIsok = false;
  let emailIsOk = false;
  let isDebitCredit = false;
  let isInvoice = false;
  let isSocialSecurity = false;
  let isGdpr = false;
  

//const formOrderInputs = Array.from(document.querySelector('.formOrder').querySelectorAll('input'));

/************* EVENT LISTENERS ********************************************/
// for (let i = 0; i < formOrderInputs.length; i++) {
//   formOrderInputs[i].addEventListener('change', checkInputs);
// }
  nameField.addEventListener('change', checkName);
  lastnameField.addEventListener('change', checkLastname);
  adressField.addEventListener('change', checkAdress);
  zipField.addEventListener('change', checkZip);
  cityField.addEventListener('change', checkCity);
  phoneField.addEventListener('change', checkPhone);
  emailField.addEventListener('change', checkEmail);
  socialSecurityField.addEventListener('change', checkSocialSecurity);

  

//console.log(formOrderInputs);

/************* FUNCTION CHECKNAME ********************************************/



function checkInputs() {};

function checkName() { 
  if (/^[a-zåäöü\-.\s]{2,}$/i.test(nameField.value)) { 
   nameIsOk = true;
   nameError.innerHTML = `<span class="material-symbols-outlined">
   check
   </span>`;
 } else {
   nameIsOk = false;
   nameError.innerHTML = 'ange namn med minst 2 bokstäver.';
 }
 checkFormValid();

 console.log ('namnet är', nameIsOk);
 console.log(nameField.value);
}

function checkLastname() { 
  if (/^[a-zåäöü\-.\s]{2,}$/i.test(lastnameField.value)){
    lastnameIsOk = true;
    lastnameError.innerHTML = `<span class="material-symbols-outlined">
   check
   </span>`;
 } else {
    lastnameIsOk = false;
    lastnameError.innerHTML = 'ange efternamn med minst 2 bokstäver.';
 }
 checkFormValid();

 console.log ('efternamnet är', lastnameIsOk);
 console.log(lastnameField.value);
}

function checkAdress() {
  if (/^(?:[A-ZÅÄÖ0-9]+\s)\d{1,}\s{0,7}(?:[A-ZÅÄÖ0-9#])|(?:[A-ZÅÄÖ]+\s){0,3}(?:[A-ZÅÄÖ]+)\s*\d{1,}$/i.test(adressField.value)) {
    adressIsOk = true;
    adressError.innerHTML = `<span class="material-symbols-outlined">
  check
  </span>`;
} else {
    adressIsOk = false;
    adressError.innerHTML = 'ange gata och gatnummer.';
}
checkFormValid();
}

function checkZip() { 
   if (/^[0-9]{3}\s?[0-9]{2}\s?$/.test(zipField.value)) { //
    zipIsOk = true;
    zipError.innerHTML = `<span class="material-symbols-outlined">
    check
    </span>`;
  } else {
    zipIsOk = false;
    zipError.innerHTML = 'ange 5 siffror.';
  }
  checkFormValid();

  console.log ('zip är', zipIsOk);
  console.log(zipField.value);
}

function checkCity() {
  if (/^[a-zåäöü\-.\s]{2,}$/i.test(cityField.value)) {
    cityIsOk = true;
    cityError.innerHTML = `<span class="material-symbols-outlined">
    check
    </span>`;
  } else {
    cityIsOk = false;
    cityError.innerHTML = 'ange postort med minst 2 bokstäver';
  }
  checkFormValid();
}

function checkPhone() {
  if (/^(\s*(7)|07)([0-9][ -]*){7}[0-9]$/.test(phoneField.value)){
    phoneIsOk = true;
    phoneError.innerHTML = `<span class="material-symbols-outlined">
    check
    </span>`;
  } else {
    phoneIsOk = false;
    phoneError.innerHTML = 'ange mobilnummer som börjar på 07 eller 7';
  }
  checkFormValid();
}

function checkEmail() {
  if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/i.test(emailField.value)){
    emailIsOk = true;
    emailError.innerHTML = `<span class="material-symbols-outlined">
    check
    </span>`;
  } else {
    emailIsOk = false;
    emailError.innerHTML = 'ange giltig epostadress';
  }
  checkFormValid();
}

// Open card payment option
function cardPaymentOpen() {
  if (cardRadio.checked) {
    cardPayment.classList.add('paymentOpen');
    fakturaPayment.classList.remove('paymentOpen');
  }
  checkFormValid();
}

// Open invoice payment option
function fakturaPaymentOpen() {
  if (invoiceRadio.checked) {
    fakturaPayment.classList.add('paymentOpen');
    cardPayment.classList.remove('paymentOpen');
  }
  checkFormValid();
}

function checkSocialSecurity() {
  if(/^(19|20)?(\d{6}([-+]|\s)\d{4}|(?!19|20)\d{10})$/.test(socialSecurityField.value)) {
    isSocialSecurity = true;
    socialSecurityError.innerHTML = `<span class="material-symbols-outlined">
    check
    </span>`;
  } else {
    isSocialSecurity = false;
    socialSecurityError.innerHTML = `ange giltigt personnummer, 10 eller 12 siffror`;
  }
  checkFormValid();
}

if (getId == 'gdpr' && e.target.checked) {
    isGdpr = true;
  } else if (getId == 'gdpr' && !e.target.checked) {
    isGdpr = false;
  }

  checkFormValid();


/************* SUBMIT ORDER BTN *********************************************/

// Function to check if all inputs are valid, make submit button enabled
  function checkFormValid() {
  
    if ( nameIsOk &&
      lastnameIsOk &&
      adressIsOk &&
      zipIsOk &&
      cityIsOk &&
      phoneIsOk &&
      emailIsOk &&
      (isDebitKredit || (isInvoice && isSocialSecurity)) &&
      isGdpr) {

      submitBtn.removeAttribute('disabled');
    }
    console.log(submitBtn);
 }

/************* ORDER FORM *************************************************/

function renderOrderForm() {


    formContainer.innerHTML += `
    <section class="formOrder" id="formOrder">
    <form action="" onsubmit="validate()">
      <label>
      Namn:* 
        <input type="text" id="firstname" name="firstname" placeholder="Förnamn" /><br>
      </label>
      <label>
      Efternamn:* 
        <input type="text" id="familyName" name="familyName" placeholder="Efternamn"/> <br>
      </label>
      <label>
      Adress (gata):* 
        <input type="text" id="adress" name="adress" placeholder="Adress (gata)"/> <br>
      </label>
      <label>
      ev Portkod: 
        <input type="text" id="portkod" name="portkod" placeholder="portkod "/> <br>
      </label>
      <label>
      Postnummer:* 
        <input type="text" id="zip" name="zip" placeholder="postnummer" /><br>
      </label>
      <label>
      Postort:* 
        <input type="text" id="cirt" name="city" placeholder="postort" /><br>
      </label>
      <label>
      <label>
        Telefonnummer (mobil):     
        +46 <input type="tel" id="phoneNumber" name="phoneNumber" placeholder="07xxxxxxxx"/> <br>
      </label>  
      <label>
      Epost:* 
        <input type="text" id="email" name="email" placeholder="E-postadress"/> <br>
      </label>
        
      <fieldset>
        <legend>Betalalternativ:</legend>

        <label>
          <input type="radio" name="paymentOptions" id="debitKredit" />
          <span>Debit/Kreditkort</span>
        </label>

        <label>
          <input type="radio" name="paymentOptions" id="invoice" />
          <span>Faktura</span>
        </label>

        <div class="cardPayment">
            <label>
              <span>Kortnummer:</span><br />
              <input type="number" name="cardNumber" id="cardNumber" /><br />
            </label>

            <label>
              <span>Datum/år:</span><br />
              <input type="month" name="cardDate" id="cardDate" /><br />
            </label>

            <label>
              <span>CVC:</span><br />
              <input type="number" name="cardSecurity" id="cardSecurity" />
            </label>
          </div>

          <div class="fakturaPayment">
            <label>
              <div class="errorMessage"></div>
              <span>Personnummer:*</span><br>
              <input
                type="text"
                name="socialSecurity"
                id="socialSecurity"
                minlength="10"
                maxlength="10"
                placeholder="ÅÅMMDDXXXX"
              />
            </label>
          </div>
        </fieldset>

        <label>
          <input type="checkbox" id="gdpr" name="gdpr" required />
          <span>Godkännande för behandling av personuppgifter.*</span><br />
        </label>

        <label>
          <input type="checkbox" id="newsletter" name="newsletter" checked />
          <span>Få vårat nyhetsbrev en gång i veckan för alla nyheter och erbjudanden.</span><br />
        </label>
      </form>
    <br><br>
        <button id="submit" type="submit" disabled>Submit</button> <br>
        <button id="reset">Reset</button><br>
      </section>
    `;
  // }
}
renderOrderForm();

/********************* ÖPPNA STÄNG INVOICE CARD **********************************/

// // Card/invoice buttons
// const cardRadio = document.querySelector('#debitKredit');
// const invoiceRadio = document.querySelector('#invoice');

// // Card/invoice inputs
// const cardPayment = document.querySelector('.cardPayment');
// const fakturaPayment = document.querySelector('.fakturaPayment');

// // Open card payment option
// function cardPaymentOpen(e) {
//   if (cardRadio.checked) {
//     cardPayment.classList.add('paymentOpen');
//     fakturaPayment.classList.remove('paymentOpen');
//   }
// }

// // Open invoice payment option
// function fakturaPaymentOpen(e) {
//   if (invoiceRadio.checked) {
//     fakturaPayment.classList.add('paymentOpen');
//     cardPayment.classList.remove('paymentOpen');
//   }
// }

// // Form eventlisteners
// cardRadio.addEventListener('change', cardPaymentOpen);
// invoiceRadio.addEventListener('change', fakturaPaymentOpen);

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

