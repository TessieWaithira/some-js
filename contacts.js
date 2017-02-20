//getting numbers from a whatsapp group
//log into whatsapp web and run the following script on the console

var obj = document.getElementsByClassName("infinite-list-viewport")[0].getElementsByClassName("infinite-list-item infinite-list-item-transition");
//an array to store the contacts
contacts = []
object.length
for(var i=0;i<obj.length;i++)
	{contacts.push((obj[i].getElementsByTagName("span")[0].title)+"");}
//store contacts in the said array and access them from the local storage
localStorage.setItem("contacts",JSON.stringify(contacts))	