document.querySelector('#inputs').innerHTML = `
<section class="formOrder" id="formOrder">
  <form id="formContainer">

    <label class="side">
    Namn:* 
      <input type="text" id="firstname" name="firstname" placeholder="Förnamn" /><br>
      <div id="nameError"></div>
    </label>

    <label class="side">
    Efternamn:* 
      <input type="text" id="lastname" name="lastname" placeholder="Efternamn"/> <br>
      <div id="lastnameError"></div>
    </label>

    <label class="side">
    Adress (gata):* 
      <input type="text" id="adress" name="adress" placeholder="Adress (gata)"/> <br>
      <div id="adressError"></div>
    </label>

    <label class="side">
    ev Portkod: 
      <input type="text" id="portkod" name="portkod" placeholder="portkod "/> <br>
    </label>

    <label class="side">
    Postnummer:* 
      <input type="text" id="zip" name="zip" placeholder="postnummer" /><br>
      <div id="zipError"></div>
    </label>

    <label class="side">
    Postort:* 
      <input type="text" id="city" name="city" placeholder="postort" /><br>
      <div id="cityError"></div>
    </label>

    <label>
    <label class="side">
      Telefonnummer (mobil):     
      (+46)<input type="tel" id="phoneNumber" name="phoneNumber" placeholder="07xxxxxxxx"/> <br>
      <div id="phoneError"></div>
    </label>

    <label class="side">
    Epost:* 
      <input type="text" id="email" name="email" placeholder="E-postadress"/> <br>
      <div id="emailError"></div>
    </label>
      
    <fieldset>
      <legend>Betalalternativ:</legend>
        <label>
          <input type="radio" name="paymentOptions" id="debitCredit" />
          <span>Debit/Kreditkort</span>
        </label>

        <label>
          <input type="radio" name="paymentOptions" id="invoice" />
          <span>Faktura</span>
        </label>

        <div class="cardPayment">
          <label class="side">
            <span>Kortnummer:</span><br />
            <input type="number" name="cardNumber" id="cardNumber" /><br />
          </label>

          <label class="side">
            <span>Datum/år:</span><br />
            <input type="month" name="cardDate" id="cardDate" /><br />
          </label>

          <label class="side">
            <span>CVC:</span><br />
            <input type="number" name="cardSecurity" id="cardSecurity" />
          </label>
        </div>

        <div class="invoicePayment">
            <label class="side">
            <span>Personnummer:*</span><br>
            <input
              type="text"
              name="socialSecurity"
              id="socialSecurity"
              placeholder="ÅÅMMDDXXXX"
            />
            <div id="socialSecurityError"></div>
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
     <button id="reset" >Rensa Formulär</button><br>
</section>`;

/************* VARIABLES INPUTS *************************************************/

const submitBtn = document.querySelector('#submit');
//const resetBtn = document.querySelector('#reset');

const formOrderFirstName = document.querySelector('#firstname');
const formOrderLastName = document.querySelector('#lastname');
const formOrderAdress = document.querySelector('#adress');
const formOrderZipcode = document.querySelector('#zip');
const formOrderCity = document.querySelector('#city');
const formOrderPhone = document.querySelector('#phoneNumber');
const formOrderEmail = document.querySelector('#email');

const cardRadio = document.querySelector('#debitCredit');
const invoiceRadio = document.querySelector('#invoice');

const cardPayment = document.querySelector('.cardPayment');
const invoicePayment = document.querySelector('.invoicePayment');

const socialSecurityField = document.querySelector('#socialSecurity');

const gdpr = document.querySelector('#gdpr');
const newsletter =document.querySelector('#newsletter');

let isFirstname = false;
let isLastname = false;
let isAdress = false;
let isZipcode = false;
let isCity = false;
let isTelephone = false;
let isEmail = false;
let isDebitCredit = false;
let isInvoice = false;
let isSocialSecurity = false;
let isGdpr = false;
  


 const formOrderInputs = Array.from(document.querySelector('.formOrder').querySelectorAll('input'));

