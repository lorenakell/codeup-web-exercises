

// Question 2

const usersWhoKnowAtLeastThreeLanguaes = users.filter((user) => user.languages.length >= 3);

console.log(usersWhoKnowAtLeastThreeLanguaes);

// Question 3
const emails = users.map((user) => user.email);

console.log(emails);

// Question 4

const totalExp = users.reduce((total, user) => total + user.yearsOfExperience, 0);

const average = users.reduce((ave, user) => ave + user.yearsOfExperience/users.length, 0);

console.log(average);

// Question 5

const longestEmail = users.reduce((email, user) => return (email.length > user.email.length) ? email : user.email, "");

console.log(longestEmail);

// Question 6

const intro = users.reduce((str, user, index) => {
    if (index === users.length - 1) {
        return '${str}and ${user.name}.';
    } else {
        return `${str}${user.name}, `;
    }
}, "Your instructors are: ");

console.log(intro);



const users = [
    {
        id: 1,
        name: 'ryan',
        email: 'ryan@codeup.com',
        languages: ['clojure', 'javascript'],
        yearsOfExperience: 5
    },
    {
        id: 2,
        name: 'luis',
        email: 'luis@codeup.com',
        languages: ['java', 'scala', 'php'],
        yearsOfExperience: 6
    },
    {
        id: 3,
        name: 'zach',
        email: 'zach@codeup.com',
        languages: ['javascript', 'bash'],
        yearsOfExperience: 7
    },
    {
        id: 4,
        name: 'fernando',
        email: 'fernando@codeup.com',
        languages: ['java', 'php', 'sql'],
        yearsOfExperience: 8
    },
    {
        id: 5,
        name: 'justin',
        email: 'justin@codeup.com',
        languages: ['html', 'css', 'javascript', 'php'],
        yearsOfExperience: 9
    }
];

//  BONUS

const uniqueLanguages = users.reduce((langs, user) => {
    for (let lang of user.languages) {
        if (!langs.includes(lang)) {
            langs.push(lang);
        }
    }
        return langs;
}, []);

console.log(uniqueLanguages);
