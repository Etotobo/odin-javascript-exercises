const findTheOldest = function(people) {
    let oldest = people.sort((a, b) => {
        a.yearOfDeath = typeof(a.yearOfDeath) === "number" ? a.yearOfDeath : new Date().getFullYear();
        b.yearOfDeath = typeof(b.yearOfDeath) === "number" ? b.yearOfDeath : new Date().getFullYear();
        return (b.yearOfDeath - b.yearOfBirth) - (a.yearOfDeath - a.yearOfBirth);
    });
    return oldest[0];
};

// Do not edit below this line
module.exports = findTheOldest;
