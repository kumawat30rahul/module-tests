//------All the declarations--------------//

let body = document.getElementById('Wrpper')
let nameChange = document.getElementById('h1Span')


let image1 = document.getElementById('divImg1')  //=====>>>>>>>>>>>>>>>> accessing the image
let divOfImg1 = document.getElementById('divImg1')
let a = 0;  //==========================================>>>>>>>>>>>>>> variable to prevent clicking on image twice

let image2 = document.getElementById('divImg2') //=====>>>>>>>>>>>>>>>> accessing the image
let divOfImg2 = document.getElementById('divImg2')
let b = 0; //==========================================>>>>>>>>>>>>>> variable to prevent clicking on image twice

let image3 = document.getElementById('divImg3') //=====>>>>>>>>>>>>>>>> accessing the image
let divOfImg3 = document.getElementById('divImg3')
let c = 0; //==========================================>>>>>>>>>>>>>> variable to prevent clicking on image twice

let image4 = document.getElementById('divImg4') //=====>>>>>>>>>>>>>>>> accessing the image
let divOfImg4 = document.getElementById('divImg4')
let d = 0; //==========================================>>>>>>>>>>>>>> variable to prevent clicking on image twice





let modalClick = document.getElementById('modalImgClick')

let userInfo = document.createElement('div')  //------------>>>>>> div for display of name and username
let diceDisplay = document.createElement('div')  //--------->>>>>> div for display of dice
diceDisplay.className = "img1_registration"

let congratsCoupon = document.createElement('div') //------->>>>>> div for congratulatory image and coupon code
congratsCoupon.className = "img1_registration"
// --------All functionality with additionall declaration------------//


let image1Clicked = false;
let image2Clicked = false;
let image3Clicked = false;
let image4Clicked = false;

let userDetail = []

// image 1 functionailt ------>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
image1.addEventListener("click", () => {

    if (!image2Clicked) {

        if (a < 1) {
            a++;
            divOfImg1.classList.add("selected")
            body.classList.add("body_blur")
            modalClick.style.visibility = "visible"
            let registerButton = document.getElementById('regBtn')


            registerButton.addEventListener("click", () => {
                let fullName = document.getElementById('fullName').value
                let email = document.getElementById('emailAddress').value
                let username = document.getElementById('username').value
                if (fullName !== "" && email !== "" && username !== "") {
                    body.classList.remove("body_blur")
                    image1Clicked = true;
                    if (image1Clicked) {
                        nameChange.innerText = "IMAGE 2"
                    }
                    let name = document.getElementById('fullName').value
                    let email = document.getElementById('emailAddress').value
                    let username = document.getElementById('username').value

                    let user = {
                        userName: name,
                        userEmail: email,
                        userUsername: username
                    }
                    userDetail.push(user)
                    modalClick.style.visibility = "hidden"
                } else {
                    alert("Please fill the details properly")
                }

            })
        }

    }

})

///image 2 functionality -->>>>>>>>>>>>>>>>>>>>>>>>>>>>


console.log(image1Clicked);

image2.addEventListener("click", () => {
    if (image1Clicked === true) {
        if (!image3Clicked) {

            if (b < 1) {
                b++;
                divOfImg1.classList.remove("selected")
                divOfImg2.classList.add("selected")
                body.classList.add("body_blur")
                image2Clicked = true
                if (image2Clicked) {
                    nameChange.innerText = "IMAGE 3"
                }
                modalClick.style.visibility = "visible"
                let img1Registration = document.getElementById('img1Registration')
                img1Registration.style.display = "none"

                userInfo.className = "img1_registration"

                let usersName = document.createElement('h1')
                let yourNameText = document.createElement('span')
                yourNameText.className = "span_color"
                yourNameText.innerText = "Your Name: "
                usersName.innerText = yourNameText.innerText + (userDetail[0].userName).toUpperCase()


                usersName.className = "img2_username"


                let userKaUsername = document.createElement('h1')
                userKaUsername.innerText = "Your username: " + (userDetail[0].userUsername)
                userKaUsername.className = "img2_username"

                userInfo.appendChild(usersName)
                userInfo.appendChild(userKaUsername)

                modalClick.appendChild(userInfo)
            }

        }

    }
})

//------------image 3 functionality----------//

