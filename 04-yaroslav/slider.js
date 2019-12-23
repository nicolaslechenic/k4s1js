
                let wrapper1 = document.getElementById("wrapper1");
                let wrapper2 = document.getElementById("wrapper2");
                let wrapper3 = document.getElementById("wrapper3");
                let images = ["images/nanny.jpg", "images/diy.jpg", "images/clean.jpg", "images/it.jpg", "images/image5.jpg" ];
                let currentImageIndex = 0;
                let leftButton = document.getElementById("left-arrow");
                let rightButton = document.getElementById("right-arrow");
                wrapper1.innerHTML = '<img src = "' + images[currentImageIndex] + '" />';
                wrapper2.innerHTML = '<img src = "' + images[currentImageIndex + 1] + '" />';
                wrapper3.innerHTML = '<img src = "' + images[currentImageIndex + 2] + '" />';
                
                let nLeft = images.length - 3;
                let nRight = images.length - 2;
                
                leftButton.addEventListener("click", function()
                {
                  if (currentImageIndex < nLeft && currentImageIndex !== nLeft)
                  // if (currentImageIndex < nLeft )
                    {
                        currentImageIndex ++;
                        wrapper3.innerHTML = '<img src = "' + images[currentImageIndex  + 2] + '" />';
                        wrapper2.innerHTML = '<img src = "' + images[currentImageIndex  + 1] + '" />';
                        wrapper1.innerHTML = '<img src = "' + images[currentImageIndex] + '" />';
                        
                        console.log ("not 0")
                    }
                    else if (currentImageIndex == nLeft)
                    {
                        currentImageIndex = 0;
                        wrapper3.innerHTML = '<img src = "' + images[currentImageIndex  + 2] + '" />';
                        wrapper2.innerHTML = '<img src = "' + images[currentImageIndex  + 1] + '" />';
                        wrapper1.innerHTML = '<img src = "' + images[currentImageIndex] + '" />';
                        console.log ("is 0")
                    }
                  }); 
                    rightButton.addEventListener("click", function()
                {
                  if (currentImageIndex == 0)
                    {
                        
                        wrapper3.innerHTML = '<img src = "' + images[currentImageIndex +      2] + '" />';
                        wrapper2.innerHTML = '<img src = "' + images[currentImageIndex + 1] + '" />';
                        wrapper1.innerHTML = '<img src = "' + images[currentImageIndex] + '" />';
                        console.log ( currentImageIndex)
                        console.log ("right is 0")
                    }
                  else if (currentImageIndex < nRight && currentImageIndex !== 0)
                    {
                        currentImageIndex --;
                        wrapper3.innerHTML = '<img src = "' + images[currentImageIndex  + 2] + '" />';
                        wrapper2.innerHTML = '<img src = "' + images[currentImageIndex  + 1] + '" />';
                        wrapper1.innerHTML = '<img src = "' + images[currentImageIndex] + '" />';
                        
                        console.log ("right not 0")
                    }
                    
                    

                }); 