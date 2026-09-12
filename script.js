const bookingForm =
    document.getElementById("bookingForm");


bookingForm.addEventListener("submit", function(event) {

    event.preventDefault();


    // Get form values

    const name =
        document.getElementById("name").value;

    const phone =
        document.getElementById("phone").value;

    const checkin =
        document.getElementById("checkin").value;

    const checkout =
        document.getElementById("checkout").value;

    const room =
        document.getElementById("room").value;


    // Create WhatsApp message

    const message =
        `Hello Filsar's Snow White Resort!

I would like to make a booking enquiry.

Name: ${name}

Phone: ${phone}

Room: ${room}

Check-in: ${checkin}

Check-out: ${checkout}

Please let me know the availability and booking details.

Thank you!`;


    // Resort WhatsApp number

    const resortNumber =
        "916235501701";


    // Create WhatsApp URL

    const whatsappURL =
        `https://wa.me/${resortNumber}?text=${encodeURIComponent(message)}`;


    // Open WhatsApp

    window.open(
        whatsappURL,
        "_blank"
    );

});