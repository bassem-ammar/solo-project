
var formDataArray = [];
var formDataArrayProduct2 = [];
  function makeSomthing(price,name,images,category){
    return{
      price:price,
      name:name,
      images:images,
      category:category,
      
    }
  }
  var product1=makeSomthing(999,"Airpods",["https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/MME73?wid=572&hei=572&fmt=jpeg&qlt=95&.v=1632861342000",'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/MME73_AV1?wid=572&hei=572&fmt=jpeg&qlt=95&.v=1632861333000' ],"3rd generation")


  $('#shop').append(`
  <h3>${product1.name}</h3>
  <img src=${product1.images[0]} id="img1">
  <p>Price : ${product1.price}</p>

  <p>category : ${product1.category}</p>
  
  <button onclick=hideShow()>Buy product</button>
  <form id='client' action="/action_page.php">
    <label for="fname">First name:</label>
    <input type="text" id="fname" name="fname"><br><br>
    <label for="lname">Last name:</label>
    <input type="text" id="lname" name="lname"><br><br>
    <label for="creditcard">Credit Card:</label>
    <input type="text" id="creditcard" name="creditcard"><br><br>
    <input id='submit' type="submit" value="buy">
  </form>
`);
$('#submit').click(function(){
    alert("your data have been saved")
})
var div=document.getElementById('clientt')
var display=0
function hideShow() {
    if(div.style.display==="block"){
div.style.display='none'
    }
    else {
        div.style.display='block'
        display=1
    }
}


var product2=makeSomthing(799,"Airpods",["https://images.macrumors.com/t/jeSIj6IH-yMuFn6CI44qwcc9Q4o=/800x0/smart/article-new/2019/10/airpods-pro-roundup.jpg?lossy" ,'https://hips.hearstapps.com/hmg-prod/images/genericairpodproductphoto-1572283776.jpg?crop=0.897xw:0.897xh;0.0456xw,0.0423xh&resize=1200:*'],"2 Pro")
var product2 = makeSomthing(799, "Airpods", ["https://images.macrumors.com/t/jeSIj6IH-yMuFn6CI44qwcc9Q4o=/800x0/smart/article-new/2019/10/airpods-pro-roundup.jpg?lossy", 'https://hips.hearstapps.com/hmg-prod/images/genericairpodproductphoto-1572283776.jpg?crop=0.897xw:0.897xh;0.0456xw,0.0423xh&resize=1200:*'], "2 Pro");
$('#shop').append(`
<h3>${product2.name}</h3>
<img src=${product2.images[0]} id="img2">
<p>Price : ${product2.price}</p>

<p>category : ${product2.category}</p>
<button onclick=hideShow()>Buy product</button>
<form id='client2' action="/action_page.php"> <!-- Add a unique ID for the product 2 form -->
    <label for="fname">First name:</label>
    <input type="text" id="fname2" name="fname2"><br><br> <!-- Add unique IDs for input fields -->
    <label for="lname">Last name:</label>
    <input type="text" id="lname2" name="lname2"><br><br>
    <label for="creditcard">Credit Card:</label>
    <input type="text" id="creditcard2" name="creditcard2"><br><br>
    <input id="submit2" type="submit" value="Buy">
</form>
`);
$('#submit2').click(function(){
    alert("your data have been saved")
})
var div=document.getElementById('clientt')
var display=0
function hideShow() {
    if(display==1){
div.style.display='block'
    }
    else {
        div.style.display='none'
        display=1
    }
}
var div2 = document.getElementById('client2'); 
var display2 = 0;

div2.addEventListener('submit', function (e) {
    e.preventDefault();

    var formData2 = {
        fname: this.fname2.value,
        lname: this.lname2.value,
        creditcard: this.creditcard2.value,
    };
    formDataArrayProduct2.push(formData2);

    this.reset();

    console.log('Form Data Array for Product 2:', formDataArrayProduct2);
});
var div = document.getElementById('client');
var display = 0;


div.addEventListener('submit', function (e) {
    e.preventDefault(); 
  
   
    var formData = {
      fname: this.fname.value,
      lname: this.lname.value,
      creditcard: this.creditcard.value,
    };
    formDataArray.push(formData);
  
   
    this.reset();
  
    console.log('Form Data Array:', formDataArray);
  });
function changeimg (item){
    var counter=0
    function getnext(){
      counter++
      counter=counter%item.length
      return item[counter]
    }
    return getnext
  }
  var change=changeimg(product1.images);
  $('#img1').on('click',function(){
    var getnextindex=change()
    this.src=getnextindex
  })
  var change1=changeimg(product2.images);
  $('#img2').on('click',function(){
    var getnextindex=change1()
    this.src=getnextindex
  })
  
 
