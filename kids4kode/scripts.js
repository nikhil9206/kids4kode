var testimonials = {
    "Madhuri Pamanji": ["Thank you Nikhil for taking time to go over the lesson plans, get the material ready for the classes as well as share the material after the classes for the students to go over later. We appreciate all the hard work that you put into these classes to make the classes educational, enjoyable and creating interest for the students with hands-on experience with the basics of coding. We are looking forward to any future classes that you might offer and (student name) will love to join them for sure. Appreciate all the hard work that you put into this.", "Python 1 Parent"],
    "Amy Urban": ["Thank you for a fantastic course! (student name) loved it.  He doesn’t love many things - or at least admit he loves them.  Thank you!", "Python 1 Parent"],
    "Lynden Rosier": ["Nikhil is a fantastic programmer and student and I believe he will be a similarly fantastic teacher to your child!", "Teacher"],
    "Srikanth Gaddam": ["I truly believe the Nikhil will give your child the knowledge they need to succed in future programming tasks.", "Manager"]
}

const keys_test = (Object.keys(testimonials))
var start_test = 0
var current_play_button = 1



document.addEventListener('DOMContentLoaded', function() {
    play()
    var hero = document.querySelector('.hero-area')
    var img = document.createElement('img')

    img.src = 'images/hero-image.png'
    img.alt = 'hero image'
    img.className = 'slide-left'

    hero.appendChild(img)

    var headers = document.getElementsByClassName('test-tab-header')
    var bodies = document.getElementsByClassName('test-tab-body')
    var captions = document.getElementsByClassName('test-tab-caption')

    updateCamp()
    updateTestimonials() 

    
})
document.addEventListener('DOMContentLoaded', function() {
    var openButtons = document.querySelectorAll('.openPopup');
    var closeButtons = document.querySelectorAll('.closePopup');

    openButtons.forEach(function(button) {
        button.addEventListener('click', function() {
            var popupId = this.id.replace('openPopup', ''); // Get the number from the button id
            var overlay = document.getElementById('overlay' + popupId);
            var popup = document.getElementById('popup' + popupId);


            console.log(button);
            showPopup(overlay, popup, button);
        });
    });

    closeButtons.forEach(function(button) {
        button.addEventListener('click', function() {
            var popupId = this.parentElement.parentElement.id.replace('popup', ''); // Get the number from the popup id
            var overlay = document.getElementById('overlay' + popupId);
            var popup = document.getElementById('popup' + popupId);
            
            hidePopup(overlay, popup);
        });
    });

    document.addEventListener('keydown', function(event) {
        if (event.key === 'Escape') {
            closeButtons.forEach(function(button) {
                var popupId = button.parentElement.parentElement.id.replace('popup', ''); // Get the number from the popup id
                var overlay = document.getElementById('overlay' + popupId);
                var popup = document.getElementById('popup' + popupId);

                if (overlay.classList.contains('active')) {
                    hidePopup(overlay, popup);
                }
            });
        }
    });

    function showPopup(overlay, popup, button) {
        overlay.classList.add('active'); // Add the 'active' class to fade in
        popup.classList.add('active'); // Add the 'active' class to fade in
        document.body.classList.add('popup-open');


    }

    function hidePopup(overlay, popup) {
        overlay.classList.remove('active'); // Remove the 'active' class to fade out
        popup.classList.remove('active'); // Remove the 'active' class to fade out
        document.body.classList.remove('popup-open');
    }
});
    
//hero
function play(){
    var button = document.querySelector('.hero-switcher-button-play')
    var img = document.createElement('img')

    document.querySelector('.hero-switcher-button-play').innerHTML = ""

    if (current_play_button == 1) {
        img.src = 'https://img.icons8.com/fluency-systems-filled/1000/000000/play.png'
        img.alt = 'play carosuel'
    } else {
        img.src = 'https://img.icons8.com/fluency-systems-filled/1000/000000/pause.png'
        img.alt = 'stop carosuel'
    }

    button.append(img)
    current_play_button *= -1
}

