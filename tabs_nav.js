/*
		(function() {

		   // The Tabs component.
		   
		  var tabs = function (options) {

		    var el = document.querySelector(options.el);
		    var tabNavigationLinks = el.querySelectorAll(options.tabNavigationLinks);
		    var tabContentContainers = el.querySelectorAll(options.tabContentContainers);
		    var activeIndex = 0;
		    var initCalled = false;

		    
		      //Initializes the component by attaching event listeners to each of the nav items.
		   
		    var init = function() {
		      if (!initCalled) {
		        initCalled = true;

		        for (var i = 0; i < tabNavigationLinks.length; i++) {
		          var link = tabNavigationLinks[i];
		          handleClick(link, i);
		        }
		      }
		    };

		     //Handles click event listeners on each of the links in the tab navigation.
		     
		    var handleClick = function(link, index) {
		      link.addEventListener('click', function(e) {
		        e.preventDefault();
		        goToTab(index);
		      });
		    };

		     //Goes to a specific tab based on index.

		    var goToTab = function(index) {
		      if (index !== activeIndex && index >= 0 && index <= tabNavigationLinks.length) {
		        tabNavigationLinks[activeIndex].classList.remove('is-active');
		        tabNavigationLinks[index].classList.add('is-active');
		        tabContentContainers[activeIndex].classList.remove('is-active');
		        tabContentContainers[index].classList.add('is-active');
		        activeIndex = index;
		        activateContent(index);
		      }
		    };

		    var activateContent = function (index){

				for (i=0; i<userChoice.length; i++){
					userChoice.pop();
				}

				switch (index){
		    		
		    		case 0 : document.getElementById("info").innerHTML = "You are inside 'Places to visit' !"; 
		    				 break;
		    		case 1 : userChoice.push('lodging'); 
		    				 document.getElementById("hotels").innerHTML = "You are inside 'Hotels tab' !"; 
		    				 break;
		    		case 2 : userChoice.push('restaurant', 'cafe');
		    				 document.getElementById("restaurants").innerHTML = "You are inside 'Restaurants tab' !"; 
		    				 break;
		    		case 3 : userChoice.push('store'); 
		    				 document.getElementById("store").innerHTML = "You are inside 'Stores tab' !"; 
		    				 break;
		    		case 4 : userChoice.push('park'); 
		    				 document.getElementById("rec").innerHTML = "You are inside 'News tab' !"; 
		    				 break;
		    	}

		   	loadMapContents (userChoice);
		    
		     // Returns init and goToTab 
		    return {
		    	init: init,
		      	goToTab: goToTab
		    };

		  };
 
		   // Attach to global namespace		   
		  window.tabs = tabs;

		})();*/

		

		(function() {

		   // The Tabs component.
		   
		  var tabs = function (options) {

		    var el = document.querySelector(options.el);
		    var tabNavigationLinks = el.querySelectorAll(options.tabNavigationLinks);
		    var tabContentContainers = el.querySelectorAll(options.tabContentContainers);
		    var activeIndex = 0;
		    var initCalled = false;

		    
		      //Initializes the component by attaching event listeners to each of the nav items.
		   
		    var init = function() {
		      if (!initCalled) {
		        initCalled = true;

		        for (var i = 0; i < tabNavigationLinks.length; i++) {
		          var link = tabNavigationLinks[i];
		          handleClick(link, i);
		        }
		      }
		    };

		     //Handles click event listeners on each of the links in the tab navigation.
		     
		    var handleClick = function(link, index) {
		      link.addEventListener('click', function(e) {
		        e.preventDefault();
		        goToTab(index);
		      });
		    };

		     //Goes to a specific tab based on index.

		    var goToTab = function(index) {
		      if (index !== activeIndex && index >= 0 && index <= tabNavigationLinks.length) {
		        tabNavigationLinks[activeIndex].classList.remove('is-active');
		        tabNavigationLinks[index].classList.add('is-active');
		        tabContentContainers[activeIndex].classList.remove('is-active');
		        tabContentContainers[index].classList.add('is-active');
		        activeIndex = index;
		        activateContent(index);
		      }
		    };

		    var activateContent = function (index){
/*
		    	switch (index){
		    		
		    		case 0 : document.getElementById("info").innerHTML = "You are inside 'Places to visit' !"; 
		    				 break;
		    		case 1 : userChoice ='lodging'; 
		    				 document.getElementById("hotels").innerHTML = "You are inside 'Hotels tab' !"; 
		    				 break;
		    		case 2 : userChoice = 'restaurant'; 
		    				 document.getElementById("restaurants").innerHTML = "You are inside 'Restaurants tab' !"; 
		    				 break;
		    		case 3 : userChoice = 'store'; 
		    				 document.getElementById("store").innerHTML = "You are inside 'Stores tab' !"; 
		    				 break;
		    		case 4 : document.getElementById("news").innerHTML = "You are inside 'News tab' !"; 
		    				 break;
		    	}
*/

			for (i=0; i<userChoice.length; i++){
				userChoice.pop();
			}

			switch (index){
		    		
		    		case 0 : document.getElementById("info").innerHTML = "You are inside 'Places to visit' !"; 
		    				 break;
		    		case 1 : userChoice.push('lodging'); 
		    				 document.getElementById("hotels").innerHTML = "You are inside 'Hotels tab' !"; 
		    				 break;
		    		case 2 : userChoice.push('restaurant');
		    				 userChoice.push('cafe');
		    				 document.getElementById("restaurants").innerHTML = "You are inside 'Restaurants tab' !"; 
		    				 break;
		    		case 3 : userChoice.push('store'); 
		    				 document.getElementById("store").innerHTML = "You are inside 'Stores tab' !"; 
		    				 break;
		    		case 4 : document.getElementById("news").innerHTML = "You are inside 'News tab' !"; 
		    				 break;
		    	}

		    	loadMapContents (userChoice);
		    }
		    
		     // Returns init and goToTab 
		    return {
		      init: init,
		      goToTab: goToTab
		    };

		  };
 
		   // Attach to global namespace		   
		  window.tabs = tabs;

		})();
