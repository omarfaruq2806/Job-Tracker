1. What is the difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll?

Answer :
getElementById("id") ১টা element ধরে , ID দিয়ে খুঁজে |
getElementsByClassName("class") : একই class এর অনেকগুলো element ধরতে পারে , HTMLCollection return করে |
querySelector("selector"): CSS selector ব্যবহার করে , শুধু প্রথম element return করে |
querySelectorAll("selector") : CSS selector ব্যবহার করে , সব element return করে , NodeList দেয় |

2. How do you create and insert a new element into the DOM?

Answer :
1: Element তৈরি : const div = document.createElement("div") ,
2: DOM এ insert করা : document.body.appendChild(div) |

3. What is Event Bubbling? And how does it work?

Event Bubbling হলো , কোনো child element এ event ঘটলে সেটা ধাপে ধাপে উপরে parent পর্যন্ত ছড়িয়ে যাওয়।
example : <div id="parent">
            <button id="child">Click</button>
          </div>

প্রথমে button এ চলবে ,
তারপর div (parent) ,
তারপর body ,
তারপর document এ |


4. What is Event Delegation in JavaScript? Why is it useful? 

Event Delegation : Parent এ event দিয়ে child গুলোকে handle করা |


5. What is the difference between preventDefault() and stopPropagation() methods? 