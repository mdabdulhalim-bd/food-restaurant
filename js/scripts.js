
const handleFormSubmit = event => {
        event.preventDefault();
       

        const name = event.target.email.value;
        if(name){
            alert('Subscribed successfully');
            event.target.email.value = '';
        }
        else{
            alert('Please enter your email address');
        }
    }
   