// immediately invoked function expression 

(function chai (){
    console.log(`db connected `);
}

// chai()
)() ;

(
    (name) => {
        console.log(`db connected for ${name}`);
    }
)('abhi')