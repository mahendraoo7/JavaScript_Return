/* 
//    DOM (document object Model)
  
      console.dir(window.document)

                                                     window
                                                      
                                                   A document
     
                                                    1  html
                                                 
                        (I)  head                                                   (II)  body
                                                          
                                                                          
         (I.1) meta    (I.2) titile     (I.3)link                (II.1)div                            (II.2)script
         

                                                 (II.1.i)img (II.1.ii)h1  (II.1.iii)p  (II.1.iv)div         
  



    dom : dom is provide access beetwen html and js        
        : Use for dynamic changes or manipulation

   
        //  Dom Access to Element

         documnet.getElementByID("idname");     :
         documnet.getElementByClassName("Classname");
         document.getElementByTagName("p");

           
         document.QuerySelector("myId/myClass/tag")     : return first Element

         document.QuerySelectorAll("myId/myClass/tag")  :  return a NodeList    

         document.body.firstChild;
         document.QuerySelector("div").children;




        //  DOM Properties : to get and set

         tagName : return tags for element nodes
         innerText : return the text content of Element and its children
         innerHTML : return the plain text or HTML constent in HTML
         textContent : return textual content even for hidden elements 


*/    