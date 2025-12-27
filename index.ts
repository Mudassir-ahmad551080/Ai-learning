import readline from 'node:readline/promises';


async function main() {

    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    });
    
    while(true){
         const UserInput = await rl.question('YOU:');
         if(UserInput==='/bye'){
            break;
         }
          console.log("you said", UserInput)
     }

    rl.close();
}

main();