//testimonials
function moveLeftTest() {
    start_test--;
    if (start_test < 0) {
        start_test = keys_test.length - 1; // Wrap around to the last testimonial
    }
    updateTestimonials();
}
function moveRightTest() {
    start_test++;
    if (start_test >= keys_test.length) {
        start_test = 0; // Wrap around to the first testimonial
    }
    updateTestimonials();
}
function updateTestimonials() {
    const headers = document.getElementsByClassName('test-tab-header')
    const bodies = document.getElementsByClassName('test-tab-body')
    const captions = document.getElementsByClassName('test-tab-caption')

    for (let i = 0; i < 3; i++) {
        const index = (start_test + i) % keys_test.length; // Calculate current testimonial index
        headers[i].innerHTML = testimonials[keys_test[index]][1]
        bodies[i].innerHTML = testimonials[keys_test[index]][0]
        captions[i].innerHTML = keys_test[index]
    }
}

var start_camp = 0
var camps = []

//camps
class Camp {
    constructor(id, name, slogan, mini_desc, ideas, info_bar, full_desc, skills) {
        this.id = id
        this.name = name
        this.slogan = slogan
        this.mini_desc = mini_desc
        this.ideas = ideas
        this.info_bar = info_bar
        this.full_desc = full_desc
        this.skills = skills
    }

    get_id() {
        return this.id
    }

    get_name() {
        return this.name
    }

    get_slogan() {
        return this.slogan
    }

    get_mini_desc() {
        return this.mini_desc
    }

    get_ideas() {
        return this.ideas
    }

    get_info_bar() {
        return this.info_bar
    }

    get_full_desc() {
        return this.full_desc
    }

    get_skills() {
        return this.skills
    }
}

//python1
camps.push(
    new Camp(1, 'Python 1', 
             'Learn the Basics of Python!', 
             'Learn about syntax, printing stuff, basic math and data types.',

                ['What is a programming language?',
                'The various syntaxical rules of Python.', 
                'Advantages of Python compared to other languages.', 
                'How can we properly utilize features of Python?'],            

                {'Skill Level': 'None', 
                'Course Time': '10 hours', 
                'Age Range': '5th grade +', 
                'Prequisites': 'None'},

             'The Python 1 class introduces fundamental concepts such as programming languages, variables, comments, basic syntax, printing outputs, handling inputs, and data types. Students will also learn about strings, type casting, lists, booleans, and conditionals (if and else if) through hands-on coding experience.',
            
                ['Understanding of basic Python syntax.',
                'Ability to define and use variables.',
                'Knowledge of different data types.',
                'Skills in printing and receiving inputs.',
                'Proficiency in using lists and strings.',
                'Understanding of booleans and statements.',
                'Ability to write conditional statements.']
            )
)
//python2
camps.push(
    new Camp(2, 'Python 2', 
             'Build your Python skills!', 
             'Learn about loops,the print(), and input() and more!',

                ['The logic and flow of iterative loops.',
                'How to iterate with for loops.',
                'Detailed exploration of print() and input() functions.',
                'Utilizing built-in string and list functions effectively.'],

                {'Skill Level': 'Basic', 
                'Course Time': '10 hours', 
                'Age Range': '5th grade +', 
                'Prequisites': 'Python 1'},

             'In Python 2, students learn essential programming concepts including while and for loops for controlling flow, detailed usage of print() and input() functions for interaction, and fundamental string and list operations. The course also covers basic function anatomy, enabling effective code encapsulation and reuse.',
            
                ['Mastery of while and for loops.',
                'Proficiency in print() and input() functions.',
                'Expertise in string manipulations.',
                'Understanding of basic function anatomy.',
                'Ability to control program flow.',
                'Skills in code encapsulation and reuse.']
            )
)
//python3
camps.push(
    new Camp(3, 'Python 3', 
             'Expand on your Python knowledge!', 
             'Learn about dictionaries, functions, modules, and more!',

                ['Understanding the versatility of dictionaries.',
                'Managing scope in Python programs.',
                'Implementing self-defined functions effectively.',
                'Utilizing modules for enhanced functionality.'],

                {'Skill Level': 'Proficient', 
                'Course Time': '10 hours', 
                'Age Range': '5th grade +', 
                'Prequisites': 'Python 2'},

             'Python 3 delves into advanced programming topics, exploring dictionaries for structured data handling, managing program scope effectively, and creating custom functions with parameters and arguments. Students also learn to enhance program capabilities using modules like import, import as, and from, along with utilizing the random and math modules for complex computations.',
            
                ['Proficiency in dictionaries for data management.',
                'Management of program scope and variables.',
                'Creation and utilization of custom functions.',
                'Integration of external modules.',
                'Handling function parameters and arguments.',
                'Versatile module import strategies.',
                'Application of random and math modules.']
            )
)
//python4
camps.push(
    new Camp(4, 'Python 4', 
             'Dive into advanced Python!', 
             'Learn about classes, try and except blocks, generators, and more!',

                ['Mastery of advanced error handling techniques.',
                'Deep understanding of object-oriented programming.',
                'Application of inheritance and polymorphism.',
                'Utilization of functional programming concepts.'],

                {'Skill Level': 'Advanced', 
                'Course Time': '10 hours', 
                'Age Range': '7th grade +', 
                'Prequisites': 'Python 3'},

             'Python 4 explores advanced Python functionalities including error handling with try-except blocks, object-oriented programming with classes and inheritance, and concepts like polymorphism, method overloading, generators for efficient data processing, lambda functions for concise coding, and closures for state encapsulation within functions.',
            
                ['Advanced error handling techniques.',
                'Object-oriented programming principles.',
                'Inheritance and polymorphism.',
                'Functional programming concepts.',
                'Generators for data processing.',
                'Lambda functions for concise coding.',
                'Closures for state encapsulation.']
            )
)

