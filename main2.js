let form = document.querySelector('form')

  form.addEventListener('submit', function(eventS){
    event.preventDefault()

    let errorContainer =document.querySelector('.message-error')
    let errorList = document.querySelector('.message-error ul')
    errorList.innerHTML = ""
    errorContainer.classList.remove('visible')
    let email = document.querySelector('#email')
    if (email.value ===''){
        errorContainer.classList.add('visible')
        email.classList.remove('success')
    } else{
        email.classList.remove('success')
    }
    

  })