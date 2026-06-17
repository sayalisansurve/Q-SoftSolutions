let prevScrollPos = window.pageYOffset;
const navbar = document.getElementById("top-header");

window.onscroll = function() {
  let currentScrollPos = window.pageYOffset;
  if (prevScrollPos > currentScrollPos) {
    // scrolling up → show navbar
    navbar.style.top = "0";
  } else {
    // scrolling down → hide navbar
    navbar.style.top = "-80px"; // adjust based on navbar height
    
  }
  prevScrollPos = currentScrollPos;
}
function sendToWhatsApp() {
    // 1. Enter the business WhatsApp number (with country code, no '+')
    const phoneNumber = "9890895464"; 
  console.log("whatsapp");
    // 2. Get form values
    const name = document.querySelector('input[placeholder="Your Name"]').value;
    const phone = document.querySelector('input[placeholder="Phone Number"]').value;
    // const service = document.querySelector('select').value;
    const message = document.querySelector('textarea').value;
    const isNumeric = /^\d+$/.test(phone);
    if (!isNumeric){
      alert("Invalid phone number: contains non-numeric characters");
    }
    else if(!name||!phone){
      alert ("No Name or Phone.")
    }
    else{
    // 3. Create the encoded message
    const text = `*New Enquiry from Website*%0A%0A` +
                 `*Name:* ${name}%0A` +
                 `*Phone:* ${phone}%0A` +
                 `*Message:* ${message}`;

    // 4. Open WhatsApp
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${text}`;
    window.open(whatsappUrl, '_blank');
    }
}
