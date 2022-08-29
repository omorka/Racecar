//get the string from the html document
function getString()
{
    //hide the alert box
    document.getElementById("alert").classList.add("invisible");

    //get the string value and change it all to lower case
    let palindrome = document.getElementById("palindrome").value;
    let pLower = palindrome.toLowerCase();
    let pArray = [];

    //loop over the lowercase array and add only lowercase letters to the pArray array
    for(let i = 0; i <= pLower.length; i++)
    {
        let code = pLower.charCodeAt(i);

        //97 = a | 122 = z
        if (code > 96 && code < 123)
        {
            pArray += pLower[i];
        }
    }

    //check if pArray is a palindrome and return an object to be displayed
    let returnOBJ = palindromeCheck(pArray);
    displayPalindrome(returnOBJ);
}

//check if string is a palindrome
function palindromeCheck(pArray)
{
    let pCheck = [];
    let returnOBJ = {};

    //reverse the string and add it to pCheck
    for(let i = pArray.length - 1; i >= 0; i--)
    {
        pCheck += pArray[i];
    }
    //store reversed string into return object
    returnOBJ.reverseString = pCheck;

    //if reversed string is equal to entered string then it must be a palindrome
    if (pCheck == pArray)
    {
        returnOBJ.boolean = true;
    }
    else
    {
        returnOBJ.boolean = false;
    }

    return returnOBJ;
}

//display the values
function displayPalindrome(returnOBJ)
{
    //check if the reversed string was confirmed a palindrome or not
    if (returnOBJ.boolean)
    {
        //display a green alert box and remove the red one
        document.getElementById("alertHeader").parentElement.classList.add("alert-success");
        document.getElementById("alertHeader").parentElement.classList.remove("alert-danger");
        document.getElementById("alertHeader").innerHTML = "Success!";
    }
    else
    {
        //display a red alert box and remove the green one
        document.getElementById("alertHeader").parentElement.classList.remove("alert-success");
        document.getElementById("alertHeader").parentElement.classList.add("alert-danger");
        document.getElementById("alertHeader").innerHTML = "Not a Palindrome!";
    }

    //write reversed string
    document.getElementById("msg").innerHTML = `Your phrase reversed is: ${returnOBJ.reverseString}`;

    //show alert box
    document.getElementById("alert").classList.remove("invisible");
}