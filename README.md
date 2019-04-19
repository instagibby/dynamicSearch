# Dynamic Search

Takes an array of people and allows you to search for the user by name and it will filter the display to match the user input.
I designed something similiar for work as the first iteration. 


The method work was using before I made this was: A user types in a name and the page would submit a form and do a SQL query on the database to then get and display the results. To me this felt clunky and not quick or clean, and didn't feel very good. So when I was tasked with making an admin page for a client where they can sort through users, I decided to try my hand at making something that felt more modern.


This allows you to use a function that takes two parameters. The first is the idForOutput, which is where you want the set of users to be output to. The second parameter is the arrayForProcess, which is the array that is processed through the function to then output the users. The beauty of this is that it is pretty easy to manipulate the ouput as it is using template literals, and if your "person" that is being output changes, you can easily add in a phone number, for instance. Using template literals also allows my designers to be able to understand what is happening and edit that code so it is styled like the rest of the site.


Would I have preferred to make this in Angular or React? Yes. My current employer is a php shop and only a few teams actually use laravel / vue and I unfortunately am not on one of those teams, and so I have to make sure my code is strictly html/css/javascript/php so the other devs on my team can interact with it.