/************* EVENT LISTENERS ********************************************/
 for (let i = 0; i < formOrderInputs.length; i++) {
   formOrderInputs[i].addEventListener('change', checkInputs);
 }

  // formOrderFirstName.addEventListener('change', checkName);
  // formOrderLastName.addEventListener('change', checkLastname);
  // formOrderAdress.addEventListener('change', checkAdress);
  // formOrderZipcode.addEventListener('change', checkZip);
  // formOrderCity.addEventListener('change', checkCity);
  // formOrderPhone.addEventListener('change', checkPhone);
  // formOrderEmail.addEventListener('change', checkEmail);
  // socialSecurityField.addEventListener('change', checkSocialSecurity);

console.log(formOrderInputs);

/************* FUNCTION CHECKNAME ********************************************/

 const firstnameRGEX = /^[a-zåäöü\-.\s]{2,}$/i;
 const lastnameRGEX = /^[a-zåäöü\-.\s]{2,}$/i;

function checkInputs(e) { 
  // const input = e.currentTarget.id;
  // const value = e.currentTarget.value;
  // console.log(e.currentTarget.id);
  // console.log(e.currenTarget.value);
   let getId = e.target.id;
   let getValue = e.target.value;
   console.log(e.target.id);
   console.log(e.target.value);

  // if (getId == 'debitKredit' && e.target.checked) {
  //   isDebitKredit = true;
  //   isInvoice = false;
  //   document.querySelector('#socialSecurity').required = false;
  // }
  // if (getId == 'invoice' && e.target.checked) {
  //   isInvoice = true;
  //   isDebitKredit = false;
  //   document.querySelector('#socialSecurity').required = true;
  // }
  //   if (getId == 'gdpr' && e.target.checked) {
  //     isGdpr = true;
  //   } else if (getId == 'gdpr' && !e.target.checked) {
  //     isGdpr = false;
  //   }
  //   console.log(e.target);
  // checkFormValid();


  if (firstnameRGEX.test(getId && getValue)) {
    isLastname = true;
    nameError.innerHTML = `<span class="material-symbols-outlined">
   check
   </span>`;
 } else {
  isFirstname = false;
   nameError.innerHTML = '  ange namn med minst 2 bokstäver.';
 }

 if( lastnameRGEX.test(getId && getValue)) {
  isLastname = true;
   lastnameError.innerHTML = `<span class="material-symbols-outlined">
   check
   </span>`
 } else {
  isFirstname = false;
   lastnameError.innerHTML = '  ange namn med minst 2 bokstäver.';
 }
 checkFormValid();
};



// };


// checkFormValid();
function checkName() { 
  if (/^[a-zåäöü\-.\s]{2,}$/i.test(formOrderFirstName.value)) { 
    isFirstname = true;
   nameError.innerHTML = `<span class="material-symbols-outlined">
   check
   </span>`;
 } else {
  isFirstname = false;
   nameError.innerHTML = '  ange namn med minst 2 bokstäver.';
 }
 checkFormValid();

//  console.log ('namnet är', isFirstname);
//  console.log(formOrderFirstName.value);
}

function checkLastname() { 
  if (/^[a-zåäöü\-.\s]{2,}$/i.test(formOrderLastName.value)){
    isLastname = true;
    lastnameError.innerHTML = `<span class="material-symbols-outlined">
   check
   </span>`;
 } else {
    isLastname = false;
    lastnameError.innerHTML = ' ange efternamn med minst 2 bokstäver.';
 }
 checkFormValid();

//  console.log ('efternamnet är', isLastname);
//  console.log(formOrderLastName.value);
}

