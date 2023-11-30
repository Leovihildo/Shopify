// Toggle hide and show of drop-down
// Get Notification drop down menu and add a click event
let notification = document.getElementById("notification-menu");
let notificationMenu = document.getElementById("notification-menu-list");
notification.addEventListener('click', ()=>{
    document.querySelector(".drop-down-list-1").classList.toggle('show');
    document.querySelector(".drop-down-list-2").classList.remove('show');
    let isExpanded = notification.attributes["aria-expanded"].value === 'true';
    let menuItems = notificationMenu.querySelectorAll('[role="menu-item"]');
    if(isExpanded){
        notification.ariaExpanded = 'false';
        notification.focus();
    }
    else{
        notification.ariaExpanded = 'true';
        menuItems.item(0).focus();
    }
    // If menu is expanded, focus on the first item
})

// Get Profile drop down menu and add a click event
let profileMenu = document.getElementById("profile-menu-list");
let profile = document.getElementById("profile-menu");

profile.addEventListener('click', ()=>{
    document.querySelector(".drop-down-list-2").classList.toggle('show');
    document.querySelector(".drop-down-list-1").classList.remove('show');

    let isExpanded = profile.attributes["aria-expanded"].value === 'true';
    let menuItems = profileMenu.querySelectorAll('[role="menu-item"');
    if(isExpanded){
        profile.ariaExpanded = 'false';
        profile.focus();
    }
    else{
        profile.ariaExpanded = 'true';
        menuItems.item(0).focus();
    }
})

// Close dropdown outside click
// Listen to click ouside the button
window.addEventListener('click', 
    function(e){
        // Close the dropdown if click occurs outside the button
        if (e.target.closest('.header-list') === null){
            document.querySelector(".drop-down-list-1").classList.remove('show');
            document.querySelector(".drop-down-list-2").classList.remove('show');
        }
    }
)

// Close button for Select Plan
document.querySelector(".plan-close").addEventListener('click', ()=>{
    document.querySelector(".plan-header").classList.add('hide');
})

// Fold List options
document.querySelector(".plan-choice-btn").addEventListener('click', ()=>{
    if(!document.querySelector(".plan-choice-inputs").classList.contains('close-options')){
        document.querySelector(".plan-choice-inputs").classList.add('close-options');
        document.querySelector(".plan-choice").classList.add('new-height');
        document.querySelector(".plan-choice-btn").classList.remove('open-rotation');
        document.querySelector(".plan-choice-btn").classList.add('close-rotation');
    }
    else{
        document.querySelector(".plan-choice").classList.remove('new-height');
        document.querySelector(".plan-choice-inputs").classList.remove('close-options');
        document.querySelector(".plan-choice-btn").classList.remove('close-rotation');
        document.querySelector(".plan-choice-btn").classList.add('open-rotation');
    }
})

// Count number of selcted options from the List
let count = document.querySelector(".count");
let inputLabel = document.querySelectorAll(".input-options");
let progress = document.getElementById("progress-bar");
let data;

/**
 * 
 * When a User Clicks on any of the 5 onboarding steps
 */
inputLabel.forEach((input, index) =>{
    input.addEventListener('click', ()=>{
/**
 * 
 * It expands the panel, showing the content of the onboarding step
 */
        input.classList.toggle('no-show');

// When the checkbox is checked
        let checkbox = input.querySelector(".checkbox");
        checkbox.addEventListener('click', ()=>{
            input.classList.toggle('checked');

// Increment and decrement the number of completed steps, and the progress bar.
            let checked = document.querySelectorAll(".checked");
            if(checked && checked.length>0){
                input.classList.toggle("hide-circle");
                count.innerHTML = checked.length;
                data = 20 * checked.length;
                progress.style.width = data+"%";
            }
            else{
                    count.innerHTML = checked.length;
                    data = 0;
                    progress.style.width = data+"%";
                    // input.classList.add('no-show');
                    input.classList.remove("hide-circle");
            }
        })

        closeOthers(index);

    })
})
/**
 * 
 * CLoses previously opened panel.
 */
const closeOthers=(index)=>{
    inputLabel.forEach((input2, index2) =>{
        if (index != index2){
            input2.classList.add('no-show');
            // input2.classList.remove('checked');
        }
    })
}