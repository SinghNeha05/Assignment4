allContent = {
  introduction:
    "javaScript is a very powerful client-side scripting language. JavaScript is used mainly for enhancing the interaction of a user with the webpage. In other words, you can make your webpage more lively and interactive, with the help of JavaScript. JavaScript is also being used widely in game development and Mobile application development.JavaScript was developed by Brendan Eich in 1995, which appeared in Netscape, a popular browser of that time.The language was initially called LiveScript and was later renamed JavaScript. There are many programmers who think that JavaScript and Java are the same. In fact, JavaScript and Java are very much unrelated. Java is a very complex programming language whereas JavaScript is only a scripting language. The syntax of JavaScript is mostly influenced by the programming language C.",
  Whatshouldyoureallyknow:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec mollis ac augue eget pellentesque. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Donec velit tortor, varius sed lorem a, dapibus fringilla odio. Aenean tristique nibh nisi, non viverra purus bibendum vel. Ut dapibus mauris nec consectetur imperdiet. Nam vel auctor enim, quis congue ipsum. Ut id ante vel eros semper interdum sed et dui.",
  JavascriptandJava:
    "JavaScript is a lightweight programming language(“scripting language”) and used to make web pages interactive. It can insert dynamic text into HTML.JavaScript is also known as browser’s language. JavaScript(JS) is not similar or related to Java. Both the languages have a C like a syntax and are widely used in client-side Web applications, but there are few similarities only.Java is an object-oriented programming language and have virtual machine platform that allows you to create compiled programs that run on nearly every platform. Java promised, “Write Once, Run Anywhere”."
};

loadContent("introduction");

function loadContent(liItems) {
  console.log(allContent[liItems]);
  document.getElementsByClassName("col-md-8")[0].innerHTML =
    allContent[liItems];
}
