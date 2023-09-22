var myCoffee = {
    flavor: "vanilla",
    temp: "warm",
    ounces: 100,
    milk: true,

    reheat: function() {
        if(myCoffee.temp === "cold")
        {
            myCoffee.temp = "warm";
            alert("Your coffee is warm!")
        }
    }

};

myCoffee.temp = "cold";

myCoffee.reheat();