import React from 'react';

const TOKEN = "Bearer eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYmYiOjE1MjAxNzIxNjEsImV4cCI6MTgzNTUzMjE2MSwiaXNzIjoiaHR0cDovL2xvY2FsaG9zdDoxNTUzNiIsImF1ZCI6WyJodHRwOi8vbG9jYWxob3N0OjE1NTM2L3Jlc291cmNlcyIsIm5vcF9hcGkiXSwiY2xpZW50X2lkIjoiMjExMzA4MzgtMzgxZS00OWIwLThjNWMtYTEwZDI0ZTg5YmZkIiwic3ViIjoiMjExMzA4MzgtMzgxZS00OWIwLThjNWMtYTEwZDI0ZTg5YmZkIiwiYXV0aF90aW1lIjoxNTIwMTcyMTYxLCJpZHAiOiJsb2NhbCIsInNjb3BlIjpbIm5vcF9hcGkiLCJvZmZsaW5lX2FjY2VzcyJdLCJhbXIiOlsicHdkIl19.Ic1aEOHgqhlbp5XCweaC_k_V7w3ZFdTABoFQ8ba5Nih_kwqQ825fCjomT6p50HZ_Fb2zr47NEegwJmozMC2GAd-8LC9YHkcE01pOoP5dkrmAHWJsxTA-Cq-XFcJOolhfgIR59X5BNShGkEbUd3sdqXs540Mu6RLELugPg2Ukxl7pgVx54SMIr7pzDUuToa98RzghfxlIhFhdcjncbYgjdLL9YdwRV7UTJ4VEyWdfhnk-M40-YWtIfi86LXrFFL7eFm2YXTGmIyFzrTGKUe6kGI7EcSTf8glzBfRNcPTX5IvKRC2jhOiBa5a-v6e0-QxtaCKvGtU0nvNKiuSZjJaOYg";

const header = {
    'Authorization': TOKEN,
    'Content-Type': 'application/json',
    Accept: 'application/json'
}

async function PostData() {
    const Response = await fetch("http://www.fewabazar.com/api/products/", {
        method: 'GET',
        headers: header
    });
    const json = await Response.json();
    return json;
}


export async function UserSearch(userinput) {
    const Response = await fetch(`http://www.fewabazar.com/api/searchautocomplete?term=${userinput}`, {
        method: 'GET',
        headers: header
    });
    const json = await Response.json();
    return json;
    // alert(json)
}
export default PostData;