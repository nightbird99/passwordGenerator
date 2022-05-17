# passwordGenerator

(./images/passGenMain.png)

## Password Criteria Prompts
After clicking the "Generate Password" button, the user is given 5 prompts before their password is generated.
The first prompt asks the user how many characters they would like their password to include.
(./images/passGenLeng.png)
The next four prompts ask the user if they would like to include special characters, lowercase characters, uppercase characters, or numeric characters.
(./images/passGenCharPrompt.png)
After answering each prompt, the password is printed to the screen.
(./images/passGenEnd.png)



## How It Works
Each type of character is stored in its own variable containing every character of that type. As the user answers the prompts, the characters of each type they wish to include are added to another variable. Once the user has finished answering the prompts and all the desied character types have been added, the program picks a character at random from the list of allowed characters and adds them to the password string one at a time. This password is then printed to the screen.

## Error catching
The password generator will only generate passwords with a length between 8 and 128 characters.
If the user inputs a desired length less than 8, an alert will appear on the screen informing the user that their password length is too small.
If the user inputs a desired length greater than 128, an alert will appear on the screen informing the user that their password length is too large.
The password generator must be allowed to include at least one type of character. 
If the user does not allow at least one type of character to be included in their password, the password cannot be generated and an alert will appear on the screen informing the user that their password must include at least one type of character.

Deploy Link: https://nightbird99.github.io/passwordGenerator/