let counter = 0;

document.querySelector(".btn-more").addEventListener('click', function() {
    ++counter
    document.querySelector(".counter").innerHTML = counter;
})

document.querySelector(".btn-less").addEventListener('click', function() {
    --counter
    

    if (counter<0) {
        counter = 0;
        document.querySelector(".counter").innerHTML = counter;
    }

    document.querySelector(".counter").innerHTML = counter;
})

document.querySelector(".btn-reset").addEventListener('click', function() {
    counter = 0;
    document.querySelector(".counter").innerHTML = counter;
    
})

