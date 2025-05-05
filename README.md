# Lab 5 - Starter
Raeed Bourai and Evgenii Ruzin

1. No we would not use a unit test to test this feature because we should unit test individual components. We cannot test whether the message feature properly writes and sends a message to another user in a unit test because this likely has multiple features that interact with each other.
2. Yes, in this case we would use a unit test to test the max message length feature because it is a small component that is easily testable. If we see that the message was over 80 characters, we return an error or a message saying what the issue was, otherwise it passes.

https://raeedbourai.github.io/Lab5_Starter/expose.html

https://raeedbourai.github.io/Lab5_Starter/explore.html
