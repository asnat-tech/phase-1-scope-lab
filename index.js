 var customerName='bob'
 
 function upperCaseCustomerName(){
 return customerName= customerName.toUpperCase()
 
 }
 function setBestCustomer() {
    bestCustomer = 'not bob';//undefined
  }

  function overwriteBestCustomer() {
    bestCustomer = 'maybe bob'}

    const leastFavoriteCustomer = 'initial value';
 function changeLeastFavoriteCustomer() {
  leastFavoriteCustomer = 'new value'; // This will throw an error
}