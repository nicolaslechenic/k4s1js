/* get url, cut everything before hash, and assign index 1 to currentPageHref*/
                  let currentPagePath = window.location.href;
                  let currentPageString = currentPagePath.split("#");
                  let currentPageHref = currentPageString[1];
                  let links = document.getElementsByClassName("navLink");
                                  
                    if (currentPageString.length > 1)
                    {
                      /* add class active to menu with id 1+currentPageHref I had to add 1 to id */
                      document.getElementById(1+currentPageHref).className += " active";
                    }
                    else
                    {
                      document.getElementById("index").className += " active";
                    }
                    window.addEventListener("hashchange", function () 
                  {
                    location.reload();
                    
                    });