let secondChance = 2;
image3.addEventListener("click", () => {
    if (image2Clicked) {
        image3Clicked = true;
        if (!image4Clicked) {
            if (c < 1) {
                c++; //========================================>>>>>>>>>increamenting so that 3rd image is not clicked twice

                
                divOfImg2.classList.remove("selected") //============|
                divOfImg3.classList.add("selected")    //======================>>>>>>>>>>adding and removing classes for styling
                body.classList.add("body_blur")        //============|

                userInfo.style.display = "none"   //==========>>>>>>>>removing the user inforation div of the second image
                diceDisplay.innerHTML = ""


                modalClick.style.visibility = "visible"  //=========>>>>>>>>making the modal visible for dice game
                let diceTitle = document.createElement('h4')  //====>>>>>>>> title of the dice 
                diceTitle.className = "dice_title"
                let x = 3;
                diceTitle.innerText = "Click the dice " + x + " times"; //====>>>>>title of the dice game showing number of time to click on the dice
                diceDisplay.appendChild(diceTitle)

                //=========all the dice images in a an array===========//
                let diceImageArr = ["images/dice-six-faces-one.png", "images/dice-six-faces-two.png", "images/dice-six-faces-three.png", "images/dice-six-faces-four.png", "images/dice-six-faces-five.png", "images/dice-six-faces-six.png"]

                let diceImage = document.createElement('img')
                diceImage.style.cursor = "pointer"
                let srcNumber = 0;
                diceImage.src = diceImageArr[srcNumber]  //===========>>>>>>>>>>>>>>displaying default number one image in the start

                let clickCount = 0  //==================================>>>>>>>>>>> variable for counting clicks on the dice

                let numberDisplay = document.createElement('div') //=====>>>>>>>>>>> div for showing the numbers shown on the dice
                numberDisplay.className = "number_display"

                let total = document.createElement("h2")  //============>>>>>>>>>>>>> h2 for displaying the sum of the number displayed
                total.className = "total"
                let totalNumber = 0;

                let totalButton = document.createElement('button')  //===>>>>>>>>>>>>> button for end of the dice game for addditional functionality
                totalButton.className = "total_button"

                let tryAgain = document.createElement('h1')  //=========>>>>>>>>>>> error message display element
                let y = 2
                diceImage.addEventListener("click", () => {  //========>>>>>>>>>>>>>dice gmae functionaltiy
                    if (clickCount < 3) {
                        x--;
                        if (x > 0) {
                            diceTitle.innerText = "Click the dice " + x + " times";
                        } else {
                            diceTitle.innerText = "Your Current Chance is Over";
                        }

                        srcNumber = Math.round(Math.random() * 5); //============>>>>>>>>>>>generating random number between 0 to 5 to dislplay the dice image from array and adding one afterwards for summation purpose
                        diceImage.src = diceImageArr[srcNumber]
                        clickCount++;

                        let diceNumberArr = []  //================>>>>>>>>>>>>array to store the number generated when clicked on the dice
                        diceNumberArr.push(srcNumber + 1);

                        let diceNumberArrDisplay = document.createElement('h4') //=======>>>>>> h4 element to get the clicked number
                        if (clickCount < 3) {
                            diceNumberArrDisplay.innerText = " " + diceNumberArr + " +  ";
                        } else {
                            diceNumberArrDisplay.innerText = " " + diceNumberArr;
                        }

                        totalNumber += srcNumber + 1
                        total.innerText = "Total: " + totalNumber //==============>>>>>>>>showing the sum of the numbers generated

                        numberDisplay.appendChild(diceNumberArrDisplay) //=======>>>>>>>>>appending the numbers one by one 
                        diceDisplay.appendChild(numberDisplay) //================>>>>>>>>>showing the numbers on the screen by appending on the dice div

                        if (clickCount === 3) {  //=================>>>>>>>>>>>display error message and moving forward functionality
                            if (totalNumber > 10) {
                                tryAgain.innerText = "Congratulation --> Click on the 4th image"
                                totalButton.innerText = "Move Ahead"
                                totalButton.addEventListener("click", () => {  //====>>>>>>>>>>functionality to click on 4th image
                                    body.classList.remove("body_blur")
                                    image3Clicked = true
                                    if (image3Clicked) {
                                        nameChange.innerText = "IMAGE 4"
                                    }
                                    modalClick.removeChild(diceDisplay)
                                    modalClick.style.visibility = "hidden"
                                })
                                diceDisplay.appendChild(tryAgain);
                                diceDisplay.appendChild(totalButton)
                            } else {
                                y--;
                                if (y === 0 || secondChance === 1) {
                                    tryAgain.innerText = "Bad Luck";
                                    totalButton.innerText = "Reload the page";
                                    totalButton.addEventListener("click", () => { //==========>>>>>>>>functionality to reload the page after second chance
                                        location.reload();
                                    });
                                    diceDisplay.appendChild(tryAgain);
                                    diceDisplay.appendChild(totalButton);
                                } else {
                                    tryAgain.innerText = "Try Again after scoring more than 10"
                                    totalButton.innerText = "Try Again"
                                    totalButton.addEventListener("click", () => { //==========>>>>>>>>>>functionlaity to click the 3rd image again

                                        modalClick.style.visibility = "hidden"
                                        c = 0;
                                        image3Clicked = false
                                        body.classList.remove("body_blur")
                                        secondChance--;

                                    })
                                    diceDisplay.appendChild(tryAgain)
                                    diceDisplay.appendChild(totalButton)
                                    alert("Try Again after scoring more than 10")

                                }

                            }
                        }

                        diceDisplay.appendChild(total)
                    }
                })



                diceImage.className = "dice_image"
                diceDisplay.appendChild(diceImage)
                modalClick.appendChild(diceDisplay)
            }

        }

    }

})
//image 4 functionality -----------------//

image4.addEventListener("click", () => {  //====================>>>>>>>>>>>>>>>>>image 4 functionality to display coupon code and congratulatory message

    if (image3Clicked) {

        if (d < 1) {
            d++;
            divOfImg3.classList.remove("selected")
            divOfImg4.classList.add("selected")

            body.classList.add("body_blur")
            modalClick.style.visibility = "visible"
            console.log((modalClick.visibility));
            let randomCoupon = coupon();


            let displayCoupon = document.createElement('h1')
            displayCoupon.className = "display_coupon"
            displayCoupon.innerText = randomCoupon

            let congratsImage = document.createElement('img')
            congratsImage.className = "congrats_image"
            congratsImage.src = "images/congrats.png"

            congratsCoupon.appendChild(displayCoupon)
            congratsCoupon.appendChild(congratsImage)
            modalClick.appendChild(congratsCoupon)
        }

    }
})
//function for random coupon -------------//
function coupon() {
    let coupon = '';
    let characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';

    for (let i = 0; i < 12; i++) {
        coupon += characters.charAt(Math.floor(Math.random() * characters.length));
    }

    return coupon;
}
//--------------canceling the model-------------//

let cancelModel = document.getElementById('cancelModel')
cancelModel.addEventListener("click", () => {
    modalClick.style.visibility = "hidden"
    body.classList.remove("body_blur")
})