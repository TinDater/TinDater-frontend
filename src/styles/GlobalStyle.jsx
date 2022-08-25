import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
*, *::before, *::after {
    box-sizing: border-box;
    margin : 0;
    padding: 0;
    font-family: 'Elice Digital Coding', 'monospace';
}
a {
    text-decoration : none;
    color: black;
}
button {
cursor: pointer;
}
body{
    margin-top: 0px;
    background:url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQTTw8nR35RTqgFlZErljkykHRXJIJ0JcZUGg&usqp=CAU') no-repeat center center fixed;
    -webkit-background-size: cover;
    -moz-background-size: cover;
    -o-background-size: cover;
    background-size: cover;
}
:root {
    --black : #333333;
    --yellow : #adad3e;
    --white: #ffffff;
    --grey : #dddddd;
    --greyD : #aaaaaa;
    --green : #00B98D;
    --red :#F85151;
    --blueL : #65a7e6;
    --blue : #0085FF;
    --blueD: #134c81
}
`;

export default GlobalStyle;
