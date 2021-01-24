angular.module("resume", []).

factory("LanguagesService", () => {
  return {
    languages: ["HTML", "CSS", "Javascript"] };

}).

controller("LanguagesCtrl", ($scope, LanguagesService) => {
  $scope.languages = LanguagesService.languages;
}).

factory("ToolsService", () => {
  return {
    toolTypes: [{
      "name": "CSS",
      "tools": ["LESS", "SASS", "Bootstrap"] },
    {
      "name": "JS",
      "tools": ["React", "Angular", "jQuery", "KnockoutJS"] },
    {
      "name": "Source Control",
      "tools": ["Git", "SVN", "Mercurial"] },
    {
      "name": "Native Apps",
      "tools": ["React Native", "Cordova/PhoneGap", "Ionic", "ngCordova"] }] };


}).

controller("ToolsCtrl", ($scope, ToolsService) => {
  $scope.toolTypes = ToolsService.toolTypes;
}).

factory("ClientsService", () => {
  return {
    clients: [{
      "name": "TOURRS",
      "url": "http://tourrs.com",
      "startDate": "April, 2015",
      "endDate": "June, 2016",
      "service": "I was hired as a contractor to help build out the MVP for the TOURRS app.",
      "highlights": ["Used Ionic 1 and Cordova to tie into the device's hardware", "Wrote the local database storage using PouchDB", "Used Parse as a server-side solution to store all of the data", "Worked in a highly agile, interative process with the design team"] },
    {
      "name": "Walmart Labs",
      "url": "http://walmart.com",
      "startDate": "April, 2015",
      "endDate": "November, 2015",
      "service": "I was hired as a contractor to help build out the new mobile site for Sam's Club.",
      "highlights": ["Wrote lots of the HTML/CSS/JS", "Worked with new ES6 patterns (babel transpiler)", "Implemented Angular2 component patterns as best as possible for Angular 1.2", "Worked closes with UX team to help make design decisions"] },
    {
      "name": "Intuitive Company",
      "url": "http://intuitivecompany.com",
      "startDate": "May, 2012",
      "endDate": "Present",
      "service": "My team and I provide front-end development ranging from HTML/CSS all the way through the JS development for a wide range of Intuitive's clients. I work with their developers and designers on and off-site to build out their projects.",
      "highlights": ["Wrote foundation AngularJS for a medical and education application", "Established CSS patterns using LESS", "Built out native/non-native responsive layouts", "Used jQuery/jQuery Mobile on financial institution websites", "Used standard libraries such as Normalize.css, Bootstrap, Font Awesome when appropriate"] },
    {
      "name": "Reactor Labs",
      "url": "http://www.reactor-labs.com/",
      "startDate": "July, 2014",
      "endDate": "October, 2014",
      "service": "I worked with Jeremiah, Brad, and Tyler over at Reactor Labs helping them build out the front end for the new mobile version of Uniqlo.",
      "highlights": ["Wrote all of the HTML/CSS (SCSS)", "Built out the site using lots of directives", "Created a style guide to give to client to maintain through CMS", "Tested on Android 2.3 and up", "Used the Ionic Framework"] },
    {
      "name": "Adoptive",
      "url": "http://adoptive.co",
      "startDate": "February, 2013",
      "endDate": "Present",
      "service": "My team and I provide front and back-end development for Adoptive and their clients.",
      "highlights": ["Built fully responsive sites in the entertainment industry running on Wordpress", "Worked with their developers to integrate a shopping cart system in Wordpress", "Setup foundation CSS best practices", "Built out the front-end of their public facing site"] },
    {
      "name": "Amazon",
      "url": "http://amazon.com",
      "startDate": "May, 2012",
      "endDate": "January, 2013",
      "service": "I was hired to build out the front-end of the new Amazon App Store in HTML5/CSS3. I was able to work offsite as well as onsite with their internal development team.",
      "highlights": ["Using SASS, I wrote nearly all of the cross-Android version CSS for the app store in an OOCSS format.", "Wrote all of the HTML to be flexible, scalable and responsive to the numerous Android devices on the market", "Wrote all of the CSS 'blind' - no inspector"],
      "testimonial": {
        "content": "I worked with Dan heavily on the launch of a major revision to one of our key products. His speed, skill, and professionalism are unparalleled - just point him at a goal and let him do his thing. We never would have made our aggressive launch dates without him. If you need a front-end web expert, this is your guy. I would work with him again in a heartbeat",
        "author": {
          "name": "Tyler Vano",
          "jobTitle": "Software Development Manager" } } },


    {
      "name": "GSI Interactive (now Ebay Enterprise)",
      "url": "http://ebayenterprise.com",
      "startDate": "June, 2009",
      "endDate": "January, 2012",
      "service": "I was hired as a front-end consultant to work on their new e-commerce CMS and all of their client stores: Toys 'R' Us, Timberland, Radioshack, Burberry, and more.",
      "highlights": [
      "Designed cross-browser and resolution-friendly website interfaces",
      "Managed all of the front-end code on their new $150 million CMS",
      "Specialized in writing SEO optimized code for their clients’ products"] },

    {
      "name": "StarCite",
      "url": "http://starcite.com",
      "startDate": "August, 2007",
      "endDate": "May, 2009",
      "service": "I was hired to build out the HTML/CSS for the new company intranet. I ended up staying and working as their in-house web developer.",
      "highlights": [
      "Wrote the HTML/CSS for their company intranet running on Confluence",
      "Built out numerous Flash and Gif animated ads",
      "Built out HTML/CSS emails to work in older versions of Outlook"] },

    {
      "name": "Concept 64, Inc.",
      "url": "http://concept64.com",
      "startDate": "May, 2005",
      "endDate": "September, 2006",
      "service": "I was the Co-founder/Creative Director of a startup web development company with Ryan Scheuermann",
      "highlights": [
      "Worked with Empathy Lab on designing their Fuji Bikes for Women portal",
      "Designed numerous sites to run on Wordpress"] }] };



}).

controller("ClientsCtrl", ($scope, ClientsService) => {
  $scope.clients = ClientsService.clients;
});