function checkAdress() {
  if (/^(?:[A-ZÅÄÖ0-9]+\s)\d{1,}\s{0,7}(?:[A-ZÅÄÖ0-9#])|(?:[A-ZÅÄÖ]+\s){0,3}(?:[A-ZÅÄÖ]+)\s*\d{1,}$/i.test(formOrderAdress.value)) {
    isAdress = true;
    adressError.innerHTML = `<span class="material-symbols-outlined">
  check
  </span>`;
} else {
  isAdress = false;
    adressError.innerHTML = ' ange gata och gatnummer.';
}
checkFormValid();
}

function checkZip() { 
   if (/^[0-9]{3}\s?[0-9]{2}\s?$/.test(formOrderZipcode.value)) { 
    isZipcode = true;
    zipError.innerHTML = `<span class="material-symbols-outlined">
    check
    </span>`;
  } else {
    isZipcode = false;
    zipError.innerHTML = '  ange 5 siffror.';
  }
  checkFormValid();
}

function checkCity() {
  if (/^[a-zåäöü\-.\s]{2,}$/i.test(formOrderCity.value)) {
    isCity = true;
    cityError.innerHTML = `<span class="material-symbols-outlined">
    check
    </span>`;
  } else {
    isCity = false;
    cityError.innerHTML = ' ange postort med minst 2 bokstäver';
  }
  checkFormValid();
  // console.log ('city är', isCity);
  // console.log(formOrderCity.value);
}

function checkPhone() {
  if (/^(\s*(7)|07)([0-9][ -]*){7}[0-9]$/.test(formOrderPhone.value)){
    isTelephone = true;
    phoneError.innerHTML = `<span class="material-symbols-outlined">
    check
    </span>`;
  } else {
    isTelephone = false;
    phoneError.innerHTML = '  ange mobilnummer som börjar på 07 eller 7';
  }
  checkFormValid();
}

function checkEmail() {
  if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/i.test(formOrderEmail.value)){
    isEmail = true;
    emailError.innerHTML = `<span class="material-symbols-outlined">
    check
    </span>`;
  } else {
    isEmail = false;
    emailError.innerHTML = '  ange giltig epostadress';
  }
  checkFormValid();
}

// Open card payment option
function cardPaymentOpen() {
  if (cardRadio.checked) {
    cardPayment.classList.add('paymentOpen');
    invoicePayment.classList.remove('paymentOpen');
  }
  checkFormValid();
}

// Open invoice payment option
function invoicePaymentOpen() {
  if (invoiceRadio.checked) {
    invoicePayment.classList.add('paymentOpen');
    cardPayment.classList.remove('paymentOpen');
  }
  checkFormValid();
}

function checkSocialSecurity() {
  if(/^(19|20)?(\d{6}([-+]|\s)\d{4}|(?!19|20)\d{10})$/.test(socialSecurityField.value)) {
    isSocialSecurity = true;
    socialSecurityError.innerHTML = ` <span class="material-symbols-outlined">
    check
    </span>`;
  } else {
    isSocialSecurity = false;
    socialSecurityError.innerHTML = ` ange giltigt personnummer, 10 eller 12 siffror`;
  }
  checkFormValid();
}




/************** RESET FUNCTION **********************************************/ 

 const resetBtn = document.getElementById('reset');

  function resetInputs () {
    gdpr.removeAttribute("required");
    const element =document.getElementById('formContainer');
    element.reset();
  }

 resetBtn.addEventListener('click', resetInputs);

// function resetInputs(form) {
//   document.getElementById('gdpr').required = false;

//   // clearing inputs
//   var inputs = form.getElementsByTagName('input');
//   for (var i = 0; i <inputs.length; i++) {
//       switch (inputs[i].type) {
//           case 'text':
//               inputs[i].value = '';
//               break;
//           case 'radio':
//           case 'checkbox':
//             case 'required':
//               inputs[i].checked = false;   
//       }
//   }
// }



// function resetInput() {
  
//   document.getElementById("newsletter").disabled = true;
//   const inputs = document.querySelectorAll('#firstname, #lastname, #adress, #zip, #city, #email, #phoneNumber, #debitCredit, #invoice #gdpr, #newsletter');
//   const chech = document.qe
//   inputs.forEach(input => {
//     input.value = '';
//   });
// };


/************* SUBMIT ORDER BTN *********************************************/

// Function to check if all inputs are valid, make submit button enabled
  function checkFormValid() {
    const submitBtn = document.querySelector('#submit');
  
    if ( isFirstname &&
      isLastname &&
      isAdress &&
      isZipcode &&
      isCity &&
      isTelephone &&
      isEmail &&
      isDebitCredit //|| (isInvoice && isSocialSecurity)) &&
      // isGdpr
      )
      {

      submitBtn.removeAttribute('disabled');
    }

 }

/********************* ÖPPNA STÄNG INVOICE CARD **********************************/

// // Card/invoice buttons
// const cardRadio = document.querySelector('#debitCredit');
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

     //const firstnameRGEX = /^[a-zåäöü\-.\s]{2,}$/i; // aö-AÖ //minst 2 bokstäver men tillåter dubbelnamn och dubbelefternamn
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


