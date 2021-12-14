Two Factor Authorization Code

--------

A two factor authorization feature that ensures a user is receiving the exact match authorization code. 

Each number is received individually and will be parsed into a string for comparison.

Failure to match the authorization code will return an error. 

Entering a number will automatically take the user to the next input.

Backspaces will take the user to the previous input. 