

function validate(){
    const firstname = document.querySelector('#firstname').value;
    const familyName = document.querySelector('#familyName').value;
    const adress = document.querySelector('#adress').value;
    const postalCode = document.querySelector('#postalCode').value;
    const phoneNumber = document.querySelector('#phoneNumber').value;
    const email = document.querySelector('#email').value;
    const id = document.querySelector('#id').value;

    const firstnameRGEX = /^[a-zåäöüA-ZÅÄÖÜ\-.\s]{2,}$/; // aö-AÖ //minst 2 bokstäver men tillåter dubbelnamn och dubbelefternamn
    const familyNameRGEX = /^[a-zåäöüA-ZÅÄÖÜ\-.\s]{2,}$/; // az-AZ //minst 2 bokstäver
    const adressRGEX = /^(?:[A-ZÅÄÖa-zåäö0-9]+\s)\d{1,}\s{0,7}(?:[A-ZÅÄÖa-zåäö0-9#])|(?:[A-ZÅÄÖa-zåäö]+\s){0,3}(?:[A-ZÅÄÖa-zåäö]+)\s*\d{1,}$/; // minst 2 bokstäver, minst 1 siffra |([A-ZÅÄÖa-zåäö0-9])
    const postalRGEX = /^[0-9]{3}\s?[0-9]{2}$/; // godkänner siffror [xxxxx] [xxx xx]
    const phoneRGEX = /^(\s*(7)|07)([0-9][ -]*){7}[0-9]$/; //godkänner mobilnummer i ett, med eller utan 0 i början & mellanslag efter 2-3siffror. //få till 070,072,073,076,079? ^(([+]46)\s*(7)|07)[02369]\s*(\d{4})\s*(\d{3})$
    const emailRGEX = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/; //det måste vara med @, och 2-3adress som godkänner -. och 
    const idRGEX = /^(19|20)?(\d{6}([-+]|\s)\d{4}|(?!19|20)\d{10})$/; //personnummer, ååmmddxxxx, ååååmmddxxxx, ååmmdd-| xxxx, ååååmmdd-|xxxx,

    const firstnameResult = firstnameRGEX.test(firstname);
    const familyNameResult = familyNameRGEX.test(familyName);
    const adressResult = adressRGEX.test(adress);
    const postalResult = postalRGEX.test(postalCode);
    const phoneResult = phoneRGEX.test(phoneNumber);
    const emailResult = emailRGEX.test(email);
    const idResult = idRGEX.test(id);
    

    alert(
        `firstname: ${firstnameResult}  
        familyName: ${familyNameResult} 
        adress: ${adressResult} 
        postalCode: ${postalResult} 
        phone: ${phoneResult} 
        email: ${emailResult} 
        id: ${idResult} ` 

        );
    
  }