function moveLeftCamp() {
    start_camp--;
    if (start_camp < 0) {
        start_camp = camps.length - 1; // Wrap around to the last testimonial
    }
    updateCamp();
}

function moveRightCamp() {
    start_camp++;
    if (start_camp >= camps.length) {
        start_camp = 0;
    }
    updateCamp();
}

function updateCamp() {
    const tabs = document.getElementsByClassName('course-tab')
    const tab_titles = document.getElementsByClassName('course-tab-title')
    const tab_slogans = document.getElementsByClassName('course-tab-slogan')
    const tab_descs = document.getElementsByClassName('course-tab-desc')
    const tab_times = document.getElementsByClassName('course-tab-time')
    const tab_skills = document.getElementsByClassName('course-tab-skill')

    

    for (let i = 0; i < 3; i++) {
        const index = (start_camp + i) % camps.length
        tab_titles[i].innerHTML = camps[index].get_name()
        tab_slogans[i].innerHTML = camps[index].get_slogan()
        tab_descs[i].innerHTML = camps[index].get_mini_desc()
        tab_skills[i].innerHTML = camps[index].get_info_bar()['Skill Level']
        tab_times[i].innerHTML = camps[index].get_info_bar()['Course Time']
        
        tabs[i].setAttribute('onclick', `changeOver(${camps[index].get_id()})`)
    }

}


// all the vars
const over_title = document.getElementsByClassName('over-title')
const over_slogan = document.getElementsByClassName('over-slogan')
const over_mini_desc = document.getElementsByClassName('over-mini-desc')
const over_ideas = document.getElementsByClassName('over-idea')
const over_skill = document.getElementsByClassName('over-skill-mid')
const over_time = document.getElementsByClassName('over-time')
const over_age = document.getElementsByClassName('over-age')
const over_prereq = document.getElementsByClassName('over-prereq')
const over_full_desc = document.getElementsByClassName('over-full-desc')
const over_skills = document.getElementsByClassName('over-skill')

function changeOver(id) {
    var camp = camps[0]
    for (let i = 0; i < camps.length; i++) {
        if (camps[i].get_id() == id) {
            camp = camps[i]
            break
        }
    }

    //title part
    over_title[0].innerHTML = camp.get_name()
    over_slogan[0].innerHTML = camp.get_slogan()
    over_mini_desc[0].innerHTML = camp.get_mini_desc()

    //info_bar
    over_skill[0].innerHTML = '&nbsp' + camp.get_info_bar()['Skill Level']
    over_time[0].innerHTML = '&nbsp' + camp.get_info_bar()['Course Time']
    over_age[0].innerHTML = '&nbsp' + camp.get_info_bar()['Age Range']
    over_prereq[0].innerHTML = '&nbsp' + camp.get_info_bar()['Prequisites']

    //bottom
    over_full_desc[0].innerHTML = camp.get_full_desc()

    //ideas and skills
    for (let i = 0; i < over_ideas.length; i++) {
        over_ideas[i].innerHTML = camp.get_ideas()[i]
    }

    for (let i = 0; i < over_skills.length; i++) {
        over_skills[i].innerHTML = camp.get_skills()[i]
    }
}

