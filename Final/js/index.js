$( "#header" ).load( "../html/navigation_bar.html" ); // connects nav bar to all pages

$( "#footer" ).load( "../html/footer.html" );  // connects footer to all pages

// the following js relates to form submission on connect.html - plan to update to Vue and use regex(?) to validate email

// identify inputs
let nameInput = document.querySelector('#name')
let emailInput = document.querySelector('#email')
let companyInput = document.querySelector('#company')
let titleInput = document.querySelector('#title')
let sizeInput = document.querySelector('#size')
let submitForm = document.querySelector('#submit')
let receiptConfirm = document.querySelector('#submit-confirm')

// listen for submit button to be clicks
submitForm.addEventListener('click', function() {
    let userName = nameInput.value
    let userEmail = emailInput.value
    let userCompany = companyInput.value
    let userTitle = titleInput.value
    let userCompanySize = sizeInput.value

    // create array for errors
    let errors = []

    //review each input, push to errors array if there is an issue with the input
    if (userName.trim().length == 0) {
        errors.push('Please enter your name')
    }

    if (userEmail.trim() == 0) {
        errors.push('Please enter a valid email')
    }

    if (userCompany.trim().length == 0) {
        errors.push('Please enter your company name')
    }

    if (userTitle.trim().length == 0) {
        errors.push('Please enter your work title')
    }

    if (userCompanySize == "") {
        errors.push('Please select an approximate number of employees associated with the afore mentioned company')
    }

    // submit to db (to come) if no errors exist otherwise display errors in notification. Clear form. 
    if (errors.length == 0) {
        receiptConfirm.innerHTML = 'Thanks!</br>Please check your email for a special welcome message!'
        nameInput.value = ''
        emailInput.value = ''
        companyInput.value = ''
        titleInput.value = ''
        sizeInput.value = ''
    } else {
        let errorMsg = errors.join('\n')
        alert(errorMsg)
        return
    }
  }
)





