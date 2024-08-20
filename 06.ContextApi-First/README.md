Use of Context API :-

It provides a means to share values like state, functions, or any data across the component tree 
without passing props down manually at every level.

Example - like your app.jsx is asking for a data to a child class , 
          using manual props we have to pass properties to its parent class as well then to its child like in order. 
          But context Api provide direct access to the children class skipping these steps.

It is used by applying a hook called useContext(SomeContext). 