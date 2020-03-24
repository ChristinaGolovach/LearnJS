//https://learn.javascript.ru/async-await

//task //https://learn.javascript.ru/task/rewrite-async
async function loadJson1(url) {
    try {
        const response = await fetch(url);

        if (response.status == 200) {
            return await response.json();
        } else {
            throw new Error(response.status);
        }

    } catch(err) {
        alert(err);
    }

}
  
loadJson1('no-such-user.json');


//task https://learn.javascript.ru/task/rewrite-async-2
class HttpError extends Error {
    constructor(response) {
        super(`${response.status} for ${response.url}`);
        this.name = 'HttpError';
        this.response = response;
    }
}

async function loadJson(url) {
    const response = await fetch(url);

    if (response.status === 200) {
        return await response.json();
    } else {
        throw new HttpError('response');
    }
}

async function demoGithubUser() {
    while(true) {
        let name = prompt("enter login?", "iliakan");
        try {
            return await loadJson(`https://api.github.com/users/${name}`);     
        } catch (err) {
            // console.log(err); TODO ASK
            if (err instanceof HttpError && err.response.status == 404) {
                alert("User does not exist. Please, retry");    
            } else {
                throw err;
            }
        }
    }
}

(async () => {
    const user = await demoGithubUser();
    alert(`Full name: ${user.name}.`);
})();


//task https://learn.javascript.ru/task/async-from-regular
async function wait() {
    await new Promise(resolve => setTimeout(resolve, 1000));
  
    return 10;
}
  
function f() {
    (async () => {
        const result = await wait();
        console.log(`Result of task 3 is ${result}`);
    })();

    //or as in the answer  
    //wait().then(result => alert(result));
}

f();