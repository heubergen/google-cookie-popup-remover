popup = document.querySelector('a[href*="policies.google.com/technologies/cookies"]');
if (popup)
{
	const buttons = document.querySelectorAll('button');
	var PopUpRemoved = false;
	
	if (!PopUpRemoved) {
		buttons.item(2).click();
		PopUpRemoved = true;
	};
} else {
	//console.log("Popup was already removed")
}